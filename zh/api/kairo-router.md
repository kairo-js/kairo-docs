# KairoRouter

`import { router } from '@kairo-js/router'`

以 `router` 单例形式导出的类。提供 kairo-router 的核心功能：插件初始化、API 调用、事件订阅等。

## 属性

### afterEvents

`readonly afterEvents:` [`KairoAfterEvents`](/zh/api/kairo-after-events)

订阅 after 事件。

---

### beforeEvents

`readonly beforeEvents:` [`KairoBeforeEvents`](/zh/api/kairo-before-events)

订阅 before 事件。

---

### currentTick

`readonly currentTick: number`

自激活以来的当前 tick 计数（getter）。

---

### systemInfo

`readonly systemInfo:` [`KairoContext`](/zh/api/kairo-context)

插件上下文信息（getter）。

---

## 方法

- [clearRun](#clearrun)
- [delete](#delete)
- [emit](#emit)
- [getAddonId](#getaddonid)
- [has](#has)
- [init](#init)
- [load](#load)
- [request](#request)
- [runInterval](#runinterval)
- [runTimeout](#runtimeout)
- [save](#save)
- [send](#send)
- [waitForWorldLoad](#waitforworldload)

### clearRun {#clearrun}

```typescript
clearRun(runId: number): void
```

取消由 `runInterval()` 或 `runTimeout()` 创建的定时任务。

**参数**

- **runId:** `number`

  要取消的任务 ID。

**返回值：** `void`

---

### emit {#emit}

```typescript
emit(eventName: string, payload?: unknown): void
```

触发一个自定义事件。将被传递给通过 `AddonEventRegistry.on()` 订阅的处理器。

**参数**

- **eventName:** `string`

  要触发的事件名称。
- **payload:** `unknown`

  附加到事件的数据（可选）。

**返回值：** `void`

---

### getAddonId {#getaddonid}

```typescript
getAddonId(): string | undefined
```

返回本插件的 addonId。在插件注册之前返回 `undefined`。

**返回值：** `string | undefined`

---


### init {#init}

```typescript
init(properties: AddonProperties): void
```

初始化插件。

**参数**

- **properties:** [`AddonProperties`](/zh/api/properties/addon-properties)

  插件的配置信息。

**返回值：** `void`

---

### request {#request}

```typescript
request<TReturn>(
  targetAddonId: string,
  apiName: string,
  args?: unknown,
  options?: { timeout?: number },
): Promise<TReturn | CanceledResult>
```

调用 API 并等待结果。`timeout` 以 tick 为单位，默认为 20 tick。

**参数**

- **targetAddonId:** `string`

  目标插件的 ID。
- **apiName:** `string`

  要调用的 API 名称。
- **args:** `unknown`

  传递给 API 的参数（可选）。
- **options.timeout:** `number`

  超时时间，单位为 tick（默认 20）。

**返回值：** `Promise<TReturn |` [`CanceledResult`](/zh/api/canceled-result)`>`

```typescript
const result = await router.request<{ balance: number }>(
  'economy-addon',
  'economy/getBalance',
  { playerId: 'abc123' },
)

if ('canceled' in result) {
  console.warn('Request cancelled:', result.reason)
} else {
  console.log('Balance:', result.balance)
}
```

---

### runInterval {#runinterval}

```typescript
runInterval(callback: () => void, tickInterval?: number): number
```

按照给定的 tick 间隔重复执行回调。返回可传递给 `clearRun()` 的 runId。

**参数**

- **callback:** `() => void`

  要重复执行的函数。
- **tickInterval:** `number`

  间隔时间，单位为 tick（可选）。

**返回值：** `number` — runId

---

### runTimeout {#runtimeout}

```typescript
runTimeout(callback: () => void, tickDelay?: number): number
```

在给定的 tick 延迟后执行一次回调。返回可传递给 `clearRun()` 的 runId。

**参数**

- **callback:** `() => void`

  要执行一次的函数。
- **tickDelay:** `number`

  延迟时间，单位为 tick（可选）。

**返回值：** `number` — runId

---

### send {#send}

```typescript
send(targetAddonId: string, apiName: string, args?: unknown): void
```

以即发即忘方式调用 API，不等待响应。若目标插件不存在或未激活，则静默忽略。

**参数**

- **targetAddonId:** `string`

  目标插件的 ID。
- **apiName:** `string`

  要调用的 API 名称。
- **args:** `unknown`

  传递给 API 的参数（可选）。

**返回值：** `void`

```typescript
router.send('economy-addon', 'onTransaction', { amount: 50 })
```

---

### delete {#delete}

```typescript
delete(key: string): Promise<void>
```

删除指定键的已存储值。

**参数**

- **key:** `string`

  要删除的键。

**返回值：** `Promise<void>`

---

### has {#has}

```typescript
has(key: string, options?: { addonId?: string }): Promise<boolean>
```

如果指定键存在则返回 `true`。

**参数**

- **key:** `string`

  要检查的键。
- **options.addonId:** `string`

  指定时从其他插件的存储中查找（可选）。

**返回值：** `Promise<boolean>`

---

### load {#load}

```typescript
load<T = unknown>(key: string, options?: { addonId?: string }): Promise<T | undefined>
```

从存储中读取值。键不存在时返回 `undefined`。

**参数**

- **key:** `string`

  要读取的键。
- **options.addonId:** `string`

  指定时从其他插件的存储中读取（可选）。

**返回值：** `Promise<T | undefined>`

---

### save {#save}

```typescript
save(key: string, value: unknown): Promise<void>
```

将值以指定键保存到存储中。

**参数**

- **key:** `string`

  存储键。
- **value:** `unknown`

  要保存的值。

**返回值：** `Promise<void>`

---

### waitForWorldLoad {#waitforworldload}

```typescript
waitForWorldLoad(): Promise<void>
```

在世界加载完成后 resolve。

**返回值：** `Promise<void>`
