# safeJsonParse

`import { safeJsonParse } from '@kairo-js/utils'`

`JSON.parse` をラップし、パース失敗時に指定したエラーをスローする関数です。

```typescript
function safeJsonParse(message: string, error: () => Error): unknown
```

**パラメーター**

- **message:** `string`

  パースする JSON 文字列。
- **error:** `() => Error`

  JSON パースに失敗した場合に呼び出されるエラーファクトリー関数。

**返り値:** `unknown`

## 使用例

```typescript
import { safeJsonParse } from '@kairo-js/utils'

const json = '{"id":"abc","name":"Steve"}'

const data = safeJsonParse(
  json,
  () => new Error('JSON のパースに失敗しました'),
)

console.log(data) // { id: 'abc', name: 'Steve' }

// パース失敗時はエラーがスローされる
safeJsonParse(
  'invalid json',
  () => new TypeError('不正な JSON 形式です'),
) // TypeError をスロー
```
