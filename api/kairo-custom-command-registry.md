# KairoCustomCommandRegistry

`import { router } from '@kairo-js/router'`

`ev.customCommandRegistry` 経由でアクセスするクラスです。`router.beforeEvents.startup` イベント内で Minecraft カスタムコマンドを登録します。

## メソッド

### registerCommand()

```typescript
registerCommand(
  customCommand: CustomCommand,
  callback: (origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined,
): void
```

Minecraft カスタムコマンドを登録します。

| パラメーター | 型 | 説明 |
|---|---|---|
| `customCommand` | `CustomCommand` | コマンドの定義情報 |
| `callback` | `(origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult \| undefined` | コマンド実行時のハンドラ |

**返り値:** `void`

---

### registerEnum()

```typescript
registerEnum(name: string, values: string[]): void
```

コマンド引数用の enum 値を登録します。`CustomCommand` の引数定義で参照できます。

| パラメーター | 型 | 説明 |
|---|---|---|
| `name` | `string` | enum の名前 |
| `values` | `string[]` | enum の選択肢 |

**返り値:** `void`

## 使用例

```typescript
import { router } from '@kairo-js/router'

router.beforeEvents.startup.subscribe((ev) => {
  // enum の登録
  ev.customCommandRegistry.registerEnum('myAddon:targetType', ['player', 'entity', 'block'])

  // コマンドの登録
  ev.customCommandRegistry.registerCommand(
    {
      name: 'myaddon:spawn',
      description: 'エンティティをスポーンさせます',
      permissionLevel: 'any',
      mandatoryParameters: [
        { name: 'type', type: 'enum', enumName: 'myAddon:targetType' },
      ],
    },
    (origin, type) => {
      console.log(`コマンド実行: type=${type}`)
      return { success: true }
    },
  )
})
```
