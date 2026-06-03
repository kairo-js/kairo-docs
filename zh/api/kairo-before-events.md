# KairoBeforeEvents

`import { router } from '@kairo-js/router'`

通过 `router.beforeEvents` 访问的类。每个属性均实现了 [`Subscribable<T>`](/zh/api/subscribable)。

## 属性

### Kairo 专属事件

### Minecraft ScriptAPI 透传事件

对应 `@minecraft/server` 中 `WorldBeforeEvents` 的事件。

### addonDeactivate

`readonly addonDeactivate:` [`Subscribable`](/zh/api/subscribable)`<`[`AddonDeactivateBeforeEvent`](/zh/api/addon-deactivate-before-event)`>`

在插件停用前触发。

---

### effectAdd

`readonly effectAdd:` [`Subscribable`](/zh/api/subscribable)`<`[`EffectAddBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/effectaddbeforeevent)`>`

对应 `@minecraft/server` 中的 [`WorldBeforeEvents.effectAdd`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/effectaddbeforeevent)。

---

### entityHeal

`readonly entityHeal:` [`Subscribable`](/zh/api/subscribable)`<`[`EntityHealBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealbeforeevent)`>`

对应 `@minecraft/server` 中的 [`WorldBeforeEvents.entityHeal`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealbeforeevent)。

---

### entityItemPickup

`readonly entityItemPickup:` [`Subscribable`](/zh/api/subscribable)`<`[`EntityItemPickupBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitempickupbeforeevent)`>`

对应 `@minecraft/server` 中的 [`WorldBeforeEvents.entityItemPickup`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitempickupbeforeevent)。

---

### entityRemove

`readonly entityRemove:` [`Subscribable`](/zh/api/subscribable)`<`[`EntityRemoveBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityremovebeforeevent)`>`

对应 `@minecraft/server` 中的 [`WorldBeforeEvents.entityRemove`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityremovebeforeevent)。

---

### explosion

`readonly explosion:` [`Subscribable`](/zh/api/subscribable)`<`[`ExplosionBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/explosionbeforeevent)`>`

对应 `@minecraft/server` 中的 [`WorldBeforeEvents.explosion`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/explosionbeforeevent)。

---

### itemUse

`readonly itemUse:` [`Subscribable`](/zh/api/subscribable)`<`[`ItemUseBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemusebeforeevent)`>`

对应 `@minecraft/server` 中的 [`WorldBeforeEvents.itemUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemusebeforeevent)。

---

### playerBreakBlock

`readonly playerBreakBlock:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerBreakBlockBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbreakblockbeforeevent)`>`

对应 `@minecraft/server` 中的 [`WorldBeforeEvents.playerBreakBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbreakblockbeforeevent)。

---

### playerGameModeChange

`readonly playerGameModeChange:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerGameModeChangeBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playergamemodechangebeforeevent)`>`

对应 `@minecraft/server` 中的 [`WorldBeforeEvents.playerGameModeChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playergamemodechangebeforeevent)。

---

### playerInteractWithBlock

`readonly playerInteractWithBlock:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerInteractWithBlockBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockbeforeevent)`>`

对应 `@minecraft/server` 中的 [`WorldBeforeEvents.playerInteractWithBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockbeforeevent)。

---

### playerInteractWithEntity

`readonly playerInteractWithEntity:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerInteractWithEntityBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithentitybeforeevent)`>`

对应 `@minecraft/server` 中的 [`WorldBeforeEvents.playerInteractWithEntity`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithentitybeforeevent)。

---

### playerLeave

`readonly playerLeave:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerLeaveBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerleavebeforeevent)`>`

对应 `@minecraft/server` 中的 [`WorldBeforeEvents.playerLeave`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerleavebeforeevent)。

---

### shutdown

`readonly shutdown:` [`Subscribable`](/zh/api/subscribable)`<`[`ShutdownBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/shutdownbeforeevent)`>`

对应 `@minecraft/server` 中的 [`WorldBeforeEvents.shutdown`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/shutdownbeforeevent)。

---

### startup

`readonly startup:` [`Subscribable`](/zh/api/subscribable)`<`[`KairoStartupBeforeEvent`](/zh/api/kairo-startup-before-event)`>`

在 Minecraft 的 `worldLoad` 之前触发。在此处声明所有 API。

---

### weatherChange

`readonly weatherChange:` [`Subscribable`](/zh/api/subscribable)`<`[`WeatherChangeBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/weatherchangebeforeevent)`>`

对应 `@minecraft/server` 中的 [`WorldBeforeEvents.weatherChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/weatherchangebeforeevent)。

---

## 使用示例

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
