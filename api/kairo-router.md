# kairo-router API リファレンス

ゲストアドオンが使用するライブラリの API リファレンスです。すべての宣言（`register` / `hook`）は `router.beforeEvents.startup` 内でのみ有効です。

## 起動イベント

### `router.beforeEvents.startup`

Minecraft の `worldLoad` より前に発火するイベントです。API の宣言はすべてここで行います。

```typescript
router.beforeEvents.startup.subscribe((ev) => {
  // ev.api.register() / ev.api.hook() / ev.customCommandRegistry.registerCommand()
})
```

`ev.api` は startup 終了後に seal されます。startup 外から呼ぶとエラーになります。

---

## API の提供

### `ev.api.register()`

自アドオンが提供する API ハンドラを宣言します。

```typescript
ev.api.register<TArgs, TReturn>(
  apiName: string,
  handler: (args: TArgs) => TReturn | Promise<TReturn>,
): void
```

- `addonId` はコンテキストから自動取得されるため指定不要です。
- 同一 `addonId` 内で同一 `apiName` を重複登録するとエラーになります。
- ハンドラが実際に呼び出し可能になるのは activation 後です。

```typescript
ev.api.register<{ playerId: string }, { balance: number }>(
  'economy/getBalance',
  async ({ playerId }) => ({ balance: 100 }),
)
```

::: tip API 名の名前空間
`economy/getBalance` のようにスラッシュ区切りの名前空間を付けることを推奨します。
:::

---

## API の呼び出し

### `router.send()`

fire-and-forget 形式で API を呼び出します。返答を待ちません。

```typescript
router.send(
  targetAddonId: string,
  apiName: string,
  args?: unknown,
): void
```

- 対象 addonId が存在しない・inactive でも無視されます。
- フックでキャンセルされても呼び出し元には伝わりません。
- **順序保証なし**: 複数の `send` の到達順は未規定です。

```typescript
router.send('economy-addon', 'onTransaction', { amount: 50 })
```

### `router.request()`

結果を待つ形式で API を呼び出します。

```typescript
router.request<TReturn>(
  targetAddonId: string,
  apiName: string,
  args?: unknown,
  options?: { timeout?: number }, // tick 単位。デフォルト 20 tick
): Promise<TReturn | CancelledResult>
```

```typescript
const result = await router.request<{ balance: number }>(
  'economy-addon',
  'getBalance',
  { playerId: '...' },
)

if ('cancelled' in result) {
  // キャンセルされた場合
  console.log(result.reason) // "ADDON_NOT_FOUND" | "ADDON_INACTIVE" | ...
} else {
  console.log(result.balance)
}
```

#### エラー評価順序

| 順序 | チェック内容 | 挙動 |
|---|---|---|
| 1 | 対象 addonId がルーティングテーブルに存在しない | `{ cancelled: true, reason: "ADDON_NOT_FOUND" }` |
| 2 | 対象アドオンが inactive | `{ cancelled: true, reason: "ADDON_INACTIVE" }` |
| 3 | 対象アドオンが unresolved | `{ cancelled: true, reason: "ADDON_UNRESOLVED" }` |
| 4 | apiName が存在しない | Promise reject（`ApiNotFoundError`） |
| 5 | before hook が例外をスロー | Promise reject（`BeforeHookExecutionError`） |
| 6 | hook がキャンセル | `{ cancelled: true, reason: "CANCELLED_BY_HOOK" }` |
| 7 | ハンドラが例外をスロー | Promise reject（`HandlerExecutionError`） |
| 8 | タイムアウト | Promise reject（`RequestTimeoutError`） |

---

## フック

### `ev.api.hook()`

他アドオンの API 呼び出しをインターセプトします。

```typescript
ev.api.hook<TArgs, TReturn>(
  targetAddonId: string,
  apiName: string,
  options: HookOptions<TArgs, TReturn>,
): void
```

```typescript
type HookOptions<TArgs, TReturn> = {
  priority?: number                // 小さいほど先に実行。デフォルト 0
  modes?: ReadonlyArray<'send' | 'request'>
  before?: (ctx: BeforeHookContext<TArgs, TReturn>) => Promise<void>
  after?: (ctx: AfterHookContext<TArgs, TReturn>) => Promise<void>
  rollback?: (ctx: HookRollbackContext<TArgs>) => Promise<TArgs | void>
}
```

`before` / `after` は少なくとも片方が必要です。両方を省略するとエラーになります。

#### 実行順序（オニオンモデル）

```
before: -10 → 0(B) → 0(C) → 5 → [handler] → after: 5 → 0(C) → 0(B) → -10
```

`after` の実行順は `before` の実際の実行順の完全逆順です。

#### 使用例

```typescript
router.beforeEvents.startup.subscribe((ev) => {
  // 引数の改ざん
  ev.api.hook('addon-a', 'test', {
    before: async (ctx) => {
      ctx.args = { ...ctx.args, injected: true }
    },
  })

  // キャッシュ返却（ハンドラをスキップ）
  ev.api.hook('addon-a', 'economy/getBalance', {
    before: async (ctx) => {
      const cached = cache.get(ctx.args.playerId)
      if (cached) ctx.cancel(cached) // cancel() 後は即 return すること
    },
  })

  // 結果の後処理
  ev.api.hook('addon-a', 'economy/getBalance', {
    after: async (ctx) => {
      ctx.result = { ...ctx.result, taxApplied: true }
    },
  })
})
```

### BeforeHookContext

```typescript
type BeforeHookContext<TArgs, TReturn> = {
  args: TArgs                            // 変更可能
  readonly callerAddonId: string
  cancel(result?: TReturn): never        // result あり → ショートサーキット / なし → CANCELLED_BY_HOOK
  setRollbackData(data: unknown): void
}
```

### AfterHookContext

```typescript
type AfterHookContext<TArgs, TReturn> = {
  readonly args: TArgs   // 変更禁止（deep mutation も仕様違反）
  result: TReturn        // 変更可能
  readonly callerAddonId: string
}
```

### HookRollbackContext

`before` hook が例外をスローした場合のみ発火します。

```typescript
type HookRollbackContext<TArgs> = {
  readonly rollbackData: unknown
  readonly currentArgsSnapshot: DeepReadonly<TArgs>
  readonly callerAddonId: string
}
```

---

## 型定義

### CancelledResult

```typescript
type CancelledResult = {
  readonly cancelled: true
  readonly reason:
    | 'ADDON_NOT_FOUND'
    | 'ADDON_INACTIVE'
    | 'ADDON_UNRESOLVED'
    | 'CANCELLED_BY_HOOK'
}
```

### エラークラス

```typescript
class ApiNotFoundError         extends Error {} // API 名がルーティングテーブルに存在しない
class RequestTimeoutError      extends Error {} // タイムアウト
class BeforeHookExecutionError extends Error {} // before hook が例外をスロー
class AfterHookExecutionError  extends Error {} // after hook が例外をスロー
class HandlerExecutionError    extends Error {} // ハンドラが例外をスロー
class ProtocolError            extends Error {} // メッセージのパース失敗・スキーマ不一致
```
