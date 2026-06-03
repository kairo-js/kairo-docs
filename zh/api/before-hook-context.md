# BeforeHookContext

`import type { BeforeHookContext } from '@kairo-js/router'`

传递给 `before` 钩子处理器（`HookOptions.before`）的上下文对象。

```typescript
interface BeforeHookContext<TArgs, TReturn> {
  args: TArgs
  readonly callerAddonId: string
  cancel(result?: TReturn): never
  setRollbackData(data: unknown): void
}
```

## 字段

### args

`args: TArgs`

可变。修改会传播到后续钩子和处理器。

---

### callerAddonId

`readonly callerAddonId: string`

调用方的 addonId（只读）。

---

### cancel(result?)

`cancel(result?: TReturn): never`

传入 `result` 时：跳过处理器并返回 `result`（短路）。不传入 `result` 时：返回 `CANCELLED_BY_HOOK`。`never` 返回类型表示 TypeScript 会将此调用之后的代码标记为不可达。调用 `cancel()` 后应立即 `return`。

---

### setRollbackData(data)

`setRollbackData(data: unknown): void`

存储数据，供后续 `rollback` 撤销副作用时使用。

---

## 用法

```typescript
ev.api.hook('economy-addon', 'economy/getBalance', {
  before: async (ctx) => {
    // Mutate args
    ctx.args = { ...ctx.args, audited: true }

    // Short-circuit with cached result
    const cached = cache.get(ctx.args.playerId)
    if (cached) {
      ctx.cancel(cached) // return immediately after cancel()
      return
    }

    // Store data for rollback
    ctx.setRollbackData({ previousArgs: ctx.args })
  },
})
```
