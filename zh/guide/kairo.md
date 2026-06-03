# Kairo

Kairo 是一个宿主行为包，用于在 Minecraft Bedrock Edition 中实现附加包之间的通信。它管理世界中所有附加包的完整生命周期（Discovery · Registration · Activation），并负责 API 调用和事件的路由。

## 系统要求

使用 Kairo 需要同时安装 **kairo-database**。kairo-database 提供了 Kairo 在版本更新后保留会话数据所需的持久化存储。

## 安装

1. 从 [GitHub Releases](https://github.com/kairo-js/kairo/releases) 下载 `kairo.mcpack`
2. 从 [GitHub Releases](https://github.com/kairo-js/kairo-database/releases) 下载 `kairo-database.mcpack`
3. 将两个行为包应用到你的世界

安装后，使用 `@kairo-js/router` 的附加包将在世界加载时自动被发现，并按依赖顺序激活。

## 开发附加包

所有附加包开发均通过 [`@kairo-js/router`](/zh/guide/) 进行。Kairo 本身无需任何配置，安装即可使用。

## 自定义命令

Kairo 注册了 `/kairo:addons` 命令用于运行时管理附加包。需要 **Game Directors** 权限。

### `/kairo:addons list`

列出所有已注册的附加包及其当前状态。

### `/kairo:addons open`

为执行命令的玩家打开 Kairo 管理界面。

### `/kairo:addons enable <addonId> <version>`

启用指定附加包的特定版本。

```
/kairo:addons enable economy-addon 1.2.0
```

### `/kairo:addons disable <addonId>`

禁用一个附加包。`kairo` 和 `kairo-database` 不可被禁用。

```
/kairo:addons disable economy-addon
```

### `/kairo:addons status <addonId>`

显示附加包的详细状态（已安装版本、未激活原因等）。

```
/kairo:addons status economy-addon
```
