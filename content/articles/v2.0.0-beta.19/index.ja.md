### 🎉 新機能

* **[認証：DingTalk]**`unionId` によるユーザー連携をサポート by @2013xile

### 🚀 機能改善

* **[client]** インライン編集におけるサブテーブル列幅の設定方法をドロップダウン選択方式に変更 ([#8561](https://github.com/nocobase/nocobase/pull/8561)) by @katherinehhh
* **[データテーブルフィールド：Markdown(Vditor)]** デフォルトの編集モード設定を追加し、コンポーネント設定から初期編集状態を選択可能に ([#8408](https://github.com/nocobase/nocobase/pull/8408)) by @Cyx649312038
* **[マルチスペース]** マルチスペースの権限制御を ACL に対応 by @jiannx
* **[AI: ナレッジベース]** ビルド成果物を最適化し、AI ナレッジベースプラグインのパッケージサイズを削減 by @cgyrock

### 🐛 不具合修正

* **[client]**
  * 編集フォームでリレーションフィールドセレクターのクイック追加ボタンからデータを追加した際、フォーム内データが上書きされる問題を修正。 ([#8567](https://github.com/nocobase/nocobase/pull/8567)) by @gchust
  * Grid レイアウトに不要なプレースホルダーが表示される問題を修正 ([#8535](https://github.com/nocobase/nocobase/pull/8535)) by @zhangzhonghe
  * ツリーテーブル有効時、「子レコードを追加」操作を追加するためにページ更新が必要になる問題を修正 ([#8574](https://github.com/nocobase/nocobase/pull/8574)) by @katherinehhh
  * サブテーブルのインライン編集時、列幅を縮小しても即時反映されない問題、および複数行テキストフィールドで列幅拡張後に入力欄が列幅に追従しない問題を修正 ([#8573](https://github.com/nocobase/nocobase/pull/8573)) by @katherinehhh
  * 追加操作のポップアップにテーブル（追加）メニューが表示される問題を修正。 ([#8562](https://github.com/nocobase/nocobase/pull/8562)) by @gchust
* **[flow-engine]**
  * JS block 内で一部のサードパーティライブラリを正しく読み込めない問題を修正。 ([#8545](https://github.com/nocobase/nocobase/pull/8545)) by @gchust
  * ページ切替後に再度ポップアップを開いてフォーム送信しても画面が更新されない問題を修正。 ([#8554](https://github.com/nocobase/nocobase/pull/8554)) by @gchust
* **[UI テンプレート]** リレーションフィールドの新規レコードフォームポップアップをテンプレート保存後、再度開いて送信するとエラーが発生する問題を修正。 ([#8564](https://github.com/nocobase/nocobase/pull/8564)) by @gchust
* **[データテーブルフィールド：添付ファイル（URL）]** 編集フォーム内の添付ファイル URL フィールド設定で、ファイル名表示が有効にならない問題を修正 ([#8571](https://github.com/nocobase/nocobase/pull/8571)) by @katherinehhh
* **[AI 従業員]** LLM ノードからのメッセージ送信に失敗する問題を修正 ([#8569](https://github.com/nocobase/nocobase/pull/8569)) by @2013xile
* **[操作：レコードインポート]** インポート処理におけるセキュリティリスクを修正 ([#8544](https://github.com/nocobase/nocobase/pull/8544)) by @mytharcher
* **[ワークフロー：カスタム操作イベント]** カスタム操作ワークフロー実行時にパラメータおよびペイロードが正しく渡されない問題を修正 by @mytharcher
* **[マルチスペース]**
  * スペースフィールドの x-ready-pretty を削除するマイグレーションスクリプトを追加 by @jiannx
  * スペースフィールドから read-pretty 属性を削除 by @jiannx
* **[ワークフロー：承認]** リスト API 読み込み時、JSON フィールド追加によって発生するパフォーマンス問題（MySQL）を修正 by @mytharcher
