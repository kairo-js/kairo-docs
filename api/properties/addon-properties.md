# AddonProperties

`import type { AddonProperties } from '@kairo-js/properties'`

Full addon definition object. Pass an instance of this interface to `router.init()` to register your addon with the kairo-js router.

```typescript
interface AddonProperties {
  readonly id: string
  readonly metadata?: AddonMetadata
  readonly header: AddonHeader
  readonly minecraftDependencies?: MinecraftDependency[]
  readonly dependencies?: AddonDependencies
  readonly optionalDependencies?: AddonDependencies
  readonly peerDependencies?: AddonDependencies
  readonly tags?: SupportedTagType[]
}
```

## Fields

### id

`readonly id: string`

A unique identifier for this addon. Used as the routing key when other addons call `router.request()` or `router.send()`.

---

### metadata

`readonly metadata?: AddonMetadata`

Optional supplementary metadata such as authors, URL, and license. See [`AddonMetadata`](/api/properties/addon-metadata).

---

### header

`readonly header: AddonHeader`

Required header information including name, description, version, and minimum engine version. See [`AddonHeader`](/api/properties/addon-header).

---

### minecraftDependencies

`readonly minecraftDependencies?: MinecraftDependency[]`

Optional list of Minecraft module dependencies this addon requires. See [`MinecraftDependency`](/api/properties/minecraft-dependency).

---

### dependencies

`readonly dependencies?: AddonDependencies`

Required kairo-js addon dependencies. The router will not activate this addon until all listed addons are active. See [`AddonDependencies`](/api/properties/addon-dependencies).

---

### optionalDependencies

`readonly optionalDependencies?: AddonDependencies`

Optional kairo-js addon dependencies. The router activates this addon regardless of whether optional dependencies are present. See [`AddonDependencies`](/api/properties/addon-dependencies).

---

### peerDependencies

`readonly peerDependencies?: AddonDependencies`

Peer addon dependencies. Declares compatibility expectations without blocking activation. See [`AddonDependencies`](/api/properties/addon-dependencies).

---

### tags

`readonly tags?: SupportedTagType[]`

Optional list of support status tags. See [`SupportedTagType`](/api/properties/supported-tag-type).
