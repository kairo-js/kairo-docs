# SupportedTagType

`import type { SupportedTagType } from '@kairo-js/properties'`

애드온의 지원 상태 태그를 나타내는 문자열 유니온 타입입니다. `AddonProperties.tags`의 요소 타입으로 사용됩니다.

```typescript
type SupportedTagType = 'official' | 'approved' | 'stable' | 'experimental'
```

각 값의 의미는 [`SupportedTag`](/ko/api/properties/supported-tag) 열거형을 참조하세요.

## 사용 예시

```typescript
const tags: SupportedTagType[] = ['stable', 'approved']
```
