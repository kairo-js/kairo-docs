# BeforeHookExecutionError

`import { BeforeHookExecutionError } from '@kairo-js/router'`

**extends** `Error`

before フックが例外をスローした場合にスローされます。このエラーがスローされる時点では、該当フックのロールバック処理が既に実行済みです。

## コンストラクター

```typescript
constructor(cause?: unknown)
```

| パラメーター | 型 | 説明 |
|---|---|---|
| `cause` | `unknown` | 元となった例外（省略可能） |
