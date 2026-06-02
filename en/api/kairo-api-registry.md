# KairoApiRegistry

`import { router } from '@kairo-js/router'`

The class accessed via `ev.api`. Only operable inside the `router.beforeEvents.startup` event. The registry is sealed after startup ends; any operations after that point throw an error.

## Methods

- [dispose](#dispose)
- [getApiHandler](#getapihandler)
- [getApiNames](#getapinames)
- [getHookDeclarations](#gethookdeclarations)
- [hook](#hook)
- [register](#register)
- [seal](#seal)
- [setDeclaringAddonId](#setdeclaringaddonid)

### dispose {#dispose}

```typescript
dispose(): void
```

Releases resources held by this registry.

**Returns:** `void`

---

### getApiHandler {#getapihandler}

```typescript
getApiHandler(apiName: string): ApiHandler | undefined
```

Returns the registered handler for the given API name. Returns `undefined` if not registered.

| Parameter | Type | Description |
|---|---|---|
| `apiName` | `string` | The name of the API to look up |

**Returns:** `ApiHandler | undefined`

---

### getApiNames {#getapinames}

```typescript
getApiNames(): ReadonlyArray<string>
```

Returns all registered API names.

**Returns:** `ReadonlyArray<string>`

---

### getHookDeclarations {#gethookdeclarations}

```typescript
getHookDeclarations(): readonly InternalHookDeclaration[]
```

Returns all registered hook declarations.

**Returns:** `readonly InternalHookDeclaration[]`

---

### hook {#hook}

```typescript
hook<TArgs, TReturn>(
  targetAddonId: string,
  apiName: string,
  options: HookOptions<TArgs, TReturn>,
): void
```

Registers a hook that intercepts another addon's API calls.

| Parameter | Type | Description |
|---|---|---|
| `targetAddonId` | `string` | The ID of the addon to hook into |
| `apiName` | `string` | The name of the API to hook |
| `options` | `HookOptions<TArgs, TReturn>` | Hook configuration |

**Returns:** `void`

```typescript
// Mutate args
ev.api.hook('economy-addon', 'economy/getBalance', {
  before: async (ctx) => {
    ctx.args = { ...ctx.args, audited: true }
  },
})

// Post-process result
ev.api.hook('economy-addon', 'economy/getBalance', {
  after: async (ctx) => {
    ctx.result = { ...ctx.result, taxRate: 0.1 }
  },
})
```

---

### register {#register}

```typescript
register<TArgs, TReturn>(
  apiName: string,
  handler: (args: TArgs) => TReturn | Promise<TReturn>,
): void
```

Registers an API handler provided by this addon. Registering the same `apiName` twice within the same addonId throws an error.

| Parameter | Type | Description |
|---|---|---|
| `apiName` | `string` | The name of the API to register |
| `handler` | `(args: TArgs) => TReturn \| Promise<TReturn>` | The handler to invoke when the API is called |

**Returns:** `void`

```typescript
ev.api.register<{ playerId: string }, { balance: number }>(
  'economy/getBalance',
  async ({ playerId }) => {
    return { balance: getBalance(playerId) }
  },
)
```

::: tip API Name Namespacing
Use slash-separated namespaces like `economy/getBalance` to avoid collisions and improve discoverability.
:::

---

### seal {#seal}

```typescript
seal(): void
```

Closes the registry. Called internally by the framework. Calling `register()` or `hook()` after sealing throws an error.

**Returns:** `void`

---

### setDeclaringAddonId {#setdeclaringaddonid}

```typescript
setDeclaringAddonId(addonId: string): void
```

Sets the addonId of the declaring addon. Called internally by the framework.

| Parameter | Type | Description |
|---|---|---|
| `addonId` | `string` | The declaring addon's ID |

**Returns:** `void`
