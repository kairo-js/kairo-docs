# ProtocolError

`import { ProtocolError } from '@kairo-js/router'`

**extends** `Error`

Thrown on ScriptEvent message parse failure or schema mismatch.

## Properties

### source

`readonly source: "local_parse" | "remote"`

Where the error occurred. `"local_parse"` means a parse failure in this addon; `"remote"` means an error reported by the sending addon.

---

### protocolStage

`readonly protocolStage: ProtocolStage | undefined`

The protocol stage at which the error occurred.

---

### correlationId

`readonly correlationId: string | undefined`

The correlationId of the associated `request()` call.

---

## Constructor

```typescript
constructor(
  message: string,
  source: "local_parse" | "remote",
  protocolStage?: ProtocolStage,
  correlationId?: string,
)
```

**Parameters**

- **message:** `string`

  Error message.
- **source:** `"local_parse" | "remote"`

  Where the error occurred.
- **protocolStage:** `ProtocolStage`

  Protocol stage (optional).
- **correlationId:** `string`

  The correlationId of the related request (optional).
