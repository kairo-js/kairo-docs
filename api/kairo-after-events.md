# KairoAfterEvents

`import { router } from '@kairo-js/router'`

`router.afterEvents` からアクセスするクラスです。各プロパティは [`Subscribable<T>`](/api/subscribable) を実装しています。

## プロパティ

### kairo 独自イベント

| プロパティ | 型 | 説明 |
|---|---|---|
| `addonActivate` | `Subscribable<AddonActivateAfterEvent>` | アドオンが起動された後に発火 |

### Minecraft ScriptAPI pass-through イベント

`@minecraft/server` の `WorldAfterEvents` に対応するイベントです。

| プロパティ | 型 | 説明 |
|---|---|---|
| `blockExplode` | `Subscribable<BlockExplodeAfterEvent>` | ブロック爆破後 |
| `buttonPush` | `Subscribable<ButtonPushAfterEvent>` | ボタン押下後 |
| `dataDrivenEntityTrigger` | `Subscribable<DataDrivenEntityTriggerAfterEvent>` | データドリブンエンティティトリガー後 |
| `effectAdd` | `Subscribable<EffectAddAfterEvent>` | エフェクト付与後 |
| `entityDie` | `Subscribable<EntityDieAfterEvent>` | エンティティ死亡後 |
| `entityHeal` | `Subscribable<EntityHealAfterEvent>` | エンティティ回復後 |
| `entityHealthChanged` | `Subscribable<EntityHealthChangedAfterEvent>` | エンティティ体力変化後 |
| `entityHitBlock` | `Subscribable<EntityHitBlockAfterEvent>` | エンティティがブロックに当たった後 |
| `entityHitEntity` | `Subscribable<EntityHitEntityAfterEvent>` | エンティティがエンティティに当たった後 |
| `entityHurt` | `Subscribable<EntityHurtAfterEvent>` | エンティティがダメージを受けた後 |
| `entityItemDrop` | `Subscribable<EntityItemDropAfterEvent>` | エンティティがアイテムをドロップした後 |
| `entityItemPickup` | `Subscribable<EntityItemPickupAfterEvent>` | エンティティがアイテムを拾った後 |
| `entityLoad` | `Subscribable<EntityLoadAfterEvent>` | エンティティ読み込み後 |
| `entityRemove` | `Subscribable<EntityRemoveAfterEvent>` | エンティティ削除後 |
| `entitySpawn` | `Subscribable<EntitySpawnAfterEvent>` | エンティティスポーン後 |
| `explosion` | `Subscribable<ExplosionAfterEvent>` | 爆発後 |
| `gameRuleChange` | `Subscribable<GameRuleChangeAfterEvent>` | ゲームルール変更後 |
| `itemCompleteUse` | `Subscribable<ItemCompleteUseAfterEvent>` | アイテム使用完了後 |
| `itemReleaseUse` | `Subscribable<ItemReleaseUseAfterEvent>` | アイテム使用解除後 |
| `itemStartUse` | `Subscribable<ItemStartUseAfterEvent>` | アイテム使用開始後 |
| `itemStartUseOn` | `Subscribable<ItemStartUseOnAfterEvent>` | アイテムをブロックへの使用開始後 |
| `itemStopUse` | `Subscribable<ItemStopUseAfterEvent>` | アイテム使用停止後 |
| `itemStopUseOn` | `Subscribable<ItemStopUseOnAfterEvent>` | アイテムをブロックへの使用停止後 |
| `itemUse` | `Subscribable<ItemUseAfterEvent>` | アイテム使用後 |
| `leverAction` | `Subscribable<LeverActionAfterEvent>` | レバー操作後 |
| `pistonActivate` | `Subscribable<PistonActivateAfterEvent>` | ピストン作動後 |
| `playerBreakBlock` | `Subscribable<PlayerBreakBlockAfterEvent>` | プレイヤーがブロックを破壊した後 |
| `playerButtonInput` | `Subscribable<PlayerButtonInputAfterEvent>` | プレイヤーのボタン入力後 |
| `playerDimensionChange` | `Subscribable<PlayerDimensionChangeAfterEvent>` | プレイヤーのディメンション移動後 |
| `playerEmote` | `Subscribable<PlayerEmoteAfterEvent>` | プレイヤーがエモートを使用した後 |
| `playerGameModeChange` | `Subscribable<PlayerGameModeChangeAfterEvent>` | プレイヤーのゲームモード変更後 |
| `playerHotbarSelectedSlotChange` | `Subscribable<PlayerHotbarSelectedSlotChangeAfterEvent>` | プレイヤーのホットバースロット変更後 |
| `playerInputModeChange` | `Subscribable<PlayerInputModeChangeAfterEvent>` | プレイヤーの入力モード変更後 |
| `playerInputPermissionCategoryChange` | `Subscribable<PlayerInputPermissionCategoryChangeAfterEvent>` | プレイヤーの入力権限カテゴリ変更後 |
| `playerInteractWithBlock` | `Subscribable<PlayerInteractWithBlockAfterEvent>` | プレイヤーがブロックにインタラクトした後 |
| `playerInteractWithEntity` | `Subscribable<PlayerInteractWithEntityAfterEvent>` | プレイヤーがエンティティにインタラクトした後 |
| `playerInventoryItemChange` | `Subscribable<PlayerInventoryItemChangeAfterEvent>` | プレイヤーのインベントリアイテム変化後 |
| `playerJoin` | `Subscribable<PlayerJoinAfterEvent>` | プレイヤー参加後 |
| `playerLeave` | `Subscribable<PlayerLeaveAfterEvent>` | プレイヤー退出後 |
| `playerPlaceBlock` | `Subscribable<PlayerPlaceBlockAfterEvent>` | プレイヤーがブロックを設置した後 |
| `playerSpawn` | `Subscribable<PlayerSpawnAfterEvent>` | プレイヤースポーン後 |
| `playerSwingStart` | `Subscribable<PlayerSwingStartAfterEvent>` | プレイヤーのスイング開始後 |
| `pressurePlatePop` | `Subscribable<PressurePlatePopAfterEvent>` | 感圧板から離れた後 |
| `pressurePlatePush` | `Subscribable<PressurePlatePushAfterEvent>` | 感圧板を踏んだ後 |
| `projectileHitBlock` | `Subscribable<ProjectileHitBlockAfterEvent>` | 飛び道具がブロックに当たった後 |
| `projectileHitEntity` | `Subscribable<ProjectileHitEntityAfterEvent>` | 飛び道具がエンティティに当たった後 |
| `scriptEventReceive` | `Subscribable<ScriptEventCommandMessageAfterEvent>` | スクリプトイベント受信後 |
| `targetBlockHit` | `Subscribable<TargetBlockHitAfterEvent>` | ターゲットブロックに当たった後 |
| `tripWireTrip` | `Subscribable<TripWireTripAfterEvent>` | 糸が踏まれた後 |
| `weatherChange` | `Subscribable<WeatherChangeAfterEvent>` | 天気変化後 |

## 使用例

```typescript
import { router } from '@kairo-js/router'

router.afterEvents.playerJoin.subscribe((ev) => {
  console.log(`${ev.playerName} が参加しました`)
})
```
