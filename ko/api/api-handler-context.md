# ApiHandlerContext

`import type { ApiHandlerContext } from '@kairo-js/router'`

`ev.api.register()`로 등록된 API 핸들러의 두 번째 인수로 전달되는 컨텍스트 객체입니다.

```typescript
interface ApiHandlerContext {
  readonly callerAddonId: string
}
```

## 필드

### callerAddonId

`readonly callerAddonId: string`

이 API를 호출한 애드온의 addonId (읽기 전용).

## 사용 예시

```typescript
ev.api.register<{ amount: number }, void>(
  'economy/deduct',
  async ({ amount }, ctx) => {
    console.log(`${ctx.callerAddonId}가 ${amount} 차감을 요청했습니다`)
  },
)
```
