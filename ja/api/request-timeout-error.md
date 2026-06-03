# RequestTimeoutError

`import { RequestTimeoutError } from '@kairo-js/router'`

**extends** `Error`

`router.request()` が指定した tick 数以内に応答を受け取れなかった場合にスローされます。デフォルトのタイムアウトは 20 tick です。

## コンストラクター

```typescript
constructor()
```
