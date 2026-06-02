# KairoRouter

`import { router } from '@kairo-js/router'`

The class exported as the `router` singleton. Provides the core functionality of kairo-router: addon initialization, API calls, event subscriptions, and more.

## Properties

### afterEvents

`readonly afterEvents: KairoAfterEvents`

Subscribe to after events.

---

### beforeEvents

`readonly beforeEvents: KairoBeforeEvents`

Subscribe to before events.

---

### currentTick

`readonly currentTick: number`

Current tick count since activation (getter).

---

### systemInfo

`readonly systemInfo: KairoContext`

Addon context info (getter).

---

## Methods

- [clearRun](#clearrun)
- [emit](#emit)
- [getAddonId](#getaddonid)
- [getHookDeclarations](#gethookdeclarations)
- [init](#init)
- [request](#request)
- [runInterval](#runinterval)
- [runTimeout](#runtimeout)
- [send](#send)
- [waitForWorldLoad](#waitforworldload)

### clearRun {#clearrun}

```typescript
clearRun(runId: number): void
```

Cancels a scheduled run created by `runInterval()` or `runTimeout()`.

**Parameters**

**runId:** `number`

The ID of the run to cancel.

**Returns:** `void`

---

### emit {#emit}

```typescript
emit(eventName: string, payload?: unknown): void
```

Emits a custom event. Delivered to handlers subscribed via `AddonEventRegistry.on()`.

**Parameters**

**eventName:** `string`

The name of the event to emit.

**payload:** `unknown`

Data to attach to the event (optional).

**Returns:** `void`

---

### getAddonId {#getaddonid}

```typescript
getAddonId(): string | undefined
```

Returns the addonId of this addon. Returns `undefined` before the addon is registered.

**Returns:** `string | undefined`

---

### getHookDeclarations {#gethookdeclarations}

```typescript
getHookDeclarations(): readonly InternalHookDeclaration[]
```

Returns all registered hook declarations.

**Returns:** `readonly InternalHookDeclaration[]`

---

### init {#init}

```typescript
init(properties: AddonProperties): void
```

Initializes the addon.

**Parameters**

**properties:** `AddonProperties`

The addon's configuration.

**Returns:** `void`

---

### request {#request}

```typescript
request<TReturn>(
  targetAddonId: string,
  apiName: string,
  args?: unknown,
  options?: { timeout?: number },
): Promise<TReturn | CancelledResult>
```

Calls an API and awaits the result. `timeout` is in ticks; default is 20 ticks.

**Parameters**

**targetAddonId:** `string`

The ID of the target addon.

**apiName:** `string`

The name of the API to call.

**args:** `unknown`

Arguments to pass to the API (optional).

**options.timeout:** `number`

Timeout in ticks (default 20).

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

### runInterval {#runinterval}

```typescript
runInterval(callback: () => void, tickInterval?: number): number
```

Schedules a recurring callback at the given tick interval. Returns a runId to pass to `clearRun()`.

**Parameters**

**callback:** `() => void`

The function to run repeatedly.

**tickInterval:** `number`

Interval in ticks (optional).

**Returns:** `number` — runId

---

### runTimeout {#runtimeout}

```typescript
runTimeout(callback: () => void, tickDelay?: number): number
```

Schedules a one-shot callback after the given tick delay. Returns a runId to pass to `clearRun()`.

**Parameters**

**callback:** `() => void`

The function to run once.

**tickDelay:** `number`

Delay in ticks (optional).

**Returns:** `number` — runId

---

### send {#send}

```typescript
send(targetAddonId: string, apiName: string, args?: unknown): void
```

Calls an API in fire-and-forget fashion. Does not wait for a response. Silently ignored if the target addon does not exist or is inactive.

**Parameters**

**targetAddonId:** `string`

The ID of the target addon.

**apiName:** `string`

The name of the API to call.

**args:** `unknown`

Arguments to pass to the API (optional).

**Returns:** `void`

```typescript
router.send('economy-addon', 'onTransaction', { amount: 50 })
```

---

### waitForWorldLoad {#waitforworldload}

```typescript
waitForWorldLoad(): Promise<void>
```

Resolves when the world finishes loading.

**Returns:** `Promise<void>`
