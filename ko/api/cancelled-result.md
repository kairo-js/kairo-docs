# CancelledResult

`import type { CancelledResult } from '@kairo-js/router'`

호출이 취소되었을 때 `router.request()`의 반환값입니다. Promise는 reject되지 않고 이 값으로 resolve됩니다.

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

## 필드

### cancelled

`readonly cancelled: true`

항상 `true`입니다. 타입 가드로 사용하십시오.

---

### reason

`readonly reason: string`

호출이 취소된 이유입니다.

---

## reason 값

| reason | 설명 |
|---|---|
| `ADDON_NOT_FOUND` | 대상 addonId가 라우팅 테이블에 존재하지 않습니다. |
| `ADDON_INACTIVE` | 대상 애드온이 비활성 상태입니다. |
| `ADDON_UNRESOLVED` | 대상 애드온이 미해결 상태입니다 (의존성이 아직 해결되지 않았습니다). |
| `CANCELLED_BY_HOOK` | `before` 훅이 `ctx.cancel()`을 호출하여 호출을 취소했습니다. |

## 사용 예시

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
