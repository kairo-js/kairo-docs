# Kairo Database

Kairo Database は、Kairo アドオン向けの永続 KV ストアを提供するビヘイビアーパックです。Kairo の必須コンパニオンパックです。

## 安定性の保証

**バージョン 2.0.0 以降、Kairo Database は原則としてアップデートを行いません。** UUID と内部フォーマットは固定されており、一度書き込んだデータは半永久的に保持されます — Kairo 本体が新 UUID でアップデートされた後も同様です。

これは意図的な設計です。Kairo Database は長期的なデータ保存層として機能し、その UUID が変わらないことが、Kairo のバージョンアップをまたいだデータ引き継ぎを保証します。

## ストレージ

データは Minecraft の Dynamic Properties API を使って保存されます。大きなデータは自動的にチャンクに分割して書き込み・読み込みされるため、実用上はほぼ無制限に保存できます。

## インストール

1. [GitHub Releases](https://github.com/kairo-js/kairo-database/releases) から `kairo-database.mcpack` をダウンロード
2. Kairo と一緒にビヘイビアーパックをワールドに適用

## 使い方

ストレージへのアクセスは `@kairo-js/router` を通じて行います。Kairo Database 自体が直接 API を公開することはありません。

### 保存

```typescript
await router.save('my-key', { score: 100 })
```

### 読み込み

```typescript
const value = await router.load<{ score: number }>('my-key')
// 存在しない場合は undefined
```

### 存在確認

```typescript
const exists = await router.has('my-key')
```

### 削除

```typescript
await router.delete('my-key')
```

### 他のアドオンのデータを読み込む

```typescript
const value = await router.load('their-key', { addonId: 'other-addon' })
const exists = await router.has('their-key', { addonId: 'other-addon' })
```

メソッドの詳細は [`KairoRouter`](/ja/api/kairo-router) を参照してください。
