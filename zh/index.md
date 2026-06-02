---
layout: home

hero:
  name: Kairo
  text: 插件间通信库
  tagline: 一个适用于 Minecraft 基岩版的框架，允许多个插件互相调用 API。只需添加 kairo-router，即可立即上手。
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/guide/
    - theme: alt
      text: GitHub
      link: https://github.com/kairo-js

features:
  - title: 简洁的 API 调用
    details: 使用 router.send() / router.request() 调用其他插件的函数 — 只需指定 addonId 和 API 名称即可。
  - title: 钩子系统
    details: 通过 before/after 钩子拦截任意插件的 API 调用。支持参数修改、缓存短路以及回滚操作。
  - title: TypeScript 支持
    details: 类型安全的泛型在编译时验证参数和返回值类型。同样支持原生 JavaScript。
---
