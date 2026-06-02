# 快速开始

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

if ('cancelled' in result) {
  console.log(result.reason)
} else {
  console.log(result.balance)
}
```

完整 API 请参阅 [kairo-router API 参考](/zh/api/kairo-router)。
