# AddonDeactivateBeforeEvent

`import { router } from '@kairo-js/router'`

`router.beforeEvents.addonDeactivate`의 이벤트 객체입니다. 직접 인스턴스화할 수 없습니다.

애드온이 비활성화되기 전에 발생합니다. 이 핸들러를 사용해 리소스를 해제하고 정리 작업을 수행하세요.

## 사용 예시

```typescript
import { router } from '@kairo-js/router'

router.beforeEvents.addonDeactivate.subscribe((ev) => {
  console.log('Addon is about to deactivate')
  // Cleanup logic here
})
```
