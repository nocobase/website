### 🎉 新機能

* **[client-v2]** v2 admin に「セキュリティ」親メニューと「Token ポリシー」設定ページを追加しました。ユーザーセンターで「パスワード変更」も利用できるようになりました。([#9556](https://github.com/nocobase/nocobase/pull/9556)) by @Molunerfinn
* **[cli]** basic auth に対応しました。([#9558](https://github.com/nocobase/nocobase/pull/9558)) by @chenos
* **[パスワードポリシー]** パスワードポリシープラグインを新しい client-v2 管理画面に移行しました。パスワードポリシーとロック済みユーザーの 2 つの設定ページを提供し、ユーザーセンターのパスワード変更フォームにクライアント側のパスワードルール検証を組み込みました。 by @Molunerfinn

### 🚀 機能改善

* **[データ可視化]** チャートブロックが client v2 に対応しました。([#9517](https://github.com/nocobase/nocobase/pull/9517)) by @jiannx
* **[ワークフロー]** ワークフローの非同期ノードにおける可用性チェックをリファクタリングしました。([#9532](https://github.com/nocobase/nocobase/pull/9532)) by @mytharcher

### 🐛 不具合修正

* **[build]**
  * サーバー側ビルド内のテキストリソースは、JavaScript モジュールに変換されず、ファイルとしてコピーされるようになりました。([#9565](https://github.com/nocobase/nocobase/pull/9565)) by @Molunerfinn
  * プラグインのサーバー側難読化ビルド成果物で、Node.js ランタイムにブラウザーのグローバル変数が注入される問題を修正しました。([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn
* **[client-v2]** ページ言語のメタ情報を修正し、アプリページが常に英語として扱われるのではなく、現在のアプリ言語に従うようにしました。([#9564](https://github.com/nocobase/nocobase/pull/9564)) by @Molunerfinn
* **[ファイルマネージャー]** PDF プレビューを PDF.js で安全にレンダリングするようにし、iframe で元の PDF を直接読み込まないようにしました。([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher
* **[AI 従業員]** テーブルコンテキストのプロンプトで、データクエリツール名が誤っている問題を修正しました。([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock
* **[ワークフロー：手動処理ノード]** ワークフローの手動タスクを一時保存した後、入力済みのフォーム内容が保存されない問題を修正しました。([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher
* **[認証：OIDC]** SSO ログインコールバックが外部リダイレクト先を受け取った際に、Token が漏えいする可能性のある問題を修正しました by @2013xile
* **[ワークフロー：承認]**
  * 承認の取り消し時に送信された業務データの更新を修正し、業務テーブルの更新権限制御に従うようにしました。 by @mytharcher
  * `jobs:resume` API が承認ノードでサポートされていない問題を修正しました by @mytharcher
  * 同一承認タスクで承認担当者の転送を同時に行う際、承認レコードのインデックスが重複する問題を修正しました。 by @mytharcher
  * 承認フローが非承認ノードの失敗により終了した後、承認待ちレコードと統計値が未処理のまま残る問題を修正しました。 by @mytharcher
