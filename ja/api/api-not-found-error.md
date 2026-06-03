# ApiNotFoundError

`import { ApiNotFoundError } from '@kairo-js/router'`

**extends** `Error`

直接インスタンス化不可 — スローされた例外として受け取ります。

API 名がルーティングテーブルに存在しない場合にスローされます。`router.request()` の呼び出し先アドオンに指定した `apiName` が登録されていない場合に発生します。
