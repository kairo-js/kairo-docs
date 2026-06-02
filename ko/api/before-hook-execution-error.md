# BeforeHookExecutionError

`import { BeforeHookExecutionError } from '@kairo-js/router'`

**extends** `Error`

`before` 훅이 예외를 던질 때 발생합니다. 이 오류가 던져지는 시점에는 실패한 훅에 대한 롤백이 이미 실행된 상태입니다.

## 생성자

```typescript
constructor(cause?: unknown)
```

**매개변수**

- **cause:** `unknown` — 던져진 원본 예외 (선택 사항).
