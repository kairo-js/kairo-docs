# MinecraftDependency

`import type { MinecraftDependency } from '@kairo-js/properties'`

Minecraft モジュールへの依存宣言を表すインターフェースです。`AddonProperties.minecraftDependencies` の要素として使用します。

```typescript
interface MinecraftDependency {
  readonly module_name: MinecraftModuleType
  readonly version: string
}
```

## フィールド

### module_name

`readonly module_name: MinecraftModuleType`

依存する Minecraft モジュールの名前。

**型:** [`MinecraftModuleType`](/ja/api/properties/minecraft-module-type)

---

### version

`readonly version: string`

依存するモジュールのバージョン文字列。例: `"1.14.0"`。
