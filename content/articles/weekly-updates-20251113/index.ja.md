週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.6](https://www.nocobase.com/ja/blog/v1.9.6)

*リリース日：2025-11-12*

### 🐛 不具合修正

* **[クライアント]** 引用テンプレートをドラッグ後に削除すると、コピーされたテンプレートが表示されなくなる問題を修正 ([#7847](https://github.com/nocobase/nocobase/pull/7847)) by @zhangzhonghe
* **[ユーティリティ]** intersect 戦略にオブジェクト型のサポートを追加 ([#7840](https://github.com/nocobase/nocobase/pull/7840)) by @chenos
* **[データ可視化：ECharts]** ECharts オプション設定の `labelType` が反映されない問題を修正 by @heziqiang
* **[メール管理]** タイムスタンプが存在しない場合に Microsoft メールの既読状態を同期するよう修正 by @jiannx

### [v1.9.5](https://www.nocobase.com/ja/blog/v1.9.5)

*リリース日：2025-11-10*

### 🐛 不具合修正

* **[ワークフロー：承認]** 関連データの再取得時にメインテーブルのフィールドが正しく除外されない問題を修正 by @mytharcher
* **[メール管理]** Outlook のインライン画像および同期の問題を修正 by @jiannx

### [v1.9.4](https://www.nocobase.com/ja/blog/v1.9.4)

*リリース日：2025-11-10*

### 🚀 機能改善

* **[権限管理]** リレーションフィールドに関連する操作の権限制御ロジックを最適化 ([#7800](https://github.com/nocobase/nocobase/pull/7800)) by @2013xile
* **[ワークフロー：JavaScript ノード]** 実行環境に渡された上位関数によるセキュリティ脆弱性を修正し、上位実行環境への不正アクセスを防止 by @mytharcher
* **[認証：OIDC]** リクエストのタイムアウト時間を延長 by @2013xile

### 🐛 不具合修正

* **[サーバー]** サービス分割モード有効時に、ワーカープロセスがメッセージを送信するとエラーが発生する問題を修正 ([#7797](https://github.com/nocobase/nocobase/pull/7797)) by @mytharcher
* **[クライアント]** 詳細ブロックのシンプルページネーションで空データの次ページが表示される問題を修正 ([#7784](https://github.com/nocobase/nocobase/pull/7784)) by @katherinehhh
* **[ワークフロー]**
  * ワークフローのログに `workflowId` のデータ識別子を追加 ([#7789](https://github.com/nocobase/nocobase/pull/7789)) by @mytharcher
  * サービス分割モードでワークフロープラグインがサービスモード外でもキューを消費してしまう問題を修正 ([#7820](https://github.com/nocobase/nocobase/pull/7820)) by @mytharcher
* **[ユーザー]** フィールド名が snake\_case 形式の場合、インデックスフィールドのリセットが正しく行われない問題を修正 ([#7785](https://github.com/nocobase/nocobase/pull/7785)) by @2013xile
* **[ワークフロー：カスタム変数ノード]** 変数ノードで config が欠落している際に発生するエラーを修正 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.38](https://www.nocobase.com/ja/blog/v2.0.0-alpha.38)

*リリース日：2025-11-12*

### 🎉 新機能

* **[クライアント]** テーブル列のドラッグ操作をサポート ([#7842](https://github.com/nocobase/nocobase/pull/7842)) by @zhangzhonghe
* **[データ可視化]** チャート用 SQL データソースを新規追加 ([#7830](https://github.com/nocobase/nocobase/pull/7830)) by @heziqiang

### 🚀 機能改善

* **[クライアント]** RunJS スクリプトコンテキストで Day.js ライブラリのサポートを追加し、日付や時間の操作をより簡単に実行可能に ([#7841](https://github.com/nocobase/nocobase/pull/7841)) by @gchust

### 🐛 不具合修正

* **[ユーティリティ]**
  * フィルターボタンで “Invalid filter item type” エラーが発生する問題を修正 ([#7838](https://github.com/nocobase/nocobase/pull/7838)) by @zhangzhonghe
  * intersect 戦略にオブジェクト型のサポートを追加 ([#7840](https://github.com/nocobase/nocobase/pull/7840)) by @chenos
  * イベントフローで “Unrecognized operation” エラーが発生する問題を修正 ([#7835](https://github.com/nocobase/nocobase/pull/7835)) by @zhangzhonghe
* **[クライアント]**
  * テーブル内の行データ更新後、行操作ボタンの連動ルールが再実行されない問題を修正。データ変更時に連動ルールが正しく再適用されるよう改善 ([#7832](https://github.com/nocobase/nocobase/pull/7832)) by @gchust
  * コードエディタで JSX 構文を使用した場合にプレビュー時エラーが発生する問題を修正 ([#7836](https://github.com/nocobase/nocobase/pull/7836)) by @gchust
* **[未定義]** ダークモード時にプラグインドキュメントのトップページスタイルが正しく表示されない問題を修正 ([#7839](https://github.com/nocobase/nocobase/pull/7839)) by @gchust
* **[ファイルマネージャー]** テーブルブロックのフィールド設定に関する不具合を修正 ([#7843](https://github.com/nocobase/nocobase/pull/7843)) by @katherinehhh
* **[AI 社員]** v1 ページで AI 社員のチャットボタンを非表示に変更 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) by @cgyrock
* **[データ可視化：ECharts]** ECharts オプション設定の `labelType` が反映されない問題を修正 by @heziqiang
* **[メール管理]**
  * 下書き関連の問題を修正 by @jiannx
  * タイムスタンプが存在しない場合に Microsoft メールの既読状態を同期するよう修正 by @jiannx

### [v2.0.0-alpha.37](https://www.nocobase.com/ja/blog/v2.0.0-alpha.37)

*リリース日：2025-11-11*

### 🚀 機能改善

* **[クライアント]**
  * ページバージョンを flow engine のコンテキストに追加 ([#7826](https://github.com/nocobase/nocobase/pull/7826)) by @gchust
  * Markdown エディタを最適化 ([#7793](https://github.com/nocobase/nocobase/pull/7793)) by @katherinehhh
  * v2.0 ブロックで tableoid フィールドに対応 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) by @katherinehhh
* **[データ可視化]** チャートのツールチップとイベントコードテンプレートのコメントを更新 ([#7814](https://github.com/nocobase/nocobase/pull/7814)) by @heziqiang
* **[権限管理]** リレーションフィールド関連操作の権限制御ロジックを最適化 ([#7800](https://github.com/nocobase/nocobase/pull/7800)) by @2013xile
* **[認証：OIDC]** リクエストのタイムアウト時間を延長 by @2013xile

### 🐛 不具合修正

* **[サーバー]** サービス分割モード有効時に、ワーカープロセスがメッセージを送信するとエラーが発生する問題を修正 ([#7797](https://github.com/nocobase/nocobase/pull/7797)) by @mytharcher
* **[クライアント]**
  * 現在のデータテーブル変数がフィルターコンポーネントの変数セレクターで選択できてしまう問題を修正 ([#7818](https://github.com/nocobase/nocobase/pull/7818)) by @gchust
  * フィルターフォームのリレーションフィールドで “value.replace is not a function” エラーが発生する問題を修正 ([#7824](https://github.com/nocobase/nocobase/pull/7824)) by @zhangzhonghe
  * onChange コールバックの引数が誤って渡される問題を修正 ([#7807](https://github.com/nocobase/nocobase/pull/7807)) by @zhangzhonghe
* **[フローエンジン]** イベントフローを編集後、ページをリロードしないと反映されない問題を修正 ([#7811](https://github.com/nocobase/nocobase/pull/7811)) by @gchust
* **[ワークフロー]** サービス分割モードで、プラグインがサービスモード外でもキューを消費してしまう問題を修正 ([#7820](https://github.com/nocobase/nocobase/pull/7820)) by @mytharcher
* **[ワークフロー：承認]** 関連データ再取得時にメインテーブルフィールドが正しく除外されない問題を修正 by @mytharcher
* **[メール管理]** Outlook のインライン画像および同期に関する問題を修正 by @jiannx

### [v2.0.0-alpha.36](https://www.nocobase.com/ja/blog/v2.0.0-alpha.36)

*リリース日：2025-11-10*

### 🚀 機能改善

* **[フローエンジン]** ページタブのツールバーのスタイルを最適化 ([#7795](https://github.com/nocobase/nocobase/pull/7795)) by @zhangzhonghe

### 🐛 不具合修正

* **[フローエンジン]**
  * サブフォームのリレーションフィールドを UI で変更後、変数が正しく解析されない問題を修正 ([#7799](https://github.com/nocobase/nocobase/pull/7799)) by @gchust
  * 複合主キーを持つレコードの編集フォームでエラーが発生する問題を修正 ([#7798](https://github.com/nocobase/nocobase/pull/7798)) by @gchust
  * 「ビューを開く」操作の一部設定が適用されない問題を修正し、すべての関連設定が期待通り動作するよう改善 ([#7790](https://github.com/nocobase/nocobase/pull/7790)) by @gchust
* **[クライアント]**
  * データテーブルセレクタフィールドでデータを正しく選択できない問題を修正 ([#7794](https://github.com/nocobase/nocobase/pull/7794)) by @katherinehhh
  * テーブルブロックの操作列が非表示にできない問題を修正 ([#7804](https://github.com/nocobase/nocobase/pull/7804)) by @gchust
  * AI従業員の指令で変数オブジェクト全体を選択できるようサポート ([#7791](https://github.com/nocobase/nocobase/pull/7791)) by @gchust
* **[ユーザー]** フィールド名が snake\_case 形式の場合、インデックスフィールドのリセットが正しく行われない問題を修正 ([#7785](https://github.com/nocobase/nocobase/pull/7785)) by @2013xile

### [v2.0.0-alpha.35](https://www.nocobase.com/ja/blog/v2.0.0-alpha.35)

*リリース日：2025-11-06*

### 🚀 機能改善

* **[フローエンジン]** 遅延操作をサポートする flow model を追加 ([#7786](https://github.com/nocobase/nocobase/pull/7786)) by @gchust
* **[ワークフロー：JavaScript ノード]** 実行環境に渡された上位関数から発生するセキュリティ脆弱性を修正し、上位実行環境への不正アクセスを防止 by @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 詳細ブロックのシンプルページネーションで空データの次ページが表示される問題を修正 ([#7784](https://github.com/nocobase/nocobase/pull/7784)) by @katherinehhh
  * テーブル操作列および jsColumn の列幅設定が反映されない問題を修正 ([#7777](https://github.com/nocobase/nocobase/pull/7777)) by @katherinehhh
  * ページイベントフロー設定でブロックのデータ範囲が有効にならない問題を修正 ([#7788](https://github.com/nocobase/nocobase/pull/7788)) by @gchust
* **[ワークフロー]** ワークフローのログに `workflowId` データ識別子を追加 ([#7789](https://github.com/nocobase/nocobase/pull/7789)) by @mytharcher
* **[ワークフロー：カスタム変数ノード]** 変数ノードで config が欠落している場合にエラーが発生する問題を修正 by @mytharcher
* **[メール管理]**`mailMessages` にインデックスを追加 by @jiannx
