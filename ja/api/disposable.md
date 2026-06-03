# Disposable

`import type { Disposable } from '@kairo-js/router'`

`subscribe()` の戻り値など、解放可能なリソースを表すインターフェースです。

```typescript
interface Disposable {
  dispose(): void
}
```

## メソッド

### dispose()

```typescript
dispose(): void
```

リソースを解放します。イベント購読の場合は購読が解除されます。

**返り値:** `void`

## 使用例

```typescript
import { router } from '@kairo-js/router'

// subscribe の戻り値として Disposable を受け取る
const disposable = router.afterEvents.playerJoin.subscribe((ev) => {
  console.log(`${ev.playerName} が参加しました`)
})

// 不要になったタイミングで dispose する
router.beforeEvents.addonDeactivate.subscribe(() => {
  disposable.dispose()
})
```
