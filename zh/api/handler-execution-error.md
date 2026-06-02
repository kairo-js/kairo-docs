# HandlerExecutionError

`import { HandlerExecutionError } from '@kairo-js/router'`

**extends** `Error`

当 API 处理器抛出异常时抛出。以 rejected `router.request()` Promise 的形式传播给调用方。

## 构造函数

```typescript
constructor(cause?: unknown)
```

**参数**

- **cause:** `unknown`

  被抛出的原始异常（可选）。
