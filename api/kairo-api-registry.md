# KairoApiRegistry

`import { router } from '@kairo-js/router'`

`ev.api` 経由でアクセスするクラスです。`router.beforeEvents.startup` イベント内でのみ操作可能です。startup イベント終了後に seal され、以降の操作はエラーになります。

## メソッド

- [dispose](#dispose)
- [getApiHandler](#getapihandler)
- [getApiNames](#getapinames)
- [getHookDeclarations](#gethookdeclarations)
- [hook](#hook)
- [register](#register)
- [seal](#seal)
- [setDeclaringAddonId](#setdeclaringaddonid)

### dispose {#dispose}

```typescript
dispose(): void
```

リソースを破棄します。

**返り値:** `void`

---

### getApiHandler {#getapihandler}

```typescript
getApiHandler(apiName: string): ApiHandler | undefined
```

登録済み API ハンドラを取得します。未登録の場合は `undefined` を返します。

**パラメーター**

- **apiName:** `string`

  取得する API 名。

**返り値:** `ApiHandler | undefined`

---

### getApiNames {#getapinames}

```typescript
getApiNames(): ReadonlyArray<string>
```

登録済み API 名の一覧を返します。

**返り値:** `ReadonlyArray<string>`

---

### getHookDeclarations {#gethookdeclarations}

```typescript
getHookDeclarations(): readonly HookDeclaration[]
```

登録済みフック宣言の一覧を返します。

**返り値:** `readonly HookDeclaration[]`

---

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
- **options:** `HookOptions<TArgs, TReturn>`

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
  handler: (args: TArgs) => TReturn | Promise<TReturn>,
): void
```

自アドオンが提供する API ハンドラを登録します。同一 addonId 内で同じ `apiName` を重複登録するとエラーになります。

**パラメーター**

- **apiName:** `string`

  登録する API 名。
- **handler:** `(args: TArgs) => TReturn | Promise<TReturn>`

  API 呼び出し時に実行するハンドラ。

**返り値:** `void`

```typescript
ev.api.register<{ playerId: string }, { balance: number }>(
  'economy/getBalance',
  async ({ playerId }) => {
    return { balance: getBalance(playerId) }
  },
)
```

::: tip API 名の名前空間
`economy/getBalance` のようにスラッシュ区切りの名前空間を付けることを推奨します。
:::

---

### seal {#seal}

```typescript
seal(): void
```

API 登録を終了します。フレームワーク内部から呼ばれます。seal 後に `register()` または `hook()` を呼び出すとエラーになります。

**返り値:** `void`

---

### setDeclaringAddonId {#setdeclaringaddonid}

```typescript
setDeclaringAddonId(addonId: string): void
```

フック宣言者の addonId を設定します。フレームワーク内部から呼ばれます。

**パラメーター**

- **addonId:** `string`

  宣言者の addonId。

**返り値:** `void`
