# HandlerExecutionError

`import { HandlerExecutionError } from '@kairo-js/router'`

**extends** `Error`

API 핸들러가 예외를 던질 때 발생합니다. 호출자에게 거부된 `router.request()` Promise로 전파됩니다.

## 생성자

```typescript
constructor(cause?: unknown)
```

**매개변수**

- **cause:** `unknown`

  던져진 원본 예외 (선택 사항).
