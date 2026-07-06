週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.1.19

*リリース日: 2026-07-03*

### 🐛 不具合修正

* **[cli]** 一部の RabbitMQ サービスでキュー名に `<span>:</span>` や `<span>@</span>` を使用できない場合、バージョンイベントの公開に失敗する問題を修正しました。 ([#9989](https://github.com/nocobase/nocobase/pull/9989)) by @cgyrock
* **[client-v2]**
  * v2 の Markdown レンダリングと編集で、iframe のサニタイズ処理に関する問題を修正しました。 ([#9986](https://github.com/nocobase/nocobase/pull/9986)) by @katherinehhh
  * ルートポップアップの新規作成フォームで、事前入力されたフィールド値が失われる問題を修正しました。たとえば Calendar V2 の開始日と終了日が該当します。 ([#9874](https://github.com/nocobase/nocobase/pull/9874)) by @jiannx
  * V2 テーブルのデータ範囲で URL クエリパラメータが存在しない場合、テーブルデータを取得できない問題を修正しました。 ([#9869](https://github.com/nocobase/nocobase/pull/9869)) by @jiannx
  * ctx.setFormValues で複数行テキストフィールドの値を設定できない問題を修正しました。 ([#9959](https://github.com/nocobase/nocobase/pull/9959)) by @gchust
* **[AIワーカー]**
  * アンダースコアを含むデータベース名の環境で、AI checkpoint のクリーンアップに失敗する問題を修正しました。 ([#9982](https://github.com/nocobase/nocobase/pull/9982)) by @cgyrock
  * AIワーカーのワークフローノードで、ループ内の前回のツール呼び出し後に後続ノードを正しく再開できない問題を修正しました。 ([#9980](https://github.com/nocobase/nocobase/pull/9980)) by @cgyrock
* **[ファイルマネージャー]** ファイルマネージャーの添付ファイル一覧 API を公開しないようにしました。この API にリクエストした場合は 404 が返されます。 ([#9978](https://github.com/nocobase/nocobase/pull/9978)) by @mytharcher
* **[ワークフロー]** ワークフロー実行記録で、ノード結果が読み込み中のまま表示され続ける場合がある問題を修正しました。 ([#9991](https://github.com/nocobase/nocobase/pull/9991)) by @mytharcher
* **[バックアップマネージャー]**
  * PostgreSQL と Kingbase のバックアップ復元コマンドで、パスまたはパラメータに空白や特殊文字が含まれる場合に正常に実行できない問題を修正しました。 ([#9946](https://github.com/nocobase/nocobase/pull/9946)) by @cgyrock
  * 新しく作成したバックアップファイルをクラウドストレージにアップロードできない問題を修正しました。 ([#9981](https://github.com/nocobase/nocobase/pull/9981)) by @gchust
* **[データ可視化]** チャートブロックでポップアップを閉じる際、不要なリフレッシュが発生する問題を修正しました。 ([#9970](https://github.com/nocobase/nocobase/pull/9970)) by @gchust
* **[UI テンプレート]** サブフォームで誤った表示フィールドのテンプレートメニューが表示される問題を修正しました。 ([#9960](https://github.com/nocobase/nocobase/pull/9960)) by @gchust
* **[モバイル版（非推奨）]** v1 デスクトップ版のレスポンシブレイアウトで、詳細表示とフィールド選択のポップアップ表示方法が正しくない問題を修正しました。 ([#9974](https://github.com/nocobase/nocobase/pull/9974)) by @zhangzhonghe
* **[バージョン管理]** 一部の RabbitMQ サービスでキュー名に `<span>:</span>` や `<span>@</span>` を使用できない場合、バージョン管理でバージョン作成に失敗する問題を修正しました。 by @cgyrock
* **[ワークフロー：承認]** 設定権限がない場合に承認詳細を開くと、エラーが発生する可能性がある問題を修正しました。 by @zhangzhonghe

### v2.1.18

*リリース日: 2026-07-02*

### 🚀 機能改善

* **[cli]** Nginx/Caddy のプロキシ設定を手動生成できるようにしました。これにより、Docker デプロイで Nginx を内蔵せずに実行できるようになり、プロキシと CDN に関するランタイム設定も統一されました。 ([#9943](https://github.com/nocobase/nocobase/pull/9943)) by @chenos
* **[undefined]** 外部ストレージにおける PDF プレビューのセキュリティ説明を調整しました。 ([#9901](https://github.com/nocobase/nocobase/pull/9901)) by @mytharcher
  参考ドキュメント：[ファイルプレビュー](https://github.com/nocobase/nocobase/blob/docs/file-preview-security/docs/docs/cn/file-manager/file-preview/index.md)
* **[utils]** `<span>SERVER_REQUEST_WHITELIST</span>` が未設定で、サーバーから外部へ送信されるリクエストの送信先に SSRF リスクがある場合、ログ警告を出力するようにしました。 ([#9966](https://github.com/nocobase/nocobase/pull/9966)) by @mytharcher
  参考ドキュメント：[環境変数](https://docs.nocobase.com/cn/get-started/installation/env), [グローバル環境変数](https://docs.nocobase.com/cn/api/app/env)
* **[AI: ナレッジベース]** ナレッジベースのドキュメントアップロードに、ZIP ファイル名のエンコーディングオプションを追加しました。非 UTF-8 エンコーディングで作成された ZIP ファイル内のファイル名が文字化けするのを防げるようになりました。 by @cgyrock

### 🐛 不具合修正

* **[client-v2]** ルート配下のサブページを更新した後、ページが空白になる、または余白が不自然になる問題を修正しました。 ([#9961](https://github.com/nocobase/nocobase/pull/9961)) by @zhangzhonghe
* **[ワークフロー]** 並行キュー処理時に、ワークフロースケジューラーが不要なデータベース再取得リトライを行わないようにしました。 ([#9953](https://github.com/nocobase/nocobase/pull/9953)) by @mytharcher
* **[操作：レコードエクスポート]** XLSX エクスポートで、テキスト系フィールドの値が数式として解釈される文字で始まる場合、Excel で開いた後に数式として実行される可能性がある問題を修正しました。 ([#9973](https://github.com/nocobase/nocobase/pull/9973)) by @mytharcher
* **[AIワーカー]** カスタム Base URL を空にした後、LLM プロバイダーがデフォルト Base URL にフォールバックできない問題を修正しました。 ([#9958](https://github.com/nocobase/nocobase/pull/9958)) by @cgyrock
* **[データソース：外部 NocoBase]** 外部 NocoBase データソースで、添付ファイルフィールドのアップロードや更新が正しく行えない問題を修正しました。 by @2013xile

### v2.1.17

*リリース日: 2026-07-01*

### 不具合修正

* **[flow-engine]** ユーザー切り替え後、ctx.auth.user の値が更新されない問題を修正しました。 ([#9964](https://github.com/nocobase/nocobase/pull/9964)) by @gchust
* **[モバイル版（非推奨）]** モバイルページと公開フォームが、モバイル端末でスクロールできない問題を修正しました。 ([#9898](https://github.com/nocobase/nocobase/pull/9898)) by @zhangzhonghe

### v2.1.15

*リリース日: 2026-06-30*

### 🐛 不具合修正

* **[undefined]** 中国語以外のバージョン管理ドキュメントで、Pro 版ラベルが表示されない問題を修正しました。 ([#9944](https://github.com/nocobase/nocobase/pull/9944)) by @cgyrock
* **[AIワーカー]** ワークフローの AIワーカータスクで、連続したツール呼び出しによってグラフ再帰制限に達した後、実行に失敗する問題を修正しました。 ([#9945](https://github.com/nocobase/nocobase/pull/9945)) by @cgyrock
* **[操作：カスタムリクエスト]** カスタムリクエストで、実行時オプションによって保存済みのリクエストターゲットが上書きされてしまう問題を修正しました。 ([#9904](https://github.com/nocobase/nocobase/pull/9904)) by @mytharcher
* **[データソース管理]** v2 のデータテーブルフィールド管理で、テンプレートで保護されたフィールドを削除できてしまう問題を修正しました。また、継承フィールドの表示、確認、上書きの挙動が v1 と一致しない問題も修正しました。 ([#9940](https://github.com/nocobase/nocobase/pull/9940)) by @katherinehhh
* **[マイグレーション管理]** MySQL の非 ASCII 文字を含む内容をマイグレーションする際、文字化けが発生する可能性がある問題を修正しました。 by @2013xile
* **[ワークフロー：承認]** 承認ノードで Original application content ブロックを追加する際にエラーが発生する問題を修正しました。 by @zhangzhonghe

### v2.1.14

*リリース日: 2026-06-29*

### 🎉 新機能

* **[AIワーカー]** AI サービスの大規模言語モデルプロバイダーとして、Mistral AI を追加しました。 ([#9925](https://github.com/nocobase/nocobase/pull/9925)) by @cgyrock

### 🚀 機能改善

* **[cli]** OAuth デバイス認可モードに対応しました。 ([#9922](https://github.com/nocobase/nocobase/pull/9922)) by @chenos

### 🐛 不具合修正

* **[client-v2]**
  * リレーションフィールドのドロップダウン選択で、選択済みタイトルが長すぎる場合に選択ボックスの表示領域を圧迫する問題を修正しました。長すぎるテキストは省略表示されるようになりました。 ([#9939](https://github.com/nocobase/nocobase/pull/9939)) by @katherinehhh
  * テーブルの日付時刻列で、ページ切り替えまたは更新後に、設定済みの時・分・秒の表示が失われる問題を修正しました。 ([#9935](https://github.com/nocobase/nocobase/pull/9935)) by @katherinehhh
* **[ユーザー]** 「ユーザーと権限」の新規ユーザーフォームから、デフォルトパスワードを削除しました。 ([#9915](https://github.com/nocobase/nocobase/pull/9915)) by @jiannx
* **[データソース：外部 NocoBase]** NocoBase 外部データソースで、接続設定にランタイムオブジェクトが含まれている場合に読み込みが失敗する問題を修正しました。 by @2013xile
* **[履歴]** レコード履歴を有効にした後、外部 NocoBase データソースの読み込みが失敗する問題を修正しました。 by @2013xile
* **[アプリケーションスーパーバイザー]** Client V2 のアプリケーション監視で、Applications タブの登録エラーを修正しました。 by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.2.0-beta.8

*リリース日: 2026-06-29*

### 🚀 機能改善

* **[cli]** OAuth デバイス認可モードに対応しました。 ([#9922](https://github.com/nocobase/nocobase/pull/9922)) by @chenos
* **[client-v2]** JS block でブロックカードを表示するかどうかを設定できるようにしました。 ([#9897](https://github.com/nocobase/nocobase/pull/9897)) by @gchust
* **[flow-engine]** RunJS がリソース API でデータを更新した後、ポップアップを閉じた際に関連データブロックが自動更新されるようにしました。 ([#9873](https://github.com/nocobase/nocobase/pull/9873)) by @gchust
* **[フォーム下書き]** フォーム下書きプラグインを client v2 に移行しました。 ([#9910](https://github.com/nocobase/nocobase/pull/9910)) by @gchust

### 🐛 不具合修正

* **[client-v2]**
  * モバイル埋め込みページで、操作にアイコンのみモードを有効にしているもののアイコンが設定されていない場合、リンク操作のテキストが表示されない問題を修正しました。 ([#9921](https://github.com/nocobase/nocobase/pull/9921)) by @katherinehhh
  * UI 設定モードでページを更新した際、「ページがありません」という案内が一瞬表示される問題を修正しました。 ([#9918](https://github.com/nocobase/nocobase/pull/9918)) by @katherinehhh
  * v2 フォームの送信成功後、遷移リンクから保存済みのレスポンス結果レコードを参照できない問題を修正しました。 ([#9907](https://github.com/nocobase/nocobase/pull/9907)) by @katherinehhh
  * モバイル埋め込みページで、操作にアイコンのみモードを有効にしているもののアイコンが設定されていない場合、リンク操作のテキストが表示されない問題を修正しました。 ([#9919](https://github.com/nocobase/nocobase/pull/9919)) by @katherinehhh
  * v2 のテーブル行操作ボタンによって行の高さが変わる問題を修正しました。 ([#9866](https://github.com/nocobase/nocobase/pull/9866)) by @jiannx
  * テーブルブロック設定で、ドラッグソート用フィールドが削除された後に実行エラーが発生する問題を修正しました。また、ドラッグソート用フィールド設定をクリアできるようにしました。 ([#9867](https://github.com/nocobase/nocobase/pull/9867)) by @jiannx
* **[flow-engine]**
  * モバイル端末のハーフモーダルで内容が長い場合に、スクロールできない問題を修正しました。 ([#9871](https://github.com/nocobase/nocobase/pull/9871)) by @zhangzhonghe
  * runjs で ctx.openView の一部パラメータが有効にならない問題を修正しました。 ([#9883](https://github.com/nocobase/nocobase/pull/9883)) by @gchust
* **[cli]** cli で pnpm と yarn による更新に対応しました。 ([#9912](https://github.com/nocobase/nocobase/pull/9912)) by @chenos
* **[client]** 一部の文言ミスを修正しました。 ([#9905](https://github.com/nocobase/nocobase/pull/9905)) by @Molunerfinn
* **[フロントエンドフローエンジン]** Flow Surfaces API でモバイルページを正しく作成できない問題を修正しました。 ([#9911](https://github.com/nocobase/nocobase/pull/9911)) by @gchust
* **[AIワーカー]**
  * AI データソースのカード一覧が、異なるビューポート幅に合わせて自動調整されない問題を修正しました。 ([#9924](https://github.com/nocobase/nocobase/pull/9924)) by @cgyrock
  * 異常なツール呼び出し履歴が後続の会話で繰り返し送信され、AIワーカーの返信が失敗する問題を修正しました。 ([#9900](https://github.com/nocobase/nocobase/pull/9900)) by @cgyrock
* **[バックアップマネージャー]** v2 バックアップマネージャーの設定ページで、ラベルが不自然に太字になり、他の設定ページとスタイルが一致しない問題を修正しました。 ([#9908](https://github.com/nocobase/nocobase/pull/9908)) by @katherinehhh
* **[ブロック：iframe]** 一般ユーザーが v2 の iframe HTML モードブロックを表示した際に 403 エラーになる問題を修正しました。 ([#9889](https://github.com/nocobase/nocobase/pull/9889)) by @jiannx
* **[データソース：外部 NocoBase]** NocoBase 外部データソースで、接続設定にランタイムオブジェクトが含まれている場合に読み込みが失敗する問題を修正しました。 by @2013xile
* **[AI: ナレッジベース]** バージョン管理とナレッジベースのドキュメント一覧で、内容が長い場合やビューポートの高さが不足している場合にレイアウトがはみ出す問題を修正しました。 by @cgyrock
* **[マイグレーション管理]** データベース同期テーブルのマイグレーションルール処理に関する問題を修正しました。 by @2013xile
* **[履歴]**
  * 一部のデータテーブルで、変更内容が履歴に保存されない場合がある問題を修正しました。 by @2013xile
  * レコード履歴を有効にした後、外部 NocoBase データソースの読み込みが失敗する問題を修正しました。 by @2013xile
* **[アプリケーションスーパーバイザー]** Client V2 のアプリケーション監視で、Applications タブの登録エラーを修正しました。 by @2013xile
* **[WeCom]** Client V2 で WeCom プラグインを有効にした後、ルーティングメニューを切り替える際にページが一時的に白画面になる問題を修正しました。 by @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.2.0-alpha.6

*リリース日: 2026-07-05*

### 🚀 機能改善

* **[cli]** CLI の setup 起動フローをリファクタリングし、`<span>nb app start</span>` を再利用するようにしました。API base path のリダイレクト動作を統一し、共有プロキシのデフォルト設定を env に永続化しました。また、Docker のプロキシポートが変更された場合に、コンテナを自動的に再構築するようにしました。 ([#9997](https://github.com/nocobase/nocobase/pull/9997)) by @chenos

### v2.2.0-alpha.5

*リリース日: 2026-07-04*

### 🎉 新機能

* **[client-v2]** V2 の操作パネルと左上のアプリ切り替え入口に、設定可能なアプリ入口とワークスペース入口を追加しました。 ([#9893](https://github.com/nocobase/nocobase/pull/9893)) by @katherinehhh
* **[ワークスペース管理]** V2 の操作パネルとアプリ切り替え入口に、設定可能なアプリ入口とワークスペース入口を追加しました。 by @katherinehhh

### 🚀 機能改善

* **[cli]** Docker CLI のインストール手順を改善しました。デフォルトの NocoBase イメージリポジトリとバリアントを設定できるようにし、プロキシと `<span>no-nginx</span>` イメージのポート互換性を修正しました。また、Docker Nginx/Caddy のインストールドキュメントも追加しました。 ([#9972](https://github.com/nocobase/nocobase/pull/9972)) by @chenos
* **[undefined]** 外部ストレージにおける PDF プレビューのセキュリティ説明を調整しました。 ([#9901](https://github.com/nocobase/nocobase/pull/9901)) by @mytharcher
  参考ドキュメント：[ファイルプレビュー](https://github.com/nocobase/nocobase/blob/docs/file-preview-security/docs/docs/cn/file-manager/file-preview/index.md)
* **[utils]** `<span>SERVER_REQUEST_WHITELIST</span>` が未設定で、サーバーから外部へ送信されるリクエストの送信先に SSRF リスクがある場合、ログ警告を出力するようにしました。 ([#9966](https://github.com/nocobase/nocobase/pull/9966)) by @mytharcher
  参考ドキュメント：[環境変数](https://docs.nocobase.com/cn/get-started/installation/env), [グローバル環境変数](https://docs.nocobase.com/cn/api/app/env)
* **[AIワーカー]**
  * v2 画面から、廃止済みの AIワーカー Datasource 設定エントリとコンテキスト選択エントリを削除しました。 ([#9988](https://github.com/nocobase/nocobase/pull/9988)) by @cgyrock
  * AIワーカープラグインを client-v2 に移行しました。 ([#9794](https://github.com/nocobase/nocobase/pull/9794)) by @cgyrock
* **[データソース管理]** V2 のフィールド設定で、外部データソースがサポートしていないフィールドを表示するようにしました。また、バックアップ復元フォームのラベルスタイルを統一しました。 ([#9983](https://github.com/nocobase/nocobase/pull/9983)) by @katherinehhh
* **[ユーザー]** ユーザープラグインの client-v2 テストカバレッジを強化しました。 ([#9975](https://github.com/nocobase/nocobase/pull/9975)) by @jiannx
* **[AI: ナレッジベース]**
  * ナレッジベースのドキュメントアップロードに、ZIP ファイル名のエンコーディングオプションを追加しました。非 UTF-8 エンコーディングで作成された ZIP ファイル内のファイル名が文字化けするのを防げるようになりました。 by @cgyrock
  * AI ナレッジベースの設定ページを v2 クライアントに移行し、ナレッジベースページとベクトルストレージページのレイアウトおよび読み込みに関する問題を修正しました。 by @cgyrock
* **[メール管理]** 部門別のメール設定表示を、メールの共通設定ページへ移動しました。 by @jiannx
* **[アプリケーションスーパーバイザー]** V2 の独立したアプリ入口ブロックを非表示にしました。内部で利用可能なアプリ設定ページは引き続き残しています。 by @katherinehhh

### 🐛 不具合修正

* **[cli]** 一部の RabbitMQ サービスでキュー名に `<span>:</span>` や `<span>@</span>` を使用できない場合、バージョンイベントの公開に失敗する問題を修正しました。 ([#9989](https://github.com/nocobase/nocobase/pull/9989)) by @cgyrock
* **[client-v2]**
  * v2 の Markdown レンダリングと編集で、iframe のサニタイズ処理に関する問題を修正しました。 ([#9986](https://github.com/nocobase/nocobase/pull/9986)) by @katherinehhh
  * V2 テーブルのデータ範囲で URL クエリパラメータが存在しない場合、テーブルデータを取得できない問題を修正しました。 ([#9869](https://github.com/nocobase/nocobase/pull/9869)) by @jiannx
  * V2 の空の Group メニュー項目を開いた際に 404 が表示される問題を修正しました。 ([#9896](https://github.com/nocobase/nocobase/pull/9896)) by @zhangzhonghe
  * ctx.setFormValues で複数行テキストフィールドの値を設定できない問題を修正しました。 ([#9959](https://github.com/nocobase/nocobase/pull/9959)) by @gchust
  * ルートポップアップの新規作成フォームで、事前入力されたフィールド値が失われる問題を修正しました。たとえば Calendar V2 の開始日と終了日が該当します。 ([#9874](https://github.com/nocobase/nocobase/pull/9874)) by @jiannx
  * ルート配下のサブページを更新した後、ページが空白になる、または余白が不自然になる問題を修正しました。 ([#9961](https://github.com/nocobase/nocobase/pull/9961)) by @zhangzhonghe
* **[操作：レコードエクスポート]**
  * v2 のエクスポート可能フィールド選択でリレーションフィールドを選択した後、ドラッグするとページがクラッシュする問題を修正しました。 ([#9995](https://github.com/nocobase/nocobase/pull/9995)) by @katherinehhh
  * XLSX エクスポートで、テキスト系フィールドの値が数式として解釈される文字で始まる場合、Excel で開いた後に数式として実行される可能性がある問題を修正しました。 ([#9973](https://github.com/nocobase/nocobase/pull/9973)) by @mytharcher
* **[ワークフロー]**
  * ワークフロー実行記録で、ノード結果が読み込み中のまま表示され続ける場合がある問題を修正しました。 ([#9991](https://github.com/nocobase/nocobase/pull/9991)) by @mytharcher
  * 並行キュー処理時に、ワークフロースケジューラーが不要なデータベース再取得リトライを行わないようにしました。 ([#9953](https://github.com/nocobase/nocobase/pull/9953)) by @mytharcher
* **[バックアップマネージャー]**
  * 新しく作成したバックアップファイルをクラウドストレージにアップロードできない問題を修正しました。 ([#9981](https://github.com/nocobase/nocobase/pull/9981)) by @gchust
  * PostgreSQL と Kingbase のバックアップ復元コマンドで、パスまたはパラメータに空白や特殊文字が含まれる場合に正常に実行できない問題を修正しました。 ([#9946](https://github.com/nocobase/nocobase/pull/9946)) by @cgyrock
* **[AIワーカー]**
  * AIワーカーのワークフローノードで、ループ内の前回のツール呼び出し後に後続ノードを正しく再開できない問題を修正しました。 ([#9980](https://github.com/nocobase/nocobase/pull/9980)) by @cgyrock
  * アンダースコアを含むデータベース名の環境で、AI checkpoint のクリーンアップに失敗する問題を修正しました。 ([#9982](https://github.com/nocobase/nocobase/pull/9982)) by @cgyrock
* **[UI テンプレート]** サブフォームで誤った表示フィールドのテンプレートメニューが表示される問題を修正しました。 ([#9960](https://github.com/nocobase/nocobase/pull/9960)) by @gchust
* **[ファイルマネージャー]** ファイルマネージャーの添付ファイル一覧 API を公開しないようにしました。この API にリクエストした場合は 404 が返されます。 ([#9978](https://github.com/nocobase/nocobase/pull/9978)) by @mytharcher
* **[ブロック：コメント]** 新しいコメントブロックのデフォルト操作順序を調整しました。 ([#9976](https://github.com/nocobase/nocobase/pull/9976)) by @jiannx
* **[データ可視化]** チャートブロックでポップアップを閉じる際、不要なリフレッシュが発生する問題を修正しました。 ([#9970](https://github.com/nocobase/nocobase/pull/9970)) by @gchust
* **[モバイル版（非推奨）]** v1 デスクトップ版のレスポンシブレイアウトで、詳細表示とフィールド選択のポップアップ表示方法が正しくない問題を修正しました。 ([#9974](https://github.com/nocobase/nocobase/pull/9974)) by @zhangzhonghe
* **[バージョン管理]** 一部の RabbitMQ サービスでキュー名に `<span>:</span>` や `<span>@</span>` を使用できない場合、バージョン管理でバージョン作成に失敗する問題を修正しました。 by @cgyrock
* **[データソース：外部 NocoBase]** 外部 NocoBase データソースで、添付ファイルフィールドのアップロードや更新が正しく行えない問題を修正しました。 by @2013xile
* **[ワークフロー：承認]** 設定権限がない場合に承認詳細を開くと、エラーが発生する可能性がある問題を修正しました。 by @zhangzhonghe

### v2.2.0-alpha.4

*リリース日: 2026-07-01*

### 🎉 新機能

* **[ブロック：コメント]**
  * コメントブロックの設定を改善しました。データ範囲、デフォルトの並び順、ドロップダウンでのページサイズ選択、最後のページへ移動するオプション、スカラー型フィールドに基づく所属フィールドの設定に対応しました。 ([#9954](https://github.com/nocobase/nocobase/pull/9954)) by @jiannx
  * コメントブロックを追加しました。 ([#9916](https://github.com/nocobase/nocobase/pull/9916)) by @jiannx
* **[AIワーカー]** AI サービスの大規模言語モデルプロバイダーとして、Mistral AI を追加しました。 ([#9925](https://github.com/nocobase/nocobase/pull/9925)) by @cgyrock
* **[履歴]** レコード履歴プラグインで client v2 に対応しました。 by @jiannx

### 🚀 機能改善

* **[cli]** Nginx/Caddy のプロキシ設定を手動生成できるようにしました。これにより、Docker デプロイで Nginx を内蔵せずに実行できるようになり、プロキシと CDN に関するランタイム設定も統一されました。 ([#9943](https://github.com/nocobase/nocobase/pull/9943)) by @chenos
* **[ワークフロー：JavaScript ノード]** v2 ワークフローのリクエストノードとメールノードの設定フィールドを調整し、レイアウトと添付ファイル変数の選択動作を旧版と一致させました。 ([#9952](https://github.com/nocobase/nocobase/pull/9952)) by @jiannx
* **[UI レイアウト]** v2 モバイルのタブバーを改善しました。タブが多い場合は横スクロールできるようになり、アイコンの重なりを防げるようになりました。 ([#9949](https://github.com/nocobase/nocobase/pull/9949)) by @katherinehhh
* **[ワークフロー：集計クエリノード]** v2 ワークフローの更新ノードと集計クエリノードにおけるフィールド選択ロジックを改善し、集計クエリノードで関連データテーブルの選択を切り替える際の異常も修正しました。 ([#9938](https://github.com/nocobase/nocobase/pull/9938)) by @katherinehhh
* **[ブロック：コメント]** 新しいコメントブロックプラグインを NocoBase のプリセットに追加し、旧コメントプラグインを非推奨としてマークしました。 ([#9936](https://github.com/nocobase/nocobase/pull/9936)) by @jiannx
* **[ログ]** client v2 ランタイムにログ設定ページを追加しました。 ([#9933](https://github.com/nocobase/nocobase/pull/9933)) by @jiannx
* **[HTTP リクエスト暗号化]** HTTP リクエスト暗号化プラグインで v2 クライアントに対応しました。v2 クライアントでも、クエリパラメータが引き続き暗号化されるようにしました。 by @jiannx
* **[ワークフロー：データベーストランザクションノード]** v2 ワークフローのデータベーストランザクションノードのレイアウトを改善し、ブランチラベルとコミットマーカーの間隔をより適切にしました。 by @katherinehhh

### 🐛 不具合修正

* **[flow-engine]** ユーザー切り替え後、ctx.auth.user の値が更新されない問題を修正しました。 ([#9964](https://github.com/nocobase/nocobase/pull/9964)) by @gchust
* **[client-v2]**
  * ワークフローを手動実行した後に新しいバージョンが自動作成される場合の遷移問題を修正しました。旧版と新版の画面のどちらでも、正しいワークフローページが開くようになりました。 ([#9955](https://github.com/nocobase/nocobase/pull/9955)) by @Molunerfinn
  * テーブルの日付時刻列で、ページ切り替えまたは更新後に、設定済みの時・分・秒の表示が失われる問題を修正しました。 ([#9935](https://github.com/nocobase/nocobase/pull/9935)) by @katherinehhh
  * リレーションフィールドのドロップダウン選択で、選択済みタイトルが長すぎる場合に選択ボックスの表示領域を圧迫する問題を修正しました。長すぎるテキストは省略表示されるようになりました。 ([#9939](https://github.com/nocobase/nocobase/pull/9939)) by @katherinehhh
  * V2 管理画面で、利用可能なサブメニューページがないグループに入ると 404 が表示される問題を修正しました。 ([#9932](https://github.com/nocobase/nocobase/pull/9932)) by @katherinehhh
* **[undefined]** 中国語以外のバージョン管理ドキュメントで、Pro 版ラベルが表示されない問題を修正しました。 ([#9944](https://github.com/nocobase/nocobase/pull/9944)) by @cgyrock
* **[AIワーカー]**
  * カスタム Base URL を空にした後、LLM プロバイダーがデフォルト Base URL にフォールバックできない問題を修正しました。 ([#9958](https://github.com/nocobase/nocobase/pull/9958)) by @cgyrock
  * ワークフローの AIワーカータスクで、連続したツール呼び出しによってグラフの再帰制限に達した後、実行に失敗する問題を修正しました。 ([#9945](https://github.com/nocobase/nocobase/pull/9945)) by @cgyrock
* **[操作：カスタムリクエスト]** カスタムリクエストで、実行時オプションによって保存済みのリクエストターゲットが上書きされてしまう問題を修正しました。 ([#9904](https://github.com/nocobase/nocobase/pull/9904)) by @mytharcher
* **[モバイル版（非推奨）]** モバイルページと公開フォームが、モバイル端末でスクロールできない問題を修正しました。 ([#9898](https://github.com/nocobase/nocobase/pull/9898)) by @zhangzhonghe
* **[通知管理]** CC 設定で誤ったワークフロー変数が表示される問題を修正しました。 ([#9937](https://github.com/nocobase/nocobase/pull/9937)) by @zhangzhonghe
* **[ワークフロー]**
  * workflow キャンバスで、bundle をまたぐ場合に Context が一致しない問題を修正しました。これにより、旧版ワークフローページ内のブランチと一部の変数選択が正常に動作するようになりました。 ([#9951](https://github.com/nocobase/nocobase/pull/9951)) by @Molunerfinn
  * client v2 への移行に伴う一部の問題を修正しました。 ([#9929](https://github.com/nocobase/nocobase/pull/9929)) by @mytharcher
  * v2 ワークフローでサイト内通知の内容を設定できない問題を修正しました。 ([#9885](https://github.com/nocobase/nocobase/pull/9885)) by @zhangzhonghe
* **[データソース管理]** v2 のデータテーブルフィールド管理で、テンプレートで保護されたフィールドを削除できてしまう問題を修正しました。また、継承フィールドの表示、確認、上書きの挙動が v1 と一致しない問題も修正しました。 ([#9940](https://github.com/nocobase/nocobase/pull/9940)) by @katherinehhh
* **[ユーザー認証]** v2 サブアプリで、SSO ログイン後の遷移先アドレスが誤っている問題を修正しました。 ([#9927](https://github.com/nocobase/nocobase/pull/9927)) by @2013xile
* **[ユーザー]** 「ユーザーと権限」の新規ユーザーフォームから、デフォルトパスワードを削除しました。 ([#9915](https://github.com/nocobase/nocobase/pull/9915)) by @jiannx
* **[フロントエンドフローエンジン]** Flow Surfaces API でモバイルページを正しく作成できない問題を修正しました。 ([#9911](https://github.com/nocobase/nocobase/pull/9911)) by @gchust
* **[アプリケーションシングルサインオン]** v2 サブアプリで、App SSO ログイン後の遷移先アドレスが誤っている問題を修正しました。 by @2013xile
* **[AI: ナレッジベース]** バージョン管理とナレッジベースのドキュメント一覧で、内容が長い場合やビューポートの高さが不足している場合にレイアウトがはみ出す問題を修正しました。 by @cgyrock
* **[データソース：外部 NocoBase]** NocoBase 外部データソースで、接続設定にランタイムオブジェクトが含まれている場合に読み込みが失敗する問題を修正しました。 by @2013xile
* **[マイグレーション管理]** MySQL の非 ASCII 文字を含む内容をマイグレーションする際、文字化けが発生する可能性がある問題を修正しました。 by @2013xile
* **[履歴]** レコード履歴を有効にした後、外部 NocoBase データソースの読み込みが失敗する問題を修正しました。 by @2013xile
* **[ワークフロー：承認]**
  * CC ノード設定を開く際にエラーが発生する問題を修正しました。 by @zhangzhonghe
  * 承認ノードで Original application content ブロックを追加する際にエラーが発生する問題を修正しました。 by @zhangzhonghe
  * 承認データテーブルがブロックデータソース一覧に表示される問題を修正しました。 by @zhangzhonghe
  * client v2 への移行によって発生した問題を修正しました。 by @mytharcher
* **[アプリケーションスーパーバイザー]**
  * サブアプリのアクセスリンクで v2 パスが失われる問題を修正しました。 by @2013xile
  * Client V2 のアプリケーション監視で、Applications タブの登録エラーを修正しました。 by @2013xile
