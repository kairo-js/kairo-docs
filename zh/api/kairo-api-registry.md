# ApiRegistration

通过 `ev.api` 访问的接口。只能在 `router.beforeEvents.startup` 事件中操作。

```typescript
interface ApiRegistration {
  register<TArgs, TReturn>(apiName: string, handler: (args: TArgs) => TReturn | Promise<TReturn>): void
  hook<TArgs, TReturn>(targetAddonId: string, apiName: string, options: HookOptions<TArgs, TReturn>): void
}
```

## 方法

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

注册一个 hook，用于拦截其他插件的 API 调用。

**参数**

- **targetAddonId:** `string`

  要 hook 的目标插件 ID。
- **apiName:** `string`

  要 hook 的 API 名称。
- **options:** `HookOptions<TArgs, TReturn>`

  Hook 配置。

**返回值：** `void`

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

注册本插件提供的 API 处理器。在同一 addonId 下重复注册相同的 `apiName` 会抛出错误。

**参数**

- **apiName:** `string`

  要注册的 API 名称。
- **handler:** `(args: TArgs) => TReturn | Promise<TReturn>`

  API 被调用时执行的处理器。

**返回值：** `void`

```typescript
ev.api.register<{ playerId: string }, { balance: number }>(
  'economy/getBalance',
  async ({ playerId }) => {
    return { balance: getBalance(playerId) }
  },
)
```

::: tip API 名称命名空间
使用斜线分隔的命名空间（如 `economy/getBalance`）可避免命名冲突并提升可发现性。
:::
