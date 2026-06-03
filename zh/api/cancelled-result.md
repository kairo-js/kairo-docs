# CancelledResult

`import type { CancelledResult } from '@kairo-js/router'`

调用被取消时 `router.request()` 的返回值。Promise 会 resolve 为此值，而非 reject。

```typescript
interface CancelledResult {
  readonly cancelled: true
  readonly reason:
    | 'ADDON_NOT_FOUND'
    | 'ADDON_INACTIVE'
    | 'ADDON_UNRESOLVED'
    | 'CANCELLED_BY_HOOK'
}
```

## 字段

### cancelled

`readonly cancelled: true`

始终为 `true`。可用作类型守卫。

---

### reason

`readonly reason: string`

调用被取消的原因。

---

## reason 值

| reason | 说明 |
|---|---|
| `ADDON_NOT_FOUND` | 目标 addonId 不存在于路由表中。 |
| `ADDON_INACTIVE` | 目标插件处于非活跃状态。 |
| `ADDON_UNRESOLVED` | 目标插件处于未解析状态（依赖项尚未解析）。 |
| `CANCELLED_BY_HOOK` | `before` 钩子调用了 `ctx.cancel()` 取消了本次调用。 |

## 用法

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
