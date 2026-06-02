# KairoAfterEvents

`import { router } from '@kairo-js/router'`

通过 `router.afterEvents` 访问的类。每个属性均实现了 [`Subscribable<T>`](/en/api/subscribable)。

## 属性

### Kairo 专属事件

### Minecraft ScriptAPI 透传事件

对应 `@minecraft/server` 中 `WorldAfterEvents` 的事件。

### addonActivate

`readonly addonActivate: Subscribable<AddonActivateAfterEvent>`

在插件激活后触发。

---

### blockExplode

`readonly blockExplode: Subscribable<BlockExplodeAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.blockExplode`。

---

### buttonPush

`readonly buttonPush: Subscribable<ButtonPushAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.buttonPush`。

---

### dataDrivenEntityTrigger

`readonly dataDrivenEntityTrigger: Subscribable<DataDrivenEntityTriggerAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.dataDrivenEntityTrigger`。

---

### effectAdd

`readonly effectAdd: Subscribable<EffectAddAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.effectAdd`。

---

### entityDie

`readonly entityDie: Subscribable<EntityDieAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.entityDie`。

---

### entityHeal

`readonly entityHeal: Subscribable<EntityHealAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.entityHeal`。

---

### entityHealthChanged

`readonly entityHealthChanged: Subscribable<EntityHealthChangedAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.entityHealthChanged`。

---

### entityHitBlock

`readonly entityHitBlock: Subscribable<EntityHitBlockAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.entityHitBlock`。

---

### entityHitEntity

`readonly entityHitEntity: Subscribable<EntityHitEntityAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.entityHitEntity`。

---

### entityHurt

`readonly entityHurt: Subscribable<EntityHurtAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.entityHurt`。

---

### entityItemDrop

`readonly entityItemDrop: Subscribable<EntityItemDropAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.entityItemDrop`。

---

### entityItemPickup

`readonly entityItemPickup: Subscribable<EntityItemPickupAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.entityItemPickup`。

---

### entityLoad

`readonly entityLoad: Subscribable<EntityLoadAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.entityLoad`。

---

### entityRemove

`readonly entityRemove: Subscribable<EntityRemoveAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.entityRemove`。

---

### entitySpawn

`readonly entitySpawn: Subscribable<EntitySpawnAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.entitySpawn`。

---

### explosion

`readonly explosion: Subscribable<ExplosionAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.explosion`。

---

### gameRuleChange

`readonly gameRuleChange: Subscribable<GameRuleChangeAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.gameRuleChange`。

---

### itemCompleteUse

`readonly itemCompleteUse: Subscribable<ItemCompleteUseAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.itemCompleteUse`。

---

### itemReleaseUse

`readonly itemReleaseUse: Subscribable<ItemReleaseUseAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.itemReleaseUse`。

---

### itemStartUse

`readonly itemStartUse: Subscribable<ItemStartUseAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.itemStartUse`。

---

### itemStartUseOn

`readonly itemStartUseOn: Subscribable<ItemStartUseOnAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.itemStartUseOn`。

---

### itemStopUse

`readonly itemStopUse: Subscribable<ItemStopUseAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.itemStopUse`。

---

### itemStopUseOn

`readonly itemStopUseOn: Subscribable<ItemStopUseOnAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.itemStopUseOn`。

---

### itemUse

`readonly itemUse: Subscribable<ItemUseAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.itemUse`。

---

### leverAction

`readonly leverAction: Subscribable<LeverActionAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.leverAction`。

---

### pistonActivate

`readonly pistonActivate: Subscribable<PistonActivateAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.pistonActivate`。

---

### playerBreakBlock

`readonly playerBreakBlock: Subscribable<PlayerBreakBlockAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.playerBreakBlock`。

---

### playerButtonInput

`readonly playerButtonInput: Subscribable<PlayerButtonInputAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.playerButtonInput`。

---

### playerDimensionChange

`readonly playerDimensionChange: Subscribable<PlayerDimensionChangeAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.playerDimensionChange`。

---

### playerEmote

`readonly playerEmote: Subscribable<PlayerEmoteAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.playerEmote`。

---

### playerGameModeChange

`readonly playerGameModeChange: Subscribable<PlayerGameModeChangeAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.playerGameModeChange`。

---

### playerHotbarSelectedSlotChange

`readonly playerHotbarSelectedSlotChange: Subscribable<PlayerHotbarSelectedSlotChangeAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.playerHotbarSelectedSlotChange`。

---

### playerInputModeChange

`readonly playerInputModeChange: Subscribable<PlayerInputModeChangeAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.playerInputModeChange`。

---

### playerInputPermissionCategoryChange

`readonly playerInputPermissionCategoryChange: Subscribable<PlayerInputPermissionCategoryChangeAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.playerInputPermissionCategoryChange`。

---

### playerInteractWithBlock

`readonly playerInteractWithBlock: Subscribable<PlayerInteractWithBlockAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.playerInteractWithBlock`。

---

### playerInteractWithEntity

`readonly playerInteractWithEntity: Subscribable<PlayerInteractWithEntityAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.playerInteractWithEntity`。

---

### playerInventoryItemChange

`readonly playerInventoryItemChange: Subscribable<PlayerInventoryItemChangeAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.playerInventoryItemChange`。

---

### playerJoin

`readonly playerJoin: Subscribable<PlayerJoinAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.playerJoin`。

---

### playerLeave

`readonly playerLeave: Subscribable<PlayerLeaveAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.playerLeave`。

---

### playerPlaceBlock

`readonly playerPlaceBlock: Subscribable<PlayerPlaceBlockAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.playerPlaceBlock`。

---

### playerSpawn

`readonly playerSpawn: Subscribable<PlayerSpawnAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.playerSpawn`。

---

### playerSwingStart

`readonly playerSwingStart: Subscribable<PlayerSwingStartAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.playerSwingStart`。

---

### pressurePlatePop

`readonly pressurePlatePop: Subscribable<PressurePlatePopAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.pressurePlatePop`。

---

### pressurePlatePush

`readonly pressurePlatePush: Subscribable<PressurePlatePushAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.pressurePlatePush`。

---

### projectileHitBlock

`readonly projectileHitBlock: Subscribable<ProjectileHitBlockAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.projectileHitBlock`。

---

### projectileHitEntity

`readonly projectileHitEntity: Subscribable<ProjectileHitEntityAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.projectileHitEntity`。

---

### scriptEventReceive

`readonly scriptEventReceive: Subscribable<ScriptEventCommandMessageAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.scriptEventReceive`。

---

### targetBlockHit

`readonly targetBlockHit: Subscribable<TargetBlockHitAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.targetBlockHit`。

---

### tripWireTrip

`readonly tripWireTrip: Subscribable<TripWireTripAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.tripWireTrip`。

---

### weatherChange

`readonly weatherChange: Subscribable<WeatherChangeAfterEvent>`

对应 `@minecraft/server` 中的 `WorldAfterEvents.weatherChange`。

---

## 使用示例

```typescript
import { router } from '@kairo-js/router'

router.afterEvents.playerJoin.subscribe((ev) => {
  console.log(`${ev.playerName} joined`)
})
```
