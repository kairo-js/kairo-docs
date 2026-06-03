# AddonHeader

`import type { AddonHeader } from '@kairo-js/properties'`

Addon header information. Contains the identity and version constraints for an addon, equivalent to the `header` block in a Minecraft behavior pack manifest.

```typescript
interface AddonHeader {
  readonly name: string
  readonly description: string
  readonly version: SemVer
  readonly min_engine_version: EngineVersion
}
```

## Fields

### name

`readonly name: string`

The display name of the addon.

---

### description

`readonly description: string`

A short description of the addon.

---

### version

`readonly version: SemVer`

The version of the addon. See [`SemVer`](/api/properties/semver).

---

### min_engine_version

`readonly min_engine_version: EngineVersion`

The minimum Minecraft engine version required to run this addon. See [`EngineVersion`](/api/properties/engine-version).
