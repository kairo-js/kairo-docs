# BeforeHookContext

`import type { BeforeHookContext } from '@kairo-js/router'`

before フックのコンテキストオブジェクトです。`HookOptions.before` のハンドラに渡されます。

```typescript
interface BeforeHookContext<TArgs, TReturn> {
  args: TArgs
  readonly callerAddonId: string
  cancel(result?: TReturn): never
  setRollbackData(data: unknown): void
}
```

## フィールド

### args

`args: TArgs`

変更可能。改ざんすると後続フックおよびハンドラに反映される。

---

### callerAddonId

`readonly callerAddonId: string`

呼び出し元アドオンの addonId（読み取り専用）。

---

### cancel(result?)

`cancel(result?: TReturn): never`

`result` あり: ハンドラをスキップして `result` を返す（ショートサーキット）。`result` なし: `CANCELED_BY_HOOK` を返す。`never` 型のため TypeScript はこれ以降のコードを unreachable と判定する。呼び出し後は即 `return` すること。

---

### setRollbackData(data)

`setRollbackData(data: unknown): void`

before フックが後でロールバックが必要になった場合に保存するデータを格納する。

---

## 使用例

```typescript
ev.api.hook('economy-addon', 'economy/getBalance', {
  before: async (ctx) => {
    // args の改ざん
    ctx.args = { ...ctx.args, audited: true }

    // キャッシュがあればショートサーキット
    const cached = cache.get(ctx.args.playerId)
    if (cached) {
      ctx.cancel(cached) // cancel() 後は即 return すること
      return
    }

    // ロールバック用データを保存
    ctx.setRollbackData({ previousArgs: ctx.args })
  },
})
```
