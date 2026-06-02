# Subscribable

`import type { Subscribable } from '@kairo-js/router'`

`KairoBeforeEvents` 和 `KairoAfterEvents` 上每个属性的类型。提供事件订阅与取消订阅功能。

```typescript
interface Subscribable<T> {
  subscribe(fn: (arg: T) => void): Disposable
  unsubscribe(fn: (arg: T) => void): void
}
```

## 方法

### subscribe()

```typescript
subscribe(fn: (arg: T) => void): Disposable
```

注册一个事件处理器。返回的 [`Disposable`](/zh/api/disposable) 可用于稍后取消订阅。

**参数**

- **fn:** `(arg: T) => void`

  事件触发时调用的处理器。

**返回值：** [`Disposable`](/zh/api/disposable)

---

### unsubscribe()

```typescript
unsubscribe(fn: (arg: T) => void): void
```

移除之前注册的事件处理器。需传入与调用 `subscribe()` 时相同的函数引用。

**参数**

- **fn:** `(arg: T) => void`

  要移除的处理器。

**返回值：** `void`

## 用法

```typescript
import { router } from '@kairo-js/router'

// Subscribe and hold the Disposable
const disposable = router.afterEvents.playerJoin.subscribe((ev) => {
  console.log(`${ev.playerName} joined`)
})

// Dispose when no longer needed
disposable.dispose()

// Alternatively, unsubscribe by function reference
const handler = (ev: PlayerJoinAfterEvent) => {
  console.log(`${ev.playerName} joined`)
}
router.afterEvents.playerJoin.subscribe(handler)
router.afterEvents.playerJoin.unsubscribe(handler)
```
