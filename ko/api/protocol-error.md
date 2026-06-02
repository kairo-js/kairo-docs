# ProtocolError

`import { ProtocolError } from '@kairo-js/router'`

**extends** `Error`

ScriptEvent 메시지 파싱 실패 또는 스키마 불일치 시 발생합니다.

## 프로퍼티

### source

`readonly source: "local_parse" | "remote"`

오류가 발생한 위치입니다. `"local_parse"`는 이 애드온에서의 파싱 실패를, `"remote"`는 송신 애드온이 보고한 오류를 의미합니다.

---

### protocolStage

`readonly protocolStage: ProtocolStage | undefined`

오류가 발생한 프로토콜 단계입니다.

---

### correlationId

`readonly correlationId: string | undefined`

관련된 `request()` 호출의 correlationId입니다.

---

## 생성자

```typescript
constructor(
  message: string,
  source: "local_parse" | "remote",
  protocolStage?: ProtocolStage,
  correlationId?: string,
)
```

**매개변수**

- **message:** `string` — 오류 메시지.
- **source:** `"local_parse" | "remote"` — 오류가 발생한 위치.
- **protocolStage:** `ProtocolStage` — 프로토콜 단계 (선택 사항).
- **correlationId:** `string` — 관련 요청의 correlationId (선택 사항).
