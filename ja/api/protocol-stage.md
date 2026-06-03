# ProtocolStage

`import type { ProtocolStage } from '@kairo-js/router'`

アドオン間 API パイプラインのどのフェーズで [`ProtocolError`](/ja/api/protocol-error) が発生したかを示す union 型です。

```typescript
type ProtocolStage = 'ApiCall' | 'ApiInvoke' | 'ApiResult' | 'ApiHandlerResponse'
```

## 値

| 値 | 方向 | 説明 |
|---|---|---|
| `'ApiCall'` | caller → kairo | 呼び出し元が API 呼び出しメッセージを送信した。 |
| `'ApiInvoke'` | kairo → target | kairo がハンドラアドオンに invoke を送信した。 |
| `'ApiHandlerResponse'` | target → kairo | ハンドラアドオンが kairo に結果を返した。 |
| `'ApiResult'` | kairo → caller | kairo が呼び出し元に最終結果を配信した。 |
