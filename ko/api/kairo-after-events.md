# KairoAfterEvents

`import { router } from '@kairo-js/router'`

`router.afterEvents`를 통해 접근하는 클래스입니다. 각 프로퍼티는 [`Subscribable<T>`](/ko/api/subscribable)를 구현합니다.

## 프로퍼티

### Kairo 고유 이벤트

### Minecraft ScriptAPI 패스스루 이벤트

`@minecraft/server`의 `WorldAfterEvents`에 대응하는 이벤트입니다.

### addonActivate

`readonly addonActivate:` [`Subscribable`](/ko/api/subscribable)`<`[`AddonActivateAfterEvent`](/ko/api/addon-activate-after-event)`>`

애드온이 활성화된 후에 발생합니다.

---

### blockExplode

`readonly blockExplode:` [`Subscribable`](/ko/api/subscribable)`<`[`BlockExplodeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/blockexplodeafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.blockExplode`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/blockexplodeafterevent)에 대응합니다.

---

### buttonPush

`readonly buttonPush:` [`Subscribable`](/ko/api/subscribable)`<`[`ButtonPushAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/buttonpushafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.buttonPush`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/buttonpushafterevent)에 대응합니다.

---

### dataDrivenEntityTrigger

`readonly dataDrivenEntityTrigger:` [`Subscribable`](/ko/api/subscribable)`<`[`DataDrivenEntityTriggerAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/datadrivenentitytriggerafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.dataDrivenEntityTrigger`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/datadrivenentitytriggerafterevent)에 대응합니다.

---

### effectAdd

`readonly effectAdd:` [`Subscribable`](/ko/api/subscribable)`<`[`EffectAddAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/effectaddafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.effectAdd`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/effectaddafterevent)에 대응합니다.

---

### entityDie

`readonly entityDie:` [`Subscribable`](/ko/api/subscribable)`<`[`EntityDieAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entitydieafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.entityDie`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entitydieafterevent)에 대응합니다.

---

### entityHeal

`readonly entityHeal:` [`Subscribable`](/ko/api/subscribable)`<`[`EntityHealAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.entityHeal`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealafterevent)에 대응합니다.

---

### entityHealthChanged

`readonly entityHealthChanged:` [`Subscribable`](/ko/api/subscribable)`<`[`EntityHealthChangedAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealthchangedafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.entityHealthChanged`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealthchangedafterevent)에 대응합니다.

---

### entityHitBlock

`readonly entityHitBlock:` [`Subscribable`](/ko/api/subscribable)`<`[`EntityHitBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhitblockafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.entityHitBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhitblockafterevent)에 대응합니다.

---

### entityHitEntity

`readonly entityHitEntity:` [`Subscribable`](/ko/api/subscribable)`<`[`EntityHitEntityAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhitentityafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.entityHitEntity`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhitentityafterevent)에 대응합니다.

---

### entityHurt

`readonly entityHurt:` [`Subscribable`](/ko/api/subscribable)`<`[`EntityHurtAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhurtafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.entityHurt`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhurtafterevent)에 대응합니다.

---

### entityItemDrop

`readonly entityItemDrop:` [`Subscribable`](/ko/api/subscribable)`<`[`EntityItemDropAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitemdropafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.entityItemDrop`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitemdropafterevent)에 대응합니다.

---

### entityItemPickup

`readonly entityItemPickup:` [`Subscribable`](/ko/api/subscribable)`<`[`EntityItemPickupAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitempickupafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.entityItemPickup`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitempickupafterevent)에 대응합니다.

---

### entityLoad

`readonly entityLoad:` [`Subscribable`](/ko/api/subscribable)`<`[`EntityLoadAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityloadafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.entityLoad`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityloadafterevent)에 대응합니다.

---

### entityRemove

`readonly entityRemove:` [`Subscribable`](/ko/api/subscribable)`<`[`EntityRemoveAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityremoveafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.entityRemove`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityremoveafterevent)에 대응합니다.

---

### entitySpawn

`readonly entitySpawn:` [`Subscribable`](/ko/api/subscribable)`<`[`EntitySpawnAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityspawnafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.entitySpawn`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityspawnafterevent)에 대응합니다.

---

### explosion

`readonly explosion:` [`Subscribable`](/ko/api/subscribable)`<`[`ExplosionAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/explosionafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.explosion`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/explosionafterevent)에 대응합니다.

---

### gameRuleChange

`readonly gameRuleChange:` [`Subscribable`](/ko/api/subscribable)`<`[`GameRuleChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/gamerulechangeafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.gameRuleChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/gamerulechangeafterevent)에 대응합니다.

---

### itemCompleteUse

`readonly itemCompleteUse:` [`Subscribable`](/ko/api/subscribable)`<`[`ItemCompleteUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemcompleteuseafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.itemCompleteUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemcompleteuseafterevent)에 대응합니다.

---

### itemReleaseUse

`readonly itemReleaseUse:` [`Subscribable`](/ko/api/subscribable)`<`[`ItemReleaseUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemreleaseuseafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.itemReleaseUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemreleaseuseafterevent)에 대응합니다.

---

### itemStartUse

`readonly itemStartUse:` [`Subscribable`](/ko/api/subscribable)`<`[`ItemStartUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstartuseafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.itemStartUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstartuseafterevent)에 대응합니다.

---

### itemStartUseOn

`readonly itemStartUseOn:` [`Subscribable`](/ko/api/subscribable)`<`[`ItemStartUseOnAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstartuseonafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.itemStartUseOn`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstartuseonafterevent)에 대응합니다.

---

### itemStopUse

`readonly itemStopUse:` [`Subscribable`](/ko/api/subscribable)`<`[`ItemStopUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstopuseafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.itemStopUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstopuseafterevent)에 대응합니다.

---

### itemStopUseOn

`readonly itemStopUseOn:` [`Subscribable`](/ko/api/subscribable)`<`[`ItemStopUseOnAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstopuseonafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.itemStopUseOn`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstopuseonafterevent)에 대응합니다.

---

### itemUse

`readonly itemUse:` [`Subscribable`](/ko/api/subscribable)`<`[`ItemUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemuseafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.itemUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemuseafterevent)에 대응합니다.

---

### leverAction

`readonly leverAction:` [`Subscribable`](/ko/api/subscribable)`<`[`LeverActionAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/leveractionafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.leverAction`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/leveractionafterevent)에 대응합니다.

---

### pistonActivate

`readonly pistonActivate:` [`Subscribable`](/ko/api/subscribable)`<`[`PistonActivateAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pistonactivateafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.pistonActivate`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pistonactivateafterevent)에 대응합니다.

---

### playerBreakBlock

`readonly playerBreakBlock:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerBreakBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbreakblockafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.playerBreakBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbreakblockafterevent)에 대응합니다.

---

### playerButtonInput

`readonly playerButtonInput:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerButtonInputAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbuttoninputafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.playerButtonInput`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbuttoninputafterevent)에 대응합니다.

---

### playerDimensionChange

`readonly playerDimensionChange:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerDimensionChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerdimensionchangeafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.playerDimensionChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerdimensionchangeafterevent)에 대응합니다.

---

### playerEmote

`readonly playerEmote:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerEmoteAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playeremoteafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.playerEmote`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playeremoteafterevent)에 대응합니다.

---

### playerGameModeChange

`readonly playerGameModeChange:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerGameModeChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playergamemodechangeafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.playerGameModeChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playergamemodechangeafterevent)에 대응합니다.

---

### playerHotbarSelectedSlotChange

`readonly playerHotbarSelectedSlotChange:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerHotbarSelectedSlotChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerhotbarselectedslotchangeafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.playerHotbarSelectedSlotChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerhotbarselectedslotchangeafterevent)에 대응합니다.

---

### playerInputModeChange

`readonly playerInputModeChange:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerInputModeChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinputmodechangeafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.playerInputModeChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinputmodechangeafterevent)에 대응합니다.

---

### playerInputPermissionCategoryChange

`readonly playerInputPermissionCategoryChange:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerInputPermissionCategoryChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinputpermissioncategorychangeafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.playerInputPermissionCategoryChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinputpermissioncategorychangeafterevent)에 대응합니다.

---

### playerInteractWithBlock

`readonly playerInteractWithBlock:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerInteractWithBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.playerInteractWithBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockafterevent)에 대응합니다.

---

### playerInteractWithEntity

`readonly playerInteractWithEntity:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerInteractWithEntityAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithentityafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.playerInteractWithEntity`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithentityafterevent)에 대응합니다.

---

### playerInventoryItemChange

`readonly playerInventoryItemChange:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerInventoryItemChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinventoryitemchangeafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.playerInventoryItemChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinventoryitemchangeafterevent)에 대응합니다.

---

### playerJoin

`readonly playerJoin:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerJoinAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerjoinafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.playerJoin`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerjoinafterevent)에 대응합니다.

---

### playerLeave

`readonly playerLeave:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerLeaveAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerleaveafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.playerLeave`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerleaveafterevent)에 대응합니다.

---

### playerPlaceBlock

`readonly playerPlaceBlock:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerPlaceBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerplaceblockafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.playerPlaceBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerplaceblockafterevent)에 대응합니다.

---

### playerSpawn

`readonly playerSpawn:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerSpawnAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerspawnafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.playerSpawn`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerspawnafterevent)에 대응합니다.

---

### playerSwingStart

`readonly playerSwingStart:` [`Subscribable`](/ko/api/subscribable)`<`[`PlayerSwingStartAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerswingstartafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.playerSwingStart`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerswingstartafterevent)에 대응합니다.

---

### pressurePlatePop

`readonly pressurePlatePop:` [`Subscribable`](/ko/api/subscribable)`<`[`PressurePlatePopAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pressureplatepopafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.pressurePlatePop`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pressureplatepopafterevent)에 대응합니다.

---

### pressurePlatePush

`readonly pressurePlatePush:` [`Subscribable`](/ko/api/subscribable)`<`[`PressurePlatePushAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pressureplatepushafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.pressurePlatePush`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pressureplatepushafterevent)에 대응합니다.

---

### projectileHitBlock

`readonly projectileHitBlock:` [`Subscribable`](/ko/api/subscribable)`<`[`ProjectileHitBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/projectilehitblockafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.projectileHitBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/projectilehitblockafterevent)에 대응합니다.

---

### projectileHitEntity

`readonly projectileHitEntity:` [`Subscribable`](/ko/api/subscribable)`<`[`ProjectileHitEntityAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/projectilehitentityafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.projectileHitEntity`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/projectilehitentityafterevent)에 대응합니다.

---

### scriptEventReceive

`readonly scriptEventReceive:` [`Subscribable`](/ko/api/subscribable)`<`[`ScriptEventCommandMessageAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/scripteventcommandmessageafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.scriptEventReceive`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/scripteventcommandmessageafterevent)에 대응합니다.

---

### targetBlockHit

`readonly targetBlockHit:` [`Subscribable`](/ko/api/subscribable)`<`[`TargetBlockHitAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/targetblockhitafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.targetBlockHit`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/targetblockhitafterevent)에 대응합니다.

---

### tripWireTrip

`readonly tripWireTrip:` [`Subscribable`](/ko/api/subscribable)`<`[`TripWireTripAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/tripwiretripafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.tripWireTrip`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/tripwiretripafterevent)에 대응합니다.

---

### weatherChange

`readonly weatherChange:` [`Subscribable`](/ko/api/subscribable)`<`[`WeatherChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/weatherchangeafterevent)`>`

`@minecraft/server`의 [`WorldAfterEvents.weatherChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/weatherchangeafterevent)에 대응합니다.

---

## 사용 예시

```typescript
import { router } from '@kairo-js/router'

router.afterEvents.playerJoin.subscribe((ev) => {
  console.log(`${ev.playerName} joined`)
})
```
