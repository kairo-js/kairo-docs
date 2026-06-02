# AddonDeactivateBeforeEvent

`import { router } from '@kairo-js/router'`

The event object for `router.beforeEvents.addonDeactivate`. Not directly instantiable.

Fires before an addon is deactivated. Use this handler to release resources and perform cleanup.

## Usage

```typescript
import { router } from '@kairo-js/router'

router.beforeEvents.addonDeactivate.subscribe((ev) => {
  console.log('Addon is about to deactivate')
  // Cleanup logic here
})
```
