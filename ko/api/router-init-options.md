# RouterInitOptions

`import type { RouterInitOptions } from '@kairo-js/router'`

[`router.init()`](/ko/api/kairo-router#init)에 전달하는 옵션 객체입니다.

```typescript
interface RouterInitOptions {
  standalone?: boolean
}
```

## 필드

### standalone

`standalone?: boolean`

kairo가 설치되지 않은 월드에서의 스탠드얼론 활성화를 제어합니다.

| 값 | 동작 |
|---|---|
| `undefined` (기본값) | 필수 `dependencies`가 `kairo`와 `kairo-database`만 포함된 경우 스탠드얼론 활성화 |
| `true` | 의존성에 관계없이 항상 스탠드얼론 시도 |
| `false` | 스탠드얼론 비활성화 |

**스탠드얼론 활성화**는 kairo가 감지되지 않을 경우 월드 로드 후 약 20틱 후에 발생합니다. 스탠드얼론 모드에서 활성화된 후의 동작:

- `router.save()` / `router.delete()` — 아무 작업 없이 즉시 resolve
- `router.load()` — 항상 `undefined` 반환
- `router.has()` — 항상 `false` 반환
- `router.send()` / `router.emit()` — 수신자 없는 ScriptEvent 전송
- `router.request()` — 타임아웃 후 [`CanceledResult`](/ko/api/canceled-result) 반환

## 사용 예시

```typescript
import { router } from '@kairo-js/router'
import { properties } from './properties'

// dependencies가 kairo뿐이라면 자동으로 스탠드얼론 활성화 (옵션 불필요)
router.init(properties)

// 다른 애드온 의존성이 있어도 강제로 스탠드얼론 활성화
router.init(properties, { standalone: true })

// 스탠드얼론 비활성화
router.init(properties, { standalone: false })
```
