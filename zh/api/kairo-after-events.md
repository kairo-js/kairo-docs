# KairoAfterEvents

`import { router } from '@kairo-js/router'`

通过 `router.afterEvents` 访问的类。每个属性均实现了 [`Subscribable<T>`](/zh/api/subscribable)。

## 属性

### Kairo 专属事件

### Minecraft ScriptAPI 透传事件

对应 `@minecraft/server` 中 `WorldAfterEvents` 的事件。

### addonActivate

`readonly addonActivate:` [`Subscribable`](/zh/api/subscribable)`<`[`AddonActivateAfterEvent`](/zh/api/addon-activate-after-event)`>`

在插件激活后触发。

---

### blockExplode

`readonly blockExplode:` [`Subscribable`](/zh/api/subscribable)`<`[`BlockExplodeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/blockexplodeafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.blockExplode`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/blockexplodeafterevent)。

---

### buttonPush

`readonly buttonPush:` [`Subscribable`](/zh/api/subscribable)`<`[`ButtonPushAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/buttonpushafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.buttonPush`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/buttonpushafterevent)。

---

### dataDrivenEntityTrigger

`readonly dataDrivenEntityTrigger:` [`Subscribable`](/zh/api/subscribable)`<`[`DataDrivenEntityTriggerAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/datadrivenentitytriggerafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.dataDrivenEntityTrigger`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/datadrivenentitytriggerafterevent)。

---

### effectAdd

`readonly effectAdd:` [`Subscribable`](/zh/api/subscribable)`<`[`EffectAddAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/effectaddafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.effectAdd`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/effectaddafterevent)。

---

### entityDie

`readonly entityDie:` [`Subscribable`](/zh/api/subscribable)`<`[`EntityDieAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entitydieafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.entityDie`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entitydieafterevent)。

---

### entityHeal

`readonly entityHeal:` [`Subscribable`](/zh/api/subscribable)`<`[`EntityHealAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.entityHeal`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealafterevent)。

---

### entityHealthChanged

`readonly entityHealthChanged:` [`Subscribable`](/zh/api/subscribable)`<`[`EntityHealthChangedAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealthchangedafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.entityHealthChanged`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealthchangedafterevent)。

---

### entityHitBlock

`readonly entityHitBlock:` [`Subscribable`](/zh/api/subscribable)`<`[`EntityHitBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhitblockafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.entityHitBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhitblockafterevent)。

---

### entityHitEntity

`readonly entityHitEntity:` [`Subscribable`](/zh/api/subscribable)`<`[`EntityHitEntityAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhitentityafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.entityHitEntity`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhitentityafterevent)。

---

### entityHurt

`readonly entityHurt:` [`Subscribable`](/zh/api/subscribable)`<`[`EntityHurtAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhurtafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.entityHurt`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhurtafterevent)。

---

### entityItemDrop

`readonly entityItemDrop:` [`Subscribable`](/zh/api/subscribable)`<`[`EntityItemDropAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitemdropafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.entityItemDrop`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitemdropafterevent)。

---

### entityItemPickup

`readonly entityItemPickup:` [`Subscribable`](/zh/api/subscribable)`<`[`EntityItemPickupAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitempickupafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.entityItemPickup`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitempickupafterevent)。

---

### entityLoad

`readonly entityLoad:` [`Subscribable`](/zh/api/subscribable)`<`[`EntityLoadAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityloadafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.entityLoad`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityloadafterevent)。

---

### entityRemove

`readonly entityRemove:` [`Subscribable`](/zh/api/subscribable)`<`[`EntityRemoveAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityremoveafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.entityRemove`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityremoveafterevent)。

---

### entitySpawn

`readonly entitySpawn:` [`Subscribable`](/zh/api/subscribable)`<`[`EntitySpawnAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityspawnafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.entitySpawn`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityspawnafterevent)。

---

### explosion

`readonly explosion:` [`Subscribable`](/zh/api/subscribable)`<`[`ExplosionAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/explosionafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.explosion`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/explosionafterevent)。

---

### gameRuleChange

`readonly gameRuleChange:` [`Subscribable`](/zh/api/subscribable)`<`[`GameRuleChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/gamerulechangeafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.gameRuleChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/gamerulechangeafterevent)。

---

### itemCompleteUse

`readonly itemCompleteUse:` [`Subscribable`](/zh/api/subscribable)`<`[`ItemCompleteUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemcompleteuseafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.itemCompleteUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemcompleteuseafterevent)。

---

### itemReleaseUse

`readonly itemReleaseUse:` [`Subscribable`](/zh/api/subscribable)`<`[`ItemReleaseUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemreleaseuseafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.itemReleaseUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemreleaseuseafterevent)。

---

### itemStartUse

`readonly itemStartUse:` [`Subscribable`](/zh/api/subscribable)`<`[`ItemStartUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstartuseafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.itemStartUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstartuseafterevent)。

---

### itemStartUseOn

`readonly itemStartUseOn:` [`Subscribable`](/zh/api/subscribable)`<`[`ItemStartUseOnAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstartuseonafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.itemStartUseOn`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstartuseonafterevent)。

---

### itemStopUse

`readonly itemStopUse:` [`Subscribable`](/zh/api/subscribable)`<`[`ItemStopUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstopuseafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.itemStopUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstopuseafterevent)。

---

### itemStopUseOn

`readonly itemStopUseOn:` [`Subscribable`](/zh/api/subscribable)`<`[`ItemStopUseOnAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstopuseonafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.itemStopUseOn`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstopuseonafterevent)。

---

### itemUse

`readonly itemUse:` [`Subscribable`](/zh/api/subscribable)`<`[`ItemUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemuseafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.itemUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemuseafterevent)。

---

### leverAction

`readonly leverAction:` [`Subscribable`](/zh/api/subscribable)`<`[`LeverActionAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/leveractionafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.leverAction`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/leveractionafterevent)。

---

### pistonActivate

`readonly pistonActivate:` [`Subscribable`](/zh/api/subscribable)`<`[`PistonActivateAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pistonactivateafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.pistonActivate`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pistonactivateafterevent)。

---

### playerBreakBlock

`readonly playerBreakBlock:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerBreakBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbreakblockafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.playerBreakBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbreakblockafterevent)。

---

### playerButtonInput

`readonly playerButtonInput:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerButtonInputAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbuttoninputafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.playerButtonInput`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbuttoninputafterevent)。

---

### playerDimensionChange

`readonly playerDimensionChange:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerDimensionChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerdimensionchangeafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.playerDimensionChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerdimensionchangeafterevent)。

---

### playerEmote

`readonly playerEmote:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerEmoteAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playeremoteafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.playerEmote`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playeremoteafterevent)。

---

### playerGameModeChange

`readonly playerGameModeChange:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerGameModeChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playergamemodechangeafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.playerGameModeChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playergamemodechangeafterevent)。

---

### playerHotbarSelectedSlotChange

`readonly playerHotbarSelectedSlotChange:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerHotbarSelectedSlotChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerhotbarselectedslotchangeafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.playerHotbarSelectedSlotChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerhotbarselectedslotchangeafterevent)。

---

### playerInputModeChange

`readonly playerInputModeChange:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerInputModeChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinputmodechangeafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.playerInputModeChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinputmodechangeafterevent)。

---

### playerInputPermissionCategoryChange

`readonly playerInputPermissionCategoryChange:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerInputPermissionCategoryChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinputpermissioncategorychangeafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.playerInputPermissionCategoryChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinputpermissioncategorychangeafterevent)。

---

### playerInteractWithBlock

`readonly playerInteractWithBlock:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerInteractWithBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.playerInteractWithBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockafterevent)。

---

### playerInteractWithEntity

`readonly playerInteractWithEntity:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerInteractWithEntityAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithentityafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.playerInteractWithEntity`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithentityafterevent)。

---

### playerInventoryItemChange

`readonly playerInventoryItemChange:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerInventoryItemChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinventoryitemchangeafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.playerInventoryItemChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinventoryitemchangeafterevent)。

---

### playerJoin

`readonly playerJoin:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerJoinAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerjoinafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.playerJoin`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerjoinafterevent)。

---

### playerLeave

`readonly playerLeave:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerLeaveAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerleaveafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.playerLeave`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerleaveafterevent)。

---

### playerPlaceBlock

`readonly playerPlaceBlock:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerPlaceBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerplaceblockafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.playerPlaceBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerplaceblockafterevent)。

---

### playerSpawn

`readonly playerSpawn:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerSpawnAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerspawnafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.playerSpawn`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerspawnafterevent)。

---

### playerSwingStart

`readonly playerSwingStart:` [`Subscribable`](/zh/api/subscribable)`<`[`PlayerSwingStartAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerswingstartafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.playerSwingStart`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerswingstartafterevent)。

---

### pressurePlatePop

`readonly pressurePlatePop:` [`Subscribable`](/zh/api/subscribable)`<`[`PressurePlatePopAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pressureplatepopafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.pressurePlatePop`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pressureplatepopafterevent)。

---

### pressurePlatePush

`readonly pressurePlatePush:` [`Subscribable`](/zh/api/subscribable)`<`[`PressurePlatePushAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pressureplatepushafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.pressurePlatePush`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pressureplatepushafterevent)。

---

### projectileHitBlock

`readonly projectileHitBlock:` [`Subscribable`](/zh/api/subscribable)`<`[`ProjectileHitBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/projectilehitblockafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.projectileHitBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/projectilehitblockafterevent)。

---

### projectileHitEntity

`readonly projectileHitEntity:` [`Subscribable`](/zh/api/subscribable)`<`[`ProjectileHitEntityAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/projectilehitentityafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.projectileHitEntity`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/projectilehitentityafterevent)。

---

### scriptEventReceive

`readonly scriptEventReceive:` [`Subscribable`](/zh/api/subscribable)`<`[`ScriptEventCommandMessageAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/scripteventcommandmessageafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.scriptEventReceive`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/scripteventcommandmessageafterevent)。

---

### targetBlockHit

`readonly targetBlockHit:` [`Subscribable`](/zh/api/subscribable)`<`[`TargetBlockHitAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/targetblockhitafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.targetBlockHit`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/targetblockhitafterevent)。

---

### tripWireTrip

`readonly tripWireTrip:` [`Subscribable`](/zh/api/subscribable)`<`[`TripWireTripAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/tripwiretripafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.tripWireTrip`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/tripwiretripafterevent)。

---

### weatherChange

`readonly weatherChange:` [`Subscribable`](/zh/api/subscribable)`<`[`WeatherChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/weatherchangeafterevent)`>`

对应 `@minecraft/server` 中的 [`WorldAfterEvents.weatherChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/weatherchangeafterevent)。

---

## 使用示例

```typescript
import { router } from '@kairo-js/router'

router.afterEvents.playerJoin.subscribe((ev) => {
  console.log(`${ev.playerName} joined`)
})
```
