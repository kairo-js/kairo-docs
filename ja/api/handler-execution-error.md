# HandlerExecutionError

`import { HandlerExecutionError } from '@kairo-js/router'`

**extends** `Error`

直接インスタンス化不可 — スローされた例外として受け取ります。

API ハンドラが例外をスローした場合にスローされます。`router.request()` の Promise が reject される形で呼び出し元に伝播します。
