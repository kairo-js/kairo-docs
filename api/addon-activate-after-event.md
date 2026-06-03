# AddonActivateAfterEvent

`import { router } from '@kairo-js/router'`

The event object for `router.afterEvents.addonActivate`. Not directly instantiable.

Fires after an addon is activated.

## Examples

```typescript
import { router } from '@kairo-js/router'

router.afterEvents.addonActivate.subscribe((ev) => {
  console.log('Addon is now active')
})
```
