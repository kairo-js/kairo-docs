# BeforeHookExecutionError

`import { BeforeHookExecutionError } from '@kairo-js/router'`

**extends** `Error`

当 `before` 钩子抛出异常时抛出。在此错误被抛出时，失败钩子的回滚逻辑已经执行完毕。

## 构造函数

```typescript
constructor(cause?: unknown)
```

**参数**

- **cause:** `unknown`

  被抛出的原始异常（可选）。
