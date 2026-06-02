# 概要

**Kairo（回路）** は Minecraft Bedrock Edition の ScriptAPI を使って、複数のビヘイビアーパック間での通信・依存管理を実現するフレームワークです。

## kairo と kairo-router

Kairo は2つのコンポーネントから構成されています。

| コンポーネント | 役割 |
|---|---|
| **kairo** (`packs/kairo`) | ホスト側ビヘイビアーパック。ルーティング・依存解決・アドオンのライフサイクル管理を担う。 |
| **kairo-router** (`packages/kairo-router`) | ゲストアドオンが使用するライブラリ。kairo を通じて他のアドオンと通信する。 |

ゲストアドオンは `kairo-router` を組み込むだけでよく、ScriptEvent の詳細は意識する必要がありません。

## アドオン間通信の仕組み

Minecraft の ScriptAPI はグローバルな名前空間しかなく、アドオン間で直接関数呼び出しができません。kairo は ScriptEvent を使ったルーティング層を提供することで、アドオンが互いの API を呼び出せるようにします。

```
[アドオン A] ──router.request()──▶ [kairo] ──routing──▶ [アドオン B のハンドラ]
                                      │
                                   hook 実行
                                  (before / after)
```

呼び出し元は相手の `addonId` と API 名だけを知っていればよく、内部の識別子（kairoId）や ScriptEvent の詳細は意識しません。

## セットアップ

### 1. kairo をワールドに追加

`kairo` ビヘイビアーパックをワールドの最初のビヘイビアーパックとして追加します。

### 2. アドオンに kairo-router を組み込む

```bash
pnpm add @kairo-js/router
```

### 3. startup イベントで API を宣言する

```typescript
import { router } from '@kairo-js/router'

router.beforeEvents.startup.subscribe((ev) => {
  // API の提供を宣言
  ev.api.register<{ playerId: string }, { balance: number }>(
    'economy/getBalance',
    async ({ playerId }) => ({ balance: 100 }),
  )

  // 他アドオンの API へのフックを宣言
  ev.api.hook('other-addon', 'economy/deposit', {
    before: async (ctx) => {
      if (ctx.args.amount < 0) ctx.cancel()
    },
  })
})
```

### 4. API を呼び出す

```typescript
// fire-and-forget
router.send('economy-addon', 'onTransaction', { amount: 50 })

// 結果を待つ
const result = await router.request<{ balance: number }>(
  'economy-addon',
  'getBalance',
  { playerId: '...' },
)
if ('cancelled' in result) {
  console.log(result.reason)
} else {
  console.log(result.balance)
}
```
