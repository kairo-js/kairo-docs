# Overview

**Kairo** (回路, meaning "circuit") is a framework for Minecraft Bedrock Edition that enables communication and dependency management across multiple behavior packs using ScriptAPI.

## kairo and kairo-router

Kairo consists of two components.

| Component | Role |
|---|---|
| **kairo** (`packs/kairo`) | Host behavior pack. Handles routing, dependency resolution, and addon lifecycle management. |
| **kairo-router** (`packages/kairo-router`) | Library used by guest addons. Communicates with other addons through kairo. |

Guest addons only need to include `kairo-router` — the ScriptEvent internals are fully abstracted away.

## How Inter-Addon Communication Works

The Minecraft ScriptAPI has a global namespace only, with no direct function calls between addons. Kairo provides a routing layer using ScriptEvent so that addons can call each other's APIs.

```
[Addon A] ──router.request()──▶ [kairo] ──routing──▶ [Addon B handler]
                                    │
                                hook execution
                               (before / after)
```

The caller only needs to know the target's `addonId` and API name — internal identifiers (kairoId) and ScriptEvent details are invisible to the developer.

## Setup

### 1. Add kairo to your world

Add the `kairo` behavior pack as the first behavior pack in your world.

### 2. Add kairo-router to your addon

```bash
pnpm add @kairo-js/router
```

### 3. Declare your APIs in the startup event

```typescript
import { router } from '@kairo-js/router'

router.beforeEvents.startup.subscribe((ev) => {
  // Register an API handler
  ev.api.register<{ playerId: string }, { balance: number }>(
    'economy/getBalance',
    async ({ playerId }) => ({ balance: 100 }),
  )

  // Hook into another addon's API
  ev.api.hook('other-addon', 'economy/deposit', {
    before: async (ctx) => {
      if (ctx.args.amount < 0) ctx.cancel()
    },
  })
})
```

### 4. Call APIs

```typescript
// fire-and-forget
router.send('economy-addon', 'onTransaction', { amount: 50 })

// await result
const result = await router.request<{ balance: number }>(
  'economy-addon',
  'getBalance',
  { playerId: '...' },
)
if ('cancelled' in result) {
  console.log(result.reason)
} else {
  console.log(result.balance)
}
```
