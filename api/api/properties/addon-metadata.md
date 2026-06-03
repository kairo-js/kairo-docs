# AddonMetadata

`import type { AddonMetadata } from '@kairo-js/properties'`

Optional metadata for an addon. Provides supplementary information such as authorship and licensing.

```typescript
interface AddonMetadata {
  readonly authors?: string[]
  readonly url?: string
  readonly license?: string
}
```

## Fields

### authors

`readonly authors?: string[]`

An optional list of author names.

---

### url

`readonly url?: string`

An optional URL for the addon's homepage or repository.

---

### license

`readonly license?: string`

An optional SPDX license identifier or license name.
