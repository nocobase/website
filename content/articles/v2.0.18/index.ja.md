### 🎉 新機能

* **[AI 従業員]**
  * AI 会話のチェックポイントデータを定期的に削除する機能を追加 ([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock
  * サブテーブルのポップアップ内で AI 従業員を追加できるように対応 ([#8873](https://github.com/nocobase/nocobase/pull/8873)) by @2013xile
* **[アプリケーション管理]** アプリ一覧のフィルタに対応<br />起動・停止時に確認ダイアログを追加<br />アプリ状態を環境名順に並び替えるよう改善 by @2013xile

### 🚀 機能改善

* **[server]** pm add のロジックを改善 ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos
* **[client]** ポップアップを閉じる際の確認メッセージを無効にできるように対応 ([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust
* **[非同期タスクマネージャー]** 非同期タスクで worker からエラーメッセージを送信できるように対応 ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock

### 🐛 不具合修正

* **[client]** サブテーブル内の「データを選択」ポップアップで、再度開いた際に正しく読み込めない問題を修正 ([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust
* **[AI 従業員]** AI プラグインのアップグレード用マイグレーションスクリプトで発生する可能性のある変数未定義エラーを修正 ([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock
* **[操作：インポート記録 Pro]** 非同期インポートでエラー発生後に非同期タスクが終了しない問題を修正 by @cgyrock
