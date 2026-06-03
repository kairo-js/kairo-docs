# KairoStartupBeforeEvent

`import { router } from '@kairo-js/router'`

`router.beforeEvents.startup` 的事件对象。不可直接实例化。

在 Minecraft 的 `worldLoad` 之前触发。注册 API、声明 hook、注册自定义命令以及订阅插件事件，均只能在此事件处理器中进行。

## 属性

### api

`readonly api:` [`ApiRegistration`](/zh/api/kairo-api-registry)

注册 API 和 hook。

---

### customCommandRegistry

`readonly customCommandRegistry:` [`KairoCustomCommandRegistry`](/zh/api/kairo-custom-command-registry)

注册自定义命令。

---

### events

`readonly events:` [`AddonEventRegistration`](/zh/api/addon-event-registry)

订阅插件事件。

---

## 使用示例

```typescript
import { router } from '@kairo-js/router'

router.beforeEvents.startup.subscribe((ev) => {
  // Register an API
  ev.api.register<{ playerId: string }, { balance: number }>(
    'economy/getBalance',
    async ({ playerId }) => {
      return { balance: getBalance(playerId) }
    },
  )

  // Subscribe to another addon's event
  ev.events.on('other-addon', 'someEvent', (payload) => {
    console.log('Event received:', payload)
  })

  // Register a custom command
  ev.customCommandRegistry.registerCommand(
    { name: 'mycommand', description: 'My command' },
    (origin) => {
      return { success: true }
    },
  )
})
```
