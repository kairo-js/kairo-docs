# KairoRegistry

`import type { KairoRegistry } from '@kairo-js/router'`

可通过 `router.systemInfo.kairoRegistry` 访问的注册信息接口。

```typescript
interface KairoRegistry {
  readonly kairoId: string
  readonly addonId: string
  readonly version: SemVer
  readonly name: string
  readonly description: string
  readonly metadata: {
    readonly authors: string[]
    readonly url?: string
    readonly license?: string
  }
  readonly dependencies: DependencyMap
  readonly optionalDependencies: DependencyMap
  readonly tags: string[]
}
```

## 字段

### addonId

`readonly addonId: string`

插件的标识符。

---

### dependencies

`readonly dependencies: DependencyMap`

必需插件依赖项的映射表。

---

### description

`readonly description: string`

插件的描述信息。

---

### kairoId

`readonly kairoId: string`

由 Kairo 分配的内部 ID。

---

### metadata.authors

`readonly metadata.authors: string[]`

作者列表。

---

### metadata.license

`readonly metadata.license: string | undefined`

许可证标识符（可选）。

---

### metadata.url

`readonly metadata.url: string | undefined`

插件的 URL（可选）。

---

### name

`readonly name: string`

插件的显示名称。

---

### optionalDependencies

`readonly optionalDependencies: DependencyMap`

可选插件依赖项的映射表。

---

### tags

`readonly tags: string[]`

与插件关联的标签。

---

### version

`readonly version:` [`SemVer`](/zh/api/properties/semver)

插件的版本号。

---
