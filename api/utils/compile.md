# compile

`import { compile } from '@kairo-js/utils'`

TypeBox スキーマから型ガード付き検証関数をコンパイルして返す関数です。

```typescript
function compile<T extends TSchema>(schema: T): ValidateFunction<Static<T>>
```

**パラメーター**

- **schema:** `T`

  コンパイルする TypeBox スキーマ。

**返り値:** [`ValidateFunction<Static<T>>`](/api/utils/validate-function)

## 使用例

```typescript
import { compile } from '@kairo-js/utils'
import { Type, Static } from '@sinclair/typebox'

const PlayerSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
  level: Type.Number(),
})

type Player = Static<typeof PlayerSchema>

const isPlayer = compile(PlayerSchema)

function handleData(data: unknown): void {
  if (!isPlayer(data)) {
    console.error('不正なデータ:', isPlayer.errors)
    return
  }
  // data は Player 型として使用できる
  console.log(`${data.name} (Lv.${data.level})`)
}
```
