週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.1.23

*リリース日: 2026-07-10*

### 🐛 不具合修正

* **[client-v2]**
  * v2 の QR コードスキャン入力で、Safari から QR コード画像を選択してアップロードした場合に認識に失敗する問題を修正しました。 ([#10011](https://github.com/nocobase/nocobase/pull/10011)) by @katherinehhh
  * `<span>__webpack_public_path__</span>` が末尾の `<span>/</span>` なしで注入された場合に、クライアントランタイムの静的リソースベースパスの正規化が一致しない問題を修正しました。また、この境界ケースのテストカバレッジも追加しました。 ([#10040](https://github.com/nocobase/nocobase/pull/10040)) by @chenos
  * テーブルブロックのボタン連動ルールで、ページ切り替え後に状態が汚染される可能性がある問題を修正しました。 ([#10038](https://github.com/nocobase/nocobase/pull/10038)) by @gchust
* **[app]** `<span>CDN_BASE_URL</span>` が空の場合に、非同期リソースが誤って外部スクリプトアドレスを使用する問題を修正しました。 ([#10052](https://github.com/nocobase/nocobase/pull/10052)) by @Molunerfinn
* **[flow-engine]** JS block 内で ctx.api を上書きすると、maximum call stack size exceeded が発生する問題を修正しました。 ([#10051](https://github.com/nocobase/nocobase/pull/10051)) by @gchust
* **[ワークフロー：遅延ノード]** API 経由で遅延ノードに 1 未満の値を設定できないようにしました。 ([#10057](https://github.com/nocobase/nocobase/pull/10057)) by @mytharcher
* **[フォーム下書き]** ページを連続して更新した後、フォーム下書きが失われる問題を修正しました。 ([#10059](https://github.com/nocobase/nocobase/pull/10059)) by @gchust
* **[データソース：メインデータベース]** 無効な多対多リレーションフィールド設定を保存できないようにしました。 ([#10044](https://github.com/nocobase/nocobase/pull/10044)) by @2013xile
* **[データテーブル：ツリー]** ツリーパスコレクションの作成時に、内部フィールドモデルのメタデータがコレクション設定へ渡される問題を修正しました。 ([#10035](https://github.com/nocobase/nocobase/pull/10035)) by @cgyrock
* **[ワークフロー]** 対象ワークフローの実行記録が作成される前にサブフローが失敗した場合、親ノードが待機し続ける可能性がある問題を修正しました。 ([#10043](https://github.com/nocobase/nocobase/pull/10043)) by @mytharcher
* **[フロントエンドフローエンジン]**
  * ローカル AI agent 設定を使用した連動ルールで、レンダリングエラーが発生する可能性がある問題を修正しました。 ([#10023](https://github.com/nocobase/nocobase/pull/10023)) by @gchust
  * ポップアップ内のレコード変数を、外部 NocoBase データソースから解析できない問題を修正しました。 ([#10048](https://github.com/nocobase/nocobase/pull/10048)) by @gchust
* **[テンプレート印刷]** テンプレート印刷の権限チェックを修正しました。現在のロールが閲覧できないフィールドや、データ範囲外のレコードがレンダリングされないようにしました。 by @jiannx
* **[ワークフロー：承認]**
  * 文字列型の承認者 ID を追加して使用できるようにしました。 by @mytharcher
  * 印刷プレビューで、承認フォームのフィールドが単一列表示になってしまう問題を修正しました。 by @zhangzhonghe
  * 承認サブテーブルを無効化した後も、内部フィールドが編集できてしまう問題を修正しました。 by @zhangzhonghe

### v2.1.22

*リリース日: 2026-07-09*

### 🐛 不具合修正

* **[client-v2]**
  * フィルターフォームのリレーションフィールドで、デフォルト演算子の設定が表示される問題を修正しました。 ([#10025](https://github.com/nocobase/nocobase/pull/10025)) by @zhangzhonghe
  * モバイル端末で、テーブルのクイック編集とフィールド選択モーダルの下部余白に関する問題を修正しました。 ([#10020](https://github.com/nocobase/nocobase/pull/10020)) by @zhangzhonghe
* **[cli]** NocoBase CLI におけるイメージリポジトリのフォールバック、内蔵データベースイメージ、環境情報の表示、プロンプトのデフォルト値初期化に関する問題を修正しました。 ([#10027](https://github.com/nocobase/nocobase/pull/10027)) by @chenos
* **[ユーザー認証]** パスワードリセットリンクを開いた後、ログインページに遷移してしまう問題を修正しました。 ([#10006](https://github.com/nocobase/nocobase/pull/10006)) by @zhangzhonghe

### v2.1.21

*リリース日: 2026-07-08*

### 🎉 新機能

* **[AIワーカー]** LLM プロバイダーとして OrcaRouter を追加しました。 ([#10003](https://github.com/nocobase/nocobase/pull/10003)) by @jinhaosong-source

### 🚀 機能改善

* **[ワークフロー]** 条件ノードから算術演算子を削除しました。 ([#10019](https://github.com/nocobase/nocobase/pull/10019)) by @mytharcher

### 🐛 不具合修正

* **[client-v2]**
  * 実行時編集モーダルでレコードを切り替えた際、連動フィールドの状態が残ってしまう問題を修正しました。 ([#10010](https://github.com/nocobase/nocobase/pull/10010)) by @katherinehhh
  * フィルターフォームのリレーションフィールドに設定したデフォルト値をクリアできない問題を修正しました。 ([#10022](https://github.com/nocobase/nocobase/pull/10022)) by @gchust
* **[ファイルマネージャー]**
  * ファイルアップロード時に、設定されたストレージの MIME type ルールで明示的に許可されていない限り、アクティブコンテンツとして扱われるファイル名を拒否するようにしました。 ([#10021](https://github.com/nocobase/nocobase/pull/10021)) by @mytharcher
    参考：[ローカルストレージ](https://docs.nocobase.com/file-manager/storage/local), [セキュリティガイド](https://docs.nocobase.com/security/guide)
  * v2 データテーブル管理で Attachment フィールドのインターフェースが欠落している問題を修正しました。また、公開フォームのファイルリレーションフィールドで画像をアップロードする際のプリフライトチェックも修正しました。 ([#10012](https://github.com/nocobase/nocobase/pull/10012)) by @katherinehhh
* **[データソースマネージャー]** V2 データテーブルのフィールド追加メニューから、旧 Attachment フィールドのインターフェースを非表示にしました。 ([#10018](https://github.com/nocobase/nocobase/pull/10018)) by @katherinehhh
* **[データ可視化]** チャートの再レンダリング後、クリック操作が効かなくなる場合がある問題を修正しました。 ([#10031](https://github.com/nocobase/nocobase/pull/10031)) by @2013xile
* **[マイグレーションマネージャー]** マイグレーション後、アプリが修復画面で止まる可能性がある問題を修正しました。 by @2013xile
* **[アプリケーションスーパーバイザー]** アプリの JWT シークレット分離を修正しました。独立したシークレットを有効にした後、サブアプリが主アプリのトークンを受け入れないようになりました。 by @2013xile

### v2.1.20

*リリース日: 2026-07-07*

### 🚀 機能改善

* **[cli]**
  * Docker CLI のインストール手順を改善しました。デフォルトの NocoBase イメージリポジトリとバリアントを設定できるようにし、プロキシと `<span>no-nginx</span>` イメージのポート互換性を修正しました。また、Docker Nginx/Caddy のインストールドキュメントも追加しました。 ([#9972](https://github.com/nocobase/nocobase/pull/9972)) by @chenos
  * CLI の setup 起動フローをリファクタリングし、`<span>nb app start</span>` を再利用するようにしました。API base path のリダイレクト動作を統一し、共有プロキシのデフォルト設定を env に永続化しました。また、Docker のプロキシポートが変更された場合に、コンテナを自動的に再構築するようにしました。 ([#9997](https://github.com/nocobase/nocobase/pull/9997)) by @chenos

### 🐛 不具合修正

* **[client-v2]**
  * 本番環境における Vditor の静的リソース読み込みパスを修正しました。実際に有効な webpack public path に基づいて、プラグインの CDN パスを解決するように変更しました。 ([#10008](https://github.com/nocobase/nocobase/pull/10008)) by @chenos
  * ページ切り替え時に、クイック編集でドロップダウンの選択肢を切り替えられない場合がある問題を修正しました。 ([#10007](https://github.com/nocobase/nocobase/pull/10007)) by @gchust
* **[flow-engine]** 設定モードを切り替える際に、ポップアップ内の設定が一致しない問題を修正しました。 ([#10005](https://github.com/nocobase/nocobase/pull/10005)) by @gchust
* **[ファイルマネージャー]** ファイルアップロード時に、ストレージの MIME type ルールで明示的に許可されていないアクティブコンテンツのファイル名を拒否するようにしました。 ([#9994](https://github.com/nocobase/nocobase/pull/9994)) by @mytharcher
  参考ドキュメント：[ローカルストレージ](docs/docs/cn/file-manager/storage/local.md), [セキュリティガイド](docs/docs/cn/security/guide.md)
* **[データソース：外部 MariaDB]** MySQL、MSSQL、MariaDB の外部データソース設定で、Add all collections を切り替えられない問題を修正しました。 by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.2.0-beta.13

*リリース日: 2026-07-12*

### 🐛 不具合修正

* **[Redis Worker ID アロケーター]** Worker ID 用の Redis が未設定の場合、シングルノードモードを起動できない問題を修正しました。 by @2013xile

### v2.2.0-beta.12

*リリース日: 2026-07-11*

### 🐛 不具合修正

* **[server]** マルチアプリプラグインを有効にしていない場合、カスタムワークスペースが表示されない問題を修正しました。 ([#10055](https://github.com/nocobase/nocobase/pull/10055)) by @2013xile
* **[app]** Redis キャッシュ設定で、専用キャッシュアドレスが無視される問題を修正しました。 ([#10065](https://github.com/nocobase/nocobase/pull/10065)) by @2013xile
* **[Redis Worker ID アロケーター]** Redis Worker ID の分離と障害診断を改善しました。 by @2013xile

### v2.2.0-beta.11

*リリース日: 2026-07-11*

### 🐛 不具合修正

* **[app]** `<span>CDN_BASE_URL</span>` が空の場合に、非同期リソースが誤って外部スクリプトアドレスを使用する問題を修正しました。 ([#10052](https://github.com/nocobase/nocobase/pull/10052)) by @Molunerfinn
* **[client-v2]**
  * v2 の QR コードスキャン入力で、Safari から QR コード画像を選択してアップロードした場合に認識に失敗する問題を修正しました。 ([#10011](https://github.com/nocobase/nocobase/pull/10011)) by @katherinehhh
  * テーブルブロックのボタン連動ルールで、ページ切り替え後に状態が汚染される可能性がある問題を修正しました。 ([#10038](https://github.com/nocobase/nocobase/pull/10038)) by @gchust
  * `<span>__webpack_public_path__</span>` が末尾の `<span>/</span>` なしで注入された場合に、クライアントランタイムの静的リソースベースパスの正規化が一致しない問題を修正しました。また、この境界ケースのテストカバレッジも追加しました。 ([#10040](https://github.com/nocobase/nocobase/pull/10040)) by @chenos
* **[flow-engine]** JS block 内で ctx.api を上書きすると、maximum call stack size exceeded が発生する問題を修正しました。 ([#10051](https://github.com/nocobase/nocobase/pull/10051)) by @gchust
* **[ワークフロー：遅延ノード]** API 経由で遅延ノードに 1 未満の値を設定できないようにしました。 ([#10057](https://github.com/nocobase/nocobase/pull/10057)) by @mytharcher
* **[フォーム下書き]** ページを連続して更新した後、フォーム下書きが失われる問題を修正しました。 ([#10059](https://github.com/nocobase/nocobase/pull/10059)) by @gchust
* **[ワークフロー]** 対象ワークフローの実行記録が作成される前にサブフローが失敗した場合、親ノードが待機し続ける可能性がある問題を修正しました。 ([#10043](https://github.com/nocobase/nocobase/pull/10043)) by @mytharcher
* **[フロントエンドフローエンジン]**
  * ローカル AI agent 設定を使用した連動ルールで、レンダリングエラーが発生する可能性がある問題を修正しました。 ([#10023](https://github.com/nocobase/nocobase/pull/10023)) by @gchust
  * ポップアップ内のレコード変数を、外部 NocoBase データソースから解析できない問題を修正しました。 ([#10048](https://github.com/nocobase/nocobase/pull/10048)) by @gchust
* **[データソース：メインデータベース]** 無効な多対多リレーションフィールド設定を保存できないようにしました。 ([#10044](https://github.com/nocobase/nocobase/pull/10044)) by @2013xile
* **[データテーブル：ツリー]** ツリーパスコレクションの作成時に、内部フィールドモデルのメタデータがコレクション設定へ渡される問題を修正しました。 ([#10035](https://github.com/nocobase/nocobase/pull/10035)) by @cgyrock
* **[テンプレート印刷]** テンプレート印刷の権限チェックを修正しました。現在のロールが閲覧できないフィールドや、データ範囲外のレコードがレンダリングされないようにしました。 by @jiannx
* **[ワークフロー：承認]**
  * 文字列型の承認者 ID を追加して使用できるようにしました。 by @mytharcher
  * 印刷プレビューで、承認フォームのフィールドが単一列表示になってしまう問題を修正しました。 by @zhangzhonghe
  * 承認サブテーブルを無効化した後も、内部フィールドが編集できてしまう問題を修正しました。 by @zhangzhonghe

### v2.2.0-beta.10

*リリース日: 2026-07-09*

### 🎉 新機能

* **[AIワーカー]** 使用状況を集計しやすくするため、構造化された AI 使用記録を追加しました。 ([#10004](https://github.com/nocobase/nocobase/pull/10004)) by @2013xile
* **[AIワーカー]** LLM プロバイダーとして OrcaRouter を追加しました。([#10003](https://github.com/nocobase/nocobase/pull/10003)) by

### 🚀 機能改善

* **[ワークフロー]** 条件ノードから、基本演算エンジンの算術演算子を削除しました。 ([#10019](https://github.com/nocobase/nocobase/pull/10019)) by @mytharcher
* **[データ可視化]** チャートイベントスクリプトを改善し、カスタムイベントハンドラーを安全にクリーンアップできるようにしました。 ([#10034](https://github.com/nocobase/nocobase/pull/10034)) by @2013xile
* **[データソース管理]** v2 メインデータソースの新規データテーブル作成メニューで、廃止済みのデータテーブルテンプレートを非表示にしました。 ([#10009](https://github.com/nocobase/nocobase/pull/10009)) by @katherinehhh

### 🐛 不具合修正

* **[client-v2]**
  * フィルターフォームのリレーションフィールドで、デフォルト演算子の設定が表示される問題を修正しました。 ([#10025](https://github.com/nocobase/nocobase/pull/10025)) by @zhangzhonghe
  * モバイル端末で、テーブルのクイック編集とフィールド選択モーダルの下部余白に関する問題を修正しました。 ([#10020](https://github.com/nocobase/nocobase/pull/10020)) by @zhangzhonghe
  * フィルターフォームのリレーションフィールドにデフォルト値を設定した後、値をクリアできない問題を修正しました。 ([#10022](https://github.com/nocobase/nocobase/pull/10022)) by @gchust
  * 実行時編集モーダルでレコードを切り替えた際、連動フィールドの状態が残ってしまう問題を修正しました。 ([#10010](https://github.com/nocobase/nocobase/pull/10010)) by @katherinehhh
  * ページ切り替え時に、クイック編集でドロップダウンの選択肢を切り替えられない場合がある問題を修正しました。 ([#10007](https://github.com/nocobase/nocobase/pull/10007)) by @gchust
  * 本番環境における Vditor の静的リソース読み込みパスを修正しました。実際に有効な webpack public path に基づいて、プラグインの CDN パスを解決するように変更しました。 ([#10008](https://github.com/nocobase/nocobase/pull/10008)) by @chenos
* **[cli]** NocoBase CLI におけるイメージリポジトリのフォールバック、内蔵データベースイメージ、環境情報の表示、プロンプトのデフォルト値初期化に関する問題を修正しました。 ([#10027](https://github.com/nocobase/nocobase/pull/10027)) by @chenos
* **[flow-engine]** 設定モードを切り替える際に、ポップアップ内の設定が一致しない問題を修正しました。 ([#10005](https://github.com/nocobase/nocobase/pull/10005)) by @gchust
* **[データ可視化]** チャートの再レンダリング後、クリック操作が効かなくなる場合がある問題を修正しました。 ([#10031](https://github.com/nocobase/nocobase/pull/10031)) by @2013xile
* **[AIワーカー]** V2 公開フォームページで、不要なログイン状態リクエストが発生する問題を修正しました。 ([#10013](https://github.com/nocobase/nocobase/pull/10013)) by @zhangzhonghe
* **[ユーザー認証]** パスワードリセットリンクを開いた後、ログインページに遷移してしまう問題を修正しました。 ([#10006](https://github.com/nocobase/nocobase/pull/10006)) by @zhangzhonghe
* **[データソース管理]** V2 データテーブルの新規フィールド追加メニューで、旧 Attachment フィールドのインターフェースを非表示にしました。 ([#10018](https://github.com/nocobase/nocobase/pull/10018)) by @katherinehhh
* **[ファイルマネージャー]**
  * ファイルアップロード時に、ストレージの MIME type ルールで明示的に許可されていないアクティブコンテンツのファイル名を拒否するようにしました。 ([#10021](https://github.com/nocobase/nocobase/pull/10021)) by @mytharcher
    参考ドキュメント：[ローカルストレージ](https://docs.nocobase.com/cn/file-manager/storage/local), [セキュリティガイド](https://docs.nocobase.com/cn/security/guide)
  * v2 データテーブル管理で Attachment フィールドのインターフェースが欠落している問題を修正しました。また、公開フォームのファイルリレーションフィールドで画像をアップロードする際の事前チェック時の権限問題も修正しました。 ([#10012](https://github.com/nocobase/nocobase/pull/10012)) by @katherinehhh
* **[NocoBase 埋め込み]** NocoBase ページを埋め込む際のトークン汚染問題を修正しました。 ([#9948](https://github.com/nocobase/nocobase/pull/9948)) by @gchust
* **[データソース：外部 MariaDB]** MySQL、MSSQL、MariaDB の外部データソース設定で、Add all collections を切り替えられない問題を修正しました。 by @katherinehhh
* **[マイグレーション管理]** マイグレーション後、アプリが修復画面で止まる可能性がある問題を修正しました。 by @2013xile
* **[アプリケーションスーパーバイザー]** 独立した JWT 鍵を有効にした後も、サブアプリが主アプリのトークンを受け入れてしまう問題を修正しました。 by @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.2.0-alpha.8

*リリース日: 2026-07-13*

### 🎉 新機能

* **[公開フォーム]** v1 公開フォームで v2 フォームを作成できるようにし、v1 フォームの新規作成を禁止しました。 ([#10045](https://github.com/nocobase/nocobase/pull/10045)) by @zhangzhonghe

### 🚀 機能改善

* **[ワークフロー]** ワークフロー v2 キャンバスで現在未対応のノードについて、通常のノードカード操作を残しつつ、ノードタイプを「未対応」と表示するようにしました。 ([#10054](https://github.com/nocobase/nocobase/pull/10054)) by @mytharcher
* **[フロントエンドフローエンジン]** UI 構築 API が複数ワークスペースに対応しました。 ([#10072](https://github.com/nocobase/nocobase/pull/10072)) by @gchust
* **[AIワーカー]** AIワーカーのツール設定、データクエリ制約、リレーションフィールドのクエリを改善し、異常なツール呼び出しに関する診断情報を保持できるようにしました。 ([#10042](https://github.com/nocobase/nocobase/pull/10042)) by @cgyrock
* **[データテーブル: SQL]** ユーザー向けの変更はありません。移行済みプラグインに対して、client-v2 のユニットテストカバレッジを追加しました。 ([#9967](https://github.com/nocobase/nocobase/pull/9967)) by @katherinehhh

### 🐛 不具合修正

* **[client-v2]**
  * v2 ワークフローの代入エディターで、コレクションフィールド名が nodeName の場合にコンソールエラーが発生する問題を修正しました。 ([#10067](https://github.com/nocobase/nocobase/pull/10067)) by @katherinehhh
  * テーブルブロックのボタン連動ルールで、ページ切り替え後に状態が汚染される可能性がある問題を修正しました。 ([#10038](https://github.com/nocobase/nocobase/pull/10038)) by @gchust
  * ワークフロー v2 の変数エディターで、トリガー、フィルター条件、フィールド代入フォームにおける変数カプセルの表示、無効状態、演算子ラベルの表示が一致しない問題を修正しました。 ([#10041](https://github.com/nocobase/nocobase/pull/10041)) by @Molunerfinn
* **[app]**
  * Redis キャッシュ設定で、専用キャッシュアドレスが無視される問題を修正しました。 ([#10065](https://github.com/nocobase/nocobase/pull/10065)) by @2013xile
  * `<span>CDN_BASE_URL</span>` が空の場合に、非同期リソースが誤って外部スクリプトアドレスを使用する問題を修正しました。 ([#10052](https://github.com/nocobase/nocobase/pull/10052)) by @Molunerfinn
* **[server]** マルチアプリプラグインを有効にしていない場合、カスタムワークスペースが表示されない問題を修正しました。 ([#10055](https://github.com/nocobase/nocobase/pull/10055)) by @2013xile
* **[flow-engine]**
  * 単一値変数の入力欄で変数を選択した後も、追加のテキストを入力できてしまう問題を修正しました。 ([#10050](https://github.com/nocobase/nocobase/pull/10050)) by @katherinehhh
  * JS block 内で ctx.api を上書きすると、maximum call stack size exceeded が発生する問題を修正しました。 ([#10051](https://github.com/nocobase/nocobase/pull/10051)) by @gchust
* **[ワークフロー：遅延ノード]**
  * 遅延ノードの時間入力を修正し、最小値未満の値を保存できないようにしました。 ([#10056](https://github.com/nocobase/nocobase/pull/10056)) by @Molunerfinn
  * API 経由で遅延ノードに 1 未満の値を設定できないようにしました。 ([#10057](https://github.com/nocobase/nocobase/pull/10057)) by @mytharcher
* **[ワークフロー]**
  * 対象ワークフローの実行記録が作成される前にサブフローが失敗した場合、親ノードが待機し続ける可能性がある問題を修正しました。 ([#10043](https://github.com/nocobase/nocobase/pull/10043)) by @mytharcher
  * ワークフローを手動実行する際、リクエストは有効でも実行が開始されていない場合にエラーが返される問題を修正しました。 ([#10049](https://github.com/nocobase/nocobase/pull/10049)) by @mytharcher
* **[データソース：メインデータベース]** 無効な多対多リレーションフィールド設定を保存できないようにしました。 ([#10044](https://github.com/nocobase/nocobase/pull/10044)) by @2013xile
* **[フロントエンドフローエンジン]** ポップアップ内のレコード変数を、外部 NocoBase データソースから解析できない問題を修正しました。 ([#10048](https://github.com/nocobase/nocobase/pull/10048)) by @gchust
* **[フォーム下書き]** ページを連続して更新した後、フォーム下書きが失われる問題を修正しました。 ([#10059](https://github.com/nocobase/nocobase/pull/10059)) by @gchust
* **[ワークフロー：集計クエリノード]** フィルター条件が空の場合にも対応できるよう、検証ルールを修正しました。 ([#10053](https://github.com/nocobase/nocobase/pull/10053)) by @mytharcher
* **[Redis Worker ID アロケーター]**
  * Worker ID 用の Redis が未設定の場合、シングルノードモードを起動できない問題を修正しました。 by @2013xile
  * Redis Worker ID の分離と障害診断を改善しました。 by @2013xile
* **[plugin-service-platform]** サービスプラットフォームで、認可済みプラグインのダウンロード機能を復元しました。 by @jiannx
* **[テンプレート印刷]** テンプレート印刷の権限チェックを修正しました。現在のロールが閲覧できないフィールドや、データ範囲外のレコードがレンダリングされないようにしました。 by @jiannx
* **[ワークフロー：承認]**
  * v2 承認サブテーブルが詳細画面で正しく表示されない問題を修正しました。 by @zhangzhonghe
  * 承認者画面で空ブロックがデフォルト表示される問題と、固定承認者 ID の保存に関する問題を修正しました。 by @zhangzhonghe
  * 承認サブテーブルを無効化した後も、内部フィールドが編集できてしまう問題を修正しました。 by @zhangzhonghe
  * 文字列型の承認者 ID を追加して使用できるようにしました。 by @mytharcher
  * 印刷プレビューで、承認フォームのフィールドが単一列表示になってしまう問題を修正しました。 by @zhangzhonghe
  * 承認フォームを開く際に、Apply new ドロワーを閉じるようにしました。 by @zhangzhonghe
  * 承認タスクカードに承認データが表示されない問題を修正しました。 by @zhangzhonghe

### v2.2.0-alpha.7

*リリース日: 2026-07-09*

### 🎉 新機能

* **[AIワーカー]** 使用状況を集計しやすくするため、構造化された AI 使用記録を追加しました。 ([#10004](https://github.com/nocobase/nocobase/pull/10004)) by @2013xile
* **[AIワーカー]** LLM プロバイダーとして OrcaRouter を追加しました。([#10003](https://github.com/nocobase/nocobase/pull/10003)) by @jinhaosong-source
* **[ワークフロー：承認]** v2 ページに、承認開始ブロックと ToDo ブロックを追加しました。 by @zhangzhonghe

### 🚀 機能改善

* **[client-v2]**
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
