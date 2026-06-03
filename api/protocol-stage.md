# ProtocolStage

`import type { ProtocolStage } from '@kairo-js/router'`

A union type identifying which stage of the inter-addon API pipeline a [`ProtocolError`](/api/protocol-error) occurred in.

```typescript
type ProtocolStage = 'ApiCall' | 'ApiInvoke' | 'ApiResult' | 'ApiHandlerResponse'
```

## Values

| Value | Direction | Description |
|---|---|---|
| `'ApiCall'` | caller → kairo | The caller sent an API call message. |
| `'ApiInvoke'` | kairo → target | Kairo sent an invoke to the handler addon. |
| `'ApiHandlerResponse'` | target → kairo | The handler addon sent its response to kairo. |
| `'ApiResult'` | kairo → caller | Kairo delivered the final result to the caller. |
