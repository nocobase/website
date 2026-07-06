### 🚀 機能改善

* **[cli]** CLI の setup 起動フローをリファクタリングし、`<span>nb app start</span>` を再利用するようにしました。API base path のリダイレクト動作を統一し、共有プロキシのデフォルト設定を env に永続化しました。また、Docker のプロキシポートが変更された場合に、コンテナを自動的に再構築するようにしました。 ([#9997](https://github.com/nocobase/nocobase/pull/9997)) by @chenos
