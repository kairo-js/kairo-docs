# AfterHookExecutionError

`import { AfterHookExecutionError } from '@kairo-js/router'`

**extends** `Error`

`after` 훅이 예외를 던질 때 발생합니다. 이 오류가 발생하면 핸들러의 결과값은 폐기됩니다.

## 생성자

```typescript
constructor(cause?: unknown)
```

**매개변수**

- **cause:** `unknown`

  던져진 원본 예외 (선택 사항).
