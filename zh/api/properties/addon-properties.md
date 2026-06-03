# AddonProperties

`import type { AddonProperties } from '@kairo-js/properties'`

附加包完整定义接口。传入 `router.init()` 以注册附加包。包含唯一标识符、头部信息、依赖声明及支持标签等完整配置。

```typescript
interface AddonProperties {
  id: string
  metadata?: AddonMetadata
  header: AddonHeader
  minecraftDependencies?: MinecraftDependency[]
  dependencies?: AddonDependencies
  optionalDependencies?: AddonDependencies
  peerDependencies?: AddonDependencies
  tags?: SupportedTagType[]
}
```

## 属性

### id

`id: string`

附加包的唯一标识符。在路由系统中用于识别和寻址此附加包。

---

### metadata

`metadata?: AddonMetadata`

可选的附加包元数据，包含作者、URL 及许可证等补充信息。参见 [`AddonMetadata`](/zh/api/properties/addon-metadata)。

---

### header

`header: AddonHeader`

附加包的头部信息，包含名称、描述、版本及最低引擎版本。参见 [`AddonHeader`](/zh/api/properties/addon-header)。

---

### minecraftDependencies

`minecraftDependencies?: MinecraftDependency[]`

此附加包依赖的 Minecraft 原生模块列表（可选）。参见 [`MinecraftDependency`](/zh/api/properties/minecraft-dependency)。

---

### dependencies

`dependencies?: AddonDependencies`

必需的插件间依赖映射（可选）。目标附加包必须存在且处于活跃状态。参见 [`AddonDependencies`](/zh/api/properties/addon-dependencies)。

---

### optionalDependencies

`optionalDependencies?: AddonDependencies`

可选的插件间依赖映射（可选）。目标附加包不存在时不影响本附加包的激活。参见 [`AddonDependencies`](/zh/api/properties/addon-dependencies)。

---

### peerDependencies

`peerDependencies?: AddonDependencies`

对等依赖映射（可选）。声明与其他附加包的兼容性要求，但不强制要求其存在。参见 [`AddonDependencies`](/zh/api/properties/addon-dependencies)。

---

### tags

`tags?: SupportedTagType[]`

附加包的支持状态标签列表（可选）。参见 [`SupportedTagType`](/zh/api/properties/supported-tag-type)。

## 用法

```typescript
import { router } from '@kairo-js/router'
import { MinecraftModule, SupportedTag } from '@kairo-js/properties'

router.init({
  id: 'my-addon',
  header: {
    name: 'My Addon',
    description: 'An example addon',
    version: { major: 1, minor: 0, patch: 0 },
    min_engine_version: { major: 1, minor: 21, patch: 0 },
  },
  minecraftDependencies: [
    { module_name: MinecraftModule.Server, version: '1.15.0' },
  ],
  dependencies: {
    'economy-addon': '>=1.0.0',
  },
  tags: [SupportedTag.Stable],
})
```
