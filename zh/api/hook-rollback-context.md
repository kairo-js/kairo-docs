# HookRollbackContext

`import type { HookRollbackContext } from '@kairo-js/router'`

传递给 `rollback` 钩子处理器（`HookOptions.rollback`）的上下文对象。仅在某个 `before` 钩子抛出异常时触发。

```typescript
interface HookRollbackContext<TArgs> {
  readonly rollbackData: unknown
  readonly currentArgsSnapshot: DeepReadonly<TArgs>
  readonly callerAddonId: string
}
```

## 字段

### callerAddonId

`readonly callerAddonId: string`

调用方的 addonId（只读）。

---

### currentArgsSnapshot

`readonly currentArgsSnapshot:` [`DeepReadonly`](/zh/api/deep-readonly)`<TArgs>`

本次回滚执行时的参数快照。不得直接修改，请返回新对象。

---

### rollbackData

`readonly rollbackData: unknown`

通过 `setRollbackData()` 存储的值。未设置时为 `undefined`。

---

## 返回值

rollback 函数的返回类型为 `Promise<TArgs | void>`。

- 返回 `TArgs`：后续的 rollback 处理器将以该值作为 `currentArgsSnapshot` 接收。
- 返回 `void`：不对参数做任何修改。

## 用法

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
