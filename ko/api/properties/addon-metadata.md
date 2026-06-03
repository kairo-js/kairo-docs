# AddonMetadata

`import type { AddonMetadata } from '@kairo-js/properties'`

애드온의 선택적 메타데이터를 정의하는 인터페이스입니다. `AddonProperties.metadata`에 사용됩니다.

```typescript
interface AddonMetadata {
  authors?: string[]
  url?: string
  license?: string
}
```

## 필드

### authors

`authors?: string[]`

애드온 제작자 목록 (선택 사항).

---

### url

`url?: string`

애드온의 홈페이지 또는 저장소 URL (선택 사항).

---

### license

`license?: string`

애드온에 적용되는 라이선스 식별자 (선택 사항). SPDX 식별자 형식을 권장합니다 (예: `"MIT"`, `"Apache-2.0"`).
