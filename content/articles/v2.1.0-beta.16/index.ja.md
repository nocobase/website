### 🎉 新機能

- **[undefined]** 新規CIワークフローを追加し、欠落している`plugin-*`peerDependenciesを自動的にチェックし、ビルドを実行し、PRにチェックレポートコメントを送信することをサポート。 ([#9058](https://github.com/nocobase/nocobase/pull/9058)) by @Molunerfinn
- **[cli-v1]** storage path変数をリファクタリング ([#9147](https://github.com/nocobase/nocobase/pull/9147)) by @chenos
- **[cli]** nocobase CLIをリファクタリング ([#9122](https://github.com/nocobase/nocobase/pull/9122)) by @chenos
- **[flow-engine]** FlowEngineに`getSubclassesOfAsync`メソッドを新規追加し、`registerModelLoaders`の`extends`フィールドを通じて非同期登録されたmodel classの発見をサポート。 ([#9065](https://github.com/nocobase/nocobase/pull/9065)) by @Molunerfinn
- **[ワークフロー]**

  - ノード作成時に検査用のAPIを追加 ([#9207](https://github.com/nocobase/nocobase/pull/9207)) by @mytharcher
  - ノードタスクにログフィールドを追加し、一部のノードデバッグ時にログ内容を表示することをサポート ([#9165](https://github.com/nocobase/nocobase/pull/9165)) by @mytharcher
- **[AI 従業員]**

  - ワークフローにAI従業員ノードを新規追加 ([#9025](https://github.com/nocobase/nocobase/pull/9025)) by @cgyrock
  - AI従業員にデータ集計查询ツールと業務分析レポートツールを新規追加 ([#9040](https://github.com/nocobase/nocobase/pull/9040)) by @2013xile
  - AI従業員にsub agentsを呼び出す能力を新規追加 ([#8935](https://github.com/nocobase/nocobase/pull/8935)) by @cgyrock
  - AI従業員にSKILLS能力を新規追加 ([#8797](https://github.com/nocobase/nocobase/pull/8797)) by @cgyrock
- **[認証：API キー]** `pm list`と`generate-api-key`コマンドを追加 ([#9076](https://github.com/nocobase/nocobase/pull/9076)) by @chenos
- **[AI: MCP サーバー]**

  - MCP呼び出しをサポートする汎用データテーブルクエリインターフェースを提供 ([#8985](https://github.com/nocobase/nocobase/pull/8985)) by @2013xile
  - MCP経由でNocoBaseシステムを構築し、業務プロセスをサポートするMCPサーバープラグインを新規追加。 ([#8824](https://github.com/nocobase/nocobase/pull/8824)) by @2013xile
- **[データソース管理]** オンデマンドでのMCPツールの読み込みをサポート ([#8936](https://github.com/nocobase/nocobase/pull/8936)) by @2013xile
- **[IdP: OAuth]** IdP: OAuthプラグインを新規追加し、MCPサービスがOAuth認証することをサポート ([#8896](https://github.com/nocobase/nocobase/pull/8896)) by @2013xile

### 🚀 機能改善

- **[cli]**

  - リクエストログと監査ログにCLIリクエストソースマークを追加 ([#9223](https://github.com/nocobase/nocobase/pull/9223)) by @2013xile
  - 生成式API CLIのヘルプ出力とACLコマンドグループ化を最適化 ([#9166](https://github.com/nocobase/nocobase/pull/9166)) by @2013xile
  - `nb api`のランタイムブート失敗時のヘルプデグラデーション表示を最適化し、警告メッセージのスタイルを統一 ([#9153](https://github.com/nocobase/nocobase/pull/9153)) by @2013xile
- **[server]** プラグイン管理関連のSwagger APIドキュメントを完善 ([#9080](https://github.com/nocobase/nocobase/pull/9080)) by @2013xile
- **[database]** AI業務レポート生成とデータクエリ動作を修正し、エラーグラフ出力、時刻処理の不正確さ、マルチデータソース分析の漏落の問題を回避 ([#9078](https://github.com/nocobase/nocobase/pull/9078)) by @2013xile
- **[build]**

  - App clientの本番ビルドがRsbuildを使用するように変更され、ビルドprofilingとdeclarationスケジューリングの最適化が新增され、ビルドボトルネックの特定と低減が容易になった。 ([#8963](https://github.com/nocobase/nocobase/pull/8963)) by @Molunerfinn
  - `@nocobase/build`のclientビルド流程をViteからRsbuildに移行。 ([#8932](https://github.com/nocobase/nocobase/pull/8932)) by @Molunerfinn
- **[client]** adminレイアウト設定与应用エントランスをモデルホストアーキテクチャにリファクタリングし、v1 v2互換性保障を補充 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) by @zhangzhonghe
- **[flow-engine]**

  - ページ構築関連のAPIのschema検証を強化。 ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust
  - ページ構築関連のAPIのschema検証を強化。 ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust
- **[app]** client-v1にRsbuildベースの 개발 워크플로우を追加し、ローカルプラグイン開発と現在の`/v2/`環境との互換性を維持 ([#8902](https://github.com/nocobase/nocobase/pull/8902)) by @Molunerfinn
- **[undefined]** v1を不変に保つ前提下、client-v2独立エントランスを新規追加し、rsbuildで獨立打包を使用。 ([#8743](https://github.com/nocobase/nocobase/pull/8743)) by @Molunerfinn
- **[権限制御]** 権限管理SkillにAIモード用の新しいAPIアダプタを追加 ([#9198](https://github.com/nocobase/nocobase/pull/9198)) by @Andrew1989Y
- **[ワークフロー：カスタム操作イベント]** レコード（単一および複数）トリガーモードのアクセス制御を追加 ([#9125](https://github.com/nocobase/nocobase/pull/9125)) by @mytharcher
- **[フロントエンドフローエンジン]** UI構築関連のAPIを新規追加。 ([#8992](https://github.com/nocobase/nocobase/pull/8992)) by @gchust
- **[ワークフロー：操作前イベント]** トリガーとノードに検証ルールを追加 ([#8971](https://github.com/nocobase/nocobase/pull/8971)) by @mytharcher
- **[ワークフロー]** すべてのトリガーとノードに検証ルールを追加 ([#8930](https://github.com/nocobase/nocobase/pull/8930)) by @mytharcher
- **[ワークフロー：Webhook トリガー]** トリガー作成とノードAPIに検証処理を追加 by @mytharcher
- **[ワークフロー：サブフロー]** 新規ノードAPIに検証処理を追加 by @mytharcher
- **[ワークフロー：承認]**

  - 承認ノード作成時にタイプ検証を追加 by @mytharcher
  - トリガーとノードAPIに検証処理を追加 by @mytharcher

### 🐛 不具合修正

- **[client]**

  - 関係フィールドの非表示並べ替えスイッチ ([#9220](https://github.com/nocobase/nocobase/pull/9220)) by @jiannx
  - メニュー切り替え後にページタイトルが更新されない問題を修正 ([#8864](https://github.com/nocobase/nocobase/pull/8864)) by @zhangzhonghe
- **[cli]** Windows上でCLI OAuthログインが認証リンクが長すぎるために失敗する可能性がある問題を修正 ([#9159](https://github.com/nocobase/nocobase/pull/9159)) by @2013xile
- **[test]** プラグインビルドが`big.js`のようなドット付きパッケージ名の処理を修正し、サーバーサイド依存関係が正しく`dist/node_modules`にパッケージされるようにした。 ([#8953](https://github.com/nocobase/nocobase/pull/8953)) by @Molunerfinn
- **[server]** hostnameで受理アプリケーションを取得することをサポート ([#8978](https://github.com/nocobase/nocobase/pull/8978)) by @2013xile
- **[ワークフロー：集計クエリノード]** 集計ノードのエラー検証ルールにより保存できない問題を修正 ([#9208](https://github.com/nocobase/nocobase/pull/9208)) by @mytharcher
- **[AI 従業員]**

  - AI従業員ノードログ記録の異常問題を修正 ([#9180](https://github.com/nocobase/nocobase/pull/9180)) by @cgyrock
  - ACLにより集計クエリの並べ替えが失われる問題を修正 ([#9099](https://github.com/nocobase/nocobase/pull/9099)) by @2013xile
  - AI従業員会話中の異常メッセージが表示されない問題を修正 ([#9097](https://github.com/nocobase/nocobase/pull/9097)) by @cgyrock
  - AI従業員がskillsを使用できない問題を修正 ([#9023](https://github.com/nocobase/nocobase/pull/9023)) by @cgyrock
  - getSkillツールを無効化した後も大規模言語モデルが 여전히スキルを読み込もうとする問題を修正 ([#9013](https://github.com/nocobase/nocobase/pull/9013)) by @cgyrock
  - coreパッケージのaiモジュールが不通過のテストケースを修正 ([#8941](https://github.com/nocobase/nocobase/pull/8941)) by @cgyrock
- **[ワークフロー：JavaScript ノード]** JavaScriptノード設定時のエラーメッセージを修正 ([#9169](https://github.com/nocobase/nocobase/pull/9169)) by @mytharcher
- **[IdP: OAuth]**

  - サービス再起動後にOAuthクライアント登録とトークンリフレッシュが失敗する問題を修正 ([#9139](https://github.com/nocobase/nocobase/pull/9139)) by @2013xile
  - 一般APIリクエストのOAuthアクセスを修正 ([#9120](https://github.com/nocobase/nocobase/pull/9120)) by @2013xile
  - 子アプリケーションでのMCP OAuthログイン後のジャンプエラーの問題を修正 ([#9015](https://github.com/nocobase/nocobase/pull/9015)) by @2013xile
- **[ワークフロー：ループノード]** ワークフローノードの検証ルールを修正 ([#9111](https://github.com/nocobase/nocobase/pull/9111)) by @mytharcher
- **[権限制御]** 権限管理のswaggerドキュメントを更新し、MCPサービスを強化 ([#9096](https://github.com/nocobase/nocobase/pull/9096)) by @Andrew1989Y
- **[ワークフロー：メール送信ノード]** 変数を使用できるフィールドの検証ルールを修正 ([#9047](https://github.com/nocobase/nocobase/pull/9047)) by @mytharcher
- **[ワークフロー]**

  - 条件ノードのエラー検証ルールを修正 ([#9017](https://github.com/nocobase/nocobase/pull/9017)) by @mytharcher
  - データテーブルトリガーのトリガーモードが「新規または更新」に設定できない問題を修正 ([#8980](https://github.com/nocobase/nocobase/pull/8980)) by @mytharcher
- **[データソース管理]** MCPツール名前を最適化；冗長なインターフェース出力結果を精简化し、AI対話コンテキストの消費を回避 ([#9000](https://github.com/nocobase/nocobase/pull/9000)) by @2013xile
- **[AI: MCP サーバー]**

  - Swagger生成のMCPツールが入力schemaに`null`タイプまたは`nullable`マークが含まれている場合にOpenAIツール検証を通らない問題を修正 ([#8994](https://github.com/nocobase/nocobase/pull/8994)) by @2013xile
  - MCP汎用CRUDツールが无关リクエストヘッダーを透通することによる認証不一致の問題を修正 ([#8983](https://github.com/nocobase/nocobase/pull/8983)) by @2013xile
