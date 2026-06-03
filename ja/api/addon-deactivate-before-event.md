# AddonDeactivateBeforeEvent

`import { router } from '@kairo-js/router'`

`router.beforeEvents.addonDeactivate` のイベントオブジェクトです。ユーザーが直接インスタンス化することはありません。

アドオンが停止される前に発火します。リソースの解放やクリーンアップ処理をここで行います。

## 使用例

```typescript
import { router } from '@kairo-js/router'

router.beforeEvents.addonDeactivate.subscribe((ev) => {
  console.log('アドオンが停止されます')
  // クリーンアップ処理
})
```
