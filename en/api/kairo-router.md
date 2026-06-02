# KairoRouter

`import { router } from '@kairo-js/router'`

The class exported as the `router` singleton. Provides the core functionality of kairo-router: addon initialization, API calls, event subscriptions, and more.

## Properties

| Property | Type | Description |
|---|---|---|
| `afterEvents` | `KairoAfterEvents` | Subscribe to after events |
| `beforeEvents` | `KairoBeforeEvents` | Subscribe to before events |
| `currentTick` | `number` | Current tick count since activation (getter) |
| `systemInfo` | `KairoContext` | Addon context info (getter) |

## Methods

### clearRun()

```typescript
clearRun(runId: number): void
```

Cancels a scheduled run created by `runInterval()` or `runTimeout()`.

| Parameter | Type | Description |
|---|---|---|
| `runId` | `number` | The ID of the run to cancel |

**Returns:** `void`

---

### emit()

```typescript
emit(eventName: string, payload?: unknown): void
```

Emits a custom event. Delivered to handlers subscribed via `AddonEventRegistry.on()`.

| Parameter | Type | Description |
|---|---|---|
| `eventName` | `string` | The name of the event to emit |
| `payload` | `unknown` | Data to attach to the event (optional) |

**Returns:** `void`

---

### getAddonId()

```typescript
getAddonId(): string | undefined
```

Returns the addonId of this addon. Returns `undefined` before the addon is registered.

**Returns:** `string | undefined`

---

### getHookDeclarations()

```typescript
getHookDeclarations(): readonly InternalHookDeclaration[]
```

Returns all registered hook declarations.

**Returns:** `readonly InternalHookDeclaration[]`

---

### init()

```typescript
init(properties: AddonProperties): void
```

Initializes the addon.

| Parameter | Type | Description |
|---|---|---|
| `properties` | `AddonProperties` | The addon's configuration |

**Returns:** `void`

---

### request()

```typescript
request<TReturn>(
  targetAddonId: string,
  apiName: string,
  args?: unknown,
  options?: { timeout?: number },
): Promise<TReturn | CancelledResult>
```

Calls an API and awaits the result. `timeout` is in ticks; default is 20 ticks.

| Parameter | Type | Description |
|---|---|---|
| `targetAddonId` | `string` | The ID of the target addon |
| `apiName` | `string` | The name of the API to call |
| `args` | `unknown` | Arguments to pass to the API (optional) |
| `options.timeout` | `number` | Timeout in ticks (default 20) |

**Returns:** `Promise<TReturn | CancelledResult>`

```typescript
const result = await router.request<{ balance: number }>(
  'economy-addon',
  'economy/getBalance',
  { playerId: 'abc123' },
)

if ('cancelled' in result) {
  console.warn('Request cancelled:', result.reason)
} else {
  console.log('Balance:', result.balance)
}
```

---

### runInterval()

```typescript
runInterval(callback: () => void, tickInterval?: number): number
```

Schedules a recurring callback at the given tick interval. Returns a runId to pass to `clearRun()`.

| Parameter | Type | Description |
|---|---|---|
| `callback` | `() => void` | The function to run repeatedly |
| `tickInterval` | `number` | Interval in ticks (optional) |

**Returns:** `number` — runId

---

### runTimeout()

```typescript
runTimeout(callback: () => void, tickDelay?: number): number
```

Schedules a one-shot callback after the given tick delay. Returns a runId to pass to `clearRun()`.

| Parameter | Type | Description |
|---|---|---|
| `callback` | `() => void` | The function to run once |
| `tickDelay` | `number` | Delay in ticks (optional) |

**Returns:** `number` — runId

---

### send()

```typescript
send(targetAddonId: string, apiName: string, args?: unknown): void
```

Calls an API in fire-and-forget fashion. Does not wait for a response. Silently ignored if the target addon does not exist or is inactive.

| Parameter | Type | Description |
|---|---|---|
| `targetAddonId` | `string` | The ID of the target addon |
| `apiName` | `string` | The name of the API to call |
| `args` | `unknown` | Arguments to pass to the API (optional) |

**Returns:** `void`

```typescript
router.send('economy-addon', 'onTransaction', { amount: 50 })
```

---

### waitForWorldLoad()

```typescript
waitForWorldLoad(): Promise<void>
```

Resolves when the world finishes loading.

**Returns:** `Promise<void>`
