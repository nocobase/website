### 🚀 機能改善

* **[undefined]** ルートパッケージのライセンスメタデータを Apache-2.0 に修正し、Node.js の最低バージョンを 22 に引き上げ ([#10448](https://github.com/nocobase/nocobase/pull/10448)) by @hongboji
* **[マイグレーション管理]** マイグレーション一覧のファイルサイズを読みやすいバイナリ単位で表示し、バイト単位の数値をそのまま表示しないように改善 by @hongboji
* **[DingTalk]** DingTalk の ActionCard ボタンリンクを外部ブラウザで開くよう設定できるように改善。 by @chenzhizdt

### 🐛 不具合修正

* **[utils]** API 経由で書き込まれたリッチテキストによって、表示時または編集時にストアド XSS が実行される脆弱性を修正。 ([#10425](https://github.com/nocobase/nocobase/pull/10425)) by @katherinehhh
* **[database]** SQL Server の文字列フィルターで、角括弧そのものやその他の `<span>LIKE</span>` ワイルドカードに一致できない問題を修正 ([#10436](https://github.com/nocobase/nocobase/pull/10436)) by @hongboji
* **[ファイルマネージャー]**
  * v2 ファイルテーブルの新規作成フォームと編集フォームで、ファイルストレージの選択項目が表示されない問題を修正。 ([#10439](https://github.com/nocobase/nocobase/pull/10439)) by @katherinehhh
  * AI 従業員のワークフローノードから NocoBase の永続的なファイル URL にアクセスできない問題と、内部ファイルが不必要に AI ストレージへコピーされる問題を修正。 ([#10408](https://github.com/nocobase/nocobase/pull/10408)) by @cgyrock
* **[データテーブルフィールド：Markdown(Vditor)]** V2 の Markdown Vditor フィールドでテーブル操作を再び利用できるように修正。 ([#10438](https://github.com/nocobase/nocobase/pull/10438)) by @katherinehhh
* **[AI 従業員]** グラフを含むビジネス分析レポートを開けない問題を修正。 ([#10440](https://github.com/nocobase/nocobase/pull/10440)) by @cgyrock
* **[ファイルストレージ：S3 (Pro)]** S3 Pro で 5 MB を超えるバックアップファイルのマルチパートアップロードが失敗する問題を修正。 by @mytharcher
