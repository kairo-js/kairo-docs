# ApiNotFoundError

`import { ApiNotFoundError } from '@kairo-js/router'`

**extends** `Error`

当指定的 API 名称不存在于路由表中时抛出。当传递给 `router.request()` 的 `apiName` 未在目标插件上注册时发生。

## 构造函数

```typescript
constructor(apiName?: string)
```

**参数**

- **apiName:** `string`

  未找到的 API 名称（可选）。
