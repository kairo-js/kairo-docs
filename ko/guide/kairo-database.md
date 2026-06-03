# Kairo Database

Kairo Database는 Kairo 애드온을 위한 영구 키-값 저장소를 제공하는 비헤이비어 팩입니다. Kairo의 필수 동반 팩입니다.

## 안정성 보장

**버전 2.0.0부터 Kairo Database는 원칙적으로 더 이상 업데이트되지 않습니다.** UUID와 내부 포맷이 고정되어, 한 번 저장된 데이터는 반영구적으로 유지됩니다 — Kairo 본체가 새 UUID로 업데이트된 이후에도 마찬가지입니다.

이는 의도적인 설계입니다. Kairo Database는 장기 데이터 보존 레이어로 기능하며, UUID가 변경되지 않아야 Kairo 버전 업데이트 후에도 데이터를 이어받을 수 있습니다.

## 스토리지

데이터는 Minecraft의 Dynamic Properties API를 사용하여 저장됩니다. 큰 데이터는 자동으로 청크로 분할되어 저장되고 읽기 시 재조합되므로, 실용적인 용도에서는 사실상 무제한으로 저장할 수 있습니다.

## 설치

1. [GitHub Releases](https://github.com/kairo-js/kairo-database/releases)에서 `kairo-database.mcpack` 다운로드
2. Kairo와 함께 비헤이비어 팩을 월드에 적용

## 사용법

스토리지 접근은 `@kairo-js/router`를 통해 이루어집니다. Kairo Database 자체는 직접 API를 노출하지 않습니다.

### 저장

```typescript
await router.save('my-key', { score: 100 })
```

### 불러오기

```typescript
const value = await router.load<{ score: number }>('my-key')
// 존재하지 않으면 undefined
```

### 존재 확인

```typescript
const exists = await router.has('my-key')
```

### 삭제

```typescript
await router.delete('my-key')
```

### 다른 애드온의 데이터 읽기

```typescript
const value = await router.load('their-key', { addonId: 'other-addon' })
const exists = await router.has('their-key', { addonId: 'other-addon' })
```

메서드의 자세한 내용은 [`KairoRouter`](/ko/api/kairo-router)를 참조하세요.
