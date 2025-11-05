### 🚀 機能改善

* **[データベース]** MariaDB 接続インスタンスに `multipleStatements` オプションを追加し、1回のクエリで複数ステートメントの実行をサポート ([#7781](https://github.com/nocobase/nocobase/pull/7781)) by @mytharcher

### 🐛 不具合修正

* **[フローエンジン]** テーブルブロックでページ切り替え後、行アクションボタンが正しく更新されない問題を修正し、ボタン機能が現在のページデータと一致するよう改善 ([#7779](https://github.com/nocobase/nocobase/pull/7779)) by @gchust
* **[クライアント]**
  * “Maximum call stack size exceeded” エラーを修正 ([#7780](https://github.com/nocobase/nocobase/pull/7780)) by @zhangzhonghe
  * リレーションフィールドのタイトル項目で省略設定が反映されない問題を修正 ([#7778](https://github.com/nocobase/nocobase/pull/7778)) by @katherinehhh
  * レコード更新アクションボタンの連動ルールが無効になる問題を修正 ([#7774](https://github.com/nocobase/nocobase/pull/7774)) by @gchust
* **[データベース]** フィールド名が snake\_case の場合にインデックスフィールド判定が誤る問題を修正 ([#7776](https://github.com/nocobase/nocobase/pull/7776)) by @2013xile
* **[モバイル（廃止予定）]** モバイル版の日付フィールドでデフォルト値選択ポップアップが日付を選択できない問題を修正 ([#7783](https://github.com/nocobase/nocobase/pull/7783)) by @zhangzhonghe
