# HookRollbackContext

`import type { HookRollbackContext } from '@kairo-js/router'`

The context object passed to `rollback` hook handlers (`HookOptions.rollback`). Only fires when a `before` hook throws.

```typescript
interface HookRollbackContext<TArgs> {
  readonly rollbackData: unknown
  readonly currentArgsSnapshot: DeepReadonly<TArgs>
  readonly callerAddonId: string
}
```

## Fields

### callerAddonId

`readonly callerAddonId: string`

The addonId of the caller (read-only).

---

### currentArgsSnapshot

`readonly currentArgsSnapshot:` [`DeepReadonly`](/api/deep-readonly)`<TArgs>`

Snapshot of args at this rollback's execution point. Do not mutate. Return a new object instead.

---

### rollbackData

`readonly rollbackData: unknown`

The value stored via `setRollbackData()`. `undefined` if not set.

---

## Return value

The rollback function's return type is `Promise<TArgs | void>`.

- Returning `TArgs`: subsequent rollback handlers receive that value as `currentArgsSnapshot`.
- Returning `void`: no change is made to args.

## Examples

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
