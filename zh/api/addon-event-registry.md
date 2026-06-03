# AddonEventRegistration

通过 `ev.events` 访问的接口。在 `router.beforeEvents.startup` 事件中用于订阅其他插件通过 `router.emit()` 触发的自定义事件。

```typescript
interface AddonEventRegistration {
  on<TPayload = unknown>(emitterAddonId: string, eventName: string, handler: EventHandler<TPayload>): void
}
```

## 方法

- [on](#on)

### on {#on}

```typescript
on<TPayload = unknown>(
  emitterAddonId: string,
  eventName: string,
  handler: EventHandler<TPayload>,
): void
```

订阅由另一个插件触发的事件。

**参数**

- **emitterAddonId:** `string`

  触发事件的插件 ID。
- **eventName:** `string`

  要订阅的事件名称。
- **handler:** `EventHandler<TPayload>`

  接收到事件时调用的处理器。

**返回值：** `void`

## 使用示例

```typescript
import { router } from '@kairo-js/router'

// Register event subscription during startup
router.beforeEvents.startup.subscribe((ev) => {
  ev.events.on<{ amount: number }>('economy-addon', 'onTransaction', (payload) => {
    console.log(`Transaction occurred: ${payload.amount}`)
  })
})

// In the emitting addon
router.emit('onTransaction', { amount: 50 })
```
