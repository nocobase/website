### 🎉 新機能

* **[ワークフロー]** 開始済みのワークフロー実行を、開始ノードまたは指定したノードから再実行するための管理者向け API を追加しました。([#9569](https://github.com/nocobase/nocobase/pull/9569)) by @mytharcher

### 🚀 機能改善

* **[client]** メニュー項目設定から非表示オプションを削除しました。([#9595](https://github.com/nocobase/nocobase/pull/9595)) by @zhangzhonghe

### 🐛 不具合修正

* **[client]**
  * v2 モバイル版の日付ポップアップで、フォーム値ではなく現在時刻が使用される問題を修正しました。([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  * v2 の時間フィールドで、フォーマット設定が反映されない問題を修正しました。([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
  * v1 のスキャン入力コンポーネントにおけるファイルアップロード上限を 10MB に引き上げました。([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
  * サブフォームフィールドが連動ルールによって表示された後も、送信時に除外される問題を修正しました。([#9594](https://github.com/nocobase/nocobase/pull/9594)) by @katherinehhh
  * v2 サブフォーム内のサブテーブルで、2 件目のデータを追加できない問題を修正しました。([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  * メニュー切り替え後にページのタブが消える問題を修正しました。([#9583](https://github.com/nocobase/nocobase/pull/9583)) by @zhangzhonghe
* **[flow-engine]** ポップアップ内のフォーム送信が成功した後、テーブル操作の連動ルールが誤って実行される問題を修正しました。([#9445](https://github.com/nocobase/nocobase/pull/9445)) by @gchust
* **[ワークフロー：カスタム操作イベント]** カスタム操作イベントのテーブルボタンで、複数行データのコンテキスト下でもカスタムコンテキストワークフローを選択できてしまう問題を修正しました。([#9608](https://github.com/nocobase/nocobase/pull/9608)) by @mytharcher
* **[ファイルマネージャー]**
  * ファイルアップロード時に Unicode ファイル名が誤って二重デコードされ、制御文字を含むオブジェクトキーが生成される問題を修正しました。([#9584](https://github.com/nocobase/nocobase/pull/9584)) by @mytharcher
  * PDF プレビュー失敗時のエラーメッセージを改善し、外部ストレージの CORS 設定に関する説明を追加しました。([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
    参考資料：[ファイルプレビュー](docs/docs/cn/file-manager/file-preview/index.md)
