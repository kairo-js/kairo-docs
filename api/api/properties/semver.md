# SemVer

`import type { SemVer } from '@kairo-js/properties'`

Semantic version object following the [Semantic Versioning 2.0.0](https://semver.org/) specification.

```typescript
interface SemVer {
  readonly major: number
  readonly minor: number
  readonly patch: number
  readonly prerelease?: string
  readonly build?: string
}
```

## Fields

### major

`readonly major: number`

The major version number. Incremented for incompatible API changes.

---

### minor

`readonly minor: number`

The minor version number. Incremented for backward-compatible new functionality.

---

### patch

`readonly patch: number`

The patch version number. Incremented for backward-compatible bug fixes.

---

### prerelease

`readonly prerelease?: string`

An optional pre-release identifier (e.g. `"beta.1"`, `"alpha"`).

---

### build

`readonly build?: string`

An optional build metadata string (e.g. `"20240101"`). Ignored when comparing versions.
