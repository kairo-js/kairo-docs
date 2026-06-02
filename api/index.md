# @kairo-js/router

Minecraft Bedrock Edition のアドオン間通信フレームワーク。`router` オブジェクトと `KairoApiRegistry` を使って、複数のビヘイビアーパック間での API 呼び出し・フック・カスタムイベントを実現します。

## Available Versions

- `0.3.0-beta.0`

## Classes

- [AddonActivateAfterEvent](/api/addon-activate-after-event)
- [AddonDeactivateBeforeEvent](/api/addon-deactivate-before-event)
- [AddonEventRegistry](/api/addon-event-registry)
- [KairoAfterEvents](/api/kairo-after-events)
- [KairoApiRegistry](/api/kairo-api-registry)
- [KairoBeforeEvents](/api/kairo-before-events)
- [KairoContext](/api/kairo-context)
- [KairoCustomCommandRegistry](/api/kairo-custom-command-registry)
- [KairoRouter](/api/kairo-router)
- [KairoStartupBeforeEvent](/api/kairo-startup-before-event)

## Interfaces

- [Disposable](/api/disposable)
- [KairoRegistry](/api/kairo-registry)
- [Subscribable](/api/subscribable)

## Types

- [AfterHookContext](/api/after-hook-context)
- [BeforeHookContext](/api/before-hook-context)
- [CancelledResult](/api/cancelled-result)
- [HookOptions](/api/hook-options)
- [HookRollbackContext](/api/hook-rollback-context)

## Errors

- [AfterHookExecutionError](/api/after-hook-execution-error)
- [ApiNotFoundError](/api/api-not-found-error)
- [BeforeHookExecutionError](/api/before-hook-execution-error)
- [HandlerExecutionError](/api/handler-execution-error)
- [ProtocolError](/api/protocol-error)
- [RequestTimeoutError](/api/request-timeout-error)

## Objects

### router

`static readonly router: KairoRouter`

アドオンのライフサイクル・API 通信・イベントを管理するクラスです。kairo-router パッケージのメインエントリーポイントです。

**型:** [`KairoRouter`](/api/kairo-router)
