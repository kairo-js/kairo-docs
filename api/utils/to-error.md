# toError

`import { toError } from '@kairo-js/utils'`

任意の値を `Error` オブジェクトに変換する関数です。すでに `Error` インスタンスの場合はそのまま返します。`catch` ブロックで受け取った値を安全に `Error` として扱う際に使用します。

```typescript
function toError(e: unknown): Error
```

**パラメーター**

- **e:** `unknown`

  `Error` に変換する値。

**返り値:** `Error`

## 使用例

```typescript
import { toError } from '@kairo-js/utils'

try {
  // 何らかの処理
} catch (e) {
  const error = toError(e)
  console.error(error.message)
}

// Error でない値も変換される
const err = toError('something went wrong')
console.log(err instanceof Error) // true
console.log(err.message)          // 'something went wrong'
```
