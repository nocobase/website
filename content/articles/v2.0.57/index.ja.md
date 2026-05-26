### 🐛 不具合修正

* **[build]** プラグインのサーバー側難読化ビルド成果物で、Node.js ランタイムにブラウザーのグローバル変数が注入される問題を修正しました。([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn
* **[ワークフロー：手動処理ノード]** ワークフローの手動タスクを一時保存した後、入力済みのフォーム内容が保存されない問題を修正しました。([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher
* **[AI 従業員]** テーブルコンテキストのプロンプトで、データクエリツール名が誤っている問題を修正しました。([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock
* **[ファイルマネージャー]** PDF プレビューを PDF.js で安全にレンダリングするようにし、iframe で元の PDF を直接読み込まないようにしました。([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher
* **[認証：OIDC]** SSO ログインコールバックが外部リダイレクト先を受け取った際に、Token が漏えいする可能性のある問題を修正しました by @2013xile
* **[ワークフロー：承認]**
  * `jobs:resume` API が承認ノードでサポートされていない問題を修正しました by @mytharcher
  * 承認の取り消し時に送信された業務データの更新を修正し、業務テーブルの更新権限制御に従うようにしました。 by @mytharcher
  * 承認フローが非承認ノードの失敗により終了した後、承認待ちレコードと統計値が未処理のまま残る問題を修正しました。 by @mytharcher
