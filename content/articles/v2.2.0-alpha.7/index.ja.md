### 🎉 新機能

* **[AIワーカー]** 使用状況を集計しやすくするため、構造化された AI 使用記録を追加しました。 ([#10004](https://github.com/nocobase/nocobase/pull/10004)) by @2013xile
* **[AIワーカー]** LLM プロバイダーとして OrcaRouter を追加しました。([#10003](https://github.com/nocobase/nocobase/pull/10003)) by @jinhaosong-source
* **[ワークフロー：承認]** v2 ページに、承認開始ブロックと ToDo ブロックを追加しました。 by @zhangzhonghe

### 🚀 機能改善

* **[client-v2]**
  * Markdown Vditor を、統一されたプラグイン型 Markdown エンジンとしてリファクタリングしました。既存の Markdown ブロックと Vditor フィールドプラグイン向けには、互換ブリッジを残しています。 ([#9998](https://github.com/nocobase/nocobase/pull/9998)) by @katherinehhh
  * Markdown Vditor を、統一されたプラグイン型 Markdown エンジンとしてリファクタリングしました。既存の Markdown ブロックと Vditor フィールドプラグイン向けには、互換ブリッジを残しています。 ([#9998](https://github.com/nocobase/nocobase/pull/9998)) by @katherinehhh
* **[AIワーカー]** AIワーカーのウェブ検索を改善しました。不要なモデル推論を減らし、各 Provider の思考制御パラメータをより適切に利用するようにしました。 ([#9996](https://github.com/nocobase/nocobase/pull/9996)) by @cgyrock
* **[データ可視化]** チャートイベントスクリプトを改善し、カスタムイベントハンドラーを安全にクリーンアップできるようにしました。 ([#10034](https://github.com/nocobase/nocobase/pull/10034)) by @2013xile
* **[ワークフロー]** 条件ノードから、基本演算エンジンの算術演算子を削除しました。 ([#10019](https://github.com/nocobase/nocobase/pull/10019)) by @mytharcher
* **[データソース管理]** v2 メインデータソースの新規データテーブル作成メニューで、廃止済みのデータテーブルテンプレートを非表示にしました。 ([#10009](https://github.com/nocobase/nocobase/pull/10009)) by @katherinehhh
* **[ブロック：コメント]** コメント送信ボタンの設定を改善し、関連するコメントとユーザーフォームの送信問題を修正しました。 ([#10002](https://github.com/nocobase/nocobase/pull/10002)) by @jiannx

### 🐛 不具合修正

* **[client-v2]**
  * `<span>__webpack_public_path__</span>` が末尾の `<span>/</span>` なしで注入された場合に、クライアントランタイムの静的リソースベースパスの正規化が一致しない問題を修正しました。また、この境界ケースのテストカバレッジも追加しました。 ([#10040](https://github.com/nocobase/nocobase/pull/10040)) by @chenos
  * v2 の QR コードスキャン入力で、Safari から QR コード画像を選択してアップロードした場合に認識に失敗する問題を修正しました。 ([#10011](https://github.com/nocobase/nocobase/pull/10011)) by @katherinehhh
  * フィルターフォームのリレーションフィールドで、デフォルト演算子の設定が表示される問題を修正しました。 ([#10025](https://github.com/nocobase/nocobase/pull/10025)) by @zhangzhonghe
  * モバイル端末で、テーブルのクイック編集とフィールド選択モーダルの下部余白に関する問題を修正しました。 ([#10020](https://github.com/nocobase/nocobase/pull/10020)) by @zhangzhonghe
  * ページ切り替え時に、クイック編集でドロップダウンの選択肢を切り替えられない場合がある問題を修正しました。 ([#10007](https://github.com/nocobase/nocobase/pull/10007)) by @gchust
  * 本番環境における Vditor の静的リソース読み込みパスを修正しました。実際に有効な webpack public path に基づいて、プラグインの CDN パスを解決するように変更しました。 ([#10008](https://github.com/nocobase/nocobase/pull/10008)) by @chenos
  * 実行時編集モーダルでレコードを切り替えた際、連動フィールドの状態が残ってしまう問題を修正しました。 ([#10010](https://github.com/nocobase/nocobase/pull/10010)) by @katherinehhh
  * フィルターフォームのリレーションフィールドにデフォルト値を設定した後、値をクリアできない問題を修正しました。 ([#10022](https://github.com/nocobase/nocobase/pull/10022)) by @gchust
  * v2 ワークフローで、実行済みバージョンが読み取り専用状態でもフィールド代入を変更できてしまう問題を修正しました。 ([#10014](https://github.com/nocobase/nocobase/pull/10014)) by @katherinehhh
* **[cli]** NocoBase CLI におけるイメージリポジトリのフォールバック、内蔵データベースイメージ、環境情報の表示、プロンプトのデフォルト値初期化に関する問題を修正しました。 ([#10027](https://github.com/nocobase/nocobase/pull/10027)) by @chenos
* **[flow-engine]** 設定モードを切り替える際に、ポップアップ内の設定が一致しない問題を修正しました。 ([#10005](https://github.com/nocobase/nocobase/pull/10005)) by @gchust
* **[データテーブル：ツリー]** ツリーパスコレクションの作成時に、内部フィールドモデルのメタデータがコレクション設定へ渡される問題を修正しました。 ([#10035](https://github.com/nocobase/nocobase/pull/10035)) by @cgyrock
* **[公開フォーム]** UI Editor を閉じた後も、公開フォームを設定できてしまう問題を修正しました。 ([#10036](https://github.com/nocobase/nocobase/pull/10036)) by @zhangzhonghe
* **[フロントエンドフローエンジン]** ローカル AI agent 設定を使用した連動ルールで、レンダリングエラーが発生する可能性がある問題を修正しました。 ([#10023](https://github.com/nocobase/nocobase/pull/10023)) by @gchust
* **[ユーザー認証]** パスワードリセットリンクを開いた後、ログインページに遷移してしまう問題を修正しました。 ([#10006](https://github.com/nocobase/nocobase/pull/10006)) by @zhangzhonghe
* **[データ可視化]** チャートの再レンダリング後、クリック操作が効かなくなる場合がある問題を修正しました。 ([#10031](https://github.com/nocobase/nocobase/pull/10031)) by @2013xile
* **[ワークフロー]**
  * ワークフロー v2 の条件オペランドが初期状態では単一行表示を保ち、選択した変数パスが長すぎる場合には正しく折り返されるように修正しました。 ([#10033](https://github.com/nocobase/nocobase/pull/10033)) by @Molunerfinn
  * ワークフロー結果の文言が翻訳されていない問題と、CC 設定モーダルが広すぎる問題を修正しました。 ([#9977](https://github.com/nocobase/nocobase/pull/9977)) by @zhangzhonghe
  * workflow v2 タスクセンターの表示と詳細読み込みに関する問題を修正しました。 ([#10001](https://github.com/nocobase/nocobase/pull/10001)) by @zhangzhonghe
* **[データソース管理]** V2 データテーブルの新規フィールド追加メニューで、旧 Attachment フィールドのインターフェースを非表示にしました。 ([#10018](https://github.com/nocobase/nocobase/pull/10018)) by @katherinehhh
* **[ファイルマネージャー]**
  * ファイルアップロード時に、ストレージの MIME type ルールで明示的に許可されていないアクティブコンテンツのファイル名を拒否するようにしました。 ([#10021](https://github.com/nocobase/nocobase/pull/10021)) by @mytharcher
    参考ドキュメント：[ローカルストレージ](https://docs.nocobase.com/cn/file-manager/storage/local), [セキュリティガイド](https://docs.nocobase.com/cn/security/guide)
  * ファイルアップロード時に、ストレージの MIME type ルールで明示的に許可されていないアクティブコンテンツのファイル名を拒否するようにしました。 ([#9994](https://github.com/nocobase/nocobase/pull/9994)) by @mytharcher
    参考ドキュメント：[ローカルストレージ](docs/docs/cn/file-manager/storage/local.md), [セキュリティガイド](docs/docs/cn/security/guide.md)
  * v2 データテーブル管理で Attachment フィールドのインターフェースが欠落している問題を修正しました。また、公開フォームのファイルリレーションフィールドで画像をアップロードする際の事前チェック時の権限問題も修正しました。 ([#10012](https://github.com/nocobase/nocobase/pull/10012)) by @katherinehhh
* **[NocoBase 埋め込み]** NocoBase ページを埋め込む際のトークン汚染問題を修正しました。 ([#9948](https://github.com/nocobase/nocobase/pull/9948)) by @gchust
* **[AIワーカー]** V2 公開フォームページで、不要なログイン状態リクエストが発生する問題を修正しました。 ([#10013](https://github.com/nocobase/nocobase/pull/10013)) by @zhangzhonghe
* **[AI: ナレッジベース]** AI ナレッジベースワークフローのドキュメント作成ノードに上書きオプションを追加し、同じ識別子を持つ既存ドキュメントを置き換えられるようにしました。 by @cgyrock
* **[データソース：外部 MariaDB]** MySQL、MSSQL、MariaDB の外部データソース設定で、Add all collections を切り替えられない問題を修正しました。 by @katherinehhh
* **[plugin-service-platform]** サービスプラットフォームのプラグインダウンロード API を無効化しました。 by @jiannx
* **[ワークフロー：サブフロー]** サブフローノード設定のセレクトボックスで、ワークフロータイトルによる検索が有効にならない問題を修正しました。 by @mytharcher
* **[マイグレーション管理]** マイグレーション後、アプリが修復画面で止まる可能性がある問題を修正しました。 by @2013xile
* **[ワークフロー：承認]**
  * 承認者の並び順と旧版設定入口の表示問題を修正しました。 by @zhangzhonghe
  * 承認ワークフロー条件を設定する際にエラーが発生する問題を修正しました。 by @zhangzhonghe
  * v2 承認タスク詳細モーダルで、処理済み承認情報が欠落している問題を修正しました。 by @zhangzhonghe
  * workflow v2 タスクセンターの承認タスクにおけるフォームと操作の問題を修正しました。 by @zhangzhonghe
* **[アプリケーションスーパーバイザー]** 独立した JWT 鍵を有効にした後も、サブアプリが主アプリのトークンを受け入れてしまう問題を修正しました。 by @2013xile
