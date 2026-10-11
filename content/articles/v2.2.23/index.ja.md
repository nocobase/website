### 🚀 機能改善

* **[undefined]**
  * V3 ワークフローのエントリファイル名で `v3-` プレフィックスを統一し、ブランチ間同期のチェックルールを明確にしました。 ([#10590](https://github.com/nocobase/nocobase/pull/10590)) by @Molunerfinn
  * NocoBase 3 の独立ブランチワークフローに、手動実行用の Actions エントリを追加しました。 ([#10587](https://github.com/nocobase/nocobase/pull/10587)) by @Molunerfinn

### 🐛 不具合修正

* **[database]** PostgreSQL で主キー制約のないテーブルを、多対多などのリレーションフィールドで絞り込み、メインテーブルのフィールドで並べ替えた際に `GROUP BY` エラーが発生する問題を修正しました。 ([#10582](https://github.com/nocobase/nocobase/pull/10582)) by @cgyrock
* **[client]** UI 編集モードでブラウザウィンドウを縮小した後に元のサイズへ戻すと、ブロック設定が表示されなくなる問題を修正しました。 ([#10583](https://github.com/nocobase/nocobase/pull/10583)) by @zhangzhonghe
* **[undefined]** NocoBase 3 を独立ブランチへ移行した後も、PostgreSQL と MySQL の定期チェックを継続するようにしました。 ([#10589](https://github.com/nocobase/nocobase/pull/10589)) by @Molunerfinn
* **[ワークフロー：集計クエリノード]** ワークフローの集計ノードでリレーションデータを設定した後、設定を再度開くと集計フィールドが消える問題を修正しました。また、リレーションフィールドの値を再表示する際の不要な走査を削減しました。 ([#10578](https://github.com/nocobase/nocobase/pull/10578)) by @mytharcher
* **[データテーブルフィールド：多対多（配列）]** v2 データソース管理で新規作成したリレーションフィールドを、ブロックで設定できない問題を修正しました。 ([#10581](https://github.com/nocobase/nocobase/pull/10581)) by @zhangzhonghe
* **[ファイルマネージャー]** メインアプリとサブアプリで添付ファイルを直接アップロードした際にフィールドパラメータが失われる問題と、カスタムファイルテーブルでフィールドのストレージ設定が無視され、添付ファイルがデフォルトストレージへフォールバックしてしまう問題を修正しました。 ([#10577](https://github.com/nocobase/nocobase/pull/10577)) by @mytharcher
