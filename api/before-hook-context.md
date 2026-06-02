# BeforeHookContext

`import type { BeforeHookContext } from '@kairo-js/router'`

before フックのコンテキストオブジェクトです。`HookOptions.before` のハンドラに渡されます。

```typescript
type BeforeHookContext<TArgs, TReturn> = {
  args: TArgs
  readonly callerAddonId: string
  cancel(result?: TReturn): never
  setRollbackData(data: unknown): void
}
```

## フィールド

| フィールド | 説明 |
|---|---|
| `args` | 変更可能。改ざんすると後続フックおよびハンドラに反映される |
| `callerAddonId` | 呼び出し元アドオンの addonId（読み取り専用） |
| `cancel(result?)` | `result` あり: ハンドラをスキップして `result` を返す（ショートサーキット）。`result` なし: `CANCELLED_BY_HOOK` を返す。`never` 型のため TypeScript はこれ以降のコードを unreachable と判定する。呼び出し後は即 `return` すること |
| `setRollbackData(data)` | before フックが後でロールバックが必要になった場合に保存するデータを格納する |

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
