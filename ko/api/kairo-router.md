# KairoRouter

`import { router } from '@kairo-js/router'`

`router` 싱글턴으로 내보내지는 클래스입니다. kairo-router의 핵심 기능인 애드온 초기화, API 호출, 이벤트 구독 등을 제공합니다.

## 프로퍼티

### afterEvents

`readonly afterEvents:` [`KairoAfterEvents`](/ko/api/kairo-after-events)

after 이벤트를 구독합니다.

---

### beforeEvents

`readonly beforeEvents:` [`KairoBeforeEvents`](/ko/api/kairo-before-events)

before 이벤트를 구독합니다.

---

### currentTick

`readonly currentTick: number`

활성화 이후의 현재 틱 카운트 (getter).

---

### systemInfo

`readonly systemInfo:` [`KairoContext`](/ko/api/kairo-context)

애드온 컨텍스트 정보 (getter).

---

## 메서드

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

`runInterval()` 또는 `runTimeout()`으로 예약한 실행을 취소합니다.

**매개변수**

- **runId:** `number`

  취소할 실행의 ID.

**반환값:** `void`

---

### emit {#emit}

```typescript
emit(eventName: string, payload?: unknown): void
```

커스텀 이벤트를 발행합니다. `AddonEventRegistry.on()`으로 구독된 핸들러에 전달됩니다.

**매개변수**

- **eventName:** `string`

  발행할 이벤트의 이름.
- **payload:** `unknown`

  이벤트에 첨부할 데이터 (선택 사항).

**반환값:** `void`

---

### getAddonId {#getaddonid}

```typescript
getAddonId(): string | undefined
```

이 애드온의 addonId를 반환합니다. 애드온이 등록되기 전에는 `undefined`를 반환합니다.

**반환값:** `string | undefined`

---


### init {#init}

```typescript
init(properties: AddonProperties): void
```

애드온을 초기화합니다.

**매개변수**

- **properties:** [`AddonProperties`](/ko/api/properties/addon-properties)

  애드온의 설정.

**반환값:** `void`

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

API를 호출하고 결과를 기다립니다. `timeout`은 틱 단위이며 기본값은 20틱입니다.

**매개변수**

- **targetAddonId:** `string`

  대상 애드온의 ID.
- **apiName:** `string`

  호출할 API의 이름.
- **args:** `unknown`

  API에 전달할 인수 (선택 사항).
- **options.timeout:** `number`

  타임아웃 (틱 단위, 기본값 20).

**반환값:** `Promise<TReturn |` [`CanceledResult`](/ko/api/canceled-result)`>`

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

지정한 틱 간격으로 콜백을 반복 실행하도록 예약합니다. `clearRun()`에 전달할 runId를 반환합니다.

**매개변수**

- **callback:** `() => void`

  반복 실행할 함수.
- **tickInterval:** `number`

  틱 단위 간격 (선택 사항).

**반환값:** `number` — runId

---

### runTimeout {#runtimeout}

```typescript
runTimeout(callback: () => void, tickDelay?: number): number
```

지정한 틱 지연 후 콜백을 한 번 실행하도록 예약합니다. `clearRun()`에 전달할 runId를 반환합니다.

**매개변수**

- **callback:** `() => void`

  한 번 실행할 함수.
- **tickDelay:** `number`

  틱 단위 지연 (선택 사항).

**반환값:** `number` — runId

---

### send {#send}

```typescript
send(targetAddonId: string, apiName: string, args?: unknown): void
```

API를 fire-and-forget 방식으로 호출합니다. 응답을 기다리지 않습니다. 대상 애드온이 존재하지 않거나 비활성 상태인 경우 조용히 무시됩니다.

**매개변수**

- **targetAddonId:** `string`

  대상 애드온의 ID.
- **apiName:** `string`

  호출할 API의 이름.
- **args:** `unknown`

  API에 전달할 인수 (선택 사항).

**반환값:** `void`

```typescript
router.send('economy-addon', 'onTransaction', { amount: 50 })
```

---

### delete {#delete}

```typescript
delete(key: string): Promise<void>
```

지정한 키의 저장된 값을 삭제합니다.

**매개변수**

- **key:** `string`

  삭제할 키.

**반환값:** `Promise<void>`

---

### has {#has}

```typescript
has(key: string, options?: { addonId?: string }): Promise<boolean>
```

지정한 키가 존재하면 `true`를 반환합니다.

**매개변수**

- **key:** `string`

  확인할 키.
- **options.addonId:** `string`

  다른 애드온의 스토어를 참조할 경우 지정 (선택 사항).

**반환값:** `Promise<boolean>`

---

### load {#load}

```typescript
load<T = unknown>(key: string, options?: { addonId?: string }): Promise<T | undefined>
```

스토어에서 값을 불러옵니다. 키가 없으면 `undefined`를 반환합니다.

**매개변수**

- **key:** `string`

  불러올 키.
- **options.addonId:** `string`

  다른 애드온의 스토어에서 불러올 경우 지정 (선택 사항).

**반환값:** `Promise<T | undefined>`

---

### save {#save}

```typescript
save(key: string, value: unknown): Promise<void>
```

지정한 키로 값을 스토어에 저장합니다.

**매개변수**

- **key:** `string`

  저장할 키.
- **value:** `unknown`

  저장할 값.

**반환값:** `Promise<void>`

---

### waitForWorldLoad {#waitforworldload}

```typescript
waitForWorldLoad(): Promise<void>
```

월드 로딩이 완료되면 resolve됩니다.

**반환값:** `Promise<void>`
