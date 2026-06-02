# HookRollbackContext

`import type { HookRollbackContext } from '@kairo-js/router'`

rollback フックのコンテキストオブジェクトです。before フックが例外をスローした場合のみ発火します。`HookOptions.rollback` のハンドラに渡されます。

```typescript
type HookRollbackContext<TArgs> = {
  readonly rollbackData: unknown
  readonly currentArgsSnapshot: DeepReadonly<TArgs>
  readonly callerAddonId: string
}
```

## フィールド

### rollbackData

`readonly rollbackData: unknown`

`setRollbackData()` で格納した値。未設定の場合は `undefined`。

---

### currentArgsSnapshot

`readonly currentArgsSnapshot: DeepReadonly<TArgs>`

この rollback 実行時点の args のスナップショット。mutation 禁止。新しいオブジェクトとして返すこと。

---

### callerAddonId

`readonly callerAddonId: string`

呼び出し元アドオンの addonId（読み取り専用）。

---

## 返り値について

rollback 関数の返り値の型は `Promise<TArgs | void>` です。

- `TArgs` を返した場合: 後続の rollback ハンドラが `currentArgsSnapshot` としてその値を受け取ります。
- `void` を返した場合: args に変更は加えられません。

## 使用例

```typescript
ev.api.hook('economy-addon', 'economy/deduct', {
  before: async (ctx) => {
    const previous = await getBalance(ctx.args.playerId)
    ctx.setRollbackData({ previousBalance: previous })
    await deductBalance(ctx.args.playerId, ctx.args.amount)
  },
  rollback: async (ctx) => {
    const { previousBalance } = ctx.rollbackData as { previousBalance: number }
    await restoreBalance(ctx.currentArgsSnapshot.playerId, previousBalance)
  },
})
```
