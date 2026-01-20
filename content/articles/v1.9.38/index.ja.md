### 🚀 機能改善

* **[server]** CORS の Origin ホワイトリストを設定できるように改善 ([#8454](https://github.com/nocobase/nocobase/pull/8454)) by @2013xile
* **[エラーハンドラー]** SQL の参照エラーがそのまま外部に表示されないよう処理を改善 ([#8464](https://github.com/nocobase/nocobase/pull/8464)) by @2013xile

### 🐛 不具合修正

* **[client]**
  * データテーブルのフィールドグループ並び替え設定が反映されない不具合を修正 ([#8453](https://github.com/nocobase/nocobase/pull/8453)) by @katherinehhh
  * データテーブルの GUI 編集画面でエラーが発生する問題を修正 ([#8451](https://github.com/nocobase/nocobase/pull/8451)) by @katherinehhh
  * テーブルの「列設定」ボタンが反応しない不具合を修正 ([#8441](https://github.com/nocobase/nocobase/pull/8441)) by @zhangzhonghe
  * テーブル行ボタンの連動ルールが、ダイアログフォーム内のボタン状態に影響してしまう問題を修正 ([#8434](https://github.com/nocobase/nocobase/pull/8434)) by @zhangzhonghe
* **[モバイル（廃止）]** モバイル向けプラグインを廃止し、2.0 以降は ui-layout プラグインへ移行 ([#8456](https://github.com/nocobase/nocobase/pull/8456)) by @chenos
