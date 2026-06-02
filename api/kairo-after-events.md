# KairoAfterEvents

`import { router } from '@kairo-js/router'`

`router.afterEvents` からアクセスするクラスです。各プロパティは [`Subscribable<T>`](/api/subscribable) を実装しています。

## プロパティ

### kairo 独自イベント

### addonActivate

`readonly addonActivate: Subscribable<AddonActivateAfterEvent>`

アドオンが起動された後に発火。

---

### Minecraft ScriptAPI pass-through イベント

`@minecraft/server` の `WorldAfterEvents` に対応するイベントです。

### blockExplode

`readonly blockExplode: Subscribable<BlockExplodeAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.blockExplode` に対応します。

---

### buttonPush

`readonly buttonPush: Subscribable<ButtonPushAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.buttonPush` に対応します。

---

### dataDrivenEntityTrigger

`readonly dataDrivenEntityTrigger: Subscribable<DataDrivenEntityTriggerAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.dataDrivenEntityTrigger` に対応します。

---

### effectAdd

`readonly effectAdd: Subscribable<EffectAddAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.effectAdd` に対応します。

---

### entityDie

`readonly entityDie: Subscribable<EntityDieAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.entityDie` に対応します。

---

### entityHeal

`readonly entityHeal: Subscribable<EntityHealAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.entityHeal` に対応します。

---

### entityHealthChanged

`readonly entityHealthChanged: Subscribable<EntityHealthChangedAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.entityHealthChanged` に対応します。

---

### entityHitBlock

`readonly entityHitBlock: Subscribable<EntityHitBlockAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.entityHitBlock` に対応します。

---

### entityHitEntity

`readonly entityHitEntity: Subscribable<EntityHitEntityAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.entityHitEntity` に対応します。

---

### entityHurt

`readonly entityHurt: Subscribable<EntityHurtAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.entityHurt` に対応します。

---

### entityItemDrop

`readonly entityItemDrop: Subscribable<EntityItemDropAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.entityItemDrop` に対応します。

---

### entityItemPickup

`readonly entityItemPickup: Subscribable<EntityItemPickupAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.entityItemPickup` に対応します。

---

### entityLoad

`readonly entityLoad: Subscribable<EntityLoadAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.entityLoad` に対応します。

---

### entityRemove

`readonly entityRemove: Subscribable<EntityRemoveAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.entityRemove` に対応します。

---

### entitySpawn

`readonly entitySpawn: Subscribable<EntitySpawnAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.entitySpawn` に対応します。

---

### explosion

`readonly explosion: Subscribable<ExplosionAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.explosion` に対応します。

---

### gameRuleChange

`readonly gameRuleChange: Subscribable<GameRuleChangeAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.gameRuleChange` に対応します。

---

### itemCompleteUse

`readonly itemCompleteUse: Subscribable<ItemCompleteUseAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.itemCompleteUse` に対応します。

---

### itemReleaseUse

`readonly itemReleaseUse: Subscribable<ItemReleaseUseAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.itemReleaseUse` に対応します。

---

### itemStartUse

`readonly itemStartUse: Subscribable<ItemStartUseAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.itemStartUse` に対応します。

---

### itemStartUseOn

`readonly itemStartUseOn: Subscribable<ItemStartUseOnAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.itemStartUseOn` に対応します。

---

### itemStopUse

`readonly itemStopUse: Subscribable<ItemStopUseAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.itemStopUse` に対応します。

---

### itemStopUseOn

`readonly itemStopUseOn: Subscribable<ItemStopUseOnAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.itemStopUseOn` に対応します。

---

### itemUse

`readonly itemUse: Subscribable<ItemUseAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.itemUse` に対応します。

---

### leverAction

`readonly leverAction: Subscribable<LeverActionAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.leverAction` に対応します。

---

### pistonActivate

`readonly pistonActivate: Subscribable<PistonActivateAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.pistonActivate` に対応します。

---

### playerBreakBlock

`readonly playerBreakBlock: Subscribable<PlayerBreakBlockAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.playerBreakBlock` に対応します。

---

### playerButtonInput

`readonly playerButtonInput: Subscribable<PlayerButtonInputAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.playerButtonInput` に対応します。

---

### playerDimensionChange

`readonly playerDimensionChange: Subscribable<PlayerDimensionChangeAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.playerDimensionChange` に対応します。

---

### playerEmote

`readonly playerEmote: Subscribable<PlayerEmoteAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.playerEmote` に対応します。

---

### playerGameModeChange

`readonly playerGameModeChange: Subscribable<PlayerGameModeChangeAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.playerGameModeChange` に対応します。

---

### playerHotbarSelectedSlotChange

`readonly playerHotbarSelectedSlotChange: Subscribable<PlayerHotbarSelectedSlotChangeAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.playerHotbarSelectedSlotChange` に対応します。

---

### playerInputModeChange

`readonly playerInputModeChange: Subscribable<PlayerInputModeChangeAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.playerInputModeChange` に対応します。

---

### playerInputPermissionCategoryChange

`readonly playerInputPermissionCategoryChange: Subscribable<PlayerInputPermissionCategoryChangeAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.playerInputPermissionCategoryChange` に対応します。

---

### playerInteractWithBlock

`readonly playerInteractWithBlock: Subscribable<PlayerInteractWithBlockAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.playerInteractWithBlock` に対応します。

---

### playerInteractWithEntity

`readonly playerInteractWithEntity: Subscribable<PlayerInteractWithEntityAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.playerInteractWithEntity` に対応します。

---

### playerInventoryItemChange

`readonly playerInventoryItemChange: Subscribable<PlayerInventoryItemChangeAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.playerInventoryItemChange` に対応します。

---

### playerJoin

`readonly playerJoin: Subscribable<PlayerJoinAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.playerJoin` に対応します。

---

### playerLeave

`readonly playerLeave: Subscribable<PlayerLeaveAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.playerLeave` に対応します。

---

### playerPlaceBlock

`readonly playerPlaceBlock: Subscribable<PlayerPlaceBlockAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.playerPlaceBlock` に対応します。

---

### playerSpawn

`readonly playerSpawn: Subscribable<PlayerSpawnAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.playerSpawn` に対応します。

---

### playerSwingStart

`readonly playerSwingStart: Subscribable<PlayerSwingStartAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.playerSwingStart` に対応します。

---

### pressurePlatePop

`readonly pressurePlatePop: Subscribable<PressurePlatePopAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.pressurePlatePop` に対応します。

---

### pressurePlatePush

`readonly pressurePlatePush: Subscribable<PressurePlatePushAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.pressurePlatePush` に対応します。

---

### projectileHitBlock

`readonly projectileHitBlock: Subscribable<ProjectileHitBlockAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.projectileHitBlock` に対応します。

---

### projectileHitEntity

`readonly projectileHitEntity: Subscribable<ProjectileHitEntityAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.projectileHitEntity` に対応します。

---

### scriptEventReceive

`readonly scriptEventReceive: Subscribable<ScriptEventCommandMessageAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.scriptEventReceive` に対応します。

---

### targetBlockHit

`readonly targetBlockHit: Subscribable<TargetBlockHitAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.targetBlockHit` に対応します。

---

### tripWireTrip

`readonly tripWireTrip: Subscribable<TripWireTripAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.tripWireTrip` に対応します。

---

### weatherChange

`readonly weatherChange: Subscribable<WeatherChangeAfterEvent>`

`@minecraft/server` の `WorldAfterEvents.weatherChange` に対応します。

---

## 使用例

```typescript
import { router } from '@kairo-js/router'

router.afterEvents.playerJoin.subscribe((ev) => {
  console.log(`${ev.playerName} が参加しました`)
})
```
