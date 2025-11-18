### 🐛 不具合修正

* **[client]** 承認フォームで連動ルールが反映されない不具合を修正しました。([#7858](https://github.com/nocobase/nocobase/pull/7858)) by @zhangzhonghe
* **[server]** サービス分割モードで、購読がない場合にキューメッセージを発行できなかった問題を修正しました。([#7875](https://github.com/nocobase/nocobase/pull/7875)) by @mytharcher
* **[ワークフロー]**
  * 存在しない外部データソースのイベントを監視した際に発生していたエラーを修正しました。([#7855](https://github.com/nocobase/nocobase/pull/7855)) by @mytharcher
  * サービス分割モードで共有キューが誤って処理されないよう、バックグラウンド共有キューから内部イベントキューに切り替えました。([#7871](https://github.com/nocobase/nocobase/pull/7871)) by @mytharcher
* **[ワークフロー：手動処理ノード]** 翻訳設定が誤ったネームスペースを参照していた問題を修正し、正しい翻訳が表示されるようにしました。([#7877](https://github.com/nocobase/nocobase/pull/7877)) by @mytharcher
* **[権限管理]** リレーションフィールドにおける関連操作 snippets が適切に動作しなかった問題を修正しました。([#7876](https://github.com/nocobase/nocobase/pull/7876)) by @2013xile
* **[ワークフロー：承認]**
  * 通知チャネルのページサイズが小さすぎて全件読み込めなかった問題を修正しました。by @mytharcher
  * 承認フォームの連動ルールが反映されない不具合を修正しました。by @zhangzhonghe
  * To-doセンターの承認カードで日付形式を修正し、日時を完全表示するよう改善しました。by @mytharcher
  * 承認処理の送信時に承認レコードを取得する際のパフォーマンス問題を修正しました。by @mytharcher
