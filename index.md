---
layout: home

hero:
  name: Kairo
  text: Inter-Addon Communication Library
  tagline: A framework for Minecraft Bedrock Edition that lets multiple addons call each other's APIs. Just add kairo-router and you're ready to go.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: GitHub
      link: https://github.com/kairo-js

features:
  - title: Simple API Calls
    details: Call another addon's functions with router.send() / router.request() — just specify the addonId and API name.
  - title: Hook System
    details: Intercept any addon's API calls with before/after hooks. Supports argument mutation, cache short-circuits, and rollback.
  - title: TypeScript Support
    details: Type-safe generics validate arguments and return types at compile time. Plain JavaScript is also supported.
---
