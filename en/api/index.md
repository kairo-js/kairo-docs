# @kairo-js/router

Inter-addon communication framework for Minecraft Bedrock Edition. Use the `router` object and `KairoApiRegistry` to enable API calls, hooks, and custom events across multiple behavior packs.

## Available Versions

- `0.3.0-beta.0`

## Classes

- [AddonActivateAfterEvent](/en/api/addon-activate-after-event)
- [AddonDeactivateBeforeEvent](/en/api/addon-deactivate-before-event)
- [AddonEventRegistry](/en/api/addon-event-registry)
- [KairoAfterEvents](/en/api/kairo-after-events)
- [KairoApiRegistry](/en/api/kairo-api-registry)
- [KairoBeforeEvents](/en/api/kairo-before-events)
- [KairoContext](/en/api/kairo-context)
- [KairoCustomCommandRegistry](/en/api/kairo-custom-command-registry)
- [KairoRouter](/en/api/kairo-router)
- [KairoStartupBeforeEvent](/en/api/kairo-startup-before-event)

## Interfaces

- [Disposable](/en/api/disposable)
- [KairoRegistry](/en/api/kairo-registry)
- [Subscribable](/en/api/subscribable)

## Types

- [AfterHookContext](/en/api/after-hook-context)
- [BeforeHookContext](/en/api/before-hook-context)
- [CancelledResult](/en/api/cancelled-result)
- [HookOptions](/en/api/hook-options)
- [HookRollbackContext](/en/api/hook-rollback-context)

## Errors

- [AfterHookExecutionError](/en/api/after-hook-execution-error)
- [ApiNotFoundError](/en/api/api-not-found-error)
- [BeforeHookExecutionError](/en/api/before-hook-execution-error)
- [HandlerExecutionError](/en/api/handler-execution-error)
- [ProtocolError](/en/api/protocol-error)
- [RequestTimeoutError](/en/api/request-timeout-error)

## Objects

### router

`static readonly router: KairoRouter`

Main class managing addon lifecycle, API communication, and events. This is the primary entry point of the kairo-router package.

**Type:** [`KairoRouter`](/en/api/kairo-router)
