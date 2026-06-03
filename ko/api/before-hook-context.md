# BeforeHookContext

`import type { BeforeHookContext } from '@kairo-js/router'`

`before` 훅 핸들러(`HookOptions.before`)에 전달되는 컨텍스트 객체입니다.

```typescript
interface BeforeHookContext<TArgs, TReturn> {
  args: TArgs
  readonly callerAddonId: string
  cancel(result?: TReturn): never
  setRollbackData(data: unknown): void
}
```

## 필드

### args

`args: TArgs`

변경 가능합니다. 변경 사항은 이후의 훅과 핸들러에 전파됩니다.

---

### callerAddonId

`readonly callerAddonId: string`

호출자의 addonId입니다 (읽기 전용).

---

### cancel(result?)

`cancel(result?: TReturn): never`

`result`를 지정하면 핸들러를 건너뛰고 `result`를 반환합니다 (단락 평가). `result`를 생략하면 `CANCELED_BY_HOOK`을 반환합니다. 반환 타입이 `never`이므로 TypeScript는 이 호출 이후의 코드를 도달 불가능으로 표시합니다. `cancel()`을 호출한 직후에는 항상 `return`하십시오.

---

### setRollbackData(data)

`setRollbackData(data: unknown): void`

이 훅이 나중에 부수 효과를 되돌려야 할 경우 `rollback`에서 사용할 데이터를 저장합니다.

---

## 사용 예시

```typescript
ev.api.hook('economy-addon', 'economy/getBalance', {
  before: async (ctx) => {
    // Mutate args
    ctx.args = { ...ctx.args, audited: true }

    // Short-circuit with cached result
    const cached = cache.get(ctx.args.playerId)
    if (cached) {
      ctx.cancel(cached) // return immediately after cancel()
      return
    }

    // Store data for rollback
    ctx.setRollbackData({ previousArgs: ctx.args })
  },
})
```
