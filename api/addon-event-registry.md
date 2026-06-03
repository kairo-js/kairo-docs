# AddonEventRegistration

Accessed via `ev.events`. Used inside the `router.beforeEvents.startup` event to subscribe to custom events emitted by other addons via `router.emit()`.

```typescript
interface AddonEventRegistration {
  on<TPayload = unknown>(emitterAddonId: string, eventName: string, handler: EventHandler<TPayload>): void
}
```

## Methods

- [on](#on)

### on {#on}

```typescript
on<TPayload = unknown>(
  emitterAddonId: string,
  eventName: string,
  handler: EventHandler<TPayload>,
): void
```

Subscribes to an event emitted by another addon.

**Parameters**

- **emitterAddonId:** `string`

  The ID of the addon that emits the event.
- **eventName:** `string`

  The name of the event to subscribe to.
- **handler:** `EventHandler<TPayload>`

  Handler invoked when the event is received.

**Returns:** `void`

## Examples

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
