# KairoContext

`import { router } from '@kairo-js/router'`

The class accessed via `router.systemInfo`. Provides context information about the addon.

## Properties

| Property | Type | Description |
|---|---|---|
| `addonProperties` | `AddonProperties` (readonly) | The addon's configuration |
| `kairoId` | `string` (getter) | Internal Kairo ID assigned to this addon. Throws before registration. |
| `kairoRegistry` | `KairoRegistry` (getter) | Registry info for this addon. Throws before registration. |

## Methods

### isActive()

```typescript
isActive(): boolean
```

Returns `true` if the addon is in ACTIVE state.

**Returns:** `boolean`

---

### isRegistered()

```typescript
isRegistered(): boolean
```

Returns `true` if the addon is registered. Use this to guard access to `kairoId` and `kairoRegistry` before calling them.

**Returns:** `boolean`
