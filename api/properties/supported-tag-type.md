# SupportedTagType

`import type { SupportedTagType } from '@kairo-js/properties'`

アドオンのサポート状態を示すタグの union 型です。`AddonProperties.tags` フィールドの要素型として使用します。[`SupportedTag`](/api/properties/supported-tag) 列挙型の各メンバー値に対応します。

```typescript
type SupportedTagType = "official" | "approved" | "stable" | "experimental"
```
