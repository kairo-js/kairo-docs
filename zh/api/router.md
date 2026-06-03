# @kairo-js/router

适用于 Minecraft 基岩版的插件间通信框架。使用 `router` 对象和 `KairoApiRegistry`，可在多个行为包之间实现 API 调用、钩子以及自定义事件。

## 可用版本

- `0.3.0-beta.0`

## 类

- [AddonActivateAfterEvent](/zh/api/addon-activate-after-event)
- [AddonDeactivateBeforeEvent](/zh/api/addon-deactivate-before-event)
- [AddonEventRegistry](/zh/api/addon-event-registry)
- [KairoAfterEvents](/zh/api/kairo-after-events)
- [KairoApiRegistry](/zh/api/kairo-api-registry)
- [KairoBeforeEvents](/zh/api/kairo-before-events)
- [KairoContext](/zh/api/kairo-context)
- [KairoCustomCommandRegistry](/zh/api/kairo-custom-command-registry)
- [KairoRouter](/zh/api/kairo-router)
- [KairoStartupBeforeEvent](/zh/api/kairo-startup-before-event)

## 接口

- [Disposable](/zh/api/disposable)
- [KairoRegistry](/zh/api/kairo-registry)
- [Subscribable](/zh/api/subscribable)

## 类型

- [AfterHookContext](/zh/api/after-hook-context)
- [BeforeHookContext](/zh/api/before-hook-context)
- [CancelledResult](/zh/api/cancelled-result)
- [HookOptions](/zh/api/hook-options)
- [HookRollbackContext](/zh/api/hook-rollback-context)

## 错误

- [AfterHookExecutionError](/zh/api/after-hook-execution-error)
- [ApiNotFoundError](/zh/api/api-not-found-error)
- [BeforeHookExecutionError](/zh/api/before-hook-execution-error)
- [HandlerExecutionError](/zh/api/handler-execution-error)
- [ProtocolError](/zh/api/protocol-error)
- [RequestTimeoutError](/zh/api/request-timeout-error)

## 对象

### router

`static readonly router: KairoRouter`

管理插件生命周期、API 通信和事件的主类。这是 kairo-router 包的主要入口点。

**类型：** [`KairoRouter`](/zh/api/kairo-router)
