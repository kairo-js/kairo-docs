# EngineVersion

`import type { EngineVersion } from '@kairo-js/properties'`

이 애드온이 요구하는 최소 Minecraft 엔진 버전을 나타내는 인터페이스입니다. `AddonHeader.min_engine_version`에 사용됩니다.

```typescript
interface EngineVersion {
  major: number
  minor: number
  patch: number
}
```

## 필드

### major

`major: number`

메이저 버전 번호.

---

### minor

`minor: number`

마이너 버전 번호.

---

### patch

`patch: number`

패치 버전 번호.

## 사용 예시

```typescript
const minEngineVersion: EngineVersion = {
  major: 1,
  minor: 21,
  patch: 0,
}
```
