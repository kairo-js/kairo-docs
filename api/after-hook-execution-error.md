# AfterHookExecutionError

`import { AfterHookExecutionError } from '@kairo-js/router'`

**extends** `Error`

Thrown when an `after` hook throws. When this error occurs, the handler result is discarded.

## Constructor

```typescript
constructor(cause?: unknown)
```

**Parameters**

- **cause:** `unknown`

  The original exception that was thrown (optional).
