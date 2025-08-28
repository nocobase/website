週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.22](https://www.nocobase.com/ja/blog/v1.8.22)

*リリース日：2025-08-27*

#### 🐛 不具合修正

* **[ワークフロー]** タスクセンターのルート設定が不正確で詳細ポップアップが表示されない問題を修正（[#7452](https://github.com/nocobase/nocobase/pull/7452)）@mytharcher

### [v1.8.21](https://www.nocobase.com/ja/blog/v1.8.21)

*リリース日：2025-08-26*

#### 🐛 不具合修正

* **[ファイルマネージャー]** ファイルコレクションの`storage`フィールド編集時に発生するエラーを修正（[#7393](https://github.com/nocobase/nocobase/pull/7393)）@mytharcher
* **[ワークフロー：並列ノード]** 「すべてのブランチを実行」モード下で、並列ブランチノードのステータス判定が不正確で早期に完了してしまう問題を修正（[#7445](https://github.com/nocobase/nocobase/pull/7445)）@mytharcher
* **[ワークフロー：承認]** 承認完了通知のカスタムテンプレートにステータス変数を追加 @mytharcher

### [v1.8.20](https://www.nocobase.com/ja/blog/v1.8.20)

*リリース日：2025-08-25*

#### 🚀 機能改善

* **[ワークフロー]** ワークフロー変数 API を調整し、追加の変数リストをプリセットする機能をサポート（[#7439](https://github.com/nocobase/nocobase/pull/7439)）@mytharcher
* **[ワークフロー：承認]**
  * カスタム通知内で承認関連の変数を使用する機能をサポート @mytharcher
  * 終了ノードが実行を終了した後、承認ステータスを更新する機能をサポート @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * 特定のシナリオで、モバイル端末のレコードピッカーポップアップでレコードを編集するとエラーが発生する問題を修正（[#7444](https://github.com/nocobase/nocobase/pull/7444)）@zhangzhonghe
  * サブテーブルの添付フィールドにおいて必須検証が機能しない問題（[#7431](https://github.com/nocobase/nocobase/pull/7431)）@katherinehhh
  * 添付ファイル URL フィールドの URL にクエリパラメータが含まれる場合、アイコンが不正に表示される問題を修正（[#7432](https://github.com/nocobase/nocobase/pull/7432)）@mytharcher
* **[データベース]**
  * アプリ内メッセージの「もっと読む」機能使用時に発生する MySQL 構文エラーを修正（[#7438](https://github.com/nocobase/nocobase/pull/7438)）@aaaaaajie
  * エクスポートされた Number フィールドの精度問題を修正（[#7421](https://github.com/nocobase/nocobase/pull/7421)）@aaaaaajie
* **[未定義（undefined）]** MySQL 外部データソースで日付フィールドのみでフィルタリングする際の問題を修正（[#7422](https://github.com/nocobase/nocobase/pull/7422)）@aaaaaajie
* **[アクション：レコードインポート]** テーブルのプライマリキーが単一行テキストの場合、インポートに失敗する問題を修正（[#7416](https://github.com/nocobase/nocobase/pull/7416)）@aaaaaajie
* **[ワークフロー]**
  * ワークフロー実行状態の自動削除オプションを完備（[#7436](https://github.com/nocobase/nocobase/pull/7436)）@mytharcher
  * ワークフロータスクにおけるモバイル端末メニュー関連の問題を修正（[#7419](https://github.com/nocobase/nocobase/pull/7419)）@mytharcher
* **[アクション：レコードインポート Pro]** xlsx ファイルのインポート時に文字列型プライマリキーを使用すると、予期しない更新結果になる問題を修正 @aaaaaajie

### [v1.8.19](https://www.nocobase.com/ja/blog/v1.8.19)

*リリース日：2025-08-22*

#### 🎉 新機能

* **[ワークフロー：承認]** 通知設定にインラインテンプレートタイプを追加 @mytharcher

#### 🚀 機能改善

* **[クライアント]** 読み取り専用モード時、Select コンポーネントで文字列で指定されたアイコンを表示する機能をサポート（[#7420](https://github.com/nocobase/nocobase/pull/7420)）@mytharcher
* **[データベース]** ACL メタクエリのパフォーマンスを最適化（[#7400](https://github.com/nocobase/nocobase/pull/7400)）@aaaaaajie
* **[モバイル]** モバイル端末のポップアップコンポーネントを最適化（[#7414](https://github.com/nocobase/nocobase/pull/7414)）@zhangzhonghe

#### 🐛 不具合修正

* **[データベース]** Postgres 外部テーブル読み取り時に、他のスキーマのビューが含まれる問題を修正（[#7410](https://github.com/nocobase/nocobase/pull/7410)）@aaaaaajie
* **[ブロック：テンプレート]** 継承されたテンプレートブロック内にメールブロックを配置した際に表示されない問題を解消（[#7430](https://github.com/nocobase/nocobase/pull/7430)）@gchust
* **[アクション：レコードインポート Pro]** インポート時の重複検出中に、関連フィールドへの割り当てを禁止 @aaaaaajie
* **[ワークフロー：承認]** 会签時にユーザーリストが空になる問題を修正 @mytharcher
* **[マイグレーションマネージャー]** リストアエラーを解消するため、マイグレーションファイル作成時に、最新 pg\_dump で生成される`\restrict`および`\unrestrict`コマンドをスキップ @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.6](https://www.nocobase.com/ja/blog/v1.9.0-beta.6)

*リリース日：2025-08-22*

#### 🎉 新機能

* **[クライアント]** Input、TextArea、URL、InputNumber コンポーネントに「自動フォーカス」オプションを追加。有効化すると、ページ初回描画時に入力欄に自動でフォーカスが当たる（[#7320](https://github.com/nocobase/nocobase/pull/7320)）@zhangzhonghe
* **[非同期タスクマネージャー]** 環境変数（env）とイベントキューによる非同期タスクサービスの分割をサポート（[#7241](https://github.com/nocobase/nocobase/pull/7241)）@mytharcher
* **[オフィスファイルプレビューワー]** Microsoft ライブプレビューを通じたオフィスファイルのプレビューをサポート（[#7300](https://github.com/nocobase/nocobase/pull/7300)）@mytharcher
* **[認証: SAML 2.0]** 署名関連の設定オプションを追加 @2013xile
* **[ワークフロー：承認]**
  * 通知設定にインラインテンプレートタイプを追加 @mytharcher
  * 同一ワークフロー内のすべての承認ノードで一貫したタスクタイトルを使用できるようサポート @mytharcher

#### 🚀 機能改善

* **[データベース]** ACL メタクエリのパフォーマンスを最適化（[#7400](https://github.com/nocobase/nocobase/pull/7400)）@aaaaaajie
* **[クライアント]**
  * 読み取り専用モード時、Select コンポーネントで文字列で指定されたアイコンを表示する機能をサポート（[#7420](https://github.com/nocobase/nocobase/pull/7420)）@mytharcher
  * 「一昨日」の日付変数をサポート（[#7359](https://github.com/nocobase/nocobase/pull/7359)）@katherinehhh
  * ポップアップタブ切り替え時のパフォーマンスを最適化（[#7353](https://github.com/nocobase/nocobase/pull/7353)）@zhangzhonghe
  * 選択後にメニューを自動で閉じないように変更（[#7252](https://github.com/nocobase/nocobase/pull/7252)）@kerwin612
* **[モバイル]** モバイル端末のポップアップコンポーネントを最適化（[#7414](https://github.com/nocobase/nocobase/pull/7414)）@zhangzhonghe
* **[ワークフロー]**
  * ノード選択メニューを更新し、2 カラムレイアウトでオプションを表示するようにした。情報密度を高め、ユーザーが一度に更多のオプションを確認できるように（[#7396](https://github.com/nocobase/nocobase/pull/7396)）@mytharcher
  * 不安定なテストケースを修正（[#7349](https://github.com/nocobase/nocobase/pull/7349)）@mytharcher
  * 無効化時に通常のタイトルを表示するように変更（[#7339](https://github.com/nocobase/nocobase/pull/7339)）@mytharcher
  * 実行準備時に読み込むジョブ数を削減（[#7284](https://github.com/nocobase/nocobase/pull/7284)）@mytharcher
* **[ライセンス設定]** ライセンス設定では、毎回最新のインスタンス ID をコピーするように（[#7387](https://github.com/nocobase/nocobase/pull/7387)）@jiannx
* **[認証]** ログイン成功後、URL からトークンパラメータを削除（[#7386](https://github.com/nocobase/nocobase/pull/7386)）@2013xile
* **[通知：アプリ内メッセージ]**
  * `console.log`による SQL ログ出力を削除（[#7368](https://github.com/nocobase/nocobase/pull/7368)）@2013xile
  * アプリ内メッセージを SSE（サーバー送信イベント）から WebSocket に変更（[#7302](https://github.com/nocobase/nocobase/pull/7302)）@mytharcher
* **[オフィスファイルプレビューワー]** `.odt`ファイルのプレビューをサポート（[#7347](https://github.com/nocobase/nocobase/pull/7347)）@mytharcher
* **[アクション：レコードインポート Pro]** 環境変数（env）とイベントキューによるインポート / エクスポートサービスの分割をサポート @mytharcher
* **[ワークフロー: JavaScript]** キャッシュをアプリキャッシュに変更し、クラスターモードでのバグを回避 @mytharcher
* **[テンプレート印刷]** フィールドの多対多（m2m）配列をサポート @jiannx
* **[バックアップマネージャー]** MySQL データベースのバックアップ操作のパフォーマンスを改善 @gchust
* **[認証：钉钉（DingTalk）]** 钉钉クライアント内で、ナビゲーションバーのタイトルを「Loading…」表示から空文字に設定 @2013xile
* **[マイグレーションマネージャー]** 環境変数（env）とイベントキューによるマイグレーションサービスの分割をサポート @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * 添付ファイル URL フィールドの URL にクエリパラメータが含まれる場合、アイコンが不正に表示される問題を修正（[#7432](https://github.com/nocobase/nocobase/pull/7432)）@mytharcher
  * 連動ルールの空値検証時に数値 0 を空として扱う（[#7404](https://github.com/nocobase/nocobase/pull/7404)）@katherinehhh
  * リンクボタンのテキストが改行される問題を修正（[#7406](https://github.com/nocobase/nocobase/pull/7406)）@mytharcher
  * モバイルデバイスで複数列フォームレイアウトが単列レイアウトに変換されない問題を修正（[#7355](https://github.com/nocobase/nocobase/pull/7355)）@zhangzhonghe
  * コレクションの一括削除エラーを修正（[#7345](https://github.com/nocobase/nocobase/pull/7345)）@aaaaaajie
  * 個別に権限を設定する際に、以前に保存したデータ範囲が事前に選択されない問題を修正（[#7288](https://github.com/nocobase/nocobase/pull/7288)）@aaaaaajie
  * 変数の生文字列がフォームと共に送信される問題を修正（[#7337](https://github.com/nocobase/nocobase/pull/7337)）@zhangzhonghe
  * フィルターフォームで変数を使用してフィールドのデフォルト値を設定する際、変数値が空の場合、入力ボックスに元の変数文字列を表示する問題（[#7335](https://github.com/nocobase/nocobase/pull/7335)）@zhangzhonghe
  * アクションパネルにホバーした際、ツールチップに「[object Object]」が表示される問題を修正（[#7322](https://github.com/nocobase/nocobase/pull/7322)）@katherinehhh
  * フィールドのデフォルト値解析時の無限ループ問題を修正（[#7301](https://github.com/nocobase/nocobase/pull/7301)）@zhangzhonghe
  * URL が null の場合のファイルプレビューアイテムを修正（[#7315](https://github.com/nocobase/nocobase/pull/7315)）@mytharcher
  * ツリーテーブルを展開できない問題を修正（[#7309](https://github.com/nocobase/nocobase/pull/7309)）@zhangzhonghe
  * プレビュー時にローカルファイルに完全な URL を追加（[#7314](https://github.com/nocobase/nocobase/pull/7314)）@mytharcher
  * テーブル行のドラッグアンドドロップソートにおける予期しない動作を修正（[#6959](https://github.com/nocobase/nocobase/pull/6959)）@ChimingLiu
  * フィルターフォームの関連フィールドデータセレクターポップアップにおける日付フィールド表示問題（[#7290](https://github.com/nocobase/nocobase/pull/7290)）@katherinehhh
* **[データベース]** Postgres 外部テーブル読み取り時に、他のスキーマのビューが含まれる問題を修正（[#7410](https://github.com/nocobase/nocobase/pull/7410)）@aaaaaajie
* **[サーバー]** 一部リクエストに`ctx.action`がなく、監査ログミドルウェアでエラーが発生する問題を修正（[#7369](https://github.com/nocobase/nocobase/pull/7369)）@2013xile
* **[未定義（undefined）]** 新しいプラグインをプリセットに追加（[#7319](https://github.com/nocobase/nocobase/pull/7319)）@mytharcher
* **[ユーティリティ（utils）]** parseDate 関数のタイムゾーン処理が不正確な問題（[#7318](https://github.com/nocobase/nocobase/pull/7318)）@katherinehhh
* **[ブロック：テンプレート]** 継承されたテンプレートブロック内にメールブロックを配置した際に表示されない問題を解消（[#7430](https://github.com/nocobase/nocobase/pull/7430)）@gchust
* **[モバイル]**
  * モバイル端末での日付フィールドの表示形式が不正確な問題（[#7412](https://github.com/nocobase/nocobase/pull/7412)）@katherinehhh
  * モバイル承認ダイアログのフォーム送信データが不正確な問題を修正（[#7389](https://github.com/nocobase/nocobase/pull/7389)）@zhangzhonghe
  * 日付範囲制限を適用した場合に、モバイルデバイスの日付ピッカーが不正に表示される問題を解消（[#7362](https://github.com/nocobase/nocobase/pull/7362)）@katherinehhh
* **[ワークフロー]**
  * ワークフローカテゴリを編集するとエラーが発生し、フォームデータが消失する問題を修正（[#7408](https://github.com/nocobase/nocobase/pull/7408)）@mytharcher
  * ワークフロータスクセンターのページタイトルの翻訳を修正（[#7392](https://github.com/nocobase/nocobase/pull/7392)）@mytharcher
  * 「ノード追加」メニューをリファクタリングし、それに起因するワークフローキャンバスの描画パフォーマンス問題を修正（[#7363](https://github.com/nocobase/nocobase/pull/7363)）@mytharcher
  * 単一のタスクアイテムを取得する際のフィルター条件が不正確な問題を修正（[#7366](https://github.com/nocobase/nocobase/pull/7366)）@mytharcher
  * フィールド選択におけるキーワード一致の問題を修正（[#7356](https://github.com/nocobase/nocobase/pull/7356)）@mytharcher
  * 停止時にイベントキューに発行することで引き起こされるエラーを回避（[#7348](https://github.com/nocobase/nocobase/pull/7348)）@mytharcher
  * プロセッサ終了時の`undefined`結果を修正（[#7317](https://github.com/nocobase/nocobase/pull/7317)）@mytharcher
  * MySQL 環境でジョブ保存時の BigInt ID 問題を修正（[#7292](https://github.com/nocobase/nocobase/pull/7292)）@mytharcher
* **[ワークフロー：メーラーノード]** メールノードが正しく実行を再開できない場合がある問題を修正（[#7409](https://github.com/nocobase/nocobase/pull/7409)）@mytharcher
* **[オフィスファイルプレビューワー]**
  * 添付ファイル URL フィールドにファイルをアップロードする際にエラーが発生する問題を修正（[#7405](https://github.com/nocobase/nocobase/pull/7405)）@mytharcher
  * URL のみで`.docx`、`.xlsx`、`.pptx`ファイルのプレビューをサポート（[#7336](https://github.com/nocobase/nocobase/pull/7336)）@mytharcher
* **[ファイルマネージャー]**
  * ファイルアップロードサイズ制限のヒントを削除（[#7391](https://github.com/nocobase/nocobase/pull/7391)）@mytharcher
  * 権限設定をサポートするため、ファイルコレクションに`storageId`フィールドを追加（[#7351](https://github.com/nocobase/nocobase/pull/7351)）@mytharcher
  * ストレージフィールドの権限を修正（[#7316](https://github.com/nocobase/nocobase/pull/7316)）@mytharcher
* **[通知：アプリ内メッセージ]**
  * 翻訳を修正（[#7384](https://github.com/nocobase/nocobase/pull/7384)）@mytharcher
  * サイト内メッセージを受信したがポップアップで表示されない問題を修正（[#7364](https://github.com/nocobase/nocobase/pull/7364)）@mytharcher
* **[カレンダー]** カレンダーイベントアイテムのツールチップに「[object Object]」が表示される問題（[#7372](https://github.com/nocobase/nocobase/pull/7372)）@katherinehhh
* **[コレクションフィールド：数式]** 変数の型により数式入力が検証を通過できない問題を修正（[#7373](https://github.com/nocobase/nocobase/pull/7373)）@mytharcher
* **[ワークフロー：並列ノード]** MySQL 環境下で、並列ノードが再開後に中断する問題を修正（[#7346](https://github.com/nocobase/nocobase/pull/7346)）@mytharcher
* **[ワークフロー: CC]** ブロックを削除できない問題を修正（[#7338](https://github.com/nocobase/nocobase/pull/7338)）@mytharcher
* **[データ可視化]** チャートフィルターブロックの日付フィールドのデフォルト値における日付変数の問題（[#7291](https://github.com/nocobase/nocobase/pull/7291)）@katherinehhh
* **[コレクション：ツリー]** ツリーコレクションのパス同期ロジックを修正（[#7330](https://github.com/nocobase/nocobase/pull/7330)）@ChimingLiu
* **[ワークフロー: HTTP リクエストノード]** レーシングコンディション（競合状態）のバグを修正（[#7310](https://github.com/nocobase/nocobase/pull/7310)）@mytharcher
* **[ワークフロー：動的計算ノード]** レガシー API によるエラーを修正（[#7321](https://github.com/nocobase/nocobase/pull/7321)）@mytharcher
* **[アクション：レコードエクスポート]** Excel にエクスポートする際、ネストされた関連フィールドの書式が不正確な問題を修正（[#7277](https://github.com/nocobase/nocobase/pull/7277)）@aaaaaajie
* **[アクション：レコードインポート Pro]** インポート時の重複検出中に、関連フィールドへの割り当てを禁止 @aaaaaajie
* **[データソース：外部 SQL サーバー]** 外部データソースの MSSQL 日時（タイムゾーンなし）フィールドにおけるストレージ形式の不一致を修正 @aaaaaajie
* **[ワークフロー：カスタムアクションイベント]** 複数レコードでアクションのトリガーに成功後、選択した行をクリアする @mytharcher
* **[ワークフロー：サブフロー]** フローが中断する問題を修正 @mytharcher
* **[テンプレート印刷]** 複数行のデータにおけるラジオ選択フィールドの印刷問題を修正 @jiannx
* **[ファイルストレージ: S3 (Pro)]**
  * IAM 認証方式を使用してファイルをアップロードできない問題を修正 @mytharcher
  * 問題のあるパラメータ`attachmentField`を非推奨に @mytharcher
* **[ワークフロー：承認]**
  * 承認レコードで外部データソースのデータを読み込むと 404 エラーが発生する問題を修正 @mytharcher
  * 追加および委任されたアイテムにタスクタイトルを追加 @mytharcher
  * 外部データソース内の担当者選択から発生するエラーを修正 @mytharcher
  * 会签時にユーザーリストが空になる問題を修正 @mytharcher
  * ドラフトを送信する際の関連データ更新を修正 @mytharcher
  * 承認元の詳細ブロックにおいて連動規則が機能しない問題を修正 @mytharcher
* **[バックアップマネージャー]** 大ファイルのバックアップが実際に完了する前に「成功」と表示される問題を修正 @gchust
* **[マイグレーションマネージャー]** リストアエラーを解消するため、マイグレーションファイル作成時に、最新 pg\_dump で生成される`\restrict`および`\unrestrict`コマンドをスキップ @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.12](https://www.nocobase.com/ja/blog/v1.9.0-alpha.12)

*リリース日：2025-08-22*

#### 🎉 新機能

* **[クライアント]** フィールド検証ルールをサポート（[#7297](https://github.com/nocobase/nocobase/pull/7297)）@aaaaaajie
* **[ワークフロー：承認]**
  * 通知設定にインラインテンプレートタイプを追加 @mytharcher
  * 同一ワークフロー内のすべての承認ノードで一貫したタスクタイトルを使用できるようサポート @mytharcher

#### 🚀 機能改善

* **[データベース]** ACL メタクエリのパフォーマンスを最適化（[#7400](https://github.com/nocobase/nocobase/pull/7400)）@aaaaaajie
* **[クライアント]** 読み取り専用モード時、Select コンポーネントで文字列で指定されたアイコンを表示する機能をサポート（[#7420](https://github.com/nocobase/nocobase/pull/7420)）@mytharcher
* **[モバイル]** モバイル端末のポップアップコンポーネントを最適化（[#7414](https://github.com/nocobase/nocobase/pull/7414)）@zhangzhonghe
* **[ワークフロー]** ノード選択メニューを更新し、2 カラムレイアウトでオプションを表示するようにした。情報密度を高め、ユーザーが一度に更多のオプションを確認できるように（[#7396](https://github.com/nocobase/nocobase/pull/7396)）@mytharcher
* **[ライセンス設定]** ライセンス設定では、毎回最新のインスタンス ID をコピーするように（[#7387](https://github.com/nocobase/nocobase/pull/7387)）@jiannx
* **[通知：アプリ内メッセージ]** `console.log`による SQL ログ出力を削除（[#7368](https://github.com/nocobase/nocobase/pull/7368)）@2013xile
* **[認証]** ログイン成功後、URL からトークンパラメータを削除（[#7386](https://github.com/nocobase/nocobase/pull/7386)）@2013xile
* **[テンプレート印刷]** フィールドの多対多（m2m）配列をサポート @jiannx

#### 🐛 不具合修正

* **[データベース]** Postgres 外部テーブル読み取り時に、他のスキーマのビューが含まれる問題を修正（[#7410](https://github.com/nocobase/nocobase/pull/7410)）@aaaaaajie
* **[クライアント]**
  * 連動ルールの空値検証時に数値 0 を空として扱う（[#7404](https://github.com/nocobase/nocobase/pull/7404)）@katherinehhh
  * 「列設定」ボタンがモーダルダイアログ内のテーブルから列を読み込む問題を修正（[#7385](https://github.com/nocobase/nocobase/pull/7385)）@kerwin612
  * リンクボタンのテキストが改行される問題を修正（[#7406](https://github.com/nocobase/nocobase/pull/7406)）@mytharcher
* **[サーバー]** 一部リクエストに`ctx.action`がなく、監査ログミドルウェアでエラーが発生する問題を修正（[#7369](https://github.com/nocobase/nocobase/pull/7369)）@2013xile
* **[ブロック：テンプレート]** 継承されたテンプレートブロック内にメールブロックを配置した際に表示されない問題を解消（[#7430](https://github.com/nocobase/nocobase/pull/7430)）@gchust
* **[ワークフロー：メーラーノード]** メールノードが正しく実行を再開できない場合がある問題を修正（[#7409](https://github.com/nocobase/nocobase/pull/7409)）@mytharcher
* **[モバイル]**
  * モバイル端末での日付フィールドの表示形式が不正確な問題（[#7412](https://github.com/nocobase/nocobase/pull/7412)）@katherinehhh
  * モバイル承認ダイアログのフォーム送信データが不正確な問題を修正（[#7389](https://github.com/nocobase/nocobase/pull/7389)）@zhangzhonghe
* **[ワークフロー]**
  * ワークフローカテゴリを編集するとエラーが発生し、フォームデータが消失する問題を修正（[#7408](https://github.com/nocobase/nocobase/pull/7408)）@mytharcher
  * ワークフロータスクセンターのページタイトルの翻訳を修正（[#7392](https://github.com/nocobase/nocobase/pull/7392)）@mytharcher
* **[オフィスファイルプレビューワー]** 添付ファイル URL フィールドにファイルをアップロードする際にエラーが発生する問題を修正（[#7405](https://github.com/nocobase/nocobase/pull/7405)）@mytharcher
* **[通知：アプリ内メッセージ]** 翻訳を修正（[#7384](https://github.com/nocobase/nocobase/pull/7384)）@mytharcher
* **[コレクションフィールド：数式]** 変数の型により数式入力が検証を通過できない問題を修正（[#7373](https://github.com/nocobase/nocobase/pull/7373)）@mytharcher
* **[ファイルマネージャー]** ファイルアップロードサイズ制限のヒントを削除（[#7391](https://github.com/nocobase/nocobase/pull/7391)）@mytharcher
* **[カレンダー]** カレンダーイベントアイテムのツールチップに「[object Object]」が表示される問題（[#7372](https://github.com/nocobase/nocobase/pull/7372)）@katherinehhh
* **[アクション：レコードインポート Pro]** インポート時の重複検出中に、関連フィールドへの割り当てを禁止 @aaaaaajie
* **[ワークフロー：カスタムアクションイベント]** 複数レコードでアクションのトリガーに成功後、選択した行をクリアする @mytharcher
* **[テンプレート印刷]** 複数行のデータにおけるラジオ選択フィールドの印刷問題を修正 @jiannx
* **[ファイルストレージ: S3 (Pro)]**
  * 問題のあるパラメータ`attachmentField`を非推奨に @mytharcher
  * IAM 認証方式を使用してファイルをアップロードできない問題を修正 @mytharcher
* **[ワークフロー：承認]**
  * 承認レコードで外部データソースのデータを読み込むと 404 エラーが発生する問題を修正 @mytharcher
  * 会签時にユーザーリストが空になる問題を修正 @mytharcher
* **[バックアップマネージャー]** 大ファイルのバックアップが実際に完了する前に「成功」と表示される問題を修正 @gchust
* **[マイグレーションマネージャー]** リストアエラーを解消するため、マイグレーションファイル作成時に、最新 pg\_dump で生成される`\restrict`および`\unrestrict`コマンドをスキップ @2013xile
