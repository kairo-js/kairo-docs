# AfterHookContext

`import type { AfterHookContext } from '@kairo-js/router'`

after フックのコンテキストオブジェクトです。`HookOptions.after` のハンドラに渡されます。

```typescript
interface AfterHookContext<TArgs, TReturn> {
  readonly args: TArgs
  result: TReturn
  readonly callerAddonId: string
}
```

## フィールド

### args

`readonly args: TArgs`

読み取り専用。TypeScript は shallow のみ強制するが、deep mutation も仕様違反。

---

### callerAddonId

`readonly callerAddonId: string`

呼び出し元アドオンの addonId（読み取り専用）。

---

### result

`result: TReturn`

変更可能。pure transform のみを行うこと（外部副作用は禁止）。

---

## 使用例

```typescript
ev.api.hook('economy-addon', 'economy/getBalance', {
  after: async (ctx) => {
    // result の変換（pure transform のみ）
    ctx.result = {
      ...ctx.result,
      balanceWithTax: ctx.result.balance * 0.9,
    }
  },
})
```
