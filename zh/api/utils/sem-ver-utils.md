# SemVerUtils

`import { SemVerUtils } from '@kairo-js/utils'`

语义化版本工具类。所有方法均为静态方法，无需实例化即可使用。提供版本比较、格式化、预发布判断及版本范围匹配等功能。

```typescript
class SemVerUtils {
  static compare(a: SemVer, b: SemVer): number
  static equals(a: SemVer, b: SemVer): boolean
  static format(version: SemVer): string
  static isPrerelease(version: SemVer): boolean
  static rcompare(a: SemVer, b: SemVer): number
  static satisfies(version: SemVer, range: string): boolean
}
```

## 方法

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

比较两个语义化版本的大小，顺序升序排列。

**参数**

- **a:** `SemVer`

  第一个版本对象。
- **b:** `SemVer`

  第二个版本对象。

**返回值：** `number` — 若 `a < b` 返回负数，若 `a === b` 返回 `0`，若 `a > b` 返回正数。

---

### equals {#equals}

```typescript
static equals(a: SemVer, b: SemVer): boolean
```

判断两个语义化版本是否相等。

**参数**

- **a:** `SemVer`

  第一个版本对象。
- **b:** `SemVer`

  第二个版本对象。

**返回值：** `boolean` — 若两个版本完全相等则返回 `true`。

---

### format {#format}

```typescript
static format(version: SemVer): string
```

将 [`SemVer`](/zh/api/properties/semver) 对象格式化为版本字符串。

**参数**

- **version:** `SemVer`

  要格式化的版本对象。

**返回值：** `string` — 格式为 `"MAJOR.MINOR.PATCH"` 的版本字符串，若包含预发布标识符则附加 `"-prerelease"`。

---

### isPrerelease {#isprerelease}

```typescript
static isPrerelease(version: SemVer): boolean
```

判断给定版本是否为预发布版本。

**参数**

- **version:** `SemVer`

  要判断的版本对象。

**返回值：** `boolean` — 若 `version.prerelease` 字段存在且非空则返回 `true`。

---

### rcompare {#rcompare}

```typescript
static rcompare(a: SemVer, b: SemVer): number
```

比较两个语义化版本的大小，顺序降序排列（`compare` 的逆序版本）。

**参数**

- **a:** `SemVer`

  第一个版本对象。
- **b:** `SemVer`

  第二个版本对象。

**返回值：** `number` — 若 `a > b` 返回负数，若 `a === b` 返回 `0`，若 `a < b` 返回正数。

---

### satisfies {#satisfies}

```typescript
static satisfies(version: SemVer, range: string): boolean
```

判断给定版本是否满足指定的版本范围字符串。

**参数**

- **version:** `SemVer`

  要检查的版本对象。
- **range:** `string`

  版本范围字符串，例如 `">=1.0.0"`、`"^2.1.0"`、`"~1.2.3"`。

**返回值：** `boolean` — 若版本满足范围则返回 `true`。

## 用法

```typescript
import { SemVerUtils } from '@kairo-js/utils'

const v1 = { major: 1, minor: 2, patch: 3 }
const v2 = { major: 2, minor: 0, patch: 0 }

SemVerUtils.compare(v1, v2)       // -1 (v1 < v2)
SemVerUtils.equals(v1, v1)        // true
SemVerUtils.format(v1)            // "1.2.3"
SemVerUtils.isPrerelease(v1)      // false
SemVerUtils.rcompare(v1, v2)      // 1 (descending: v1 comes after v2)
SemVerUtils.satisfies(v1, '>=1.0.0') // true
```
