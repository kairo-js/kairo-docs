# KairoContext

`import { router } from '@kairo-js/router'`

`router.systemInfo` からアクセスするクラスです。アドオンのコンテキスト情報を提供します。

## プロパティ

### addonProperties

`readonly addonProperties:` [`AddonProperties`](/ja/api/properties/addon-properties)

アドオンの設定情報。

---

### kairoId

`readonly kairoId: string`

Kairo が割り当てた内部 ID。登録前にアクセスするとエラーをスロー。

---

### kairoRegistry

`readonly kairoRegistry:` [`KairoRegistry`](/ja/api/kairo-registry)

レジストリ情報。登録前にアクセスするとエラーをスロー。

---

## メソッド

- [isActive](#isactive)
- [isRegistered](#isregistered)

### isActive {#isactive}

```typescript
isActive(): boolean
```

アドオンが ACTIVE 状態かどうかを返します。

**返り値:** `boolean`

---

### isRegistered {#isregistered}

```typescript
isRegistered(): boolean
```

アドオンが登録済みかどうかを返します。`kairoId` や `kairoRegistry` へのアクセス前にこのメソッドで確認できます。

**返り値:** `boolean`
