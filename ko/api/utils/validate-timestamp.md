# validateTimestamp

`import { validateTimestamp } from '@kairo-js/utils'`

수신된 메시지의 타임스탬프가 유효한 범위 안에 있는지 검사합니다. 타임스탬프가 허용 범위를 초과하면 `onTimeout`을, 미래 값이면 `onFuture`를 호출합니다.



```typescript
function validateTimestamp(
  currentTick: number,
  timestamp: number,
  timeout: number,
  onTimeout: () => void,
  onFuture: () => void,
): void
```

**매개변수**

- **currentTick:** `number`

  현재 틱 카운트. 일반적으로 `router.currentTick`을 전달합니다.
- **timestamp:** `number`

  검증할 타임스탬프 값 (틱 단위).
- **timeout:** `number`

  허용되는 최대 경과 틱 수. `currentTick - timestamp > timeout`이면 타임아웃으로 판단합니다.
- **onTimeout:** `() => void`

  타임스탬프가 만료되었을 때 호출되는 콜백.
- **onFuture:** `() => void`

  타임스탬프가 현재 틱보다 미래를 가리킬 때 호출되는 콜백.

**반환값:** `void`

## 사용 예시

```typescript
import { validateTimestamp } from '@kairo-js/utils'
import { router } from '@kairo-js/router'

validateTimestamp(
  router.currentTick,
  message.timestamp,
  20, // 20틱 이내만 허용
  () => { throw new Error('Message timed out') },
  () => { throw new Error('Message timestamp is in the future') },
)
```
