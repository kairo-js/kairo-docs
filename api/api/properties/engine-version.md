# EngineVersion

`import type { EngineVersion } from '@kairo-js/properties'`

Minimum Minecraft engine version required by an addon. Corresponds to the `min_engine_version` field in a behavior pack manifest.

```typescript
interface EngineVersion {
  readonly major: number
  readonly minor: number
  readonly patch: number
}
```

## Fields

### major

`readonly major: number`

The major version component.

---

### minor

`readonly minor: number`

The minor version component.

---

### patch

`readonly patch: number`

The patch version component.
