# AddonEventRegistry

`import { router } from '@kairo-js/router'`

通过 `ev.events` 访问的类。在 `router.beforeEvents.startup` 事件中用于订阅其他插件通过 `router.emit()` 触发的自定义事件。

## 方法

- [deliver](#deliver)
- [getSubscriptions](#getsubscriptions)
- [on](#on)

### deliver {#deliver}

```typescript
deliver(emitterAddonId: string, eventName: string, payload: unknown): void
```

将事件传递给已注册的处理器。由框架内部调用。

**参数**

- **emitterAddonId:** `string`

  触发事件的插件 ID。
- **eventName:** `string`

  事件名称。
- **payload:** `unknown`

  事件载荷。

**返回值：** `void`

---

### getSubscriptions {#getsubscriptions}

```typescript
getSubscriptions(): EventSubscription[]
```

返回所有已注册的订阅。

**返回值：** `EventSubscription[]`

---

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
