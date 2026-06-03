# RouterInitOptions

`import type { RouterInitOptions } from '@kairo-js/router'`

Options passed to [`router.init()`](/api/kairo-router#init).

```typescript
interface RouterInitOptions {
  standalone?: boolean
}
```

## Fields

### standalone

`standalone?: boolean`

Controls standalone activation behavior when kairo is not installed in the world.

| Value | Behavior |
|---|---|
| `undefined` / `false` (default) | Never attempt standalone |
| `true` | Attempt standalone if required `dependencies` are limited to `kairo` and `kairo-database` |

**Standalone activation** occurs approximately 20 ticks after world load when kairo is not detected. Once active in standalone mode:

- `router.save()` / `router.delete()` — resolve immediately without any operation
- `router.load()` — always returns `undefined`
- `router.has()` — always returns `false`
- `router.send()` / `router.emit()` — send ScriptEvents with no recipients
- `router.request()` — returns [`CanceledResult`](/api/canceled-result) after timeout

## Example

```typescript
import { router } from '@kairo-js/router'
import { properties } from './properties'

// Default — no standalone (kairo is required)
router.init(properties)

// Opt-in to standalone (only activates if no cross-addon dependencies)
router.init(properties, { standalone: true })
```
