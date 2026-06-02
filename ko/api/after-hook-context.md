# AfterHookContext

`import type { AfterHookContext } from '@kairo-js/router'`

`after` 훅 핸들러(`HookOptions.after`)에 전달되는 컨텍스트 객체입니다.

```typescript
type AfterHookContext<TArgs, TReturn> = {
  readonly args: TArgs
  result: TReturn
  readonly callerAddonId: string
}
```

## 필드

### args

`readonly args: TArgs`

읽기 전용입니다. TypeScript는 얕은 수준에서만 이를 강제하며, 깊은 변경 또한 사양 위반입니다.

---

### callerAddonId

`readonly callerAddonId: string`

호출자의 addonId입니다 (읽기 전용).

---

### result

`result: TReturn`

변경 가능합니다. 순수 변환만 수행하십시오. 외부 부수 효과는 허용되지 않습니다.

---

## 사용 예시

```typescript
ev.api.hook('economy-addon', 'economy/getBalance', {
  after: async (ctx) => {
    // Transform result (pure transform only)
    ctx.result = {
      ...ctx.result,
      balanceWithTax: ctx.result.balance * 0.9,
    }
  },
})
```
