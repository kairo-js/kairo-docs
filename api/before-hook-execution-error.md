# BeforeHookExecutionError

`import { BeforeHookExecutionError } from '@kairo-js/router'`

**extends** `Error`

Thrown when a `before` hook throws. By the time this error is thrown, rollback for the failing hook has already been executed.

## Constructor

```typescript
constructor(cause?: unknown)
```

**Parameters**

- **cause:** `unknown`

  The original exception that was thrown (optional).
