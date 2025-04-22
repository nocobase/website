### 🎉 新機能

- **[client]**
  - テーブルブロックは、インデックス列の非表示設定をサポート（デフォルトは表示） ([#6416](https://github.com/nocobase/nocobase/pull/6416)) by @katherinehhh
  - 連動ルールにおいて、選択可能フィールドオプションの設定をサポート ([#6338](https://github.com/nocobase/nocobase/pull/6338)) by @katherinehhh
  - 連動ルールでの日時フィールドに対し、日付範囲（最小／最大）の設定をサポート ([#6356](https://github.com/nocobase/nocobase/pull/6356)) by @katherinehhh

- **[Block: Action panel]** アクションパネル内で、アクションタイトルの改行をサポート ([#6433](https://github.com/nocobase/nocobase/pull/6433)) by @katherinehhh

### 🐛 バグ修正

- **[client]**
  - サブテーブルのページサイズ変更後、データ追加時にページ番号が誤って表示される問題を修正 ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh
  - ロゴのスタイルが従来と一致しない問題を修正 ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe
  - サブテーブルのレコード削除時に、マルチセレクトフィールドの値が変化し、オプションが失われる問題を修正 ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh
  - 日付フィールドの範囲選択において、最大日付が含まれない問題を修正 ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh
  - '$anyOf' オペレーター使用時に、連動ルールが無効になる問題を修正 ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe
  - リンクボタンで開かれるポップアップウィンドウ内のデータが更新されない問題を修正 ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe

- **[Action: Batch edit]** 一括編集送信時に、ワークフローが起動しない問題を修正 ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher

- **[Data visualization]** カスタムフィルターフィールド追加時に、削除されたフィールドが表示される問題を修正 ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile

- **[Data source manager]** ロール管理において、データソース切替時に該当するコレクションが読み込まれない問題を修正 ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh

- **[Action: Custom request]** カスタムリクエストのサーバー側権限検証に誤りがある問題を修正 ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh

- **[File manager]** ファイルマネージャーのいくつかの問題を修正 ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher

- **[Notification: In-app message]**
  - 誤った受信者設定により全ユーザーが検索される問題を防止 ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66
  - アプリ内メッセージ一覧の背景色とメッセージカードを区別し、視覚的な階層と可読性を向上させるよう調整 ([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66

- **[Workflow: Manual node]**
  - マイグレーションのバージョン制限を `<1.7.0` に変更 ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher
  - テーブルのプレフィックス及びスキーマロジックが欠落していたマイグレーションを修正 ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher