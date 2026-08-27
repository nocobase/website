### 🚀 機能改善

* **[undefined]** Markdown、外部ページ、サードパーティサービスから、公開された NocoBase のファイル URL を利用する方法を明確化 ([#10406](https://github.com/nocobase/nocobase/pull/10406)) by @mytharcher
  参考ドキュメント：[ストレージエンジンの概要](https://docs.nocobase.com/cn/file-manager/storage/)

### 🐛 不具合修正

* **[権限制御]**`firstOrCreate` または `updateOrCreate` で、閲覧・編集権限がない場合でも既存レコードを読み取りまたは変更できてしまう ACL 回避の脆弱性を修正。 ([#10403](https://github.com/nocobase/nocobase/pull/10403)) by @mytharcher
* **[ワークフロー]**
  * v2 ワークフローのデータ追加ノードおよびデータ更新ノードで、オプションフィールドの設定値を選択できない問題を修正。 ([#10414](https://github.com/nocobase/nocobase/pull/10414)) by @katherinehhh
  * スケジュールタスクを cron で繰り返し実行する際、「開始日時」に余分な実行が 1 回発生する問題を修正 ([#10410](https://github.com/nocobase/nocobase/pull/10410)) by @Tespera
  * ワークフロー ToDo センターのメニューで、選択中のメニューを再度クリックすると折りたためるようにし、選択状態のハイライトも維持されるよう修正 ([#10404](https://github.com/nocobase/nocobase/pull/10404)) by @mytharcher
  * サブフローでコレクションイベントを使用する際、関連フィールドの事前読み込みを設定せずにレコード ID で呼び出すとエラーが発生する問題を修正 ([#10407](https://github.com/nocobase/nocobase/pull/10407)) by @mytharcher
* **[UI テンプレート]** 参照ブロックを含む承認タスクを閉じる際にエラーが発生する問題を修正 ([#10415](https://github.com/nocobase/nocobase/pull/10415)) by @zhangzhonghe
