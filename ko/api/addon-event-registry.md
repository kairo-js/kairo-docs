# AddonEventRegistry

`import { router } from '@kairo-js/router'`

`ev.events`를 통해 접근하는 클래스입니다. `router.beforeEvents.startup` 이벤트 안에서 다른 애드온이 `router.emit()`으로 발행하는 커스텀 이벤트를 구독하는 데 사용합니다.

## 메서드

- [deliver](#deliver)
- [getSubscriptions](#getsubscriptions)
- [on](#on)

### deliver {#deliver}

```typescript
deliver(emitterAddonId: string, eventName: string, payload: unknown): void
```

등록된 핸들러에 이벤트를 전달합니다. 프레임워크 내부에서 호출됩니다.

**emitterAddonId:** `string`

이벤트를 발행한 애드온의 ID.

**eventName:** `string`

이벤트의 이름.

**payload:** `unknown`

이벤트 페이로드.

**반환값:** `void`

---

### getSubscriptions {#getsubscriptions}

```typescript
getSubscriptions(): EventSubscription[]
```

등록된 모든 구독을 반환합니다.

**반환값:** `EventSubscription[]`

---

### on {#on}

```typescript
on<TPayload = unknown>(
  emitterAddonId: string,
  eventName: string,
  handler: EventHandler<TPayload>,
): void
```

다른 애드온이 발행하는 이벤트를 구독합니다.

**emitterAddonId:** `string`

이벤트를 발행하는 애드온의 ID.

**eventName:** `string`

구독할 이벤트의 이름.

**handler:** `EventHandler<TPayload>`

이벤트를 수신했을 때 호출되는 핸들러.

**반환값:** `void`

## 사용 예시

```typescript
import { router } from '@kairo-js/router'

// Register event subscription during startup
router.beforeEvents.startup.subscribe((ev) => {
  ev.events.on<{ amount: number }>('economy-addon', 'onTransaction', (payload) => {
    console.log(`Transaction occurred: ${payload.amount}`)
  })
})

// In the emitting addon
router.emit('onTransaction', { amount: 50 })
```
