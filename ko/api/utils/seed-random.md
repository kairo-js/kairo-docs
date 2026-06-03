# SeedRandom

`import { SeedRandom } from '@kairo-js/utils'`

[`Random`](/ko/api/utils/random) 인터페이스를 구현하는 시드 기반 의사 난수 생성기(PRNG)입니다. 동일한 시드로 생성하면 항상 동일한 난수 수열을 생성합니다.

```typescript
class SeedRandom implements Random {
  constructor(seed?: string)
  next(): number
}
```

## 생성자

### constructor {#constructor}

```typescript
constructor(seed?: string)
```

`SeedRandom` 인스턴스를 생성합니다.

**매개변수**

- **seed:** `string`

  난수 생성에 사용할 시드 문자열 (선택 사항). 생략하면 임의의 시드가 사용됩니다.

## 메서드

- [next](#next)

### next {#next}

```typescript
next(): number
```

다음 의사 난수를 반환합니다.

**반환값:** `number` — `0` 이상 `1` 미만의 부동소수점 숫자.

## 사용 예시

```typescript
import { SeedRandom } from '@kairo-js/utils'

const rng = new SeedRandom('my-seed')

console.log(rng.next()) // 항상 동일한 값
console.log(rng.next()) // 항상 동일한 값
```
