### 🚀 機能改善

* **[データベース]** MariaDB 接続インスタンスに `multipleStatements` オプションを追加し、1回のクエリで複数ステートメントの実行をサポート ([#7781](https://github.com/nocobase/nocobase/pull/7781)) by @mytharcher
* **[ワークフロー]** ワークフロー内のデータブロックで統一された詳細ブロック設定メニューを使用可能に ([#7771](https://github.com/nocobase/nocobase/pull/7771)) by @mytharcher

### 🐛 不具合修正

* **[サーバー]** アプリ名を用いた Pub/Sub チャネルの分離を実装 ([#7762](https://github.com/nocobase/nocobase/pull/7762)) by @mytharcher
* **[クライアント]** “Maximum call stack size exceeded” エラーを修正 ([#7780](https://github.com/nocobase/nocobase/pull/7780)) by @zhangzhonghe
* **[データベース]** フィールド名が snake\_case の場合にインデックスフィールド判定が誤る問題を修正 ([#7776](https://github.com/nocobase/nocobase/pull/7776)) by @2013xile
* **[ワークフロー]** クラスターモードでスケジューラがアイドル状態を正しく認識できず、プラグイン準備前にキューイベントを消費する問題を修正 ([#7768](https://github.com/nocobase/nocobase/pull/7768)) by @mytharcher
* **[モバイル（廃止予定）]** モバイル版の日付フィールドでデフォルト値選択ポップアップが日付を選択できない問題を修正 ([#7783](https://github.com/nocobase/nocobase/pull/7783)) by @zhangzhonghe
* **[ワークフロー：承認]** 承認ワークフローのコピー時にエラーが発生する問題を修正 by @mytharcher
* **[メール管理]**`mailMessages` にインデックスを追加 by @jiannx
