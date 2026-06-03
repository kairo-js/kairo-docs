# AddonDependencies

`import type { AddonDependencies } from '@kairo-js/properties'`

애드온 간 의존성을 선언하는 맵 타입입니다. 키는 대상 애드온의 `id`, 값은 버전 범위 문자열입니다.

```typescript
type AddonDependencies = Record<string, string>
```

버전 범위 문자열은 semver 범위 구문을 따릅니다 (예: `"^1.0.0"`, `">=2.0.0 <3.0.0"`).

`AddonProperties`의 `dependencies`, `optionalDependencies`, `peerDependencies` 필드에서 사용됩니다.

## 사용 예시

```typescript
const dependencies: AddonDependencies = {
  'economy-addon': '^1.0.0',
  'shop-addon': '>=2.0.0 <3.0.0',
}
```
