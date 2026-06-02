# @kairo-js/router

Minecraft Bedrock Edition のアドオン間通信フレームワーク。`router` オブジェクトと `KairoApiRegistry` を使って、複数のビヘイビアーパック間での API 呼び出し・フック・カスタムイベントを実現します。

## Available Versions

- `0.3.0-beta.0`

## Classes

### [AddonActivateAfterEvent](/api/addon-activate-after-event)

アドオンが起動された後に発火する `addonActivate` イベントのイベントオブジェクト。

### [AddonDeactivateBeforeEvent](/api/addon-deactivate-before-event)

アドオンが停止される前に発火する `addonDeactivate` イベントのイベントオブジェクト。

### [AddonEventRegistry](/api/addon-event-registry)

アドオン間のカスタムイベント購読・配信を管理するクラス。`ev.events` 経由でアクセスします。

### [KairoAfterEvents](/api/kairo-after-events)

after イベントの購読インターフェース。`router.afterEvents` からアクセスします。

### [KairoApiRegistry](/api/kairo-api-registry)

API 登録とフック管理を行うクラス。startup イベント内で `ev.api` 経由でアクセスします。

### [KairoBeforeEvents](/api/kairo-before-events)

before イベントの購読インターフェース。`router.beforeEvents` からアクセスします。

### [KairoContext](/api/kairo-context)

アドオンのコンテキスト・メタデータを保持するクラス。`router.systemInfo` からアクセスします。

### [KairoCustomCommandRegistry](/api/kairo-custom-command-registry)

Minecraft カスタムコマンドを登録するクラス。`ev.customCommandRegistry` 経由でアクセスします。

### [KairoRouter](/api/kairo-router)

アドオンのライフサイクル・API 通信・イベントを管理するメインクラス。`router` オブジェクトとして export されます。

### [KairoStartupBeforeEvent](/api/kairo-startup-before-event)

`router.beforeEvents.startup` のイベントオブジェクト。API の登録はここで行います。

## Interfaces

### [Disposable](/api/disposable)

解放可能なリソースを表すインターフェース。`subscribe()` の返り値など。

### [KairoRegistry](/api/kairo-registry)

アドオンの登録情報（addonId・バージョン・依存関係など）を表すインターフェース。

### [Subscribable](/api/subscribable)

イベント購読インターフェース。`KairoBeforeEvents` / `KairoAfterEvents` の各プロパティの型。

## Types

### [AfterHookContext](/api/after-hook-context)

after フックのコンテキストオブジェクトの型。`result` の改ざんが可能。

### [BeforeHookContext](/api/before-hook-context)

before フックのコンテキストオブジェクトの型。`args` の改ざん・キャンセルが可能。

### [CancelledResult](/api/cancelled-result)

`router.request()` がキャンセルされた場合の返り値の型。

### [HookOptions](/api/hook-options)

`ev.api.hook()` に渡すオプションの型。`before` / `after` / `rollback` を含む。

### [HookRollbackContext](/api/hook-rollback-context)

`rollback` フックのコンテキストオブジェクトの型。before フックが例外をスローした場合のみ発火。

## Errors

### [AfterHookExecutionError](/api/after-hook-execution-error)

after フックが例外をスローした場合にスローされるエラー。ハンドラの結果は破棄される。

### [ApiNotFoundError](/api/api-not-found-error)

指定した API 名がルーティングテーブルに存在しない場合にスローされるエラー。

### [BeforeHookExecutionError](/api/before-hook-execution-error)

before フックが例外をスローした場合にスローされるエラー。ロールバック実行済み。

### [HandlerExecutionError](/api/handler-execution-error)

API ハンドラが例外をスローした場合にスローされるエラー。

### [ProtocolError](/api/protocol-error)

ScriptEvent メッセージのパース失敗・スキーマ不一致の場合にスローされるエラー。

### [RequestTimeoutError](/api/request-timeout-error)

`router.request()` がタイムアウトした場合にスローされるエラー。

## Objects

### router

`static readonly router: KairoRouter`

アドオンのライフサイクル・API 通信・イベントを管理するクラスです。kairo-router パッケージのメインエントリーポイントです。

**型:** [`KairoRouter`](/api/kairo-router)
