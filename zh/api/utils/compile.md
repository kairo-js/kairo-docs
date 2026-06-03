# compile

`import { compile } from '@kairo-js/utils'`

将 TypeBox schema 编译为验证函数。返回的 [`ValidateFunction`](/zh/api/utils/validate-function) 可作为类型守卫使用，在运行时验证未知数据的类型。

## 函数


```typescript
compile<T>(schema: TSchema): ValidateFunction<Static<T>>
```

**参数**

- **schema:** `TSchema`

  由 `@sinclair/typebox` 的 `Type` 构建器创建的 schema 对象。

**返回值：** [`ValidateFunction<Static<T>>`](/zh/api/utils/validate-function) — 编译后的验证函数。调用时返回类型守卫布尔值，验证失败时通过 `errors` 属性提供错误详情。

## 用法

```typescript
import { compile } from '@kairo-js/utils'
import { Type } from '@sinclair/typebox'

const MessageSchema = Type.Object({
  type: Type.String(),
  payload: Type.Unknown(),
})

const validateMessage = compile(MessageSchema)

function handleRaw(raw: unknown) {
  if (!validateMessage(raw)) {
    console.error('Invalid message:', validateMessage.errors)
    return
  }
  console.log(raw.type, raw.payload)
}
```
