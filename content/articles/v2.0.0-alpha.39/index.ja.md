### 🚀 機能改善

* **[client]** モバイル向けコンポーネントに対応しました。([#7870](https://github.com/nocobase/nocobase/pull/7870)) by @zhangzhonghe

### 🐛 不具合修正

* **[client]**
  * js フィールドのデフォルト設定が表示モードを反映していなかった問題を修正。([#7862](https://github.com/nocobase/nocobase/pull/7862)) by @gchust
  * 参照テンプレートをドラッグ後に削除すると、コピーしたテンプレートが表示されない問題を修正。([#7847](https://github.com/nocobase/nocobase/pull/7847)) by @zhangzhonghe
  * フィルターフォームの日付フィールドでデフォルト値が正しく設定されない問題を修正。([#7853](https://github.com/nocobase/nocobase/pull/7853)) by @gchust
  * 承認フォームの連動ルールが反映されない問題を修正。([#7858](https://github.com/nocobase/nocobase/pull/7858)) by @zhangzhonghe
  * テーブルブロックのクイック編集でデータが更新されない問題を修正。([#7845](https://github.com/nocobase/nocobase/pull/7845)) by @gchust
  * リッチテキストのデフォルト値が入力できない、または複数選択フィールドで複数のデフォルト値を選べない問題を修正。([#7864](https://github.com/nocobase/nocobase/pull/7864)) by @gchust
* **[多アプリ管理（廃止済み）]** サブアプリ停止時に同期シグナルを送信し、他ノードへ停止情報を通知するよう修正。([#7849](https://github.com/nocobase/nocobase/pull/7849)) by @2013xile
* **[ワークフロー：承認]** 承認フォームの連動ルールが反映されない不具合を修正。by @zhangzhonghe
* **[メール管理]** ShadowHtml 更新時に発生していたエラーを修正。by @jiannx
