# Disposable

`import type { Disposable } from '@kairo-js/router'`

Represents a releasable resource, such as the return value of `subscribe()`.

```typescript
interface Disposable {
  dispose(): void
}
```

## Methods

### dispose()

```typescript
dispose(): void
```

Releases the resource. For event subscriptions, calling `dispose()` unsubscribes the handler.

**Returns:** `void`

## Usage

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
