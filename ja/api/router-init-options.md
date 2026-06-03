# RouterInitOptions

`import type { RouterInitOptions } from '@kairo-js/router'`

[`router.init()`](/ja/api/kairo-router#init) に渡すオプションオブジェクトです。

```typescript
interface RouterInitOptions {
  standalone?: boolean
}
```

## フィールド

### standalone

`standalone?: boolean`

kairo がインストールされていないワールドでの standalone 起動を制御します。

| 値 | 挙動 |
|---|---|
| `undefined`（デフォルト） | 必須 `dependencies` が `kairo` と `kairo-database` のみの場合に standalone 起動 |
| `true` | dependencies に関わらず常に standalone を試みる |
| `false` | standalone を無効化する |

**standalone 起動**は、kairo が検出されない場合にワールドロードから約 20 tick 後に発生します。standalone モードで active になった後の挙動:

- `router.save()` / `router.delete()` — 何もせず即座に resolve
- `router.load()` — 常に `undefined` を返す
- `router.has()` — 常に `false` を返す
- `router.send()` / `router.emit()` — 受け手のない ScriptEvent を送出
- `router.request()` — タイムアウト後に [`CanceledResult`](/ja/api/canceled-result) を返す

## 使用例

```typescript
import { router } from '@kairo-js/router'
import { properties } from './properties'

// dependencies が kairo のみなら自動で standalone 起動（オプション不要）
router.init(properties)

// 他アドオンへの依存があっても強制的に standalone 起動
router.init(properties, { standalone: true })

// standalone を無効化
router.init(properties, { standalone: false })
```
