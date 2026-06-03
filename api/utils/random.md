# Random

`import type { Random } from '@kairo-js/utils'`

乱数生成器のインターフェースです。[`SeedRandom`](/api/utils/seed-random) クラスがこのインターフェースを実装しています。

```typescript
interface Random {
  next(): number
}
```

## メソッド

- [next](#next)

### next {#next}

```typescript
next(): number
```

0 以上 1 未満の乱数を返します。

**返り値:** `number`
