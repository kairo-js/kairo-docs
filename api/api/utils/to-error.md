# toError

`import { toError } from '@kairo-js/utils'`

Converts any value to an `Error` object. If the value is already an `Error` instance it is returned unchanged. Otherwise, a new `Error` is created whose message is the string representation of the value.

```typescript
function toError(e: unknown): Error
```

**Parameters**

- **e:** `unknown`

  The value to convert. Typically the caught value from a `catch` clause.

**Returns:** `Error` — The original value if it is already an `Error`, or a new `Error` wrapping the value otherwise.

## Usage

```typescript
import { toError } from '@kairo-js/utils'

try {
  riskyOperation()
} catch (e) {
  const error = toError(e)
  console.error(error.message)
}
```
