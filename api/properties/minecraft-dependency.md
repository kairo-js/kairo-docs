# MinecraftDependency

`import type { MinecraftDependency } from '@kairo-js/properties'`

Dependency declaration for a Minecraft scripting module. Used in the `minecraftDependencies` field of `AddonProperties`.

```typescript
interface MinecraftDependency {
  readonly module_name: MinecraftModuleType
  readonly version: string
}
```

## Fields

### module_name

`readonly module_name: MinecraftModuleType`

The name of the Minecraft module to depend on. Must be one of the values defined in [`MinecraftModuleType`](/api/properties/minecraft-module-type).

---

### version

`readonly version: string`

The required version of the Minecraft module, expressed as a version string (e.g. `"1.14.0"`).
