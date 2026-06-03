# ValidateFunction

`import type { ValidateFunction } from '@kairo-js/utils'`

型ガード関数のインターフェースです。[`compile`](/api/utils/compile) 関数の返り値型として使用します。

```typescript
interface ValidateFunction<T> {
  (value: unknown): value is T
  errors?: readonly string[]
}
```

## フィールド

### errors

`errors?: readonly string[]`

検証失敗時のエラーメッセージ一覧（省略可能）。検証に失敗した場合にエラーの詳細を参照できます。検証が成功した場合は `undefined` または空配列になります。

---

## 使用例

```typescript
import { compile } from '@kairo-js/utils'
import { Type } from '@sinclair/typebox'

const PlayerSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
})

const isPlayer = compile(PlayerSchema)

const data: unknown = { id: 'abc', name: 'Steve' }

if (isPlayer(data)) {
  console.log(data.name) // TypeScript で型が絞り込まれる
} else {
  console.error('検証失敗:', isPlayer.errors)
}
```
