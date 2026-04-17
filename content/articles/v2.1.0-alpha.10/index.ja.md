### 🎉 新機能

* **[IdP: OAuth]** IdP: OAuth プラグインを追加し、MCP サービスの OAuth 認証に対応 ([#8896](https://github.com/nocobase/nocobase/pull/8896)) by @2013xile
* **[AI 従業員]** AI 会話のチェックポイントデータを定期的に削除する機能を追加 ([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock
* **[アプリケーション管理]** アプリ一覧のフィルタに対応<br />起動・停止時に確認ダイアログを追加<br />アプリ状態を環境名順に並び替えるよう改善 by @2013xile

### 🚀 機能改善

* **[server]** pm add のロジックを改善 ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos
* **[client]** ポップアップを閉じる際の確認メッセージを無効にできるように対応 ([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust
* **[undefined]** v1 を維持したまま、client-v2 の独立エントリを追加し、rsbuild による独立ビルドに対応 ([#8743](https://github.com/nocobase/nocobase/pull/8743)) by @Molunerfinn
* **[ワークフロー]**
  * 正常終了時に、メモリ内のイベントが最後まで処理されない問題を修正 ([#8894](https://github.com/nocobase/nocobase/pull/8894)) by @mytharcher
  * 実行記録一覧にフィルタ機能を追加 ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher
* **[非同期タスクマネージャー]** 非同期タスクで worker からエラーメッセージを送信できるように対応 ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock
* **[ワークフロー：承認]** トリガーでデータテーブルが設定されていない場合、承認者設定画面を利用できないように対応 by @mytharcher

### 🐛 不具合修正

* **[client]**
  * 非管理者が関連フィールド値をクリアできない問題を修正 ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx
  * サブテーブル内の「データを選択」ポップアップで、再度開いた際に正しく読み込めない問題を修正 ([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust
* **[resourcer]**`filterByTk` パラメータの配列要素が 100 件を超えた際、自動的にオブジェクトへ変換される問題を回避 ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile
* **[server]** ワーカープロセスがアプリケーションライフサイクルイベントを送信することで、サービスインスタンスが停止してしまう問題を修正 ([#8906](https://github.com/nocobase/nocobase/pull/8906)) by @mytharcher
* **[データソース管理]** AI 従業員が作成したデータテーブルで、「作成者」「更新者」フィールドが常に欠けている問題を修正 ([#8895](https://github.com/nocobase/nocobase/pull/8895)) by @cgyrock
* **[AI 従業員]**
  * LLM サービスで指定した URL が、テキスト埋め込みモデル呼び出し時に反映されない問題を修正 ([#8892](https://github.com/nocobase/nocobase/pull/8892)) by @cgyrock
  * AI プラグインのアップグレード用マイグレーションスクリプトで発生する可能性のある変数未定義エラーを修正 ([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock
* **[操作：インポート記録 Pro]**
  * ファイルストリームの重複読み取りにより、約 30 列を超えるファイルのインポートでエラーが発生する問題を修正 by @mytharcher
  * 同期モードでインポート時にエラーが発生する問題を修正 by @mytharcher
  * サブアプリでインポート処理後に `beforeStop` イベントが発火しない問題を修正 by @mytharcher
  * 非同期インポートでエラー発生後に非同期タスクが終了しない問題を修正 by @cgyrock
  * 遅延読み込みによって発生する SES エラーを修正 by @mytharcher
* **[テンプレート印刷]** SQL データテーブルの印刷時にエラーが発生する問題を修正 by @jiannx
* **[ワークフロー：承認]** 追加承認時の同時実行に関する問題を修正 by @mytharcher
* **[メール管理]** メールが存在しない場合にページでエラーになる問題を修正 by @jiannx
* **[移行管理]** マイグレーションのアップロード時、対象環境に新規作成対象のテーブルが存在しないことでエラーが発生し、移行が中断される問題を修正 by @Andrew1989Y
