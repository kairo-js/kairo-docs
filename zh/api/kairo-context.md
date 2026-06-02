# KairoContext

`import { router } from '@kairo-js/router'`

通过 `router.systemInfo` 访问的类。提供关于插件的上下文信息。

## 属性

### addonProperties

`readonly addonProperties: AddonProperties`

插件的配置信息。

---

### kairoId

`readonly kairoId: string`

分配给本插件的 Kairo 内部 ID。在注册之前访问会抛出错误。

---

### kairoRegistry

`readonly kairoRegistry: KairoRegistry`

本插件的注册表信息。在注册之前访问会抛出错误。

---

## 方法

- [isActive](#isactive)
- [isRegistered](#isregistered)

### isActive {#isactive}

```typescript
isActive(): boolean
```

若插件处于 ACTIVE 状态则返回 `true`。

**返回值：** `boolean`

---

### isRegistered {#isregistered}

```typescript
isRegistered(): boolean
```

若插件已注册则返回 `true`。在调用 `kairoId` 和 `kairoRegistry` 之前，应先使用此方法进行守卫检查。

**返回值：** `boolean`
