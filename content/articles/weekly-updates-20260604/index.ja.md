週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.61](https://www.nocobase.com/ja/blog/v2.0.61)

*リリース日：2026-06-03*

### 🚀 機能改善

- **[client]** 一部の組み込み RunJS 関数の自動補完サポートを強化しました。([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust
- **[undefined]** オープンソースプラグイン向けの Embed NocoBase ドキュメントを更新しました。([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
  参考：[Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)

### 🐛 不具合修正

- **[flow-engine]**

  - サブフォームにフィールド値を設定する際、ページが固まる問題を修正しました。([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust
  - UI 設定モードのスイッチを切り替えた後、ポップアップに古い UI データが表示される問題を修正しました。([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust
- **[client]**

  - テーブルブロックでレコードアクション連動ルールの動作が正しくない問題を修正しました。([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust
  - モバイル端末で選択済みのリレーションフィールドデータが表示されない問題を修正しました。([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe
  - 連動ルールにより非表示から再表示されたフィールドが読み取り専用になる問題を修正しました。([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh
- **[cli]** `.mjs` アセットを JavaScript MIME タイプで配信するよう、nginx テンプレートを修正しました。([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher
- **[database]** 数値のみのパスワード値をインポートする際に失敗する可能性がある問題を修正しました。([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile
- **[AI employees]** AI プロバイダーの Base URL 検証を修正しました。([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock
- **[Flow engine]**

  - ポップアップのタブをドラッグして並び替えできない問題を修正しました。([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust
  - テンプレートを複製した後にブロックを変更すると、元のブロック内容に意図せず影響する可能性がある問題を修正しました。([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust
- **[Notification: In-app message]** アプリ内通知チャンネルのタイムスタンプフィルターにおける SQL インジェクションリスクを修正しました。([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher
- **[License settings]** pkg ログインチェックが遅い、または到達できない場合に、ライセンス設定ページが長時間停止する問題を修正しました。([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji
- **[Workflow: JavaScript]** Workflow JavaScript モジュールサポートモードは安全ではなく、権限境界ではないことを明確にしました。([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
  参考：[Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Access control]** union role がデフォルトロールの場合、初回ログイン時の権限が不完全になる問題を修正しました。([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile
- **[File manager]** ローカルファイルストレージのパス検証を修正し、安全でないパスが設定済みのストレージルート外へ抜け出さないようにしました。([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher
- **[Password policy]** 数値のみのパスワード値でパスワードポリシー検証が失敗する可能性がある問題を修正しました。 by @2013xile

### [v2.0.60](https://www.nocobase.com/ja/blog/v2.0.60)

*リリース日：2026-05-29*

### 🚀 機能改善

- **[AI employees]** LLM の Base URL フィールドを改善し、作成フォームと編集フォームの両方でグローバル変数を使用できるようにしました。 ([#9615](https://github.com/nocobase/nocobase/pull/9615)) by @cgyrock

### 🐛 不具合修正

- **[client]** トップナビゲーションバーの数値バッジ背景が広すぎる問題を修正しました。 ([#9607](https://github.com/nocobase/nocobase/pull/9607)) by @zhangzhonghe
- **[AI employees]** 参照しているテーブルブロックが削除された後、AI ショートカットボタンのコンテキストが空のブロックになる問題を修正しました。 ([#9617](https://github.com/nocobase/nocobase/pull/9617)) by @cgyrock
- **[Migration manager]** PostgreSQL のマイグレーション差分計算を修正し、子テーブルのローカル列が継承列に変わる際に誤って列削除文が生成されないようにしました。 by @hongboji

### [v2.0.59](https://www.nocobase.com/ja/blog/v2.0.59)

*リリース日：2026-05-28*

### 🐛 不具合修正

* **[ai]** LangChain 関連の依存関係を安定版に固定し、Ollama モデルのツール呼び出しエラーを防ぎ、問題のある上流バージョンを回避しました。([#9604](https://github.com/nocobase/nocobase/pull/9604)) by @cgyrock
* **[flow-engine]** フロントエンドのログレベルが正しくない問題を修正しました。([#9577](https://github.com/nocobase/nocobase/pull/9577)) by @gchust
* **[Collection: Tree]** ツリー構造データに親子循環がある場合、クエリ失敗時のエラーメッセージが不明確になる問題を修正しました。([#9603](https://github.com/nocobase/nocobase/pull/9603)) by @zhangzhonghe
* **[AI: Knowledge base]** LangChain 関連の依存関係を安定版に固定し、Ollama モデルのツール呼び出しエラーを防ぎ、問題のある上流バージョンを回避しました。 by @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.44](https://www.nocobase.com/ja/blog/v2.1.0-beta.44)

*リリース日：2026-06-03*

### 🚀 機能改善

- **[Workflow: Approval]** 承認トリガーとノード設定の検証ルールを調整し、UI 関連フィールドが存在するようにしました。 by @mytharcher

### 🐛 不具合修正

- **[client]** モバイル端末で選択済みのリレーションフィールドデータが表示されない問題を修正しました。([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe
- **[client-v2]**

  - メニュー連動ルールの保存時にエラーが発生する問題を修正しました。([#9666](https://github.com/nocobase/nocobase/pull/9666)) by @zhangzhonghe
  - v2 ページでブロック上部の余白が大きすぎる問題を修正しました。([#9647](https://github.com/nocobase/nocobase/pull/9647)) by @zhangzhonghe
- **[flow-engine]** サブフォームにフィールド値を設定する際、ページが固まる問題を修正しました。([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust
- **[AI employees]**

  - AI プロバイダーの Base URL 検証を修正しました。([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock
  - AI employee ワークフローノードで発生する `ctx.get` エラーを修正しました。([#9661](https://github.com/nocobase/nocobase/pull/9661)) by @cgyrock
- **[Notification: In-app message]** アプリ内通知チャンネルのタイムスタンプフィルターにおける SQL インジェクションリスクを修正しました。([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher
- **[Action: Duplicate record]** レコード複製の送信に失敗した際、ボタン状態がリセットされない問題を修正しました。([#9676](https://github.com/nocobase/nocobase/pull/9676)) by @katherinehhh
- **[Calendar]** v2 ページで、設定された色フィールドに基づいてカレンダーイベントの色が表示されない問題を修正しました。([#9677](https://github.com/nocobase/nocobase/pull/9677)) by @jiannx
- **[Flow engine]**

  - テンプレートを複製した後にブロックを変更すると、元のブロック内容に意図せず影響する可能性がある問題を修正しました。([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust
  - ポップアップのタブをドラッグして並び替えできない問題を修正しました。([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust

### [v2.1.0-beta.43](https://www.nocobase.com/ja/blog/v2.1.0-beta.43)

*リリース日：2026-06-02*

### 🎉 新機能

- **[client-v2]** `TypedVariableInput` を追加し、v2 メールプラグインの SMTP ポートとセキュリティモードのフィールドが型付き定数または `{{ $env.X }}` 変数を受け入れられるようにしました。 ([#9637](https://github.com/nocobase/nocobase/pull/9637)) by @Molunerfinn
- **[Access control]** ユーザーと役割の権限設定ページを v2 に移行しました。 ([#9619](https://github.com/nocobase/nocobase/pull/9619)) by @jiannx

### 🚀 改善

- **[undefined]** オープンソースプラグインの NocoBase 埋め込みドキュメントを更新しました ([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
  参考: [NocoBase の埋め込み](https://docs.nocobase.com/en/integration/embed/)
- **[client]** 一部の組み込み RunJS 関数のオートコンプリートサポートを強化しました。 ([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust
- **[cli]** init と self update のガイダンスを改善しました ([#9633](https://github.com/nocobase/nocobase/pull/9633)) by @chenos

### 🐛 バグ修正

- **[client]**

  - ページ更新後にブロックが誤って削除済みと表示される問題を修正しました ([#9662](https://github.com/nocobase/nocobase/pull/9662)) by @zhangzhonghe
  - テーブルブロックの行操作のリンケージルールの動作が正しくない問題を修正しました。 ([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust
  - 非表示後に表示されたフィールドが読み取り専用になる問題を修正しました ([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh
- **[cli]** nginx テンプレートで `.mjs` アセットを JavaScript MIME タイプで提供するよう修正しました。 ([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher
- **[database]** 数値パスワード値のインポートに失敗する可能性のある問題を修正しました ([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile
- **[flow-engine]**

  - UI 設定モードのスイッチを切り替えた後、ポップアップに古い UI データが表示される問題を修正しました。 ([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust
  - 関連フィールドにマウスを合わせた際にフィールド検索がクリアされる問題を修正しました ([#9646](https://github.com/nocobase/nocobase/pull/9646)) by @zhangzhonghe
- **[client-v2]** フィールド値の割り当てを保持するように修正しました ([#9640](https://github.com/nocobase/nocobase/pull/9640)) by @katherinehhh
- **[File manager]** ローカルファイルストレージパスの検証を修正し、安全でないパスが設定されたストレージルートから逸脱するのを防ぎました。 ([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher
- **[Block: Gantt]** ガントチャートのツールチップ配置を改善し、タスクバーを覆わないようにし、バーの内外でタスクラベルの一貫した配置を実現しました ([#9638](https://github.com/nocobase/nocobase/pull/9638)) by @jiannx
- **[Access control]** ユニオン役割がデフォルトの場合、初回ログイン時の権限が不完全になる問題を修正しました ([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile
- **[License settings]** pkg ログインチェックが遅い場合や到達不能な場合に、ライセンス設定ページが長時間ハングする問題を修正しました ([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji
- **[Workflow: JavaScript]** Workflow JavaScript モジュールサポートモードが安全ではなく、権限境界ではないことを明確にしました ([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
  参考: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Password policy]** 数値パスワード値のパスワードポリシー検証に失敗する可能性のある問題を修正しました by @2013xile

### [v2.1.0-beta.40](https://www.nocobase.com/ja/blog/v2.1.0-beta.40)

*リリース日：2026-05-30*

### 🎉 新機能

- **[client-v2]** フォーム送信アクションでフィールド値の代入設定をサポートしました。 ([#9570](https://github.com/nocobase/nocobase/pull/9570)) by @katherinehhh
- **[Office File Previewer]** Office ファイルプレビュープラグインを v2（FlowEngine）版に移行しました。 ([#9620](https://github.com/nocobase/nocobase/pull/9620)) by @Molunerfinn

### 🚀 機能改善

- **[Notification manager]** 通知管理関連プラグインを v2 版に移行しました。 ([#9597](https://github.com/nocobase/nocobase/pull/9597)) by @Molunerfinn

### 🐛 不具合修正

- **[client]** トップナビゲーションバーの数値バッジ背景が広すぎる問題を修正しました。 ([#9607](https://github.com/nocobase/nocobase/pull/9607)) by @zhangzhonghe
- **[Block: Gantt]** v2 ガントチャートの shared フォルダパスを修正し、ゼブラストライプを追加しました。 ([#9621](https://github.com/nocobase/nocobase/pull/9621)) by @jiannx
- **[License settings]** ライセンス設定の client-v2 サポートを追加し、商用ライセンスロジックを client-v2 プラグイン入口に注入できるようにしました。 ([#9555](https://github.com/nocobase/nocobase/pull/9555)) by @jiannx
- **[Workflow: Custom action event]** v2 ブロック操作メニューでワークフロートリガーが重複表示される問題を修正しました。 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) by @zhangzhonghe
- **[AI employees]** 参照しているテーブルブロックが削除された後、AI ショートカットボタンのコンテキストが空のブロックになる問題を修正しました。 ([#9617](https://github.com/nocobase/nocobase/pull/9617)) by @cgyrock
- **[plugin-commercial]** 商用ライセンスの client-v2 コンポーネントとトップバーのライセンスステータス入口を追加しました。 by @jiannx
- **[Migration manager]** PostgreSQL のマイグレーション差分計算を修正し、子テーブルのローカル列が継承列に変わる際に誤って列削除文が生成されないようにしました。 by @hongboji

### [v2.1.0-beta.38](https://www.nocobase.com/ja/blog/v2.1.0-beta.38)

*リリース日：2026-05-29*

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.45](https://www.nocobase.com/ja/blog/v2.1.0-alpha.45)

*リリース日：2026-05-29*

### 🎉 新機能

- **[client-v2]**

  - フォーム送信アクションでフィールド値の代入設定をサポートしました。 ([#9570](https://github.com/nocobase/nocobase/pull/9570)) by @katherinehhh
  - 埋め込み v2 ページと公開フォーム v2 ページをサポートしました。 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) by @zhangzhonghe
  - v2 管理画面に「セキュリティ」親メニューと「Token ポリシー」設定ページを追加しました。ユーザーセンターで「パスワード変更」が利用できるようになりました。 ([#9556](https://github.com/nocobase/nocobase/pull/9556)) by @Molunerfinn
  - client-v2 のプラグイン管理ページをレスポンシブなカードレイアウトに刷新し、カテゴリフィルター、検索、有効化/無効化/削除、一括有効化、プラグイン詳細ポップアップに対応しました。同時に、client-v1 のプラグイン管理ページにも狭い画面向けのレスポンシブレイアウトを追加しました。 ([#9573](https://github.com/nocobase/nocobase/pull/9573)) by @Molunerfinn
- **[cli]**

  - API コマンドの互換性ルールを追加しました。 ([#9613](https://github.com/nocobase/nocobase/pull/9613)) by @chenos
  - Basic 認証をサポートしました。 ([#9558](https://github.com/nocobase/nocobase/pull/9558)) by @chenos
- **[Office File Previewer]** Office ファイルプレビュープラグインを v2（FlowEngine）版に移行しました。 ([#9620](https://github.com/nocobase/nocobase/pull/9620)) by @Molunerfinn
- **[Workflow]**

  - ワークフローにタイムアウト制御を追加しました。タイムアウトオプションを設定すると、実行時間が超過したワークフローは自動的に終了されます。 ([#9363](https://github.com/nocobase/nocobase/pull/9363)) by @mytharcher
  - 開始済みのワークフロー実行を、先頭ノードまたは指定したノードから再実行するための管理者 API を追加しました。 ([#9569](https://github.com/nocobase/nocobase/pull/9569)) by @mytharcher
- **[IdP: OAuth]** 複数アプリ配置におけるアプリ間シングルサインオンの基礎機能を追加しました。 ([#9547](https://github.com/nocobase/nocobase/pull/9547)) by @2013xile
- **[Block: Gantt]** ガントブロックの v2 サポートを追加しました。 ([#9545](https://github.com/nocobase/nocobase/pull/9545)) by @jiannx
- **[App SSO]** アプリ間の自動ログインに対応する App SSO プラグインを追加しました。 by @2013xile
- **[Password policy]** パスワードポリシープラグインを新しい client-v2 管理画面に移行し、パスワードポリシーとロック済みユーザーの 2 つの設定ページを提供しました。また、ユーザーセンターのパスワード変更フォームにクライアント側のパスワードルール検証を追加しました。 by @Molunerfinn
- **[Workflow: Webhook trigger]** タイムアウトした Webhook ワークフロー（同期モード）に 408 レスポンスステータスを追加しました。 by @mytharcher
- **[Workflow: Subflow]** ワークフローのタイムアウト設定をサポートしました。 by @mytharcher
- **[Auth: OIDC]** 迁移 `plugin-auth-oidc` 到 v2 管理端,登录按钮、管理员设置表单和自动 SSO 跳转在 v2 下可用。 by @Molunerfinn
- **[Workflow: Approval]** ワークフローのタイムアウト設定をサポートしました。 by @mytharcher
- **[App supervisor]** サブアプリの App SSO 設定を追加しました。 by @2013xile
- **[Auth: LDAP]** LDAP 認証器が v2 アプリでログインフォームと管理設定を正常に表示できるよう、v2 クライアント入口を追加しました。 by @Molunerfinn

### 🚀 機能改善

- **[client-v2]**

  - v2 テーブルブロックに行選択を有効化する設定項目を追加しました。 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) by @katherinehhh
  - v2 アクションパネルでアクションカラーの設定をサポートしました。 ([#9612](https://github.com/nocobase/nocobase/pull/9612)) by @katherinehhh
  - メニュー設定から非表示オプションを削除しました。 ([#9596](https://github.com/nocobase/nocobase/pull/9596)) by @zhangzhonghe
- **[client]** メニュー項目設定から非表示オプションを削除しました。 ([#9595](https://github.com/nocobase/nocobase/pull/9595)) by @zhangzhonghe
- **[cli]** app upgrade フローを改善しました。 ([#9587](https://github.com/nocobase/nocobase/pull/9587)) by @chenos
- **[Notification manager]** 通知管理関連プラグインを v2 版に移行しました。 ([#9597](https://github.com/nocobase/nocobase/pull/9597)) by @Molunerfinn
- **[AI employees]** LLM の Base URL フィールドを改善し、作成フォームと編集フォームの両方でグローバル変数を使用できるようにしました。 ([#9615](https://github.com/nocobase/nocobase/pull/9615)) by @cgyrock
- **[Workflow]** ワークフローの非同期ノード利用可否チェックをリファクタリングしました。 ([#9532](https://github.com/nocobase/nocobase/pull/9532)) by @mytharcher
- **[Data visualization]** チャートブロックで client-v2 をサポートしました。 ([#9517](https://github.com/nocobase/nocobase/pull/9517)) by @jiannx
- **[IP restriction]** IP 制限プラグインの v2 版を追加しました。 by @Molunerfinn

### 🐛 不具合修正

- **[client]**

  - トップナビゲーションバーの数値バッジ背景が広すぎる問題を修正しました。 ([#9607](https://github.com/nocobase/nocobase/pull/9607)) by @zhangzhonghe
  - v1 スキャン入力コンポーネントのファイルアップロード上限を 10 MB に引き上げました。 ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
  - メニュー切り替え後にページタブが消える問題を修正しました。 ([#9583](https://github.com/nocobase/nocobase/pull/9583)) by @zhangzhonghe
  - v2 サブフォーム内のサブテーブルで 2 件目のデータを追加できない問題を修正しました。 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  - v2 の時刻フィールドで、時刻形式の設定が有効にならない問題を修正しました。 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
  - v2 モバイルの日付ポップアップで、フォーム値ではなく現在時刻が使用される問題を修正しました。 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  - 連動ルールによって表示されたサブフォームフィールドが、送信時に引き続きフィルタリングされる問題を修正しました。 ([#9594](https://github.com/nocobase/nocobase/pull/9594)) by @katherinehhh
  - v2 の時刻フィールドで、時刻形式の設定が有効にならない問題を修正しました。 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
  - v2 サブフォーム内のサブテーブルで 2 件目のデータを追加できない問題を修正しました。 ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  - v2 モバイルの日付ポップアップで、フォーム値ではなく現在時刻が使用される問題を修正しました。 ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  - v1 スキャン入力コンポーネントのファイルアップロード上限を 10 MB に引き上げました。 ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
- **[flow-engine]**

  - フロントエンドのログレベルが正しくない問題を修正しました。 ([#9577](https://github.com/nocobase/nocobase/pull/9577)) by @gchust
  - 検索ボックス入力時にカスケードメニューが不安定になる問題を修正しました。 ([#9473](https://github.com/nocobase/nocobase/pull/9473)) by @zhangzhonghe
  - ポップアップ内のフォーム送信成功後、テーブルアクション連動ルールが誤って実行される問題を修正しました。 ([#9445](https://github.com/nocobase/nocobase/pull/9445)) by @gchust
- **[ai]** LangChain 関連の依存関係を安定版に固定し、Ollama モデルのツール呼び出しエラーを防ぎ、問題のある上流バージョンを回避しました。 ([#9604](https://github.com/nocobase/nocobase/pull/9604)) by @cgyrock
- **[client-v2]**

  - サブアプリのログインページタブに翻訳テンプレートがそのまま表示される問題を修正し、v2 認証方式の編集ドロワーで送信時にフィールドが欠落する可能性を回避しました。 ([#9581](https://github.com/nocobase/nocobase/pull/9581)) by @Molunerfinn
  - antd Typography の ellipsis 測定ではなく CSS line-clamp を使用することで、プラグイン管理ページのパフォーマンスを改善しました。 ([#9593](https://github.com/nocobase/nocobase/pull/9593)) by @Molunerfinn
  - アプリページが固定で英語としてマークされるのではなく、現在のアプリケーション言語に従うよう、ページ言語メタ情報を修正しました。 ([#9564](https://github.com/nocobase/nocobase/pull/9564)) by @Molunerfinn
- **[build]**

  - サーバー側ビルド内のテキストリソースを JavaScript モジュールに変換せず、ファイルとしてコピーするようにしました。 ([#9565](https://github.com/nocobase/nocobase/pull/9565)) by @Molunerfinn
  - Node.js ランタイムでプラグインサーバー側の難読化生成物にブラウザーのグローバル変数が注入される問題を修正しました。 ([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn
- **[Block: Gantt]** v2 ガントチャートの shared フォルダパスを修正し、ゼブラストライプを追加しました。 ([#9621](https://github.com/nocobase/nocobase/pull/9621)) by @jiannx
- **[License settings]** ライセンス設定の client-v2 サポートを追加し、商用ライセンスロジックを client-v2 プラグイン入口に注入できるようにしました。 ([#9555](https://github.com/nocobase/nocobase/pull/9555)) by @jiannx
- **[Workflow: Custom action event]**

  - v2 ブロック操作メニューでワークフロートリガーが重複表示される問題を修正しました。 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) by @zhangzhonghe
  - カスタムアクションイベントにワークフローをバインドする際、現在のブロックのコレクションに基づいて選択可能なワークフローをフィルタリングするようにしました。 ([#9610](https://github.com/nocobase/nocobase/pull/9610)) by @mytharcher
  - 複数行データのコンテキストで、カスタムアクションイベントのテーブルボタンがカスタムコンテキストワークフローを選択できてしまう問題を修正しました。 ([#9608](https://github.com/nocobase/nocobase/pull/9608)) by @mytharcher
- **[Collection: Tree]** ツリー構造データに親子循環がある場合、クエリエラーが不明確になる問題を修正しました。 ([#9603](https://github.com/nocobase/nocobase/pull/9603)) by @zhangzhonghe
- **[File manager]**

  - PDF プレビュー失敗時のメッセージを改善し、外部ストレージの CORS 設定説明を補足しました。 ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
    参考：[File Preview](docs/docs/cn/file-manager/file-preview/index.md)
  - PDF プレビュー失敗時のメッセージを改善し、外部ストレージの CORS 設定説明を補足しました。 ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
    参考：[File Preview](docs/docs/cn/file-manager/file-preview/index.md)
  - PDF.js を使用して PDF プレビューを安全にレンダリングし、iframe による元の PDF の直接読み込みを回避しました。 ([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher
  - ファイルアップロード時に Unicode ファイル名が誤って二重デコードされる問題を修正し、制御文字を含むオブジェクトキーが生成されないようにしました。 ([#9584](https://github.com/nocobase/nocobase/pull/9584)) by @mytharcher
- **[AI employees]**

  - 参照しているテーブルブロックが削除された後、AI ショートカットボタンのコンテキストが空のブロックになる問題を修正しました。 ([#9617](https://github.com/nocobase/nocobase/pull/9617)) by @cgyrock
  - テーブルコンテキストプロンプト内のデータクエリツール名が誤っている問題を修正しました。 ([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock
- **[Workflow: Manual node]** ワークフローの手動タスクを一時保存した後、入力済みフォーム内容が保持されない問題を修正しました。 ([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher
- **[plugin-commercial]** 商用ライセンスの client-v2 コンポーネントとトップバーのライセンスステータス入口を追加しました。 by @jiannx
- **[AI: Knowledge base]** LangChain 関連の依存関係を安定版に固定し、Ollama モデルのツール呼び出しエラーを防ぎ、問題のある上流バージョンを回避しました。 by @cgyrock
- **[Migration manager]** PostgreSQL のマイグレーション差分計算を修正し、子テーブルのローカル列が継承列に変わる際に誤って列削除文が生成されないようにしました。 by @hongboji
- **[Template print]** テンプレート印刷の PDF 変換エラーがフロントエンドに正しく返されない問題を修正しました。 by @jiannx
- **[Auth: OIDC]** SSO ログインコールバックが外部リダイレクト URL を受け取った際に Token が漏えいする可能性がある問題を修正しました。 by @2013xile
- **[Workflow: Approval]**

  - 承認ノードで `jobs:resume` API がサポートされていない問題を修正しました。 by @mytharcher
  - 承認の取り下げ時に、業務テーブルの更新権限制御に従って送信済み業務データを更新するよう修正しました。 by @mytharcher
  - 承認以外のノード失敗により承認フローが終了した後、承認 ToDo レコードと統計数値が残る問題を修正しました。 by @mytharcher
