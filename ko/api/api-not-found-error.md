# ApiNotFoundError

`import { ApiNotFoundError } from '@kairo-js/router'`

**extends** `Error`

라우팅 테이블에 지정한 API 이름이 존재하지 않을 때 발생합니다. `router.request()`에 전달한 `apiName`이 대상 애드온에 등록되어 있지 않을 때 발생합니다.

## 생성자

```typescript
constructor(apiName?: string)
```

**매개변수**

- **apiName:** `string` — 찾을 수 없었던 API 이름 (선택 사항).
