# ProtocolError

`import { ProtocolError } from '@kairo-js/router'`

**extends** `Error`

ScriptEvent メッセージのパース失敗またはスキーマ不一致の場合にスローされます。

## プロパティ

### source

`readonly source: "local_parse" | "remote"`

エラー発生箇所。`"local_parse"` は自アドオン側のパース失敗、`"remote"` は送信元アドオンから報告されたエラー。

---

### protocolStage

`readonly protocolStage: ProtocolStage | undefined`

エラーが発生したプロトコルステージ。

---

### correlationId

`readonly correlationId: string | undefined`

対象 `request()` の correlationId。

---

## コンストラクター

```typescript
constructor(
  message: string,
  source: "local_parse" | "remote",
  protocolStage?: ProtocolStage,
  correlationId?: string,
)
```

| パラメーター | 型 | 説明 |
|---|---|---|
| `message` | `string` | エラーメッセージ |
| `source` | `"local_parse" \| "remote"` | エラー発生箇所 |
| `protocolStage` | `ProtocolStage` | プロトコルステージ（省略可能） |
| `correlationId` | `string` | 対象リクエストの correlationId（省略可能） |
