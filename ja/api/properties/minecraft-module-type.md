# MinecraftModuleType

`import type { MinecraftModuleType } from '@kairo-js/properties'`

サポート対象の Minecraft モジュール名の union 型です。`MinecraftDependency.module_name` フィールドの型として使用します。[`MinecraftModule`](/ja/api/properties/minecraft-module) 列挙型の各メンバー値に対応します。

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
