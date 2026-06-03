# Subscribable

`import type { Subscribable } from '@kairo-js/router'`

The type of each property on `KairoBeforeEvents` and `KairoAfterEvents`. Provides event subscription and unsubscription.

```typescript
interface Subscribable<T> {
  subscribe(fn: (arg: T) => void): Disposable
  unsubscribe(fn: (arg: T) => void): void
}
```

## Methods

### subscribe()

```typescript
subscribe(fn: (arg: T) => void): Disposable
```

Registers an event handler. The returned [`Disposable`](/api/disposable) can be used to unsubscribe later.

**Parameters**

- **fn:** `(arg: T) => void`

  The handler to invoke when the event fires.

**Returns:** [`Disposable`](/api/disposable)

---

### unsubscribe()

```typescript
unsubscribe(fn: (arg: T) => void): void
```

Removes a previously registered event handler. Pass the same function reference that was passed to `subscribe()`.

**Parameters**

- **fn:** `(arg: T) => void`

  The handler to remove.

**Returns:** `void`

## Usage

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
