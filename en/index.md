---
layout: home

hero:
  name: Kairo
  text: Inter-Addon Communication Framework
  tagline: A framework for Minecraft Bedrock Edition that enables communication and dependency management across multiple behavior packs via ScriptAPI.
  actions:
    - theme: brand
      text: Get Started
      link: /en/guide/
    - theme: alt
      text: GitHub
      link: https://github.com/kairo-js

features:
  - title: Inter-Addon API Calls
    details: A routing layer built on ScriptEvent lets addons call each other's functions using only an addonId and API name.
  - title: Hook System
    details: Intercept any addon's API calls with before/after hooks. Supports argument mutation, cache short-circuits, and rollback.
  - title: Dependency Management
    details: semver-based dependency declarations handle startup ordering, conflict resolution, and cascade deactivation automatically.
  - title: TypeScript Support
    details: Type-safe generics for register / hook / send / request validate arguments and return types at compile time.
---
