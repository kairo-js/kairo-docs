# KairoAfterEvents

`import { router } from '@kairo-js/router'`

`router.afterEvents`를 통해 접근하는 클래스입니다. 각 프로퍼티는 [`Subscribable<T>`](/ko/api/subscribable)를 구현합니다.

## 프로퍼티

### Kairo 고유 이벤트

### Minecraft ScriptAPI 패스스루 이벤트

`@minecraft/server`의 `WorldAfterEvents`에 대응하는 이벤트입니다.

### addonActivate

`readonly addonActivate: Subscribable<AddonActivateAfterEvent>`

애드온이 활성화된 후에 발생합니다.

---

### blockExplode

`readonly blockExplode: Subscribable<BlockExplodeAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.blockExplode`에 대응합니다.

---

### buttonPush

`readonly buttonPush: Subscribable<ButtonPushAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.buttonPush`에 대응합니다.

---

### dataDrivenEntityTrigger

`readonly dataDrivenEntityTrigger: Subscribable<DataDrivenEntityTriggerAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.dataDrivenEntityTrigger`에 대응합니다.

---

### effectAdd

`readonly effectAdd: Subscribable<EffectAddAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.effectAdd`에 대응합니다.

---

### entityDie

`readonly entityDie: Subscribable<EntityDieAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.entityDie`에 대응합니다.

---

### entityHeal

`readonly entityHeal: Subscribable<EntityHealAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.entityHeal`에 대응합니다.

---

### entityHealthChanged

`readonly entityHealthChanged: Subscribable<EntityHealthChangedAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.entityHealthChanged`에 대응합니다.

---

### entityHitBlock

`readonly entityHitBlock: Subscribable<EntityHitBlockAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.entityHitBlock`에 대응합니다.

---

### entityHitEntity

`readonly entityHitEntity: Subscribable<EntityHitEntityAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.entityHitEntity`에 대응합니다.

---

### entityHurt

`readonly entityHurt: Subscribable<EntityHurtAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.entityHurt`에 대응합니다.

---

### entityItemDrop

`readonly entityItemDrop: Subscribable<EntityItemDropAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.entityItemDrop`에 대응합니다.

---

### entityItemPickup

`readonly entityItemPickup: Subscribable<EntityItemPickupAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.entityItemPickup`에 대응합니다.

---

### entityLoad

`readonly entityLoad: Subscribable<EntityLoadAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.entityLoad`에 대응합니다.

---

### entityRemove

`readonly entityRemove: Subscribable<EntityRemoveAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.entityRemove`에 대응합니다.

---

### entitySpawn

`readonly entitySpawn: Subscribable<EntitySpawnAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.entitySpawn`에 대응합니다.

---

### explosion

`readonly explosion: Subscribable<ExplosionAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.explosion`에 대응합니다.

---

### gameRuleChange

`readonly gameRuleChange: Subscribable<GameRuleChangeAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.gameRuleChange`에 대응합니다.

---

### itemCompleteUse

`readonly itemCompleteUse: Subscribable<ItemCompleteUseAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.itemCompleteUse`에 대응합니다.

---

### itemReleaseUse

`readonly itemReleaseUse: Subscribable<ItemReleaseUseAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.itemReleaseUse`에 대응합니다.

---

### itemStartUse

`readonly itemStartUse: Subscribable<ItemStartUseAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.itemStartUse`에 대응합니다.

---

### itemStartUseOn

`readonly itemStartUseOn: Subscribable<ItemStartUseOnAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.itemStartUseOn`에 대응합니다.

---

### itemStopUse

`readonly itemStopUse: Subscribable<ItemStopUseAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.itemStopUse`에 대응합니다.

---

### itemStopUseOn

`readonly itemStopUseOn: Subscribable<ItemStopUseOnAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.itemStopUseOn`에 대응합니다.

---

### itemUse

`readonly itemUse: Subscribable<ItemUseAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.itemUse`에 대응합니다.

---

### leverAction

`readonly leverAction: Subscribable<LeverActionAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.leverAction`에 대응합니다.

---

### pistonActivate

`readonly pistonActivate: Subscribable<PistonActivateAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.pistonActivate`에 대응합니다.

---

### playerBreakBlock

`readonly playerBreakBlock: Subscribable<PlayerBreakBlockAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.playerBreakBlock`에 대응합니다.

---

### playerButtonInput

`readonly playerButtonInput: Subscribable<PlayerButtonInputAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.playerButtonInput`에 대응합니다.

---

### playerDimensionChange

`readonly playerDimensionChange: Subscribable<PlayerDimensionChangeAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.playerDimensionChange`에 대응합니다.

---

### playerEmote

`readonly playerEmote: Subscribable<PlayerEmoteAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.playerEmote`에 대응합니다.

---

### playerGameModeChange

`readonly playerGameModeChange: Subscribable<PlayerGameModeChangeAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.playerGameModeChange`에 대응합니다.

---

### playerHotbarSelectedSlotChange

`readonly playerHotbarSelectedSlotChange: Subscribable<PlayerHotbarSelectedSlotChangeAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.playerHotbarSelectedSlotChange`에 대응합니다.

---

### playerInputModeChange

`readonly playerInputModeChange: Subscribable<PlayerInputModeChangeAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.playerInputModeChange`에 대응합니다.

---

### playerInputPermissionCategoryChange

`readonly playerInputPermissionCategoryChange: Subscribable<PlayerInputPermissionCategoryChangeAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.playerInputPermissionCategoryChange`에 대응합니다.

---

### playerInteractWithBlock

`readonly playerInteractWithBlock: Subscribable<PlayerInteractWithBlockAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.playerInteractWithBlock`에 대응합니다.

---

### playerInteractWithEntity

`readonly playerInteractWithEntity: Subscribable<PlayerInteractWithEntityAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.playerInteractWithEntity`에 대응합니다.

---

### playerInventoryItemChange

`readonly playerInventoryItemChange: Subscribable<PlayerInventoryItemChangeAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.playerInventoryItemChange`에 대응합니다.

---

### playerJoin

`readonly playerJoin: Subscribable<PlayerJoinAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.playerJoin`에 대응합니다.

---

### playerLeave

`readonly playerLeave: Subscribable<PlayerLeaveAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.playerLeave`에 대응합니다.

---

### playerPlaceBlock

`readonly playerPlaceBlock: Subscribable<PlayerPlaceBlockAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.playerPlaceBlock`에 대응합니다.

---

### playerSpawn

`readonly playerSpawn: Subscribable<PlayerSpawnAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.playerSpawn`에 대응합니다.

---

### playerSwingStart

`readonly playerSwingStart: Subscribable<PlayerSwingStartAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.playerSwingStart`에 대응합니다.

---

### pressurePlatePop

`readonly pressurePlatePop: Subscribable<PressurePlatePopAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.pressurePlatePop`에 대응합니다.

---

### pressurePlatePush

`readonly pressurePlatePush: Subscribable<PressurePlatePushAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.pressurePlatePush`에 대응합니다.

---

### projectileHitBlock

`readonly projectileHitBlock: Subscribable<ProjectileHitBlockAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.projectileHitBlock`에 대응합니다.

---

### projectileHitEntity

`readonly projectileHitEntity: Subscribable<ProjectileHitEntityAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.projectileHitEntity`에 대응합니다.

---

### scriptEventReceive

`readonly scriptEventReceive: Subscribable<ScriptEventCommandMessageAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.scriptEventReceive`에 대응합니다.

---

### targetBlockHit

`readonly targetBlockHit: Subscribable<TargetBlockHitAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.targetBlockHit`에 대응합니다.

---

### tripWireTrip

`readonly tripWireTrip: Subscribable<TripWireTripAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.tripWireTrip`에 대응합니다.

---

### weatherChange

`readonly weatherChange: Subscribable<WeatherChangeAfterEvent>`

`@minecraft/server`의 `WorldAfterEvents.weatherChange`에 대응합니다.

---

## 사용 예시

```typescript
import { router } from '@kairo-js/router'

router.afterEvents.playerJoin.subscribe((ev) => {
  console.log(`${ev.playerName} joined`)
})
```
