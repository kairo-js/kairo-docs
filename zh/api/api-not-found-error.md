# ApiNotFoundError

`import { ApiNotFoundError } from '@kairo-js/router'`

**extends** `Error`

不可直接实例化 — 作为抛出的异常接收。

当指定的 API 名称不存在于路由表中时抛出。当传递给 `router.request()` 的 `apiName` 未在目标插件上注册时发生。
