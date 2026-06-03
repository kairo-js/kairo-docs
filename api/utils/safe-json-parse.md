# safeJsonParse

`import { safeJsonParse } from '@kairo-js/utils'`

Wraps `JSON.parse` with a structured error strategy. If parsing succeeds, the parsed value is returned. If parsing fails, the provided `error` factory is called and the resulting `Error` is thrown.

```typescript
function safeJsonParse(message: string, error: () => Error): unknown
```

**Parameters**

- **message:** `string`

  The JSON string to parse.
- **error:** `() => Error`

  A factory function that produces the `Error` to throw when parsing fails. Called only on failure.

**Returns:** `unknown` — The parsed value. Narrow the type with a validation function such as `compile()`.

## Usage

```typescript
import { safeJsonParse, compile } from '@kairo-js/utils'
import { Type } from '@sinclair/typebox'

const validate = compile(Type.Object({ id: Type.String() }))

const raw = '{"id":"abc"}'
const parsed = safeJsonParse(raw, () => new Error('Invalid JSON payload'))

if (validate(parsed)) {
  console.log(parsed.id)
}
```
