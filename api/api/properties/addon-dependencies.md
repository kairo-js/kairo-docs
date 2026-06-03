# AddonDependencies

`import type { AddonDependencies } from '@kairo-js/properties'`

A map from addon ID to a version range string. Used in the `dependencies`, `optionalDependencies`, and `peerDependencies` fields of `AddonProperties`.

```typescript
type AddonDependencies = { readonly [addonId: string]: string }
```

Each key is an addon ID, and its value is a version range string compatible with the semver range syntax (e.g. `"^1.0.0"`, `">=2.1.0 <3.0.0"`).

## Usage

```typescript
import { router } from '@kairo-js/router'

router.init({
  id: 'my-addon',
  header: { /* ... */ },
  dependencies: {
    'economy-addon': '^2.0.0',
    'inventory-addon': '>=1.5.0',
  },
})
```
