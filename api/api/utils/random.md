# Random

`import type { Random } from '@kairo-js/utils'`

Interface for random number generators. Implement this interface to provide a custom source of randomness.

```typescript
interface Random {
  next(): number
}
```

## Methods

### next()

```typescript
next(): number
```

Returns the next random number.

**Returns:** `number` — A value in the range `[0, 1)`.
