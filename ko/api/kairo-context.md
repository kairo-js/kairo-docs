# KairoContext

`import { router } from '@kairo-js/router'`

`router.systemInfo`를 통해 접근하는 클래스입니다. 애드온에 대한 컨텍스트 정보를 제공합니다.

## 프로퍼티

### addonProperties

`readonly addonProperties: AddonProperties`

애드온의 설정입니다.

---

### kairoId

`readonly kairoId: string`

이 애드온에 할당된 내부 Kairo ID입니다. 등록 전에 접근하면 에러가 발생합니다.

---

### kairoRegistry

`readonly kairoRegistry: KairoRegistry`

이 애드온의 레지스트리 정보입니다. 등록 전에 접근하면 에러가 발생합니다.

---

## 메서드

- [isActive](#isactive)
- [isRegistered](#isregistered)

### isActive {#isactive}

```typescript
isActive(): boolean
```

애드온이 ACTIVE 상태이면 `true`를 반환합니다.

**반환값:** `boolean`

---

### isRegistered {#isregistered}

```typescript
isRegistered(): boolean
```

애드온이 등록되어 있으면 `true`를 반환합니다. `kairoId` 및 `kairoRegistry`에 접근하기 전에 이 메서드로 확인하세요.

**반환값:** `boolean`
