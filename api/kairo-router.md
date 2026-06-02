# KairoRouter

`import { router } from '@kairo-js/router'`

`router` シングルトンとして export されるクラスです。アドオンの初期化・API 呼び出し・イベント購読など、kairo-router の主要機能を提供します。

## プロパティ

### afterEvents

`readonly afterEvents: KairoAfterEvents`

after イベントの購読。

---

### beforeEvents

`readonly beforeEvents: KairoBeforeEvents`

before イベントの購読。

---

### currentTick

`readonly currentTick: number`

現在の tick 数（getter）。

---

### systemInfo

`readonly systemInfo: KairoContext`

アドオンのコンテキスト情報（getter）。

---

## メソッド

- [clearRun](#clearrun)
- [emit](#emit)
- [getAddonId](#getaddonid)
- [getHookDeclarations](#gethookdeclarations)
- [init](#init)
- [request](#request)
- [runInterval](#runinterval)
- [runTimeout](#runtimeout)
- [send](#send)
- [waitForWorldLoad](#waitforworldload)

### clearRun {#clearrun}

```typescript
clearRun(runId: number): void
```

`runInterval()` または `runTimeout()` でスケジュールした実行をキャンセルします。

**パラメーター**

- **runId:** `number` — キャンセルする実行の ID。

**返り値:** `void`

---

### emit {#emit}

```typescript
emit(eventName: string, payload?: unknown): void
```

カスタムイベントを送出します。`AddonEventRegistry.on()` で購読しているハンドラに配信されます。

**パラメーター**

- **eventName:** `string` — 送出するイベント名。
- **payload:** `unknown` — イベントに添付するデータ（省略可能）。

**返り値:** `void`

---

### getAddonId {#getaddonid}

```typescript
getAddonId(): string | undefined
```

自アドオンの addonId を返します。アドオンが登録される前は `undefined` を返します。

**返り値:** `string | undefined`

---

### getHookDeclarations {#gethookdeclarations}

```typescript
getHookDeclarations(): readonly InternalHookDeclaration[]
```

登録済みフック宣言の一覧を返します。

**返り値:** `readonly InternalHookDeclaration[]`

---

### init {#init}

```typescript
init(properties: AddonProperties): void
```

アドオンを初期化します。

**パラメーター**

- **properties:** `AddonProperties` — アドオンの設定情報。

**返り値:** `void`

---

### request {#request}

```typescript
request<TReturn>(
  targetAddonId: string,
  apiName: string,
  args?: unknown,
  options?: { timeout?: number },
): Promise<TReturn | CancelledResult>
```

結果を待つ形式で API を呼び出します。`timeout` は tick 単位で、デフォルトは 20 tick です。

**パラメーター**

- **targetAddonId:** `string` — 呼び出し先アドオンの ID。
- **apiName:** `string` — 呼び出す API 名。
- **args:** `unknown` — API に渡す引数（省略可能）。
- **options.timeout:** `number` — タイムアウト（tick 単位、デフォルト 20）。

**返り値:** `Promise<TReturn | CancelledResult>`

```typescript
const result = await router.request<{ balance: number }>(
  'economy-addon',
  'economy/getBalance',
  { playerId: 'abc123' },
)

if ('cancelled' in result) {
  console.warn('キャンセルされました:', result.reason)
} else {
  console.log('残高:', result.balance)
}
```

---

### runInterval {#runinterval}

```typescript
runInterval(callback: () => void, tickInterval?: number): number
```

指定した tick 間隔で callback を定期実行します。`clearRun()` に渡す runId を返します。

**パラメーター**

- **callback:** `() => void` — 定期実行する処理。
- **tickInterval:** `number` — 実行間隔（tick 単位、省略可能）。

**返り値:** `number` — runId

---

### runTimeout {#runtimeout}

```typescript
runTimeout(callback: () => void, tickDelay?: number): number
```

指定した tick 後に callback を 1 度だけ実行します。`clearRun()` に渡す runId を返します。

**パラメーター**

- **callback:** `() => void` — 遅延実行する処理。
- **tickDelay:** `number` — 遅延時間（tick 単位、省略可能）。

**返り値:** `number` — runId

---

### send {#send}

```typescript
send(targetAddonId: string, apiName: string, args?: unknown): void
```

fire-and-forget 形式で API を呼び出します。返答を待ちません。対象アドオンが存在しない・inactive であっても無視されます。

**パラメーター**

- **targetAddonId:** `string` — 呼び出し先アドオンの ID。
- **apiName:** `string` — 呼び出す API 名。
- **args:** `unknown` — API に渡す引数（省略可能）。

**返り値:** `void`

```typescript
router.send('economy-addon', 'onTransaction', { amount: 50 })
```

---

### waitForWorldLoad {#waitforworldload}

```typescript
waitForWorldLoad(): Promise<void>
```

ワールド読み込みが完了するまで待機します。

**返り値:** `Promise<void>`
