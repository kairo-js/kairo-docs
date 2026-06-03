# AfterHookContext

`import type { AfterHookContext } from '@kairo-js/router'`

The context object passed to `after` hook handlers (`HookOptions.after`).

```typescript
type AfterHookContext<TArgs, TReturn> = {
  readonly args: TArgs
  result: TReturn
  readonly callerAddonId: string
}
```

## Fields

### args

`readonly args: TArgs`

Read-only. TypeScript enforces this at the shallow level only; deep mutation is also a spec violation.

---

### callerAddonId

`readonly callerAddonId: string`

The addonId of the caller (read-only).

---

### result

`result: TReturn`

Mutable. Perform pure transforms only — no external side effects.

---

## Examples

```typescript
ev.api.hook('economy-addon', 'economy/getBalance', {
  after: async (ctx) => {
    // Transform result (pure transform only)
    ctx.result = {
      ...ctx.result,
      balanceWithTax: ctx.result.balance * 0.9,
    }
  },
})
```
