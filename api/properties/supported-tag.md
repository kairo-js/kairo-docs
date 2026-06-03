# SupportedTag

`import { SupportedTag } from '@kairo-js/properties'`

Constants for addon support status tags. Used in the `tags` field of `AddonProperties` to indicate the stability or review status of an addon.

```typescript
enum SupportedTag {
  Official = "official",
  Approved = "approved",
  Stable = "stable",
  Experimental = "experimental",
}
```

## Members

### Official

Value: `"official"`

The addon is officially maintained by the kairo-js project.

---

### Approved

Value: `"approved"`

The addon has been reviewed and approved by the community or a designated authority.

---

### Stable

Value: `"stable"`

The addon is considered stable for production use.

---

### Experimental

Value: `"experimental"`

The addon is experimental and its API may change without notice.
