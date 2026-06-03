# ProtocolStage

`import type { ProtocolStage } from '@kairo-js/router'`

애드온 간 API 파이프라인의 어느 단계에서 [`ProtocolError`](/ko/api/protocol-error)가 발생했는지를 나타내는 유니온 타입입니다.

```typescript
type ProtocolStage = 'ApiCall' | 'ApiInvoke' | 'ApiResult' | 'ApiHandlerResponse'
```

## 값

| 값 | 방향 | 설명 |
|---|---|---|
| `'ApiCall'` | caller → kairo | 호출자가 API 호출 메시지를 전송했습니다. |
| `'ApiInvoke'` | kairo → target | kairo가 핸들러 애드온에 invoke를 전송했습니다. |
| `'ApiHandlerResponse'` | target → kairo | 핸들러 애드온이 kairo에 응답을 반환했습니다. |
| `'ApiResult'` | kairo → caller | kairo가 호출자에게 최종 결과를 전달했습니다. |
