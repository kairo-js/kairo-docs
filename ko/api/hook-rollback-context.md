# HookRollbackContext

`import type { HookRollbackContext } from '@kairo-js/router'`

`rollback` 훅 핸들러(`HookOptions.rollback`)에 전달되는 컨텍스트 객체입니다. `before` 훅이 예외를 던질 때만 실행됩니다.

```typescript
type HookRollbackContext<TArgs> = {
  readonly rollbackData: unknown
  readonly currentArgsSnapshot: DeepReadonly<TArgs>
  readonly callerAddonId: string
}
```

## 필드

### callerAddonId

`readonly callerAddonId: string`

호출자의 addonId입니다 (읽기 전용).

---

### currentArgsSnapshot

`readonly currentArgsSnapshot: DeepReadonly<TArgs>`

이 롤백 실행 시점의 args 스냅샷입니다. 변경하지 마십시오. 대신 새 객체를 반환하십시오.

---

### rollbackData

`readonly rollbackData: unknown`

`setRollbackData()`를 통해 저장된 값입니다. 설정되지 않은 경우 `undefined`입니다.

---

## 반환값

롤백 함수의 반환 타입은 `Promise<TArgs | void>`입니다.

- `TArgs`를 반환하면: 이후 롤백 핸들러는 해당 값을 `currentArgsSnapshot`으로 받습니다.
- `void`를 반환하면: args에 변경이 없습니다.

## 사용 예시

```typescript
ev.api.hook('economy-addon', 'economy/deduct', {
  before: async (ctx) => {
    const previous = await getBalance(ctx.args.playerId)
    ctx.setRollbackData({ previousBalance: previous })
    await deductBalance(ctx.args.playerId, ctx.args.amount)
  },
  rollback: async (ctx) => {
    const { previousBalance } = ctx.rollbackData as { previousBalance: number }
    await restoreBalance(ctx.currentArgsSnapshot.playerId, previousBalance)
  },
})
```
