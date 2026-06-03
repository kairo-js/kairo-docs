# ApiRegistration

`ev.api` 経由でアクセスするインターフェースです。`router.beforeEvents.startup` イベント内でのみ操作可能です。

```typescript
interface ApiRegistration {
  register<TArgs, TReturn>(apiName: string, handler: (args: TArgs) => TReturn | Promise<TReturn>): void
  hook<TArgs, TReturn>(targetAddonId: string, apiName: string, options: HookOptions<TArgs, TReturn>): void
}
```

## メソッド

- [hook](#hook)
- [register](#register)

### hook {#hook}

```typescript
hook<TArgs, TReturn>(
  targetAddonId: string,
  apiName: string,
  options: HookOptions<TArgs, TReturn>,
): void
```

他アドオンの API 呼び出しをインターセプトするフックを登録します。

**パラメーター**

- **targetAddonId:** `string`

  フック対象アドオンの ID。
- **apiName:** `string`

  フック対象の API 名。
- **options:** [`HookOptions<TArgs, TReturn>`](/ja/api/hook-options)

  フックの設定。

**返り値:** `void`

```typescript
// 引数の改ざん
ev.api.hook('economy-addon', 'economy/getBalance', {
  before: async (ctx) => {
    ctx.args = { ...ctx.args, audited: true }
  },
})

// 結果の後処理
ev.api.hook('economy-addon', 'economy/getBalance', {
  after: async (ctx) => {
    ctx.result = { ...ctx.result, taxRate: 0.1 }
  },
})
```

---

### register {#register}

```typescript
register<TArgs, TReturn>(
  apiName: string,
  handler: (args: TArgs, ctx: ApiHandlerContext) => TReturn | Promise<TReturn>,
): void
```

自アドオンが提供する API ハンドラを登録します。同一 addonId 内で同じ `apiName` を重複登録するとエラーになります。

**パラメーター**

- **apiName:** `string`

  登録する API 名。
- **handler:** `(args: TArgs, ctx:` [`ApiHandlerContext`](/ja/api/api-handler-context)`) => TReturn | Promise<TReturn>`

  API 呼び出し時に実行するハンドラ。`ctx.callerAddonId` で呼び出し元を識別できます。

**返り値:** `void`

```typescript
ev.api.register<{ playerId: string }, { balance: number }>(
  'economy/getBalance',
  async ({ playerId }, ctx) => {
    console.log(`呼び出し元: ${ctx.callerAddonId}`)
    return { balance: getBalance(playerId) }
  },
)
```

::: tip API 名の名前空間
`economy/getBalance` のようにスラッシュ区切りの名前空間を付けることを推奨します。
:::
