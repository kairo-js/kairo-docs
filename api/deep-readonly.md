# DeepReadonly

`import type { DeepReadonly } from '@kairo-js/router'`

A utility type that recursively applies `readonly` to all properties of an object, including nested objects and arrays.

```typescript
type DeepReadonly<T> =
  T extends readonly (infer U)[]
    ? ReadonlyArray<DeepReadonly<U>>
    : T extends object
    ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
    : T
```

Used by [`HookRollbackContext.currentArgsSnapshot`](/api/hook-rollback-context) to prevent mutation inside rollback handlers.

## Examples

```typescript
type PlayerData = { name: string; scores: number[] }
type Frozen = DeepReadonly<PlayerData>
// { readonly name: string; readonly scores: ReadonlyArray<number> }
```
