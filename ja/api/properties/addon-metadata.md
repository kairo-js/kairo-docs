# AddonMetadata

`import type { AddonMetadata } from '@kairo-js/properties'`

アドオンの任意メタデータを定義するインターフェースです。`AddonProperties.metadata` フィールドに設定します。すべてのフィールドは省略可能です。

```typescript
interface AddonMetadata {
  readonly authors?: string[]
  readonly url?: string
  readonly license?: string
}
```

## フィールド

### authors

`readonly authors?: string[]`

アドオンの作者一覧（省略可能）。

---

### url

`readonly url?: string`

アドオンのリポジトリや公式ページの URL（省略可能）。

---

### license

`readonly license?: string`

アドオンのライセンス名（省略可能）。例: `"MIT"`、`"Apache-2.0"`。
