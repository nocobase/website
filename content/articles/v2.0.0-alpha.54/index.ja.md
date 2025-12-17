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
