# Kairo

Kairo는 Minecraft Bedrock Edition에서 애드온 간 통신을 가능하게 하는 호스트 비헤이비어 팩입니다. 월드 내 모든 애드온의 라이프사이클(Discovery · Registration · Activation)을 관리하고, API 호출 및 이벤트 라우팅을 담당합니다.

## 요구 사항

Kairo를 사용하려면 **kairo-database**를 함께 설치해야 합니다. kairo-database는 Kairo가 버전 업데이트 후에도 세션 데이터를 유지하기 위한 영구 저장소를 제공합니다.

## 설치

1. [GitHub Releases](https://github.com/kairo-js/kairo/releases)에서 `kairo.mcpack` 다운로드
2. [GitHub Releases](https://github.com/kairo-js/kairo-database/releases)에서 `kairo-database.mcpack` 다운로드
3. 두 비헤이비어 팩을 월드에 적용

설치 후, `@kairo-js/router`를 사용하는 애드온은 월드 로드 시 자동으로 감지되어 의존성 순서대로 활성화됩니다.

## 애드온 개발

모든 애드온 개발은 [`@kairo-js/router`](/ko/guide/)를 통해 이루어집니다. Kairo 자체에는 별도 설정이 필요 없으며, 설치만으로 동작합니다.

## 커스텀 커맨드

Kairo는 `/kairo:addons` 커맨드를 등록합니다. **Game Directors** 권한이 필요합니다.

### `/kairo:addons list`

등록된 애드온 목록과 현재 상태를 표시합니다.

### `/kairo:addons open`

실행한 플레이어에게 Kairo 관리 UI를 엽니다.

### `/kairo:addons enable <addonId> [version]`

애드온을 활성화합니다. `version`을 생략하면 최신 안정 버전이 활성화됩니다. 안정 버전이 없는 경우 최신 프리릴리즈 버전이 사용됩니다.

```
/kairo:addons enable economy-addon
/kairo:addons enable economy-addon 1.2.0
```

### `/kairo:addons disable <addonId>`

애드온을 비활성화합니다. `kairo`와 `kairo-database`는 비활성화할 수 없습니다.

```
/kairo:addons disable economy-addon
```

### `/kairo:addons status <addonId>`

애드온의 상세 상태(설치된 버전, 비활성 이유 등)를 표시합니다.

```
/kairo:addons status economy-addon
```
