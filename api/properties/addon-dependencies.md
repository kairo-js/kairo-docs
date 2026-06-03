# AddonDependencies

`import type { AddonDependencies } from '@kairo-js/properties'`

addonId をキー、バージョン範囲文字列を値とするマップ型です。`AddonProperties.dependencies`・`optionalDependencies`・`peerDependencies` に使用します。

```typescript
type AddonDependencies = {
  readonly [addonId: string]: string
}
```

## 使用例

```typescript
const properties: AddonProperties = {
  id: 'my-addon',
  header: { /* ... */ },
  dependencies: {
    'economy-addon': '>=1.0.0',
    'core-addon': '^2.3.0',
  },
  optionalDependencies: {
    'analytics-addon': '*',
  },
}
```
