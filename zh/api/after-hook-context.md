# AfterHookContext

`import type { AfterHookContext } from '@kairo-js/router'`

传递给 `after` 钩子处理器（`HookOptions.after`）的上下文对象。

```typescript
type AfterHookContext<TArgs, TReturn> = {
  readonly args: TArgs
  result: TReturn
  readonly callerAddonId: string
}
```

## 字段

### args

`readonly args: TArgs`

只读。TypeScript 仅在浅层进行限制；深层修改同样违反规范。

---

### callerAddonId

`readonly callerAddonId: string`

调用方的 addonId（只读）。

---

### result

`result: TReturn`

可变。仅执行纯转换操作，不得产生外部副作用。

---

## 用法

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
