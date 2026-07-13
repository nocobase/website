### 🐛 不具合修正

* **[client-v2]**
  * v2 テーブルの固定列でクイック編集を有効にした後、他の列の内容が見えてしまう問題を修正しました。 ([#10076](https://github.com/nocobase/nocobase/pull/10076)) by @katherinehhh
  * v2 のスキャン入力で、iOS Chrome におけるカメラプレビューのレイアウトが崩れる問題を修正しました。 ([#10081](https://github.com/nocobase/nocobase/pull/10081)) by @katherinehhh
* **[app]** Redis キャッシュ設定で、専用キャッシュアドレスが無視される問題を修正しました。 ([#10065](https://github.com/nocobase/nocobase/pull/10065)) by @2013xile
* **[操作：一括編集]** V2 フォームに `<span>process</span>` フィールドが含まれる場合、Markdown エディターの初期化に失敗する問題を修正しました。 ([#10080](https://github.com/nocobase/nocobase/pull/10080)) by @katherinehhh
* **[AIワーカー]** AI の添付ファイル処理ロジックを修正し、クライアントから渡されたファイルパスや URL を信頼しないようにしました。 ([#10037](https://github.com/nocobase/nocobase/pull/10037)) by @cgyrock
* **[ワークフロー]** ワークフローを手動実行する際、リクエストは有効でも実行が開始されていない場合にエラーが返される問題を修正しました。 ([#10049](https://github.com/nocobase/nocobase/pull/10049)) by @mytharcher
* **[Redis Worker ID アロケーター]**
  * Redis Worker ID の分離と障害診断を改善しました。 by @2013xile
  * Worker ID 用の Redis が未設定の場合、シングルノードモードを起動できない問題を修正しました。 by @2013xile
* **[ワークフロー：承認]** 暫定スイッチが有効な場合、承認送信中のファイルリレーションでは、現在のユーザーが作成したファイルのみを保持するようにしました。 by @mytharcher
