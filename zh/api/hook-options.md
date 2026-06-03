# HookOptions

`import type { HookOptions } from '@kairo-js/router'`

传递给 `ev.api.hook()` 的选项对象。

```typescript
interface HookOptions<TArgs, TReturn> {
  priority?: number
  modes?: ReadonlyArray<'send' | 'request'>
  before?: (ctx: BeforeHookContext<TArgs, TReturn>) => Promise<void>
  after?: (ctx: AfterHookContext<TArgs, TReturn>) => Promise<void>
  rollback?: (ctx: HookRollbackContext<TArgs>) => Promise<TArgs | void>
}
```

## 字段

### after

`after?: (ctx: AfterHookContext<TArgs, TReturn>) => Promise<void>`

在处理器执行后运行（仅限 `request`）。可修改返回值，仅执行纯转换操作。接收 [`AfterHookContext`](/zh/api/after-hook-context)。

---

### before

`before?: (ctx: BeforeHookContext<TArgs, TReturn>) => Promise<void>`

在处理器执行前运行。可修改参数或取消调用。接收 [`BeforeHookContext`](/zh/api/before-hook-context)。

---

### modes

`modes?: ReadonlyArray<'send' | 'request'>`

此钩子适用的调用类型。若存在 `after`，默认为 `["request"]`；若仅有 `before`，默认为 `["send", "request"]`。

---

### priority

`priority?: number`

执行顺序，值越小越先执行。默认为 `0`，32 位有符号整数。

---

### rollback

`rollback?: (ctx: HookRollbackContext<TArgs>) => Promise<TArgs | void>`

仅当某个 `before` 钩子抛出异常时运行。可选。接收 [`HookRollbackContext`](/zh/api/hook-rollback-context)。

---

::: warning
`before` 和 `after` 至少需要提供一个。两者都省略会立即抛出异常。
:::

## 执行顺序（洋葱模型）

```
before: -10 → 0(B) → 0(C) → 5 → [handler] → after: 5 → 0(C) → 0(B) → -10
```

`after` 的执行顺序与 `before` 完全相反。

## 用法

```typescript
ev.api.hook<{ playerId: string }, { balance: number }>(
  'economy-addon',
  'economy/getBalance',
  {
    priority: -10,
    modes: ['request'],
    before: async (ctx) => {
      const cached = cache.get(ctx.args.playerId)
      if (cached) {
        ctx.cancel(cached)
        return
      }
    },
    after: async (ctx) => {
      cache.set(ctx.args.playerId, ctx.result)
    },
  },
)
```
