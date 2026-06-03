# Kairo

Kairo は、Minecraft Bedrock Edition でアドオン間通信を実現するホスト型ビヘイビアーパックです。ワールド内のすべてのアドオンのライフサイクル（Discovery・Registration・Activation）を管理し、API 呼び出しやイベントのルーティングを担います。

## 動作要件

Kairo を使用するには **kairo-database** を同時にインストールする必要があります。kairo-database は、Kairo がバージョンアップをまたいでセッションデータを保持するための永続ストアを提供します。

## インストール

1. [GitHub Releases](https://github.com/kairo-js/kairo/releases) から `kairo.mcpack` をダウンロード
2. [GitHub Releases](https://github.com/kairo-js/kairo-database/releases) から `kairo-database.mcpack` をダウンロード
3. 両方のビヘイビアーパックをワールドに適用

インストール後、`@kairo-js/router` を使用しているアドオンは、ワールドロード時に自動で検出・依存関係順に起動されます。

## アドオンの開発

アドオン開発はすべて [`@kairo-js/router`](/ja/guide/) を通じて行います。Kairo 自体には設定は不要で、インストールするだけで動作します。

## カスタムコマンド

Kairo は `/kairo:addons` コマンドをゲーム内に登録します。実行には **Game Directors** の権限が必要です。

### `/kairo:addons list`

登録済みアドオンの一覧と現在の状態を表示します。

### `/kairo:addons open`

実行したプレイヤーに Kairo 管理 UI を開きます。

### `/kairo:addons enable <addonId> <version>`

指定したアドオンの指定バージョンを有効化します。

```
/kairo:addons enable economy-addon 1.2.0
```

### `/kairo:addons disable <addonId>`

アドオンを無効化します。`kairo` と `kairo-database` は無効化できません。

```
/kairo:addons disable economy-addon
```

### `/kairo:addons status <addonId>`

アドオンの詳細な状態（インストール済みバージョン・非アクティブ理由など）を表示します。

```
/kairo:addons status economy-addon
```
