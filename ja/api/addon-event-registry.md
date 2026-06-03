# AddonEventRegistration

`ev.events` 経由でアクセスするインターフェースです。`router.beforeEvents.startup` イベント内で、他アドオンが `router.emit()` で送出するカスタムイベントを購読登録します。

```typescript
interface AddonEventRegistration {
  on<TPayload = unknown>(emitterAddonId: string, eventName: string, handler: EventHandler<TPayload>): void
}
```

## メソッド

- [on](#on)

### on {#on}

```typescript
on<TPayload = unknown>(
  emitterAddonId: string,
  eventName: string,
  handler: EventHandler<TPayload>,
): void
```

他アドオンが emit するイベントを購読します。

**パラメーター**

- **emitterAddonId:** `string`

  イベント送出元のアドオン ID。
- **eventName:** `string`

  購読するイベント名。
- **handler:** `EventHandler<TPayload>`

  イベント受信時のハンドラ。

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
