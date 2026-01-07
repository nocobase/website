### 🚀 機能改善

* **[client]**
  * AI 編集タスクフォームのテキスト入力欄で、入力内容に応じて高さが自動調整されるよう改善 ([#8350](https://github.com/nocobase/nocobase/pull/8350)) by @heziqiang
  * セル更新時にテーブル全体が再描画されてしまう挙動を改善 ([#8349](https://github.com/nocobase/nocobase/pull/8349)) by @katherinehhh
* **[ワークフロー：承認]**
  * クエリパラメータを整理し、検索パフォーマンスを向上 by @mytharcher
  * 起案者のデータ範囲について、マイグレーション後の不整合を補正する処理を追加 by @mytharcher

### 🐛 不具合修正

* **[sdk]** トークン共有の仕組みを見直し、実装を改善 ([#8357](https://github.com/nocobase/nocobase/pull/8357)) by @chenos
* **[client]**
  * 詳細・一覧・フォームブロックでページを切り替えた際に、フィールドや操作の権限が再計算されない不具合を修正 ([#8336](https://github.com/nocobase/nocobase/pull/8336)) by @gchust
  * フォームブロック内の外部データソースの関連テーブルで、リレーションフィールドのデータが正しく読み込まれない不具合を修正 ([#8356](https://github.com/nocobase/nocobase/pull/8356)) by @katherinehhh
* **[権限管理]** リレーションフィールドでターゲットキーを用いた関連付けができるよう改善 ([#8352](https://github.com/nocobase/nocobase/pull/8352)) by @2013xile
* **[ワークフロー：ループノード]** 条件分岐内で失敗したノードの状態が上位の分岐に反映されず、処理が誤動作する問題を修正 ([#8360](https://github.com/nocobase/nocobase/pull/8360)) by @mytharcher
* **[ワークフロー：Webhook トリガー]** サブアプリケーションで webhook リクエストが 404 エラーになる不具合を修正 by @mytharcher
* **[ワークフロー：承認]** 依存関係の不足により発生していたビルドエラーを修正 by @mytharcher
* **[メール管理]** Outlook の返信処理がまれに中断される問題を修正 by @jiannx
