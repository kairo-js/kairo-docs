# MinecraftModuleType

`import type { MinecraftModuleType } from '@kairo-js/properties'`

支持的 Minecraft 模块名称的联合类型。与 [`MinecraftModule`](/zh/api/properties/minecraft-module) 枚举的字符串值对应，用于 [`MinecraftDependency`](/zh/api/properties/minecraft-dependency) 的 `module_name` 字段。

```typescript
type MinecraftModuleType =
  | '@minecraft/server'
  | '@minecraft/server-admin'
  | '@minecraft/server-editor'
  | '@minecraft/server-gametest'
  | '@minecraft/server-net'
  | '@minecraft/server-ui'
  | '@minecraft/vanilla-data'
```

## 用法

可直接使用字符串字面量，或通过 [`MinecraftModule`](/zh/api/properties/minecraft-module) 枚举引用：

```typescript
import { MinecraftModule } from '@kairo-js/properties'
import type { MinecraftModuleType } from '@kairo-js/properties'

// Using enum (recommended)
const name: MinecraftModuleType = MinecraftModule.Server

// Using string literal
const name2: MinecraftModuleType = '@minecraft/server'
```
