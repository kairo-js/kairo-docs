# SemVerUtils

`import { SemVerUtils } from '@kairo-js/utils'`

セマンティックバージョンのユーティリティクラスです。すべてのメソッドは `static` で、インスタンス化は不要です。

## メソッド

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

2 つのバージョンを比較します。

**パラメーター**

- **a:** `SemVer`

  比較元のバージョン。
- **b:** `SemVer`

  比較先のバージョン。

**返り値:** `number` — `a < b` なら負の値、`a > b` なら正の値、等しければ `0`。

---

### equals {#equals}

```typescript
static equals(a: SemVer, b: SemVer): boolean
```

2 つのバージョンが等しいかを判定します。

**パラメーター**

- **a:** `SemVer`

  比較元のバージョン。
- **b:** `SemVer`

  比較先のバージョン。

**返り値:** `boolean`

---

### format {#format}

```typescript
static format(version: SemVer): string
```

`SemVer` オブジェクトをバージョン文字列に変換します。

**パラメーター**

- **version:** `SemVer`

  変換するバージョン。

**返り値:** `string` — 例: `"1.2.3"`、`"1.2.3-beta.1"`、`"1.2.3+build.20231001"`。

---

### isPrerelease {#isprerelease}

```typescript
static isPrerelease(version: SemVer): boolean
```

バージョンがプレリリースかどうかを返します。`SemVer.prerelease` フィールドが存在する場合に `true` を返します。

**パラメーター**

- **version:** `SemVer`

  検査するバージョン。

**返り値:** `boolean`

---

### rcompare {#rcompare}

```typescript
static rcompare(a: SemVer, b: SemVer): number
```

`compare` の逆順で比較します。降順ソートに使用します。

**パラメーター**

- **a:** `SemVer`

  比較元のバージョン。
- **b:** `SemVer`

  比較先のバージョン。

**返り値:** `number` — `a > b` なら負の値、`a < b` なら正の値、等しければ `0`。

---

### satisfies {#satisfies}

```typescript
static satisfies(version: SemVer, range: string): boolean
```

バージョンが指定したレンジを満たすかどうかを返します。

**パラメーター**

- **version:** `SemVer`

  検査するバージョン。
- **range:** `string`

  バージョンレンジ文字列。例: `">=1.0.0"`、`"^2.3.0"`、`"*"`。

**返り値:** `boolean`

## 使用例

```typescript
import { SemVerUtils } from '@kairo-js/utils'

const v1 = { major: 1, minor: 2, patch: 3 }
const v2 = { major: 2, minor: 0, patch: 0 }

console.log(SemVerUtils.compare(v1, v2))    // 負の値
console.log(SemVerUtils.equals(v1, v1))     // true
console.log(SemVerUtils.format(v1))         // "1.2.3"
console.log(SemVerUtils.isPrerelease(v1))   // false
console.log(SemVerUtils.satisfies(v1, '>=1.0.0')) // true

const versions = [v2, v1]
versions.sort(SemVerUtils.rcompare) // 降順: [v2, v1]
```
