# MinecraftModuleType

`import type { MinecraftModuleType } from '@kairo-js/properties'`

지원되는 Minecraft 모듈 이름의 유니온 타입입니다. `MinecraftDependency.module_name`의 타입으로 사용됩니다.

```typescript
type MinecraftModuleType =
  | '@minecraft/server'
  | '@minecraft/server-admin'
  | '@minecraft/server-editor'
  | '@minecraft/server-gametest'
  | '@minecraft/server-net'
  | '@minecraft/server-ui'
  | '@minecraft/debug-utilities'
  | '@minecraft/math'
  | '@minecraft/vanilla-data'
```

[`MinecraftModule`](/ko/api/properties/minecraft-module) 열거형의 값들과 동일합니다. 문자열 리터럴 대신 `MinecraftModule` 열거형 사용을 권장합니다.
