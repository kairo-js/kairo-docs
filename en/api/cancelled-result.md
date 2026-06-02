# CancelledResult

`import type { CancelledResult } from '@kairo-js/router'`

The return value of `router.request()` when the call is cancelled. The Promise resolves to this value rather than rejecting.

```typescript
type CancelledResult = {
  readonly cancelled: true
  readonly reason:
    | 'ADDON_NOT_FOUND'
    | 'ADDON_INACTIVE'
    | 'ADDON_UNRESOLVED'
    | 'CANCELLED_BY_HOOK'
}
```

## Fields

| Field | Type | Description |
|---|---|---|
| `cancelled` | `true` | Always `true`. Use as a type guard. |
| `reason` | `string` | The reason the call was cancelled. |

## reason values

| reason | Description |
|---|---|
| `ADDON_NOT_FOUND` | The target addonId does not exist in the routing table. |
| `ADDON_INACTIVE` | The target addon is in an inactive state. |
| `ADDON_UNRESOLVED` | The target addon is in an unresolved state (dependencies not yet resolved). |
| `CANCELLED_BY_HOOK` | A `before` hook called `ctx.cancel()` to cancel the call. |

## Usage

```typescript
const result = await router.request<{ balance: number }>(
  'economy-addon',
  'economy/getBalance',
  { playerId: 'abc123' },
)

if ('cancelled' in result) {
  switch (result.reason) {
    case 'ADDON_NOT_FOUND':
      console.warn('economy-addon not found')
      break
    case 'ADDON_INACTIVE':
      console.warn('economy-addon is currently inactive')
      break
    case 'CANCELLED_BY_HOOK':
      console.warn('Call was cancelled by a hook')
      break
    default:
      console.warn('Call cancelled:', result.reason)
  }
} else {
  console.log('Balance:', result.balance)
}
```
