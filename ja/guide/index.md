# はじめに

## kairo のインストール

**kairo** ビヘイビアーパックをワールドに追加します。これが他のすべてのアドオン間の通信を仲介します。

> kairo は [GitHub Releases](https://github.com/kairo-js/kairo/releases) からダウンロードできます。

## kairo-router を使う

自分のアドオンに `kairo-router` を追加することで、他のアドオンと通信できるようになります。

### インストール

```bash
pnpm add @kairo-js/router
```

### startup イベントで API を宣言する

API の提供・フックの登録はすべて `router.beforeEvents.startup` 内で行います。

```typescript
import { router } from '@kairo-js/router'

router.beforeEvents.startup.subscribe((ev) => {
  // 自アドオンが提供する API を登録
  ev.api.register<{ playerId: string }, { balance: number }>(
    'economy/getBalance',
    async ({ playerId }) => ({ balance: 100 }),
  )
})
```

### API を呼び出す

```typescript
// fire-and-forget（返答を待たない）
router.send('economy-addon', 'onTransaction', { amount: 50 })

// 結果を待つ
const result = await router.request<{ balance: number }>(
  'economy-addon',
  'getBalance',
  { playerId: '...' },
)

if ('canceled' in result) {
  console.log(result.reason)
} else {
  console.log(result.balance)
}
```

詳細は [kairo-router API リファレンス](/ja/api/kairo-router) を参照してください。
