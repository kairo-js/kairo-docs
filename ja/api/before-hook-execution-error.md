# BeforeHookExecutionError

`import { BeforeHookExecutionError } from '@kairo-js/router'`

**extends** `Error`

直接インスタンス化不可 — スローされた例外として受け取ります。

before フックが例外をスローした場合にスローされます。このエラーがスローされる時点では、該当フックのロールバック処理が既に実行済みです。
