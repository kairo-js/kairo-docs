# KairoCustomCommandRegistry

`import { router } from '@kairo-js/router'`

The class accessed via `ev.customCommandRegistry`. Used inside the `router.beforeEvents.startup` event to register Minecraft custom commands.

## Methods

- [registerCommand](#registercommand)
- [registerEnum](#registerenum)

### registerCommand {#registercommand}

```typescript
registerCommand(
  customCommand: CustomCommand,
  callback: (origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined,
): void
```

Registers a Minecraft custom command.

**Parameters**

- **customCommand:** `CustomCommand`

  The command definition.
- **callback:** `(origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined`

  Handler invoked when the command is executed.

**Returns:** `void`

---

### registerEnum {#registerenum}

```typescript
registerEnum(name: string, values: string[]): void
```

Registers an enum for use in command arguments. Can be referenced in a `CustomCommand` argument definition.

**Parameters**

- **name:** `string`

  The name of the enum.
- **values:** `string[]`

  The allowed enum values.

**Returns:** `void`

## Examples

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
