### 🚀 機能改善

* **[undefined]**
  * V3 ワークフローのエントリーファイル名を `v3-` プレフィックスに統一し、ブランチ間同期時のチェックルールを明確化。 ([#10590](https://github.com/nocobase/nocobase/pull/10590)) by @Molunerfinn
  * NocoBase 3 の独立ブランチワークフローに、手動実行用の Actions エントリーを追加。 ([#10587](https://github.com/nocobase/nocobase/pull/10587)) by @Molunerfinn

### 🐛 不具合修正

* **[database]** PostgreSQL で主キー制約のないテーブルを、多対多などのリレーションフィールドでフィルタリングし、主テーブルのフィールドでソートすると `GROUP BY` エラーが発生する問題を修正 ([#10582](https://github.com/nocobase/nocobase/pull/10582)) by @cgyrock
* **[client]** UI 編集モードでブラウザウィンドウを縮小してから元のサイズに戻すと、ブロック設定が表示されなくなる問題を修正 ([#10583](https://github.com/nocobase/nocobase/pull/10583)) by @zhangzhonghe
* **[client-v2]**
  * 空の JS ブロックでカードを閉じた後、UI 設定モードからブロック設定を再度開けない問題を修正。 ([#10563](https://github.com/nocobase/nocobase/pull/10563)) by @gchust
  * 空の JS アクションの幅がゼロになるため、UI 設定モードで設定を開けない問題を修正。 ([#10573](https://github.com/nocobase/nocobase/pull/10573)) by @gchust
* **[undefined]** NocoBase 3 の独立ブランチへの移行後も、PostgreSQL と MySQL の定期チェックを維持。 ([#10589](https://github.com/nocobase/nocobase/pull/10589)) by @Molunerfinn
* **[ファイルマネージャー]** メインアプリケーションとサブアプリケーションで添付ファイルを直接アップロードする際にフィールド関連のパラメータが欠落する問題と、カスタムファイルテーブルでフィールドに設定されたストレージ設定が無視され、添付ファイルがデフォルトストレージにフォールバックする問題を修正。 ([#10577](https://github.com/nocobase/nocobase/pull/10577)) by @mytharcher
* **[ワークフロー：集計クエリノード]** ワークフローの集計ノードでリレーションデータを設定した後、再度開くと集計フィールドが消える問題を修正し、リレーションフィールドの表示を復元する際の不要な走査を削減。 ([#10578](https://github.com/nocobase/nocobase/pull/10578)) by @mytharcher
* **[UI テンプレート]** UI テンプレートを削除した後、内部テンプレートテーブルがブロック追加時のデータテーブル選択肢に表示される問題を修正。 ([#10561](https://github.com/nocobase/nocobase/pull/10561)) by @gchust
* **[データテーブルフィールド：多対多（配列）]** v2 のデータソース管理で新規作成したリレーションフィールドをブロックで設定できない問題を修正 ([#10581](https://github.com/nocobase/nocobase/pull/10581)) by @zhangzhonghe
* **[UI レイアウト]** 新しいクライアントで、アクションやボタンのポップアップ設定にポップアップテンプレートのオプションが表示されない問題を修正。 ([#10574](https://github.com/nocobase/nocobase/pull/10574)) by @gchust
* **[通知：メール]** nodemailer、hono、moment を問題修正済みのバージョンにアップグレード。 ([#10569](https://github.com/nocobase/nocobase/pull/10569)) by @2013xile
