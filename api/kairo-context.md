# KairoContext

`import { router } from '@kairo-js/router'`

`router.systemInfo` からアクセスするクラスです。アドオンのコンテキスト情報を提供します。

## プロパティ

| プロパティ | 型 | 説明 |
|---|---|---|
| `addonProperties` | `AddonProperties` (readonly) | アドオンの設定情報 |
| `kairoId` | `string` (getter) | Kairo が割り当てた内部 ID。登録前にアクセスするとエラーをスロー |
| `kairoRegistry` | `KairoRegistry` (getter) | レジストリ情報。登録前にアクセスするとエラーをスロー |

## メソッド

### isActive()

```typescript
isActive(): boolean
```

アドオンが ACTIVE 状態かどうかを返します。

**返り値:** `boolean`

---

### isRegistered()

```typescript
isRegistered(): boolean
```

アドオンが登録済みかどうかを返します。`kairoId` や `kairoRegistry` へのアクセス前にこのメソッドで確認できます。

**返り値:** `boolean`
