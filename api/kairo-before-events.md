# KairoBeforeEvents

`import { router } from '@kairo-js/router'`

The class accessed via `router.beforeEvents`. Each property implements [`Subscribable<T>`](/api/subscribable).

## Properties

### Kairo-specific events

### Minecraft ScriptAPI pass-through events

Events corresponding to `WorldBeforeEvents` from `@minecraft/server`.

### addonDeactivate

`readonly addonDeactivate:` [`Subscribable`](/api/subscribable)`<`[`AddonDeactivateBeforeEvent`](/api/addon-deactivate-before-event)`>`

Fires before an addon is deactivated.

---

### effectAdd

`readonly effectAdd:` [`Subscribable`](/api/subscribable)`<`[`EffectAddBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/effectaddbeforeevent)`>`

Corresponds to [`WorldBeforeEvents.effectAdd`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/effectaddbeforeevent) in `@minecraft/server`.

---

### entityHeal

`readonly entityHeal:` [`Subscribable`](/api/subscribable)`<`[`EntityHealBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealbeforeevent)`>`

Corresponds to [`WorldBeforeEvents.entityHeal`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealbeforeevent) in `@minecraft/server`.

---

### entityItemPickup

`readonly entityItemPickup:` [`Subscribable`](/api/subscribable)`<`[`EntityItemPickupBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitempickupbeforeevent)`>`

Corresponds to [`WorldBeforeEvents.entityItemPickup`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitempickupbeforeevent) in `@minecraft/server`.

---

### entityRemove

`readonly entityRemove:` [`Subscribable`](/api/subscribable)`<`[`EntityRemoveBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityremovebeforeevent)`>`

Corresponds to [`WorldBeforeEvents.entityRemove`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityremovebeforeevent) in `@minecraft/server`.

---

### explosion

`readonly explosion:` [`Subscribable`](/api/subscribable)`<`[`ExplosionBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/explosionbeforeevent)`>`

Corresponds to [`WorldBeforeEvents.explosion`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/explosionbeforeevent) in `@minecraft/server`.

---

### itemUse

`readonly itemUse:` [`Subscribable`](/api/subscribable)`<`[`ItemUseBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemusebeforeevent)`>`

Corresponds to [`WorldBeforeEvents.itemUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemusebeforeevent) in `@minecraft/server`.

---

### playerBreakBlock

`readonly playerBreakBlock:` [`Subscribable`](/api/subscribable)`<`[`PlayerBreakBlockBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbreakblockbeforeevent)`>`

Corresponds to [`WorldBeforeEvents.playerBreakBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbreakblockbeforeevent) in `@minecraft/server`.

---

### playerGameModeChange

`readonly playerGameModeChange:` [`Subscribable`](/api/subscribable)`<`[`PlayerGameModeChangeBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playergamemodechangebeforeevent)`>`

Corresponds to [`WorldBeforeEvents.playerGameModeChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playergamemodechangebeforeevent) in `@minecraft/server`.

---

### playerInteractWithBlock

`readonly playerInteractWithBlock:` [`Subscribable`](/api/subscribable)`<`[`PlayerInteractWithBlockBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockbeforeevent)`>`

Corresponds to [`WorldBeforeEvents.playerInteractWithBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockbeforeevent) in `@minecraft/server`.

---

### playerInteractWithEntity

`readonly playerInteractWithEntity:` [`Subscribable`](/api/subscribable)`<`[`PlayerInteractWithEntityBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithentitybeforeevent)`>`

Corresponds to [`WorldBeforeEvents.playerInteractWithEntity`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithentitybeforeevent) in `@minecraft/server`.

---

### playerLeave

`readonly playerLeave:` [`Subscribable`](/api/subscribable)`<`[`PlayerLeaveBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerleavebeforeevent)`>`

Corresponds to [`WorldBeforeEvents.playerLeave`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerleavebeforeevent) in `@minecraft/server`.

---

### shutdown

`readonly shutdown:` [`Subscribable`](/api/subscribable)`<`[`ShutdownBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/shutdownbeforeevent)`>`

Corresponds to [`WorldBeforeEvents.shutdown`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/shutdownbeforeevent) in `@minecraft/server`.

---

### startup

`readonly startup:` [`Subscribable`](/api/subscribable)`<`[`KairoStartupBeforeEvent`](/api/kairo-startup-before-event)`>`

Fires before Minecraft's `worldLoad`. Declare all APIs here.

---

### weatherChange

`readonly weatherChange:` [`Subscribable`](/api/subscribable)`<`[`WeatherChangeBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/weatherchangebeforeevent)`>`

Corresponds to [`WorldBeforeEvents.weatherChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/weatherchangebeforeevent) in `@minecraft/server`.

---

## Examples

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
