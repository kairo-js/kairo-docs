# AfterHookExecutionError

`import { AfterHookExecutionError } from '@kairo-js/router'`

**extends** `Error`

직접 인스턴스화 불가 — 발생한 예외로 수신됩니다.

`after` 훅이 예외를 던질 때 발생합니다. 이 오류가 발생하면 핸들러의 결과값은 폐기됩니다.
