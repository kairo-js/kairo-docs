# ApiHandlerContext

`import type { ApiHandlerContext } from '@kairo-js/router'`

`ev.api.register()` で登録した API ハンドラの第 2 引数として渡されるコンテキストオブジェクトです。

```typescript
interface ApiHandlerContext {
  readonly callerAddonId: string
}
```

## フィールド

### callerAddonId

`readonly callerAddonId: string`

この API を呼び出したアドオンの addonId（読み取り専用）。

## 使用例

```typescript
ev.api.register<{ amount: number }, void>(
  'economy/deduct',
  async ({ amount }, ctx) => {
    console.log(`${ctx.callerAddonId} が ${amount} の控除を要求しました`)
  },
)
```
