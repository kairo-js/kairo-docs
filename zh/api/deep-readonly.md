# DeepReadonly

`import type { DeepReadonly } from '@kairo-js/router'`

一个工具类型，递归地将 `readonly` 应用于对象的所有属性，包括嵌套对象和数组。

```typescript
type DeepReadonly<T> =
  T extends readonly (infer U)[]
    ? ReadonlyArray<DeepReadonly<U>>
    : T extends object
    ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
    : T
```

用于 [`HookRollbackContext.currentArgsSnapshot`](/zh/api/hook-rollback-context)，防止在回滚处理函数中修改参数快照。

## 示例

```typescript
type PlayerData = { name: string; scores: number[] }
type Frozen = DeepReadonly<PlayerData>
// { readonly name: string; readonly scores: ReadonlyArray<number> }
```
