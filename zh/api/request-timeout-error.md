# RequestTimeoutError

`import { RequestTimeoutError } from '@kairo-js/router'`

**extends** `Error`

不可直接实例化 — 作为抛出的异常接收。

当 `router.request()` 在指定 tick 数内未收到响应时抛出。默认超时为 20 tick。
