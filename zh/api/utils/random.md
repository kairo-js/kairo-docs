# Random

`import type { Random } from '@kairo-js/utils'`

随机数生成器接口。定义随机数生成器的最小契约。[`SeedRandom`](/zh/api/utils/seed-random) 类实现了此接口。

```typescript
interface Random {
  next(): number
}
```

## 方法

### next()

```typescript
next(): number
```

返回下一个随机数。

**返回值：** `number` — 范围在 `[0, 1)` 之间的随机浮点数。

## 用法

```typescript
import type { Random } from '@kairo-js/utils'
import { SeedRandom } from '@kairo-js/utils'

function pickRandom<T>(items: T[], rng: Random): T {
  const index = Math.floor(rng.next() * items.length)
  return items[index]
}

const rng = new SeedRandom('example')
pickRandom(['a', 'b', 'c'], rng)
```
