# ValidateFunction\<T\>

`import type { ValidateFunction } from '@kairo-js/utils'`

TypeBox 스키마로 컴파일된 타입 가드 함수의 인터페이스입니다. [`compile()`](/ko/api/utils/compile)의 반환 타입입니다.

```typescript
interface ValidateFunction<T> {
  (value: unknown): value is T
  errors?: readonly string[]
}
```

호출 시그니처 `(value: unknown): value is T`는 TypeScript 타입 가드로 동작합니다. 검증 실패 시 `errors` 프로퍼티에 오류 메시지 배열이 설정됩니다.

## 프로퍼티

### errors

`errors?: readonly string[]`

마지막 검증 호출에서 발생한 오류 메시지 목록. 검증이 성공하면 `undefined`이거나 빈 배열입니다.

## 사용 예시

```typescript
import { compile } from '@kairo-js/utils'
import { Type } from '@sinclair/typebox'

const schema = Type.Object({
  name: Type.String(),
  level: Type.Number(),
})

const validate = compile(schema)
const data: unknown = JSON.parse(input)

if (validate(data)) {
  console.log(data.name) // 타입 안전
} else {
  console.error(validate.errors)
}
```
