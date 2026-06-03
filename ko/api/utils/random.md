# Random

`import type { Random } from '@kairo-js/utils'`

난수 생성기의 공통 인터페이스입니다. [`SeedRandom`](/ko/api/utils/seed-random)이 이 인터페이스를 구현합니다.

```typescript
interface Random {
  next(): number
}
```

## 메서드

### next()

```typescript
next(): number
```

다음 난수를 반환합니다.

**반환값:** `number` — `0` 이상 `1` 미만의 부동소수점 숫자.

## 사용 예시

```typescript
import type { Random } from '@kairo-js/utils'
import { SeedRandom } from '@kairo-js/utils'

function pickRandom<T>(items: T[], rng: Random): T {
  return items[Math.floor(rng.next() * items.length)]
}

const rng = new SeedRandom('example')
pickRandom(['a', 'b', 'c'], rng)
```
