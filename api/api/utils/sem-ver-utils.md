# SemVerUtils

`import { SemVerUtils } from '@kairo-js/utils'`

Semantic version utility class. All methods are static. Provides comparison, formatting, and range-checking operations for [`SemVer`](/api/properties/semver) objects.

## Methods

- [compare](#compare)
- [equals](#equals)
- [format](#format)
- [isPrerelease](#isprerelease)
- [rcompare](#rcompare)
- [satisfies](#satisfies)

### compare {#compare}

```typescript
static compare(a: SemVer, b: SemVer): number
```

Compares two semantic versions.

**Parameters**

- **a:** `SemVer`

  The first version.
- **b:** `SemVer`

  The second version.

**Returns:** `number` — A negative number if `a < b`, a positive number if `a > b`, or `0` if they are equal.

---

### equals {#equals}

```typescript
static equals(a: SemVer, b: SemVer): boolean
```

Checks whether two semantic versions are equal.

**Parameters**

- **a:** `SemVer`

  The first version.
- **b:** `SemVer`

  The second version.

**Returns:** `boolean` — `true` if `a` and `b` represent the same version, otherwise `false`.

---

### format {#format}

```typescript
static format(version: SemVer): string
```

Converts a `SemVer` object to its string representation (e.g. `"1.2.3"` or `"1.2.3-beta.1"`).

**Parameters**

- **version:** `SemVer`

  The version to format.

**Returns:** `string` — The formatted version string.

---

### isPrerelease {#isprerelease}

```typescript
static isPrerelease(version: SemVer): boolean
```

Checks whether a version is a pre-release version.

**Parameters**

- **version:** `SemVer`

  The version to check.

**Returns:** `boolean` — `true` if the version has a non-empty `prerelease` field, otherwise `false`.

---

### rcompare {#rcompare}

```typescript
static rcompare(a: SemVer, b: SemVer): number
```

Compares two semantic versions in reverse order. Equivalent to `compare(b, a)`. Useful for sorting a list of versions in descending order.

**Parameters**

- **a:** `SemVer`

  The first version.
- **b:** `SemVer`

  The second version.

**Returns:** `number` — A positive number if `a < b`, a negative number if `a > b`, or `0` if they are equal.

---

### satisfies {#satisfies}

```typescript
static satisfies(version: SemVer, range: string): boolean
```

Checks whether a version satisfies a semver range string.

**Parameters**

- **version:** `SemVer`

  The version to test.
- **range:** `string`

  A semver range string (e.g. `"^1.0.0"`, `">=2.1.0 <3.0.0"`).

**Returns:** `boolean` — `true` if `version` satisfies the given range, otherwise `false`.
