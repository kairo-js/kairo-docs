# SemVer

`import type { SemVer } from '@kairo-js/properties'`

시맨틱 버전(Semantic Versioning)을 나타내는 인터페이스입니다. `AddonHeader.version`에 사용됩니다.

```typescript
interface SemVer {
  major: number
  minor: number
  patch: number
  prerelease?: string
  build?: string
}
```

## 필드

### major

`major: number`

메이저 버전 번호. 하위 호환되지 않는 변경 시 증가합니다.

---

### minor

`minor: number`

마이너 버전 번호. 하위 호환되는 기능 추가 시 증가합니다.

---

### patch

`patch: number`

패치 버전 번호. 하위 호환되는 버그 수정 시 증가합니다.

---

### prerelease

`prerelease?: string`

프리릴리즈 식별자 (선택 사항). 예: `"alpha.1"`, `"beta.0"`.

---

### build

`build?: string`

빌드 메타데이터 (선택 사항). 버전 우선순위 비교에는 영향을 주지 않습니다.

## 사용 예시

```typescript
const version: SemVer = {
  major: 1,
  minor: 2,
  patch: 0,
}

const preVersion: SemVer = {
  major: 0,
  minor: 3,
  patch: 0,
  prerelease: 'beta.0',
}
```
