# RequestTimeoutError

`import { RequestTimeoutError } from '@kairo-js/router'`

**extends** `Error`

直接インスタンス化不可 — スローされた例外として受け取ります。

`router.request()` が指定した tick 数以内に応答を受け取れなかった場合にスローされます。デフォルトのタイムアウトは 20 tick です。
