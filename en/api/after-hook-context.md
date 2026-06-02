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

| Field | Description |
|---|---|
| `args` | Read-only. TypeScript enforces this at the shallow level only; deep mutation is also a spec violation. |
| `result` | Mutable. Perform pure transforms only — no external side effects. |
| `callerAddonId` | The addonId of the caller (read-only). |

## Usage

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
