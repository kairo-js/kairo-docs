# KairoRegistry

`import type { KairoRegistry } from '@kairo-js/router'`

`router.systemInfo.kairoRegistry`를 통해 접근할 수 있는 등록 정보 인터페이스입니다.

```typescript
interface KairoRegistry {
  readonly kairoId: string
  readonly addonId: string
  readonly version: SemVer
  readonly name: string
  readonly description: string
  readonly metadata: {
    readonly authors: string[]
    readonly url?: string
    readonly license?: string
  }
  readonly dependencies: DependencyMap
  readonly optionalDependencies: DependencyMap
  readonly tags: string[]
}
```

## 필드

### addonId

`readonly addonId: string`

애드온의 식별자입니다.

---

### dependencies

`readonly dependencies: DependencyMap`

필수 애드온 의존성 맵입니다.

---

### description

`readonly description: string`

애드온에 대한 설명입니다.

---

### kairoId

`readonly kairoId: string`

Kairo가 할당한 내부 ID입니다.

---

### metadata.authors

`readonly metadata.authors: string[]`

작성자 목록입니다.

---

### metadata.license

`readonly metadata.license: string | undefined`

라이선스 식별자입니다 (선택 사항).

---

### metadata.url

`readonly metadata.url: string | undefined`

애드온의 URL입니다 (선택 사항).

---

### name

`readonly name: string`

애드온의 표시 이름입니다.

---

### optionalDependencies

`readonly optionalDependencies: DependencyMap`

선택적 애드온 의존성 맵입니다.

---

### tags

`readonly tags: string[]`

애드온과 연관된 태그 목록입니다.

---

### version

`readonly version:` [`SemVer`](/ko/api/properties/semver)

애드온의 버전입니다.

---
