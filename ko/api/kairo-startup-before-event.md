# KairoStartupBeforeEvent

`import { router } from '@kairo-js/router'`

`router.beforeEvents.startup`의 이벤트 객체입니다. 직접 인스턴스화할 수 없습니다.

Minecraft의 `worldLoad`보다 먼저 발생합니다. API 등록, 훅 선언, 커스텀 커맨드 등록, 애드온 이벤트 구독은 이 이벤트 핸들러 안에서만 유효합니다.

## 프로퍼티

### api

`readonly api: ApiRegistration`

API 및 훅을 등록합니다.

---

### customCommandRegistry

`readonly customCommandRegistry: KairoCustomCommandRegistry`

커스텀 커맨드를 등록합니다.

---

### events

`readonly events: AddonEventRegistration`

애드온 이벤트를 구독합니다.

---

## 사용 예시

```typescript
import { router } from '@kairo-js/router'

router.beforeEvents.startup.subscribe((ev) => {
  // Register an API
  ev.api.register<{ playerId: string }, { balance: number }>(
    'economy/getBalance',
    async ({ playerId }) => {
      return { balance: getBalance(playerId) }
    },
  )

  // Subscribe to another addon's event
  ev.events.on('other-addon', 'someEvent', (payload) => {
    console.log('Event received:', payload)
  })

  // Register a custom command
  ev.customCommandRegistry.registerCommand(
    { name: 'mycommand', description: 'My command' },
    (origin) => {
      return { success: true }
    },
  )
})
```
