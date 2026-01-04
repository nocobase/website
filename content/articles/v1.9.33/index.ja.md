### 🎉 新機能

* **[client]** アプリがメンテナンス状態に入った際、プラグインで定義したメンテナンス表示コンポーネントを表示できるよう対応 ([#8252](https://github.com/nocobase/nocobase/pull/8252)) by @cgyrock
* **[ファイルマネージャー]** ストレージでファイル名のリネーム方法を設定できるように改善 ([#8231](https://github.com/nocobase/nocobase/pull/8231)) by @JAVA-LW
* **[ファイルストレージ：S3 (Pro)]** S3 Pro ストレージにリネーム方式の選択オプションを追加 by @mytharcher

### 🚀 機能改善

* **[マイグレーション管理]** マイグレーションのチェックや SQL ダウンロード、ログ表示形式、実行状況の可視化を含む操作体験を全体的に改善 by @cgyrock

### 🐛 不具合修正

* **[database]**
  * 多対多リレーションのデータ取得時に、through scope 条件が正しく適用されるよう修正 ([#8277](https://github.com/nocobase/nocobase/pull/8277)) by @2013xile
  * オブジェクト型 `appends` パラメータの処理を見直し、配列パラメータの上限を拡張 ([#8328](https://github.com/nocobase/nocobase/pull/8328)) by @mytharcher
* **[client]** 手動ノードのフォームで、多対多データセレクターのブロックメニューにエラーが発生する不具合を修正 ([#8282](https://github.com/nocobase/nocobase/pull/8282)) by @mytharcher
* **[非同期タスクマネージャー]** バックグラウンドタスクをキャンセルする際の表示メッセージを修正 ([#8245](https://github.com/nocobase/nocobase/pull/8245)) by @mytharcher
* **[ファイルマネージャー]** AWS S3 へ 5MB 超のファイルをアップロードするとエラーになる問題を修正 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) by @mytharcher
* **[ワークフロー]** 外部データソース更新後に、関連するデータテーブルイベントが無効になる不具合を修正 ([#8207](https://github.com/nocobase/nocobase/pull/8207)) by @cgyrock
* **[データテーブル：ツリー]** ツリーノードを一括作成した後に、パス情報が正しく更新されない問題を修正 ([#8267](https://github.com/nocobase/nocobase/pull/8267)) by @2013xile
* **[データソース：外部 PostgreSQL]** 外部データソース更新後に、関連イベントが無効になる問題を修正 by @cgyrock
* **[データソース：外部 Oracle]** 外部データソース更新後に、関連イベントが無効になる問題を修正 by @cgyrock
