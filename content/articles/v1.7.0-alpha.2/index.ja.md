### 🎉 新機能

- **[client]**
  - カスケード選択コンポーネントにデータスコープ設定を追加 ([#6386](https://github.com/nocobase/nocobase/pull/6386)) by @Cyx649312038
  - テーブルブロックでインデックス列の非表示をサポート（デフォルトは表示） ([#6416](https://github.com/nocobase/nocobase/pull/6416)) by @katherinehhh
  - 連動ルールで選択可能なフィールドオプションの設定をサポート ([#6338](https://github.com/nocobase/nocobase/pull/6338)) by @katherinehhh
  - 連動ルールで時間フィールドの日付範囲（min/max）の設定をサポート ([#6356](https://github.com/nocobase/nocobase/pull/6356)) by @katherinehhh

- **[acl]** ユーザーロールの結合をサポート ([#6301](https://github.com/nocobase/nocobase/pull/6301)) by @aaaaaajie

- **[Block: Action panel]** アクションパネルのアクションタイトルで改行をサポート ([#6433](https://github.com/nocobase/nocobase/pull/6433)) by @katherinehhh

- **[plugin-demo-platform]** "/new" ルートの skipAuthCheck を true に設定 by @sheldon66

- **[WeCom]** サインインボタンにカスタムツールチップを設定可能にする by @2013xile

### 🚀 改善

- **[utils]**
  - `md5` をユーティリティに移動 ([#6468](https://github.com/nocobase/nocobase/pull/6468)) by @mytharcher
  - デスクトップページのモバイル対応を実装 ([#6393](https://github.com/nocobase/nocobase/pull/6393)) by @zhangzhonghe

- **[client]** router.add に skipAuthCheck を追加し、公共ページアクセス時のログインリダイレクトを防止 ([#6453](https://github.com/nocobase/nocobase/pull/6453)) by @sheldon66

- **[Data visualization]** 非推奨の `x-designer` を `x-settings` に置換 ([#6442](https://github.com/nocobase/nocobase/pull/6442)) by @2013xile

### 🐛 バグ修正

- **[client]**
  - ツリーブロックでチェックを外した際に、データブロックのデータがクリアされない問題を修正 ([#6460](https://github.com/nocobase/nocobase/pull/6460)) by @zhangzhonghe
  - 画像URL内の特殊文字により画像が表示されない問題を修正 ([#6459](https://github.com/nocobase/nocobase/pull/6459)) by @mytharcher
  - サブテーブルのページサイズ変更後にデータ追加時のページ番号が誤って表示される問題を修正 ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh
  - モバイルブラウザでページ内容が完全に表示されない問題を修正 ([#6446](https://github.com/nocobase/nocobase/pull/6446)) by @zhangzhonghe
  - ロゴのスタイルが以前と一致していない問題を修正 ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe
  - 日付フィールドの範囲選択で最大日付が除外される問題を修正 ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh
  - $anyOf 演算子使用時に連動ルールが無効になる問題を修正 ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe
  - サブテーブルレコード削除時にマルチセレクトフィールドの値が変化し、オプションが失われる問題を修正 ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh
  - リンクボタンで開かれたポップアップウィンドウでデータが更新されない問題を修正 ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe

- **[acl]** ロールユニオン時に関係フィールドが表示されない問題を修正 ([#6456](https://github.com/nocobase/nocobase/pull/6456)) by @aaaaaajie

- **[File manager]**
  - S3に保存されたファイルを削除できない問題を修正 ([#6467](https://github.com/nocobase/nocobase/pull/6467)) by @chenos
  - ファイルマネージャのいくつかの問題を修正 ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher

- **[Workflow]** データピッカーからワークフロー設定ボタンのバインドを削除 ([#6455](https://github.com/nocobase/nocobase/pull/6455)) by @mytharcher

- **[Workflow: Manual node]**
  - マイグレーション実行時のエラーを修正 ([#6445](https://github.com/nocobase/nocobase/pull/6445)) by @mytharcher
  - マイグレーションのバージョン制限を `<1.7.0` に変更 ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher
  - テーブル接頭辞およびスキーマロジックが欠落したマイグレーションを修正 ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher

- **[Access control]**
  - ロール切替が反映されない問題を修正 ([#6454](https://github.com/nocobase/nocobase/pull/6454)) by @aaaaaajie
  - 作成者フィールドが存在しないテーブルで、自分のデータ範囲を設定するとエラーが発生する問題を修正 ([#6428](https://github.com/nocobase/nocobase/pull/6428)) by @aaaaaajie

- **[WEB client]** ctx.state.currentRole（シングルロール）をctx.state.currentRoles（複数ロール対応）に置換 ([#6427](https://github.com/nocobase/nocobase/pull/6427)) by @aaaaaajie

- **[Action: Batch edit]** 一括編集送信時にワークフローが起動しない問題を修正 ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher

- **[Data source manager]** ロール管理でデータソース切替時に対応するコレクションが読み込まれない問題を修正 ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh

- **[Data visualization]** カスタムフィルター追加時に削除されたフィールドが表示される問題を修正 ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile

- **[Notification: In-app message]**
  - アプリ内メッセージリストとメッセージカードの背景色を区別し、視覚階層と可読性を向上 ([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66
  - 誤った受信者設定により全ユーザーがクエリされるのを回避 ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66

- **[Action: Custom request]** カスタムリクエストのサーバー側権限検証エラーを修正 ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh

- **[Auth: API keys]** API keysプラグインのロールリストからユニオンを除外 ([#6432](https://github.com/nocobase/nocobase/pull/6432)) by @aaaaaajie

- **[Block: template]** モバイルクライアントでブロックをテンプレートとして保存する際の挙動を修正 ([#6420](https://github.com/nocobase/nocobase/pull/6420)) by @gchust

- **[Workflow: Custom action event]** E2Eテストケースから `only` を削除 by @mytharcher

- **[File storage: S3(Pro)]** S3(Pro)の署名付きURLにアクセスできない問題を解決 by @chenos

- **[Workflow: Approval]**
  - 承認プロセステーブルに申請者がいない場合のページクラッシュを回避 by @mytharcher
  - 承認フォームで関連データが表示されない問題を修正 by @mytharcher
  - 外部データソースで承認時に発生するエラーを修正 by @mytharcher