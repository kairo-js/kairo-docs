# はじめに

## 対応 Minecraft Script API バージョン

Kairo は Minecraft の**安定版** Script API を必要とします:

- `@minecraft/server` **2.0.0 以降**
- `@minecraft/server-ui` **2.0.0 以降**

2.0.0 より前のバージョンは初期化モデルが異なり（例: `WorldLoad` の代わりに `WorldInitialize` が使われていた）、サポートされません。

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

## 必須 dependencies

アドオンの `properties.ts` に `"kairo"` を必須 dependency として宣言する必要があります。記述がない場合、`router.init()` は即座にエラーをスローします。

```typescript
export const properties: AddonProperties = {
  id: 'my-addon',
  // ...
  dependencies: {
    kairo: '^1.0.0',
    // optional: 'kairo-database': '^2.0.0' — router.save/load/delete/has に必要
  },
}
```

## standalone モード

`router.init()` に `{ standalone: true }` を渡すと standalone 起動が有効になります。kairo がインストールされていない場合、必須 dependencies が `kairo` と `kairo-database` のみであれば自動的に起動します。kairo のライフサイクル管理をオプションとして利用したい単体アドオンに便利です。

詳細は [`RouterInitOptions`](/ja/api/router-init-options) を参照してください。

## 初期化タイミング

ワールドロード後、kairo は Discovery・Registration・Activation という独自の初期化フローを実行してから `addonActivate` を発火します。インストールされているアドオン数にもよりますが、**概ね 30〜50 tick** の遅延が発生します。

この遅延は意図的なものです。Minecraft Script API 2.0.0+ では WorldLoad 完了前に world 系のメソッドを呼ぶとエラーになる仕様がありますが、`addonActivate` はその代わりとなる安全シグナルです。`addonActivate` 以降であれば、world 系メソッドの呼び出しやアドオン間 API の利用が可能です。

```typescript
router.afterEvents.addonActivate.subscribe(() => {
  // ここから world 系メソッドの呼び出し・他アドオンの API 呼び出しが安全
})
```

::: tip
バニラの Script API アドオンに慣れている方は、`addonActivate` を `WorldLoad` の代わりとして捉えてください。追加の tick は kairo のハンドシェイクコストであり、無駄な待機ではありません。
:::
