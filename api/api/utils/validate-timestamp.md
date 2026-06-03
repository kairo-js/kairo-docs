# validateTimestamp

`import { validateTimestamp } from '@kairo-js/utils'`

Validates a message timestamp against the current tick. Throws the appropriate error if the timestamp has exceeded its timeout window or if the timestamp is set in the future relative to the current tick.

```typescript
function validateTimestamp(
  currentTick: number,
  timestamp: number,
  timeout: number,
  onTimeout: () => Error,
  onFuture: () => Error,
): void
```

**Parameters**

- **currentTick:** `number`

  The current tick count, typically obtained from `router.currentTick`.
- **timestamp:** `number`

  The tick value recorded when the message or event was created.
- **timeout:** `number`

  The maximum number of ticks allowed between `timestamp` and `currentTick` before the message is considered expired.
- **onTimeout:** `() => Error`

  A factory function that produces the `Error` to throw when the timestamp has timed out (`currentTick - timestamp > timeout`).
- **onFuture:** `() => Error`

  A factory function that produces the `Error` to throw when the timestamp is in the future (`timestamp > currentTick`).

**Returns:** `void`

## Usage

```typescript
import { validateTimestamp } from '@kairo-js/utils'
import { router } from '@kairo-js/router'

validateTimestamp(
  router.currentTick,
  message.timestamp,
  20,
  () => new Error('Message timed out'),
  () => new Error('Message timestamp is in the future'),
)
```
