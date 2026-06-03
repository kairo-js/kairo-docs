# AddonHeader

`import type { AddonHeader } from '@kairo-js/properties'`

애드온의 기본 헤더 정보를 정의하는 인터페이스입니다. `AddonProperties.header`에 사용됩니다.

```typescript
interface AddonHeader {
  name: string
  description: string
  version: SemVer
  min_engine_version: EngineVersion
}
```

## 필드

### name

`name: string`

애드온의 표시 이름.

---

### description

`description: string`

애드온에 대한 설명.

---

### version

`version: SemVer`

애드온의 현재 버전. [`SemVer`](/ko/api/properties/semver) 형식을 따릅니다.

---

### min_engine_version

`min_engine_version: EngineVersion`

이 애드온이 요구하는 최소 Minecraft 엔진 버전. [`EngineVersion`](/ko/api/properties/engine-version) 형식을 따릅니다.
