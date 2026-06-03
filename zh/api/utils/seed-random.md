# SeedRandom

`import { SeedRandom } from '@kairo-js/utils'`

基于种子的伪随机数生成器类。实现 [`Random`](/zh/api/utils/random) 接口，使用相同的种子可以产生相同的随机数序列，适用于需要可重现结果的场景。

```typescript
class SeedRandom implements Random {
  constructor(seed?: string)
  next(): number
}
```

## 构造函数

### constructor

```typescript
constructor(seed?: string)
```

创建一个新的 `SeedRandom` 实例。

**参数**

- **seed:** `string`

  用于初始化随机数生成器的种子字符串（可选）。使用相同的种子会产生相同的随机数序列。若省略，则使用默认种子。

## 方法

- [next](#next)

### next {#next}

```typescript
next(): number
```

返回下一个伪随机数。

**返回值：** `number` — 范围在 `[0, 1)` 之间的伪随机浮点数。

## 用法

```typescript
import { SeedRandom } from '@kairo-js/utils'

const rng = new SeedRandom('my-seed')

console.log(rng.next()) // 0.XXXXXXXX
console.log(rng.next()) // 0.XXXXXXXX

// Same seed produces the same sequence
const rng2 = new SeedRandom('my-seed')
console.log(rng2.next()) // Same value as rng.next() above
```
