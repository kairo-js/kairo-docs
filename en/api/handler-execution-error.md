# HandlerExecutionError

`import { HandlerExecutionError } from '@kairo-js/router'`

**extends** `Error`

Thrown when the API handler throws. Propagates to the caller as a rejected `router.request()` Promise.

## Constructor

```typescript
constructor(cause?: unknown)
```

| Parameter | Type | Description |
|---|---|---|
| `cause` | `unknown` | The original exception that was thrown (optional) |
