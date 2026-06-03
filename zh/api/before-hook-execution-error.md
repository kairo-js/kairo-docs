# BeforeHookExecutionError

`import { BeforeHookExecutionError } from '@kairo-js/router'`

**extends** `Error`

不可直接实例化 — 作为抛出的异常接收。

当 `before` 钩子抛出异常时抛出。在此错误被抛出时，失败钩子的回滚逻辑已经执行完毕。
