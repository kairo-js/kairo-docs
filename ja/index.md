---
layout: home

hero:
  name: Kairo
  text: アドオン間通信ライブラリ
  tagline: Minecraft Bedrock Edition で複数のアドオンが互いの API を呼び出せるようにするフレームワーク。kairo-router を組み込むだけで始められます。
  actions:
    - theme: brand
      text: はじめる
      link: /guide/
    - theme: alt
      text: GitHub
      link: https://github.com/kairo-js

features:
  - title: シンプルな API 呼び出し
    details: router.send() / router.request() で、addonId と API 名を指定するだけで他のアドオンの関数を呼び出せます。
  - title: フック機構
    details: before / after フックで他アドオンの API 呼び出しをインターセプト。引数改ざん・キャッシュ返却・ロールバックをサポートします。
  - title: TypeScript サポート
    details: 型安全なジェネリクス API で、引数・返り値をコンパイル時に検証できます。JavaScript からも利用可能です。
---
