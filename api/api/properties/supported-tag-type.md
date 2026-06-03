# SupportedTagType

`import type { SupportedTagType } from '@kairo-js/properties'`

A union type of all supported addon status tag strings. Derived from the values of the [`SupportedTag`](/api/properties/supported-tag) enum.

```typescript
type SupportedTagType = "official" | "approved" | "stable" | "experimental"
```

Use the [`SupportedTag`](/api/properties/supported-tag) enum constants as a convenience instead of writing the string literals directly.
