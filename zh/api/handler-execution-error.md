# HandlerExecutionError

`import { HandlerExecutionError } from '@kairo-js/router'`

**extends** `Error`

不可直接实例化 — 作为抛出的异常接收。

当 API 处理器抛出异常时抛出。以 rejected `router.request()` Promise 的形式传播给调用方。
