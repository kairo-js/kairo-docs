# KairoContext

`import { router } from '@kairo-js/router'`

The class accessed via `router.systemInfo`. Provides context information about the addon.

## Properties

### addonProperties

`readonly addonProperties: AddonProperties`

The addon's configuration.

---

### kairoId

`readonly kairoId: string`

Internal Kairo ID assigned to this addon. Throws before registration.

---

### kairoRegistry

`readonly kairoRegistry: KairoRegistry`

Registry info for this addon. Throws before registration.

---

## Methods

- [isActive()](#isactive)
- [isRegistered()](#isregistered)

### isActive() {#isactive}

```typescript
isActive(): boolean
```

Returns `true` if the addon is in ACTIVE state.

**Returns:** `boolean`

---

### isRegistered() {#isregistered}

```typescript
isRegistered(): boolean
```

Returns `true` if the addon is registered. Use this to guard access to `kairoId` and `kairoRegistry` before calling them.

**Returns:** `boolean`
