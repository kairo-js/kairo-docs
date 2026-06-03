# AddonDependencies

`import type { AddonDependencies } from '@kairo-js/properties'`

以 addonId 为键、版本范围字符串为值的插件依赖映射类型。用于 [`AddonProperties`](/zh/api/properties/addon-properties) 的 `dependencies`、`optionalDependencies` 及 `peerDependencies` 字段。

```typescript
type AddonDependencies = Record<string, string>
```

键为目标附加包的 `id`，值为版本范围字符串（遵循语义化版本范围规范，例如 `">=1.0.0"`、`"^2.1.0"`）。

## 用法

```typescript
const dependencies: AddonDependencies = {
  'economy-addon': '>=1.0.0',
  'chat-addon': '^2.1.0',
}

router.init({
  id: 'my-addon',
  // ...
  dependencies,
  optionalDependencies: {
    'analytics-addon': '>=0.5.0',
  },
})
```
