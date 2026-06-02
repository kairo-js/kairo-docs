# AfterHookExecutionError

`import { AfterHookExecutionError } from '@kairo-js/router'`

**extends** `Error`

当 `after` 钩子抛出异常时抛出。发生此错误时，处理器的返回值将被丢弃。

## 构造函数

```typescript
constructor(cause?: unknown)
```

**参数**

- **cause:** `unknown`

  被抛出的原始异常（可选）。
