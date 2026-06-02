# ApiNotFoundError

`import { ApiNotFoundError } from '@kairo-js/router'`

**extends** `Error`

API 名がルーティングテーブルに存在しない場合にスローされます。`router.request()` の呼び出し先アドオンに指定した `apiName` が登録されていない場合に発生します。

## コンストラクター

```typescript
constructor(apiName?: string)
```

**パラメーター**

- **apiName:** `string`

  見つからなかった API 名（省略可能）。
