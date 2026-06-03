# EngineVersion

`import type { EngineVersion } from '@kairo-js/properties'`

最低 Minecraft 引擎版本接口。用于 [`AddonHeader`](/zh/api/properties/addon-header) 的 `min_engine_version` 字段，声明附加包所需的最低 Minecraft 版本。

```typescript
interface EngineVersion {
  major: number
  minor: number
  patch: number
}
```

## 属性

### major

`major: number`

主版本号。

---

### minor

`minor: number`

次版本号。

---

### patch

`patch: number`

补丁版本号。

## 用法

```typescript
const engineVersion: EngineVersion = {
  major: 1,
  minor: 21,
  patch: 0,
}
```
