# HandlerExecutionError

`import { HandlerExecutionError } from '@kairo-js/router'`

**extends** `Error`

API ハンドラが例外をスローした場合にスローされます。`router.request()` の Promise が reject される形で呼び出し元に伝播します。

## コンストラクター

```typescript
constructor(cause?: unknown)
```

**パラメーター**

**cause:** `unknown`

元となった例外（省略可能）。
