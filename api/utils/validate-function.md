# ValidateFunction\<T\>

`import type { ValidateFunction } from '@kairo-js/utils'`

A type guard function interface used to validate unknown values against a known type. Produced by `compile()`.

```typescript
interface ValidateFunction<T> {
  (value: unknown): value is T
  errors?: readonly string[]
}
```

## Fields

### errors

`errors?: readonly string[]`

An optional list of human-readable error messages describing why the most recent validation failed. Only populated after a call that returned `false`.

## Examples

```typescript
import { compile } from '@kairo-js/utils'
import { Type } from '@sinclair/typebox'

const schema = Type.Object({ name: Type.String() })
const validate = compile(schema)

const input: unknown = { name: 'hello' }
if (validate(input)) {
  console.log(input.name) // typed as string
} else {
  console.error(validate.errors)
}
```
