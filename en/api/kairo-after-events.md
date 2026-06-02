# KairoAfterEvents

`import { router } from '@kairo-js/router'`

The class accessed via `router.afterEvents`. Each property implements [`Subscribable<T>`](/en/api/subscribable).

## Properties

### Kairo-specific events

| Property | Type | Description |
|---|---|---|
| `addonActivate` | `Subscribable<AddonActivateAfterEvent>` | Fires after an addon is activated |

### Minecraft ScriptAPI pass-through events

Events corresponding to `WorldAfterEvents` from `@minecraft/server`.

| Property | Type | Description |
|---|---|---|
| `blockExplode` | `Subscribable<BlockExplodeAfterEvent>` | After a block is exploded |
| `buttonPush` | `Subscribable<ButtonPushAfterEvent>` | After a button is pushed |
| `dataDrivenEntityTrigger` | `Subscribable<DataDrivenEntityTriggerAfterEvent>` | After a data-driven entity trigger fires |
| `effectAdd` | `Subscribable<EffectAddAfterEvent>` | After an effect is added |
| `entityDie` | `Subscribable<EntityDieAfterEvent>` | After an entity dies |
| `entityHeal` | `Subscribable<EntityHealAfterEvent>` | After an entity is healed |
| `entityHealthChanged` | `Subscribable<EntityHealthChangedAfterEvent>` | After an entity's health changes |
| `entityHitBlock` | `Subscribable<EntityHitBlockAfterEvent>` | After an entity hits a block |
| `entityHitEntity` | `Subscribable<EntityHitEntityAfterEvent>` | After an entity hits another entity |
| `entityHurt` | `Subscribable<EntityHurtAfterEvent>` | After an entity takes damage |
| `entityItemDrop` | `Subscribable<EntityItemDropAfterEvent>` | After an entity drops an item |
| `entityItemPickup` | `Subscribable<EntityItemPickupAfterEvent>` | After an entity picks up an item |
| `entityLoad` | `Subscribable<EntityLoadAfterEvent>` | After an entity is loaded |
| `entityRemove` | `Subscribable<EntityRemoveAfterEvent>` | After an entity is removed |
| `entitySpawn` | `Subscribable<EntitySpawnAfterEvent>` | After an entity spawns |
| `explosion` | `Subscribable<ExplosionAfterEvent>` | After an explosion |
| `gameRuleChange` | `Subscribable<GameRuleChangeAfterEvent>` | After a game rule changes |
| `itemCompleteUse` | `Subscribable<ItemCompleteUseAfterEvent>` | After an item use is completed |
| `itemReleaseUse` | `Subscribable<ItemReleaseUseAfterEvent>` | After an item use is released |
| `itemStartUse` | `Subscribable<ItemStartUseAfterEvent>` | After an item use starts |
| `itemStartUseOn` | `Subscribable<ItemStartUseOnAfterEvent>` | After an item starts being used on a block |
| `itemStopUse` | `Subscribable<ItemStopUseAfterEvent>` | After an item use stops |
| `itemStopUseOn` | `Subscribable<ItemStopUseOnAfterEvent>` | After an item stops being used on a block |
| `itemUse` | `Subscribable<ItemUseAfterEvent>` | After an item is used |
| `leverAction` | `Subscribable<LeverActionAfterEvent>` | After a lever is toggled |
| `pistonActivate` | `Subscribable<PistonActivateAfterEvent>` | After a piston activates |
| `playerBreakBlock` | `Subscribable<PlayerBreakBlockAfterEvent>` | After a player breaks a block |
| `playerButtonInput` | `Subscribable<PlayerButtonInputAfterEvent>` | After a player button input |
| `playerDimensionChange` | `Subscribable<PlayerDimensionChangeAfterEvent>` | After a player changes dimension |
| `playerEmote` | `Subscribable<PlayerEmoteAfterEvent>` | After a player uses an emote |
| `playerGameModeChange` | `Subscribable<PlayerGameModeChangeAfterEvent>` | After a player's game mode changes |
| `playerHotbarSelectedSlotChange` | `Subscribable<PlayerHotbarSelectedSlotChangeAfterEvent>` | After a player changes their selected hotbar slot |
| `playerInputModeChange` | `Subscribable<PlayerInputModeChangeAfterEvent>` | After a player's input mode changes |
| `playerInputPermissionCategoryChange` | `Subscribable<PlayerInputPermissionCategoryChangeAfterEvent>` | After a player's input permission category changes |
| `playerInteractWithBlock` | `Subscribable<PlayerInteractWithBlockAfterEvent>` | After a player interacts with a block |
| `playerInteractWithEntity` | `Subscribable<PlayerInteractWithEntityAfterEvent>` | After a player interacts with an entity |
| `playerInventoryItemChange` | `Subscribable<PlayerInventoryItemChangeAfterEvent>` | After a player's inventory item changes |
| `playerJoin` | `Subscribable<PlayerJoinAfterEvent>` | After a player joins |
| `playerLeave` | `Subscribable<PlayerLeaveAfterEvent>` | After a player leaves |
| `playerPlaceBlock` | `Subscribable<PlayerPlaceBlockAfterEvent>` | After a player places a block |
| `playerSpawn` | `Subscribable<PlayerSpawnAfterEvent>` | After a player spawns |
| `playerSwingStart` | `Subscribable<PlayerSwingStartAfterEvent>` | After a player starts swinging |
| `pressurePlatePop` | `Subscribable<PressurePlatePopAfterEvent>` | After a pressure plate is released |
| `pressurePlatePush` | `Subscribable<PressurePlatePushAfterEvent>` | After a pressure plate is stepped on |
| `projectileHitBlock` | `Subscribable<ProjectileHitBlockAfterEvent>` | After a projectile hits a block |
| `projectileHitEntity` | `Subscribable<ProjectileHitEntityAfterEvent>` | After a projectile hits an entity |
| `scriptEventReceive` | `Subscribable<ScriptEventCommandMessageAfterEvent>` | After a script event is received |
| `targetBlockHit` | `Subscribable<TargetBlockHitAfterEvent>` | After a target block is hit |
| `tripWireTrip` | `Subscribable<TripWireTripAfterEvent>` | After a trip wire is tripped |
| `weatherChange` | `Subscribable<WeatherChangeAfterEvent>` | After a weather change |

## Usage

```typescript
import { router } from '@kairo-js/router'

router.afterEvents.playerJoin.subscribe((ev) => {
  console.log(`${ev.playerName} joined`)
})
```
