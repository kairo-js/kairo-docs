# AfterHookExecutionError

`import { AfterHookExecutionError } from '@kairo-js/router'`

**extends** `Error`

不可直接实例化 — 作为抛出的异常接收。

当 `after` 钩子抛出异常时抛出。发生此错误时，处理器的返回值将被丢弃。
