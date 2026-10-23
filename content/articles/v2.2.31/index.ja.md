### 🚀 機能改善

* [server] アプリケーションの実行中に、Snowflake の `workerId` を再バインドできるようにしました。 ([#11076](https://github.com/nocobase/nocobase/pull/11076?utm_source=chatgpt.com)) by @2013xile
* [ワークフロー] ワークフロー実行詳細ページのパフォーマンスを改善しました。初回表示時は各ノードの最新 Job のみを読み込み、ノードの実行履歴は必要に応じてカーソルベースのページネーションで取得するようにしました。また、一覧で扱うフィールドも削減しました。 ([#11094](https://github.com/nocobase/nocobase/pull/11094?utm_source=chatgpt.com)) by @mytharcher

### 🐛 不具合修正

- [AIワーカー]

* Qwen/DashScope Endpoint のベクトルレスポンスに関するエンコーディングの互換性問題を修正し、ドキュメントとクエリのベクトル次元が一致しなくなる問題を解消しました。影響を受けた既存のナレッジベースは、再ベクトル化が必要です。 ([#11074](https://github.com/nocobase/nocobase/pull/11074?utm_source=chatgpt.com)) by @cgyrock
* 連動ルールによって AIワーカーボタンが非表示になっている場合、ページ設定を有効にするとページがフリーズする問題を修正しました。 ([#11100](https://github.com/nocobase/nocobase/pull/11100?utm_source=chatgpt.com)) by @hongboji参考ドキュメント：[flow-model.md](https://github.com/nocobase/nocobase/blob/fix/plugin-ai-hidden-ai-employee-freeze/packages/core/client/docs/zh-CN/api/flow-engine/flow-model.md?utm_source=chatgpt.com#L176-L181)
