# AddonHeader

`import type { AddonHeader } from '@kairo-js/properties'`

アドオンのヘッダー情報を定義するインターフェースです。`AddonProperties.header` フィールドに設定します。

```typescript
interface AddonHeader {
  readonly name: string
  readonly description: string
  readonly version: SemVer
  readonly min_engine_version: EngineVersion
}
```

## フィールド

### name

`readonly name: string`

アドオンの表示名。

---

### description

`readonly description: string`

アドオンの説明文。

---

### version

`readonly version: SemVer`

アドオンのバージョン。

**型:** [`SemVer`](/api/properties/semver)

---

### min_engine_version

`readonly min_engine_version: EngineVersion`

このアドオンが動作する Minecraft エンジンの最低バージョン。

**型:** [`EngineVersion`](/api/properties/engine-version)
