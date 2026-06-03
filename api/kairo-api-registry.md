# ApiRegistration

Accessed via `ev.api`. Only operable inside the `router.beforeEvents.startup` event.

```typescript
interface ApiRegistration {
  register<TArgs, TReturn>(apiName: string, handler: (args: TArgs) => TReturn | Promise<TReturn>): void
  hook<TArgs, TReturn>(targetAddonId: string, apiName: string, options: HookOptions<TArgs, TReturn>): void
}
```

## Methods

- [hook](#hook)
- [register](#register)

### hook {#hook}

```typescript
hook<TArgs, TReturn>(
  targetAddonId: string,
  apiName: string,
  options: HookOptions<TArgs, TReturn>,
): void
```

Registers a hook that intercepts another addon's API calls.

**Parameters**

- **targetAddonId:** `string`

  The ID of the addon to hook into.
- **apiName:** `string`

  The name of the API to hook.
- **options:** `HookOptions<TArgs, TReturn>`

  Hook configuration.

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

**Parameters**

- **apiName:** `string`

  The name of the API to register.
- **handler:** `(args: TArgs) => TReturn | Promise<TReturn>`

  The handler to invoke when the API is called.

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
