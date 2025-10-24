### 🎉 新機能

* **[ワークフロー：承認]** 承認トリガーで申請番号（承認番号）の変数が使用できるようになりました by @mytharcher

### 🚀 機能改善

* **[server]** ローカライズリソースの読み込み処理を最適化し、イベントループをブロックしないよう改善しました（[#7653](https://github.com/nocobase/nocobase/pull/7653)) by @2013xile
* **[cache]** ブルームフィルターをcloneする際に発生するパフォーマンス低下を防止しました（[#7652](https://github.com/nocobase/nocobase/pull/7652)) by @2013xile
* **[操作：レコードインポート]** ヘッダーが見つからない場合のエラーメッセージを分かりやすく改善しました（[#7656](https://github.com/nocobase/nocobase/pull/7656)) by @mytharcher

### 🐛 不具合修正

* **[client]** フィールド名が改行時に途中で切れる問題を修正しました（[#7647](https://github.com/nocobase/nocobase/pull/7647)) by @katherinehhh
* **[ワークフロー]** アプリ停止時にログ出力でエラーが発生する問題を修正しました（[#7639](https://github.com/nocobase/nocobase/pull/7639)) by @mytharcher
* **[ワークフロー：承認]**
  * 承認送信後にDBエラーが発生した際、トランザクションが正しくロールバックされずタイムアウトになる問題を修正しました by @mytharcher
  * 加署後、未処理件数（ToDo）が更新されない問題を修正しました by @mytharcher
  * 承認フォーム送信時に一部の変数が正しく展開されない問題を修正しました by @mytharcher
* **[メール管理]** 同期エラーを適切に処理するよう対応しました by @jiannx
