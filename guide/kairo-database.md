# Kairo Database

Kairo Database is a behavior pack that provides persistent key-value storage for Kairo addons. It is a required companion pack for Kairo.

## Stability Guarantee

**As of version 2.0.0, Kairo Database will receive no further updates under normal circumstances.** Its UUID and internal format are frozen. Data written to Kairo Database persists indefinitely — even when Kairo itself is updated or reinstalled with a new UUID.

This stability is intentional. Kairo Database exists solely as a long-lived data layer, and its identity must never change for data to survive across Kairo version updates.

## Storage

Data is stored using Minecraft's Dynamic Properties API. Large values are automatically split into chunks and reassembled on read, making storage effectively unlimited for practical use.

## Installation

1. Download `kairo-database.mcpack` from [GitHub Releases](https://github.com/kairo-js/kairo-database/releases)
2. Apply the behavior pack to your world alongside Kairo

## Usage

Storage is accessed through `@kairo-js/router`. Kairo Database does not expose any direct API.

### Save

```typescript
await router.save('my-key', { score: 100 })
```

### Load

```typescript
const value = await router.load<{ score: number }>('my-key')
// undefined if not found
```

### Check existence

```typescript
const exists = await router.has('my-key')
```

### Delete

```typescript
await router.delete('my-key')
```

### Read another addon's data

```typescript
const value = await router.load('their-key', { addonId: 'other-addon' })
const exists = await router.has('their-key', { addonId: 'other-addon' })
```

See [`KairoRouter`](/api/kairo-router) for full method signatures.
