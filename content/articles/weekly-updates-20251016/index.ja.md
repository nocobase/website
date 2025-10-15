週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.29](https://www.nocobase.com/ja/blog/v1.8.29)

*リリース日：2025-10-15*

### 🚀 機能改善

* **[ワークフロー：承認]** コア変更に対応するため、分岐設定を再構築 by @mytharcher

### 🐛 不具合修正

* **[ワークフロー：承認]** アプリ未導入時にテーブルが存在せず、移行スクリプトでエラーが発生する問題を修正 by @mytharcher

### [v1.8.28](https://www.nocobase.com/ja/blog/v1.8.28)

*リリース日：2025-10-14*

### 🚀 機能改善

* **[クライアント]** フロントエンドで `mime` パッケージを使用し、ファイルのMIMEタイプをより正確に検出できるように改善（[#7551](https://github.com/nocobase/nocobase/pull/7551)）@mytharcher
* **[ワークフロー]**
  * 環境変数で1つのワークフロー内の最大ノード数を制限できるように対応（[#7542](https://github.com/nocobase/nocobase/pull/7542)）@mytharcher
  * ノード削除時に「分岐を保持」オプションを追加（[#7571](https://github.com/nocobase/nocobase/pull/7571)）@mytharcher
* **[ワークフロー：ループノード]** 環境変数でループノードの最大ループ回数を制限できるように対応（[#7543](https://github.com/nocobase/nocobase/pull/7543)）@mytharcher
* **[ワークフロー：承認]** カスタム承認ブロックの詳細ダイアログに印刷ボタンを追加 @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 画像プレビュー時に回転とズームを同時に行うと表示が乱れる問題を修正（[#7573](https://github.com/nocobase/nocobase/pull/7573)）@mytharcher
  * AssignedFieldコンポーネントが動的プロパティを実装していなかったため、新規作成・更新ノードでファイルアップロードエラーが発生する問題を修正（[#7556](https://github.com/nocobase/nocobase/pull/7556)）@mytharcher
* **[公開フォーム]** 公開フォームでファイルフィールドのアップロードルールが正しく適用されない問題を修正（[#7553](https://github.com/nocobase/nocobase/pull/7553)）@mytharcher
* **[カレンダー]** カレンダーブロックのデータテーブルで一意識別子を設定した後、詳細データ取得時にエラーが発生する問題を修正（[#7562](https://github.com/nocobase/nocobase/pull/7562)）@katherinehhh
* **[認証：LDAP]** 非ASCII文字（UTF-8）を含むADでログインに失敗する問題を修正 @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.11](https://www.nocobase.com/ja/blog/v1.9.0-beta.11)

*リリース日：2025-09-30*

### 🚀 機能改善

* **[サーバー]** アプリケーションに優雅な終了処理のライフサイクル管理を新たに追加 ([#7536](https://github.com/nocobase/nocobase/pull/7536)) by @mytharcher
* **[ワークフロー：ループノード]** 環境変数によるループノードの最大ループ回数制限機能をサポート ([#7543](https://github.com/nocobase/nocobase/pull/7543)) by @mytharcher
* **[ワークフロー]** 環境変数によるワークフロー内最大ノード数制限機能をサポート ([#7542](https://github.com/nocobase/nocobase/pull/7542)) by @mytharcher
* **[ワークフロー：承認]** カスタム承認ブロックの詳細画面に印刷ボタンを追加 by @mytharcher

### 🐛 不具合修正

* **[メール管理]** 再認証の問題 by @jiannx
* ームのファイルフィールドのアップロードルールに関する問題を修正 ([#7553](https://github.com/nocobase/nocobase/pull/7553)) by @mytharcher

### [v1.9.0-beta.10](https://www.nocobase.com/ja/blog/v1.9.0-beta.10)

*リリース日：2025-09-30*

### 🐛 不具合修正

* **[クライアント]** AssignedField コンポーネントが動的属性を未実装のため、新規および更新ノードでのファイルアップロードエラーを修正 ([#7556](https://github.com/nocobase/nocobase/pull/7556)) by @mytharcher
* **[公開フォーム]** 公開フォ

### [v1.9.0-beta.9](https://www.nocobase.com/ja/blog/v1.9.0-beta.9)

*リリース日：2025-09-30*

### 🎉 新機能

* **[クライアント]**
  * テーブルブロックに「列設定」ボタンを追加し、列の並び順や表示・非表示を設定可能に（[#7204](https://github.com/nocobase/nocobase/pull/7204)）by @kerwin612
  * フィールドの検証ルールに対応（[#7297](https://github.com/nocobase/nocobase/pull/7297)）by @aaaaaajie
* **[データソース: メイン]**
  * メインデータソースのテーブル読み込みに対応（[#7238](https://github.com/nocobase/nocobase/pull/7238)）by @aaaaaajie
  * プラグインで定義されたテーブルもメインデータソースに表示可能に（[#7187](https://github.com/nocobase/nocobase/pull/7187)）by @aaaaaajie

### 🚀 機能改善

* **[クライアント]** プレビュー時に画像を回転できる機能を追加（[#7523](https://github.com/nocobase/nocobase/pull/7523)）by @mytharcher
* **[snowflake-id]** 一意識別子を持たない自動採番の主キーを、53ビットのSnowflake形式IDに変更（[#7465](https://github.com/nocobase/nocobase/pull/7465)）by @2013xile
* **[ワークフロー]** ディスパッチ処理を独立したモジュールに分離（[#7535](https://github.com/nocobase/nocobase/pull/7535)）by @mytharcher
* **[RabbitMQキューアダプタ]** 接続処理とメッセージ処理ロジックを改善 by @sdp-ncd
* **[メールマネージャー]**
  * 複数件の同期をまとめて実行可能に by @jiannx
  * リッチエディタで画像サイズを変更可能に by @jiannx

### 🐛 不具合修正

* **[クライアント]**
  * 「列設定」ボタンがモーダルダイアログ内のテーブル列を読み込んでしまう不具合を修正（[#7385](https://github.com/nocobase/nocobase/pull/7385)）by @kerwin612
  * サイドバーのサブメニューが正しくハイライトされない不具合を修正（[#7520](https://github.com/nocobase/nocobase/pull/7520)）by @duannyuuu
* **[ワークフロー]**
  * キュー処理の不具合によりタスクが二重に実行される問題を修正（[#7533](https://github.com/nocobase/nocobase/pull/7533)）by @mytharcher
  * 関連フィールドのコンテキスト読み込み時にワークフロー条件が正しく処理されない問題を修正（[#7516](https://github.com/nocobase/nocobase/pull/7516)）by @mytharcher
  * 日付フィールドを基準とするスケジュールタスクが開始後に実行されない問題を修正（[#7524](https://github.com/nocobase/nocobase/pull/7524)）by @mytharcher
* **[ワークフロー: ループノード]** 条件を満たさなくても次の処理に進んでしまう不具合を修正（[#7521](https://github.com/nocobase/nocobase/pull/7521)）by @mytharcher
* **[メールマネージャー]**
  * 不正な件名のメールが表示される不具合を修正 by @jiannx
  * リッチエディタでソフト改行に対応 by @jiannx
  * 同じメールを複数の宛先に送信可能に by @jiannx
  * メール一覧表示のパフォーマンスを改善 by @jiannx
  * 行を選択した後に既読/未読を設定できるよう修正 by @jiannx
  * パフォーマンス向上のため rawId フィールドを追加 by @jiannx
  * HTML内のref属性が原因でレンダリング例外が発生する不具合を修正 by @jiannx
  * サブメールの内容がフィルタされない不具合を修正 by @jiannx
  * 再同期に対応 by @jiannx
  * 転送と返信を手動で判別できるよう修正 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.5](https://www.nocobase.com/ja/blog/v2.0.0-alpha.5)

*リリース日：2025-10-10*

### 🐛 不具合修正

* **[サーバー]** 主キー移行スクリプトエラー修正 ([#7563](https://github.com/nocobase/nocobase/pull/7563)) by @2013xile
* **[クライアント]**
  * フォーム送信後にデータがリフレッシュされない問題を修正 ([#7560](https://github.com/nocobase/nocobase/pull/7560)) by @zhangzhonghe
  * AssignedField コンポーネントの動的属性未実装による新規および更新ノードでのファイルアップロードエラー修正 ([#7556](https://github.com/nocobase/nocobase/pull/7556)) by @mytharcher
* **[カレンダー]** カレンダーブロックのデータテーブルで一意識別子設定後の詳細データ取得エラー修正 ([#7562](https://github.com/nocobase/nocobase/pull/7562)) by @katherinehhh
* **[ブロック：テンプレート（廃止予定）]** ポップアップ開閉時に不必要なテンプレートリクエスト発生問題修正 ([#7561](https://github.com/nocobase/nocobase/pull/7561)) by @gchust
* **[公開フォーム]** 公開フォーム内のファイルフィールドアップロードルール修正 ([#7553](https://github.com/nocobase/nocobase/pull/7553)) by @mytharcher
* **[マルチアプリケーションマネージャー（廃止予定）]** マルチアプリケーション移行ポート検証エラー修正 ([#7540](https://github.com/nocobase/nocobase/pull/7540)) by @jiannx

### [v2.0.0-alpha.4](https://www.nocobase.com/ja/blog/v2.0.0-alpha.4)

*リリース日：2025-10-05*

### 🚀 機能改善

* **[フローエンジン]** ドラッグ＆ドロップ機能の改善 ([#7526](https://github.com/nocobase/nocobase/pull/7526)) by @zhangzhonghe
* **[ワークフロー：ループノード]** 環境変数によるループノードの最大ループ回数制限機能をサポート ([#7543](https://github.com/nocobase/nocobase/pull/7543)) by @mytharcher
* **[ワークフロー]** 環境変数によるワークフロー内最大ノード数制限機能をサポート ([#7542](https://github.com/nocobase/nocobase/pull/7542)) by @mytharcher
* **[ワークフロー：承認]** カスタム承認ブロックの詳細画面に印刷ボタンを追加 by @mytharcher

### 🐛 不具合修正

* **[クライアント]** コードエディターの「実行」ボタンが正常に動作しない問題を修正、ユーザーはコードを正しく実行できるようになりました。 ([#7547](https://github.com/nocobase/nocobase/pull/7547)) by @gchust
* **[AIスタッフ]** AIスタッフ権限設定ページのエラーを修正 ([#7548](https://github.com/nocobase/nocobase/pull/7548)) by @2013xile
* **[ワークフロー]** ワークフローボタンでワークフローを追加後、クリック時にフリーズする問題を修正 ([#7541](https://github.com/nocobase/nocobase/pull/7541)) by @mytharcher
* **[メール管理]** 再認証に関する問題 by @jiannx

### [v1.9.0-alpha.17](https://www.nocobase.com/ja/blog/v1.9.0-alpha.17)

*リリース日：2025-09-30*

### 🚀 機能改善

* **[ワークフロー]** ディスパッチ処理ロジックを独立したディスパッチャーとして分離（[#7535](https://github.com/nocobase/nocobase/pull/7535)） by @mytharcher

### 🐛 不具合修正

* **[ワークフロー]**
  * キュー処理の不具合によりタスクが二重に実行される問題を修正（[#7533](https://github.com/nocobase/nocobase/pull/7533)） by @mytharcher
  * 日付フィールドを基準としたスケジュールタスクが開始後に正しく起動しない問題を修正（[#7524](https://github.com/nocobase/nocobase/pull/7524)） by @mytharcher

### [v2.0.0-alpha.1](https://www.nocobase.com/ja/blog/v2.0.0-alpha.1)

*リリース日：2025-09-30*

### 🚀 機能改善

* **[サーバー]** アプリケーションに優雅な終了処理のライフサイクル管理を新たに追加 ([#7536](https://github.com/nocobase/nocobase/pull/7536)) by @mytharcher
