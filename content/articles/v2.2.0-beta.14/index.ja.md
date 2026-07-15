### 🎉 新機能

* **[Auth: LDAP]** LDAP ユーザーデータ同期ソースをサポートし、オプションで AD 部門同期にも対応しました。 by @chenzhizdt

### 🚀 機能改善

* **[ai]** ナレッジベースドキュメントのアップロード解析時におけるメインプロセスのメモリ使用量を削減しました。([#10083](https://github.com/nocobase/nocobase/pull/10083)) by @cgyrock
* **[undefined]** ファイル URL が安定した NocoBase アクセス URL を使用するようになり、ストレージ先へリダイレクトする前に権限確認を実行できるようになりました。([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher
* **[Flow engine]** UI 構築 API が複数ワークスペースをサポートしました。([#10072](https://github.com/nocobase/nocobase/pull/10072)) by @gchust
* **[File storage: S3 (Pro)]** S3 Pro アップロードで、永続ファイル URL を含む作成済みファイルレコードを返すようになりました。 by @mytharcher
* **[RabbitMQ message queue adapter]** RabbitMQ アダプターのチャネル管理とエラー復旧能力を強化しました。 by @sdp-ncd

### 🐛 不具合修正

* **[client-v2]**
  * v2 テーブルの固定列でクイック編集を有効にした際、他の列内容が表示される問題を修正しました。([#10076](https://github.com/nocobase/nocobase/pull/10076)) by @katherinehhh
  * iOS Chrome 上で v2 スキャン入力のカメラプレビュー表示が崩れる問題を修正しました。([#10081](https://github.com/nocobase/nocobase/pull/10081)) by @katherinehhh
* **[Workflow]**
  * ワークフローのシリアライズ時に関連データを追加すると、非表示フィールドが含まれる問題を修正しました。([#10086](https://github.com/nocobase/nocobase/pull/10086)) by @mytharcher
  * 手動ワークフロー実行時、リクエストが有効でも実行が開始されない場合にエラーが返される問題を修正しました。([#10049](https://github.com/nocobase/nocobase/pull/10049)) by @mytharcher
* **[Data table field: Markdown (Vditor)]** v1 Markdown のレンダリングおよび編集時における iframe クリーンアップ問題を修正しました。([#10096](https://github.com/nocobase/nocobase/pull/10096)) by @katherinehhh
* **[Action: Bulk edit]** v2 フォームに `<span>process</span>` フィールドが含まれる場合、Markdown エディターの初期化に失敗する問題を修正しました。([#10080](https://github.com/nocobase/nocobase/pull/10080)) by @katherinehhh
* **[UI layout]** サブアプリの Mobile 設定入口が誤ってメインアプリへリダイレクトされる問題を修正しました。([#10075](https://github.com/nocobase/nocobase/pull/10075)) by @katherinehhh
* **[AI employees]**
  * AI ツール呼び出し承認時に、決定更新前に会話権限を検証してしまう問題を修正しました。([#10077](https://github.com/nocobase/nocobase/pull/10077)) by @cgyrock
  * クライアントから渡されたファイルパスや URL を信頼しないよう、AI 添付ファイル処理を修正しました。([#10037](https://github.com/nocobase/nocobase/pull/10037)) by @cgyrock
* **[User data synchronization]** 外部部門同期順序の問題を修正し、親部門が後から同期された場合でも既存の子部門が正しく親部門に紐付くようにしました。([#10028](https://github.com/nocobase/nocobase/pull/10028)) by @chenzhizdt
* **[Data source: External NocoBase]**
  * Workflow AI employees が外部 NocoBase データソースの添付ファイルを読み取れない問題を修正しました。 by @2013xile
  * S3 Pro アップロードを含む外部 NocoBase ファイルコレクションのファイルプレビュー、永続 URL 処理、アップロードルーティング問題を修正しました。 by @mytharcher
* **[Workflow: Approval]** 一時スイッチが有効な場合、承認送信時のファイル関連付けでは現在ユーザーが作成したファイルのみ保持するようにしました。 by @mytharcher
