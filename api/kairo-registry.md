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

| フィールド | 型 | 説明 |
|---|---|---|
| `kairoId` | `string` | Kairo が割り当てた内部 ID |
| `addonId` | `string` | アドオンの識別子 |
| `version` | `SemVer` | アドオンのバージョン |
| `name` | `string` | アドオンの表示名 |
| `description` | `string` | アドオンの説明 |
| `metadata.authors` | `string[]` | 作者一覧 |
| `metadata.url` | `string \| undefined` | アドオンの URL（省略可能） |
| `metadata.license` | `string \| undefined` | ライセンス（省略可能） |
| `dependencies` | `DependencyMap` | 必須依存アドオンのマップ |
| `optionalDependencies` | `DependencyMap` | 任意依存アドオンのマップ |
| `tags` | `string[]` | アドオンのタグ一覧 |
