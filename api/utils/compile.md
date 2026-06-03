# compile

`import { compile } from '@kairo-js/utils'`

Compiles a [TypeBox](https://github.com/sinclairzx81/typebox) schema into a typed validation function. The returned function acts as a TypeScript type guard for the inferred static type of the schema.

```typescript
function compile<T extends TSchema>(schema: T): ValidateFunction<Static<T>>
```

**Parameters**

- **schema:** `T`

  A TypeBox schema (`TSchema` subtype). The static type `T` is inferred automatically.

**Returns:** [`ValidateFunction<Static<T>>`](/api/utils/validate-function) — A compiled type guard function. Call it with an `unknown` value to validate and narrow the type.

## Examples

```typescript
import { compile } from '@kairo-js/utils'
import { Type } from '@sinclair/typebox'

const schema = Type.Object({
  playerId: Type.String(),
  balance: Type.Number(),
})

const validate = compile(schema)

const data: unknown = JSON.parse(rawMessage)
if (validate(data)) {
  console.log(data.playerId, data.balance)
} else {
  console.error('Validation failed:', validate.errors)
}
```
