# SupportedTagType

`import type { SupportedTagType } from '@kairo-js/properties'`

附加包支持状态标签的联合类型。与 [`SupportedTag`](/zh/api/properties/supported-tag) 枚举的字符串值对应，用于 [`AddonProperties`](/zh/api/properties/addon-properties) 的 `tags` 字段。

```typescript
type SupportedTagType =
  | 'official'
  | 'approved'
  | 'stable'
  | 'experimental'
```

## 用法

可直接使用字符串字面量，或通过 [`SupportedTag`](/zh/api/properties/supported-tag) 枚举引用：

```typescript
import { SupportedTag } from '@kairo-js/properties'
import type { SupportedTagType } from '@kairo-js/properties'

// Using enum (recommended)
const tag: SupportedTagType = SupportedTag.Stable

// Using string literal
const tag2: SupportedTagType = 'stable'
```
