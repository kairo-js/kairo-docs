# AddonEventRegistry

`import { router } from '@kairo-js/router'`

`ev.events` 経由でアクセスするクラスです。`router.beforeEvents.startup` イベント内で、他アドオンが `router.emit()` で送出するカスタムイベントを購読登録します。

## メソッド

- [deliver](#deliver)
- [getSubscriptions](#getsubscriptions)
- [on](#on)

### deliver {#deliver}

```typescript
deliver(emitterAddonId: string, eventName: string, payload: unknown): void
```

イベントを配信します。フレームワーク内部から呼ばれます。

| パラメーター | 型 | 説明 |
|---|---|---|
| `emitterAddonId` | `string` | イベント送出元のアドオン ID |
| `eventName` | `string` | イベント名 |
| `payload` | `unknown` | イベントのデータ |

**返り値:** `void`

---

### getSubscriptions {#getsubscriptions}

```typescript
getSubscriptions(): EventSubscription[]
```

登録済みの購読一覧を返します。

**返り値:** `EventSubscription[]`

---

### on {#on}

```typescript
on<TPayload = unknown>(
  emitterAddonId: string,
  eventName: string,
  handler: EventHandler<TPayload>,
): void
```

他アドオンが emit するイベントを購読します。

| パラメーター | 型 | 説明 |
|---|---|---|
| `emitterAddonId` | `string` | イベント送出元のアドオン ID |
| `eventName` | `string` | 購読するイベント名 |
| `handler` | `EventHandler<TPayload>` | イベント受信時のハンドラ |

**返り値:** `void`

## 使用例

```typescript
import { router } from '@kairo-js/router'

// startup でイベント購読を登録
router.beforeEvents.startup.subscribe((ev) => {
  ev.events.on<{ amount: number }>('economy-addon', 'onTransaction', (payload) => {
    console.log(`取引が発生しました: ${payload.amount}`)
  })
})

// 別アドオン側での emit
router.emit('onTransaction', { amount: 50 })
```
