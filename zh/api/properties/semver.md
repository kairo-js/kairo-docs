# SemVer

`import type { SemVer } from '@kairo-js/properties'`

语义化版本对象接口。遵循 [语义化版本规范（Semantic Versioning）](https://semver.org/)，用于 [`AddonHeader`](/zh/api/properties/addon-header) 的 `version` 字段。

```typescript
interface SemVer {
  major: number
  minor: number
  patch: number
  prerelease?: string
  build?: string
}
```

## 属性

### major

`major: number`

主版本号。进行不兼容的 API 变更时递增。

---

### minor

`minor: number`

次版本号。以向后兼容的方式添加新功能时递增。

---

### patch

`patch: number`

补丁版本号。进行向后兼容的问题修复时递增。

---

### prerelease

`prerelease?: string`

预发布标识符（可选）。例如 `"alpha.1"`、`"beta.0"`。

---

### build

`build?: string`

构建元数据（可选）。例如 `"20231015"`。

## 用法

```typescript
const version: SemVer = {
  major: 1,
  minor: 2,
  patch: 1,
}

const prerelease: SemVer = {
  major: 2,
  minor: 0,
  patch: 0,
  prerelease: 'beta.1',
}
```
