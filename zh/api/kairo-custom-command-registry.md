# KairoCustomCommandRegistry

`import { router } from '@kairo-js/router'`

通过 `ev.customCommandRegistry` 访问的类。在 `router.beforeEvents.startup` 事件中用于注册 Minecraft 自定义命令。

## 方法

- [registerCommand](#registercommand)
- [registerEnum](#registerenum)

### registerCommand {#registercommand}

```typescript
registerCommand(
  customCommand: CustomCommand,
  callback: (origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined,
): void
```

注册一个 Minecraft 自定义命令。

**参数**

- **customCommand:** `CustomCommand`

  命令定义。
- **callback:** `(origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined`

  命令执行时调用的处理器。

**返回值：** `void`

---

### registerEnum {#registerenum}

```typescript
registerEnum(name: string, values: string[]): void
```

注册一个供命令参数使用的枚举。可在 `CustomCommand` 的参数定义中引用。

**参数**

- **name:** `string`

  枚举的名称。
- **values:** `string[]`

  允许的枚举值。

**返回值：** `void`

## 使用示例

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
