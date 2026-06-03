# AddonProperties

`import type { AddonProperties } from '@kairo-js/properties'`

アドオン全体の定義を表すインターフェースです。`router.init()` に渡すオブジェクトの型として使用します。

```typescript
interface AddonProperties {
  readonly id: string
  readonly metadata?: AddonMetadata
  readonly header: AddonHeader
  readonly minecraftDependencies?: MinecraftDependency[]
  readonly dependencies?: AddonDependencies
  readonly optionalDependencies?: AddonDependencies
  readonly peerDependencies?: AddonDependencies
  readonly tags?: SupportedTagType[]
}
```

## フィールド

### id

`readonly id: string`

アドオンの一意な識別子。他のアドオンから参照する際に使用します。

---

### metadata

`readonly metadata?: AddonMetadata`

アドオンのメタデータ（省略可能）。作者情報・URL・ライセンスなどを含みます。

**型:** [`AddonMetadata`](/ja/api/properties/addon-metadata)

---

### header

`readonly header: AddonHeader`

アドオンのヘッダー情報。名前・説明・バージョン・最低エンジンバージョンを含みます。

**型:** [`AddonHeader`](/ja/api/properties/addon-header)

---

### minecraftDependencies

`readonly minecraftDependencies?: MinecraftDependency[]`

このアドオンが依存する Minecraft モジュールの一覧（省略可能）。

**型:** [`MinecraftDependency[]`](/ja/api/properties/minecraft-dependency)

---

### dependencies

`readonly dependencies?: AddonDependencies`

このアドオンが必須とする他アドオンへの依存（省略可能）。指定したアドオンが存在しない場合は起動しません。

**型:** [`AddonDependencies`](/ja/api/properties/addon-dependencies)

---

### optionalDependencies

`readonly optionalDependencies?: AddonDependencies`

任意の依存アドオン（省略可能）。指定したアドオンが存在しなくても起動します。

**型:** [`AddonDependencies`](/ja/api/properties/addon-dependencies)

---

### peerDependencies

`readonly peerDependencies?: AddonDependencies`

ピア依存アドオン（省略可能）。依存するアドオンのバージョン互換性を宣言します。

**型:** [`AddonDependencies`](/ja/api/properties/addon-dependencies)

---

### tags

`readonly tags?: SupportedTagType[]`

アドオンのサポート状態を示すタグの一覧（省略可能）。

**型:** [`SupportedTagType[]`](/ja/api/properties/supported-tag-type)
