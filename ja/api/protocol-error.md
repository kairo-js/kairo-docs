# ProtocolError

`import { ProtocolError } from '@kairo-js/router'`

**extends** `Error`

直接インスタンス化不可 — スローされた例外として受け取ります。

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
