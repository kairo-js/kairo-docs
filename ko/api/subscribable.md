# Subscribable

`import type { Subscribable } from '@kairo-js/router'`

`KairoBeforeEvents` 및 `KairoAfterEvents`의 각 프로퍼티 타입입니다. 이벤트 구독 및 구독 해제 기능을 제공합니다.

```typescript
interface Subscribable<T> {
  subscribe(fn: (arg: T) => void): Disposable
  unsubscribe(fn: (arg: T) => void): void
}
```

## 메서드

### subscribe()

```typescript
subscribe(fn: (arg: T) => void): Disposable
```

이벤트 핸들러를 등록합니다. 반환된 [`Disposable`](/ko/api/disposable)을 사용하여 나중에 구독을 해제할 수 있습니다.

**매개변수**

- **fn:** `(arg: T) => void`

  이벤트 발생 시 호출할 핸들러.

**반환값:** [`Disposable`](/ko/api/disposable)

---

### unsubscribe()

```typescript
unsubscribe(fn: (arg: T) => void): void
```

이전에 등록한 이벤트 핸들러를 제거합니다. `subscribe()`에 전달한 것과 동일한 함수 참조를 전달하십시오.

**매개변수**

- **fn:** `(arg: T) => void`

  제거할 핸들러.

**반환값:** `void`

## 사용 예시

```typescript
import { router } from '@kairo-js/router'

// Subscribe and hold the Disposable
const disposable = router.afterEvents.playerJoin.subscribe((ev) => {
  console.log(`${ev.playerName} joined`)
})

// Dispose when no longer needed
disposable.dispose()

// Alternatively, unsubscribe by function reference
const handler = (ev: PlayerJoinAfterEvent) => {
  console.log(`${ev.playerName} joined`)
}
router.afterEvents.playerJoin.subscribe(handler)
router.afterEvents.playerJoin.unsubscribe(handler)
```
