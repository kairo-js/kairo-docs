# SeedRandom

`import { SeedRandom } from '@kairo-js/utils'`

A seeded pseudo-random number generator. Implements the [`Random`](/api/utils/random) interface. Produces a deterministic sequence of numbers when constructed with the same seed.

**Implements:** [`Random`](/api/utils/random)

## Constructor

```typescript
constructor(seed?: string)
```

Creates a new `SeedRandom` instance. If `seed` is omitted, a time-based seed is used and the sequence will vary between runs.

**Parameters**

- **seed:** `string`

  An optional seed string. Providing the same seed produces the same sequence of numbers.

## Methods

- [next](#next)

### next {#next}

```typescript
next(): number
```

Returns the next pseudo-random number in the sequence.

**Returns:** `number` — A value in the range `[0, 1)`.

## Usage

```typescript
import { SeedRandom } from '@kairo-js/utils'

const rng = new SeedRandom('my-seed')
console.log(rng.next()) // deterministic value
console.log(rng.next()) // next value in the sequence
```
