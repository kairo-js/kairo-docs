# KairoStartupBeforeEvent

`import { router } from '@kairo-js/router'`

`router.beforeEvents.startup` のイベントオブジェクトです。ユーザーが直接インスタンス化することはありません。

Minecraft の `worldLoad` より前に発火します。API の登録・フック宣言・カスタムコマンド登録・イベント購読登録は、このイベントハンドラ内でのみ有効です。

## プロパティ

### api

`readonly api: ApiRegistration`

API の登録・フック宣言に使用。

---

### customCommandRegistry

`readonly customCommandRegistry: KairoCustomCommandRegistry`

カスタムコマンドの登録に使用。

---

### events

`readonly events: AddonEventRegistration`

アドオン間イベントの購読登録に使用。

---

## 使用例

```typescript
import { router } from '@kairo-js/router'

router.beforeEvents.startup.subscribe((ev) => {
  // API の登録
  ev.api.register<{ playerId: string }, { balance: number }>(
    'economy/getBalance',
    async ({ playerId }) => {
      return { balance: getBalance(playerId) }
    },
  )

  // 他アドオンのイベントを購読
  ev.events.on('other-addon', 'someEvent', (payload) => {
    console.log('イベントを受信:', payload)
  })

  // カスタムコマンドの登録
  ev.customCommandRegistry.registerCommand(
    { name: 'mycommand', description: 'My command' },
    (origin) => {
      return { success: true }
    },
  )
})
```
