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
