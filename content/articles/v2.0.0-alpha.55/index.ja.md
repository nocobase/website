### 🚀 機能改善

* **[server]** アプリケーションインスタンスが存在しない場合でも、メンテナンス状態メッセージ取得時にエラーが発生しないよう耐障害性を改善 ([#8196](https://github.com/nocobase/nocobase/pull/8196)) by @2013xile
* **[ブロック：リスト]** Table／List／Grid Card ブロックにおける Link ボタンの設定項目を追加 ([#8194](https://github.com/nocobase/nocobase/pull/8194)) by @katherinehhh

### 🐛 不具合修正

* **[client]** フィルターフォームでチェックボックスに「いいえ」を選択しても、「はい」として判定されてしまう不具合を修正 ([#8170](https://github.com/nocobase/nocobase/pull/8170)) by @gchust
* **[マイグレーション管理]** ユーザー入力のマイグレーション説明が失われる不具合を修正し、未入力時は現在時刻をデフォルトの説明として設定するよう改善 by @cgyrock
