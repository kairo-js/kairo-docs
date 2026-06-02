# AddonActivateAfterEvent

`import { router } from '@kairo-js/router'`

`router.afterEvents.addonActivate`의 이벤트 객체입니다. 직접 인스턴스화할 수 없습니다.

애드온이 활성화된 후에 발생합니다.

## 사용 예시

```typescript
import { router } from '@kairo-js/router'

router.afterEvents.addonActivate.subscribe((ev) => {
  console.log('Addon is now active')
})
```
