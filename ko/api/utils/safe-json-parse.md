# safeJsonParse

`import { safeJsonParse } from '@kairo-js/utils'`

`JSON.parse`의 안전한 래퍼 함수입니다. 파싱에 실패하면 예외를 던지는 대신 `error` 콜백을 호출합니다.



```typescript
function safeJsonParse(message: string, error: (e: unknown) => void): unknown
```

**매개변수**

- **message:** `string`

  파싱할 JSON 문자열.
- **error:** `(e: unknown) => void`

  파싱 실패 시 호출되는 콜백. `JSON.parse`에서 던진 예외 값이 `e`로 전달됩니다.

**반환값:** `unknown` — 파싱에 성공하면 파싱된 값, 실패하면 `undefined`.

## 사용 예시

```typescript
import { safeJsonParse } from '@kairo-js/utils'

const result = safeJsonParse(rawString, (e) => {
  console.error('JSON parse failed:', e)
})

if (result !== undefined) {
  // result 사용
}
```
