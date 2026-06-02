# KairoBeforeEvents

`import { router } from '@kairo-js/router'`

`router.beforeEvents` からアクセスするクラスです。各プロパティは [`Subscribable<T>`](/api/subscribable) を実装しています。

## プロパティ

### kairo 独自イベント

### startup

`readonly startup: Subscribable<KairoStartupBeforeEvent>`

Minecraft の `worldLoad` より前に発火。API 宣言はここで行う。

---

### addonDeactivate

`readonly addonDeactivate: Subscribable<AddonDeactivateBeforeEvent>`

アドオンが停止される前に発火。

---

### Minecraft ScriptAPI pass-through イベント

`@minecraft/server` の `WorldBeforeEvents` に対応するイベントです。

### effectAdd

`readonly effectAdd: Subscribable<EffectAddBeforeEvent>`

`@minecraft/server` の `WorldBeforeEvents.effectAdd` に対応します。

---

### entityHeal

`readonly entityHeal: Subscribable<EntityHealBeforeEvent>`

`@minecraft/server` の `WorldBeforeEvents.entityHeal` に対応します。

---

### entityItemPickup

`readonly entityItemPickup: Subscribable<EntityItemPickupBeforeEvent>`

`@minecraft/server` の `WorldBeforeEvents.entityItemPickup` に対応します。

---

### entityRemove

`readonly entityRemove: Subscribable<EntityRemoveBeforeEvent>`

`@minecraft/server` の `WorldBeforeEvents.entityRemove` に対応します。

---

### explosion

`readonly explosion: Subscribable<ExplosionBeforeEvent>`

`@minecraft/server` の `WorldBeforeEvents.explosion` に対応します。

---

### itemUse

`readonly itemUse: Subscribable<ItemUseBeforeEvent>`

`@minecraft/server` の `WorldBeforeEvents.itemUse` に対応します。

---

### playerBreakBlock

`readonly playerBreakBlock: Subscribable<PlayerBreakBlockBeforeEvent>`

`@minecraft/server` の `WorldBeforeEvents.playerBreakBlock` に対応します。

---

### playerGameModeChange

`readonly playerGameModeChange: Subscribable<PlayerGameModeChangeBeforeEvent>`

`@minecraft/server` の `WorldBeforeEvents.playerGameModeChange` に対応します。

---

### playerInteractWithBlock

`readonly playerInteractWithBlock: Subscribable<PlayerInteractWithBlockBeforeEvent>`

`@minecraft/server` の `WorldBeforeEvents.playerInteractWithBlock` に対応します。

---

### playerInteractWithEntity

`readonly playerInteractWithEntity: Subscribable<PlayerInteractWithEntityBeforeEvent>`

`@minecraft/server` の `WorldBeforeEvents.playerInteractWithEntity` に対応します。

---

### playerLeave

`readonly playerLeave: Subscribable<PlayerLeaveBeforeEvent>`

`@minecraft/server` の `WorldBeforeEvents.playerLeave` に対応します。

---

### shutdown

`readonly shutdown: Subscribable<ShutdownBeforeEvent>`

`@minecraft/server` の `WorldBeforeEvents.shutdown` に対応します。

---

### weatherChange

`readonly weatherChange: Subscribable<WeatherChangeBeforeEvent>`

`@minecraft/server` の `WorldBeforeEvents.weatherChange` に対応します。

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
