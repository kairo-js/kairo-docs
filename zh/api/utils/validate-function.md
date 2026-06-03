# ValidateFunction\<T\>

`import type { ValidateFunction } from '@kairo-js/utils'`

类型守卫函数接口。由 [`compile()`](/zh/api/utils/compile) 返回，用于在运行时验证数据是否符合指定的 TypeBox schema。

```typescript
interface ValidateFunction<T> {
  (value: unknown): value is T
  errors?: readonly string[]
}
```

## 属性

### errors

`errors?: readonly string[]`

最近一次验证失败时的错误消息列表（可选）。验证成功时此字段为 `undefined` 或空数组。

## 调用签名

```typescript
(value: unknown): value is T
```

对传入值执行类型验证。

**参数**

- **value:** `unknown`

  要验证的值。

**返回值：** `value is T` — 若值符合类型 `T` 则返回 `true`，否则返回 `false`，并将错误信息写入 `errors`。

## 用法

```typescript
import { compile } from '@kairo-js/utils'
import { Type } from '@sinclair/typebox'

const schema = Type.Object({
  name: Type.String(),
  age: Type.Number(),
})

const validate = compile(schema)

const data: unknown = JSON.parse('{"name":"Alice","age":30}')

if (validate(data)) {
  console.log(data.name) // TypeScript knows data is { name: string; age: number }
} else {
  console.error(validate.errors)
}
```
