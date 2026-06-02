# KairoBeforeEvents

`import { router } from '@kairo-js/router'`

The class accessed via `router.beforeEvents`. Each property implements [`Subscribable<T>`](/en/api/subscribable).

## Properties

### Kairo-specific events

| Property | Type | Description |
|---|---|---|
| `startup` | `Subscribable<KairoStartupBeforeEvent>` | Fires before Minecraft's `worldLoad`. Declare all APIs here. |
| `addonDeactivate` | `Subscribable<AddonDeactivateBeforeEvent>` | Fires before an addon is deactivated |

### Minecraft ScriptAPI pass-through events

Events corresponding to `WorldBeforeEvents` from `@minecraft/server`.

| Property | Type | Description |
|---|---|---|
| `effectAdd` | `Subscribable<EffectAddBeforeEvent>` | Before an effect is added |
| `entityHeal` | `Subscribable<EntityHealBeforeEvent>` | Before an entity is healed |
| `entityItemPickup` | `Subscribable<EntityItemPickupBeforeEvent>` | Before an entity picks up an item |
| `entityRemove` | `Subscribable<EntityRemoveBeforeEvent>` | Before an entity is removed |
| `explosion` | `Subscribable<ExplosionBeforeEvent>` | Before an explosion |
| `itemUse` | `Subscribable<ItemUseBeforeEvent>` | Before an item is used |
| `playerBreakBlock` | `Subscribable<PlayerBreakBlockBeforeEvent>` | Before a player breaks a block |
| `playerGameModeChange` | `Subscribable<PlayerGameModeChangeBeforeEvent>` | Before a player's game mode changes |
| `playerInteractWithBlock` | `Subscribable<PlayerInteractWithBlockBeforeEvent>` | Before a player interacts with a block |
| `playerInteractWithEntity` | `Subscribable<PlayerInteractWithEntityBeforeEvent>` | Before a player interacts with an entity |
| `playerLeave` | `Subscribable<PlayerLeaveBeforeEvent>` | Before a player leaves |
| `shutdown` | `Subscribable<ShutdownBeforeEvent>` | Before shutdown |
| `weatherChange` | `Subscribable<WeatherChangeBeforeEvent>` | Before a weather change |

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
