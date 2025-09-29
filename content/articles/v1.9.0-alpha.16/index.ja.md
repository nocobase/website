### 🚀 機能改善

* **[クライアント]**
  * 画像プレビュー時に回転機能をサポート（[#7523](https://github.com/nocobase/nocobase/pull/7523)）@mytharcher
  * ツールチップとグループ項目のタイトルにローカライズをサポート（[#7485](https://github.com/nocobase/nocobase/pull/7485)）@katherinehhh
* **[RabbitMQ queue adapter]** RabbitMQ の接続処理とメッセージ処理ロジックを改善 @sdp-ncd

### 🐛 不具合修正

* **[クライアント]**
  * サイドバーのサブメニューが正しくハイライト表示されない問題を修正（[#7520](https://github.com/nocobase/nocobase/pull/7520)）@duannyuuu
  * メニューアイコン設定のポップオーバーが隠れる問題を修正（[#7515](https://github.com/nocobase/nocobase/pull/7515)）@zhangzhonghe
* **[通知：アプリ内メッセージ]** 通知ポップアップを開いた際に最新のメッセージが表示されない問題を修正（[#7514](https://github.com/nocobase/nocobase/pull/7514)）@mytharcher
* **[ワークフロー]** ワークフロー設定で関連フィールドのコンテキストを読み込む際に、ワークフローリストの条件が不正確になる問題を修正（[#7516](https://github.com/nocobase/nocobase/pull/7516)）@mytharcher
* **[ワークフロー：ループノード]** ループノードの条件が満たされていない場合でも、プロセスが次の項目に不正に進んでしまう問題を修正（[#7521](https://github.com/nocobase/nocobase/pull/7521)）@mytharcher
* **[ワークフロー：承認]**
  * 外部データソースからデータを削除する際にエラーが発生する問題を修正 @mytharcher
  * 承認フォーム内の数式フィールドが自動的に更新されない問題を修正 @mytharcher
