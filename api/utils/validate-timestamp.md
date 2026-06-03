# validateTimestamp

`import { validateTimestamp } from '@kairo-js/utils'`

タイムスタンプの妥当性を検証する関数です。タイムアウトや未来時刻を検出した場合に指定のエラーファクトリーを呼び出してスローします。

```typescript
function validateTimestamp(
  currentTick: number,
  timestamp: number,
  timeout: number,
  onTimeout: () => Error,
  onFuture: () => Error,
): void
```

**パラメーター**

- **currentTick:** `number`

  現在の tick 数。
- **timestamp:** `number`

  妥当性を検証するタイムスタンプ（tick 単位）。
- **timeout:** `number`

  許容する経過 tick 数。`currentTick - timestamp` がこの値を超えた場合にタイムアウトと判定します。
- **onTimeout:** `() => Error`

  タイムアウト検出時に呼び出されるエラーファクトリー関数。
- **onFuture:** `() => Error`

  未来時刻検出時（`timestamp > currentTick`）に呼び出されるエラーファクトリー関数。

**返り値:** `void`

## 使用例

```typescript
import { validateTimestamp } from '@kairo-js/utils'

validateTimestamp(
  router.currentTick,
  message.timestamp,
  20,
  () => new Error('リクエストがタイムアウトしました'),
  () => new Error('未来のタイムスタンプは無効です'),
)
```
