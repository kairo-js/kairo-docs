# compile

`import { compile } from '@kairo-js/utils'`

TypeBox 스키마를 런타임 검증 함수로 컴파일합니다. 반환된 함수는 TypeScript 타입 가드로 동작합니다.



```typescript
function compile<T extends TSchema>(schema: T): ValidateFunction<Static<T>>
```

**매개변수**

- **schema:** `T`

  컴파일할 TypeBox 스키마 객체.

**반환값:** [`ValidateFunction<Static<T>>`](/ko/api/utils/validate-function) — 컴파일된 타입 가드 함수. 검증 실패 시 `errors` 프로퍼티에 오류 메시지가 담깁니다.

## 사용 예시

```typescript
import { compile } from '@kairo-js/utils'
import { Type } from '@sinclair/typebox'

const PlayerSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
  score: Type.Number(),
})

const validatePlayer = compile(PlayerSchema)

const raw: unknown = receiveData()

if (validatePlayer(raw)) {
  console.log(raw.id, raw.score) // 타입 안전
} else {
  console.error('Invalid payload:', validatePlayer.errors)
}
```
