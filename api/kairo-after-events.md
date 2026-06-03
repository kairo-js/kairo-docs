# KairoAfterEvents

`import { router } from '@kairo-js/router'`

The class accessed via `router.afterEvents`. Each property implements [`Subscribable<T>`](/api/subscribable).

## Properties

### Kairo-specific events

### Minecraft ScriptAPI pass-through events

Events corresponding to `WorldAfterEvents` from `@minecraft/server`.

### addonActivate

`readonly addonActivate:` [`Subscribable`](/api/subscribable)`<`[`AddonActivateAfterEvent`](/api/addon-activate-after-event)`>`

Fires after an addon is activated.

---

### blockExplode

`readonly blockExplode:` [`Subscribable`](/api/subscribable)`<`[`BlockExplodeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/blockexplodeafterevent)`>`

Corresponds to [`WorldAfterEvents.blockExplode`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/blockexplodeafterevent) in `@minecraft/server`.

---

### buttonPush

`readonly buttonPush:` [`Subscribable`](/api/subscribable)`<`[`ButtonPushAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/buttonpushafterevent)`>`

Corresponds to [`WorldAfterEvents.buttonPush`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/buttonpushafterevent) in `@minecraft/server`.

---

### dataDrivenEntityTrigger

`readonly dataDrivenEntityTrigger:` [`Subscribable`](/api/subscribable)`<`[`DataDrivenEntityTriggerAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/datadrivenentitytriggerafterevent)`>`

Corresponds to [`WorldAfterEvents.dataDrivenEntityTrigger`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/datadrivenentitytriggerafterevent) in `@minecraft/server`.

---

### effectAdd

`readonly effectAdd:` [`Subscribable`](/api/subscribable)`<`[`EffectAddAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/effectaddafterevent)`>`

Corresponds to [`WorldAfterEvents.effectAdd`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/effectaddafterevent) in `@minecraft/server`.

---

### entityDie

`readonly entityDie:` [`Subscribable`](/api/subscribable)`<`[`EntityDieAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entitydieafterevent)`>`

Corresponds to [`WorldAfterEvents.entityDie`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entitydieafterevent) in `@minecraft/server`.

---

### entityHeal

`readonly entityHeal:` [`Subscribable`](/api/subscribable)`<`[`EntityHealAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealafterevent)`>`

Corresponds to [`WorldAfterEvents.entityHeal`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealafterevent) in `@minecraft/server`.

---

### entityHealthChanged

`readonly entityHealthChanged:` [`Subscribable`](/api/subscribable)`<`[`EntityHealthChangedAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealthchangedafterevent)`>`

Corresponds to [`WorldAfterEvents.entityHealthChanged`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealthchangedafterevent) in `@minecraft/server`.

---

### entityHitBlock

`readonly entityHitBlock:` [`Subscribable`](/api/subscribable)`<`[`EntityHitBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhitblockafterevent)`>`

Corresponds to [`WorldAfterEvents.entityHitBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhitblockafterevent) in `@minecraft/server`.

---

### entityHitEntity

`readonly entityHitEntity:` [`Subscribable`](/api/subscribable)`<`[`EntityHitEntityAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhitentityafterevent)`>`

Corresponds to [`WorldAfterEvents.entityHitEntity`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhitentityafterevent) in `@minecraft/server`.

---

### entityHurt

`readonly entityHurt:` [`Subscribable`](/api/subscribable)`<`[`EntityHurtAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhurtafterevent)`>`

Corresponds to [`WorldAfterEvents.entityHurt`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhurtafterevent) in `@minecraft/server`.

---

### entityItemDrop

`readonly entityItemDrop:` [`Subscribable`](/api/subscribable)`<`[`EntityItemDropAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitemdropafterevent)`>`

Corresponds to [`WorldAfterEvents.entityItemDrop`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitemdropafterevent) in `@minecraft/server`.

---

### entityItemPickup

`readonly entityItemPickup:` [`Subscribable`](/api/subscribable)`<`[`EntityItemPickupAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitempickupafterevent)`>`

Corresponds to [`WorldAfterEvents.entityItemPickup`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitempickupafterevent) in `@minecraft/server`.

---

### entityLoad

`readonly entityLoad:` [`Subscribable`](/api/subscribable)`<`[`EntityLoadAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityloadafterevent)`>`

Corresponds to [`WorldAfterEvents.entityLoad`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityloadafterevent) in `@minecraft/server`.

---

### entityRemove

`readonly entityRemove:` [`Subscribable`](/api/subscribable)`<`[`EntityRemoveAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityremoveafterevent)`>`

Corresponds to [`WorldAfterEvents.entityRemove`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityremoveafterevent) in `@minecraft/server`.

---

### entitySpawn

`readonly entitySpawn:` [`Subscribable`](/api/subscribable)`<`[`EntitySpawnAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityspawnafterevent)`>`

Corresponds to [`WorldAfterEvents.entitySpawn`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityspawnafterevent) in `@minecraft/server`.

---

### explosion

`readonly explosion:` [`Subscribable`](/api/subscribable)`<`[`ExplosionAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/explosionafterevent)`>`

Corresponds to [`WorldAfterEvents.explosion`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/explosionafterevent) in `@minecraft/server`.

---

### gameRuleChange

`readonly gameRuleChange:` [`Subscribable`](/api/subscribable)`<`[`GameRuleChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/gamerulechangeafterevent)`>`

Corresponds to [`WorldAfterEvents.gameRuleChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/gamerulechangeafterevent) in `@minecraft/server`.

---

### itemCompleteUse

`readonly itemCompleteUse:` [`Subscribable`](/api/subscribable)`<`[`ItemCompleteUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemcompleteuseafterevent)`>`

Corresponds to [`WorldAfterEvents.itemCompleteUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemcompleteuseafterevent) in `@minecraft/server`.

---

### itemReleaseUse

`readonly itemReleaseUse:` [`Subscribable`](/api/subscribable)`<`[`ItemReleaseUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemreleaseuseafterevent)`>`

Corresponds to [`WorldAfterEvents.itemReleaseUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemreleaseuseafterevent) in `@minecraft/server`.

---

### itemStartUse

`readonly itemStartUse:` [`Subscribable`](/api/subscribable)`<`[`ItemStartUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstartuseafterevent)`>`

Corresponds to [`WorldAfterEvents.itemStartUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstartuseafterevent) in `@minecraft/server`.

---

### itemStartUseOn

`readonly itemStartUseOn:` [`Subscribable`](/api/subscribable)`<`[`ItemStartUseOnAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstartuseonafterevent)`>`

Corresponds to [`WorldAfterEvents.itemStartUseOn`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstartuseonafterevent) in `@minecraft/server`.

---

### itemStopUse

`readonly itemStopUse:` [`Subscribable`](/api/subscribable)`<`[`ItemStopUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstopuseafterevent)`>`

Corresponds to [`WorldAfterEvents.itemStopUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstopuseafterevent) in `@minecraft/server`.

---

### itemStopUseOn

`readonly itemStopUseOn:` [`Subscribable`](/api/subscribable)`<`[`ItemStopUseOnAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstopuseonafterevent)`>`

Corresponds to [`WorldAfterEvents.itemStopUseOn`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemstopuseonafterevent) in `@minecraft/server`.

---

### itemUse

`readonly itemUse:` [`Subscribable`](/api/subscribable)`<`[`ItemUseAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemuseafterevent)`>`

Corresponds to [`WorldAfterEvents.itemUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemuseafterevent) in `@minecraft/server`.

---

### leverAction

`readonly leverAction:` [`Subscribable`](/api/subscribable)`<`[`LeverActionAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/leveractionafterevent)`>`

Corresponds to [`WorldAfterEvents.leverAction`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/leveractionafterevent) in `@minecraft/server`.

---

### pistonActivate

`readonly pistonActivate:` [`Subscribable`](/api/subscribable)`<`[`PistonActivateAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pistonactivateafterevent)`>`

Corresponds to [`WorldAfterEvents.pistonActivate`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pistonactivateafterevent) in `@minecraft/server`.

---

### playerBreakBlock

`readonly playerBreakBlock:` [`Subscribable`](/api/subscribable)`<`[`PlayerBreakBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbreakblockafterevent)`>`

Corresponds to [`WorldAfterEvents.playerBreakBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbreakblockafterevent) in `@minecraft/server`.

---

### playerButtonInput

`readonly playerButtonInput:` [`Subscribable`](/api/subscribable)`<`[`PlayerButtonInputAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbuttoninputafterevent)`>`

Corresponds to [`WorldAfterEvents.playerButtonInput`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbuttoninputafterevent) in `@minecraft/server`.

---

### playerDimensionChange

`readonly playerDimensionChange:` [`Subscribable`](/api/subscribable)`<`[`PlayerDimensionChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerdimensionchangeafterevent)`>`

Corresponds to [`WorldAfterEvents.playerDimensionChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerdimensionchangeafterevent) in `@minecraft/server`.

---

### playerEmote

`readonly playerEmote:` [`Subscribable`](/api/subscribable)`<`[`PlayerEmoteAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playeremoteafterevent)`>`

Corresponds to [`WorldAfterEvents.playerEmote`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playeremoteafterevent) in `@minecraft/server`.

---

### playerGameModeChange

`readonly playerGameModeChange:` [`Subscribable`](/api/subscribable)`<`[`PlayerGameModeChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playergamemodechangeafterevent)`>`

Corresponds to [`WorldAfterEvents.playerGameModeChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playergamemodechangeafterevent) in `@minecraft/server`.

---

### playerHotbarSelectedSlotChange

`readonly playerHotbarSelectedSlotChange:` [`Subscribable`](/api/subscribable)`<`[`PlayerHotbarSelectedSlotChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerhotbarselectedslotchangeafterevent)`>`

Corresponds to [`WorldAfterEvents.playerHotbarSelectedSlotChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerhotbarselectedslotchangeafterevent) in `@minecraft/server`.

---

### playerInputModeChange

`readonly playerInputModeChange:` [`Subscribable`](/api/subscribable)`<`[`PlayerInputModeChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinputmodechangeafterevent)`>`

Corresponds to [`WorldAfterEvents.playerInputModeChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinputmodechangeafterevent) in `@minecraft/server`.

---

### playerInputPermissionCategoryChange

`readonly playerInputPermissionCategoryChange:` [`Subscribable`](/api/subscribable)`<`[`PlayerInputPermissionCategoryChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinputpermissioncategorychangeafterevent)`>`

Corresponds to [`WorldAfterEvents.playerInputPermissionCategoryChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinputpermissioncategorychangeafterevent) in `@minecraft/server`.

---

### playerInteractWithBlock

`readonly playerInteractWithBlock:` [`Subscribable`](/api/subscribable)`<`[`PlayerInteractWithBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockafterevent)`>`

Corresponds to [`WorldAfterEvents.playerInteractWithBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockafterevent) in `@minecraft/server`.

---

### playerInteractWithEntity

`readonly playerInteractWithEntity:` [`Subscribable`](/api/subscribable)`<`[`PlayerInteractWithEntityAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithentityafterevent)`>`

Corresponds to [`WorldAfterEvents.playerInteractWithEntity`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithentityafterevent) in `@minecraft/server`.

---

### playerInventoryItemChange

`readonly playerInventoryItemChange:` [`Subscribable`](/api/subscribable)`<`[`PlayerInventoryItemChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinventoryitemchangeafterevent)`>`

Corresponds to [`WorldAfterEvents.playerInventoryItemChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinventoryitemchangeafterevent) in `@minecraft/server`.

---

### playerJoin

`readonly playerJoin:` [`Subscribable`](/api/subscribable)`<`[`PlayerJoinAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerjoinafterevent)`>`

Corresponds to [`WorldAfterEvents.playerJoin`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerjoinafterevent) in `@minecraft/server`.

---

### playerLeave

`readonly playerLeave:` [`Subscribable`](/api/subscribable)`<`[`PlayerLeaveAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerleaveafterevent)`>`

Corresponds to [`WorldAfterEvents.playerLeave`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerleaveafterevent) in `@minecraft/server`.

---

### playerPlaceBlock

`readonly playerPlaceBlock:` [`Subscribable`](/api/subscribable)`<`[`PlayerPlaceBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerplaceblockafterevent)`>`

Corresponds to [`WorldAfterEvents.playerPlaceBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerplaceblockafterevent) in `@minecraft/server`.

---

### playerSpawn

`readonly playerSpawn:` [`Subscribable`](/api/subscribable)`<`[`PlayerSpawnAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerspawnafterevent)`>`

Corresponds to [`WorldAfterEvents.playerSpawn`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerspawnafterevent) in `@minecraft/server`.

---

### playerSwingStart

`readonly playerSwingStart:` [`Subscribable`](/api/subscribable)`<`[`PlayerSwingStartAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerswingstartafterevent)`>`

Corresponds to [`WorldAfterEvents.playerSwingStart`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerswingstartafterevent) in `@minecraft/server`.

---

### pressurePlatePop

`readonly pressurePlatePop:` [`Subscribable`](/api/subscribable)`<`[`PressurePlatePopAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pressureplatepopafterevent)`>`

Corresponds to [`WorldAfterEvents.pressurePlatePop`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pressureplatepopafterevent) in `@minecraft/server`.

---

### pressurePlatePush

`readonly pressurePlatePush:` [`Subscribable`](/api/subscribable)`<`[`PressurePlatePushAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pressureplatepushafterevent)`>`

Corresponds to [`WorldAfterEvents.pressurePlatePush`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/pressureplatepushafterevent) in `@minecraft/server`.

---

### projectileHitBlock

`readonly projectileHitBlock:` [`Subscribable`](/api/subscribable)`<`[`ProjectileHitBlockAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/projectilehitblockafterevent)`>`

Corresponds to [`WorldAfterEvents.projectileHitBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/projectilehitblockafterevent) in `@minecraft/server`.

---

### projectileHitEntity

`readonly projectileHitEntity:` [`Subscribable`](/api/subscribable)`<`[`ProjectileHitEntityAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/projectilehitentityafterevent)`>`

Corresponds to [`WorldAfterEvents.projectileHitEntity`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/projectilehitentityafterevent) in `@minecraft/server`.

---

### scriptEventReceive

`readonly scriptEventReceive:` [`Subscribable`](/api/subscribable)`<`[`ScriptEventCommandMessageAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/scripteventcommandmessageafterevent)`>`

Corresponds to [`WorldAfterEvents.scriptEventReceive`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/scripteventcommandmessageafterevent) in `@minecraft/server`.

---

### targetBlockHit

`readonly targetBlockHit:` [`Subscribable`](/api/subscribable)`<`[`TargetBlockHitAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/targetblockhitafterevent)`>`

Corresponds to [`WorldAfterEvents.targetBlockHit`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/targetblockhitafterevent) in `@minecraft/server`.

---

### tripWireTrip

`readonly tripWireTrip:` [`Subscribable`](/api/subscribable)`<`[`TripWireTripAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/tripwiretripafterevent)`>`

Corresponds to [`WorldAfterEvents.tripWireTrip`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/tripwiretripafterevent) in `@minecraft/server`.

---

### weatherChange

`readonly weatherChange:` [`Subscribable`](/api/subscribable)`<`[`WeatherChangeAfterEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/weatherchangeafterevent)`>`

Corresponds to [`WorldAfterEvents.weatherChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/weatherchangeafterevent) in `@minecraft/server`.

---

## Examples

```typescript
import { router } from '@kairo-js/router'

router.afterEvents.playerJoin.subscribe((ev) => {
  console.log(`${ev.playerName} joined`)
})
```
