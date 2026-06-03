# SeedRandom

`import { SeedRandom } from '@kairo-js/utils'`

[`Random`](/api/utils/random) インターフェースを実装した、シード付き疑似乱数生成器クラスです。同じシードを与えると常に同じ乱数列を生成します。

```typescript
class SeedRandom implements Random {
  constructor(seed?: string)
  next(): number
}
```

## コンストラクター

```typescript
new SeedRandom(seed?: string)
```

`SeedRandom` のインスタンスを生成します。

**パラメーター**

- **seed:** `string`

  乱数生成のシード文字列（省略可能）。省略した場合は現在時刻ベースのシードを使用します。

## メソッド

- [next](#next)

### next {#next}

```typescript
next(): number
```

0 以上 1 未満の疑似乱数を返します。同じシードで生成したインスタンスは毎回同じ順序で値を返します。

**返り値:** `number`

## 使用例

```typescript
import { SeedRandom } from '@kairo-js/utils'

const rng = new SeedRandom('my-seed')
console.log(rng.next()) // 常に同じ値
console.log(rng.next()) // 常に同じ値（2番目）

// シードなし（現在時刻ベース）
const rng2 = new SeedRandom()
console.log(rng2.next())
```
