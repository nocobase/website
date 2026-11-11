### 🚀 機能改善

* **[権限制御]** ロールチェック API における予約済みロール値のフォールバックルールと、API キーにおけるロールの優先順位を明確化。 ([#11452](https://github.com/nocobase/nocobase/pull/11452)) by @hongboji
  参考ドキュメント：[OpenAPI: roles](https://github.com/nocobase/nocobase/blob/fix/main-issue-10399/packages/plugins/@nocobase/plugin-acl/src/swagger/index.ts)

### 🐛 不具合修正

* **[client]** リレーションラベルでポップアップの表示形式とサイズを設定できるようにし、クリックしたレコードを開けるように改善。 ([#11449](https://github.com/nocobase/nocobase/pull/11449)) by @hongboji
* **[resourcer]** リソース API の `filter` クエリパラメータに無効な JSON が含まれている場合、内容のない成功レスポンスではなく HTTP 400 を返すように修正。 ([#11465](https://github.com/nocobase/nocobase/pull/11465)) by @hongboji
* **[client-v2]** 手動で設定した列の並び替えを解除すると、元の設定で定義された列順に戻るように修正。 ([#11443](https://github.com/nocobase/nocobase/pull/11443)) by @hongboji
* **[AI 従業員]**
  * JavaScript エディターがすでにブロック内容を返しているにもかかわらず、Nathan が「ツール呼び出しが中断された」と誤って表示する問題を修正。 ([#11454](https://github.com/nocobase/nocobase/pull/11454)) by @hongboji
  * Web UI または API 経由での stdio MCP サービスの作成、およびデプロイ設定によって管理されている接続の変更・削除を禁止。起動・停止と接続テストは引き続き利用可能。MCP のデプロイ設定は `storage/ai/mcp/servers.json` から読み込むように変更し、TS/JS ファイルは自動で読み込まないように変更。 ([#11461](https://github.com/nocobase/nocobase/pull/11461)) by @cgyrock
* **[カレンダー]** v1 および v2 のカレンダーで、選択したスペイン語ロケールに応じた曜日名をヘッダーに表示するように修正。 ([#11446](https://github.com/nocobase/nocobase/pull/11446)) by @hongboji
* **[ファイルマネージャー]** ファイルマネージャーを有効にした後、ツリーパスの再構築などのプラグイン CLI コマンドを読み込めない問題を修正。 ([#11354](https://github.com/nocobase/nocobase/pull/11354)) by @zhouyanliang
