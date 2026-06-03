# CanceledResult

`import type { CanceledResult } from '@kairo-js/router'`

The return value of `router.request()` when the call is cancelled. The Promise resolves to this value rather than rejecting.

```typescript
interface CanceledResult {
  readonly canceled: true
  readonly reason:
    | 'ADDON_NOT_FOUND'
    | 'ADDON_INACTIVE'
    | 'ADDON_UNRESOLVED'
    | 'CANCELED_BY_HOOK'
}
```

## Fields

### cancelled

`readonly canceled: true`

Always `true`. Use as a type guard.

---

### reason

`readonly reason: string`

The reason the call was cancelled.

---

## reason values

| reason | Description |
|---|---|
| `ADDON_NOT_FOUND` | The target addonId does not exist in the routing table. |
| `ADDON_INACTIVE` | The target addon is in an inactive state. |
| `ADDON_UNRESOLVED` | The target addon is in an unresolved state (dependencies not yet resolved). |
| `CANCELED_BY_HOOK` | A `before` hook called `ctx.cancel()` to cancel the call. |

## Examples

```typescript
const result = await router.request<{ balance: number }>(
  'economy-addon',
  'economy/getBalance',
  { playerId: 'abc123' },
)

if ('canceled' in result) {
  switch (result.reason) {
    case 'ADDON_NOT_FOUND':
      console.warn('economy-addon not found')
      break
    case 'ADDON_INACTIVE':
      console.warn('economy-addon is currently inactive')
      break
    case 'CANCELED_BY_HOOK':
      console.warn('Call was cancelled by a hook')
      break
    default:
      console.warn('Call cancelled:', result.reason)
  }
} else {
  console.log('Balance:', result.balance)
}
```
