# kairo-router API Reference

API reference for the library used by guest addons. All declarations (`register` / `hook`) are only valid inside `router.beforeEvents.startup`.

## Startup Event

### `router.beforeEvents.startup`

Fires before Minecraft's `worldLoad`. All API declarations must happen here.

```typescript
router.beforeEvents.startup.subscribe((ev) => {
  // ev.api.register() / ev.api.hook() / ev.customCommandRegistry.registerCommand()
})
```

`ev.api` is sealed after startup ends. Calling it outside startup throws an error.

---

## Registering APIs

### `ev.api.register()`

Declares an API handler provided by your addon.

```typescript
ev.api.register<TArgs, TReturn>(
  apiName: string,
  handler: (args: TArgs) => TReturn | Promise<TReturn>,
): void
```

- `addonId` is derived from context automatically — you don't specify it.
- Registering the same `apiName` twice within the same `addonId` throws an error.
- Handlers only become callable after the activation phase.

```typescript
ev.api.register<{ playerId: string }, { balance: number }>(
  'economy/getBalance',
  async ({ playerId }) => ({ balance: 100 }),
)
```

::: tip API Name Namespacing
Use slash-separated namespaces like `economy/getBalance` to avoid collisions and improve discoverability.
:::

---

## Calling APIs

### `router.send()`

Calls an API in fire-and-forget fashion. Does not wait for a response.

```typescript
router.send(
  targetAddonId: string,
  apiName: string,
  args?: unknown,
): void
```

- If the target addonId doesn't exist or is inactive, it is silently ignored.
- If a hook cancels the call, the caller is not notified.
- **No ordering guarantee**: arrival order of multiple `send` calls is unspecified.

```typescript
router.send('economy-addon', 'onTransaction', { amount: 50 })
```

### `router.request()`

Calls an API and awaits the result.

```typescript
router.request<TReturn>(
  targetAddonId: string,
  apiName: string,
  args?: unknown,
  options?: { timeout?: number }, // in ticks. Default: 20 ticks
): Promise<TReturn | CancelledResult>
```

```typescript
const result = await router.request<{ balance: number }>(
  'economy-addon',
  'getBalance',
  { playerId: '...' },
)

if ('cancelled' in result) {
  console.log(result.reason) // "ADDON_NOT_FOUND" | "ADDON_INACTIVE" | ...
} else {
  console.log(result.balance)
}
```

#### Error Evaluation Order

| # | Check | Behavior |
|---|---|---|
| 1 | Target addonId not in routing table | `{ cancelled: true, reason: "ADDON_NOT_FOUND" }` |
| 2 | Target addon is inactive | `{ cancelled: true, reason: "ADDON_INACTIVE" }` |
| 3 | Target addon is unresolved | `{ cancelled: true, reason: "ADDON_UNRESOLVED" }` |
| 4 | apiName not found | Promise rejects with `ApiNotFoundError` |
| 5 | before hook throws | Promise rejects with `BeforeHookExecutionError` |
| 6 | Hook cancels the call | `{ cancelled: true, reason: "CANCELLED_BY_HOOK" }` |
| 7 | Handler throws | Promise rejects with `HandlerExecutionError` |
| 8 | Timeout | Promise rejects with `RequestTimeoutError` |

---

## Hooks

### `ev.api.hook()`

Intercepts another addon's API calls.

```typescript
ev.api.hook<TArgs, TReturn>(
  targetAddonId: string,
  apiName: string,
  options: HookOptions<TArgs, TReturn>,
): void
```

```typescript
type HookOptions<TArgs, TReturn> = {
  priority?: number                        // lower = earlier. Default: 0
  modes?: ReadonlyArray<'send' | 'request'>
  before?: (ctx: BeforeHookContext<TArgs, TReturn>) => Promise<void>
  after?: (ctx: AfterHookContext<TArgs, TReturn>) => Promise<void>
  rollback?: (ctx: HookRollbackContext<TArgs>) => Promise<TArgs | void>
}
```

At least one of `before` / `after` is required. Omitting both throws immediately.

#### Execution Order (Onion Model)

```
before: -10 → 0(B) → 0(C) → 5 → [handler] → after: 5 → 0(C) → 0(B) → -10
```

`after` runs in the exact reverse order of `before` execution.

#### Examples

```typescript
router.beforeEvents.startup.subscribe((ev) => {
  // Mutate args
  ev.api.hook('addon-a', 'test', {
    before: async (ctx) => {
      ctx.args = { ...ctx.args, injected: true }
    },
  })

  // Short-circuit with cached result (skip handler)
  ev.api.hook('addon-a', 'economy/getBalance', {
    before: async (ctx) => {
      const cached = cache.get(ctx.args.playerId)
      if (cached) ctx.cancel(cached) // must return immediately after cancel()
    },
  })

  // Mutate result
  ev.api.hook('addon-a', 'economy/getBalance', {
    after: async (ctx) => {
      ctx.result = { ...ctx.result, taxApplied: true }
    },
  })
})
```

### BeforeHookContext

```typescript
type BeforeHookContext<TArgs, TReturn> = {
  args: TArgs                            // mutable
  readonly callerAddonId: string
  cancel(result?: TReturn): never        // with result → short-circuit / without → CANCELLED_BY_HOOK
  setRollbackData(data: unknown): void
}
```

### AfterHookContext

```typescript
type AfterHookContext<TArgs, TReturn> = {
  readonly args: TArgs   // read-only (deep mutation is also a spec violation)
  result: TReturn        // mutable
  readonly callerAddonId: string
}
```

### HookRollbackContext

Fires only when a `before` hook throws.

```typescript
type HookRollbackContext<TArgs> = {
  readonly rollbackData: unknown
  readonly currentArgsSnapshot: DeepReadonly<TArgs>
  readonly callerAddonId: string
}
```

---

## Type Definitions

### CancelledResult

```typescript
type CancelledResult = {
  readonly cancelled: true
  readonly reason:
    | 'ADDON_NOT_FOUND'
    | 'ADDON_INACTIVE'
    | 'ADDON_UNRESOLVED'
    | 'CANCELLED_BY_HOOK'
}
```

### Error Classes

```typescript
class ApiNotFoundError         extends Error {} // API name not found in routing table
class RequestTimeoutError      extends Error {} // timed out
class BeforeHookExecutionError extends Error {} // before hook threw
class AfterHookExecutionError  extends Error {} // after hook threw
class HandlerExecutionError    extends Error {} // handler threw
class ProtocolError            extends Error {} // message parse failure / schema mismatch
```
