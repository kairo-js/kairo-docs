# 시작하기

## kairo 설치

**kairo** 비헤이비어 팩을 월드에 추가하세요. 모든 애드온 간의 통신 허브 역할을 합니다.

> kairo는 [GitHub Releases](https://github.com/kairo-js/kairo/releases)에서 다운로드할 수 있습니다.

## kairo-router 사용하기

다른 애드온과 통신하려면 `kairo-router`를 애드온에 추가하세요.

### 설치

```bash
pnpm add @kairo-js/router
```

### 시작 이벤트에서 API 선언하기

모든 API 등록과 훅 선언은 반드시 `router.beforeEvents.startup` 내부에서 이루어져야 합니다.

```typescript
import { router } from '@kairo-js/router'

router.beforeEvents.startup.subscribe((ev) => {
  // Register an API your addon provides
  ev.api.register<{ playerId: string }, { balance: number }>(
    'economy/getBalance',
    async ({ playerId }) => ({ balance: 100 }),
  )
})
```

### 다른 애드온의 API 호출하기

```typescript
// fire-and-forget
router.send('economy-addon', 'onTransaction', { amount: 50 })

// await result
const result = await router.request<{ balance: number }>(
  'economy-addon',
  'getBalance',
  { playerId: '...' },
)

if ('canceled' in result) {
  console.log(result.reason)
} else {
  console.log(result.balance)
}
```

전체 API는 [kairo-router API 레퍼런스](/ko/api/kairo-router)를 참고하세요.
