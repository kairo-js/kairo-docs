# KairoApiRegistry

`import { router } from '@kairo-js/router'`

`ev.api`를 통해 접근하는 클래스입니다. `router.beforeEvents.startup` 이벤트 내에서만 조작할 수 있습니다. 레지스트리는 startup이 종료된 후 봉인되며, 이후의 모든 조작은 에러를 발생시킵니다.

## 메서드

- [dispose](#dispose)
- [getApiHandler](#getapihandler)
- [getApiNames](#getapinames)
- [getHookDeclarations](#gethookdeclarations)
- [hook](#hook)
- [register](#register)
- [seal](#seal)
- [setDeclaringAddonId](#setdeclaringaddonid)

### dispose {#dispose}

```typescript
dispose(): void
```

이 레지스트리가 보유한 리소스를 해제합니다.

**반환값:** `void`

---

### getApiHandler {#getapihandler}

```typescript
getApiHandler(apiName: string): ApiHandler | undefined
```

지정한 API 이름에 등록된 핸들러를 반환합니다. 등록되어 있지 않으면 `undefined`를 반환합니다.

**매개변수**

- **apiName:** `string` — 조회할 API의 이름.

**반환값:** `ApiHandler | undefined`

---

### getApiNames {#getapinames}

```typescript
getApiNames(): ReadonlyArray<string>
```

등록된 모든 API 이름을 반환합니다.

**반환값:** `ReadonlyArray<string>`

---

### getHookDeclarations {#gethookdeclarations}

```typescript
getHookDeclarations(): readonly InternalHookDeclaration[]
```

등록된 모든 훅 선언을 반환합니다.

**반환값:** `readonly InternalHookDeclaration[]`

---

### hook {#hook}

```typescript
hook<TArgs, TReturn>(
  targetAddonId: string,
  apiName: string,
  options: HookOptions<TArgs, TReturn>,
): void
```

다른 애드온의 API 호출을 가로채는 훅을 등록합니다.

**매개변수**

- **targetAddonId:** `string` — 훅을 연결할 애드온의 ID.
- **apiName:** `string` — 훅을 연결할 API의 이름.
- **options:** `HookOptions<TArgs, TReturn>` — 훅 설정.

**반환값:** `void`

```typescript
// Mutate args
ev.api.hook('economy-addon', 'economy/getBalance', {
  before: async (ctx) => {
    ctx.args = { ...ctx.args, audited: true }
  },
})

// Post-process result
ev.api.hook('economy-addon', 'economy/getBalance', {
  after: async (ctx) => {
    ctx.result = { ...ctx.result, taxRate: 0.1 }
  },
})
```

---

### register {#register}

```typescript
register<TArgs, TReturn>(
  apiName: string,
  handler: (args: TArgs) => TReturn | Promise<TReturn>,
): void
```

이 애드온이 제공하는 API 핸들러를 등록합니다. 같은 addonId 내에서 동일한 `apiName`을 두 번 등록하면 에러가 발생합니다.

**매개변수**

- **apiName:** `string` — 등록할 API의 이름.
- **handler:** `(args: TArgs) => TReturn | Promise<TReturn>` — API가 호출될 때 실행할 핸들러.

**반환값:** `void`

```typescript
ev.api.register<{ playerId: string }, { balance: number }>(
  'economy/getBalance',
  async ({ playerId }) => {
    return { balance: getBalance(playerId) }
  },
)
```

::: tip API 이름 네임스페이싱
충돌을 방지하고 검색 가능성을 높이기 위해 `economy/getBalance`와 같이 슬래시로 구분된 네임스페이스를 사용하세요.
:::

---

### seal {#seal}

```typescript
seal(): void
```

레지스트리를 닫습니다. 프레임워크 내부에서 호출됩니다. 봉인 후에 `register()` 또는 `hook()`을 호출하면 에러가 발생합니다.

**반환값:** `void`

---

### setDeclaringAddonId {#setdeclaringaddonid}

```typescript
setDeclaringAddonId(addonId: string): void
```

선언 애드온의 addonId를 설정합니다. 프레임워크 내부에서 호출됩니다.

**매개변수**

- **addonId:** `string` — 선언 애드온의 ID.

**반환값:** `void`
