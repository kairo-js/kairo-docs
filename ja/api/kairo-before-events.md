# KairoBeforeEvents

`import { router } from '@kairo-js/router'`

`router.beforeEvents` からアクセスするクラスです。各プロパティは [`Subscribable<T>`](/ja/api/subscribable) を実装しています。

## プロパティ

### kairo 独自イベント

### addonDeactivate

`readonly addonDeactivate:` [`Subscribable`](/ja/api/subscribable)`<`[`AddonDeactivateBeforeEvent`](/ja/api/addon-deactivate-before-event)`>`

アドオンが停止される前に発火。

---

### startup

`readonly startup:` [`Subscribable`](/ja/api/subscribable)`<`[`KairoStartupBeforeEvent`](/ja/api/kairo-startup-before-event)`>`

Minecraft の `worldLoad` より前に発火。API 宣言はここで行う。

---

### Minecraft ScriptAPI pass-through イベント

`@minecraft/server` の `WorldBeforeEvents` に対応するイベントです。

### effectAdd

`readonly effectAdd:` [`Subscribable`](/ja/api/subscribable)`<`[`EffectAddBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/effectaddbeforeevent)`>`

`@minecraft/server` の [`WorldBeforeEvents.effectAdd`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/effectaddbeforeevent) に対応します。

---

### entityHeal

`readonly entityHeal:` [`Subscribable`](/ja/api/subscribable)`<`[`EntityHealBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealbeforeevent)`>`

`@minecraft/server` の [`WorldBeforeEvents.entityHeal`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityhealbeforeevent) に対応します。

---

### entityItemPickup

`readonly entityItemPickup:` [`Subscribable`](/ja/api/subscribable)`<`[`EntityItemPickupBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitempickupbeforeevent)`>`

`@minecraft/server` の [`WorldBeforeEvents.entityItemPickup`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityitempickupbeforeevent) に対応します。

---

### entityRemove

`readonly entityRemove:` [`Subscribable`](/ja/api/subscribable)`<`[`EntityRemoveBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityremovebeforeevent)`>`

`@minecraft/server` の [`WorldBeforeEvents.entityRemove`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityremovebeforeevent) に対応します。

---

### explosion

`readonly explosion:` [`Subscribable`](/ja/api/subscribable)`<`[`ExplosionBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/explosionbeforeevent)`>`

`@minecraft/server` の [`WorldBeforeEvents.explosion`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/explosionbeforeevent) に対応します。

---

### itemUse

`readonly itemUse:` [`Subscribable`](/ja/api/subscribable)`<`[`ItemUseBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemusebeforeevent)`>`

`@minecraft/server` の [`WorldBeforeEvents.itemUse`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/itemusebeforeevent) に対応します。

---

### playerBreakBlock

`readonly playerBreakBlock:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerBreakBlockBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbreakblockbeforeevent)`>`

`@minecraft/server` の [`WorldBeforeEvents.playerBreakBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerbreakblockbeforeevent) に対応します。

---

### playerGameModeChange

`readonly playerGameModeChange:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerGameModeChangeBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playergamemodechangebeforeevent)`>`

`@minecraft/server` の [`WorldBeforeEvents.playerGameModeChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playergamemodechangebeforeevent) に対応します。

---

### playerInteractWithBlock

`readonly playerInteractWithBlock:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerInteractWithBlockBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockbeforeevent)`>`

`@minecraft/server` の [`WorldBeforeEvents.playerInteractWithBlock`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithblockbeforeevent) に対応します。

---

### playerInteractWithEntity

`readonly playerInteractWithEntity:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerInteractWithEntityBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithentitybeforeevent)`>`

`@minecraft/server` の [`WorldBeforeEvents.playerInteractWithEntity`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerinteractwithentitybeforeevent) に対応します。

---

### playerLeave

`readonly playerLeave:` [`Subscribable`](/ja/api/subscribable)`<`[`PlayerLeaveBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerleavebeforeevent)`>`

`@minecraft/server` の [`WorldBeforeEvents.playerLeave`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/playerleavebeforeevent) に対応します。

---

### shutdown

`readonly shutdown:` [`Subscribable`](/ja/api/subscribable)`<`[`ShutdownBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/shutdownbeforeevent)`>`

`@minecraft/server` の [`WorldBeforeEvents.shutdown`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/shutdownbeforeevent) に対応します。

---

### weatherChange

`readonly weatherChange:` [`Subscribable`](/ja/api/subscribable)`<`[`WeatherChangeBeforeEvent`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/weatherchangebeforeevent)`>`

`@minecraft/server` の [`WorldBeforeEvents.weatherChange`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/weatherchangebeforeevent) に対応します。

---

## 使用例

```typescript
import { router } from '@kairo-js/router'

router.beforeEvents.startup.subscribe((ev) => {
  ev.api.register('myAddon/hello', async () => {
    return { message: 'hello' }
  })
})

router.beforeEvents.playerBreakBlock.subscribe((ev) => {
  // ブロック破壊をキャンセルする例
  ev.cancel()
})
```
