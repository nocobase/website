### 🚀 機能改善

* **[cache]** ブルームフィルターをcloneした際に発生するパフォーマンス低下を防止しました（[#7652](https://github.com/nocobase/nocobase/pull/7652)) by @2013xile
* **[server]** ローカライズリソースの読み込み処理を見直し、イベントループのブロックを回避しました（[#7653](https://github.com/nocobase/nocobase/pull/7653)) by @2013xile
* **[操作：レコードインポート]** ヘッダーが見つからない場合のエラーメッセージをよりわかりやすく改善しました（[#7656](https://github.com/nocobase/nocobase/pull/7656)) by @mytharcher

### 🐛 不具合修正

* **[client]** フィールド名の折り返し表示で単語が途中で切れてしまう問題を修正しました（[#7647](https://github.com/nocobase/nocobase/pull/7647)) by @katherinehhh
* **[データ可視化]** チャートのSQLクエリ内で変数が誤って自動的に解析される問題を修正しました（[#7642](https://github.com/nocobase/nocobase/pull/7642)) by @heziqiang
* **[ワークフロー]** アプリ停止時にログ出力でエラーが発生する問題を修正しました（[#7639](https://github.com/nocobase/nocobase/pull/7639)) by @mytharcher
