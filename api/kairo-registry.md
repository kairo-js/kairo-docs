# KairoRegistry

`import type { KairoRegistry } from '@kairo-js/router'`

The registration info interface accessible via `router.systemInfo.kairoRegistry`.

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

## Fields

### addonId

`readonly addonId: string`

The addon's identifier.

---

### dependencies

`readonly dependencies: DependencyMap`

Map of required addon dependencies.

---

### description

`readonly description: string`

A description of the addon.

---

### kairoId

`readonly kairoId: string`

Internal ID assigned by Kairo.

---

### metadata.authors

`readonly metadata.authors: string[]`

List of authors.

---

### metadata.license

`readonly metadata.license: string | undefined`

License identifier (optional).

---

### metadata.url

`readonly metadata.url: string | undefined`

URL for the addon (optional).

---

### name

`readonly name: string`

The addon's display name.

---

### optionalDependencies

`readonly optionalDependencies: DependencyMap`

Map of optional addon dependencies.

---

### tags

`readonly tags: string[]`

Tags associated with the addon.

---

### version

`readonly version: SemVer`

The addon's version.

---
