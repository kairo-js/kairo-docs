# @kairo-js/router

Minecraft Bedrock Edition용 애드온 간 통신 프레임워크. `router` 객체와 `ApiRegistration`를 사용하여 여러 비헤이비어 팩 간에 API 호출, 훅, 커스텀 이벤트를 활성화할 수 있습니다.

## 사용 가능한 버전

- `0.3.0-beta.0`

## 클래스

- [AddonActivateAfterEvent](/ko/api/addon-activate-after-event)
- [AddonDeactivateBeforeEvent](/ko/api/addon-deactivate-before-event)
- [AddonEventRegistration](/ko/api/addon-event-registry)
- [KairoAfterEvents](/ko/api/kairo-after-events)
- [ApiRegistration](/ko/api/kairo-api-registry)
- [KairoBeforeEvents](/ko/api/kairo-before-events)
- [KairoContext](/ko/api/kairo-context)
- [KairoCustomCommandRegistry](/ko/api/kairo-custom-command-registry)
- [KairoRouter](/ko/api/kairo-router)
- [KairoStartupBeforeEvent](/ko/api/kairo-startup-before-event)

## 인터페이스

- [AddonEventRegistration](/ko/api/addon-event-registry)
- [AfterHookContext](/ko/api/after-hook-context)
- [ApiHandlerContext](/ko/api/api-handler-context)
- [ApiRegistration](/ko/api/kairo-api-registry)
- [BeforeHookContext](/ko/api/before-hook-context)
- [CanceledResult](/ko/api/canceled-result)
- [Disposable](/ko/api/disposable)
- [HookOptions](/ko/api/hook-options)
- [HookRollbackContext](/ko/api/hook-rollback-context)
- [KairoRegistry](/ko/api/kairo-registry)
- [Subscribable](/ko/api/subscribable)

## 타입

- [DeepReadonly](/ko/api/deep-readonly)
- [ProtocolStage](/ko/api/protocol-stage)

## 에러

- [AfterHookExecutionError](/ko/api/after-hook-execution-error)
- [ApiNotFoundError](/ko/api/api-not-found-error)
- [BeforeHookExecutionError](/ko/api/before-hook-execution-error)
- [HandlerExecutionError](/ko/api/handler-execution-error)
- [ProtocolError](/ko/api/protocol-error)
- [RequestTimeoutError](/ko/api/request-timeout-error)

## 객체

### router

`static readonly router: KairoRouter`

애드온 라이프사이클, API 통신, 이벤트를 관리하는 메인 클래스. kairo-router 패키지의 기본 진입점입니다.

**타입:** [`KairoRouter`](/ko/api/kairo-router)
