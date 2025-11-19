### 🎉 新機能

* **[データ可視化]** チャート設定用の AI アシスタントを追加しました。([#7815](https://github.com/nocobase/nocobase/pull/7815)) by @heziqiang

### 🚀 機能改善

* **[flow-engine]**
  * flow engine レイヤーで models ツリーの変更を監視できるようになりました。([#7905](https://github.com/nocobase/nocobase/pull/7905)) by @gchust
  * 現在レコードの変数解析を改善し、ポップアップの表示速度を向上しました。([#7895](github.com/nocobase/nocobase/pull/7895)) by @gchust
  * runjs のコンテキストで利用するサードパーティライブラリの API 構造を整理し、Antd アイコンの利用に対応しました。([#7896](github.com/nocobase/nocobase/pull/7896)) by @gchust
* **[database]** フィールド暗号化プラグインを再構築し、安全性を強化。アプリキーの生成・交換やフィールド単位の鍵に対応しました。([#7769](github.com/nocobase/nocobase/pull/7769)) by @cgyrock
* **[データ表フィールド：暗号化]** フィールド暗号化プラグインを改善し、独立 IV 環境でのデータ検索をサポートしました。by @cgyrock

### 🐛 不具合修正

* **[client]**
  * 非表示ブロックがページレイアウトに空白として残ってしまう問題を修正しました。([#7906](github.com/nocobase/nocobase/pull/7906)) by @gchust
  * フィルターボタンのリセット操作がデフォルト条件まで消してしまう問題を修正しました。([#7903](github.com/nocobase/nocobase/pull/7903)) by @zhangzhonghe
  * 新規フォームのサブフォームで権限判定が誤っていた問題を修正しました。([#7902](github.com/nocobase/nocobase/pull/7902)) by @katherinehhh
* **[server]** サービス分割モードで、購読がない場合にキューメッセージを発行できなかった問題を修正しました。([#7875](github.com/nocobase/nocobase/pull/7875)) by @mytharcher
* **[ワークフロー]**
  * 存在しない外部データソースを監視した際に発生していたエラーを修正しました。([#7855](github.com/nocobase/nocobase/pull/7855)) by @mytharcher
  * 共有バックグラウンドキューの誤処理を防ぐため、内部イベントキューへ切り替えました。([#7871](github.com/nocobase/nocobase/pull/7871)) by @mytharcher
* **[ワークフロー：手動処理ノード]** 翻訳設定が誤ったネームスペースを参照していた問題を修正しました。([#7877](github.com/nocobase/nocobase/pull/7877)) by @mytharcher
* **[権限管理]** リレーションフィールドの関連操作 snippets が動作しない不具合を修正しました。([#7876](github.com/nocobase/nocobase/pull/7876)) by @2013xile
* **[ワークフロー：カスタムアクションイベント]** 存在しない外部データソース監視時のエラーを修正しました。by @mytharcher
* **[コメント]** コメントブロックで引用が正しく機能しない問題を修正しました。by @katherinehhh
* **[テンプレート印刷]** filter 内の変数解析を修正しました。by @jiannx
* **[ワークフロー：承認]** 複数の承認者が同時に処理した際に競合が発生し、ノードが重複実行される問題を修正しました。by @mytharcher
