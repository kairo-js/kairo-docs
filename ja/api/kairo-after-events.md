# KairoAfterEvents

`import { router } from '@kairo-js/router'`

`router.afterEvents` からアクセスするクラスです。各プロパティは [`Subscribable<T>`](/ja/api/subscribable) を実装しています。

## プロパティ

### kairo 独自イベント

### addonActivate

`readonly addonActivate:` [`Subscribable`](/ja/api/subscribable)`<`[`AddonActivateAfterEvent`](/ja/api/addon-activate-after-event)`>`

アドオンが起動された後に発火。

---

### Minecraft ScriptAPI pass-through イベント

`@minecraft/server` の `WorldAfterEvents` に対応するイベントです。

### blockExplode

`readonly blockExplode:` [`Subscribable`](/ja/api/subscribable)`<`[`BlockExplodeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/blockexplodeafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.blockExplode`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/blockexplodeafterevent) に対応します。

---

### buttonPush

`readonly buttonPush:` [`Subscribable`](/ja/api/subscribable)`<`[`ButtonPushAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/buttonpushafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.buttonPush`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/buttonpushafterevent) に対応します。

---

### dataDrivenEntityTrigger

`readonly dataDrivenEntityTrigger:` [`Subscribable`](/ja/api/subscribable)`<`[`DataDrivenEntityTriggerAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/datadrivenentitytriggerafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.dataDrivenEntityTrigger`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/datadrivenentitytriggerafterevent) に対応します。

---

### effectAdd

`readonly effectAdd:` [`Subscribable`](/ja/api/subscribable)`<`[`EffectAddAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/effectaddafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.effectAdd`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/effectaddafterevent) に対応します。

---

### entityDie

`readonly entityDie:` [`Subscribable`](/ja/api/subscribable)`<`[`EntityDieAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entitydieafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.entityDie`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entitydieafterevent) に対応します。

---

### entityHeal

`readonly entityHeal:` [`Subscribable`](/ja/api/subscribable)`<`[`EntityHealAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.entityHeal`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealafterevent) に対応します。

---

### entityHealthChanged

`readonly entityHealthChanged:` [`Subscribable`](/ja/api/subscribable)`<`[`EntityHealthChangedAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealthchangedafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.entityHealthChanged`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealthchangedafterevent) に対応します。

---

### entityHitBlock

`readonly entityHitBlock:` [`Subscribable`](/ja/api/subscribable)`<`[`EntityHitBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhitblockafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.entityHitBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhitblockafterevent) に対応します。

---

### entityHitEntity

`readonly entityHitEntity:` [`Subscribable`](/ja/api/subscribable)`<`[`EntityHitEntityAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhitentityafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.entityHitEntity`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhitentityafterevent) に対応します。

---

### entityHurt

`readonly entityHurt:` [`Subscribable`](/ja/api/subscribable)`<`[`EntityHurtAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhurtafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.entityHurt`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhurtafterevent) に対応します。

---

### entityItemDrop

`readonly entityItemDrop:` [`Subscribable`](/ja/api/subscribable)`<`[`EntityItemDropAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitemdropafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.entityItemDrop`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitemdropafterevent) に対応します。

---

### entityItemPickup

`readonly entityItemPickup:` [`Subscribable`](/ja/api/subscribable)`<`[`EntityItemPickupAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitempickupafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.entityItemPickup`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitempickupafterevent) に対応します。

---

### entityLoad

`readonly entityLoad:` [`Subscribable`](/ja/api/subscribable)`<`[`EntityLoadAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityloadafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.entityLoad`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityloadafterevent) に対応します。

---

### entityRemove

`readonly entityRemove:` [`Subscribable`](/ja/api/subscribable)`<`[`EntityRemoveAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityremoveafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.entityRemove`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityremoveafterevent) に対応します。

---

### entitySpawn

`readonly entitySpawn:` [`Subscribable`](/ja/api/subscribable)`<`[`EntitySpawnAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityspawnafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.entitySpawn`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityspawnafterevent) に対応します。

---

### explosion

`readonly explosion:` [`Subscribable`](/ja/api/subscribable)`<`[`ExplosionAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/explosionafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.explosion`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/explosionafterevent) に対応します。

---

### gameRuleChange

`readonly gameRuleChange:` [`Subscribable`](/ja/api/subscribable)`<`[`GameRuleChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/gamerulechangeafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.gameRuleChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/gamerulechangeafterevent) に対応します。

---

### itemCompleteUse

`readonly itemCompleteUse:` [`Subscribable`](/ja/api/subscribable)`<`[`ItemCompleteUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemcompleteuseafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.itemCompleteUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemcompleteuseafterevent) に対応します。

---

### itemReleaseUse

`readonly itemReleaseUse:` [`Subscribable`](/ja/api/subscribable)`<`[`ItemReleaseUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemreleaseuseafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.itemReleaseUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemreleaseuseafterevent) に対応します。

---

### itemStartUse

`readonly itemStartUse:` [`Subscribable`](/ja/api/subscribable)`<`[`ItemStartUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstartuseafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.itemStartUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstartuseafterevent) に対応します。

---

### itemStartUseOn

`readonly itemStartUseOn:` [`Subscribable`](/ja/api/subscribable)`<`[`ItemStartUseOnAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstartuseonafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.itemStartUseOn`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstartuseonafterevent) に対応します。

---

### itemStopUse

`readonly itemStopUse:` [`Subscribable`](/ja/api/subscribable)`<`[`ItemStopUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstopuseafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.itemStopUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstopuseafterevent) に対応します。

---

### itemStopUseOn

`readonly itemStopUseOn:` [`Subscribable`](/ja/api/subscribable)`<`[`ItemStopUseOnAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstopuseonafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.itemStopUseOn`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstopuseonafterevent) に対応します。

---

### itemUse

`readonly itemUse:` [`Subscribable`](/ja/api/subscribable)`<`[`ItemUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemuseafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.itemUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemuseafterevent) に対応します。

---

### leverAction

`readonly leverAction:` [`Subscribable`](/ja/api/subscribable)`<`[`LeverActionAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/leveractionafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.leverAction`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/leveractionafterevent) に対応します。

---

### pistonActivate

`readonly pistonActivate:` [`Subscribable`](/ja/api/subscribable)`<`[`PistonActivateAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pistonactivateafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.pistonActivate`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pistonactivateafterevent) に対応します。

---

### playerBreakBlock

`readonly playerBreakBlock:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerBreakBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbreakblockafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.playerBreakBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbreakblockafterevent) に対応します。

---

### playerButtonInput

`readonly playerButtonInput:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerButtonInputAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbuttoninputafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.playerButtonInput`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbuttoninputafterevent) に対応します。

---

### playerDimensionChange

`readonly playerDimensionChange:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerDimensionChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerdimensionchangeafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.playerDimensionChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerdimensionchangeafterevent) に対応します。

---

### playerEmote

`readonly playerEmote:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerEmoteAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playeremoteafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.playerEmote`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playeremoteafterevent) に対応します。

---

### playerGameModeChange

`readonly playerGameModeChange:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerGameModeChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playergamemodechangeafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.playerGameModeChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playergamemodechangeafterevent) に対応します。

---

### playerHotbarSelectedSlotChange

`readonly playerHotbarSelectedSlotChange:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerHotbarSelectedSlotChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerhotbarselectedslotchangeafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.playerHotbarSelectedSlotChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerhotbarselectedslotchangeafterevent) に対応します。

---

### playerInputModeChange

`readonly playerInputModeChange:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerInputModeChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinputmodechangeafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.playerInputModeChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinputmodechangeafterevent) に対応します。

---

### playerInputPermissionCategoryChange

`readonly playerInputPermissionCategoryChange:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerInputPermissionCategoryChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinputpermissioncategorychangeafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.playerInputPermissionCategoryChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinputpermissioncategorychangeafterevent) に対応します。

---

### playerInteractWithBlock

`readonly playerInteractWithBlock:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerInteractWithBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.playerInteractWithBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockafterevent) に対応します。

---

### playerInteractWithEntity

`readonly playerInteractWithEntity:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerInteractWithEntityAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithentityafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.playerInteractWithEntity`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithentityafterevent) に対応します。

---

### playerInventoryItemChange

`readonly playerInventoryItemChange:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerInventoryItemChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinventoryitemchangeafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.playerInventoryItemChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinventoryitemchangeafterevent) に対応します。

---

### playerJoin

`readonly playerJoin:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerJoinAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerjoinafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.playerJoin`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerjoinafterevent) に対応します。

---

### playerLeave

`readonly playerLeave:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerLeaveAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerleaveafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.playerLeave`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerleaveafterevent) に対応します。

---

### playerPlaceBlock

`readonly playerPlaceBlock:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerPlaceBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerplaceblockafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.playerPlaceBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerplaceblockafterevent) に対応します。

---

### playerSpawn

`readonly playerSpawn:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerSpawnAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerspawnafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.playerSpawn`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerspawnafterevent) に対応します。

---

### playerSwingStart

`readonly playerSwingStart:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerSwingStartAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerswingstartafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.playerSwingStart`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerswingstartafterevent) に対応します。

---

### pressurePlatePop

`readonly pressurePlatePop:` [`Subscribable`](/ja/api/subscribable)`<`[`PressurePlatePopAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pressureplatepopafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.pressurePlatePop`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pressureplatepopafterevent) に対応します。

---

### pressurePlatePush

`readonly pressurePlatePush:` [`Subscribable`](/ja/api/subscribable)`<`[`PressurePlatePushAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pressureplatepushafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.pressurePlatePush`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pressureplatepushafterevent) に対応します。

---

### projectileHitBlock

`readonly projectileHitBlock:` [`Subscribable`](/ja/api/subscribable)`<`[`ProjectileHitBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/projectilehitblockafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.projectileHitBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/projectilehitblockafterevent) に対応します。

---

### projectileHitEntity

`readonly projectileHitEntity:` [`Subscribable`](/ja/api/subscribable)`<`[`ProjectileHitEntityAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/projectilehitentityafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.projectileHitEntity`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/projectilehitentityafterevent) に対応します。

---

### scriptEventReceive

`readonly scriptEventReceive:` [`Subscribable`](/ja/api/subscribable)`<`[`ScriptEventCommandMessageAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/scripteventcommandmessageafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.scriptEventReceive`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/scripteventcommandmessageafterevent) に対応します。

---

### targetBlockHit

`readonly targetBlockHit:` [`Subscribable`](/ja/api/subscribable)`<`[`TargetBlockHitAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/targetblockhitafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.targetBlockHit`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/targetblockhitafterevent) に対応します。

---

### tripWireTrip

`readonly tripWireTrip:` [`Subscribable`](/ja/api/subscribable)`<`[`TripWireTripAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/tripwiretripafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.tripWireTrip`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/tripwiretripafterevent) に対応します。

---

### weatherChange

`readonly weatherChange:` [`Subscribable`](/ja/api/subscribable)`<`[`WeatherChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/weatherchangeafterevent)`>`

`@minecraft/server` の [`WorldAfterEvents.weatherChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/weatherchangeafterevent) に対応します。

---

## 使用例

```typescript
import { router } from '@kairo-js/router'

router.afterEvents.playerJoin.subscribe((ev) => {
  console.log(`${ev.playerName} が参加しました`)
})
```
