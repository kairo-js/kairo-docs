# KairoApiRegistry

`import { router } from '@kairo-js/router'`

通过 `ev.api` 访问的类。只能在 `router.beforeEvents.startup` 事件中操作。注册表在 startup 结束后封闭，之后的任何操作均会抛出错误。

## 方法

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

释放此注册表持有的资源。

**返回值：** `void`

---

### getApiHandler {#getapihandler}

```typescript
getApiHandler(apiName: string): ApiHandler | undefined
```

返回给定 API 名称的已注册处理器。若未注册则返回 `undefined`。

**参数**

- **apiName:** `string`

  要查找的 API 名称。

**返回值：** `ApiHandler | undefined`

---

### getApiNames {#getapinames}

```typescript
getApiNames(): ReadonlyArray<string>
```

返回所有已注册的 API 名称。

**返回值：** `ReadonlyArray<string>`

---

### getHookDeclarations {#gethookdeclarations}

```typescript
getHookDeclarations(): readonly InternalHookDeclaration[]
```

返回所有已注册的 hook 声明。

**返回值：** `readonly InternalHookDeclaration[]`

---

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

---

### seal {#seal}

```typescript
seal(): void
```

关闭注册表。由框架内部调用。封闭后调用 `register()` 或 `hook()` 将抛出错误。

**返回值：** `void`

---

### setDeclaringAddonId {#setdeclaringaddonid}

```typescript
setDeclaringAddonId(addonId: string): void
```

设置声明插件的 addonId。由框架内部调用。

**参数**

- **addonId:** `string`

  声明插件的 ID。

**返回值：** `void`
