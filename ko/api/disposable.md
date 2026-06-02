# Disposable

`import type { Disposable } from '@kairo-js/router'`

`subscribe()`의 반환값과 같이 해제 가능한 리소스를 나타냅니다.

```typescript
interface Disposable {
  dispose(): void
}
```

## 메서드

### dispose()

```typescript
dispose(): void
```

리소스를 해제합니다. 이벤트 구독의 경우 `dispose()`를 호출하면 핸들러의 구독이 해제됩니다.

**반환값:** `void`

## 사용 예시

```typescript
import { router } from '@kairo-js/router'

// Receive a Disposable from subscribe()
const disposable = router.afterEvents.playerJoin.subscribe((ev) => {
  console.log(`${ev.playerName} joined`)
})

// Dispose when the addon deactivates
router.beforeEvents.addonDeactivate.subscribe(() => {
  disposable.dispose()
})
```
