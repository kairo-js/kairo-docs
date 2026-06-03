# RouterInitOptions

`import type { RouterInitOptions } from '@kairo-js/router'`

传递给 [`router.init()`](/zh/api/kairo-router#init) 的选项对象。

```typescript
interface RouterInitOptions {
  standalone?: boolean
}
```

## 字段

### standalone

`standalone?: boolean`

控制在未安装 kairo 的世界中的独立模式激活行为。

| 值 | 行为 |
|---|---|
| `undefined`（默认） | 仅当必须依赖项限于 `kairo` 和 `kairo-database` 时启用独立模式 |
| `true` | 无论依赖项如何，始终尝试独立激活 |
| `false` | 禁用独立模式 |

**独立模式激活**在未检测到 kairo 时，于世界加载约 20 tick 后触发。以独立模式激活后的行为：

- `router.save()` / `router.delete()` — 不执行任何操作，立即 resolve
- `router.load()` — 始终返回 `undefined`
- `router.has()` — 始终返回 `false`
- `router.send()` / `router.emit()` — 发送没有接收者的 ScriptEvent
- `router.request()` — 超时后返回 [`CanceledResult`](/zh/api/canceled-result)

## 示例

```typescript
import { router } from '@kairo-js/router'
import { properties } from './properties'

// dependencies 仅包含 kairo 时自动启用独立模式（无需选项）
router.init(properties)

// 即使有跨附加包依赖，也强制使用独立模式
router.init(properties, { standalone: true })

// 禁用独立模式
router.init(properties, { standalone: false })
```
