# ProtocolError

`import { ProtocolError } from '@kairo-js/router'`

**extends** `Error`

Thrown on ScriptEvent message parse failure or schema mismatch.

Not directly instantiable — received as a thrown exception.

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

