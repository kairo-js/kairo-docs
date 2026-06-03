# DeepReadonly

`import type { DeepReadonly } from '@kairo-js/router'`

중첩 객체와 배열을 포함한 모든 프로퍼티에 `readonly`를 재귀적으로 적용하는 유틸리티 타입입니다.

```typescript
type DeepReadonly<T> =
  T extends readonly (infer U)[]
    ? ReadonlyArray<DeepReadonly<U>>
    : T extends object
    ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
    : T
```

롤백 핸들러 내부에서 인수 스냅샷의 변경을 방지하기 위해 [`HookRollbackContext.currentArgsSnapshot`](/ko/api/hook-rollback-context)에서 사용됩니다.

## 예시

```typescript
type PlayerData = { name: string; scores: number[] }
type Frozen = DeepReadonly<PlayerData>
// { readonly name: string; readonly scores: ReadonlyArray<number> }
```
