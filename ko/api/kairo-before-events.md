# KairoBeforeEvents

`import { router } from '@kairo-js/router'`

`router.beforeEvents`를 통해 접근하는 클래스입니다. 각 프로퍼티는 [`Subscribable<T>`](/ko/api/subscribable)를 구현합니다.

## 프로퍼티

### Kairo 고유 이벤트

### Minecraft ScriptAPI 패스스루 이벤트

`@minecraft/server`의 `WorldBeforeEvents`에 대응하는 이벤트입니다.

### addonDeactivate

`readonly addonDeactivate:` [`Subscribable`](/ko/api/subscribable)`<`[`AddonDeactivateBeforeEvent`](/ko/api/addon-deactivate-before-event)`>`

애드온이 비활성화되기 전에 발생합니다.

---

### effectAdd

`readonly effectAdd:` [`Subscribable`](/ko/api/subscribable)`<`[`EffectAddBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/effectaddbeforeevent)`>`

`@minecraft/server`의 [`WorldBeforeEvents.effectAdd`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/effectaddbeforeevent)에 대응합니다.

---

### entityHeal

`readonly entityHeal:` [`Subscribable`](/ko/api/subscribable)`<`[`EntityHealBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealbeforeevent)`>`

`@minecraft/server`의 [`WorldBeforeEvents.entityHeal`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealbeforeevent)에 대응합니다.

---

### entityItemPickup

`readonly entityItemPickup:` [`Subscribable`](/ko/api/subscribable)`<`[`EntityItemPickupBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitempickupbeforeevent)`>`

`@minecraft/server`의 [`WorldBeforeEvents.entityItemPickup`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitempickupbeforeevent)에 대응합니다.

---

### entityRemove

`readonly entityRemove:` [`Subscribable`](/ko/api/subscribable)`<`[`EntityRemoveBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityremovebeforeevent)`>`

`@minecraft/server`의 [`WorldBeforeEvents.entityRemove`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityremovebeforeevent)에 대응합니다.

---

### explosion

`readonly explosion:` [`Subscribable`](/ko/api/subscribable)`<`[`ExplosionBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/explosionbeforeevent)`>`

`@minecraft/server`의 [`WorldBeforeEvents.explosion`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/explosionbeforeevent)에 대응합니다.

---

### itemUse

`readonly itemUse:` [`Subscribable`](/ko/api/subscribable)`<`[`ItemUseBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemusebeforeevent)`>`

`@minecraft/server`의 [`WorldBeforeEvents.itemUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemusebeforeevent)에 대응합니다.

---

### playerBreakBlock

`readonly playerBreakBlock:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerBreakBlockBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbreakblockbeforeevent)`>`

`@minecraft/server`의 [`WorldBeforeEvents.playerBreakBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbreakblockbeforeevent)에 대응합니다.

---

### playerGameModeChange

`readonly playerGameModeChange:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerGameModeChangeBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playergamemodechangebeforeevent)`>`

`@minecraft/server`의 [`WorldBeforeEvents.playerGameModeChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playergamemodechangebeforeevent)에 대응합니다.

---

### playerInteractWithBlock

`readonly playerInteractWithBlock:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerInteractWithBlockBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockbeforeevent)`>`

`@minecraft/server`의 [`WorldBeforeEvents.playerInteractWithBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockbeforeevent)에 대응합니다.

---

### playerInteractWithEntity

`readonly playerInteractWithEntity:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerInteractWithEntityBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithentitybeforeevent)`>`

`@minecraft/server`의 [`WorldBeforeEvents.playerInteractWithEntity`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithentitybeforeevent)에 대응합니다.

---

### playerLeave

`readonly playerLeave:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerLeaveBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerleavebeforeevent)`>`

`@minecraft/server`의 [`WorldBeforeEvents.playerLeave`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerleavebeforeevent)에 대응합니다.

---

### shutdown

`readonly shutdown:` [`Subscribable`](/ko/api/subscribable)`<`[`ShutdownBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/shutdownbeforeevent)`>`

`@minecraft/server`의 [`WorldBeforeEvents.shutdown`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/shutdownbeforeevent)에 대응합니다.

---

### startup

`readonly startup:` [`Subscribable`](/ko/api/subscribable)`<`[`KairoStartupBeforeEvent`](/ko/api/kairo-startup-before-event)`>`

Minecraft의 `worldLoad`보다 먼저 발생합니다. 모든 API는 이 핸들러 안에서 선언하세요.

---

### weatherChange

`readonly weatherChange:` [`Subscribable`](/ko/api/subscribable)`<`[`WeatherChangeBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/weatherchangebeforeevent)`>`

`@minecraft/server`의 [`WorldBeforeEvents.weatherChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/weatherchangebeforeevent)에 대응합니다.

---

## 사용 예시

```typescript
import { router } from '@kairo-js/router'

router.beforeEvents.startup.subscribe((ev) => {
  ev.api.register('myAddon/hello', async () => {
    return { message: 'hello' }
  })
})

router.beforeEvents.playerBreakBlock.subscribe((ev) => {
  // Cancel a block break
  ev.cancel()
})
```
