# DeepReadonly

`import type { DeepReadonly } from '@kairo-js/router'`

オブジェクトのすべてのプロパティ（ネストしたオブジェクト・配列を含む）に `readonly` を再帰的に適用するユーティリティ型です。

```typescript
type DeepReadonly<T> =
  T extends readonly (infer U)[]
    ? ReadonlyArray<DeepReadonly<U>>
    : T extends object
    ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
    : T
```

[`HookRollbackContext.currentArgsSnapshot`](/ja/api/hook-rollback-context) で使用され、ロールバックハンドラ内での引数スナップショットの変更を防ぎます。

## 例

```typescript
type PlayerData = { name: string; scores: number[] }
type Frozen = DeepReadonly<PlayerData>
// { readonly name: string; readonly scores: ReadonlyArray<number> }
```
