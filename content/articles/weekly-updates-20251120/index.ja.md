週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.8](https://www.nocobase.com/ja/blog/v1.9.8)

*リリース日：2025-11-19*

### 🐛 不具合修正

* **[ワークフロー：カスタムアクションイベント]** 存在しない外部データソースを監視した際に発生していたエラーを修正しました。by @mytharcher
* **[テンプレート印刷]** filter 内で使用される変数の解析処理を修正しました。by @jiannx
* **[ワークフロー：承認]** 複数の承認者が同時に処理した場合に競合が発生し、ノードが重複実行される問題を修正しました。by @mytharcher

### [v1.9.7](https://www.nocobase.com/ja/blog/v1.9.7)

*リリース日：2025-11-18*

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.42](https://www.nocobase.com/ja/blog/v2.0.0-alpha.42)

*リリース日：2025-11-19*

### 🐛 不具合修正

* **[client]** JS ブロック内でタイトルと説明が表示されない不具合を修正しました。([#7913](https://github.com/nocobase/nocobase/pull/7913)) by @gchust

### [v2.0.0-alpha.41](https://www.nocobase.com/ja/blog/v2.0.0-alpha.41)

*リリース日：2025-11-19*

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

### [v2.0.0-alpha.40](https://www.nocobase.com/ja/blog/v2.0.0-alpha.40)

*リリース日：2025-11-18*

### 🚀 機能改善

* **[flow-engine]** ツールバーのレイアウトを調整し、アイコンが隠れないよう改善しました。([#7883](https://github.com/nocobase/nocobase/pull/7883)) by @zhangzhonghe

### 🐛 不具合修正

* **[flow-engine]** ユーザー再ログイン時に ACL 権限データが再読み込みされない不具合を修正しました。([#7874](https://github.com/nocobase/nocobase/pull/7874)) by @gchust
* **[client]** フォームフィールド設定に存在した不具合を修正しました。([#7867](https://github.com/nocobase/nocobase/pull/7867)) by @katherinehhh
* **[データ可視化]** チャートプレビュー時のみ SQL クエリのデバッグモードを使用するように改善しました。([#7893](https://github.com/nocobase/nocobase/pull/7893)) by @heziqiang
* **[多スペース]** 複数スペースでのユーザー関連付けの不具合を修正しました。by @jiannx
* **[ワークフロー：承認]**
  * 通知チャネルのページサイズが小さすぎて全件表示できなかった問題を修正しました。by @mytharcher
  * 承認処理送信時に発生していた承認レコード取得のパフォーマンス問題を改善しました。by @mytharcher
  * To-do センターの承認カードの日付表示を見直し、日時をわかりやすく表示するよう修正しました。by @mytharcher

### [v2.0.0-alpha.39](https://www.nocobase.com/ja/blog/v2.0.0-alpha.39)

*リリース日：2025-11-17*

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
