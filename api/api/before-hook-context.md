# BeforeHookContext

`import type { BeforeHookContext } from '@kairo-js/router'`

The context object passed to `before` hook handlers (`HookOptions.before`).

```typescript
type BeforeHookContext<TArgs, TReturn> = {
  args: TArgs
  readonly callerAddonId: string
  cancel(result?: TReturn): never
  setRollbackData(data: unknown): void
}
```

## Fields

### args

`args: TArgs`

Mutable. Mutations propagate to subsequent hooks and the handler.

---

### callerAddonId

`readonly callerAddonId: string`

The addonId of the caller (read-only).

---

### cancel(result?)

`cancel(result?: TReturn): never`

With `result`: skip the handler and return `result` (short-circuit). Without `result`: return `CANCELLED_BY_HOOK`. The `never` return type means TypeScript marks code after this call as unreachable. Always `return` immediately after calling `cancel()`.

---

### setRollbackData(data)

`setRollbackData(data: unknown): void`

Stores data for use in `rollback` if this hook later needs to undo side effects.

---

## Usage

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
