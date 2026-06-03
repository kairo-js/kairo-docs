# SemVer

`import type { SemVer } from '@kairo-js/properties'`

セマンティックバージョンを表すインターフェースです。`AddonHeader.version` フィールドに設定します。

```typescript
interface SemVer {
  readonly major: number
  readonly minor: number
  readonly patch: number
  readonly prerelease?: string
  readonly build?: string
}
```

## フィールド

### major

`readonly major: number`

メジャーバージョン番号。

---

### minor

`readonly minor: number`

マイナーバージョン番号。

---

### patch

`readonly patch: number`

パッチバージョン番号。

---

### prerelease

`readonly prerelease?: string`

プレリリース識別子（省略可能）。例: `"alpha.1"`、`"beta.2"`。

---

### build

`readonly build?: string`

ビルドメタデータ（省略可能）。例: `"20231001"`。
