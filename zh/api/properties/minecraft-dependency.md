# MinecraftDependency

`import type { MinecraftDependency } from '@kairo-js/properties'`

Minecraft 模块依赖声明接口。用于在 [`AddonProperties`](/zh/api/properties/addon-properties) 的 `minecraftDependencies` 字段中声明对 Minecraft 原生模块的依赖。

```typescript
interface MinecraftDependency {
  module_name: MinecraftModuleType
  version: string
}
```

## 属性

### module_name

`module_name: MinecraftModuleType`

依赖的 Minecraft 模块名称。使用 [`MinecraftModule`](/zh/api/properties/minecraft-module) 枚举值或 [`MinecraftModuleType`](/zh/api/properties/minecraft-module-type) 字符串字面量类型。

---

### version

`version: string`

所需的模块版本字符串，例如 `"1.15.0"`。

## 用法

```typescript
import { MinecraftModule } from '@kairo-js/properties'

const dep: MinecraftDependency = {
  module_name: MinecraftModule.Server,
  version: '1.15.0',
}
```
