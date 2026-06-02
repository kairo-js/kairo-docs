# AddonActivateAfterEvent

`import { router } from '@kairo-js/router'`

`router.afterEvents.addonActivate` 的事件对象。不可直接实例化。

在插件激活后触发。

## 使用示例

```typescript
import { router } from '@kairo-js/router'

router.afterEvents.addonActivate.subscribe((ev) => {
  console.log('Addon is now active')
})
```
