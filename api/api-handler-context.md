# ApiHandlerContext

`import type { ApiHandlerContext } from '@kairo-js/router'`

The context object passed as the second argument to API handlers registered via `ev.api.register()`.

```typescript
interface ApiHandlerContext {
  readonly callerAddonId: string
}
```

## Fields

### callerAddonId

`readonly callerAddonId: string`

The addonId of the addon that called this API (read-only).

## Examples

```typescript
ev.api.register<{ amount: number }, void>(
  'economy/deduct',
  async ({ amount }, ctx) => {
    console.log(`Deduct ${amount} requested by ${ctx.callerAddonId}`)
  },
)
```
