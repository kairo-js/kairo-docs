# SemVerUtils

`import { SemVerUtils } from '@kairo-js/utils'`

시맨틱 버전 비교 및 처리를 위한 정적 유틸리티 클래스입니다. 모든 메서드는 `static`이므로 인스턴스를 생성하지 않고 사용합니다.

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

## 메서드

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

두 `SemVer`를 오름차순으로 비교합니다.

**매개변수**

- **a:** `SemVer`

  비교할 첫 번째 버전.
- **b:** `SemVer`

  비교할 두 번째 버전.

**반환값:** `number` — `a < b`이면 음수, `a === b`이면 `0`, `a > b`이면 양수.

---

### equals {#equals}

```typescript
static equals(a: SemVer, b: SemVer): boolean
```

두 `SemVer`가 동일한지 비교합니다.

**매개변수**

- **a:** `SemVer`

  비교할 첫 번째 버전.
- **b:** `SemVer`

  비교할 두 번째 버전.

**반환값:** `boolean` — 두 버전이 동일하면 `true`.

---

### format {#format}

```typescript
static format(version: SemVer): string
```

`SemVer` 객체를 `"major.minor.patch"` 형식의 문자열로 변환합니다. `prerelease`가 있으면 `"major.minor.patch-prerelease"`, `build`가 있으면 `"+build"`가 추가됩니다.

**매개변수**

- **version:** `SemVer`

  문자열로 변환할 버전 객체.

**반환값:** `string` — 포맷된 버전 문자열.

---

### isPrerelease {#isprerelease}

```typescript
static isPrerelease(version: SemVer): boolean
```

버전이 프리릴리즈 버전인지 확인합니다.

**매개변수**

- **version:** `SemVer`

  확인할 버전 객체.

**반환값:** `boolean` — `prerelease` 필드가 존재하면 `true`.

---

### rcompare {#rcompare}

```typescript
static rcompare(a: SemVer, b: SemVer): number
```

두 `SemVer`를 내림차순으로 비교합니다. `compare`의 역순입니다. 배열을 최신 버전 순으로 정렬할 때 유용합니다.

**매개변수**

- **a:** `SemVer`

  비교할 첫 번째 버전.
- **b:** `SemVer`

  비교할 두 번째 버전.

**반환값:** `number` — `a > b`이면 음수, `a === b`이면 `0`, `a < b`이면 양수.

---

### satisfies {#satisfies}

```typescript
static satisfies(version: SemVer, range: string): boolean
```

버전이 주어진 범위 문자열을 만족하는지 확인합니다.

**매개변수**

- **version:** `SemVer`

  확인할 버전 객체.
- **range:** `string`

  semver 범위 문자열 (예: `"^1.0.0"`, `">=2.0.0 <3.0.0"`).

**반환값:** `boolean` — 버전이 범위를 만족하면 `true`.

## 사용 예시

```typescript
import { SemVerUtils } from '@kairo-js/utils'

const v1 = { major: 1, minor: 2, patch: 0 }
const v2 = { major: 1, minor: 3, patch: 0 }

SemVerUtils.compare(v1, v2)       // -1
SemVerUtils.equals(v1, v2)        // false
SemVerUtils.format(v1)            // "1.2.0"
SemVerUtils.isPrerelease(v1)      // false
SemVerUtils.satisfies(v1, '^1.0.0') // true

const versions = [v2, v1]
versions.sort(SemVerUtils.rcompare) // [v2, v1] (내림차순)
```
