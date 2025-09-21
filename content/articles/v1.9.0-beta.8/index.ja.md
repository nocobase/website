### 🚀 機能改善

* **[auth]** ユーザー名に`.`を使用することをサポート（[#7504](https://github.com/nocobase/nocobase/pull/7504)）@2013xile
* **[client]** ツールチップとグループ項目のタイトルにローカライズをサポート（[#7485](https://github.com/nocobase/nocobase/pull/7485)）@katherinehhh
* **[Workflow: Manual node]** 無効化されたワークフロー内の保留中の手動タスクを表示および再開することをサポート（[#7493](https://github.com/nocobase/nocobase/pull/7493)）@mytharcher
* **[Calendar]** カレンダーヘッダーのロケールマッピング表示をサポート（[#7508](https://github.com/nocobase/nocobase/pull/7508)）@katherinehhh
* **[Theme editor]** サイドメニューの色のカスタマイズをサポート（[#7483](https://github.com/nocobase/nocobase/pull/7483)）@duannyuuu
* **[Redis queue adapter]** Redis メッセージキューアダプターに標準的なシステムロガーを使用 @mytharcher

### 🐛 不具合修正

* **[client]**
  * ボタンアイコン設定のポップアップが覆われる / 重なる問題を修正（[#7506](https://github.com/nocobase/nocobase/pull/7506)）@zhangzhonghe
  * メニューアイコン設定のポップオーバーが隠れる問題を修正（[#7515](https://github.com/nocobase/nocobase/pull/7515)）@zhangzhonghe
  * ポップオーバーコンポーネントが重なったり覆われたりする問題を修正（[#7491](https://github.com/nocobase/nocobase/pull/7491)）@zhangzhonghe
* **[Notification: In-app message]**
  * 通知リンクの解析が不正確になる問題を修正（[#7509](https://github.com/nocobase/nocobase/pull/7509)）@mytharcher
  * 通知ポップアップを開いた際に最新のメッセージが表示されない問題を修正（[#7514](https://github.com/nocobase/nocobase/pull/7514)）@mytharcher
* **[Workflow]**
  * ワークフローログのキャッシュに関連する潜在的なエラーを修正（[#7490](https://github.com/nocobase/nocobase/pull/7490)）@mytharcher
  * ワークフローのバックグラウンドタスクキューにおける不正なサブスクリプションロジックにより実行メッセージが誤って処理される問題を修正（[#7507](https://github.com/nocobase/nocobase/pull/7507)）@mytharcher
* **[Data source: REST API]** REST API の URL 検証ルールを修正 @katherinehhh
* **[HTTP request encryption]** リクエストパラメーターがネイティブの URLSearchParams 型をサポートしない問題を修正 @mytharcher
* **[Template print]** chinaRegions フィールドをサポート @jiannx
* **[Workflow: Approval]**
  * 承認フォーム内の数式フィールドが自動的に更新されない問題を修正 @mytharcher
  * 外部データソースからデータを削除する際にエラーが発生する問題を修正 @mytharcher
