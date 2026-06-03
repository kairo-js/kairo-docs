# @kairo-js/router

Minecraft Bedrock Edition のアドオン間通信フレームワーク。`router` オブジェクトと `ApiRegistration` を使って、複数のビヘイビアーパック間での API 呼び出し・フック・カスタムイベントを実現します。

## Available Versions

- `0.3.0-beta.0`

## Classes

- [AddonActivateAfterEvent](/ja/api/addon-activate-after-event)
- [AddonDeactivateBeforeEvent](/ja/api/addon-deactivate-before-event)
- [AddonEventRegistration](/ja/api/addon-event-registry)
- [KairoAfterEvents](/ja/api/kairo-after-events)
- [ApiRegistration](/ja/api/kairo-api-registry)
- [KairoBeforeEvents](/ja/api/kairo-before-events)
- [KairoContext](/ja/api/kairo-context)
- [KairoCustomCommandRegistry](/ja/api/kairo-custom-command-registry)
- [KairoRouter](/ja/api/kairo-router)
- [KairoStartupBeforeEvent](/ja/api/kairo-startup-before-event)

## Interfaces

- [AfterHookContext](/ja/api/after-hook-context)
- [BeforeHookContext](/ja/api/before-hook-context)
- [CancelledResult](/ja/api/cancelled-result)
- [Disposable](/ja/api/disposable)
- [HookOptions](/ja/api/hook-options)
- [HookRollbackContext](/ja/api/hook-rollback-context)
- [KairoRegistry](/ja/api/kairo-registry)
- [Subscribable](/ja/api/subscribable)

## Types

- [DeepReadonly](/ja/api/deep-readonly)
- [ProtocolStage](/ja/api/protocol-stage)

## Errors

- [AfterHookExecutionError](/ja/api/after-hook-execution-error)
- [ApiNotFoundError](/ja/api/api-not-found-error)
- [BeforeHookExecutionError](/ja/api/before-hook-execution-error)
- [HandlerExecutionError](/ja/api/handler-execution-error)
- [ProtocolError](/ja/api/protocol-error)
- [RequestTimeoutError](/ja/api/request-timeout-error)

## Objects

### router

`static readonly router: KairoRouter`

アドオンのライフサイクル・API 通信・イベントを管理するクラスです。kairo-router パッケージのメインエントリーポイントです。

**型:** [`KairoRouter`](/ja/api/kairo-router)
