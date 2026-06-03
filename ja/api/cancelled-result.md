# CancelledResult

`import type { CancelledResult } from '@kairo-js/router'`

`router.request()` がキャンセルされた場合の返り値です。Promise が reject されるのではなく、resolve 値として返されます。

```typescript
interface CancelledResult {
  readonly cancelled: true
  readonly reason:
    | 'ADDON_NOT_FOUND'
    | 'ADDON_INACTIVE'
    | 'ADDON_UNRESOLVED'
    | 'CANCELLED_BY_HOOK'
}
```

## フィールド

### cancelled

`readonly cancelled: true`

常に `true`。型ガードとして使用する。

---

### reason

`readonly reason: 'ADDON_NOT_FOUND' | 'ADDON_INACTIVE' | 'ADDON_UNRESOLVED' | 'CANCELLED_BY_HOOK'`

キャンセルの理由。

---

## reason の説明

| reason | 説明 |
|---|---|
| `ADDON_NOT_FOUND` | 対象 addonId がルーティングテーブルに存在しない |
| `ADDON_INACTIVE` | 対象アドオンが inactive 状態 |
| `ADDON_UNRESOLVED` | 対象アドオンが unresolved 状態（依存解決前） |
| `CANCELLED_BY_HOOK` | before フックが `ctx.cancel()` を呼び出してキャンセルした |

## 使用例

```typescript
const result = await router.request<{ balance: number }>(
  'economy-addon',
  'economy/getBalance',
  { playerId: 'abc123' },
)

if ('cancelled' in result) {
  switch (result.reason) {
    case 'ADDON_NOT_FOUND':
      console.warn('economy-addon が見つかりません')
      break
    case 'ADDON_INACTIVE':
      console.warn('economy-addon は現在停止中です')
      break
    case 'CANCELLED_BY_HOOK':
      console.warn('フックによってキャンセルされました')
      break
    default:
      console.warn('キャンセルされました:', result.reason)
  }
} else {
  console.log('残高:', result.balance)
}
```
