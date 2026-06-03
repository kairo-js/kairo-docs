# MinecraftModule

`import { MinecraftModule } from '@kairo-js/properties'`

Minecraft 模块名称常量枚举。在声明 [`MinecraftDependency`](/zh/api/properties/minecraft-dependency) 时用于指定依赖的模块名称。

```typescript
enum MinecraftModule {
  Server = '@minecraft/server',
  ServerAdmin = '@minecraft/server-admin',
  ServerEditor = '@minecraft/server-editor',
  ServerGametest = '@minecraft/server-gametest',
  ServerNet = '@minecraft/server-net',
  ServerUI = '@minecraft/server-ui',
  VanillaData = '@minecraft/vanilla-data',
}
```

## 成员

### Server

**值：** `"@minecraft/server"`

核心服务端 API 模块。

---

### ServerAdmin

**值：** `"@minecraft/server-admin"`

服务端管理 API 模块。

---

### ServerEditor

**值：** `"@minecraft/server-editor"`

编辑器 API 模块。

---

### ServerGametest

**值：** `"@minecraft/server-gametest"`

游戏测试框架模块。

---

### ServerNet

**值：** `"@minecraft/server-net"`

服务端网络 API 模块。

---

### ServerUI

**值：** `"@minecraft/server-ui"`

服务端 UI API 模块。

---

### VanillaData

**值：** `"@minecraft/vanilla-data"`

原版数据模块。
