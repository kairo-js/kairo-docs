# EngineVersion

`import type { EngineVersion } from '@kairo-js/properties'`

Minecraft エンジンの最低バージョンを表すインターフェースです。`AddonHeader.min_engine_version` フィールドに設定します。

```typescript
interface EngineVersion {
  readonly major: number
  readonly minor: number
  readonly patch: number
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
