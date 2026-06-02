# KairoCustomCommandRegistry

`import { router } from '@kairo-js/router'`

`ev.customCommandRegistry`를 통해 접근하는 클래스입니다. `router.beforeEvents.startup` 이벤트 안에서 Minecraft 커스텀 커맨드를 등록하는 데 사용합니다.

## 메서드

- [registerCommand](#registercommand)
- [registerEnum](#registerenum)

### registerCommand {#registercommand}

```typescript
registerCommand(
  customCommand: CustomCommand,
  callback: (origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined,
): void
```

Minecraft 커스텀 커맨드를 등록합니다.

**매개변수**

- **customCommand:** `CustomCommand`

  커맨드 정의.
- **callback:** `(origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined`

  커맨드가 실행될 때 호출되는 핸들러.

**반환값:** `void`

---

### registerEnum {#registerenum}

```typescript
registerEnum(name: string, values: string[]): void
```

커맨드 인수에서 사용할 열거형을 등록합니다. `CustomCommand` 인수 정의에서 참조할 수 있습니다.

**매개변수**

- **name:** `string`

  열거형의 이름.
- **values:** `string[]`

  허용되는 열거형 값 목록.

**반환값:** `void`

## 사용 예시

```typescript
import { router } from '@kairo-js/router'

router.beforeEvents.startup.subscribe((ev) => {
  // Register an enum
  ev.customCommandRegistry.registerEnum('myAddon:targetType', ['player', 'entity', 'block'])

  // Register a command
  ev.customCommandRegistry.registerCommand(
    {
      name: 'myaddon:spawn',
      description: 'Spawn an entity',
      permissionLevel: 'any',
      mandatoryParameters: [
        { name: 'type', type: 'enum', enumName: 'myAddon:targetType' },
      ],
    },
    (origin, type) => {
      console.log(`Command executed: type=${type}`)
      return { success: true }
    },
  )
})
```
