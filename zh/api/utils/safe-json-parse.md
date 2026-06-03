# safeJsonParse

`import { safeJsonParse } from '@kairo-js/utils'`

`JSON.parse` 的安全包装器。若解析成功则返回解析结果，若抛出异常则调用 `error` 回调而非向上传播异常。

## 函数


```typescript
safeJsonParse(message: string, error: (e: unknown) => void): unknown
```

**参数**

- **message:** `string`

  要解析的 JSON 字符串。
- **error:** `(e: unknown) => void`

  解析失败时调用的回调函数。接收捕获到的异常值作为参数。

**返回值：** `unknown` — 解析成功时返回解析结果；解析失败时调用 `error()` 回调，函数返回 `undefined`。

## 用法

```typescript
import { safeJsonParse } from '@kairo-js/utils'

const result = safeJsonParse('{"key":"value"}', (e) => {
  console.error('Failed to parse JSON:', e)
})

// result is { key: 'value' }

const bad = safeJsonParse('not json', (e) => {
  console.error('Parse error:', e) // Called here
})

// bad is undefined
```
