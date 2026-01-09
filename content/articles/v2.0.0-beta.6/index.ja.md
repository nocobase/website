### 🚀 機能改善

* **[ワークフロー：承認]** クエリパラメータを整理し、検索パフォーマンスを向上 by @mytharcher

### 🐛 不具合修正

* **[sdk]** トークン共有の仕組みを見直し、実装を改善 ([#8357](https://github.com/nocobase/nocobase/pull/8357)) by @chenos
* **[client]** フォームブロック内の外部データソースの関連テーブルで、リレーションフィールドのデータが正しく読み込まれない不具合を修正 ([#8356](https://github.com/nocobase/nocobase/pull/8356)) by @katherinehhh
* **[ワークフロー：ループノード]** 条件分岐内で失敗したノードの状態が上位の分岐に反映されず、処理が誤動作する問題を修正 ([#8360](https://github.com/nocobase/nocobase/pull/8360)) by @mytharcher
* **[権限管理]** リレーションフィールドでターゲットキーを用いた関連付けができるよう改善 ([#8352](https://github.com/nocobase/nocobase/pull/8352)) by @2013xile
* **[ワークフロー：Webhook トリガー]** サブアプリケーションで webhook リクエストが 404 エラーになる不具合を修正 by @mytharcher
* **[メール管理]** Outlook の返信処理がまれに中断される問題を修正 by @jiannx
