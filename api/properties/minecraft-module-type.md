# MinecraftModuleType

`import type { MinecraftModuleType } from '@kairo-js/properties'`

A union type of all supported Minecraft module name strings. Derived from the values of the [`MinecraftModule`](/api/properties/minecraft-module) enum.

```typescript
type MinecraftModuleType =
  | "@minecraft/server"
  | "@minecraft/server-ui"
  | "@minecraft/server-gametest"
  | "@minecraft/server-editor"
  | "@minecraft/server-editor-private-bindings"
  | "@minecraft/server-net"
  | "@minecraft/server-admin"
  | "@minecraft/debug-utilities"
  | "@minecraft/diagnostics"
  | "@minecraft/server-graphics"
```

Use the [`MinecraftModule`](/api/properties/minecraft-module) enum constants as a convenience when constructing `MinecraftDependency` objects instead of writing the string literals directly.
