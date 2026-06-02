# KairoBeforeEvents

`import { router } from '@kairo-js/router'`

通过 `router.beforeEvents` 访问的类。每个属性均实现了 [`Subscribable<T>`](/en/api/subscribable)。

## 属性

### Kairo 专属事件

### Minecraft ScriptAPI 透传事件

对应 `@minecraft/server` 中 `WorldBeforeEvents` 的事件。

### addonDeactivate

`readonly addonDeactivate: Subscribable<AddonDeactivateBeforeEvent>`

在插件停用前触发。

---

### effectAdd

`readonly effectAdd: Subscribable<EffectAddBeforeEvent>`

对应 `@minecraft/server` 中的 `WorldBeforeEvents.effectAdd`。

---

### entityHeal

`readonly entityHeal: Subscribable<EntityHealBeforeEvent>`

对应 `@minecraft/server` 中的 `WorldBeforeEvents.entityHeal`。

---

### entityItemPickup

`readonly entityItemPickup: Subscribable<EntityItemPickupBeforeEvent>`

对应 `@minecraft/server` 中的 `WorldBeforeEvents.entityItemPickup`。

---

### entityRemove

`readonly entityRemove: Subscribable<EntityRemoveBeforeEvent>`

对应 `@minecraft/server` 中的 `WorldBeforeEvents.entityRemove`。

---

### explosion

`readonly explosion: Subscribable<ExplosionBeforeEvent>`

对应 `@minecraft/server` 中的 `WorldBeforeEvents.explosion`。

---

### itemUse

`readonly itemUse: Subscribable<ItemUseBeforeEvent>`

对应 `@minecraft/server` 中的 `WorldBeforeEvents.itemUse`。

---

### playerBreakBlock

`readonly playerBreakBlock: Subscribable<PlayerBreakBlockBeforeEvent>`

对应 `@minecraft/server` 中的 `WorldBeforeEvents.playerBreakBlock`。

---

### playerGameModeChange

`readonly playerGameModeChange: Subscribable<PlayerGameModeChangeBeforeEvent>`

对应 `@minecraft/server` 中的 `WorldBeforeEvents.playerGameModeChange`。

---

### playerInteractWithBlock

`readonly playerInteractWithBlock: Subscribable<PlayerInteractWithBlockBeforeEvent>`

对应 `@minecraft/server` 中的 `WorldBeforeEvents.playerInteractWithBlock`。

---

### playerInteractWithEntity

`readonly playerInteractWithEntity: Subscribable<PlayerInteractWithEntityBeforeEvent>`

对应 `@minecraft/server` 中的 `WorldBeforeEvents.playerInteractWithEntity`。

---

### playerLeave

`readonly playerLeave: Subscribable<PlayerLeaveBeforeEvent>`

对应 `@minecraft/server` 中的 `WorldBeforeEvents.playerLeave`。

---

### shutdown

`readonly shutdown: Subscribable<ShutdownBeforeEvent>`

对应 `@minecraft/server` 中的 `WorldBeforeEvents.shutdown`。

---

### startup

`readonly startup: Subscribable<KairoStartupBeforeEvent>`

在 Minecraft 的 `worldLoad` 之前触发。在此处声明所有 API。

---

### weatherChange

`readonly weatherChange: Subscribable<WeatherChangeBeforeEvent>`

对应 `@minecraft/server` 中的 `WorldBeforeEvents.weatherChange`。

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
