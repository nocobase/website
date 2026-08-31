### 🐛 不具合修正

* **[ワークフロー]**
  * ワークフロー ToDo センターのモバイル向け詳細画面を改善し、フル幅のドロワーを使用するとともに、承認内容のレイアウトをモバイル表示に最適化。 ([#10428](https://github.com/nocobase/nocobase/pull/10428)) by @mytharcher
  * ワークフロータスクのステータスと ID に複合インデックスを追加し、待処理タスクを復元する際のクエリを最適化。 ([#10427](https://github.com/nocobase/nocobase/pull/10427)) by @mytharcher
  * スケジュールタスク（静的モード）が「終了日時」を過ぎた後に、余分に 1 回実行される問題を修正 ([#10411](https://github.com/nocobase/nocobase/pull/10411)) by @Tespera
* **[通知管理]** ワークフローで受信者に指定するユーザー変数に「Variable parsing failed」と表示される問題を修正し、各ワークフローノードのユーザー選択コンポーネントを共通化。 ([#10432](https://github.com/nocobase/nocobase/pull/10432)) by @mytharcher
* **[ワークフロー：承認]**
  * 承認タスクの詳細画面およびリモートフォームについて、モバイルの狭い画面幅でのレイアウトを改善。 by @mytharcher
  * 承認者変数に「Variable parsing failed」と表示される問題を修正し、ワークフロー共通のユーザー選択コンポーネントを使用するように変更。 by @mytharcher
