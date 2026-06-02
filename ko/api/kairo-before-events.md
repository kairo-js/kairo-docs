# KairoBeforeEvents

`import { router } from '@kairo-js/router'`

`router.beforeEvents`를 통해 접근하는 클래스입니다. 각 프로퍼티는 [`Subscribable<T>`](/ko/api/subscribable)를 구현합니다.

## 프로퍼티

### Kairo 고유 이벤트

### Minecraft ScriptAPI 패스스루 이벤트

`@minecraft/server`의 `WorldBeforeEvents`에 대응하는 이벤트입니다.

### addonDeactivate

`readonly addonDeactivate: Subscribable<AddonDeactivateBeforeEvent>`

애드온이 비활성화되기 전에 발생합니다.

---

### effectAdd

`readonly effectAdd: Subscribable<EffectAddBeforeEvent>`

`@minecraft/server`의 `WorldBeforeEvents.effectAdd`에 대응합니다.

---

### entityHeal

`readonly entityHeal: Subscribable<EntityHealBeforeEvent>`

`@minecraft/server`의 `WorldBeforeEvents.entityHeal`에 대응합니다.

---

### entityItemPickup

`readonly entityItemPickup: Subscribable<EntityItemPickupBeforeEvent>`

`@minecraft/server`의 `WorldBeforeEvents.entityItemPickup`에 대응합니다.

---

### entityRemove

`readonly entityRemove: Subscribable<EntityRemoveBeforeEvent>`

`@minecraft/server`의 `WorldBeforeEvents.entityRemove`에 대응합니다.

---

### explosion

`readonly explosion: Subscribable<ExplosionBeforeEvent>`

`@minecraft/server`의 `WorldBeforeEvents.explosion`에 대응합니다.

---

### itemUse

`readonly itemUse: Subscribable<ItemUseBeforeEvent>`

`@minecraft/server`의 `WorldBeforeEvents.itemUse`에 대응합니다.

---

### playerBreakBlock

`readonly playerBreakBlock: Subscribable<PlayerBreakBlockBeforeEvent>`

`@minecraft/server`의 `WorldBeforeEvents.playerBreakBlock`에 대응합니다.

---

### playerGameModeChange

`readonly playerGameModeChange: Subscribable<PlayerGameModeChangeBeforeEvent>`

`@minecraft/server`의 `WorldBeforeEvents.playerGameModeChange`에 대응합니다.

---

### playerInteractWithBlock

`readonly playerInteractWithBlock: Subscribable<PlayerInteractWithBlockBeforeEvent>`

`@minecraft/server`의 `WorldBeforeEvents.playerInteractWithBlock`에 대응합니다.

---

### playerInteractWithEntity

`readonly playerInteractWithEntity: Subscribable<PlayerInteractWithEntityBeforeEvent>`

`@minecraft/server`의 `WorldBeforeEvents.playerInteractWithEntity`에 대응합니다.

---

### playerLeave

`readonly playerLeave: Subscribable<PlayerLeaveBeforeEvent>`

`@minecraft/server`의 `WorldBeforeEvents.playerLeave`에 대응합니다.

---

### shutdown

`readonly shutdown: Subscribable<ShutdownBeforeEvent>`

`@minecraft/server`의 `WorldBeforeEvents.shutdown`에 대응합니다.

---

### startup

`readonly startup: Subscribable<KairoStartupBeforeEvent>`

Minecraft의 `worldLoad`보다 먼저 발생합니다. 모든 API는 이 핸들러 안에서 선언하세요.

---

### weatherChange

`readonly weatherChange: Subscribable<WeatherChangeBeforeEvent>`

`@minecraft/server`의 `WorldBeforeEvents.weatherChange`에 대응합니다.

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
