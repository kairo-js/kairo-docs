# SupportedTag

`import { SupportedTag } from '@kairo-js/properties'`

アドオンのサポート状態を示すタグの定数を定義する列挙型です。`AddonProperties.tags` の値として使用できます。

```typescript
enum SupportedTag {
  Official = "official",
  Approved = "approved",
  Stable = "stable",
  Experimental = "experimental",
}
```

## メンバー

### Official

値: `"official"`

公式サポートのアドオンであることを示すタグ。

---

### Approved

値: `"approved"`

承認済みのアドオンであることを示すタグ。

---

### Stable

値: `"stable"`

安定版のアドオンであることを示すタグ。

---

### Experimental

値: `"experimental"`

実験的なアドオンであることを示すタグ。
