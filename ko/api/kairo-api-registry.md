# ApiRegistration

`ev.api`를 통해 접근하는 인터페이스입니다. `router.beforeEvents.startup` 이벤트 내에서만 조작할 수 있습니다.

```typescript
interface ApiRegistration {
  register<TArgs, TReturn>(apiName: string, handler: (args: TArgs) => TReturn | Promise<TReturn>): void
  hook<TArgs, TReturn>(targetAddonId: string, apiName: string, options: HookOptions<TArgs, TReturn>): void
}
```

## 메서드

- [hook](#hook)
- [register](#register)

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

- **targetAddonId:** `string`

  훅을 연결할 애드온의 ID.
- **apiName:** `string`

  훅을 연결할 API의 이름.
- **options:** [`HookOptions<TArgs, TReturn>`](/ko/api/hook-options)

  훅 설정.

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

- **apiName:** `string`

  등록할 API의 이름.
- **handler:** `(args: TArgs) => TReturn | Promise<TReturn>`

  API가 호출될 때 실행할 핸들러.

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
