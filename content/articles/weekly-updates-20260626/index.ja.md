週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.1.11](https://www.nocobase.com/ja/blog/v2.1.11)

*リリース日：2026-06-25*

### 🚀 機能改善

* **[バックアップマネージャー]** バージョン管理で選択したデータテーブルをバックアップする際、ビューや関連するデータベースオブジェクトが含まれていると復元に失敗する問題を修正しました。 ([#9827](https://github.com/nocobase/nocobase/pull/9827)) by @cgyrock

### 🐛 不具合修正

* **[flow-engine]**
  * フィールドをドラッグした後、ブロックツールバーが再表示されない場合がある問題を修正しました。 ([#9848](https://github.com/nocobase/nocobase/pull/9848)) by @zhangzhonghe
  * フィールド幅を調整する際、詳細ポップアップが予期せず閉じる問題を修正しました。 ([#9850](https://github.com/nocobase/nocobase/pull/9850)) by @zhangzhonghe
* **[client-v2]**
  * フィルターフォームで、表示されている関連テーブルのフィールドに値を設定できない問題を修正しました。 ([#9875](https://github.com/nocobase/nocobase/pull/9875)) by @zhangzhonghe
  * 複合ロールが v2 で変数として正しく解析されない問題を修正しました。 ([#9611](https://github.com/nocobase/nocobase/pull/9611)) by @gchust
* **[ai]** 現在のユーザーに依存する MCP 設定で NocoBase リクエスト変数を使用できるようにし、ユーザー単位の MCP 接続失敗が AIワーカーの通常の会話に影響しないようにしました。 ([#9888](https://github.com/nocobase/nocobase/pull/9888)) by @cgyrock
* **[cli]** source dev の依存関係を最適化しました。 ([#9882](https://github.com/nocobase/nocobase/pull/9882)) by @chenos
* **[UI テンプレート]** リレーションフィールドのブロックテンプレートが使用できない問題を修正しました。 ([#9406](https://github.com/nocobase/nocobase/pull/9406)) by @gchust
* **[AI: ナレッジベース]** AI ナレッジベースのドキュメントテーブルとヒットテスト結果カードで、狭い画面や長いファイル名の場合に内容がはみ出す問題を修正しました。 by @cgyrock
* **[バージョン管理]** バージョン管理で選択したデータテーブルをバックアップする際、ビューや関連するデータベースオブジェクトが含まれていると復元に失敗する問題を修正しました。 by @cgyrock
* **[マルチスペース]** スペース設定ページで、最初の 20 件のスペースレコードしか読み込めない問題を修正しました。 by @jiannx


### [v2.1.10](https://www.nocobase.com/ja/blog/v2.1.10)

*リリース日：2026-06-23*

### 🎉 新機能

* **[ai]** リモート MCP クライアントの URL とリクエストヘッダーで、現在のユーザー変数を使用できるようにしました。 ([#9828](https://github.com/nocobase/nocobase/pull/9828)) by @cgyrock
* **[cli]** nb init で --hook-script に対応しました。 ([#9824](https://github.com/nocobase/nocobase/pull/9824)) by @chenos

### 🚀 機能改善

* **[client-v2]** UI のフィールド検証設定で、フィールドレベルの検証ルールを読み取り専用の継承ルールとして表示するようにしました。 ([#9819](https://github.com/nocobase/nocobase/pull/9819)) by @katherinehhh
* **[フロントエンドフローエンジン]** FlowSurface API を使って AIワーカーを構築する際、現在のブロックをデフォルトでユーザーコンテキストに追加するようにしました。 ([#9840](https://github.com/nocobase/nocobase/pull/9840)) by @gchust

### 🐛 不具合修正

* **[client-v2]** ブロック設定の変更後、画面が更新されない問題を修正しました。 ([#9843](https://github.com/nocobase/nocobase/pull/9843)) by @gchust
* **[ワークフロー：カスタム操作イベント]**
  * v2 のワークフローをトリガーするボタンで、カスタムコンテキストのリクエストボディを送信する前にフロントエンド変数が解析されない問題を修正しました。 ([#9853](https://github.com/nocobase/nocobase/pull/9853)) by @mytharcher
  * v2 のカスタム操作に紐づくワークフローセレクターのフィルターリクエストを修正しました。有効状態がブール値でフィルターされ、ワークフローが正しく一覧表示されるようになりました。 ([#9865](https://github.com/nocobase/nocobase/pull/9865)) by @mytharcher
* **[ブロック：ガントチャート]** ガントチャートのタスクポップアップテンプレート設定が正しく反映されない、またはクリアできない問題を修正しました。 ([#9835](https://github.com/nocobase/nocobase/pull/9835)) by @jiannx
* **[ワークフロー：承認]**
  * 承認アクションノードの検証を修正しました。`applyDetail` または `approvalUid` に `null` を渡せるようにし、文字列参照が渡された場合のみ処理するようにしました。 by @mytharcher
  * 関連する承認が初回に読み込まれない、または更新後にタイムラインが更新されない問題を修正しました。 by @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.2.0-beta.7](https://www.nocobase.com/ja/blog/v2.2.0-beta.7)

*リリース日：2026-06-25*

### 🎉 新機能

* **[ai]** リモート MCP クライアントの URL とリクエストヘッダーで、現在のユーザー変数を使用できるようにしました。 ([#9828](https://github.com/nocobase/nocobase/pull/9828)) by @cgyrock

### 🚀 機能改善

* **[client-v2]**
  * Client V2 のプラグイン管理カードで、プラグインが共有設定パスまたは旧設定パスを使用している場合に、Settings への入口が表示されない問題を修正しました。 ([#9852](https://github.com/nocobase/nocobase/pull/9852)) by @katherinehhh
  * v2 のシステム設定メニューの順序とページパネルの高さを調整し、設定センターの統一レイアウトに合わせました。 ([#9849](https://github.com/nocobase/nocobase/pull/9849)) by @katherinehhh
* **[バックアップマネージャー]**
  * バージョン管理で選択したデータテーブルをバックアップする際、ビューや関連するデータベースオブジェクトが含まれていると復元に失敗する問題を修正しました。 ([#9827](https://github.com/nocobase/nocobase/pull/9827)) by @cgyrock
  * バックアップ管理テーブルのスタイルと、長いファイル名の表示を改善しました。 ([#9864](https://github.com/nocobase/nocobase/pull/9864)) by @katherinehhh
* **[公開フォーム]** V1 と V2 の公開フォーム一覧を区別し、V2 の Configure から設定可能なフォーム詳細ページを開けるようにしました。 ([#9851](https://github.com/nocobase/nocobase/pull/9851)) by @katherinehhh
* **[ユーザーデータ同期]** ユーザーデータ同期設定の新しい画面に対応しました。 ([#9837](https://github.com/nocobase/nocobase/pull/9837)) by @2013xile
* **[WeCom]** WeCom の認証、同期、通知設定の新しい画面に対応しました。 by @2013xile
* **[DingTalk]** DingTalk の認証、同期、通知設定の新しい画面に対応しました。 by @2013xile

### 🐛 不具合修正

* **[flow-engine]**
  * フィールド幅を調整する際、詳細ポップアップが予期せず閉じる問題を修正しました。 ([#9850](https://github.com/nocobase/nocobase/pull/9850)) by @zhangzhonghe
  * フィールドをドラッグした後、ブロックツールバーが再表示されない場合がある問題を修正しました。 ([#9848](https://github.com/nocobase/nocobase/pull/9848)) by @zhangzhonghe
* **[client-v2]**
  * 複合ロールが v2 で変数として正しく解析されない問題を修正しました。 ([#9611](https://github.com/nocobase/nocobase/pull/9611)) by @gchust
  * フィルターフォームで、表示されている関連テーブルのフィールドに値を設定できない問題を修正しました。 ([#9875](https://github.com/nocobase/nocobase/pull/9875)) by @zhangzhonghe
* **[cli]** source dev の依存関係を最適化しました。 ([#9882](https://github.com/nocobase/nocobase/pull/9882)) by @chenos
* **[ai]** 現在のユーザーに依存する MCP 設定で NocoBase リクエスト変数を使用できるようにし、ユーザー単位の MCP 接続失敗が AIワーカーの通常の会話に影響しないようにしました。 ([#9888](https://github.com/nocobase/nocobase/pull/9888)) by @cgyrock
* **[UI テンプレート]** リレーションフィールドのブロックテンプレートが使用できない問題を修正しました。 ([#9406](https://github.com/nocobase/nocobase/pull/9406)) by @gchust
* **[データソース管理]** v2 データソース内で、主キーまたはレコードの一意識別子がないデータテーブルに対して、案内メッセージとクイック設定を追加しました。 ([#9872](https://github.com/nocobase/nocobase/pull/9872)) by @katherinehhh
* **[埋め込み NocoBase]** v2 の埋め込みページで URL token が削除された後、ページを更新すると token によるアクセス状態が失われる問題を修正しました。 ([#9857](https://github.com/nocobase/nocobase/pull/9857)) by @katherinehhh
* **[ワークフロー：カスタム操作イベント]**
  * v2 のカスタム操作に紐づくワークフローセレクターのフィルターリクエストを修正しました。有効状態がブール値でフィルターされ、ワークフローが正しく一覧表示されるようになりました。 ([#9865](https://github.com/nocobase/nocobase/pull/9865)) by @mytharcher
  * v2 のワークフローをトリガーするボタンで、カスタムコンテキストのリクエストボディを送信する前にフロントエンド変数が解析されない問題を修正しました。 ([#9853](https://github.com/nocobase/nocobase/pull/9853)) by @mytharcher
* **[マルチスペース]** スペース設定ページで、最初の 20 件のスペースレコードしか読み込めない問題を修正しました。 by @jiannx
* **[バージョン管理]** バージョン管理で選択したデータテーブルをバックアップする際、ビューや関連するデータベースオブジェクトが含まれていると復元に失敗する問題を修正しました。 by @cgyrock
* **[AI: ナレッジベース]** AI ナレッジベースのドキュメントテーブルとヒットテスト結果カードで、狭い画面や長いファイル名の場合に内容がはみ出す問題を修正しました。 by @cgyrock
* **[ワークフロー：承認]** 承認アクションノードの検証を修正しました。`applyDetail` または `approvalUid` に `null` を渡せるようにし、文字列参照が渡された場合のみ処理するようにしました。 by @mytharcher


### [v2.2.0-beta.6](https://www.nocobase.com/ja/blog/v2.2.0-beta.6)

*リリース日：2026-06-22*

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.2.0-alpha.2](https://www.nocobase.com/ja/blog/v2.2.0-alpha.2)

*リリース日：2026-06-26*

### 🎉 新機能

* **[client-v2]** legacy と modern のルーティング設定用環境変数を追加しました。 ([#9891](https://github.com/nocobase/nocobase/pull/9891)) by @Molunerfinn
* **[ai]** リモート MCP クライアントの URL とリクエストヘッダーで、現在のユーザー変数を使用できるようにしました。 ([#9828](https://github.com/nocobase/nocobase/pull/9828)) by @cgyrock
* **[cli]** nb init で --hook-script に対応しました。 ([#9824](https://github.com/nocobase/nocobase/pull/9824)) by @chenos
* **[通知：メール]** ワークフロー通知ノードのクライアントを v2 に移行しました。チャネル別の通知設定フォームを復元し、移行済みの通知設定についても旧版ワークフロールートとの互換性を維持しました。 ([#9817](https://github.com/nocobase/nocobase/pull/9817)) by @jiannx
* **[ワークフロー：メール送信ノード]**
  * ワークフローのメール送信ノード設定で、v2 クライアントに対応しました。 ([#9825](https://github.com/nocobase/nocobase/pull/9825)) by @jiannx
  * ワークフローのメールノードで、添付ファイルを送信できるようにしました。 ([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher
* **[UI レイアウト]** モバイルレイアウトに対応しました。 ([#9641](https://github.com/nocobase/nocobase/pull/9641)) by @zhangzhonghe
* **[バックアップマネージャー]** KingBase プライマリデータベースのバックアップとリストアに対応しました。 ([#9791](https://github.com/nocobase/nocobase/pull/9791)) by @2013xile
* **[ワークフロー]**
  * ワークフロー設定ページを v2 クライアントに移行し、再利用可能なドラッグ対応のカテゴリタブコンポーネントを `@nocobase/client-v2` に切り出しました。 ([#9645](https://github.com/nocobase/nocobase/pull/9645)) by @Molunerfinn
  * ワークフローでデータベーストランザクションスコープに対応しました。 ([#9742](https://github.com/nocobase/nocobase/pull/9742)) by @mytharcher
    参考ドキュメント：[データベーストランザクション](docs/docs/cn/workflow/nodes/transaction.md)
* **[AIワーカー]**
  * AI ナレッジベースに、外部ベクトルストレージの設定フォームを追加しました。 ([#9723](https://github.com/nocobase/nocobase/pull/9723)) by @cgyrock
* **[マルチワークスペース]** マルチワークスペースプラグインを追加しました。 by @zhangzhonghe
* **[ワークフロー：データベーストランザクションノード]**
  * ワークフローのデータベーストランザクションノードに client-v2 実装を追加し、旧版クライアントとの互換用入口も残しました。 by @katherinehhh
  * データベーストランザクション用のワークフローノードプラグインを追加しました。 by @mytharcher
* **[AI: ナレッジベース]** AI ナレッジベースに、外部ベクトルストレージの設定フォームを追加しました。 by @cgyrock
* **[マイグレーション管理]** KingBase プライマリデータベースのマイグレーションに対応しました。 by @2013xile
* **[メール管理]** メール管理クライアントを v2 に移行しました。 by @jiannx

### 🚀 機能改善

* **[undefined]**
  * ロシア語ドキュメントの翻訳を改善し、表現、可読性、用語の一貫性を向上しました。 ([#9816](https://github.com/nocobase/nocobase/pull/9816)) by @sembaev-a-a
  * AI ナレッジベースの検索と関連ドキュメントを改善しました。 ([#9765](https://github.com/nocobase/nocobase/pull/9765)) by @cgyrock
  * バージョン管理プラグインの中国語ドキュメント名を「版本控制」に統一しました。 ([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock
  * * ([#9754](https://github.com/nocobase/nocobase/pull/9754)) by @sembaev-a-a
  * AI 構築の概要ページに、バージョン管理に関する対話シーンを追加しました。 ([#9748](https://github.com/nocobase/nocobase/pull/9748)) by @Molunerfinn
    参考ドキュメント：[AI 構築クイックスタート](https://docs.nocobase.com/cn/ai-builder)
  * バージョン管理ドキュメントを整備し、AI 構築でバージョンが自動保存される仕組みの説明を追加しました。 ([#9745](https://github.com/nocobase/nocobase/pull/9745)) by @cgyrock
    参考ドキュメント：[バージョン管理](docs/docs/cn/ops-management/version-control/index.md)
* **[flow-engine]** RunJS がリソース API でデータを更新した後、ポップアップを閉じた際に関連データブロックが自動更新されるようにしました。 ([#9873](https://github.com/nocobase/nocobase/pull/9873)) by @gchust
* **[client-v2]**
  * Client V2 のプラグイン管理カードで、プラグインが共有設定パスまたは旧設定パスを使用している場合に、Settings への入口が表示されない問題を修正しました。 ([#9852](https://github.com/nocobase/nocobase/pull/9852)) by @katherinehhh
  * v2 のシステム設定メニューの順序とページパネルの高さを調整し、設定センターの統一レイアウトに合わせました。 ([#9849](https://github.com/nocobase/nocobase/pull/9849)) by @katherinehhh
  * UI のフィールド検証設定で、フィールドレベルの検証ルールを読み取り専用の継承ルールとして表示するようにしました。 ([#9819](https://github.com/nocobase/nocobase/pull/9819)) by @katherinehhh
  * フォーム値の設定に、値を上書きするオプションを追加しました。 ([#9578](https://github.com/nocobase/nocobase/pull/9578)) by @gchust
  * フォームのサブテーブルにあるリレーションフィールド列のデータ範囲で、現在の項目変数を使用できるようにしました。 ([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust
* **[cli]**
  * env 設定に schema バージョンの記録を追加しました。 ([#9782](https://github.com/nocobase/nocobase/pull/9782)) by @chenos
  * 異なる形式のバージョン番号に対する互換性判定を改善しました。 ([#9763](https://github.com/nocobase/nocobase/pull/9763)) by @chenos
  * skills で、指定したバージョンへの更新に対応しました。 ([#9760](https://github.com/nocobase/nocobase/pull/9760)) by @chenos
  * 初期設定時のテキストを改善しました。 ([#9750](https://github.com/nocobase/nocobase/pull/9750)) by @chenos
* **[ワークフロー：JSON 計算]** ワークフローの JSON 計算ノード設定画面を v2 ワークフローキャンバスに移行し、v1 キャンバスとの互換性も維持しました。 ([#9902](https://github.com/nocobase/nocobase/pull/9902)) by @mytharcher
* **[ワークフロー]**
  * ワークフロー v2 の作成/更新ノードで、フィールド代入設定を簡略化しました。選択済み変数の表示を改善し、未使用の代入フォームモデルデータが生成されないようにしました。 ([#9887](https://github.com/nocobase/nocobase/pull/9887)) by @katherinehhh
  * ワークフロー v2 キャンバスの拡張 API をエクスポートし、下流のワークフローノードプラグインで再利用できるようにしました。 ([#9834](https://github.com/nocobase/nocobase/pull/9834)) by @katherinehhh
  * テストケースの安定性を向上しました。 ([#9773](https://github.com/nocobase/nocobase/pull/9773)) by @mytharcher
  * ワークフロー出力ノードの設定を v2 に移行し、v2 のワークフロー結果ビューアでも旧版の文字列結果と同じ表示挙動になるようにしました。 ([#9813](https://github.com/nocobase/nocobase/pull/9813)) by @Molunerfinn
  * ワークフローの終了ノードを v2 に移行しました。 ([#9795](https://github.com/nocobase/nocobase/pull/9795)) by @Molunerfinn
  * ワークフローメタデータの編集体験を改善しました。詳細ポップアップで説明を編集できるようにし、ワークフローをコピーする際には元ワークフローのメタデータがデフォルトで入力されるようにしました。 ([#9766](https://github.com/nocobase/nocobase/pull/9766)) by @mytharcher
* **[バックアップマネージャー]**
  * バージョン管理で選択したデータテーブルをバックアップする際、ビューや関連するデータベースオブジェクトが含まれていると復元に失敗する問題を修正しました。 ([#9827](https://github.com/nocobase/nocobase/pull/9827)) by @cgyrock
  * バックアップ管理テーブルのスタイルと、長いファイル名の表示を改善しました。 ([#9864](https://github.com/nocobase/nocobase/pull/9864)) by @katherinehhh
  * `dataCategory` が `'runtime'` に設定されたデータテーブルは、バックアップ対象から自動的に除外されるようになりました。 ([#9804](https://github.com/nocobase/nocobase/pull/9804)) by @cgyrock
  * `dataCategory` が `'runtime'` に設定されたデータテーブルは、バックアップ対象から自動的に除外されるようになりました。 ([#9804](https://github.com/nocobase/nocobase/pull/9804)) by @cgyrock
* **[公開フォーム]** V1 と V2 の公開フォーム一覧を区別し、V2 の Configure から設定可能なフォーム詳細ページを開けるようにしました。 ([#9851](https://github.com/nocobase/nocobase/pull/9851)) by @katherinehhh
* **[ワークフロー：カスタム操作イベント]** ワークフロートリガーとバインド済みワークフロー設定を client-v2 に移行しました。対象には、アクショントリガー、カスタムアクショントリガー、リクエストインターセプトトリガー、送信/更新アクションのワークフローバインド設定が含まれます。 ([#9845](https://github.com/nocobase/nocobase/pull/9845)) by @mytharcher
* **[ユーザーデータ同期]** ユーザーデータ同期設定の新しい画面に対応しました。 ([#9837](https://github.com/nocobase/nocobase/pull/9837)) by @2013xile
* **[フロントエンドフローエンジン]**
  * runjs の実行環境に関する制限を緩和しました。 ([#9841](https://github.com/nocobase/nocobase/pull/9841)) by @gchust
  * FlowSurface API を使って AIワーカーを構築する際、現在のブロックをデフォルトでユーザーコンテキストに追加するようにしました。 ([#9840](https://github.com/nocobase/nocobase/pull/9840)) by @gchust
* **[ワークフロー：HTTP リクエストノード]** ワークフローの HTTP リクエストノードを client-v2 に移行しました。 ([#9806](https://github.com/nocobase/nocobase/pull/9806)) by @jiannx
* **[権限制御]** v2 のユーザー設定ページと権限設定ページの挙動を v1 と揃えました。ページネーションの総数表示、部門ツリーの操作、選択時のスタイル、権限パネル内のスクロールが含まれます。 ([#9810](https://github.com/nocobase/nocobase/pull/9810)) by @jiannx
* **[ワークフロー：JavaScript ノード]** JavaScript ワークフローノードを client-v2 に移行しました。 ([#9805](https://github.com/nocobase/nocobase/pull/9805)) by @jiannx
* **[ファイルマネージャー]**
  * PDF プレビューを改善しました。クロスオリジンの PDF ファイルはブラウザ標準のプレビューを使用し、同一オリジンの PDF ファイルは引き続き PDF.js でレンダリングします。 ([#9796](https://github.com/nocobase/nocobase/pull/9796)) by @mytharcher
  * ファイルマネージャーの PDF プレビューでテキスト選択に対応しました。埋め込みテキストを含む PDF で利用できます。 ([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher
* **[ユーザー]** ユーザーと権限の v2 ページレイアウト、および部門ツリーの挙動を改善しました。 ([#9780](https://github.com/nocobase/nocobase/pull/9780)) by @jiannx
* **[操作：一括編集]** v2 操作プラグインの読み込み方式を改善し、移行済みの操作ボタンの順序が安定するようにしました。 ([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh
* **[操作：レコードインポート]** インポートと非同期タスクのエラー詳細ポップアップを改善しました。長いエラー情報を最後まで確認でき、レイアウトも崩れないようにしました。 ([#9746](https://github.com/nocobase/nocobase/pull/9746)) by @katherinehhh
* **[翻訳テストツール]** 翻訳テストツールに client v2 の設定ページを追加しました。 ([#9744](https://github.com/nocobase/nocobase/pull/9744)) by @jiannx
* **[バージョン管理]** バージョン管理プラグインの中国語表示名を「版本控制」に変更しました。 by @cgyrock
* **[操作：レコードインポート Pro]** インポートポップアップを改善しました。長いエラー情報を最後まで確認でき、v2 設定メニューから処理モードを直接選択できるようにしました。 by @katherinehhh
* **[AI: ナレッジベース]** AI ナレッジベースのドキュメント分割、分割管理、ヒットテスト、ドキュメントワークフローノードのサポートを改善しました。 by @cgyrock
* **[WeCom]** WeCom の認証、同期、通知設定の新しい画面に対応しました。 by @2013xile
* **[DingTalk]** DingTalk の認証、同期、通知設定の新しい画面に対応しました。 by @2013xile

### 🐛 不具合修正

* **[client-v2]**
  * UI 設定モードでページを更新した際、「ページがありません」という案内が一瞬表示される問題を修正しました。 ([#9918](https://github.com/nocobase/nocobase/pull/9918)) by @katherinehhh
  * v2 フォームの送信成功後、遷移リンクから保存済みのレスポンス結果レコードを参照できない問題を修正しました。 ([#9907](https://github.com/nocobase/nocobase/pull/9907)) by @katherinehhh
  * テーブルブロック設定で、ドラッグソート用フィールドが削除された後に実行エラーが発生する問題を修正しました。また、ドラッグソート用フィールド設定をクリアできるようにしました。 ([#9867](https://github.com/nocobase/nocobase/pull/9867)) by @jiannx
  * v2 のテーブル行操作ボタンによって行の高さが変わる問題を修正しました。 ([#9866](https://github.com/nocobase/nocobase/pull/9866)) by @jiannx
  * フィルターフォームで、表示されている関連テーブルのフィールドに値を設定できない問題を修正しました。 ([#9875](https://github.com/nocobase/nocobase/pull/9875)) by @zhangzhonghe
  * 複合ロールが v2 で変数として正しく解析されない問題を修正しました。 ([#9611](https://github.com/nocobase/nocobase/pull/9611)) by @gchust
  * ブロック設定の変更後、画面が更新されない問題を修正しました。 ([#9843](https://github.com/nocobase/nocobase/pull/9843)) by @gchust
  * カスタム操作のワークフロートリガーボタンで、カスタムコンテキスト JSON が余分な `values` 階層に入ったり、シリアライズされた文字列として送信されたりする問題を修正しました。 ([#9815](https://github.com/nocobase/nocobase/pull/9815)) by @mytharcher
  * 固定値またはデフォルト値にリレーションフィールドの値を設定した場合に、設定が有効にならない問題を修正しました。 ([#9820](https://github.com/nocobase/nocobase/pull/9820)) by @gchust
  * サブテーブル列のイベントフローが正しく実行されない問題を修正しました。 ([#9821](https://github.com/nocobase/nocobase/pull/9821)) by @gchust
  * リレーションフィールドに不要な `updateAssociationValues` が含まれる問題を修正しました。 ([#9812](https://github.com/nocobase/nocobase/pull/9812)) by @katherinehhh
  * サブフォームにサブテーブルが含まれる場合、フォーム送信時にエラーが発生する問題を修正しました。 ([#9807](https://github.com/nocobase/nocobase/pull/9807)) by @gchust
  * v2 のフィルターフォームで、チェックボックスのドロップダウン選択肢に翻訳テキストが表示されない問題を修正しました。 ([#9792](https://github.com/nocobase/nocobase/pull/9792)) by @katherinehhh
  * v2 のテーブルリレーションフィールドで、タイトルフィールドに時刻、日付、日時フィールドを使用した場合、表示とフォーマット設定が正しくない問題を修正しました。 ([#9785](https://github.com/nocobase/nocobase/pull/9785)) by @katherinehhh
  * ブロックをテンプレートに変換した後、イベントフロー設定を変更できなくなる問題を修正しました。 ([#9585](https://github.com/nocobase/nocobase/pull/9585)) by @gchust
  * マイグレーション進捗で専用の進捗ビューが表示されない問題を修正しました。 ([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile
  * v2 ページで、ログイン後に読み込み状態が続く問題を修正しました。 ([#9738](https://github.com/nocobase/nocobase/pull/9738)) by @zhangzhonghe
* **[cli]**
  * cli で pnpm と yarn による更新に対応しました。 ([#9912](https://github.com/nocobase/nocobase/pull/9912)) by @chenos
  * source dev の依存関係を最適化しました。 ([#9882](https://github.com/nocobase/nocobase/pull/9882)) by @chenos
  * nb の実行環境で node バージョンを検出するようにしました。 ([#9749](https://github.com/nocobase/nocobase/pull/9749)) by @chenos
* **[client]**
  * 一部の文言ミスを修正しました。 ([#9905](https://github.com/nocobase/nocobase/pull/9905)) by @Molunerfinn
  * 横向きサブフォームでフィールド幅が狭すぎる場合に、データが表示されない問題を修正しました。 ([#9755](https://github.com/nocobase/nocobase/pull/9755)) by @zhangzhonghe
* **[flow-engine]**
  * runjs で ctx.openView の一部パラメータが有効にならない問題を修正しました。 ([#9883](https://github.com/nocobase/nocobase/pull/9883)) by @gchust
  * フィールド幅を調整する際、詳細ポップアップが予期せず閉じる問題を修正しました。 ([#9850](https://github.com/nocobase/nocobase/pull/9850)) by @zhangzhonghe
  * フィールドをドラッグした後、ブロックツールバーが再表示されない場合がある問題を修正しました。 ([#9848](https://github.com/nocobase/nocobase/pull/9848)) by @zhangzhonghe
  * v2 の単一行テキストフィールドと複数行テキストフィールドで、ベトナム語 IME と中国語 IME の入力に関する問題を修正しました。 ([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh
* **[ai]**
  * 現在のユーザーに依存する MCP 設定で NocoBase リクエスト変数を使用できるようにし、ユーザー単位の MCP 接続失敗が AIワーカーの通常の会話に影響しないようにしました。 ([#9888](https://github.com/nocobase/nocobase/pull/9888)) by @cgyrock
  * AI プラグインで、LangChain 依存関係のバージョン解決に互換性がない問題を修正しました。 ([#9831](https://github.com/nocobase/nocobase/pull/9831)) by @cgyrock
  * AI 関連パッケージ内の `@langchain/openai` について、パッチバージョンのみ更新できるように固定しました。 ([#9829](https://github.com/nocobase/nocobase/pull/9829)) by @cgyrock
* **[app]** プラグインの public path を推定する際、無関係な currentScript が使用されないようにしました。 ([#9839](https://github.com/nocobase/nocobase/pull/9839)) by @chenos
* **[auth]** ログイン状態のレスポンスに、暗号化されたパスワードデータが含まれないようにしました。 ([#9836](https://github.com/nocobase/nocobase/pull/9836)) by @2013xile
* **[cli-v1]** create-nocobase-app で作成したプロジェクトを 2.0 から 2.1 にアップグレードした後、yarn dev 実行時にエラーが発生する問題を修正しました。 ([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn
* **[server]**`pm:enable` で安全でないプラグイン名が処理される問題を修正し、プラグイン解析時にローカルファイルインクルードのリスクが発生しないようにしました。 ([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher
* **[バックアップマネージャー]**
  * v2 バックアップマネージャーの設定ページで、ラベルが不自然に太字になり、他の設定ページとスタイルが一致しない問題を修正しました。 ([#9908](https://github.com/nocobase/nocobase/pull/9908)) by @katherinehhh
  * バックアップ復元時に、安全でない PostgreSQL schema 名を受け入れる可能性があるセキュリティ問題を修正しました。 ([#9758](https://github.com/nocobase/nocobase/pull/9758)) by @2013xile
* **[AIワーカー]**
  * 異常なツール呼び出し履歴が後続の会話で繰り返し送信され、AIワーカーの返信が失敗する問題を修正しました。 ([#9900](https://github.com/nocobase/nocobase/pull/9900)) by @cgyrock
  * AIワーカーのクイックエントリからタスクを起動する際、現在の作業コンテキストに含まれる添付ファイルが渡されない問題を修正しました。 ([#9808](https://github.com/nocobase/nocobase/pull/9808)) by @cgyrock
  * AIワーカーがサブテーブルデータを正しく入力できない問題を修正しました。 ([#9801](https://github.com/nocobase/nocobase/pull/9801)) by @gchust
  * ワークフロー LLM ノードのメッセージ設定が失われる問題を修正しました。 ([#9743](https://github.com/nocobase/nocobase/pull/9743)) by @cgyrock
  * AIワーカーのダイアログに貼り付けた添付ファイルを削除できない問題を修正しました。 ([#9753](https://github.com/nocobase/nocobase/pull/9753)) by @cgyrock
* **[ワークフロー]**
  * ワークフロー v2 のノード追加メニューで、ワークフローと分岐ルールに基づいて使用できないノードタイプが無効化されない問題を修正しました。 ([#9855](https://github.com/nocobase/nocobase/pull/9855)) by @mytharcher
  * ワークフローのコレクショントリガーを手動実行する際のデバウンス付きリモート検索を復元し、このセレクターの挙動を v1 の 200 件取得と一致させました。 ([#9870](https://github.com/nocobase/nocobase/pull/9870)) by @Molunerfinn
  * ワークフロースケジューラーがスケジュール異常後に正しく復旧できない問題を修正しました。 ([#9783](https://github.com/nocobase/nocobase/pull/9783)) by @mytharcher
  * ワークフローノードを変更した後、ワークフローの最終更新者が同期されない問題を修正しました。 ([#9769](https://github.com/nocobase/nocobase/pull/9769)) by @mytharcher
  * ワークフローのタイムアウト処理を修正し、中止済みの実行とその保留中タスクをアトミックに更新できるようにしました。 ([#9768](https://github.com/nocobase/nocobase/pull/9768)) by @mytharcher
* **[ブロック：iframe]** 一般ユーザーが v2 の iframe HTML モードブロックを表示した際に 403 エラーになる問題を修正しました。 ([#9889](https://github.com/nocobase/nocobase/pull/9889)) by @jiannx
* **[UI テンプレート]**
  * リレーションフィールドのブロックテンプレートが使用できない問題を修正しました。 ([#9406](https://github.com/nocobase/nocobase/pull/9406)) by @gchust
  * ctx.openview のデフォルトコンテキストが正しくない問題を修正しました。 ([#9811](https://github.com/nocobase/nocobase/pull/9811)) by @gchust
* **[ワークフロー：カスタム操作イベント]**
  * v2 のカスタム操作に紐づくワークフローセレクターのフィルターリクエストを修正しました。有効状態がブール値でフィルターされ、ワークフローが正しく一覧表示されるようになりました。 ([#9865](https://github.com/nocobase/nocobase/pull/9865)) by @mytharcher
  * v2 のワークフローをトリガーするボタンで、カスタムコンテキストのリクエストボディを送信する前にフロントエンド変数が解析されない問題を修正しました。 ([#9853](https://github.com/nocobase/nocobase/pull/9853)) by @mytharcher
  * 操作パネル v2 のワークフロートリガーボタンで、ワークフローがバインドされていない場合でも成功メッセージが表示され、リクエストが送信される問題を修正しました。 ([#9798](https://github.com/nocobase/nocobase/pull/9798)) by @mytharcher
* **[データソース管理]**
  * v2 データソース内で、主キーまたはレコードの一意識別子がないデータテーブルに対して、案内メッセージとクイック設定を追加しました。 ([#9872](https://github.com/nocobase/nocobase/pull/9872)) by @katherinehhh
  * v1 のデータソース管理で現在のコレクションカテゴリを削除した後、All collections タブが空で表示される場合がある問題を修正しました。 ([#9757](https://github.com/nocobase/nocobase/pull/9757)) by @katherinehhh
  * v1 外部データソースの Configure fields ページで繰り返し再レンダリングが発生し、フィールド編集ポップアップの内容が空になる問題を修正しました。 ([#9759](https://github.com/nocobase/nocobase/pull/9759)) by @katherinehhh
* **[ワークフロー：メール送信ノード]** ワークフロー v2 のテストが、ワークフロートリガー操作の登録に関する mock 不足によって失敗する問題を修正しました。 ([#9863](https://github.com/nocobase/nocobase/pull/9863)) by @jiannx
* **[埋め込み NocoBase]** v2 の埋め込みページで URL token が削除された後、ページを更新すると token によるアクセス状態が失われる問題を修正しました。 ([#9857](https://github.com/nocobase/nocobase/pull/9857)) by @katherinehhh
* **[ワークフロー：レスポンスメッセージ]** ワークフローのレスポンスメッセージノードを v2 キャンバスに移行し、サポートされていないワークフロータイプでもこのノードを追加できる問題を修正しました。 ([#9830](https://github.com/nocobase/nocobase/pull/9830)) by @jiannx
* **[ブロック：ガントチャート]** ガントチャートのタスクポップアップテンプレート設定が正しく反映されない、またはクリアできない問題を修正しました。 ([#9835](https://github.com/nocobase/nocobase/pull/9835)) by @jiannx
* **[操作：印刷]** v2 の詳細ブロックが空の場合にページ全体が印刷される問題を修正しました。空の詳細ブロックでは、ナビゲーションとサイドバーが印刷されないようになりました。 ([#9832](https://github.com/nocobase/nocobase/pull/9832)) by @katherinehhh
* **[ワークフロー：JavaScript ノード]** 旧版ワークフロークライアントで JavaScript ノードの登録に失敗する問題を修正しました。 ([#9826](https://github.com/nocobase/nocobase/pull/9826)) by @jiannx
* **[ファイルマネージャー]**
  * 外部データソースの添付 URL フィールドでファイルをアップロードする際、API が 404 を返す問題を修正しました。 ([#9809](https://github.com/nocobase/nocobase/pull/9809)) by @2013xile
  * pdf.js worker モジュールの読み込み異常により、PDF プレビューに失敗する問題を修正しました。 ([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher
  * pdf.js に切り替えた後、一部の PDF プレビューで中国語/CID フォントの文字が欠落する問題を修正しました。 ([#9737](https://github.com/nocobase/nocobase/pull/9737)) by @mytharcher
* **[操作：カスタムリクエスト]** V2 のカスタムリクエスト操作でリクエスト設定が未設定の場合、不要なエラーメッセージが表示される問題を修正しました。 ([#9802](https://github.com/nocobase/nocobase/pull/9802)) by @katherinehhh
* **[フロントエンドフローエンジン]** AI 構築時に、ポップアップ内の現在のレコードフォームと詳細データが正しくない問題を修正しました。 ([#9788](https://github.com/nocobase/nocobase/pull/9788)) by @gchust
* **[非同期タスクマネージャー]**
  * 非同期タスクのファイルダウンロード時に `filterByTk` が欠落し、データベースクエリでエラーが発生する問題を修正しました。 ([#9705](https://github.com/nocobase/nocobase/pull/9705)) by @mytharcher
  * 非同期タスク worker ログ内のリクエスト ID が誤っている問題を修正しました。 ([#9686](https://github.com/nocobase/nocobase/pull/9686)) by @2013xile
* **[操作：レコードインポート]** インポート時にアップロードされたファイルをディスク保存に変更し、大量データをインポートする際のメモリ負荷を軽減しました。 ([#9739](https://github.com/nocobase/nocobase/pull/9739)) by @mytharcher
* **[ワークフロー：SQL ノード]** 一部の beta バージョンユーザーで、SQL ワークフローの履歴テンプレート変数マイグレーションがスキップされる問題を修正しました。 ([#9762](https://github.com/nocobase/nocobase/pull/9762)) by @mytharcher
* **[ブロック：カンバン]**
  * 非編集状態でカレンダー、ガントチャート、カンバンブロックを開いた際、非表示ポップアップ操作が意図せず永続化され、削除リクエストが繰り返し送信される問題を修正しました。 ([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx
  * カレンダーなどのポップアップで URL が正しくサポートされない問題を修正しました。 ([#9751](https://github.com/nocobase/nocobase/pull/9751)) by @jiannx
* **[API ドキュメント]** API ドキュメントプラグインの宣言ファイルのビルドに失敗する問題を修正しました。 ([#9752](https://github.com/nocobase/nocobase/pull/9752)) by @katherinehhh
* **[バージョン管理]**
  * バージョン管理で選択したデータテーブルをバックアップする際、ビューや関連するデータベースオブジェクトが含まれていると復元に失敗する問題を修正しました。 by @cgyrock
  * バージョン管理上部のショートカット入口の位置を調整し、旧版と v2 の管理レイアウトのどちらでも UI エディターの隣に表示されるようにしました。 by @cgyrock
* **[AI: ナレッジベース]**
  * AI ナレッジベースのドキュメントテーブルとヒットテスト結果カードで、狭い画面や長いファイル名の場合に内容がはみ出す問題を修正しました。 by @cgyrock
  * AI ナレッジベースプラグインで、LangChain 依存関係のバージョン解決に互換性がない問題を修正しました。 by @cgyrock
  * AI プラグインが有効になっていない状態で AI ナレッジベースプラグインを有効化した場合、エラー内容が分かりにくい問題を修正しました。 by @cgyrock
* **[マルチスペース]**
  * スペース設定ページで、最初の 20 件のスペースレコードしか読み込めない問題を修正しました。 by @jiannx
  * 認証復旧リクエストが、期限切れのマルチスペースリクエストヘッダーによってブロックされる問題を修正しました。 by @jiannx
  * スペース管理者にユーザーメールフィールドの権限がない場合、スペースユーザーの追加時に権限エラーが発生する問題を修正しました。 by @jiannx
* **[データソース：外部 NocoBase]** アップロード先のデータソースに基づき、NocoBase 外部データソースのファイルアップロード API とストレージ API をプロキシするようにしました。 by @2013xile
* **[操作：レコードエクスポート Pro]** v2 のインポート/エクスポート Pro における処理モード設定と案内文を改善しました。 by @katherinehhh
* **[操作：レコードインポート Pro]** Pro インポートで、非同期タスクを作成する前にリクエストノードで大容量ファイルが解析されないようにしました。 by @mytharcher
* **[ワークフロー：サブプロセス]** 非同期サブプロセスで、サービス再起動またはメモリ内のイベントマッピング消失後に、親プロセスが実行を継続できない問題を修正しました。 by @mytharcher
* **[マイグレーション管理]** 大容量のマイグレーションデータファイルをインポートする際、失敗する可能性がある問題を修正しました。 by @2013xile
* **[テンプレート印刷]** テンプレート印刷を開始する前に、サポートされていないテンプレートファイル形式を拒否するようにしました。 by @2013xile
* **[ワークフロー：承認]**
  * 承認アクションノードの検証を修正しました。`applyDetail` または `approvalUid` に `null` を渡せるようにし、文字列参照が渡された場合のみ処理するようにしました。 by @mytharcher
  * 関連する承認が初回に読み込まれない、または更新後にタイムラインが更新されない問題を修正しました。 by @zhangzhonghe
  * v2 の承認フォームで、関連データが表示されない問題を修正しました。 by @zhangzhonghe
* **[アプリケーションスーパーバイザー]** リモート WebSocket プロキシの応答に失敗した際、サービスがクラッシュする可能性がある問題を修正しました。 by @2013xile
