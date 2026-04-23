週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.41](https://www.nocobase.com/ja/blog/v2.0.41)

*リリース日：2026-04-22*

### 🎉 新機能

* **[認証：OIDC]** カスタムフィールドマッピングに対応 by @chenzhizdt
* **[DingTalk]** DingTalk で通知、アプリ内自動ログイン、ユーザー同期に対応。 by @chenzhizdt

### 🚀 機能改善

* **[ai]** AI 従業員とナレッジベースで、アップロード対応ファイル形式を追加（.xlsx, .xls, .csv, .md, .json） ([#9172](https://github.com/nocobase/nocobase/pull/9172)) by @cgyrock
* **[undefined]** アラビア語のガイドおよびナビゲーションの翻訳を追加 ([#9141](https://github.com/nocobase/nocobase/pull/9141)) by @saraTabbane

### 🐛 不具合修正

* **[data-source-manager]** 外部データソースの再同期時に、パーセンテージフィールドが数値にリセットされる問題を修正 ([#9178](https://github.com/nocobase/nocobase/pull/9178)) by @jiannx
* **[client]**
  * レコード追加後に、新規フォームのデフォルト値設定が反映されない問題を修正。 ([#9185](https://github.com/nocobase/nocobase/pull/9185)) by @gchust
  * タブ追加ボタンが右端に寄りすぎている問題を修正 ([#9177](https://github.com/nocobase/nocobase/pull/9177)) by @zhangzhonghe
* **[部門]** 部門の重複同期時に、部門順序を更新できない問題を修正 ([#9173](https://github.com/nocobase/nocobase/pull/9173)) by @2013xile
* **[データソース：メインデータベース]** データベースビュー接続時に、コレクション名とデータベースビュー名の不一致によりフィールド同期が失敗する問題を修正 ([#9155](https://github.com/nocobase/nocobase/pull/9155)) by @2013xile
* **[ワークフロー：JavaScript ノード]**`node:vm` モードでのスクリプト実行におけるセキュリティ問題を修正 ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher
* **[AI: ナレッジベース]** ナレッジベースのドキュメント削除時に、ベクトルストアへ同期されない問題を修正 by @cgyrock
* **[WeCom]** WeCom で部門を同期する際に、部門順序が同期されない問題を修正 by @2013xile

### [v2.0.40](https://www.nocobase.com/ja/blog/v2.0.40)

*リリース日：2026-04-20*

### 🐛 不具合修正

- **[client]** フィールド代入でサブテーブル内の値を変更した後、データ汚染が発生する問題を修正 ([#9163](https://github.com/nocobase/nocobase/pull/9163)) by @gchust
- **[data-source-manager]** データベース同期後にsequenceフィールドがstringに変更される可能性がある問題を修正 ([#9143](https://github.com/nocobase/nocobase/pull/9143)) by @2013xile
- **[ファイルマネージャー]** プレビューURLが欠落している場合はnullを返す ([#9104](https://github.com/nocobase/nocobase/pull/9104)) by @gaston98765
- **[ワークフロー：JavaScriptノード]** `node:vm`モードでのスクリプト実行時のセキュリティ問題を修正 ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher
- **[部門]**

  - 部門管理における部門リストが`sort`フィールド順に並んでいない問題を修正 ([#9150](https://github.com/nocobase/nocobase/pull/9150)) by @2013xile
  - ユーザーの部門を保存した後、主部門が同期されない、または同期エラーが発生する問題を修正 ([#9156](https://github.com/nocobase/nocobase/pull/9156)) by @2013xile

### [v2.0.39](https://www.nocobase.com/ja/blog/v2.0.39)

*リリース日：2026-04-18*

### 🚀 機能改善

- **[部門]** インターフェースに部門テーブルの`parentId`外部キー字段を表示する ([#9130](https://github.com/nocobase/nocobase/pull/9130)) by @2013xile

### 🐛 不具合修正

- **[data-source-manager]** ファイルテーブルフィールドの同期中に`preview`フィールドが誤って削除される問題を修正 ([#9129](https://github.com/nocobase/nocobase/pull/9129)) by @2013xile
- **[client]**

  - フィールド値設定におけるリレーションシップフィールドコンポーネントが正しく表示されない問題を修正 ([#9063](https://github.com/nocobase/nocobase/pull/9063)) by @gchust
  - ページ設定モードでのタブの高さと幅が異常に変わる問題を修正 ([#9144](https://github.com/nocobase/nocobase/pull/9144)) by @zhangzhonghe
- **[database]** 再帰ツリーのプリロードとグループソートの初期化におけるSQLインジェクションリスクを修正 ([#9133](https://github.com/nocobase/nocobase/pull/9133)) by @2013xile
- **[データ可視化]** チャートブロックが集計クエリでソート時にメジャーとディメンションエイリアスを使用しない問題を修正 ([#9131](https://github.com/nocobase/nocobase/pull/9131)) by @2013xile
- **[データテーブル: SQL]** SQLデータテーブル更新時のSQLバリデーションが欠落する問題を修正 ([#9134](https://github.com/nocobase/nocobase/pull/9134)) by @2013xile

### [v2.0.38](https://www.nocobase.com/ja/blog/v2.0.38)

*リリース日：2026-04-16*

### 🎉 新機能

* **[AI 従業員]** アップロードされた文書の解析能力を向上 ([#9126](https://github.com/nocobase/nocobase/pull/9126)) by @cgyrock

### 🚀 機能改善

* **[logger]** リクエストログに `referer` 情報を追加 ([#9110](https://github.com/nocobase/nocobase/pull/9110)) by @2013xile
* **[undefined]** 環境変数とクラスターモードのドキュメントの多言語版を同期し、最新の中国語版の内容に合わせました。 ([#9115](https://github.com/nocobase/nocobase/pull/9115)) by @mytharcher
* **[AI 従業員]** AI 従業員がブロック選択後、フォームの添付ファイルを送信欄の添付ファイルアップロードエリアに反映できるように改善 ([#9127](https://github.com/nocobase/nocobase/pull/9127)) by @cgyrock
* **[ワークフロー：手動処理ノード]** ワークフローの To-do 関連テーブルでシンプルページネーションモードを使用し、一覧のパフォーマンスを改善 ([#9117](https://github.com/nocobase/nocobase/pull/9117)) by @mytharcher
* **[ワークフロー：承認]**`approvals` と `approvalRecords` テーブルでシンプルページネーションモードを使用し、一覧のパフォーマンスを改善 by @mytharcher

### 🐛 不具合修正

* **[client]**
  * 単一選択フィールドで、フィールドルール設定時に選択肢が空になる問題を修正 ([#9119](https://github.com/nocobase/nocobase/pull/9119)) by @jiannx
  * サブテーブルのデフォルト値設定が有効にならない問題を修正。 ([#9087](https://github.com/nocobase/nocobase/pull/9087)) by @gchust
* **[通知：サイト内メッセージ]** 受信者コンポーネントが正常に動作しない問題を修正 ([#9123](https://github.com/nocobase/nocobase/pull/9123)) by @mytharcher
* **[AI 従業員]** google-gen-ai の LLM サービスで baseURL 設定が有効にならない問題を修正 ([#9107](https://github.com/nocobase/nocobase/pull/9107)) by @cgyrock
* **[メール管理]** メール送信成功後に表示されるフォームを閉じるメッセージを削除 by @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.14](https://www.nocobase.com/ja/blog/v2.1.0-beta.14)

*リリース日：2026-04-20*

### 🎉 新機能

- **[カレンダー]** カレンダーブロック v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) by @jiannx
- **[AI従業員]** AI従業員の上传ドキュメント解析能力を向上 ([#9126](https://github.com/nocobase/nocobase/pull/9126)) by @cgyrock
- **[ブロック：ツリー]** 新規ツリーフィルターバロックを追加 ([#9016](https://github.com/nocobase/nocobase/pull/9016)) by @jiannx
- **[メール管理]** Gmailがメールエイリアス送信をサポート by @jiannx

### 🚀 機能改善

- **[undefined]**

  - アラビア語ガイドとナビゲーションの翻訳を追加 ([#9141](https://github.com/nocobase/nocobase/pull/9141)) by @saraTabbane
  - 環境変数とクラスターモードのドキュメントの多言語バージョンを同期し、最新の中身容と一貫性を保つ ([#9115](https://github.com/nocobase/nocobase/pull/9115)) by @mytharcher
  - ドキュメント首页のアラビア語翻訳を追加 ([#9043](https://github.com/nocobase/nocobase/pull/9043)) by @gaston98765
  - README.zh-CN.mdに目次を追加 ([#9038](https://github.com/nocobase/nocobase/pull/9038)) by @gaston98765
  - フランス語READMEに目次を追加 ([#9037](https://github.com/nocobase/nocobase/pull/9037)) by @saraTabbane
  - ドキュメント：get-started入門ページのエラビア語翻訳を追加 ([#9044](https://github.com/nocobase/nocobase/pull/9044)) by @gaston98765
- **[logger]** リクエストログに`referer`情報を追加 ([#9110](https://github.com/nocobase/nocobase/pull/9110)) by @2013xile
- **[client]** フォームフィールド必須バリデーショントグルを追加 ([#9060](https://github.com/nocobase/nocobase/pull/9060)) by @jiannx
- **[database]** repository countクエリを最適化され、include関連が存在する場合のみdistinctを有効にする ([#9094](https://github.com/nocobase/nocobase/pull/9094)) by @mytharcher
- **[部門]** インターフェースに部門テーブルの`parentId`外部キー字段を表示する ([#9130](https://github.com/nocobase/nocobase/pull/9130)) by @2013xile
- **[AI従業員]** AI従業員がブロックを選択した後、フォーム添付ファイルを送信ボックスの添付ファイルアップロードエリアに自動入力 ([#9127](https://github.com/nocobase/nocobase/pull/9127)) by @cgyrock
- **[ワークフロー：手動処理ノード]** ワークフロー未処理関連テーブルにシンプルページネーションモードを使用して、リストパフォーマンスを最適化 ([#9117](https://github.com/nocobase/nocobase/pull/9117)) by @mytharcher
- **[ワークフロー：承認]** `approvals`と`approvalRecords`テーブルにシンプルページネーションモードを使用して、リストパフォーマンスを最適化 by @mytharcher

### 🐛 不具合修正

- **[client]**

  - フィールド代入でサブテーブル内の値を変更した後、データ汚染が発生する問題を修正 ([#9163](https://github.com/nocobase/nocobase/pull/9163)) by @gchust
  - ページ設定モードでのタブの高さと幅が異常に変わる問題を修正 ([#9144](https://github.com/nocobase/nocobase/pull/9144)) by @zhangzhonghe
  - フィールド値設定におけるリレーションシップフィールドコンポーネントが正しく表示されない問題を修正 ([#9063](https://github.com/nocobase/nocobase/pull/9063)) by @gchust
  - フィールドルール設定でラジオフィールドのオプションが空になる問題を修正 ([#9119](https://github.com/nocobase/nocobase/pull/9119)) by @jiannx
  - サブテーブルのデフォルト値設定が有効にならない問題を修正 ([#9087](https://github.com/nocobase/nocobase/pull/9087)) by @gchust
  - サブテーブルで多対多を追加するとエラーが発生 ([#9070](https://github.com/nocobase/nocobase/pull/9070)) by @jiannx
  - サブテーブルのデータ選択ボタンが開くポップアップで、上位항目の変数値が正しく解決できない問題を修正 ([#8996](https://github.com/nocobase/nocobase/pull/8996)) by @gchust
- **[data-source-manager]**

  - データベース同期後にsequenceフィールドがstringに変更される可能性がある問題を修正 ([#9143](https://github.com/nocobase/nocobase/pull/9143)) by @2013xile
  - ファイルテーブルフィールドの同期中に`preview`フィールドが誤って削除される問題を修正 ([#9129](https://github.com/nocobase/nocobase/pull/9129)) by @2013xile
- **[database]** 再帰ツリーのプリロードとグループソートの初期化におけるSQLインジェクションリスクを修正 ([#9133](https://github.com/nocobase/nocobase/pull/9133)) by @2013xile
- **[undefined]** カスタムリソースブロックがリソース不存在時にレンダリングエラーが発生する問題を修正 ([#9095](https://github.com/nocobase/nocobase/pull/9095)) by @Molunerfinn
- **[utils]** サーバー側のHTTPリクエストにセキュリティ制御を追加して、潜在的なSSRF脆弱性を防止 ([#9079](https://github.com/nocobase/nocobase/pull/9079)) by @mytharcher
  参考：[環境変数](https://docs.nocobase.com/cn/get-started/installation/env)
- **[flow-engine]**

  - 外部データソースの多对一フィールドがテーブルブロックに追加できない問題を修正 ([#9068](https://github.com/nocobase/nocobase/pull/9068)) by @jiannx
  - ページの可視性を切り替えた時のobserverのランダムエラーを修正 ([#9067](https://github.com/nocobase/nocobase/pull/9067)) by @zhangzhonghe
- **[データソース：メインデータベース]** データベースビューに接続する際のコレクション名とデータベースビュー名の不整合によるフィールド同期失敗問題を修正 ([#9155](https://github.com/nocobase/nocobase/pull/9155)) by @2013xile
- **[ファイルマネージャー]** プレビューURLが欠落している場合はnullを返す ([#9104](https://github.com/nocobase/nocobase/pull/9104)) by @gaston98765
- **[部門]**

  - ユーザーの部門を保存した後、主部門が同期されない、または同期エラーが発生する問題を修正 ([#9156](https://github.com/nocobase/nocobase/pull/9156)) by @2013xile
  - 部門管理における部門リストが`sort`フィールド順に並んでいない問題を修正 ([#9150](https://github.com/nocobase/nocobase/pull/9150)) by @2013xile
- **[ワークフロー：JavaScriptノード]** `node:vm`モードでのスクリプト実行時のセキュリティ問題を修正 ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher
- **[データテーブル: SQL]** SQLデータテーブル更新時のSQLバリデーションが欠落する問題を修正 ([#9134](https://github.com/nocobase/nocobase/pull/9134)) by @2013xile
- **[データ可視化]** チャートブロックが集計クエリでソート時にメジャーとディメンションエイリアスを使用しない問題を修正 ([#9131](https://github.com/nocobase/nocobase/pull/9131)) by @2013xile
- **[通知：站内信]** 受信者コンポーネントが正常に動作しない問題を修正 ([#9123](https://github.com/nocobase/nocobase/pull/9123)) by @mytharcher
- **[AI従業員]** google-gen-aiのLLMサービスbaseURL設定が有効にならない問題を修正 ([#9107](https://github.com/nocobase/nocobase/pull/9107)) by @cgyrock
- **[通知管理]** ワークフローシナリオでの站内信通知の送信パフォーマンス問題を修正し、同期送信パスのブロックを減少 ([#9066](https://github.com/nocobase/nocobase/pull/9066)) by @mytharcher
- **[権限管理]** ACLで空の配列を使用して関連値をクリアしても有効にならない場合がある問題を修正 ([#9059](https://github.com/nocobase/nocobase/pull/9059)) by @2013xile
- **[データテーブルフィールド：コード]** コードフィールドのUIタイプを修正 ([#9061](https://github.com/nocobase/nocobase/pull/9061)) by @2013xile
- **[メール管理]** メール送信成功後のフォーム閉じるプロンプトを削除 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.20](https://www.nocobase.com/ja/blog/v2.1.0-alpha.20)

*リリース日：2026-04-20*

### 🎉 新機能

* **[ワークフロー]** ノードタスクにログフィールドを追加し、一部ノードのデバッグ時にログを表示できるように改善 ([#9165](https://github.com/nocobase/nocobase/pull/9165)) by @mytharcher

### 🚀 機能改善

* **[undefined]** ガイドとナビゲーションのアラビア語翻訳を追加 ([#9141](https://github.com/nocobase/nocobase/pull/9141)) by @saraTabbane
* **[cli]** 生成 API CLI のヘルプ出力と ACL コマンドグループを改善 ([#9166](https://github.com/nocobase/nocobase/pull/9166)) by @2013xile

### 🐛 不具合修正

* **[client]** フィールド代入で子テーブル内の値を変更した後、データが汚染される問題を修正。 ([#9163](https://github.com/nocobase/nocobase/pull/9163)) by @gchust
* **[data-source-manager]** データベース同期後に sequence フィールドが string 型になる可能性がある問題を修正 ([#9143](https://github.com/nocobase/nocobase/pull/9143)) by @2013xile
* **[cli]** Windows 上で CLI の OAuth ログインが認証リンクが長すぎるため失敗する可能性がある問題を修正 ([#9159](https://github.com/nocobase/nocobase/pull/9159)) by @2013xile
* **[部門]** ユーザーの部門保存後、主部門が同期されない、または誤って同期される問題を修正 ([#9156](https://github.com/nocobase/nocobase/pull/9156)) by @2013xile
* **[データソース：メインデータベース]** データベースビュー接続時にコレクション名とビュー名の不一致によりフィールド同期に失敗する問題を修正 ([#9155](https://github.com/nocobase/nocobase/pull/9155)) by @2013xile
* **[ファイルマネージャー]** プレビュー URL が存在しない場合は null を返すように修正 ([#9104](https://github.com/nocobase/nocobase/pull/9104)) by @gaston98765

### [v2.1.0-alpha.19](https://www.nocobase.com/ja/blog/v2.1.0-alpha.19)

*リリース日：2026-04-19*

### 🎉 新機能

- **[cli-v1]** storage path変数をリファクタリング ([#9147](https://github.com/nocobase/nocobase/pull/9147)) by @chenos
- **[カレンダー]** カレンダーブロック v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) by @jiannx

### 🚀 機能改善

- **[cli]** `nb api`実行時のブートストラップ失敗時のヘルプ降格動作を最適化し、警告メッセージのスタイルを統一 ([#9153](https://github.com/nocobase/nocobase/pull/9153)) by @2013xile
- **[部門]** インターフェースに部門テーブルの`parentId`外部キー字段を表示する ([#9130](https://github.com/nocobase/nocobase/pull/9130)) by @2013xile

### 🐛 不具合修正

- **[client]** ページ設定モードでのタブの高さと幅が異常に変わる問題を修正 ([#9144](https://github.com/nocobase/nocobase/pull/9144)) by @zhangzhonghe
- **[database]** 再帰ツリーのプリロードとグループソートの初期化におけるSQLインジェクションリスクを修正 ([#9133](https://github.com/nocobase/nocobase/pull/9133)) by @2013xile
- **[ワークフロー：JavaScriptノード]** `node:vm`モードでのスクリプト実行時のセキュリティ問題を修正 ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher
- **[IdP: OAuth]** サービス再起動後のOAuthクライアント登録とトークンリフレッシュの失敗を修正 ([#9139](https://github.com/nocobase/nocobase/pull/9139)) by @2013xile
- **[部門]** 部門管理における部門リストが`sort`フィールド順に並んでいない問題を修正 ([#9150](https://github.com/nocobase/nocobase/pull/9150)) by @2013xile
- **[データテーブル: SQL]** SQLデータテーブル更新時のSQLバリデーションが欠落する問題を修正 ([#9134](https://github.com/nocobase/nocobase/pull/9134)) by @2013xile
- **[データ可視化]** チャートブロックが集計クエリでソート時にメジャーとディメンションエイリアスを使用しない問題を修正 ([#9131](https://github.com/nocobase/nocobase/pull/9131)) by @2013xile

### [v2.1.0-alpha.18](https://www.nocobase.com/ja/blog/v2.1.0-alpha.18)

*リリース日：2026-04-17*

### 🐛 不具合修正

- **[data-source-manager]** ファイルテーブルフィールドの同期中に`preview`フィールドが誤って削除される問題を修正 ([#9129](https://github.com/nocobase/nocobase/pull/9129)) by @2013xile

### [v2.1.0-alpha.17](https://www.nocobase.com/ja/blog/v2.1.0-alpha.17)

*リリース日：2026-04-17*

### 🎉 新機能

* **[cli]** NocoBase CLI をリファクタリング ([#9122](https://github.com/nocobase/nocobase/pull/9122)) by @chenos
* **[AI 従業員]** AI 従業員によるアップロード文書の解析機能を強化 ([#9126](https://github.com/nocobase/nocobase/pull/9126)) by @cgyrock

### 🚀 機能改善

* **[undefined]**
  * 環境変数およびクラスター モード関連ドキュメントの多言語版を同期し、最新の中国語版に合わせて更新 ([#9115](https://github.com/nocobase/nocobase/pull/9115)) by @mytharcher
  * ドキュメント：get-started 入門ページのアラビア語翻訳を追加 ([#9044](https://github.com/nocobase/nocobase/pull/9044)) by @gaston98765
  * ドキュメントのホームページにアラビア語翻訳を追加 ([#9043](https://github.com/nocobase/nocobase/pull/9043)) by @gaston98765
* **[logger]** リクエストログに `referer` 情報を追加 ([#9110](https://github.com/nocobase/nocobase/pull/9110)) by @2013xile
* **[client]** フォームの必須バリデーション切り替えを追加 ([#9060](https://github.com/nocobase/nocobase/pull/9060)) by @jiannx
* **[ワークフロー：手動処理ノード]** ワークフロー ToDo 関連テーブルで簡易ページネーションを使用し、リスト性能を改善 ([#9117](https://github.com/nocobase/nocobase/pull/9117)) by @mytharcher
* **[AI 従業員]** AI 従業員でブロック選択後、フォーム添付ファイルを送信ボックスの添付ファイルアップロード領域に自動入力するよう改善 ([#9127](https://github.com/nocobase/nocobase/pull/9127)) by @cgyrock
* **[ワークフロー：承認]**`approvals` と `approvalRecords` テーブルで簡易ページネーションを使用し、リスト性能を改善 by @mytharcher

### 🐛 不具合修正

* **[client]**
  * フィールドルール設定で単一選択フィールドの選択肢が空になる問題を修正 ([#9119](https://github.com/nocobase/nocobase/pull/9119)) by @jiannx
  * フィールド値設定でリレーションフィールドコンポーネントが正しく表示されない問題を修正。 ([#9063](https://github.com/nocobase/nocobase/pull/9063)) by @gchust
  * サブテーブルのデフォルト値設定が反映されない問題を修正。 ([#9087](https://github.com/nocobase/nocobase/pull/9087)) by @gchust
* **[utils]** サーバーからの HTTP リクエストにセキュリティ制御を追加し、潜在的な SSRF リスクを回避 ([#9079](https://github.com/nocobase/nocobase/pull/9079)) by @mytharcher
  参考ドキュメント：[環境変数](https://docs.nocobase.com/cn/get-started/installation/env)
* **[ワークフロー：ループノード]** ワークフローノードの検証ルールを修正 ([#9111](https://github.com/nocobase/nocobase/pull/9111)) by @mytharcher
* **[通知：サイト内メッセージ]** 受信者コンポーネントが正常に動作しない問題を修正 ([#9123](https://github.com/nocobase/nocobase/pull/9123)) by @mytharcher
* **[IdP: OAuth]** 通常の API リクエストで OAuth アクセスが正しく動作しない問題を修正 ([#9120](https://github.com/nocobase/nocobase/pull/9120)) by @2013xile
* **[AI 従業員]**
  * ACL により集計クエリのソート順が失われる問題を修正 ([#9099](https://github.com/nocobase/nocobase/pull/9099)) by @2013xile
  * google-gen-ai の LLM サービスで baseURL 設定が反映されない問題を修正 ([#9107](https://github.com/nocobase/nocobase/pull/9107)) by @cgyrock
* **[メール管理]** メール送信成功後に表示されるフォームを閉じる通知を削除 by @jiannx
