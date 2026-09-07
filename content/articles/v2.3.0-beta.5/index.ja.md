### 🐛 不具合修正

* **[client-v2]** v2 のリレーションフィールドをポップアップで選択する方式に切り替えた際に発生するレンダリングエラーを修正。 ([#10419](https://github.com/nocobase/nocobase/pull/10419)) by @katherinehhh
* **[AI LLM：GigaChat]** GigaChat AI サービスを有効にすると、iOS 15.6 以前でアプリの起動時にエラーが発生する問題を修正 ([#10418](https://github.com/nocobase/nocobase/pull/10418)) by @cgyrock
* **[公開フォーム]** 公開フォームを有効にした後、V2 の通常フォームの設定画面に「送信」アクションが 2 つ表示される問題を修正。 ([#10417](https://github.com/nocobase/nocobase/pull/10417)) by @katherinehhh
* **[権限制御]** `<span>firstOrCreate</span>` または `<span>updateOrCreate</span>` で、閲覧・編集権限がない場合でも既存レコードを読み取りまたは変更できてしまう ACL 回避の脆弱性を修正。 ([#10403](https://github.com/nocobase/nocobase/pull/10403)) by @mytharcher
* **[ワークフロー]**
  * v2 ワークフローのデータ追加ノードおよびデータ更新ノードで、オプションフィールドの設定値を選択できない問題を修正。 ([#10414](https://github.com/nocobase/nocobase/pull/10414)) by @katherinehhh
  * スケジュールタスクを cron で繰り返し実行する際、「開始日時」に余分な実行が 1 回発生する問題を修正 ([#10410](https://github.com/nocobase/nocobase/pull/10410)) by @Tespera
  * サブフローでデータテーブルイベントを使用する際、関連フィールドの事前読み込みを設定せずにレコード ID で呼び出すとエラーが発生する問題を修正 ([#10407](https://github.com/nocobase/nocobase/pull/10407)) by @mytharcher
* **[UI テンプレート]** 参照ブロックを含む承認タスクを閉じる際にエラーが発生する問題を修正 ([#10415](https://github.com/nocobase/nocobase/pull/10415)) by @zhangzhonghe
* **[マルチスペース]** マルチスペース環境で、ファイルコレクションから返されるファイルとプレビューリンクに現在のスペース情報が引き継がれず、ファイルを開く際に誤って 404 が返される問題を修正。 by @jiannx
* **[AI：ナレッジベース]** Root ユーザーが AI 従業員を使用する際、ナレッジベースへのアクセス権限がないと誤って判定される問題を修正 by @hongboji
* **[ワークフロー：承認]** v1 ワークフローページで、サブフローノードから承認ワークフローを選択した場合に、トリガー変数のフォームが表示されない問題を修正。 by @mytharcher
* **[企業 WeChat]** client-v2 における企業 WeChat の自動ログインのライフサイクルおよび通知設定フォームの互換性の問題を修正。 by @chenzhizdt
