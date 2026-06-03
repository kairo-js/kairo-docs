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
| `undefined` / `false`（デフォルト） | standalone しない |
| `true` | 必須 `dependencies` が `kairo` と `kairo-database` のみの場合に standalone 起動 |

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

// デフォルト — standalone しない（kairo が必要）
router.init(properties)

// standalone を opt-in（他アドオンへの依存がない場合のみ起動）
router.init(properties, { standalone: true })
```
