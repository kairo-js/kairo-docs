# HookOptions

`import type { HookOptions } from '@kairo-js/router'`

The options object passed to `ev.api.hook()`.

```typescript
type HookOptions<TArgs, TReturn> = {
  priority?: number
  modes?: ReadonlyArray<'send' | 'request'>
  before?: (ctx: BeforeHookContext<TArgs, TReturn>) => Promise<void>
  after?: (ctx: AfterHookContext<TArgs, TReturn>) => Promise<void>
  rollback?: (ctx: HookRollbackContext<TArgs>) => Promise<TArgs | void>
}
```

## Fields

### after

`after?: (ctx: AfterHookContext<TArgs, TReturn>) => Promise<void>`

Runs after the handler (`request` only). Can mutate result. Perform pure transforms only.

---

### before

`before?: (ctx: BeforeHookContext<TArgs, TReturn>) => Promise<void>`

Runs before the handler. Can mutate args or cancel the call.

---

### modes

`modes?: ReadonlyArray<'send' | 'request'>`

Call types to apply this hook to. Defaults to `["request"]` if `after` is present; `["send", "request"]` if `before` only.

---

### priority

`priority?: number`

Execution order; lower = earlier. Default `0`. 32-bit signed integer.

---

### rollback

`rollback?: (ctx: HookRollbackContext<TArgs>) => Promise<TArgs | void>`

Runs only when a `before` hook throws. Optional.

---

::: warning
At least one of `before` or `after` is required. Omitting both throws immediately.
:::

## Execution order (onion model)

```
before: -10 → 0(B) → 0(C) → 5 → [handler] → after: 5 → 0(C) → 0(B) → -10
```

`after` runs in the exact reverse order of `before` execution.

## Examples

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
