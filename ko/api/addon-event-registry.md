# AddonEventRegistration

`ev.events`를 통해 접근하는 인터페이스입니다. `router.beforeEvents.startup` 이벤트 안에서 다른 애드온이 `router.emit()`으로 발행하는 커스텀 이벤트를 구독하는 데 사용합니다.

```typescript
interface AddonEventRegistration {
  on<TPayload = unknown>(emitterAddonId: string, eventName: string, handler: EventHandler<TPayload>): void
}
```

## 메서드

- [on](#on)

### on {#on}

```typescript
on<TPayload = unknown>(
  emitterAddonId: string,
  eventName: string,
  handler: EventHandler<TPayload>,
): void
```

다른 애드온이 발행하는 이벤트를 구독합니다.

**매개변수**

- **emitterAddonId:** `string`

  이벤트를 발행하는 애드온의 ID.
- **eventName:** `string`

  구독할 이벤트의 이름.
- **handler:** `EventHandler<TPayload>`

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
