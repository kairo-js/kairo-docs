# Subscribable

`import type { Subscribable } from '@kairo-js/router'`

`KairoBeforeEvents` および `KairoAfterEvents` の各プロパティの型です。イベントの購読・購読解除を提供します。

```typescript
interface Subscribable<T> {
  subscribe(fn: (arg: T) => void): Disposable
  unsubscribe(fn: (arg: T) => void): void
}
```

## メソッド

### subscribe()

```typescript
subscribe(fn: (arg: T) => void): Disposable
```

イベントハンドラを登録します。戻り値の [`Disposable`](/api/disposable) を使って後から購読を解除できます。

**パラメーター**

**fn:** `(arg: T) => void`

イベント発火時に呼ばれるハンドラ。

**返り値:** [`Disposable`](/api/disposable)

---

### unsubscribe()

```typescript
unsubscribe(fn: (arg: T) => void): void
```

登録済みのイベントハンドラを解除します。`subscribe()` に渡した関数の参照を指定します。

**パラメーター**

**fn:** `(arg: T) => void`

解除するハンドラ。

**返り値:** `void`

## 使用例

```typescript
import { router } from '@kairo-js/router'

// subscribe して Disposable を保持する
const disposable = router.afterEvents.playerJoin.subscribe((ev) => {
  console.log(`${ev.playerName} が参加しました`)
})

// 不要になったら dispose で解除する
disposable.dispose()

// または unsubscribe に関数参照を渡して解除する
const handler = (ev: PlayerJoinAfterEvent) => {
  console.log(`${ev.playerName} が参加しました`)
}
router.afterEvents.playerJoin.subscribe(handler)
router.afterEvents.playerJoin.unsubscribe(handler)
```
