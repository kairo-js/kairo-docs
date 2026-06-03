# ApiHandlerContext

`import type { ApiHandlerContext } from '@kairo-js/router'`

通过 `ev.api.register()` 注册的 API 处理器的第二个参数，即上下文对象。

```typescript
interface ApiHandlerContext {
  readonly callerAddonId: string
}
```

## 字段

### callerAddonId

`readonly callerAddonId: string`

调用此 API 的插件的 addonId（只读）。

## 用法

```typescript
ev.api.register<{ amount: number }, void>(
  'economy/deduct',
  async ({ amount }, ctx) => {
    console.log(`${ctx.callerAddonId} 请求扣除 ${amount}`)
  },
)
```
