# KairoStartupBeforeEvent

`import { router } from '@kairo-js/router'`

The event object for `router.beforeEvents.startup`. Not directly instantiable.

Fires before Minecraft's `worldLoad`. Registering APIs, declaring hooks, registering custom commands, and subscribing to addon events are only valid inside this event handler.

## Properties

### api

`readonly api:` [`ApiRegistration`](/api/kairo-api-registry)

Register APIs and hooks.

---

### customCommandRegistry

`readonly customCommandRegistry:` [`KairoCustomCommandRegistry`](/api/kairo-custom-command-registry)

Register custom commands.

---

### events

`readonly events:` [`AddonEventRegistration`](/api/addon-event-registry)

Subscribe to addon events.

---

## Examples

```typescript
import { router } from '@kairo-js/router'

router.beforeEvents.startup.subscribe((ev) => {
  // Register an API
  ev.api.register<{ playerId: string }, { balance: number }>(
    'economy/getBalance',
    async ({ playerId }) => {
      return { balance: getBalance(playerId) }
    },
  )

  // Subscribe to another addon's event
  ev.events.on('other-addon', 'someEvent', (payload) => {
    console.log('Event received:', payload)
  })

  // Register a custom command
  ev.customCommandRegistry.registerCommand(
    { name: 'mycommand', description: 'My command' },
    (origin) => {
      return { success: true }
    },
  )
})
```
