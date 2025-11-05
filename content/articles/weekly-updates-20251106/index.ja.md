週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.3](https://www.nocobase.com/ja/blog/v1.9.3)

*リリース日：2025-11-05*

### 🚀 機能改善

* **[データベース]** MariaDB 接続インスタンスに `multipleStatements` オプションを追加し、1回のクエリで複数ステートメントの実行をサポート ([#7781](https://github.com/nocobase/nocobase/pull/7781)) by @mytharcher
* **[ワークフロー]** ワークフロー内のデータブロックで統一された詳細ブロック設定メニューを使用可能に ([#7771](https://github.com/nocobase/nocobase/pull/7771)) by @mytharcher

### 🐛 不具合修正

* **[サーバー]** アプリ名を用いた Pub/Sub チャネルの分離を実装 ([#7762](https://github.com/nocobase/nocobase/pull/7762)) by @mytharcher
* **[クライアント]** “Maximum call stack size exceeded” エラーを修正 ([#7780](https://github.com/nocobase/nocobase/pull/7780)) by @zhangzhonghe
* **[データベース]** フィールド名が snake\_case の場合にインデックスフィールド判定が誤る問題を修正 ([#7776](https://github.com/nocobase/nocobase/pull/7776)) by @2013xile
* **[ワークフロー]** クラスターモードでスケジューラがアイドル状態を正しく認識できず、プラグイン準備前にキューイベントを消費する問題を修正 ([#7768](https://github.com/nocobase/nocobase/pull/7768)) by @mytharcher
* **[モバイル（廃止予定）]** モバイル版の日付フィールドでデフォルト値選択ポップアップが日付を選択できない問題を修正 ([#7783](https://github.com/nocobase/nocobase/pull/7783)) by @zhangzhonghe
* **[ワークフロー：承認]** 承認ワークフローのコピー時にエラーが発生する問題を修正 by @mytharcher
* **[メール管理]**`mailMessages` にインデックスを追加 by @jiannx

### [v1.9.2](https://www.nocobase.com/ja/blog/v1.9.2)

*リリース日：2025-11-04*

### 🐛 不具合修正

* **[ワークフロー]** サービス分割モードで中断ノードを含むワークフローを手動実行した際、実行が待機状態のままになる問題を修正 ([#7767](https://github.com/nocobase/nocobase/pull/7767)) by @mytharcher
* **[メール管理]** インデックスにマイグレーションスクリプトを追加 by @jiannx

### [v1.9.1](https://www.nocobase.com/ja/blog/v1.9.1)

*リリース日：2025-11-04*

### 🐛 不具合修正

* **[ワークフロー：承認]** 並列ブランチ内で承認ノードを作成できないようにし、フロー状態による問題を回避 by @mytharcher
* **[メール管理]** 同期ログを追加 by @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.16](https://www.nocobase.com/ja/blog/v1.9.0-beta.16)

*リリース日：2025-11-03*

### 🎉 新機能

* **[ワークフロー：承認]** 「データ保存前」にトリガーされるモードをサポート by @mytharcher

### 🚀 機能改善

* **[サーバー]** Gateway層のログを追加 ([#7683](https://github.com/nocobase/nocobase/pull/7683)) by @2013xile
* **[ワークフロー：通知ノード]** 通知ノードに「失敗を無視」オプションを追加し、送信に失敗してもワークフローを継続実行できるように改善 ([#7736](https://github.com/nocobase/nocobase/pull/7736)) by @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 操作パネル内でQRコードスキャンが連動ルールを設定できない問題を修正 ([#7693](https://github.com/nocobase/nocobase/pull/7693)) by @katherinehhh
  * モーダル内のiframeブロックで連動ルールが機能しない問題を修正 ([#7694](https://github.com/nocobase/nocobase/pull/7694)) by @katherinehhh
* **[データベース]** MySQLのJSONカラムのデフォルト値同期処理をスキップするよう修正 ([#7696](https://github.com/nocobase/nocobase/pull/7696)) by @2013xile
* **[ワークフロー]**
  * サービス分割モードでメモリ待機キュー処理が不適切に行われ、一部のワークフローが実行されない問題を修正 ([#7692](https://github.com/nocobase/nocobase/pull/7692)) by @mytharcher
  * 遅延実行計画作成時の初期ステータス値を修正 ([#7721](https://github.com/nocobase/nocobase/pull/7721)) by @mytharcher
  * ブランチノード削除後、残ったブランチ内の最初のノードのkeyが新しい値に変更されてしまう問題を修正 ([#7665](https://github.com/nocobase/nocobase/pull/7665)) by @mytharcher
* **[権限管理]**`resourceManager` のミドルウェアの順序を修正 ([#7728](https://github.com/nocobase/nocobase/pull/7728)) by @2013xile
* **[ファイルマネージャー]**`.msg` ファイルが正常にアップロードできない問題を修正 ([#7662](https://github.com/nocobase/nocobase/pull/7662)) by @mytharcher
* **[ワークフロー：手動処理ノード]** ワークフロー停止後、手動処理タスクがTo-Doセンターから消える問題を修正 ([#7687](https://github.com/nocobase/nocobase/pull/7687)) by @mytharcher
* **[データテーブルフィールド：中国行政区画]** 市区と県区が同一の場合にデータをインポートできない問題を修正 ([#7673](https://github.com/nocobase/nocobase/pull/7673)) by @2013xile
* **[ワークフロー：承認]**
  * 承認完了通知におけるステータステキストの翻訳問題を修正。ユーザーの言語設定がない場合はシステムのデフォルト言語を使用するように修正 by @mytharcher
  * 言語翻訳の不具合を修正 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.34](https://www.nocobase.com/ja/blog/v2.0.0-alpha.34)

*リリース日：2025-11-05*

### 🚀 機能改善

* **[データベース]** MariaDB 接続インスタンスに `multipleStatements` オプションを追加し、1回のクエリで複数ステートメントの実行をサポート ([#7781](https://github.com/nocobase/nocobase/pull/7781)) by @mytharcher

### 🐛 不具合修正

* **[フローエンジン]** テーブルブロックでページ切り替え後、行アクションボタンが正しく更新されない問題を修正し、ボタン機能が現在のページデータと一致するよう改善 ([#7779](https://github.com/nocobase/nocobase/pull/7779)) by @gchust
* **[クライアント]**
  * “Maximum call stack size exceeded” エラーを修正 ([#7780](https://github.com/nocobase/nocobase/pull/7780)) by @zhangzhonghe
  * リレーションフィールドのタイトル項目で省略設定が反映されない問題を修正 ([#7778](https://github.com/nocobase/nocobase/pull/7778)) by @katherinehhh
  * レコード更新アクションボタンの連動ルールが無効になる問題を修正 ([#7774](https://github.com/nocobase/nocobase/pull/7774)) by @gchust
* **[データベース]** フィールド名が snake\_case の場合にインデックスフィールド判定が誤る問題を修正 ([#7776](https://github.com/nocobase/nocobase/pull/7776)) by @2013xile
* **[モバイル（廃止予定）]** モバイル版の日付フィールドでデフォルト値選択ポップアップが日付を選択できない問題を修正 ([#7783](https://github.com/nocobase/nocobase/pull/7783)) by @zhangzhonghe

### [v2.0.0-alpha.33](https://www.nocobase.com/ja/blog/v2.0.0-alpha.33)

*リリース日：2025-11-05*

### 🎉 新機能

* **[クライアント]** サブテーブルでページネーションによるデータ表示をサポート ([#7754](https://github.com/nocobase/nocobase/pull/7754)) by @katherinehhh

### 🚀 機能改善

* **[未定義]** チャートプラグインの英語ドキュメントを更新 ([#7748](https://github.com/nocobase/nocobase/pull/7748)) by @heziqiang
* **[テレメトリ]** オンラインサブアプリ数などのテレメトリ指標を追加 ([#7743](https://github.com/nocobase/nocobase/pull/7743)) by @2013xile
* **[ワークフロー]** ワークフロー内のデータブロックで統一された詳細ブロック設定メニューを使用可能に ([#7771](https://github.com/nocobase/nocobase/pull/7771)) by @mytharcher
* **[マルチアプリマネージャー（廃止予定）]** サブアプリの非同期キュー起動をサポート ([#7749](https://github.com/nocobase/nocobase/pull/7749)) by @2013xile
* **[データ可視化]** グラフの日付・時刻フォーマットオプションを追加 ([#7763](https://github.com/nocobase/nocobase/pull/7763)) by @heziqiang
* **[ワークフロー：承認]** 転送承認および追加承認時に新しい承認者へ通知を送信 by @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 変数関連コンポーネントにおいて列挙型ラベルが正しい言語で表示されない問題を修正 ([#7765](https://github.com/nocobase/nocobase/pull/7765)) by @gchust
  * フロントエンドフィールド検証を設定した際、必須項目マークが欠落する問題を修正 ([#7760](https://github.com/nocobase/nocobase/pull/7760)) by @katherinehhh
  * タイムゾーンなし日付をクリアする際の異常を修正 ([#7759](https://github.com/nocobase/nocobase/pull/7759)) by @katherinehhh
  * 連動ルールで設定した必須フィールドが正しく動作しない問題を修正 ([#7756](https://github.com/nocobase/nocobase/pull/7756)) by @zhangzhonghe
  * フィルターフォームで「特定日」を削除すると日付が Invalid Date になる問題を修正 ([#7746](https://github.com/nocobase/nocobase/pull/7746)) by @katherinehhh
  * Markdown Vditor フィールドで必須検証に失敗する問題を修正 ([#7764](https://github.com/nocobase/nocobase/pull/7764)) by @katherinehhh
  * フィルターフォームのリレーションフィールドでデータ範囲設定をサポート ([#7761](https://github.com/nocobase/nocobase/pull/7761)) by @zhangzhonghe
  * サブテーブル内の時刻フィールドのフォーマットエラーを修正 ([#7750](https://github.com/nocobase/nocobase/pull/7750)) by @katherinehhh
* **[フローエンジン]**
  * フィールドフィルター値が false の場合にデータ範囲リクエストが不正となる問題を修正 ([#7766](https://github.com/nocobase/nocobase/pull/7766)) by @gchust
  * サブフォームの現在オブジェクト変数のリレーション値を解析できない問題を修正 ([#7751](https://github.com/nocobase/nocobase/pull/7751)) by @gchust
  * データブロックの最終ページでデータ削除後にページングパラメータが誤る問題を修正 ([#7755](https://github.com/nocobase/nocobase/pull/7755)) by @katherinehhh
* **[サーバー]** アプリ名を用いた Pub/Sub チャネルの分離を実装 ([#7762](https://github.com/nocobase/nocobase/pull/7762)) by @mytharcher
* **[ブロック：グリッドカード]** リストブロックとグリッドカードブロックで同一データが重複表示される問題を修正 ([#7773](https://github.com/nocobase/nocobase/pull/7773)) by @katherinehhh
* **[マルチアプリマネージャー（廃止予定）]** サブアプリのテレメトリ指標が正しく収集されない問題を修正 ([#7772](https://github.com/nocobase/nocobase/pull/7772)) by @2013xile
* **[ワークフロー]**
  * クラスターモードでスケジューラがアイドル状態を正しく認識できず、プラグイン準備前にキューイベントを消費する問題を修正 ([#7768](https://github.com/nocobase/nocobase/pull/7768)) by @mytharcher
  * サービス分割モードで中断ノードを含むワークフローを手動実行した際、実行が待機状態のままになる問題を修正 ([#7767](https://github.com/nocobase/nocobase/pull/7767)) by @mytharcher
* **[ワークフロー：承認]**
  * 承認ワークフローのコピー時にエラーが発生する問題を修正 by @mytharcher
  * 並列ブランチ内で承認ノードを作成できないようにし、フロー状態による問題を回避 by @mytharcher
* **[メール管理]**
  * 同期ログを追加 by @jiannx
  * インデックスにマイグレーションスクリプトを追加 by @jiannx

### [v2.0.0-alpha.31](https://www.nocobase.com/ja/blog/v2.0.0-alpha.31)

*リリース日：2025-11-03*

### 🎉 新機能

* **[ワークフロー：承認]** 「データ保存前」にトリガーされるモードをサポート by @mytharcher

### 🐛 不具合修正

* **[クライアント]** 現在のフォーム変数フィールドが読み込めない問題を修正 ([#7745](https://github.com/nocobase/nocobase/pull/7745)) by @gchust
* **[ワークフロー：承認]** 言語翻訳の不具合を修正 by @mytharcher

### [v2.0.0-alpha.30](https://www.nocobase.com/ja/blog/v2.0.0-alpha.30)

*リリース日：2025-11-02*

### 🚀 機能改善

* **[ワークフロー：通知ノード]** 通知ノードに「失敗を無視」オプションを追加し、送信失敗時でもワークフローの実行を継続できるように改善（[#7736](https://github.com/nocobase/nocobase/pull/7736)）@mytharcher

### [v2.0.0-alpha.29](https://www.nocobase.com/ja/blog/v2.0.0-alpha.29)

*リリース日：2025-11-02*

### 🐛 不具合修正

* **[クライアント]**
  * 現在のフォーム内で関連フィールド変数が正しく認識されない問題を解決し、フォーム内のデータ処理精度を向上（[#7726](https://github.com/nocobase/nocobase/pull/7726)）@gchust
  * 変数解析結果が配列であり、「一対一」フィールドの値またはデフォルト値として設定された場合にエラーが発生する問題を修正。この修正により変数解析結果の処理が正確になり、システムの安定性と精度が向上（[#7735](https://github.com/nocobase/nocobase/pull/7735)）@gchust
* **[権限管理]**`resourceManager` のミドルウェア順序を修正（[#7728](https://github.com/nocobase/nocobase/pull/7728)）@2013xile

### [v2.0.0-alpha.28](https://www.nocobase.com/ja/blog/v2.0.0-alpha.28)

*リリース日：2025-11-01*

### 🚀 機能改善

* **[フローエンジン]** UIDコピー失敗時のエラーメッセージを最適化し、問題解決のためのガイドをより明確に提示（[#7718](https://github.com/nocobase/nocobase/pull/7718)）@gchust

### 🐛 不具合修正

* **[フローエンジン]** イベントフロー内のステップが設定メニューに表示されないよう修正（[#7723](https://github.com/nocobase/nocobase/pull/7723)）@gchust
* **[クライアント]** フィルタ不可のフィールドが誤ってフィルタ選択肢に表示される問題を修正。現在は利用可能なフィールドのみ表示（[#7700](https://github.com/nocobase/nocobase/pull/7700)）@gchust
* **[ワークフロー]** 遅延開始実行プラン作成時の初期状態値を修正（[#7721](https://github.com/nocobase/nocobase/pull/7721)）@mytharcher
* **[AIスタッフ]** GeminiのWeb検索ロジックおよびプロンプトを最適化（[#7720](https://github.com/nocobase/nocobase/pull/7720)）@cgyrock
* **[操作：レコードのエクスポート]** エクスポートボタン内のエクスポート可能フィールド一覧が誤表示される問題を修正（[#7714](https://github.com/nocobase/nocobase/pull/7714)）@katherinehhh
* **[操作：レコードのインポート]** インポートボタン内のインポートフィールド一覧が誤表示される問題を修正（[#7710](https://github.com/nocobase/nocobase/pull/7710)）@katherinehhh
* **[操作：レコードのインポート Pro]** インポートボタン内のPro版フィールド一覧が誤表示される問題を修正 @katherinehhh

### [v2.0.0-alpha.27](https://www.nocobase.com/ja/blog/v2.0.0-alpha.27)

*リリース日：2025-10-31*

### 🎉 新機能

* **[client]** イベントフロー：新しい事前定義アクションを追加し、イベント処理のカスタマイズ性を強化。これにより、ユーザーはワークフローをより簡単に構築でき、生産性を向上させることができます（[#7672](https://github.com/nocobase/nocobase/pull/7672)）@zhangzhonghe

### 🚀 機能改善

* **[AIスタッフ]** AIスタッフの対話およびタスク設定の操作体験を改善（[#7707](https://github.com/nocobase/nocobase/pull/7707)）@cgyrock

### 🐛 不具合修正

* **[client]** データテーブルのリレーションフィールド削除後にUIブロックが異常表示される問題を修正（[#7706](https://github.com/nocobase/nocobase/pull/7706)）@katherinehhh

### [v2.0.0-alpha.26](https://www.nocobase.com/ja/blog/v2.0.0-alpha.26)

*リリース日：2025-10-30*

### 🚀 機能改善

* **[undefined]** チャート概要に関する一部ドキュメントを更新しました（[#7702](https://github.com/nocobase/nocobase/pull/7702)）by @heziqiang
* **[client]** JSコードエディターでJSX構文をサポートしました（[#7699](https://github.com/nocobase/nocobase/pull/7699)）by @gchust
* **[AIスタッフ]** AIスタッフがテーブルブロックのメタ情報を基にデータを自律的にクエリできるようになりました（[#7703](https://github.com/nocobase/nocobase/pull/7703)）by @cgyrock

### 🐛 不具合修正

* **[client]**
  * モーダル内の iframe ブロックで連動ルールが動作しない問題を修正しました（[#7694](https://github.com/nocobase/nocobase/pull/7694)）by @katherinehhh
  * 操作パネル内のQRコードスキャン機能で連動ルールを設定できない問題を修正しました（[#7693](https://github.com/nocobase/nocobase/pull/7693)）by @katherinehhh
* **[database]** MySQLのJSONカラムに対するデフォルト値同期処理をスキップするようにしました（[#7696](https://github.com/nocobase/nocobase/pull/7696)）by @2013xile
* **[ワークフロー]** サービス分割モードにおいて、ワークフローのメモリ待機キューが不適切に処理され、一部ワークフローが実行されない問題を修正しました（[#7692](https://github.com/nocobase/nocobase/pull/7692)）by @mytharcher
