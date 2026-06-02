# AddonDeactivateBeforeEvent

`import { router } from '@kairo-js/router'`

`router.beforeEvents.addonDeactivate` 的事件对象。不可直接实例化。

在插件停用前触发。请在此处理器中释放资源并执行清理操作。

## 使用示例

```typescript
import { router } from '@kairo-js/router'

router.beforeEvents.addonDeactivate.subscribe((ev) => {
  console.log('Addon is about to deactivate')
  // Cleanup logic here
})
```
