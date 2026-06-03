# HookOptions

`import type { HookOptions } from '@kairo-js/router'`

`ev.api.hook()`에 전달되는 옵션 객체입니다.

```typescript
interface HookOptions<TArgs, TReturn> {
  priority?: number
  modes?: ReadonlyArray<'send' | 'request'>
  before?: (ctx: BeforeHookContext<TArgs, TReturn>) => Promise<void>
  after?: (ctx: AfterHookContext<TArgs, TReturn>) => Promise<void>
  rollback?: (ctx: HookRollbackContext<TArgs>) => Promise<TArgs | void>
}
```

## 필드

### after

`after?: (ctx: AfterHookContext<TArgs, TReturn>) => Promise<void>`

핸들러 실행 후 동작합니다 (`request` 전용). 결과를 변경할 수 있습니다. 순수 변환만 수행하십시오. [`AfterHookContext`](/ko/api/after-hook-context)를 받습니다.

---

### before

`before?: (ctx: BeforeHookContext<TArgs, TReturn>) => Promise<void>`

핸들러 실행 전 동작합니다. args를 변경하거나 호출을 취소할 수 있습니다. [`BeforeHookContext`](/ko/api/before-hook-context)를 받습니다.

---

### modes

`modes?: ReadonlyArray<'send' | 'request'>`

이 훅을 적용할 호출 유형입니다. `after`가 있으면 기본값은 `["request"]`, `before`만 있으면 기본값은 `["send", "request"]`입니다.

---

### priority

`priority?: number`

실행 순서로, 값이 낮을수록 먼저 실행됩니다. 기본값은 `0`이며, 32비트 부호 있는 정수입니다.

---

### rollback

`rollback?: (ctx: HookRollbackContext<TArgs>) => Promise<TArgs | void>`

`before` 훅이 예외를 던질 때만 실행됩니다. 선택 사항입니다. [`HookRollbackContext`](/ko/api/hook-rollback-context)를 받습니다.

---

::: warning
`before` 또는 `after` 중 최소 하나는 필수입니다. 둘 다 생략하면 즉시 예외가 발생합니다.
:::

## 실행 순서 (어니언 모델)

```
before: -10 → 0(B) → 0(C) → 5 → [handler] → after: 5 → 0(C) → 0(B) → -10
```

`after`는 `before` 실행 순서의 정확히 역순으로 실행됩니다.

## 사용 예시

```typescript
ev.api.hook<{ playerId: string }, { balance: number }>(
  'economy-addon',
  'economy/getBalance',
  {
    priority: -10,
    modes: ['request'],
    before: async (ctx) => {
      const cached = cache.get(ctx.args.playerId)
      if (cached) {
        ctx.cancel(cached)
        return
      }
    },
    after: async (ctx) => {
      cache.set(ctx.args.playerId, ctx.result)
    },
  },
)
```
