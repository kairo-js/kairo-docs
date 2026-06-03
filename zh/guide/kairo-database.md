# Kairo Database

Kairo Database 是一个为 Kairo 附加包提供持久化键值存储的行为包，是 Kairo 的必需伴侣包。

## 稳定性保证

**自版本 2.0.0 起，Kairo Database 原则上不再进行更新。** 其 UUID 和内部格式已固定，写入的数据将永久保留 — 即使 Kairo 本体以新 UUID 更新后也不例外。

这是有意为之的设计。Kairo Database 作为长期数据保存层，其 UUID 不能改变，这样才能保证数据在 Kairo 版本更新后依然可以继承。

## 存储

数据使用 Minecraft 的 Dynamic Properties API 进行存储。较大的数据会自动分块写入并在读取时重新拼接，因此在实际使用中存储空间几乎没有限制。

## 安装

1. 从 [GitHub Releases](https://github.com/kairo-js/kairo-database/releases) 下载 `kairo-database.mcpack`
2. 与 Kairo 一起将行为包应用到世界

## 使用方法

通过 `@kairo-js/router` 访问存储。Kairo Database 本身不对外暴露任何直接 API。

### 保存

```typescript
await router.save('my-key', { score: 100 })
```

### 读取

```typescript
const value = await router.load<{ score: number }>('my-key')
// 如果不存在则返回 undefined
```

### 检查存在性

```typescript
const exists = await router.has('my-key')
```

### 删除

```typescript
await router.delete('my-key')
```

### 读取其他附加包的数据

```typescript
const value = await router.load('their-key', { addonId: 'other-addon' })
const exists = await router.has('their-key', { addonId: 'other-addon' })
```

完整的方法签名请参见 [`KairoRouter`](/zh/api/kairo-router)。
