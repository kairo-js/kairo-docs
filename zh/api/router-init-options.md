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
| `undefined` / `false`（默认） | 不启用独立模式 |
| `true` | 仅当必须依赖项限于 `kairo` 和 `kairo-database` 时启用独立模式 |

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

// 默认 — 不启用独立模式（需要 kairo）
router.init(properties)

// 选择启用独立模式（仅在无跨附加包依赖时激活）
router.init(properties, { standalone: true })
```
