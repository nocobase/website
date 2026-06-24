### 🎉 新機能

* **[cli]** nb init で --hook-script をサポートしました。 ([#9824](https://github.com/nocobase/nocobase/pull/9824)) by @chenos
* **[UI レイアウト]** モバイルレイアウトに対応しました。 ([#9641](https://github.com/nocobase/nocobase/pull/9641)) by @zhangzhonghe
* **[バックアップマネージャー]** KingBase プライマリデータベースのバックアップとリストアに対応しました。 ([#9791](https://github.com/nocobase/nocobase/pull/9791)) by @2013xile
* **[マルチワークスペース]** マルチワークスペースプラグインを追加しました。 by @zhangzhonghe
* **[マイグレーション管理]** KingBase プライマリデータベースのマイグレーションに対応しました。 by @2013xile

### 🚀 機能改善

* **[client-v2]**
  * UI のフィールド検証設定で、フィールドレベルの検証ルールを読み取り専用の継承ルールとして表示するようにしました。 ([#9819](https://github.com/nocobase/nocobase/pull/9819)) by @katherinehhh
  * フォーム値の設定に、値を上書きするオプションを追加しました。 ([#9578](https://github.com/nocobase/nocobase/pull/9578)) by @gchust
* **[undefined]** AI ナレッジベースの検索と関連ドキュメントを改善しました。 ([#9765](https://github.com/nocobase/nocobase/pull/9765)) by @cgyrock
* **[フロントエンドフローエンジン]**
  * FlowSurface API を使って AIワーカーを構築する際、現在のブロックをデフォルトでユーザーコンテキストに追加するようにしました。 ([#9840](https://github.com/nocobase/nocobase/pull/9840)) by @gchust
  * runjs の実行環境に関する制限を緩和しました。 ([#9841](https://github.com/nocobase/nocobase/pull/9841)) by @gchust
* **[ワークフロー]** テストケースの安定性を向上しました。 ([#9773](https://github.com/nocobase/nocobase/pull/9773)) by @mytharcher
* **[権限制御]** v2 のユーザー設定ページと権限設定ページの挙動を v1 と揃えました。ページネーションの総数表示、部門ツリーの操作、選択時のスタイル、権限パネル内のスクロールが含まれます。 ([#9810](https://github.com/nocobase/nocobase/pull/9810)) by @jiannx
* **[バックアップマネージャー]**`dataCategory` が `'runtime'` に設定されたデータテーブルは、バックアップ対象から自動的に除外されるようになりました。 ([#9804](https://github.com/nocobase/nocobase/pull/9804)) by @cgyrock
* **[AI: ナレッジベース]** AI ナレッジベースのドキュメント分割、分割管理、ヒットテスト、ドキュメントワークフローノードのサポートを改善しました。 by @cgyrock

### 🐛 不具合修正

* **[client-v2]**
  * ブロック設定を変更した後、画面が更新されない問題を修正しました。 ([#9843](https://github.com/nocobase/nocobase/pull/9843)) by @gchust
  * カスタム操作のワークフロートリガーボタンで、カスタムコンテキスト JSON が余分な `values` 階層に入ったり、シリアライズされた文字列として送信されたりする問題を修正しました。 ([#9815](https://github.com/nocobase/nocobase/pull/9815)) by @mytharcher
  * 固定値またはデフォルト値にリレーションフィールドの値を設定した場合に、設定が有効にならない問題を修正しました。 ([#9820](https://github.com/nocobase/nocobase/pull/9820)) by @gchust
  * サブテーブル列のイベントフローが正しく実行されない問題を修正しました。 ([#9821](https://github.com/nocobase/nocobase/pull/9821)) by @gchust
  * リレーションフィールドに不要な `updateAssociationValues` が含まれる問題を修正しました。 ([#9812](https://github.com/nocobase/nocobase/pull/9812)) by @katherinehhh
  * サブフォームにサブテーブルが含まれる場合、フォーム送信時にエラーが発生する問題を修正しました。 ([#9807](https://github.com/nocobase/nocobase/pull/9807)) by @gchust
* **[ai]**
  * AI プラグインで、LangChain 依存関係のバージョン解決に互換性がない問題を修正しました。 ([#9831](https://github.com/nocobase/nocobase/pull/9831)) by @cgyrock
  * AI 関連パッケージ内の `@langchain/openai` について、パッチバージョンのみ更新できるように固定しました。 ([#9829](https://github.com/nocobase/nocobase/pull/9829)) by @cgyrock
* **[app]** プラグインの public path を推定する際、無関係な currentScript が使用されないようにしました。 ([#9839](https://github.com/nocobase/nocobase/pull/9839)) by @chenos
* **[auth]** ログイン状態のレスポンスに、暗号化されたパスワードデータが含まれないようにしました。 ([#9836](https://github.com/nocobase/nocobase/pull/9836)) by @2013xile
* **[ブロック：ガントチャート]** ガントチャートのタスクポップアップテンプレート設定が正しく反映されない、またはクリアできない問題を修正しました。 ([#9835](https://github.com/nocobase/nocobase/pull/9835)) by @jiannx
* **[操作：印刷]** v2 の詳細ブロックが空の場合にページ全体が印刷される問題を修正しました。空の詳細ブロックでは、ナビゲーションとサイドバーが印刷されないようになりました。 ([#9832](https://github.com/nocobase/nocobase/pull/9832)) by @katherinehhh
* **[UI テンプレート]** ctx.openview のデフォルトコンテキストが正しくない問題を修正しました。 ([#9811](https://github.com/nocobase/nocobase/pull/9811)) by @gchust
* **[ファイルマネージャー]** 外部データソースの添付 URL フィールドでファイルをアップロードする際、API が 404 になる問題を修正しました。 ([#9809](https://github.com/nocobase/nocobase/pull/9809)) by @2013xile
* **[操作：カスタムリクエスト]** V2 のカスタムリクエスト操作でリクエスト設定が未設定の場合、不要なエラーメッセージが表示される問題を修正しました。 ([#9802](https://github.com/nocobase/nocobase/pull/9802)) by @katherinehhh
* **[ワークフロー]** ワークフロースケジューラーがスケジュール異常後に正しく復旧できない問題を修正しました。 ([#9783](https://github.com/nocobase/nocobase/pull/9783)) by @mytharcher
* **[AIワーカー]** AIワーカーのクイックエントリからタスクを起動する際、現在の作業コンテキストに含まれる添付ファイルが渡されない問題を修正しました。 ([#9808](https://github.com/nocobase/nocobase/pull/9808)) by @cgyrock
* **[データソース：外部 NocoBase]** アップロード先のデータソースに基づき、NocoBase 外部データソースのファイルアップロード API とストレージ API をプロキシするようにしました。 by @2013xile
* **[AI: ナレッジベース]**
  * AI ナレッジベースプラグインで、LangChain 依存関係のバージョン解決に互換性がない問題を修正しました。 by @cgyrock
  * AI プラグインが有効になっていない状態で AI ナレッジベースプラグインを有効化した場合、エラー内容が分かりにくい問題を修正しました。 by @cgyrock
* **[マルチスペース]** 認証復旧リクエストが、期限切れのマルチスペースリクエストヘッダーによってブロックされる問題を修正しました。 by @jiannx
* **[ワークフロー：サブプロセス]** 非同期サブプロセスで、サービス再起動またはメモリ内のイベントマッピング消失後に、親プロセスが実行を継続できない問題を修正しました。 by @mytharcher
* **[ワークフロー：承認]** 関連する承認が初回に読み込まれない、または更新後にタイムラインが更新されない問題を修正しました。 by @zhangzhonghe
* **[アプリケーションスーパーバイザー]** リモート WebSocket プロキシの応答に失敗した際、サービスがクラッシュする可能性がある問題を修正しました。 by @2013xile
