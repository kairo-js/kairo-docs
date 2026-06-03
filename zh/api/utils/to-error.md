# toError

`import { toError } from '@kairo-js/utils'`

将任意值转换为 `Error` 对象。在 `catch` 块中，捕获到的值类型为 `unknown`，此函数可将其安全地规范化为 `Error` 实例。

## 函数


```typescript
toError(e: unknown): Error
```

**参数**

- **e:** `unknown`

  要转换的任意值。通常来自 `catch (e)` 捕获的异常。

**返回值：** `Error` — 若 `e` 已是 `Error` 实例则直接返回；否则将其包装为新的 `Error` 对象（使用 `String(e)` 作为消息）。

## 用法

```typescript
import { toError } from '@kairo-js/utils'

try {
  doSomethingRisky()
} catch (e) {
  const error = toError(e)
  console.error(error.message)
  console.error(error.stack)
}
```
