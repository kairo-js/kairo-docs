# AddonActivateAfterEvent

`import { router } from '@kairo-js/router'`

`router.afterEvents.addonActivate` のイベントオブジェクトです。ユーザーが直接インスタンス化することはありません。

アドオンが起動された後に発火します。

## 使用例

```typescript
import { router } from '@kairo-js/router'

router.afterEvents.addonActivate.subscribe((ev) => {
  console.log('アドオンがアクティブになりました')
})
```
