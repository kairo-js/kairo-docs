# ProtocolStage

`import type { ProtocolStage } from '@kairo-js/router'`

一个联合类型，标识插件间 API 管道中 [`ProtocolError`](/zh/api/protocol-error) 发生的阶段。

```typescript
type ProtocolStage = 'ApiCall' | 'ApiInvoke' | 'ApiResult' | 'ApiHandlerResponse'
```

## 值

| 值 | 方向 | 说明 |
|---|---|---|
| `'ApiCall'` | caller → kairo | 调用方发送了 API 调用消息。 |
| `'ApiInvoke'` | kairo → target | kairo 向处理插件发送了 invoke 指令。 |
| `'ApiHandlerResponse'` | target → kairo | 处理插件向 kairo 返回了响应。 |
| `'ApiResult'` | kairo → caller | kairo 向调用方传递了最终结果。 |
