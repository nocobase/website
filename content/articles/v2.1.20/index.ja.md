### 🚀 機能改善

* **[cli]**
  * Docker CLI のインストール手順を改善しました。デフォルトの NocoBase イメージリポジトリとバリアントを設定できるようにし、プロキシと `<span>no-nginx</span>` イメージのポート互換性を修正しました。また、Docker Nginx/Caddy のインストールドキュメントも追加しました。 ([#9972](https://github.com/nocobase/nocobase/pull/9972)) by @chenos
  * CLI の setup 起動フローをリファクタリングし、`<span>nb app start</span>` を再利用するようにしました。API base path のリダイレクト動作を統一し、共有プロキシのデフォルト設定を env に永続化しました。また、Docker のプロキシポートが変更された場合に、コンテナを自動的に再構築するようにしました。 ([#9997](https://github.com/nocobase/nocobase/pull/9997)) by @chenos

### 🐛 不具合修正

* **[client-v2]**
  * 本番環境における Vditor の静的リソース読み込みパスを修正しました。実際に有効な webpack public path に基づいて、プラグインの CDN パスを解決するように変更しました。 ([#10008](https://github.com/nocobase/nocobase/pull/10008)) by @chenos
  * ページ切り替え時に、クイック編集でドロップダウンの選択肢を切り替えられない場合がある問題を修正しました。 ([#10007](https://github.com/nocobase/nocobase/pull/10007)) by @gchust
* **[flow-engine]** 設定モードを切り替える際に、ポップアップ内の設定が一致しない問題を修正しました。 ([#10005](https://github.com/nocobase/nocobase/pull/10005)) by @gchust
* **[ファイルマネージャー]** ファイルアップロード時に、ストレージの MIME type ルールで明示的に許可されていないアクティブコンテンツのファイル名を拒否するようにしました。 ([#9994](https://github.com/nocobase/nocobase/pull/9994)) by @mytharcher
  参考ドキュメント：[ローカルストレージ](docs/docs/cn/file-manager/storage/local.md), [セキュリティガイド](docs/docs/cn/security/guide.md)
* **[データソース：外部 MariaDB]** MySQL、MSSQL、MariaDB の外部データソース設定で、Add all collections を切り替えられない問題を修正しました。 by @katherinehhh
