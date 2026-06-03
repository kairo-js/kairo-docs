# BeforeHookExecutionError

`import { BeforeHookExecutionError } from '@kairo-js/router'`

**extends** `Error`

직접 인스턴스화 불가 — 발생한 예외로 수신됩니다.

`before` 훅이 예외를 던질 때 발생합니다. 이 오류가 던져지는 시점에는 실패한 훅에 대한 롤백이 이미 실행된 상태입니다.
