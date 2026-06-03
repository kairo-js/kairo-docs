# AddonProperties

`import type { AddonProperties } from '@kairo-js/properties'`

애드온의 전체 정의를 담는 인터페이스입니다. `router.init()`에 직접 전달되는 핵심 객체입니다.

```typescript
interface AddonProperties {
  id: string
  metadata?: AddonMetadata
  header: AddonHeader
  minecraftDependencies?: MinecraftDependency[]
  dependencies?: AddonDependencies
  optionalDependencies?: AddonDependencies
  peerDependencies?: AddonDependencies
  tags?: SupportedTagType[]
}
```

## 필드

### id

`id: string`

이 애드온의 고유 식별자. 다른 애드온에서 이 애드온을 참조할 때 사용됩니다.

---

### metadata

`metadata?: AddonMetadata`

제작자, URL, 라이선스 등의 선택적 메타데이터. [`AddonMetadata`](/ko/api/properties/addon-metadata)를 참조하세요.

---

### header

`header: AddonHeader`

애드온의 이름, 설명, 버전 정보. [`AddonHeader`](/ko/api/properties/addon-header)를 참조하세요.

---

### minecraftDependencies

`minecraftDependencies?: MinecraftDependency[]`

이 애드온이 사용하는 Minecraft 내장 모듈 의존성 목록 (선택 사항). [`MinecraftDependency`](/ko/api/properties/minecraft-dependency)를 참조하세요.

---

### dependencies

`dependencies?: AddonDependencies`

이 애드온이 반드시 필요로 하는 다른 애드온 의존성 (선택 사항). [`AddonDependencies`](/ko/api/properties/addon-dependencies)를 참조하세요.

---

### optionalDependencies

`optionalDependencies?: AddonDependencies`

있으면 활용하지만 없어도 동작하는 선택적 애드온 의존성 (선택 사항). [`AddonDependencies`](/ko/api/properties/addon-dependencies)를 참조하세요.

---

### peerDependencies

`peerDependencies?: AddonDependencies`

호스트 환경에서 제공될 것으로 기대하는 피어 애드온 의존성 (선택 사항). [`AddonDependencies`](/ko/api/properties/addon-dependencies)를 참조하세요.

---

### tags

`tags?: SupportedTagType[]`

애드온의 지원 상태를 나타내는 태그 목록 (선택 사항). [`SupportedTagType`](/ko/api/properties/supported-tag-type)을 참조하세요.

## 사용 예시

```typescript
import { router } from '@kairo-js/router'
import { MinecraftModule } from '@kairo-js/properties'

router.init({
  id: 'my-addon',
  header: {
    name: 'My Addon',
    description: 'An example addon',
    version: { major: 1, minor: 0, patch: 0 },
    min_engine_version: { major: 1, minor: 21, patch: 0 },
  },
  metadata: {
    authors: ['author-name'],
    license: 'MIT',
  },
  minecraftDependencies: [
    { module_name: MinecraftModule.Server, version: '1.16.0' },
  ],
  tags: ['stable'],
})
```
