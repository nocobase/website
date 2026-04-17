### 🎉 新機能

* **[client]** イベントフローに JS 変数を追加しました ([#8938](https://github.com/nocobase/nocobase/pull/8938)) by @jiannx

### 🚀 機能改善

* **[client]** runjs を使ってフィールドスタイルを設定できるようにしました ([#8933](https://github.com/nocobase/nocobase/pull/8933)) by @jiannx
* **[flow-engine]** ページ構築関連 API のスキーマ検証を強化しました。 ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust
* **[ワークフロー：操作前イベント]** トリガーとノードに検証ルールを追加しました ([#8971](https://github.com/nocobase/nocobase/pull/8971)) by @mytharcher
* **[ワークフロー]** 1 ページあたりの件数パラメータで変数を使えるようにしました ([#8951](https://github.com/nocobase/nocobase/pull/8951)) by @mytharcher
* **[ワークフロー：Webhook トリガー]** トリガーおよびノード作成 API に検証処理を追加しました by @mytharcher
* **[ワークフロー：サブフロー]**
  * 新規ノード作成 API に検証処理を追加しました by @mytharcher
  * ワークフローが例外発生時に処理途中で止まってしまうのを防ぐため、防御ロジックを追加しました by @mytharcher
* **[ワークフロー：承認]** トリガーおよびノード API に検証処理を追加しました by @mytharcher

### 🐛 不具合修正

* **[client]** ポップアップ内のツリーテーブルで子ノード追加時にエラーが発生する問題を修正しました ([#8872](https://github.com/nocobase/nocobase/pull/8872)) by @jiannx
* **[操作：レコードエクスポート]** インポートおよびエクスポート設定で、多段階の関連フィールドを制限しました ([#8893](https://github.com/nocobase/nocobase/pull/8893)) by @jiannx
* **[データ可視化]** スペースプラグイン有効化後に、root ロールのチャートデータ集計が異常になる問題を修正しました ([#8969](https://github.com/nocobase/nocobase/pull/8969)) by @jiannx
* **[操作：レコードインポート]** スペースプラグイン有効化後にインポートが失敗する問題を修正しました ([#8968](https://github.com/nocobase/nocobase/pull/8968)) by @jiannx
* **[ワークフロー：JavaScript ノード]** コード実行時のセキュリティ問題を修正しました ([#8967](https://github.com/nocobase/nocobase/pull/8967)) by @mytharcher
* **[AI 従業員]** AI 対話内のツールカードコンポーネント間の間隔に関する問題を調整しました ([#8965](https://github.com/nocobase/nocobase/pull/8965)) by @cgyrock
* **[フロントエンドフローエンジン]** uiSchema テーブルからコピーされた旧イベントを削除し、呼び出し後にエラーが発生する問題を回避しました ([#8957](https://github.com/nocobase/nocobase/pull/8957)) by @mytharcher
* **[ユーザー認証]** ACL がカスタム state フィルタパラメータに対応するように修正しました ([#8918](https://github.com/nocobase/nocobase/pull/8918)) by @jiannx
* **[操作：レコードインポート Pro]** インポートおよびエクスポート設定で、多段階の関連フィールドを制限しました by @jiannx
* **[メール管理]** テンプレート使用時に署名が上書きされてしまう問題を修正しました by @jiannx
