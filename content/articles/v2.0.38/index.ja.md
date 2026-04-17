### 🎉 新機能

* **[AI 従業員]** アップロードされた文書の解析能力を向上 ([#9126](https://github.com/nocobase/nocobase/pull/9126)) by @cgyrock

### 🚀 機能改善

* **[logger]** リクエストログに `referer` 情報を追加 ([#9110](https://github.com/nocobase/nocobase/pull/9110)) by @2013xile
* **[undefined]** 環境変数とクラスターモードのドキュメントの多言語版を同期し、最新の中国語版の内容に合わせました。 ([#9115](https://github.com/nocobase/nocobase/pull/9115)) by @mytharcher
* **[AI 従業員]** AI 従業員がブロック選択後、フォームの添付ファイルを送信欄の添付ファイルアップロードエリアに反映できるように改善 ([#9127](https://github.com/nocobase/nocobase/pull/9127)) by @cgyrock
* **[ワークフロー：手動処理ノード]** ワークフローの To-do 関連テーブルでシンプルページネーションモードを使用し、一覧のパフォーマンスを改善 ([#9117](https://github.com/nocobase/nocobase/pull/9117)) by @mytharcher
* **[ワークフロー：承認]**`approvals` と `approvalRecords` テーブルでシンプルページネーションモードを使用し、一覧のパフォーマンスを改善 by @mytharcher

### 🐛 不具合修正

* **[client]**
  * 単一選択フィールドで、フィールドルール設定時に選択肢が空になる問題を修正 ([#9119](https://github.com/nocobase/nocobase/pull/9119)) by @jiannx
  * サブテーブルのデフォルト値設定が有効にならない問題を修正。 ([#9087](https://github.com/nocobase/nocobase/pull/9087)) by @gchust
* **[通知：サイト内メッセージ]** 受信者コンポーネントが正常に動作しない問題を修正 ([#9123](https://github.com/nocobase/nocobase/pull/9123)) by @mytharcher
* **[AI 従業員]** google-gen-ai の LLM サービスで baseURL 設定が有効にならない問題を修正 ([#9107](https://github.com/nocobase/nocobase/pull/9107)) by @cgyrock
* **[メール管理]** メール送信成功後に表示されるフォームを閉じるメッセージを削除 by @jiannx
