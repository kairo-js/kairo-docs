# AddonHeader

`import type { AddonHeader } from '@kairo-js/properties'`

附加包头部信息接口。包含附加包的基本标识与版本信息，对应 Minecraft 基岩版 `manifest.json` 的 `header` 字段。

```typescript
interface AddonHeader {
  name: string
  description: string
  version: SemVer
  min_engine_version: EngineVersion
}
```

## 属性

### name

`name: string`

附加包的名称。

---

### description

`description: string`

附加包的描述信息。

---

### version

`version: SemVer`

附加包的版本号。使用 [`SemVer`](/zh/api/properties/semver) 对象表示。

---

### min_engine_version

`min_engine_version: EngineVersion`

该附加包所需的最低 Minecraft 引擎版本。使用 [`EngineVersion`](/zh/api/properties/engine-version) 对象表示。
