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

| Field | Type | Description |
|---|---|---|
| `kairoId` | `string` | Internal ID assigned by Kairo |
| `addonId` | `string` | The addon's identifier |
| `version` | `SemVer` | The addon's version |
| `name` | `string` | The addon's display name |
| `description` | `string` | A description of the addon |
| `metadata.authors` | `string[]` | List of authors |
| `metadata.url` | `string \| undefined` | URL for the addon (optional) |
| `metadata.license` | `string \| undefined` | License identifier (optional) |
| `dependencies` | `DependencyMap` | Map of required addon dependencies |
| `optionalDependencies` | `DependencyMap` | Map of optional addon dependencies |
| `tags` | `string[]` | Tags associated with the addon |
