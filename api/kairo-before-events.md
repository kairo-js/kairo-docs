# KairoBeforeEvents

`import { router } from '@kairo-js/router'`

`router.beforeEvents` からアクセスするクラスです。各プロパティは [`Subscribable<T>`](/api/subscribable) を実装しています。

## プロパティ

### kairo 独自イベント

| プロパティ | 型 | 説明 |
|---|---|---|
| `startup` | `Subscribable<KairoStartupBeforeEvent>` | Minecraft の `worldLoad` より前に発火。API 宣言はここで行う |
| `addonDeactivate` | `Subscribable<AddonDeactivateBeforeEvent>` | アドオンが停止される前に発火 |

### Minecraft ScriptAPI pass-through イベント

`@minecraft/server` の `WorldBeforeEvents` に対応するイベントです。

| プロパティ | 型 | 説明 |
|---|---|---|
| `effectAdd` | `Subscribable<EffectAddBeforeEvent>` | エフェクト付与前 |
| `entityHeal` | `Subscribable<EntityHealBeforeEvent>` | エンティティ回復前 |
| `entityItemPickup` | `Subscribable<EntityItemPickupBeforeEvent>` | アイテム拾得前 |
| `entityRemove` | `Subscribable<EntityRemoveBeforeEvent>` | エンティティ削除前 |
| `explosion` | `Subscribable<ExplosionBeforeEvent>` | 爆発前 |
| `itemUse` | `Subscribable<ItemUseBeforeEvent>` | アイテム使用前 |
| `playerBreakBlock` | `Subscribable<PlayerBreakBlockBeforeEvent>` | ブロック破壊前 |
| `playerGameModeChange` | `Subscribable<PlayerGameModeChangeBeforeEvent>` | ゲームモード変更前 |
| `playerInteractWithBlock` | `Subscribable<PlayerInteractWithBlockBeforeEvent>` | ブロックとのインタラクト前 |
| `playerInteractWithEntity` | `Subscribable<PlayerInteractWithEntityBeforeEvent>` | エンティティとのインタラクト前 |
| `playerLeave` | `Subscribable<PlayerLeaveBeforeEvent>` | プレイヤー退出前 |
| `shutdown` | `Subscribable<ShutdownBeforeEvent>` | シャットダウン前 |
| `weatherChange` | `Subscribable<WeatherChangeBeforeEvent>` | 天気変化前 |

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
