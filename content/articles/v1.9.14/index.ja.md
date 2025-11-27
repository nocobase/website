### 🎉 新機能

* **[認証：OIDC]** 未ログイン時に自動で SSO ログインページへリダイレクトできるようになりました by @heziqiang

### 🚀 機能改善

* **[client]** メッセージ内の変数に三重括弧を使うことで、Handlerbars による自動エスケープを防ぐよう改善しました ([#7972](https://github.com/nocobase/nocobase/pull/7972)) by @mytharcher
* **[データ表フィールド：Markdown(Vditor)]** 全画面表示時のレイアウト幅を調整しました ([#7974](https://github.com/nocobase/nocobase/pull/7974)) by @katherinehhh

### 🐛 不具合修正

* **[database]** time フィールド変換で UTC 処理を行っていたため時間がずれる問題を解消しました ([#7812](https://github.com/nocobase/nocobase/pull/7812)) by @ChimingLiu
* **[client]** ドロップダウンで値がオブジェクトでない場合に label が正しく表示されない問題を修正しました ([#7975](https://github.com/nocobase/nocobase/pull/7975)) by @katherinehhh
* **[ワークフロー]**
  * サービス停止前に作成された実行スケジュールがキューへ送られない不具合を修正しました ([#7981](https://github.com/nocobase/nocobase/pull/7981)) by @mytharcher
  * デフォルトの ToDo リストからタスクを開くと誤ったページへ遷移する問題を修正しました ([#7983](https://github.com/nocobase/nocobase/pull/7983)) by @mytharcher
  * 一部の ToDo メニューが表示されない問題を修正しました ([#7980](https://github.com/nocobase/nocobase/pull/7980)) by @mytharcher
  * provider 設定の誤りで ToDo 件数が表示されなくなる問題を修正しました ([#7968](https://github.com/nocobase/nocobase/pull/7968)) by @mytharcher
* **[ワークフロー：人工処理ノード]** 人工 ToDo の件数が正しく集計されない問題を修正しました ([#7984](https://github.com/nocobase/nocobase/pull/7984)) by @mytharcher
* **[データ可視化]**
  * 外部データソースのフィルターフィールド設定で固有属性が表示されない問題を修正しました ([#7982](https://github.com/nocobase/nocobase/pull/7982)) by @2013xile
  * グラフのデータクエリが ACL のデータ範囲を扱えない問題を修正しました ([#7915](https://github.com/nocobase/nocobase/pull/7915)) by @2013xile
* **[データソース管理]** 外部データソースでパスワード更新がシステムに反映されない問題を修正しました ([#7977](https://github.com/nocobase/nocobase/pull/7977)) by @cgyrock
* **[操作：レコードインポート]** ツリーテーブルのインポート時に発生していたエラーを修正しました ([#7976](https://github.com/nocobase/nocobase/pull/7976)) by @cgyrock
