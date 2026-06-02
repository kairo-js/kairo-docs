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

### kairoId

`readonly kairoId: string`

Kairo が割り当てた内部 ID。

---

### addonId

`readonly addonId: string`

アドオンの識別子。

---

### version

`readonly version: SemVer`

アドオンのバージョン。

---

### name

`readonly name: string`

アドオンの表示名。

---

### description

`readonly description: string`

アドオンの説明。

---

### metadata.authors

`readonly metadata.authors: string[]`

作者一覧。

---

### metadata.url

`readonly metadata.url: string | undefined`

アドオンの URL（省略可能）。

---

### metadata.license

`readonly metadata.license: string | undefined`

ライセンス（省略可能）。

---

### dependencies

`readonly dependencies: DependencyMap`

必須依存アドオンのマップ。

---

### optionalDependencies

`readonly optionalDependencies: DependencyMap`

任意依存アドオンのマップ。

---

### tags

`readonly tags: string[]`

アドオンのタグ一覧。

---
