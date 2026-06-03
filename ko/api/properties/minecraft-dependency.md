# MinecraftDependency

`import type { MinecraftDependency } from '@kairo-js/properties'`

이 애드온이 사용하는 Minecraft 내장 모듈 의존성을 선언하는 인터페이스입니다. `AddonProperties.minecraftDependencies`에 사용됩니다.

```typescript
interface MinecraftDependency {
  module_name: MinecraftModuleType
  version: string
}
```

## 필드

### module_name

`module_name: MinecraftModuleType`

의존하는 Minecraft 모듈의 이름. [`MinecraftModuleType`](/ko/api/properties/minecraft-module-type) 또는 [`MinecraftModule`](/ko/api/properties/minecraft-module) 열거형 값을 사용합니다.

---

### version

`version: string`

요구하는 모듈의 버전 문자열 (예: `"1.16.0"`).

## 사용 예시

```typescript
import { MinecraftModule } from '@kairo-js/properties'

const dep: MinecraftDependency = {
  module_name: MinecraftModule.Server,
  version: '1.16.0',
}
```
