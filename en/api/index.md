# @kairo-js/router

Inter-addon communication framework for Minecraft Bedrock Edition. Use the `router` object and `KairoApiRegistry` to enable API calls, hooks, and custom events across multiple behavior packs.

## Available Versions

- `0.3.0-beta.0`

## Classes

### [AddonActivateAfterEvent](/en/api/addon-activate-after-event)

Event object for the `addonActivate` after event, fired after an addon is activated.

### [AddonDeactivateBeforeEvent](/en/api/addon-deactivate-before-event)

Event object for the `addonDeactivate` before event, fired before an addon is deactivated.

### [AddonEventRegistry](/en/api/addon-event-registry)

Manages cross-addon custom event subscriptions and delivery. Accessed via `ev.events`.

### [KairoAfterEvents](/en/api/kairo-after-events)

After event subscription interface. Accessed via `router.afterEvents`.

### [KairoApiRegistry](/en/api/kairo-api-registry)

Handles API registration and hook management. Accessed via `ev.api` inside the startup event.

### [KairoBeforeEvents](/en/api/kairo-before-events)

Before event subscription interface. Accessed via `router.beforeEvents`.

### [KairoContext](/en/api/kairo-context)

Holds addon context and metadata. Accessed via `router.systemInfo`.

### [KairoCustomCommandRegistry](/en/api/kairo-custom-command-registry)

Registers Minecraft custom commands. Accessed via `ev.customCommandRegistry`.

### [KairoRouter](/en/api/kairo-router)

Main class managing addon lifecycle, API communication, and events. Exported as the `router` object.

### [KairoStartupBeforeEvent](/en/api/kairo-startup-before-event)

Event object for `router.beforeEvents.startup`. All API declarations happen here.

## Interfaces

### [Disposable](/en/api/disposable)

Represents a releasable resource, such as the return value of `subscribe()`.

### [KairoRegistry](/en/api/kairo-registry)

Represents registered addon info: addonId, version, dependencies, etc.

### [Subscribable](/en/api/subscribable)

Event subscription interface. The type of each property on `KairoBeforeEvents` / `KairoAfterEvents`.

## Types

### [AfterHookContext](/en/api/after-hook-context)

Context object type for after hooks. Allows mutating `result`.

### [BeforeHookContext](/en/api/before-hook-context)

Context object type for before hooks. Allows mutating `args` and calling `cancel()`.

### [CancelledResult](/en/api/cancelled-result)

Return value type of `router.request()` when the call is cancelled.

### [HookOptions](/en/api/hook-options)

Options type passed to `ev.api.hook()`. Contains `before`, `after`, and `rollback`.

### [HookRollbackContext](/en/api/hook-rollback-context)

Context object type for rollback hooks. Only fires when a before hook throws.

## Errors

### [AfterHookExecutionError](/en/api/after-hook-execution-error)

Thrown when an after hook throws. The handler result is discarded.

### [ApiNotFoundError](/en/api/api-not-found-error)

Thrown when the specified API name does not exist in the routing table.

### [BeforeHookExecutionError](/en/api/before-hook-execution-error)

Thrown when a before hook throws. Rollback has already been executed.

### [HandlerExecutionError](/en/api/handler-execution-error)

Thrown when the API handler throws.

### [ProtocolError](/en/api/protocol-error)

Thrown on ScriptEvent message parse failure or schema mismatch.

### [RequestTimeoutError](/en/api/request-timeout-error)

Thrown when `router.request()` times out.

## Objects

### router

`static readonly router: KairoRouter`

Main class managing addon lifecycle, API communication, and events. This is the primary entry point of the kairo-router package.

**Type:** [`KairoRouter`](/en/api/kairo-router)
