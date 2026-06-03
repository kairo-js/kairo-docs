# HandlerExecutionError

`import { HandlerExecutionError } from '@kairo-js/router'`

**extends** `Error`

직접 인스턴스화 불가 — 발생한 예외로 수신됩니다.

API 핸들러가 예외를 던질 때 발생합니다. 호출자에게 거부된 `router.request()` Promise로 전파됩니다.
