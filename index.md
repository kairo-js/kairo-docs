---
layout: home

hero:
  name: Kairo
  text: アドオン間通信フレームワーク
  tagline: Minecraft Bedrock Edition の ScriptAPI を活用し、複数のビヘイビアーパック間での通信・依存管理を実現するフレームワーク
  actions:
    - theme: brand
      text: はじめる
      link: /guide/
    - theme: alt
      text: GitHub
      link: https://github.com/kairo-js

features:
  - title: アドオン間 API 通信
    details: ScriptEvent を使ったルーティング層により、アドオン同士が addonId と API 名だけで互いの関数を呼び出せます。
  - title: フック機構
    details: before / after フックで任意のアドオンの API 呼び出しをインターセプト。引数改ざん・キャッシュ返却・ロールバックをサポートします。
  - title: 依存関係管理
    details: semver ベースの依存宣言により、アドオン間の起動順序・競合解決・カスケード停止を自動で処理します。
  - title: TypeScript サポート
    details: 型安全なジェネリクス API で、register / hook / send / request の引数・返り値をコンパイル時に検証できます。
---
