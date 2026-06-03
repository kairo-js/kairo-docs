# KairoAfterEvents

`import { router } from '@kairo-js/router'`

The class accessed via `router.afterEvents`. Each property implements [`Subscribable<T>`](/api/subscribable).

## Properties

### Kairo-specific events

### Minecraft ScriptAPI pass-through events

Events corresponding to `WorldAfterEvents` from `@minecraft/server`.

### addonActivate

`readonly addonActivate: Subscribable<AddonActivateAfterEvent>`

Fires after an addon is activated.

---

### blockExplode

`readonly blockExplode: Subscribable<BlockExplodeAfterEvent>`

Corresponds to `WorldAfterEvents.blockExplode` in `@minecraft/server`.

---

### buttonPush

`readonly buttonPush: Subscribable<ButtonPushAfterEvent>`

Corresponds to `WorldAfterEvents.buttonPush` in `@minecraft/server`.

---

### dataDrivenEntityTrigger

`readonly dataDrivenEntityTrigger: Subscribable<DataDrivenEntityTriggerAfterEvent>`

Corresponds to `WorldAfterEvents.dataDrivenEntityTrigger` in `@minecraft/server`.

---

### effectAdd

`readonly effectAdd: Subscribable<EffectAddAfterEvent>`

Corresponds to `WorldAfterEvents.effectAdd` in `@minecraft/server`.

---

### entityDie

`readonly entityDie: Subscribable<EntityDieAfterEvent>`

Corresponds to `WorldAfterEvents.entityDie` in `@minecraft/server`.

---

### entityHeal

`readonly entityHeal: Subscribable<EntityHealAfterEvent>`

Corresponds to `WorldAfterEvents.entityHeal` in `@minecraft/server`.

---

### entityHealthChanged

`readonly entityHealthChanged: Subscribable<EntityHealthChangedAfterEvent>`

Corresponds to `WorldAfterEvents.entityHealthChanged` in `@minecraft/server`.

---

### entityHitBlock

`readonly entityHitBlock: Subscribable<EntityHitBlockAfterEvent>`

Corresponds to `WorldAfterEvents.entityHitBlock` in `@minecraft/server`.

---

### entityHitEntity

`readonly entityHitEntity: Subscribable<EntityHitEntityAfterEvent>`

Corresponds to `WorldAfterEvents.entityHitEntity` in `@minecraft/server`.

---

### entityHurt

`readonly entityHurt: Subscribable<EntityHurtAfterEvent>`

Corresponds to `WorldAfterEvents.entityHurt` in `@minecraft/server`.

---

### entityItemDrop

`readonly entityItemDrop: Subscribable<EntityItemDropAfterEvent>`

Corresponds to `WorldAfterEvents.entityItemDrop` in `@minecraft/server`.

---

### entityItemPickup

`readonly entityItemPickup: Subscribable<EntityItemPickupAfterEvent>`

Corresponds to `WorldAfterEvents.entityItemPickup` in `@minecraft/server`.

---

### entityLoad

`readonly entityLoad: Subscribable<EntityLoadAfterEvent>`

Corresponds to `WorldAfterEvents.entityLoad` in `@minecraft/server`.

---

### entityRemove

`readonly entityRemove: Subscribable<EntityRemoveAfterEvent>`

Corresponds to `WorldAfterEvents.entityRemove` in `@minecraft/server`.

---

### entitySpawn

`readonly entitySpawn: Subscribable<EntitySpawnAfterEvent>`

Corresponds to `WorldAfterEvents.entitySpawn` in `@minecraft/server`.

---

### explosion

`readonly explosion: Subscribable<ExplosionAfterEvent>`

Corresponds to `WorldAfterEvents.explosion` in `@minecraft/server`.

---

### gameRuleChange

`readonly gameRuleChange: Subscribable<GameRuleChangeAfterEvent>`

Corresponds to `WorldAfterEvents.gameRuleChange` in `@minecraft/server`.

---

### itemCompleteUse

`readonly itemCompleteUse: Subscribable<ItemCompleteUseAfterEvent>`

Corresponds to `WorldAfterEvents.itemCompleteUse` in `@minecraft/server`.

---

### itemReleaseUse

`readonly itemReleaseUse: Subscribable<ItemReleaseUseAfterEvent>`

Corresponds to `WorldAfterEvents.itemReleaseUse` in `@minecraft/server`.

---

### itemStartUse

`readonly itemStartUse: Subscribable<ItemStartUseAfterEvent>`

Corresponds to `WorldAfterEvents.itemStartUse` in `@minecraft/server`.

---

### itemStartUseOn

`readonly itemStartUseOn: Subscribable<ItemStartUseOnAfterEvent>`

Corresponds to `WorldAfterEvents.itemStartUseOn` in `@minecraft/server`.

---

### itemStopUse

`readonly itemStopUse: Subscribable<ItemStopUseAfterEvent>`

Corresponds to `WorldAfterEvents.itemStopUse` in `@minecraft/server`.

---

### itemStopUseOn

`readonly itemStopUseOn: Subscribable<ItemStopUseOnAfterEvent>`

Corresponds to `WorldAfterEvents.itemStopUseOn` in `@minecraft/server`.

---

### itemUse

`readonly itemUse: Subscribable<ItemUseAfterEvent>`

Corresponds to `WorldAfterEvents.itemUse` in `@minecraft/server`.

---

### leverAction

`readonly leverAction: Subscribable<LeverActionAfterEvent>`

Corresponds to `WorldAfterEvents.leverAction` in `@minecraft/server`.

---

### pistonActivate

`readonly pistonActivate: Subscribable<PistonActivateAfterEvent>`

Corresponds to `WorldAfterEvents.pistonActivate` in `@minecraft/server`.

---

### playerBreakBlock

`readonly playerBreakBlock: Subscribable<PlayerBreakBlockAfterEvent>`

Corresponds to `WorldAfterEvents.playerBreakBlock` in `@minecraft/server`.

---

### playerButtonInput

`readonly playerButtonInput: Subscribable<PlayerButtonInputAfterEvent>`

Corresponds to `WorldAfterEvents.playerButtonInput` in `@minecraft/server`.

---

### playerDimensionChange

`readonly playerDimensionChange: Subscribable<PlayerDimensionChangeAfterEvent>`

Corresponds to `WorldAfterEvents.playerDimensionChange` in `@minecraft/server`.

---

### playerEmote

`readonly playerEmote: Subscribable<PlayerEmoteAfterEvent>`

Corresponds to `WorldAfterEvents.playerEmote` in `@minecraft/server`.

---

### playerGameModeChange

`readonly playerGameModeChange: Subscribable<PlayerGameModeChangeAfterEvent>`

Corresponds to `WorldAfterEvents.playerGameModeChange` in `@minecraft/server`.

---

### playerHotbarSelectedSlotChange

`readonly playerHotbarSelectedSlotChange: Subscribable<PlayerHotbarSelectedSlotChangeAfterEvent>`

Corresponds to `WorldAfterEvents.playerHotbarSelectedSlotChange` in `@minecraft/server`.

---

### playerInputModeChange

`readonly playerInputModeChange: Subscribable<PlayerInputModeChangeAfterEvent>`

Corresponds to `WorldAfterEvents.playerInputModeChange` in `@minecraft/server`.

---

### playerInputPermissionCategoryChange

`readonly playerInputPermissionCategoryChange: Subscribable<PlayerInputPermissionCategoryChangeAfterEvent>`

Corresponds to `WorldAfterEvents.playerInputPermissionCategoryChange` in `@minecraft/server`.

---

### playerInteractWithBlock

`readonly playerInteractWithBlock: Subscribable<PlayerInteractWithBlockAfterEvent>`

Corresponds to `WorldAfterEvents.playerInteractWithBlock` in `@minecraft/server`.

---

### playerInteractWithEntity

`readonly playerInteractWithEntity: Subscribable<PlayerInteractWithEntityAfterEvent>`

Corresponds to `WorldAfterEvents.playerInteractWithEntity` in `@minecraft/server`.

---

### playerInventoryItemChange

`readonly playerInventoryItemChange: Subscribable<PlayerInventoryItemChangeAfterEvent>`

Corresponds to `WorldAfterEvents.playerInventoryItemChange` in `@minecraft/server`.

---

### playerJoin

`readonly playerJoin: Subscribable<PlayerJoinAfterEvent>`

Corresponds to `WorldAfterEvents.playerJoin` in `@minecraft/server`.

---

### playerLeave

`readonly playerLeave: Subscribable<PlayerLeaveAfterEvent>`

Corresponds to `WorldAfterEvents.playerLeave` in `@minecraft/server`.

---

### playerPlaceBlock

`readonly playerPlaceBlock: Subscribable<PlayerPlaceBlockAfterEvent>`

Corresponds to `WorldAfterEvents.playerPlaceBlock` in `@minecraft/server`.

---

### playerSpawn

`readonly playerSpawn: Subscribable<PlayerSpawnAfterEvent>`

Corresponds to `WorldAfterEvents.playerSpawn` in `@minecraft/server`.

---

### playerSwingStart

`readonly playerSwingStart: Subscribable<PlayerSwingStartAfterEvent>`

Corresponds to `WorldAfterEvents.playerSwingStart` in `@minecraft/server`.

---

### pressurePlatePop

`readonly pressurePlatePop: Subscribable<PressurePlatePopAfterEvent>`

Corresponds to `WorldAfterEvents.pressurePlatePop` in `@minecraft/server`.

---

### pressurePlatePush

`readonly pressurePlatePush: Subscribable<PressurePlatePushAfterEvent>`

Corresponds to `WorldAfterEvents.pressurePlatePush` in `@minecraft/server`.

---

### projectileHitBlock

`readonly projectileHitBlock: Subscribable<ProjectileHitBlockAfterEvent>`

Corresponds to `WorldAfterEvents.projectileHitBlock` in `@minecraft/server`.

---

### projectileHitEntity

`readonly projectileHitEntity: Subscribable<ProjectileHitEntityAfterEvent>`

Corresponds to `WorldAfterEvents.projectileHitEntity` in `@minecraft/server`.

---

### scriptEventReceive

`readonly scriptEventReceive: Subscribable<ScriptEventCommandMessageAfterEvent>`

Corresponds to `WorldAfterEvents.scriptEventReceive` in `@minecraft/server`.

---

### targetBlockHit

`readonly targetBlockHit: Subscribable<TargetBlockHitAfterEvent>`

Corresponds to `WorldAfterEvents.targetBlockHit` in `@minecraft/server`.

---

### tripWireTrip

`readonly tripWireTrip: Subscribable<TripWireTripAfterEvent>`

Corresponds to `WorldAfterEvents.tripWireTrip` in `@minecraft/server`.

---

### weatherChange

`readonly weatherChange: Subscribable<WeatherChangeAfterEvent>`

Corresponds to `WorldAfterEvents.weatherChange` in `@minecraft/server`.

---

## Examples

```typescript
import { router } from '@kairo-js/router'

router.afterEvents.playerJoin.subscribe((ev) => {
  console.log(`${ev.playerName} joined`)
})
```
