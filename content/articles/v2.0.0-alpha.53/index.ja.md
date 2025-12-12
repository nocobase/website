### 🚀 機能改善

* **[acl]**`acl.registerSnippet` による権限スニペット設定のマージに対応 ([#8155](https://github.com/nocobase/nocobase/pull/8155)) by @mytharcher
* **[client]** パーセンテージフィールドで数値フォーマットの設定が可能に ([#8123](https://github.com/nocobase/nocobase/pull/8123)) by @katherinehhh
* **[flow-engine]** 設定メニューの動的な非表示に対応 ([#7924](https://github.com/nocobase/nocobase/pull/7924)) by @gchust
* **[ブロック：グリッドカード]** グリッドカードブロックのスタイルを見直し、レイアウトをよりコンパクトに改善 ([#8152](https://github.com/nocobase/nocobase/pull/8152)) by @katherinehhh
* **[AI 従業員]** 内蔵 AI 従業員のプロンプト編集に対応。<br/>Nathan（AI 従業員）のシステムプロンプトを改善。<br/>サーバー側での静的ファイル読み込みに関する不具合を修正。 ([#8097](https://github.com/nocobase/nocobase/pull/8097)) by @heziqiang
* **[ワークフロー]**
  * 実行器の準備フェーズに耐障害性を持たせ、データ欠落による処理の停止を防止 ([#8156](https://github.com/nocobase/nocobase/pull/8156)) by @mytharcher
  * ワークフローキャンバスの関連データを遅延読み込みに変更し、パフォーマンスを改善 ([#8142](https://github.com/nocobase/nocobase/pull/8142)) by @mytharcher
* **[データテーブルフィールド：Markdown(Vditor)]** 閲覧モードでは Markdown フィールドがデフォルトで変数を展開しないように変更 ([#8145](https://github.com/nocobase/nocobase/pull/8145)) by @katherinehhh

### 🐛 不具合修正

* **[flow-engine]** 添付ファイルのダウンロード時に発生していたエラーを修正 ([#8154](https://github.com/nocobase/nocobase/pull/8154)) by @katherinehhh
* **[client]**
  * options フィールドが存在する場合に、リレーションフィールドのドロップダウンが選択不可になる不具合を修正 ([#8153](https://github.com/nocobase/nocobase/pull/8153)) by @katherinehhh
  * フィルターフォームで単一選択フィールドに複数選択用オペレーターを使用した際、中文入力で既存の選択肢が消える不具合を修正 ([#8140](https://github.com/nocobase/nocobase/pull/8140)) by @gchust
  * タブフィールドの切り替えによって、モーダル設定が失われる不具合を修正 ([#8136](https://github.com/nocobase/nocobase/pull/8136)) by @gchust
* **[acl]** ロールが `root` の場合に `acl.can` API が `null` を返していた不具合を修正 ([#8150](https://github.com/nocobase/nocobase/pull/8150)) by @mytharcher
* **[database]** 複合ユニークキーを持つテーブルのクエリにおいて、`filterByTk` パラメータで配列指定が可能に ([#7986](https://github.com/nocobase/nocobase/pull/7986)) by @chenos
* **[操作：レコードインポート]** インポート後に発火する `afterCreate` イベントの完了を同期的に待機するよう修正 ([#8158](https://github.com/nocobase/nocobase/pull/8158)) by @2013xile
* **[データテーブルフィールド：自動採番]** sequence フィールドプラグインにおける repair コマンド処理の安定性を向上 ([#8139](https://github.com/nocobase/nocobase/pull/8139)) by @cgyrock
* **[ワークフロー：手動処理ノード]** 手動タスクリストで誤った一覧 API が使用されていた不具合を修正 ([#8144](https://github.com/nocobase/nocobase/pull/8144)) by @mytharcher
* **[HTTP リクエスト暗号化]** qs の配列パース形式を brackets に統一 by @chenos
* **[ワークフロー：承認]** ワークフロー削除後に実行計画をキャンセルする際に発生していたエラーを修正 by @mytharcher
* **[マイグレーション管理]** マイグレーション時にデータ内の改行が失われる不具合を修正 by @cgyrock
