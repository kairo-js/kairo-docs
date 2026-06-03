# ProtocolError

`import { ProtocolError } from '@kairo-js/router'`

**extends** `Error`

不可直接实例化 — 作为抛出的异常接收。

当 ScriptEvent 消息解析失败或模式不匹配时抛出。

## 属性

### source

`readonly source: "local_parse" | "remote"`

错误发生的位置。`"local_parse"` 表示本插件内的解析失败；`"remote"` 表示由发送方插件报告的错误。

---

### protocolStage

`readonly protocolStage: ProtocolStage | undefined`

错误发生时所处的协议阶段。

---

### correlationId

`readonly correlationId: string | undefined`

关联的 `request()` 调用的 correlationId。

---
