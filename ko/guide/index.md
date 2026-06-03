# 시작하기

## 지원 Minecraft Script API 버전

Kairo는 Minecraft의 **안정(stable)** Script API가 필요합니다:

- `@minecraft/server` **2.0.0 이상**
- `@minecraft/server-ui` **2.0.0 이상**

2.0.0 이전 버전은 초기화 모델이 다르며（예: `WorldLoad` 대신 `WorldInitialize` 사용）, 지원되지 않습니다.

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

## 필수 dependencies

`properties.ts`에 `"kairo"`를 필수 dependency로 선언해야 합니다. 누락된 경우 `router.init()`이 즉시 오류를 발생시킵니다.

```typescript
export const properties: AddonProperties = {
  id: 'my-addon',
  dependencies: {
    kairo: '^1.0.0',
    // optional: 'kairo-database': '^2.0.0' — router.save/load/delete/has에 필요
  },
}
```

## 스탠드얼론 모드

`router.init()`에 `{ standalone: true }`를 전달하면 스탠드얼론 활성화가 켜집니다. kairo가 설치되지 않은 경우, 필수 dependencies가 `kairo`와 `kairo-database`만 포함되어 있으면 자동으로 활성화됩니다. kairo의 라이프사이클 관리를 선택적으로 활용하는 단독 애드온에 유용합니다.

자세한 내용은 [`RouterInitOptions`](/ko/api/router-init-options)를 참조하세요.

## 초기화 타이밍

월드 로드 후 kairo는 Discovery · Registration · Activation 초기화 플로우를 실행한 뒤 `addonActivate`를 발생시킵니다. 설치된 애드온 수에 따라 다르지만 **약 30〜50틱**의 지연이 발생합니다.

이 지연은 의도된 것입니다. Minecraft Script API 2.0.0+에서는 WorldLoad 완료 전에 world 관련 메서드를 호출하면 오류가 발생하는데, `addonActivate`는 그 대체 안전 신호 역할을 합니다.

```typescript
router.afterEvents.addonActivate.subscribe(() => {
  // 여기서부터 world 메서드 호출 및 다른 애드온 API 사용이 안전합니다
})
```

::: tip
바닐라 Script API 애드온에 익숙한 경우, `addonActivate`를 `WorldLoad`의 대체로 생각하세요. 추가 틱은 kairo의 핸드셰이크 비용이며, 낭비되는 시간이 아닙니다.
:::
