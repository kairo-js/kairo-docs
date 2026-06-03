# AddonEventRegistry

`import { router } from '@kairo-js/router'`

The class accessed via `ev.events`. Used inside the `router.beforeEvents.startup` event to subscribe to custom events emitted by other addons via `router.emit()`.

## Methods

- [deliver](#deliver)
- [getSubscriptions](#getsubscriptions)
- [on](#on)

### deliver {#deliver}

```typescript
deliver(emitterAddonId: string, eventName: string, payload: unknown): void
```

Delivers an event to registered handlers. Called internally by the framework.

**Parameters**

- **emitterAddonId:** `string`

  The ID of the addon that emitted the event.
- **eventName:** `string`

  The name of the event.
- **payload:** `unknown`

  The event payload.

**Returns:** `void`

---

### getSubscriptions {#getsubscriptions}

```typescript
getSubscriptions(): EventSubscription[]
```

Returns all registered subscriptions.

**Returns:** `EventSubscription[]`

---

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

## Usage

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
