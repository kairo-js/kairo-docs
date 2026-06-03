# RequestTimeoutError

`import { RequestTimeoutError } from '@kairo-js/router'`

**extends** `Error`

직접 인스턴스화 불가 — 발생한 예외로 수신됩니다.

`router.request()`가 지정된 틱 수 내에 응답을 받지 못할 때 발생합니다. 기본 타임아웃은 20틱입니다.
