# MinecraftModule

`import { MinecraftModule } from '@kairo-js/properties'`

Minecraft モジュール名の定数を定義する列挙型です。`MinecraftDependency.module_name` の値として使用できます。

```typescript
enum MinecraftModule {
  Server = "@minecraft/server",
  ServerUi = "@minecraft/server-ui",
  ServerGameTest = "@minecraft/server-gametest",
  ServerEditor = "@minecraft/server-editor",
  ServerEditorPrivateBindings = "@minecraft/server-editor-private-bindings",
  ServerNet = "@minecraft/server-net",
  ServerAdmin = "@minecraft/server-admin",
  DebugUtilities = "@minecraft/debug-utilities",
  Diagnostics = "@minecraft/diagnostics",
  ServerGraphics = "@minecraft/server-graphics",
}
```

## メンバー

### Server

値: `"@minecraft/server"`

Minecraft サーバー API モジュール。

---

### ServerUi

値: `"@minecraft/server-ui"`

Minecraft サーバー UI モジュール。

---

### ServerGameTest

値: `"@minecraft/server-gametest"`

Minecraft GameTest フレームワークモジュール。

---

### ServerEditor

値: `"@minecraft/server-editor"`

Minecraft エディター API モジュール。

---

### ServerEditorPrivateBindings

値: `"@minecraft/server-editor-private-bindings"`

Minecraft エディタープライベートバインディングモジュール。

---

### ServerNet

値: `"@minecraft/server-net"`

Minecraft サーバーネットワークモジュール。

---

### ServerAdmin

値: `"@minecraft/server-admin"`

Minecraft サーバー管理モジュール。

---

### DebugUtilities

値: `"@minecraft/debug-utilities"`

Minecraft デバッグユーティリティモジュール。

---

### Diagnostics

値: `"@minecraft/diagnostics"`

Minecraft 診断モジュール。

---

### ServerGraphics

値: `"@minecraft/server-graphics"`

Minecraft サーバーグラフィクスモジュール。
