# SupportedTag

`import { SupportedTag } from '@kairo-js/properties'`

附加包支持状态标签常量枚举。用于在 [`AddonProperties`](/zh/api/properties/addon-properties) 的 `tags` 字段中声明附加包的兼容性状态。

```typescript
enum SupportedTag {
  Official = 'official',
  Approved = 'approved',
  Stable = 'stable',
  Experimental = 'experimental',
}
```

## 成员

### Official

**値：** `"official"`

由官方发布或认证的附加包。

---

### Approved

**値：** `"approved"`

经过审核批准的附加包。

---

### Stable

**値：** `"stable"`

功能稳定的附加包。

---

### Experimental

**値：** `"experimental"`

实验性附加包，API 可能发生变化。
