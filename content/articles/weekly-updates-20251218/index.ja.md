週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.27](https://www.nocobase.com/ja/blog/v1.9.27)

*リリース日：2025-12-17*

### 🚀 機能改善

* **[server]** アプリケーションインスタンスが存在しない場合でも、メンテナンス状態メッセージ取得時にエラーが発生しないよう耐障害性を改善 ([#8196](https://github.com/nocobase/nocobase/pull/8196)) by @2013xile
* **[エラーハンドラー]** SQL 構文エラー時に、データベースの詳細なエラーメッセージを外部へ返さないようにし、データベース種別の露出を防止 ([#8195](https://github.com/nocobase/nocobase/pull/8195)) by @2013xile
* **[ワークフロー]** ワークフローの複製（バージョン作成）時に、複製元ワークフローの既存設定を基に新しい設定を生成できるよう対応 ([#8165](https://github.com/nocobase/nocobase/pull/8165)) by @mytharcher

### 🐛 不具合修正

* **[ワークフロー]** 手動実行時に、データ選択コンポーネントの読み込みリストが一部しか表示されない不具合を修正 ([#8187](https://github.com/nocobase/nocobase/pull/8187)) by @mytharcher
* **[データテーブル：外部データ接続（FDW）]** 大文字のテーブル名に接続した際にトリガーエラーが発生する不具合を修正 by @2013xile
* **[ワークフロー：承認]** 関係のない承認待ちタスクの状態が誤って「未処理」に変更されてしまう不具合を修正 by @mytharcher

### [v1.9.26](https://www.nocobase.com/ja/blog/v1.9.26)

*リリース日：2025-12-16*

### 🚀 機能改善

* **[acl]**`acl.registerSnippet` による権限スニペット設定の統合に対応 ([#8155](https://github.com/nocobase/nocobase/pull/8155)) by @mytharcher
* **[権限管理]** ユーザーへの root ロール付与を禁止 ([#8180](https://github.com/nocobase/nocobase/pull/8180)) by @2013xile

### 🐛 不具合修正

* **[ライセンス設定]**
  * plugin-license の TypeScript ビルド時に発生していた不具合を修正 ([#8183](https://github.com/nocobase/nocobase/pull/8183)) by @jiannx
  * ライセンス処理を改善し、案内用のメッセージを追加 ([#7993](https://github.com/nocobase/nocobase/pull/7993)) by @jiannx
* **[ファイルマネージャー]** OSS 上の `.txt` ファイルをプレビューした際に、日本語以外の文字が文字化けして表示される不具合を修正 ([#8161](https://github.com/nocobase/nocobase/pull/8161)) by @mytharcher
* **[操作：レコードインポート]** インポート後に発火する `afterCreate` イベントの完了を同期的に待機するよう修正 ([#8158](https://github.com/nocobase/nocobase/pull/8158)) by @2013xile
* **[データテーブル：外部データ接続（FDW）]** 大文字のテーブル名を使用した場合に読み込みが失敗する不具合を修正 by @2013xile
* **[データソース：外部 SQL Server]**`encrypt` および `trustServerCertificate` オプションが利用できない不具合を修正 by @2013xile

### [v1.9.25](https://www.nocobase.com/ja/blog/v1.9.25)

*リリース日：2025-12-12*

### 🚀 機能改善

* **[ワークフロー]**
  * 実行器の準備フェーズに耐障害性を持たせ、データ欠落によって処理が中断されるのを防止 ([#8156](https://github.com/nocobase/nocobase/pull/8156)) by @mytharcher
  * ワークフローキャンバスの関連データを遅延読み込みに変更し、パフォーマンスを改善 ([#8142](https://github.com/nocobase/nocobase/pull/8142)) by @mytharcher

### 🐛 不具合修正

* **[acl]** ロールが `root` の場合に `acl.can` API が `null` を返していた不具合を修正 ([#8150](https://github.com/nocobase/nocobase/pull/8150)) by @mytharcher
* **[ワークフロー：手動処理ノード]** 手動タスクリストで誤った一覧 API を使用していた不具合を修正 ([#8144](https://github.com/nocobase/nocobase/pull/8144)) by @mytharcher
* **[HTTP リクエスト暗号化]** qs の配列パース形式を brackets に統一 by @chenos
* **[ワークフロー：承認]** ワークフロー削除後に実行計画のキャンセルでエラーが発生していた不具合を修正 by @mytharcher
*


## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.55](https://www.nocobase.com/ja/blog/v2.0.0-alpha.55)

*リリース日：2025-12-17*

### 🚀 機能改善

* **[server]** アプリケーションインスタンスが存在しない場合でも、メンテナンス状態メッセージ取得時にエラーが発生しないよう耐障害性を改善 ([#8196](https://github.com/nocobase/nocobase/pull/8196)) by @2013xile
* **[ブロック：リスト]** Table／List／Grid Card ブロックにおける Link ボタンの設定項目を追加 ([#8194](https://github.com/nocobase/nocobase/pull/8194)) by @katherinehhh

### 🐛 不具合修正

* **[client]** フィルターフォームでチェックボックスに「いいえ」を選択しても、「はい」として判定されてしまう不具合を修正 ([#8170](https://github.com/nocobase/nocobase/pull/8170)) by @gchust
* **[マイグレーション管理]** ユーザー入力のマイグレーション説明が失われる不具合を修正し、未入力時は現在時刻をデフォルトの説明として設定するよう改善 by @cgyrock

### [v2.0.0-alpha.54](https://www.nocobase.com/ja/blog/v2.0.0-alpha.54)

*リリース日：2025-12-17*

### 🎉 新機能

* **[client]** データテーブル作成時に、既定の id フィールド型を変更できるようになりました ([#8129](https://github.com/nocobase/nocobase/pull/8129)) by @cgyrock

### 🚀 機能改善

* **[client]**
  * テーブル列幅の設定方法を選択式に刷新 ([#8188](https://github.com/nocobase/nocobase/pull/8188)) by @katherinehhh
  * データセレクターの表示を改善し、maxTagCount を設定 ([#8175](https://github.com/nocobase/nocobase/pull/8175)) by @katherinehhh
  * ブロック／フィールド／操作に関する設定項目を整理・改善 ([#8141](https://github.com/nocobase/nocobase/pull/8141)) by @katherinehhh
* **[エラーハンドラー]** SQL 構文エラー時に、データベースの詳細なエラー内容を外部に返さないようにし、データベース種別が推測されるのを防止 ([#8195](https://github.com/nocobase/nocobase/pull/8195)) by @2013xile
* **[ブロック：マップ]** マップフィールドをテキスト表示した場合に、文字数超過時の省略表示設定に対応 ([#8189](https://github.com/nocobase/nocobase/pull/8189)) by @katherinehhh
* **[ワークフロー]** ワークフローの複製（バージョン作成）時に、複製元の設定を基に新しい設定を生成できるよう改善 ([#8165](https://github.com/nocobase/nocobase/pull/8165)) by @mytharcher
* **[権限管理]** ユーザーへの root ロール付与を禁止 ([#8180](https://github.com/nocobase/nocobase/pull/8180)) by @2013xile

### 🐛 不具合修正

* **[client]**
  * 新規作成権限を持つロールでも、新規作成フォームに送信ボタンが表示されない不具合を修正 ([#8190](https://github.com/nocobase/nocobase/pull/8190)) by @katherinehhh
  * サブテーブル／サブフォームで既存データを選択した際、未選択項目の送信によりデータが消える不具合を修正 ([#8172](https://github.com/nocobase/nocobase/pull/8172)) by @katherinehhh
  * 新規作成フォーム設定に不要なデータ範囲設定が表示される不具合を修正 ([#8176](https://github.com/nocobase/nocobase/pull/8176)) by @katherinehhh
  * タブページのイベントフローが保存できない不具合を修正 ([#8168](https://github.com/nocobase/nocobase/pull/8168)) by @chenos
  * タブを非表示にしても余白が残る不具合を修正 ([#8167](https://github.com/nocobase/nocobase/pull/8167)) by @chenos
  * リレーション選択レコーダーで、選択済み項目が誤って除外される不具合を修正 ([#8151](https://github.com/nocobase/nocobase/pull/8151)) by @katherinehhh
  * フォーム内の tableoid フィールドが正しく表示されない不具合を修正 ([#8177](https://github.com/nocobase/nocobase/pull/8177)) by @katherinehhh
* **[server]**
  * license-kit を最新版へ更新 ([#8173](https://github.com/nocobase/nocobase/pull/8173)) by @jiannx
  * 外部データソースで Snowflake ID（53 bits）型フィールドを利用可能に ([#8185](https://github.com/nocobase/nocobase/pull/8185)) by @2013xile
* **[ブロック：マップ]** メニュー切り替え後にマップのズームレベル表示が正しくならない不具合を修正 ([#8193](https://github.com/nocobase/nocobase/pull/8193)) by @katherinehhh
* **[ワークフロー]** 手動実行時に、データ選択コンポーネントの一覧が一部しか表示されない不具合を修正 ([#8187](https://github.com/nocobase/nocobase/pull/8187)) by @mytharcher
* **[データ可視化]** グラフの SQL モードで外部データソースを選択できない不具合を修正；<br/>グラフブロックのリクエスト時に loading 表示が正しく制御されない不具合を修正；<br/>初期状態が空のグラフで設定取消後にエラーが発生する不具合を修正； ([#8169](https://github.com/nocobase/nocobase/pull/8169)) by @heziqiang
* **[AI 従業員]** AI チャット履歴のテキストが改行されない不具合を修正 ([#8096](https://github.com/nocobase/nocobase/pull/8096)) by @heziqiang
* **[ライセンス設定]**
  * plugin-license の TypeScript ビルド時に発生していた不具合を修正 ([#8183](https://github.com/nocobase/nocobase/pull/8183)) by @jiannx
  * ライセンス処理を改善し、案内メッセージを追加 ([#7993](https://github.com/nocobase/nocobase/pull/7993)) by @jiannx
* **[ファイルマネージャー]** OSS 上の `.txt` ファイルをプレビューした際に、中文が文字化けして表示される不具合を修正 ([#8161](https://github.com/nocobase/nocobase/pull/8161)) by @mytharcher
* **[データソース：外部 SQL Server]**`encrypt` および `trustServerCertificate` オプションが利用できない不具合を修正 by @2013xile
* **[データテーブル：外部データ接続（FDW）]** 大文字のテーブル名を使用した場合に読み込みが失敗する不具合を修正 by @2013xile
* **[ワークフロー：承認]** 関係のない承認待ちタスクの状態が誤って「未処理」に変更される不具合を修正 by @mytharcher

### [v2.0.0-alpha.53](https://www.nocobase.com/ja/blog/v2.0.0-alpha.53)

*リリース日：2025-12-12*

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
