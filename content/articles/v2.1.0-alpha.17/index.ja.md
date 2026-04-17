### 🎉 新機能

* **[cli]** NocoBase CLI をリファクタリング ([#9122](https://github.com/nocobase/nocobase/pull/9122)) by @chenos
* **[AI 従業員]** AI 従業員によるアップロード文書の解析機能を強化 ([#9126](https://github.com/nocobase/nocobase/pull/9126)) by @cgyrock

### 🚀 機能改善

* **[undefined]**
  * 環境変数およびクラスター モード関連ドキュメントの多言語版を同期し、最新の中国語版に合わせて更新 ([#9115](https://github.com/nocobase/nocobase/pull/9115)) by @mytharcher
  * ドキュメント：get-started 入門ページのアラビア語翻訳を追加 ([#9044](https://github.com/nocobase/nocobase/pull/9044)) by @gaston98765
  * ドキュメントのホームページにアラビア語翻訳を追加 ([#9043](https://github.com/nocobase/nocobase/pull/9043)) by @gaston98765
* **[logger]** リクエストログに `referer` 情報を追加 ([#9110](https://github.com/nocobase/nocobase/pull/9110)) by @2013xile
* **[client]** フォームの必須バリデーション切り替えを追加 ([#9060](https://github.com/nocobase/nocobase/pull/9060)) by @jiannx
* **[ワークフロー：手動処理ノード]** ワークフロー ToDo 関連テーブルで簡易ページネーションを使用し、リスト性能を改善 ([#9117](https://github.com/nocobase/nocobase/pull/9117)) by @mytharcher
* **[AI 従業員]** AI 従業員でブロック選択後、フォーム添付ファイルを送信ボックスの添付ファイルアップロード領域に自動入力するよう改善 ([#9127](https://github.com/nocobase/nocobase/pull/9127)) by @cgyrock
* **[ワークフロー：承認]**`approvals` と `approvalRecords` テーブルで簡易ページネーションを使用し、リスト性能を改善 by @mytharcher

### 🐛 不具合修正

* **[client]**
  * フィールドルール設定で単一選択フィールドの選択肢が空になる問題を修正 ([#9119](https://github.com/nocobase/nocobase/pull/9119)) by @jiannx
  * フィールド値設定でリレーションフィールドコンポーネントが正しく表示されない問題を修正。 ([#9063](https://github.com/nocobase/nocobase/pull/9063)) by @gchust
  * サブテーブルのデフォルト値設定が反映されない問題を修正。 ([#9087](https://github.com/nocobase/nocobase/pull/9087)) by @gchust
* **[utils]** サーバーからの HTTP リクエストにセキュリティ制御を追加し、潜在的な SSRF リスクを回避 ([#9079](https://github.com/nocobase/nocobase/pull/9079)) by @mytharcher
  参考ドキュメント：[環境変数](https://docs.nocobase.com/cn/get-started/installation/env)
* **[ワークフロー：ループノード]** ワークフローノードの検証ルールを修正 ([#9111](https://github.com/nocobase/nocobase/pull/9111)) by @mytharcher
* **[通知：サイト内メッセージ]** 受信者コンポーネントが正常に動作しない問題を修正 ([#9123](https://github.com/nocobase/nocobase/pull/9123)) by @mytharcher
* **[IdP: OAuth]** 通常の API リクエストで OAuth アクセスが正しく動作しない問題を修正 ([#9120](https://github.com/nocobase/nocobase/pull/9120)) by @2013xile
* **[AI 従業員]**
  * ACL により集計クエリのソート順が失われる問題を修正 ([#9099](https://github.com/nocobase/nocobase/pull/9099)) by @2013xile
  * google-gen-ai の LLM サービスで baseURL 設定が反映されない問題を修正 ([#9107](https://github.com/nocobase/nocobase/pull/9107)) by @cgyrock
* **[メール管理]** メール送信成功後に表示されるフォームを閉じる通知を削除 by @jiannx
