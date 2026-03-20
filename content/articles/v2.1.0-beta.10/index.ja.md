### 🎉 新機能

* **[AI 従業員]**
  * サブテーブルのポップアップ内で AI 従業員を追加できるように対応 ([#8873](https://github.com/nocobase/nocobase/pull/8873)) by @2013xile
  * AI 会話のチェックポイントデータを定期的に削除する機能を追加 ([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock
* **[アプリケーション管理]** アプリ一覧のフィルタに対応<br />起動・停止時に確認ダイアログを追加<br />アプリ状態を環境名順に並び替えるよう改善 by @2013xile

### 🚀 機能改善

* **[server]** pm add のロジックを改善 ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos
* **[undefined]** README.zh-CN.md を改善 ([#8866](https://github.com/nocobase/nocobase/pull/8866)) by @gaston98765
* **[client]** ポップアップを閉じる際の確認メッセージを無効にできるように対応 ([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust
* **[ワークフロー]** 正常終了時に、メモリ内のイベントが最後まで処理されない問題を修正 ([#8894](https://github.com/nocobase/nocobase/pull/8894)) by @mytharcher
* **[非同期タスクマネージャー]** 非同期タスクで worker からエラーメッセージを送信できるように対応 ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock

### 🐛 不具合修正

* **[client]**
  * サブテーブル内の「データを選択」ポップアップで、再度開いた際に正しく読み込めない問題を修正 ([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust
  * 一部フィールドのデフォルト値が、ページ更新後に反映されない問題を修正 ([#8834](https://github.com/nocobase/nocobase/pull/8834)) by @gchust
* **[database]** サーバー側の日付フィールド検証の不具合を修正 ([#8867](https://github.com/nocobase/nocobase/pull/8867)) by @2013xile
* **[データソース管理]** AI 従業員が作成したデータテーブルで、「作成者」「更新者」フィールドが常に欠けている問題を修正 ([#8895](https://github.com/nocobase/nocobase/pull/8895)) by @cgyrock
* **[AI 従業員]**
  * LLM サービスで指定した URL が、テキスト埋め込みモデル呼び出し時に反映されない問題を修正 ([#8892](https://github.com/nocobase/nocobase/pull/8892)) by @cgyrock
  * AI プラグインのアップグレード用マイグレーションスクリプトで発生する可能性のある変数未定義エラーを修正 ([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock
* **[ローカライズ]** localizationTexts:missing インターフェースの権限エラーを修正 ([#8861](https://github.com/nocobase/nocobase/pull/8861)) by @jiannx
* **[操作：インポート記録 Pro]**
  * サブアプリでインポート処理後に `beforeStop` イベントが発火しない問題を修正 by @mytharcher
  * 遅延読み込みによって発生する SES エラーを修正 by @mytharcher
  * 非同期インポートでエラー発生後に非同期タスクが終了しない問題を修正 by @cgyrock
* **[AI: ナレッジベース]** 使用中のベクトルライブラリに紐づくベクトルストレージが削除されないように対応 by @cgyrock
* **[テンプレート印刷]** SQL データテーブルの印刷時にエラーが発生する問題を修正 by @jiannx
* **[メール管理]** メールが存在しない場合にページでエラーになる問題を修正 by @jiannx
