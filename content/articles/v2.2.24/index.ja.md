### 🐛 不具合修正

* **[server]** ゲートウェイで、リクエストに含まれるアプリケーション名の検証と、アプリケーション間の状態分離が正しく行われない問題を修正しました。 ([#10548](https://github.com/nocobase/nocobase/pull/10548)) by @2013xile
* **[AIワーカー]** AI 会話で、OpenAI の 2 種類の API モードに対して一貫したセッション単位のプロンプトキャッシュキーを渡すようにし、互換ゲートウェイでチャネルアフィニティを維持しやすくしました。 ([#10788](https://github.com/nocobase/nocobase/pull/10788)) by @cgyrock
