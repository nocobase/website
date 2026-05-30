### 🎉 新機能

- **[cli]** API コマンドの互換性ルールを追加しました。 ([#9613](https://github.com/nocobase/nocobase/pull/9613)) by @chenos
- **[client-v2]**

  - 埋め込み v2 ページと公開フォーム v2 ページをサポートしました。 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) by @zhangzhonghe
  - client-v2 のプラグイン管理ページをレスポンシブなカードレイアウトに刷新し、カテゴリフィルター、検索、有効化/無効化/削除、一括有効化、プラグイン詳細ポップアップに対応しました。同時に、client-v1 のプラグイン管理ページにも狭い画面向けのレスポンシブレイアウトを追加しました。 ([#9573](https://github.com/nocobase/nocobase/pull/9573)) by @Molunerfinn
- **[Workflow]**

  - ワークフローにタイムアウト制御を追加しました。タイムアウトオプションを設定すると、実行時間が超過したワークフローは自動的に終了されます。 ([#9363](https://github.com/nocobase/nocobase/pull/9363)) by @mytharcher
  - 開始済みのワークフロー実行を、先頭ノードまたは指定したノードから再実行するための管理者 API を追加しました。 ([#9569](https://github.com/nocobase/nocobase/pull/9569)) by @mytharcher
- **[Block: Gantt]** ガントブロックの v2 サポートを追加しました。 ([#9545](https://github.com/nocobase/nocobase/pull/9545)) by @jiannx
- **[Workflow: Webhook trigger]** タイムアウトした Webhook ワークフロー（同期モード）に 408 レスポンスステータスを追加しました。 by @mytharcher
- **[Workflow: Subflow]** ワークフローのタイムアウト設定をサポートしました。 by @mytharcher
- **[Auth: OIDC]** 迁移 `plugin-auth-oidc` 到 v2 管理端,登录按钮、管理员设置表单和自动 SSO 跳转在 v2 下可用。 by @Molunerfinn
- **[Workflow: Approval]** ワークフローのタイムアウト設定をサポートしました。 by @mytharcher
- **[Auth: LDAP]** LDAP 認証器が v2 アプリでログインフォームと管理設定を正常に表示できるよう、v2 クライアント入口を追加しました。 by @Molunerfinn

### 🚀 機能改善

- **[client-v2]**

  - v2 テーブルブロックに行選択を有効化する設定項目を追加しました。 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) by @katherinehhh
  - v2 アクションパネルでアクションカラーの設定をサポートしました。 ([#9612](https://github.com/nocobase/nocobase/pull/9612)) by @katherinehhh
  - メニュー設定から非表示オプションを削除しました。 ([#9596](https://github.com/nocobase/nocobase/pull/9596)) by @zhangzhonghe
- **[client]** メニュー項目設定から非表示オプションを削除しました。 ([#9595](https://github.com/nocobase/nocobase/pull/9595)) by @zhangzhonghe
- **[cli]** app upgrade フローを改善しました。 ([#9587](https://github.com/nocobase/nocobase/pull/9587)) by @chenos
- **[AI employees]** LLM の Base URL フィールドを改善し、作成フォームと編集フォームの両方でグローバル変数を使用できるようにしました。 ([#9615](https://github.com/nocobase/nocobase/pull/9615)) by @cgyrock
- **[IP restriction]** IP 制限プラグインの v2 版を追加しました。 by @Molunerfinn

### 🐛 不具合修正

- **[flow-engine]**

  - フロントエンドのログレベルが正しくない問題を修正しました。 ([#9577](https://github.com/nocobase/nocobase/pull/9577)) by @gchust
  - 検索ボックス入力時にカスケードメニューが不安定になる問題を修正しました。 ([#9473](https://github.com/nocobase/nocobase/pull/9473)) by @zhangzhonghe
  - ポップアップ内のフォーム送信成功後、テーブルアクション連動ルールが誤って実行される問題を修正しました。 ([#9445](https://github.com/nocobase/nocobase/pull/9445)) by @gchust
- **[ai]** LangChain 関連の依存関係を安定版に固定し、Ollama モデルのツール呼び出しエラーを防ぎ、問題のある上流バージョンを回避しました。 ([#9604](https://github.com/nocobase/nocobase/pull/9604)) by @cgyrock
- **[client-v2]**

  - サブアプリのログインページタブに翻訳テンプレートがそのまま表示される問題を修正し、v2 認証方式の編集ドロワーで送信時にフィールドが欠落する可能性を回避しました。 ([#9581](https://github.com/nocobase/nocobase/pull/9581)) by @Molunerfinn
  - antd Typography の ellipsis 測定ではなく CSS line-clamp を使用することで、プラグイン管理ページのパフォーマンスを改善しました。 ([#9593](https://github.com/nocobase/nocobase/pull/9593)) by @Molunerfinn
- **[client]**

  - v2 の時刻フィールドで、時刻形式の設定が有効にならない問題を修正しました。 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
  - 連動ルールによって表示されたサブフォームフィールドが、送信時に引き続きフィルタリングされる問題を修正しました。 ([#9594](https://github.com/nocobase/nocobase/pull/9594)) by @katherinehhh
  - v1 スキャン入力コンポーネントのファイルアップロード上限を 10 MB に引き上げました。 ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
  - v2 モバイルの日付ポップアップで、フォーム値ではなく現在時刻が使用される問題を修正しました。 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  - メニュー切り替え後にページタブが消える問題を修正しました。 ([#9583](https://github.com/nocobase/nocobase/pull/9583)) by @zhangzhonghe
  - v2 サブフォーム内のサブテーブルで 2 件目のデータを追加できない問題を修正しました。 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  - v1 スキャン入力コンポーネントのファイルアップロード上限を 10 MB に引き上げました。 ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
  - v2 モバイルの日付ポップアップで、フォーム値ではなく現在時刻が使用される問題を修正しました。 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  - v2 サブフォーム内のサブテーブルで 2 件目のデータを追加できない問題を修正しました。 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  - v2 の時刻フィールドで、時刻形式の設定が有効にならない問題を修正しました。 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
- **[Collection: Tree]** ツリー構造データに親子循環がある場合、クエリエラーが不明確になる問題を修正しました。 ([#9603](https://github.com/nocobase/nocobase/pull/9603)) by @zhangzhonghe
- **[Workflow: Custom action event]**

  - 複数行データのコンテキストで、カスタムアクションイベントのテーブルボタンがカスタムコンテキストワークフローを選択できてしまう問題を修正しました。 ([#9608](https://github.com/nocobase/nocobase/pull/9608)) by @mytharcher
  - カスタムアクションイベントにワークフローをバインドする際、現在のブロックのコレクションに基づいて選択可能なワークフローをフィルタリングするようにしました。 ([#9610](https://github.com/nocobase/nocobase/pull/9610)) by @mytharcher
- **[File manager]**

  - PDF プレビュー失敗時のメッセージを改善し、外部ストレージの CORS 設定説明を補足しました。 ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
    参考：[File Preview](docs/docs/cn/file-manager/file-preview/index.md)
  - PDF プレビュー失敗時のメッセージを改善し、外部ストレージの CORS 設定説明を補足しました。 ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
    参考：[File Preview](docs/docs/cn/file-manager/file-preview/index.md)
  - ファイルアップロード時に Unicode ファイル名が誤って二重デコードされる問題を修正し、制御文字を含むオブジェクトキーが生成されないようにしました。 ([#9584](https://github.com/nocobase/nocobase/pull/9584)) by @mytharcher
- **[AI: Knowledge base]** LangChain 関連の依存関係を安定版に固定し、Ollama モデルのツール呼び出しエラーを防ぎ、問題のある上流バージョンを回避しました。 by @cgyrock
- **[Template print]** テンプレート印刷の PDF 変換エラーがフロントエンドに正しく返されない問題を修正しました。 by @jiannx
