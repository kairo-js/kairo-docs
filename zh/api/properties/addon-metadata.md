# AddonMetadata

`import type { AddonMetadata } from '@kairo-js/properties'`

附加包可选元数据接口。提供附加包的补充信息，例如作者、URL 及许可证。所有字段均为可选。

```typescript
interface AddonMetadata {
  authors?: string[]
  url?: string
  license?: string
}
```

## 属性

### authors

`authors?: string[]`

附加包的作者列表（可选）。

---

### url

`url?: string`

附加包的相关链接，例如项目主页或仓库地址（可选）。

---

### license

`license?: string`

附加包所使用的许可证标识符，例如 `"MIT"`、`"Apache-2.0"`（可选）。
