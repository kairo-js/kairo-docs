# Getting Started

## Install kairo

Add the **kairo** behavior pack to your world. It acts as the communication hub between all your addons.

> Download kairo from [GitHub Releases](https://github.com/kairo-js/kairo/releases).

## Using kairo-router

Add `kairo-router` to your addon to start communicating with other addons.

### Installation

```bash
pnpm add @kairo-js/router
```

### Declare your APIs in the startup event

All API registrations and hook declarations must happen inside `router.beforeEvents.startup`.

```typescript
import { router } from '@kairo-js/router'

router.beforeEvents.startup.subscribe((ev) => {
  // Register an API your addon provides
  ev.api.register<{ playerId: string }, { balance: number }>(
    'economy/getBalance',
    async ({ playerId }) => ({ balance: 100 }),
  )
})
```

### Call other addons' APIs

```typescript
// fire-and-forget
router.send('economy-addon', 'onTransaction', { amount: 50 })

// await result
const result = await router.request<{ balance: number }>(
  'economy-addon',
  'getBalance',
  { playerId: '...' },
)

if ('canceled' in result) {
  console.log(result.reason)
} else {
  console.log(result.balance)
}
```

For the full API, see the [kairo-router API Reference](/api/kairo-router).

## Required dependencies

Your addon's `properties.ts` must declare `"kairo"` as a required dependency. Omitting it causes `router.init()` to throw.

```typescript
export const properties: AddonProperties = {
  id: 'my-addon',
  // ...
  dependencies: {
    kairo: '^1.0.0',
    // optional: 'kairo-database': '^2.0.0' — required for router.save/load/delete/has
  },
}
```

## Standalone mode

Pass `{ standalone: true }` to `router.init()` to enable standalone activation. When kairo is not installed, the addon activates automatically — but only if its required dependencies contain nothing beyond `kairo` and `kairo-database`. This is useful for self-contained addons that optionally integrate with kairo's lifecycle management.

See [`RouterInitOptions`](/api/router-init-options) for full details.
