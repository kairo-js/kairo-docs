# KairoRegistry

`import type { KairoRegistry } from '@kairo-js/router'`

`router.systemInfo.kairoRegistry` から取得できる登録情報インターフェースです。

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

## フィールド

### addonId

`readonly addonId: string`

アドオンの識別子。

---

### dependencies

`readonly dependencies: DependencyMap`

必須依存アドオンのマップ。

---

### description

`readonly description: string`

アドオンの説明。

---

### kairoId

`readonly kairoId: string`

Kairo が割り当てた内部 ID。

---

### metadata.authors

`readonly metadata.authors: string[]`

作者一覧。

---

### metadata.license

`readonly metadata.license: string | undefined`

ライセンス（省略可能）。

---

### metadata.url

`readonly metadata.url: string | undefined`

アドオンの URL（省略可能）。

---

### name

`readonly name: string`

アドオンの表示名。

---

### optionalDependencies

`readonly optionalDependencies: DependencyMap`

任意依存アドオンのマップ。

---

### tags

`readonly tags: string[]`

アドオンのタグ一覧。

---

### version

`readonly version:` [`SemVer`](/ja/api/properties/semver)

アドオンのバージョン。

---
