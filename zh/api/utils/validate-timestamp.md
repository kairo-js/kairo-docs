# validateTimestamp

`import { validateTimestamp } from '@kairo-js/utils'`

验证时间戳有效性。检查消息中携带的时间戳是否在可接受的范围内，防止过期消息或来自未来的消息被处理。

## 函数


```typescript
validateTimestamp(
  currentTick: number,
  timestamp: number,
  timeout: number,
  onTimeout: () => void,
  onFuture: () => void,
): void
```

**参数**

- **currentTick:** `number`

  当前 tick 计数，通常来自 `router.currentTick`。
- **timestamp:** `number`

  要验证的时间戳（tick 单位）。
- **timeout:** `number`

  允许的最大过期时间，单位为 tick。若 `currentTick - timestamp > timeout`，则认为时间戳已过期。
- **onTimeout:** `() => void`

  时间戳已过期时调用的回调函数。
- **onFuture:** `() => void`

  时间戳来自未来（`timestamp > currentTick`）时调用的回调函数。

**返回值：** `void`

## 用法

```typescript
import { validateTimestamp } from '@kairo-js/utils'
import { router } from '@kairo-js/router'

function handleMessage(message: { timestamp: number; data: unknown }) {
  validateTimestamp(
    router.currentTick,
    message.timestamp,
    20, // 20 ticks timeout
    () => {
      console.warn('Message timed out, ignoring.')
    },
    () => {
      console.warn('Message timestamp is in the future, ignoring.')
    },
  )

  // Process message...
}
```
