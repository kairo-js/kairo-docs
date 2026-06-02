# AfterHookExecutionError

`import { AfterHookExecutionError } from '@kairo-js/router'`

**extends** `Error`

after フックが例外をスローした場合にスローされます。このエラーが発生した場合、ハンドラの結果は破棄されます。

## コンストラクター

```typescript
constructor(cause?: unknown)
```

**パラメーター**

- **cause:** `unknown` — 元となった例外（省略可能）。
