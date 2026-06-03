# 快速开始

## 支持的 Minecraft Script API 版本

Kairo 需要 Minecraft 的**稳定版** Script API：

- `@minecraft/server` **2.0.0 及以上**
- `@minecraft/server-ui` **2.0.0 及以上**

2.0.0 之前的版本使用不同的初始化模型（例如使用 `WorldInitialize` 而非 `WorldLoad`），不受支持。

## 安装 kairo

将 **kairo** 行为包添加到你的世界中。它充当所有插件之间的通信中枢。

> 从 [GitHub Releases](https://github.com/kairo-js/kairo/releases) 下载 kairo。

## 使用 kairo-router

将 `kairo-router` 添加到你的插件中，即可开始与其他插件进行通信。

### 安装

```bash
pnpm add @kairo-js/router
```

### 在启动事件中声明 API

所有 API 注册和钩子声明必须在 `router.beforeEvents.startup` 内完成。

```typescript
import { router } from '@kairo-js/router'

router.beforeEvents.startup.subscribe((ev) => {
  // 注册本插件提供的 API
  ev.api.register<{ playerId: string }, { balance: number }>(
    'economy/getBalance',
    async ({ playerId }) => ({ balance: 100 }),
  )
})
```

### 调用其他插件的 API

```typescript
// 发送后不等待结果
router.send('economy-addon', 'onTransaction', { amount: 50 })

// 等待返回结果
const result = await router.request<{ balance: number }>(
  'economy-addon',
  'getBalance',
  { playerId: '...' },
)

if ('canceled' in result) {
  console.log(result.reason)
} else {
  console.log(result.balance)
}
```

完整 API 请参阅 [kairo-router API 参考](/zh/api/kairo-router)。

## 必须依赖项

`properties.ts` 中必须将 `"kairo"` 声明为必须依赖项。如果缺失，`router.init()` 将立即抛出错误。

```typescript
export const properties: AddonProperties = {
  id: 'my-addon',
  dependencies: {
    kairo: '^1.0.0',
    // optional: 'kairo-database': '^2.0.0' — router.save/load/delete/has 所需
  },
}
```

## 独立模式

向 `router.init()` 传入 `{ standalone: true }` 可启用独立模式。未安装 kairo 时，若必须依赖项仅包含 `kairo` 和 `kairo-database`，插件将自动激活。适用于希望选择性集成 kairo 生命周期管理的独立附加包。

详情请参见 [`RouterInitOptions`](/zh/api/router-init-options)。

## 初始化时机

世界加载后，kairo 会执行 Discovery · Registration · Activation 初始化流程，之后才触发 `addonActivate`。根据已安装的附加包数量，**大约有 30〜50 tick 的延迟**。

这个延迟是有意为之的。Minecraft Script API 2.0.0+ 规定在 WorldLoad 完成前调用 world 相关方法会报错，`addonActivate` 承担了同样的安全信号作用。

```typescript
router.afterEvents.addonActivate.subscribe(() => {
  // 从这里开始可以安全地调用 world 方法和其他附加包的 API
})
```

::: tip
如果你熟悉原版 Script API 开发，可以将 `addonActivate` 理解为 `WorldLoad` 的替代。额外的 tick 是 kairo 握手的成本，并非无效等待。
:::
