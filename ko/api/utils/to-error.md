# toError

`import { toError } from '@kairo-js/utils'`

`catch` 블록에서 받은 임의의 값을 `Error` 객체로 변환합니다. 이미 `Error` 인스턴스이면 그대로 반환하고, 그렇지 않으면 문자열 표현으로 새 `Error`를 생성합니다.



```typescript
function toError(e: unknown): Error
```

**매개변수**

- **e:** `unknown`

  변환할 값. `catch (e)` 블록의 값을 그대로 전달합니다.

**반환값:** `Error` — `e`가 `Error` 인스턴스이면 `e` 자체, 아니면 `new Error(String(e))`.

## 사용 예시

```typescript
import { toError } from '@kairo-js/utils'

try {
  riskyOperation()
} catch (e) {
  const err = toError(e)
  console.error(err.message)
}
```
