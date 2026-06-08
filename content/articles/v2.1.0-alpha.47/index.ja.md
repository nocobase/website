### 🎉 新機能

- **[undefined]** CLI における管理対象アプリとプラグイン管理を改善しました。appPath ベースの環境処理、プラグインのインポート、ライセンスプラグインの同期、および関連ドキュメントの更新を含みます。 ([#9655](https://github.com/nocobase/nocobase/pull/9655)) by @chenos
  参考: [CLI ドキュメント](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [クイックスタート](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
- **[Block: Gantt]** ガントチャートブロックに、デフォルトで今日にフォーカスするオプションを追加しました。 ([#9692](https://github.com/nocobase/nocobase/pull/9692)) by @jiannx
- **[Multi-space]** マルチスペースプラグインに client v2 サポートを追加しました（スペース切り替えとスペース管理を含む）。 by @jiannx

### 🚀 機能改善

- **[Workflow]** ワークフロー実行履歴とビジネストランザクションの結合を解除しました。 ([#9668](https://github.com/nocobase/nocobase/pull/9668)) by @mytharcher
- **[UI templates]** UI テンプレートを client v2 に移行しました。 ([#9591](https://github.com/nocobase/nocobase/pull/9591)) by @gchust
- **[Multi-keyword filter]** マルチキーワードフィルターを client v2 に移行しました。 ([#9691](https://github.com/nocobase/nocobase/pull/9691)) by @gchust
- **[Workflow: Subflow]** サブフローワークフロー命令における実行履歴トランザクションの結合を解除しました。 by @mytharcher
- **[Workflow: Approval]** 承認ワークフロー命令における実行履歴トランザクションの結合を解除しました。 by @mytharcher

### 🐛 不具合修正

- **[client]** 非表示のリンクフィールドに古い値が残る問題を修正しました。 ([#9687](https://github.com/nocobase/nocobase/pull/9687)) by @zhangzhonghe
- **[Action: Import records]** インポートされたレコードに重複したソート値が生成される問題を修正しました。 ([#9684](https://github.com/nocobase/nocobase/pull/9684)) by @2013xile
- **[Flow engine]** 参照テンプレートブロックをコピーに変換する際のエラーを修正しました。 ([#9693](https://github.com/nocobase/nocobase/pull/9693)) by @gchust
- **[Block: Map]** 詳細ページの地図フィールドで、テキスト表示と地図表示の切り替え時に値が誤って変換され表示が異常になる問題を修正しました。 ([#9653](https://github.com/nocobase/nocobase/pull/9653)) by @hongboji
- **[Workflow]** 複数ワーカーによる同時実行時にワークフローが重複してディスパッチされる問題を修正しました。 ([#9673](https://github.com/nocobase/nocobase/pull/9673)) by @mytharcher
- **[Workflow: Approval]** 承認フォーム詳細にカスタムフィールドタイトルが表示されない問題を修正しました。 by @zhangzhonghe
