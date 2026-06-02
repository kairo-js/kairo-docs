# HookOptions

`import type { HookOptions } from '@kairo-js/router'`

`ev.api.hook()` に渡すオプションオブジェクトです。

```typescript
type HookOptions<TArgs, TReturn> = {
  priority?: number
  modes?: ReadonlyArray<'send' | 'request'>
  before?: (ctx: BeforeHookContext<TArgs, TReturn>) => Promise<void>
  after?: (ctx: AfterHookContext<TArgs, TReturn>) => Promise<void>
  rollback?: (ctx: HookRollbackContext<TArgs>) => Promise<TArgs | void>
}
```

## フィールド

### priority

`priority?: number`

実行順序。小さいほど先に実行される。デフォルト `0`。32-bit 符号付き整数。

---

### modes

`modes?: ReadonlyArray<'send' | 'request'>`

フックを適用する呼び出し種別。省略かつ `after` が存在する場合は `["request"]`。省略かつ `before` のみの場合は `["send", "request"]`。

---

### before

`before?: (ctx: BeforeHookContext<TArgs, TReturn>) => Promise<void>`

ハンドラ実行前に呼ばれる。args の改ざん・cancel が可能。

---

### after

`after?: (ctx: AfterHookContext<TArgs, TReturn>) => Promise<void>`

ハンドラ実行後に呼ばれる（`request` のみ）。result の改ざんが可能。pure transform のみを行うこと。

---

### rollback

`rollback?: (ctx: HookRollbackContext<TArgs>) => Promise<TArgs | void>`

before フックが例外をスローした場合のみ呼ばれる。省略可能。

---

::: warning
`before` と `after` は少なくとも片方が必須です。両方を省略するとエラーになります。
:::

## 実行順序（オニオンモデル）

```
before: -10 → 0(B) → 0(C) → 5 → [handler] → after: 5 → 0(C) → 0(B) → -10
```

`after` の実行順は `before` の実際の実行順の完全逆順です。

## 使用例

```typescript
ev.api.hook<{ playerId: string }, { balance: number }>(
  'economy-addon',
  'economy/getBalance',
  {
    priority: -10,
    modes: ['request'],
    before: async (ctx) => {
      const cached = cache.get(ctx.args.playerId)
      if (cached) {
        ctx.cancel(cached)
        return
      }
    },
    after: async (ctx) => {
      cache.set(ctx.args.playerId, ctx.result)
    },
  },
)
```
