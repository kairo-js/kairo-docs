# SupportedTag

`import { SupportedTag } from '@kairo-js/properties'`

애드온의 지원 상태를 나타내는 태그 상수를 정의하는 열거형입니다. `AddonProperties.tags`에 사용됩니다.

```typescript
enum SupportedTag {
  Official = 'official',
  Approved = 'approved',
  Stable = 'stable',
  Experimental = 'experimental',
}
```

## 멤버

### Official

`Official = 'official'`

공식적으로 지원되는 애드온임을 나타냅니다.

---

### Approved

`Approved = 'approved'`

검토 및 승인된 애드온임을 나타냅니다.

---

### Stable

`Stable = 'stable'`

안정적으로 동작하는 애드온임을 나타냅니다.

---

### Experimental

`Experimental = 'experimental'`

실험적 기능을 포함하는 애드온임을 나타냅니다.
