### 🎉 新機能

* **[DingTalk]** DingTalk Stream モードで組織イベント同期をサポートしました。 by @chenzhizdt
* **[Auth: LDAP]** LDAP ユーザーデータ同期ソースをサポートし、オプションで AD 部門同期にも対応しました。 by @chenzhizdt

### 🚀 機能改善

* **[ai]** ナレッジベースドキュメントのアップロード解析時におけるメインプロセスのメモリ使用量を削減しました。([#10083](https://github.com/nocobase/nocobase/pull/10083)) by @cgyrock
* **[undefined]**
  * ファイル URL が安定した NocoBase アクセス URL を使用するようになり、ストレージ先へリダイレクトする前に権限確認を実行できるようになりました。([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher
* **[File storage: S3 (Pro)]** S3 Pro アップロードで、永続ファイル URL を含む作成済みファイルレコードを返すようになりました。 by @mytharcher
* **[RabbitMQ message queue adapter]** RabbitMQ アダプターのチャネル管理とエラー復旧能力を強化しました。 by @sdp-ncd

### 🐛 不具合修正

* **[User data synchronization]** 外部部門同期の順序問題を修正し、親部門が後から同期された場合でも、既存の子部門が正しく親部門に紐付くようにしました。([#10028](https://github.com/nocobase/nocobase/pull/10028)) by @chenzhizdt
* **[Data table field: Markdown (Vditor)]** v1 Markdown のレンダリングおよび編集時における iframe クリーンアップ問題を修正しました。([#10096](https://github.com/nocobase/nocobase/pull/10096)) by @katherinehhh
* **[Workflow]** ワークフローのシリアライズ時に関連データを追加すると、非表示フィールドが含まれる問題を修正しました。([#10086](https://github.com/nocobase/nocobase/pull/10086)) by @mytharcher
* **[AI employees]** AI ツール呼び出し承認時に、決定更新前にメッセージ所属会話の権限を確認する問題を修正しました。([#10077](https://github.com/nocobase/nocobase/pull/10077)) by @cgyrock
* **[Data source: External NocoBase]**
  * 外部 NocoBase ファイルコレクションのファイルプレビュー、永続 URL 処理、アップロードルーティング問題を修正しました。S3 Pro アップロードにも対応しています。 by @mytharcher
  * Workflow AI employees が外部 NocoBase データソースの添付ファイルを読み取れない問題を修正しました。 by @2013xile
