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
