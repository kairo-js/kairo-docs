# KairoBeforeEvents

`import { router } from '@kairo-js/router'`

The class accessed via `router.beforeEvents`. Each property implements [`Subscribable<T>`](/api/subscribable).

## Properties

### Kairo-specific events

### Minecraft ScriptAPI pass-through events

Events corresponding to `WorldBeforeEvents` from `@minecraft/server`.

### addonDeactivate

`readonly addonDeactivate: Subscribable<AddonDeactivateBeforeEvent>`

Fires before an addon is deactivated.

---

### effectAdd

`readonly effectAdd: Subscribable<EffectAddBeforeEvent>`

Corresponds to `WorldBeforeEvents.effectAdd` in `@minecraft/server`.

---

### entityHeal

`readonly entityHeal: Subscribable<EntityHealBeforeEvent>`

Corresponds to `WorldBeforeEvents.entityHeal` in `@minecraft/server`.

---

### entityItemPickup

`readonly entityItemPickup: Subscribable<EntityItemPickupBeforeEvent>`

Corresponds to `WorldBeforeEvents.entityItemPickup` in `@minecraft/server`.

---

### entityRemove

`readonly entityRemove: Subscribable<EntityRemoveBeforeEvent>`

Corresponds to `WorldBeforeEvents.entityRemove` in `@minecraft/server`.

---

### explosion

`readonly explosion: Subscribable<ExplosionBeforeEvent>`

Corresponds to `WorldBeforeEvents.explosion` in `@minecraft/server`.

---

### itemUse

`readonly itemUse: Subscribable<ItemUseBeforeEvent>`

Corresponds to `WorldBeforeEvents.itemUse` in `@minecraft/server`.

---

### playerBreakBlock

`readonly playerBreakBlock: Subscribable<PlayerBreakBlockBeforeEvent>`

Corresponds to `WorldBeforeEvents.playerBreakBlock` in `@minecraft/server`.

---

### playerGameModeChange

`readonly playerGameModeChange: Subscribable<PlayerGameModeChangeBeforeEvent>`

Corresponds to `WorldBeforeEvents.playerGameModeChange` in `@minecraft/server`.

---

### playerInteractWithBlock

`readonly playerInteractWithBlock: Subscribable<PlayerInteractWithBlockBeforeEvent>`

Corresponds to `WorldBeforeEvents.playerInteractWithBlock` in `@minecraft/server`.

---

### playerInteractWithEntity

`readonly playerInteractWithEntity: Subscribable<PlayerInteractWithEntityBeforeEvent>`

Corresponds to `WorldBeforeEvents.playerInteractWithEntity` in `@minecraft/server`.

---

### playerLeave

`readonly playerLeave: Subscribable<PlayerLeaveBeforeEvent>`

Corresponds to `WorldBeforeEvents.playerLeave` in `@minecraft/server`.

---

### shutdown

`readonly shutdown: Subscribable<ShutdownBeforeEvent>`

Corresponds to `WorldBeforeEvents.shutdown` in `@minecraft/server`.

---

### startup

`readonly startup: Subscribable<KairoStartupBeforeEvent>`

Fires before Minecraft's `worldLoad`. Declare all APIs here.

---

### weatherChange

`readonly weatherChange: Subscribable<WeatherChangeBeforeEvent>`

Corresponds to `WorldBeforeEvents.weatherChange` in `@minecraft/server`.

---

## Usage

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
