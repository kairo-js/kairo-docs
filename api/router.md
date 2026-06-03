# @kairo-js/router

Inter-addon communication framework for Minecraft Bedrock Edition. Use the `router` object and `ApiRegistration` to enable API calls, hooks, and custom events across multiple behavior packs.

## Available Versions

- `0.3.0-beta.0`

## Classes

- [AddonActivateAfterEvent](/api/addon-activate-after-event)
- [AddonDeactivateBeforeEvent](/api/addon-deactivate-before-event)
- [AddonEventRegistration](/api/addon-event-registry)
- [KairoAfterEvents](/api/kairo-after-events)
- [ApiRegistration](/api/kairo-api-registry)
- [KairoBeforeEvents](/api/kairo-before-events)
- [KairoContext](/api/kairo-context)
- [KairoCustomCommandRegistry](/api/kairo-custom-command-registry)
- [KairoRouter](/api/kairo-router)
- [KairoStartupBeforeEvent](/api/kairo-startup-before-event)

## Interfaces

- [AfterHookContext](/api/after-hook-context)
- [BeforeHookContext](/api/before-hook-context)
- [CancelledResult](/api/cancelled-result)
- [Disposable](/api/disposable)
- [HookOptions](/api/hook-options)
- [HookRollbackContext](/api/hook-rollback-context)
- [KairoRegistry](/api/kairo-registry)
- [Subscribable](/api/subscribable)

## Types

- [DeepReadonly](/api/deep-readonly)
- [ProtocolStage](/api/protocol-stage)

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

Main class managing addon lifecycle, API communication, and events. This is the primary entry point of the kairo-router package.

**Type:** [`KairoRouter`](/api/kairo-router)
