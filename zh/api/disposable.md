# Disposable

`import type { Disposable } from '@kairo-js/router'`

表示一个可释放的资源，例如 `subscribe()` 的返回值。

```typescript
interface Disposable {
  dispose(): void
}
```

## 方法

### dispose()

```typescript
dispose(): void
```

释放该资源。对于事件订阅，调用 `dispose()` 会取消注册处理器。

**返回值：** `void`

## 用法

```typescript
import { router } from '@kairo-js/router'

// Receive a Disposable from subscribe()
const disposable = router.afterEvents.playerJoin.subscribe((ev) => {
  console.log(`${ev.playerName} joined`)
})

// Dispose when the addon deactivates
router.beforeEvents.addonDeactivate.subscribe(() => {
  disposable.dispose()
})
```
