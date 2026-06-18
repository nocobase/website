週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.1.8](https://www.nocobase.com/ja/blog/v2.1.8)

*リリース日：2026-06-18*

### 🐛 不具合修正

- **[ai]**

  - AI 関連パッケージにおいて、`@langchain/openai` をパッチレベルの更新のみに固定しました。 ([#9829](https://github.com/nocobase/nocobase/pull/9829)) by @cgyrock
  - AI プラグインにおける LangChain 依存関係の解決に関する非互換性を修正しました。 ([#9831](https://github.com/nocobase/nocobase/pull/9831)) by @cgyrock
- **[AI: ナレッジベース]**

  - AI プラグインが有効化されていない状態で AI ナレッジベースプラグインを有効化した際のエラーメッセージが不明瞭だった問題を修正しました。 by @cgyrock
  - AI ナレッジベースプラグインにおける LangChain 依存関係の解決に関する非互換性を修正しました。 by @cgyrock

### [v2.1.7](https://www.nocobase.com/ja/blog/v2.1.7)

*リリース日：2026-06-18*

### 🎉 新機能

- **[バックアップマネージャー]** KingBase をプライマリデータベースとして使用する場合のバックアップとリストアに対応しました ([#9791](https://github.com/nocobase/nocobase/pull/9791)) by @2013xile
- **[マイグレーションマネージャー]** KingBase をプライマリデータベースとして使用する場合のマイグレーションに対応しました。 by @2013xile

### 🚀 機能改善

- **[AI: ナレッジベース]** AI ナレッジベースの検索および関連ドキュメントを改善しました。 ([#9765](https://github.com/nocobase/nocobase/pull/9765)) by @cgyrock
- **[cli]** env 設定のスキーマバージョン記録を追加しました ([#9782](https://github.com/nocobase/nocobase/pull/9782)) by @chenos
- **[ワークフロー]** 更新オプションのテストの安定性を向上させました ([#9773](https://github.com/nocobase/nocobase/pull/9773)) by @mytharcher
- **[ファイルマネージャー]** PDF プレビューを改善：クロスオリジンの PDF ファイルはブラウザネイティブビューアーを使用し、同一オリジンの PDF ファイルは引き続き PDF.js で描画します。 ([#9796](https://github.com/nocobase/nocobase/pull/9796)) by @mytharcher
- **[バックアップマネージャー]** コレクションの `dataCategory` が `'runtime'` に設定されているテーブルは、バックアップから自動的に除外されるようになりました。 ([#9804](https://github.com/nocobase/nocobase/pull/9804)) by @cgyrock
- **[AI: ナレッジベース]** AI ナレッジベースにおけるドキュメントセグメンテーション、セグメント管理、ヒットテスト、およびドキュメントワークフローノードのサポートを改善しました。 by @cgyrock

### 🐛 不具合修正

- **[client-v2]**

  - サブフォームにサブテーブルが含まれる場合に、フォーム送信時に誤ったメッセージが表示される問題を修正しました。 ([#9807](https://github.com/nocobase/nocobase/pull/9807)) by @gchust
  - サブテーブル列のイベントフローが誤って実行される問題を修正しました。 ([#9821](https://github.com/nocobase/nocobase/pull/9821)) by @gchust
  - 関連フィールドから予期しない `updateAssociationValues` を削除しました ([#9812](https://github.com/nocobase/nocobase/pull/9812)) by @katherinehhh
  - v2 フィルターフォームのチェックボックスドロップダウンで Yes/No オプションが翻訳されていなかった問題を修正しました。 ([#9792](https://github.com/nocobase/nocobase/pull/9792)) by @katherinehhh
  - ブロックをテンプレートとして保存した後にイベントフロー設定を更新できなかった問題を修正しました。 ([#9585](https://github.com/nocobase/nocobase/pull/9585)) by @gchust
  - v2 テーブルの関連タイトルフィールドで時刻、日付のみ、または日時フィールドを使用した場合に、表示とフォーマット設定が正しくなかった問題を修正しました。 ([#9785](https://github.com/nocobase/nocobase/pull/9785)) by @katherinehhh
- **[ワークフロー]** 予期しないディスパッチエラー後のワークフローディスパッチャーの復旧を修正しました。 ([#9783](https://github.com/nocobase/nocobase/pull/9783)) by @mytharcher
- **[ファイルマネージャー]** 外部データソースの添付ファイル URL フィールドへのファイルアップロード時に発生していた 404 エラーを修正しました ([#9809](https://github.com/nocobase/nocobase/pull/9809)) by @2013xile
- **[操作: カスタムリクエスト]** V2 カスタムリクエストアクションにおいて、リクエスト設定が未構成の場合に不要なエラーが表示される問題を修正しました。 ([#9802](https://github.com/nocobase/nocobase/pull/9802)) by @katherinehhh
- **[AI 従業員]**

  - AI 従業員がサブテーブルデータを正しく入力できなかった問題を修正しました。 ([#9801](https://github.com/nocobase/nocobase/pull/9801)) by @gchust
  - AI 従業員のショートカットタスクトリガーにおいて、ショートカットプロファイルからタスクを実行する際に現在の作業コンテキストの添付ファイルが含まれるよう修正しました。 ([#9808](https://github.com/nocobase/nocobase/pull/9808)) by @cgyrock
- **[ワークフロー: カスタムアクションイベント]** アクションパネル v2 のワークフロー起動ボタンで、ワークフローがバインドされていない場合に成功と表示されリクエストが送信される問題を修正しました。 ([#9798](https://github.com/nocobase/nocobase/pull/9798)) by @mytharcher
- **[フローエンジン]** AI によって構築された場合に、ポップアップ内の現在のレコードフォームと詳細に誤ったデータが含まれる可能性がある問題を修正しました。 ([#9788](https://github.com/nocobase/nocobase/pull/9788)) by @gchust
- **[非同期タスクマネージャー]** `filterByTk` にタスク ID が欠落している場合の非同期タスクファイルダウンロードエラーを修正しました。 ([#9705](https://github.com/nocobase/nocobase/pull/9705)) by @mytharcher
- **[データソース: 外部 NocoBase]** NocoBase 外部データソースのファイルアップロードおよびストレージアクションを、アップロードデータソースによってプロキシするよう修正しました by @2013xile
- **[マルチスペース]** スペース管理者がユーザーメールフィールドへのアクセス権なしにスペースユーザーを追加した際の権限エラーを修正しました。 by @jiannx
- **[ワークフロー: サブフロー]** 非同期サブフローにおいて、ワーカー再起動後やインメモリイベントマッピング喪失後に親ワークフローが再開できるよう修正しました。 by @mytharcher
- **[アプリスーパーバイザー]** リモート WebSocket プロキシレスポンスが失敗した際のクラッシュを修正しました by @2013xile

### [v2.1.5](https://www.nocobase.com/ja/blog/v2.1.5)

*リリース日：2026-06-15*

### 🎉 新機能

- **[Workflow: Mailer node]** ワークフローのメール送信ノードで、添付ファイルの送信をサポートしました。([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher

### 🚀 機能改善

- **[client-v2]** フォームのサブテーブル内にあるリレーションフィールド列のデータスコープで、現在項目の変数をサポートしました。([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust
- **[undefined]** バージョン管理プラグインの中国語ドキュメント名を「版本控制」に統一しました。([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock
- **[File manager]** ファイルマネージャーの PDF プレビューに、埋め込みテキストを含む PDF 向けのテキスト選択サポートを追加しました。([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher
- **[Action: Bulk edit]** v2 アクションプラグインの読み込み方式を改善し、移行済みアクションボタンの順序を安定させました。([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh
- **[Version control]** バージョン管理プラグインの中国語表示名を「版本控制」に変更しました。 by @cgyrock

### 🐛 不具合修正

- **[cli-v1]** create-nocobase-app で作成したプロジェクトを 2.0 から 2.1 にアップグレードした後、`yarn dev` 実行時にエラーが発生する問題を修正しました。([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn
- **[client-v2]** マイグレーション進捗で専用の進捗ビューが表示されない問題を修正しました。([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile
- **[flow-engine]** v2 の単一行テキストおよび複数行テキストフィールドにおけるベトナム語と中国語 IME の入力問題を修正しました。([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh
- **[server]** `pm:enable` における安全でないプラグイン名処理を修正し、プラグイン解決時のローカルファイルインクルードリスクを回避しました。([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher
- **[File manager]** pdf.js worker モジュールの読み込み異常により PDF プレビューが失敗する問題を修正しました。([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher
- **[Block: Kanban]** 非編集状態で Calendar、Gantt、Kanban ブロックを開いた際、非表示のポップアップ操作が意図せず永続化され、削除リクエストが繰り返し送信される問題を修正しました。([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx
- **[Action: Export records Pro]** v2 Import/Export Pro の処理モード設定と説明表示を改善しました。 by @katherinehhh
- **[Migration manager]** 大きなマイグレーションデータファイルのインポート時に失敗する可能性がある問題を修正しました。 by @2013xile
- **[Template print]** テンプレート印刷開始前に、サポートされていないテンプレートファイル形式を拒否するようにしました。 by @2013xile

### [v2.1.4](https://www.nocobase.com/ja/blog/v2.1.4)

*リリース日：2026-06-13*

### 🚀 機能改善

- **[Workflow]** ワークフローメタデータの編集体験を改善し、詳細ポップアップで説明を編集できるようにしました。また、ワークフロー複製時に元ワークフローのメタデータをデフォルトで入力するようにしました。([#9766](https://github.com/nocobase/nocobase/pull/9766)) by @mytharcher

### 🐛 不具合修正

- **[Action: Import records]** インポート時のアップロードファイルをディスク保存に変更し、大量データインポート時のメモリ負荷を軽減しました。([#9739](https://github.com/nocobase/nocobase/pull/9739)) by @mytharcher
- **[Backup manager]** バックアップ復元時に安全でない PostgreSQL schema 名を受け付ける可能性があるセキュリティ問題を修正しました。([#9758](https://github.com/nocobase/nocobase/pull/9758)) by @2013xile
- **[Workflow]**

  - ワークフローのタイムアウト処理を修正し、中止された実行とその保留中タスクをアトミックに更新できるようにしました。([#9768](https://github.com/nocobase/nocobase/pull/9768)) by @mytharcher
  - ワークフローノード変更後、ワークフローの最終更新者が同期されない問題を修正しました。([#9769](https://github.com/nocobase/nocobase/pull/9769)) by @mytharcher
- **[Action: Import records Pro]** Pro インポートで非同期タスク作成前にリクエストノードで大きなファイルを解析しないようにしました。 by @mytharcher
- **[Version control]** バージョン管理のトップショートカット入口の位置を調整し、旧版および v2 管理レイアウトの両方で UI エディターの横に表示されるようにしました。 by @cgyrock

### [v2.1.3](https://www.nocobase.com/ja/blog/v2.1.3)

*リリース日：2026-06-12*

### 🚀 機能改善

- **[cli]**
  - 改善しました不同格式的版本号兼容判断 ([#9763](https://github.com/nocobase/nocobase/pull/9763)) by @chenos
  - skills サポートしました指定版本更新しました ([#9760](https://github.com/nocobase/nocobase/pull/9760)) by @chenos

### 🐛 不具合修正

- **[client]** 修正しました水平子フォーム中フィールド过窄导致数据不显示的問題 ([#9755](https://github.com/nocobase/nocobase/pull/9755)) by @zhangzhonghe
- **[データソース管理]**

  - 修正しました v1 外部データソース Configure fields ページ反复重渲染导致フィールド编辑ポップアップ内容为空的問題。 ([#9759](https://github.com/nocobase/nocobase/pull/9759)) by @katherinehhh
  - 修正しました v1 データソース管理中削除しました当前集合分类后、All collections 标签页可能显示为空的問題。 ([#9757](https://github.com/nocobase/nocobase/pull/9757)) by @katherinehhh
- **[异步タスク管理器]** 修正しました异步タスク worker 日志中的リクエスト ID エラー問題 ([#9686](https://github.com/nocobase/nocobase/pull/9686)) by @2013xile
- **[Workflow：SQL ノード]** 修正しました部分 beta 版本用户跳过 SQL Workflow历史模板変数移行しました的問題。 ([#9762](https://github.com/nocobase/nocobase/pull/9762)) by @mytharcher
- **[AI employees]**

  - 修正しましたWorkflow LLMノード消息設定丢失問題。 ([#9743](https://github.com/nocobase/nocobase/pull/9743)) by @cgyrock
  - 修正しました AI 员工对话框粘贴的附件无法削除しました問題。 ([#9753](https://github.com/nocobase/nocobase/pull/9753)) by @cgyrock
- **[ブロック：Kanban]** 修正しましたカレンダー等ポップアップサポートしましたURL ([#9751](https://github.com/nocobase/nocobase/pull/9751)) by @jiannx
- **[Workflow：承認]** 修正しました v2 承認フォーム中关联数据显示不出来的問題 by @zhangzhonghe

### [v2.1.2](https://www.nocobase.com/ja/blog/v2.1.2)

*リリース日：2026-06-12*

### 🎉 新機能

- **[AI employees]** 为 AI 知识库追加しました外部向量存储設定フォーム。 ([#9723](https://github.com/nocobase/nocobase/pull/9723)) by @cgyrock
- **[AI: 知识库]** 为 AI 知识库追加しました外部向量存储設定フォーム。 by @cgyrock

### 🚀 機能改善

- **[undefined]**

  - AI 搭建概述页追加しましたバージョン管理对话场景 ([#9748](https://github.com/nocobase/nocobase/pull/9748)) by @Molunerfinn
    参考：[AI 搭建快速开始](https://docs.nocobase.com/cn/ai-builder)
  - 改善しましたバージョン管理ドキュメント、补充 AI 搭建自动保存版本的说明。 ([#9745](https://github.com/nocobase/nocobase/pull/9745)) by @cgyrock
    参考：[バージョン管理](docs/docs/cn/ops-management/version-control/index.md)
- **[cli]** 改善しました初始化設定的文本 ([#9750](https://github.com/nocobase/nocobase/pull/9750)) by @chenos
- **[アクション：导入记录]** 改善しました导入和异步タスクエラー详情ポップアップ、长エラー信息可完整查看且不会破坏布局。 ([#9746](https://github.com/nocobase/nocobase/pull/9746)) by @katherinehhh
- **[アクション：导入记录 Pro]** 改善しました导入ポップアップ、长エラー信息可完整查看、并サポートしました在 v2 設定メニュー中直接选择处理模式。 by @katherinehhh

### 🐛 不具合修正

- **[client-v2]** 修正しました v2 ページログイン后一直加载的問題 ([#9738](https://github.com/nocobase/nocobase/pull/9738)) by @zhangzhonghe
- **[cli]** nb 运行環境 node 版本检测 ([#9749](https://github.com/nocobase/nocobase/pull/9749)) by @chenos
- **[ファイル管理器]** 修正しました切换到 pdf.JS 后部分 PDF 预览缺失中国語/CID 字体文字的問題。 ([#9737](https://github.com/nocobase/nocobase/pull/9737)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.2.0-beta.5](https://www.nocobase.com/ja/blog/v2.2.0-beta.5)

*リリース日：2026-06-16*

### 🚀 機能改善

* **[cli]** env 設定の schema バージョン記録を追加しました。([#9782](https://github.com/nocobase/nocobase/pull/9782)) by @chenos
* **[File manager]** PDF プレビューを改善しました。クロスオリジンの PDF ファイルはブラウザー標準のプレビューを使用し、同一オリジンの PDF ファイルは引き続き PDF.js でレンダリングします。([#9796](https://github.com/nocobase/nocobase/pull/9796)) by @mytharcher

### 🐛 不具合修正

* **[client-v2]**
  * ブロックをテンプレートに変換した後、イベントフロー設定を再編集できなくなる問題を修正しました。([#9585](https://github.com/nocobase/nocobase/pull/9585)) by @gchust
  * v2 フィルターフォームのチェックボックスドロップダウン選択肢で、翻訳テキストが表示されない問題を修正しました。([#9792](https://github.com/nocobase/nocobase/pull/9792)) by @katherinehhh
  * v2 テーブルのリレーションフィールドで、タイトルフィールドに時刻、日付、または日時フィールドを使用した場合の表示およびフォーマット設定が正しくない問題を修正しました。([#9785](https://github.com/nocobase/nocobase/pull/9785)) by @katherinehhh
* **[Flow engine]** AI による構築時に、ポップアップ内の現在レコードフォームと詳細データが正しくない問題を修正しました。([#9788](https://github.com/nocobase/nocobase/pull/9788)) by @gchust
* **[Workflow: Custom action event]** アクションパネル v2 のワークフロートリガーボタンで、ワークフローが未バインドの場合でも成功と表示され、リクエストが送信される問題を修正しました。([#9798](https://github.com/nocobase/nocobase/pull/9798)) by @mytharcher
* **[AI employees]** AI employees がサブテーブルデータを正しく入力できない問題を修正しました。([#9801](https://github.com/nocobase/nocobase/pull/9801)) by @gchust

### [v2.2.0-beta.3](https://www.nocobase.com/ja/blog/v2.2.0-beta.3)

*リリース日：2026-06-15*

### 🎉 新機能

* **[Workflow: Mailer node]** ワークフローのメール送信ノードで添付ファイルの送信をサポートしました。([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher
* **[Workflow]** ワークフローにデータベーストランザクションスコープのサポートを追加しました。([#9742](https://github.com/nocobase/nocobase/pull/9742)) by @mytharcher
  参考：[Database transactions](docs/docs/ja/workflow/nodes/transaction.md)
* **[Workflow: Database transaction node]** データベーストランザクション用のワークフローノードプラグインを追加しました。 by @mytharcher

### 🚀 機能改善

* **[client-v2]** フォームサブテーブルのリレーションフィールド列で、データスコープに現在の項目変数を使用できるようになりました。([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust
* **[undefined]** Version control プラグインの中国語ドキュメント名を「版本控制」に統一しました。([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock
* **[File manager]** File manager の PDF プレビューに、埋め込みテキストを含む PDF 向けのテキスト選択サポートを追加しました。([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher
* **[Users]** v2 の Users と Permissions ページのレイアウトを改善し、部門ツリーの動作を最適化しました。([#9780](https://github.com/nocobase/nocobase/pull/9780)) by @jiannx
* **[Action: Bulk edit]** v2 アクションプラグインの読み込み方式を最適化し、移行済みアクションボタンの順序を安定させました。([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh
* **[Version control]** Version control プラグインの中国語表示名を「版本控制」に変更しました。 by @cgyrock

### 🐛 不具合修正

* **[cli-v1]** create-nocobase-app で作成したプロジェクトを 2.0 から 2.1 にアップグレードした後、`<span>yarn dev</span>` 実行時にエラーが発生する問題を修正しました。([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn
* **[flow-engine]** v2 の単一行テキストフィールドと複数行テキストフィールドにおける、ベトナム語および中国語 IME の入力問題を修正しました。([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh
* **[client-v2]** マイグレーション進捗で専用の進捗ビューが表示されない問題を修正しました。([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile
* **[server]** `<span>pm:enable</span>` における安全でないプラグイン名の処理を修正し、プラグイン解決時にローカルファイルインクルードのリスクが発生しないようにしました。([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher
* **[Async task manager]** 非同期タスクファイルのダウンロード時に `<span>filterByTk</span>` が欠落し、データベースクエリエラーが発生する問題を修正しました。([#9705](https://github.com/nocobase/nocobase/pull/9705)) by @mytharcher
* **[File manager]** pdf.js worker モジュールの読み込み異常により PDF プレビューが失敗する問題を修正しました。([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher
* **[Block: Kanban]** 非編集モードで Calendar、Gantt、Kanban ブロックを開いた際、非表示ポップアップ操作が意図せず永続化され、削除リクエストが繰り返し送信される問題を修正しました。([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx
* **[Action: Export records Pro]** v2 Import/Export Pro の処理モード設定と説明文を改善しました。 by @katherinehhh
* **[Multi-space]** スペース管理者がユーザーメールフィールドの権限を持たない場合に、スペースユーザーの追加時に権限エラーが発生する問題を修正しました。 by @jiannx
* **[Migration manager]** 大きなマイグレーションデータファイルのインポート時に失敗する可能性がある問題を修正しました。 by @2013xile
* **[Template print]** テンプレート印刷の開始前に、サポートされていないテンプレートファイル形式を拒否するようにしました。 by @2013xile

### [v2.2.0-beta.2](https://www.nocobase.com/ja/blog/v2.2.0-beta.2)

*リリース日：2026-06-13*

### 🎉 新機能

- **[AI employees]** AI ナレッジベース向けに外部ベクトルストア設定フォームを追加しました。([#9723](https://github.com/nocobase/nocobase/pull/9723)) by @cgyrock
- **[AI: Knowledge base]** AI ナレッジベース向けに外部ベクトルストア設定フォームを追加しました。 by @cgyrock
- **[Email manager]** Email manager クライアントを v2 に移行しました。 by @jiannx

### 🚀 機能改善

- **[cli]**

  - 異なる形式のバージョン番号に対する互換性判定を改善しました。([#9763](https://github.com/nocobase/nocobase/pull/9763)) by @chenos
  - skills を指定バージョンに更新できるようにしました。([#9760](https://github.com/nocobase/nocobase/pull/9760)) by @chenos
  - 初期化設定の文言を改善しました。([#9750](https://github.com/nocobase/nocobase/pull/9750)) by @chenos
- **[undefined]**

  - AI Builder 概要ページにバージョン管理の会話シナリオを追加しました。([#9748](https://github.com/nocobase/nocobase/pull/9748)) by @Molunerfinn
    参考：[AI Builder Quick Start](https://docs.nocobase.com/en/ai-builder)
  - バージョン管理ドキュメントを改善し、AI Builder による自動バージョン保存の説明を追加しました。([#9745](https://github.com/nocobase/nocobase/pull/9745)) by @cgyrock
    参考：[Version control](docs/docs/en/ops-management/version-control/index.md)
- **[Workflow]** ワークフローメタデータの編集体験を改善し、詳細ポップアップで説明を編集できるようにしました。また、ワークフロー複製時に元ワークフローのメタデータをデフォルトで入力するようにしました。([#9766](https://github.com/nocobase/nocobase/pull/9766)) by @mytharcher
- **[Action: Import records]** インポートおよび非同期タスクのエラー詳細ポップアップを改善し、長いエラーメッセージをレイアウトを崩さずに最後まで確認できるようにしました。([#9746](https://github.com/nocobase/nocobase/pull/9746)) by @katherinehhh
- **[Translation test tool]** 翻訳テストツールに client-v2 設定ページを追加しました。([#9744](https://github.com/nocobase/nocobase/pull/9744)) by @jiannx
- **[Action: Import records Pro]** インポートポップアップを改善し、長いエラーメッセージを最後まで確認できるようにしました。また、v2 設定メニューから処理モードを直接選択できるようにしました。 by @katherinehhh

### 🐛 不具合修正

- **[client]** 横向きサブフォーム内のフィールドが狭すぎてデータが表示されない問題を修正しました。([#9755](https://github.com/nocobase/nocobase/pull/9755)) by @zhangzhonghe
- **[client-v2]** ログイン後に v2 ページが読み込み続ける問題を修正しました。([#9738](https://github.com/nocobase/nocobase/pull/9738)) by @zhangzhonghe
- **[cli]** nb 実行環境の Node.js バージョン検出を追加しました。([#9749](https://github.com/nocobase/nocobase/pull/9749)) by @chenos
- **[Action: Import records]** インポート時のアップロードファイルをディスク保存に変更し、大量データインポート時のメモリ負荷を軽減しました。([#9739](https://github.com/nocobase/nocobase/pull/9739)) by @mytharcher
- **[Async task manager]** 非同期タスク worker ログのリクエスト ID が正しくない問題を修正しました。([#9686](https://github.com/nocobase/nocobase/pull/9686)) by @2013xile
- **[Workflow]**

  - ワークフローのタイムアウト処理を修正し、中止された実行とその保留中タスクをアトミックに更新できるようにしました。([#9768](https://github.com/nocobase/nocobase/pull/9768)) by @mytharcher
  - ワークフローノード変更後、ワークフローの最終更新者が同期されない問題を修正しました。([#9769](https://github.com/nocobase/nocobase/pull/9769)) by @mytharcher
- **[Data source manager]**

  - v1 外部データソースの Configure fields ページで繰り返し再レンダリングが発生し、フィールド編集ポップアップの内容が空になる問題を修正しました。([#9759](https://github.com/nocobase/nocobase/pull/9759)) by @katherinehhh
  - v1 データソースマネージャーで現在のコレクションカテゴリを削除した後、All collections タブが空になる可能性がある問題を修正しました。([#9757](https://github.com/nocobase/nocobase/pull/9757)) by @katherinehhh
- **[Backup manager]** バックアップ復元時に安全でない PostgreSQL schema 名を受け付ける可能性があるセキュリティ問題を修正しました。([#9758](https://github.com/nocobase/nocobase/pull/9758)) by @2013xile
- **[Workflow: SQL node]** 一部の beta バージョンユーザーで SQL ワークフローの旧テンプレート変数マイグレーションがスキップされる問題を修正しました。([#9762](https://github.com/nocobase/nocobase/pull/9762)) by @mytharcher
- **[Block: Kanban]** Calendar などのポップアップで URL がサポートされるよう修正しました。([#9751](https://github.com/nocobase/nocobase/pull/9751)) by @jiannx
- **[AI employees]**

  - AI employee ダイアログに貼り付けた添付ファイルを削除できない問題を修正しました。([#9753](https://github.com/nocobase/nocobase/pull/9753)) by @cgyrock
  - ワークフロー LLM ノードのメッセージ設定が失われる問題を修正しました。([#9743](https://github.com/nocobase/nocobase/pull/9743)) by @cgyrock
- **[File manager]** pdf.js への切り替え後、一部の PDF プレビューで中国語/CID フォントのテキストが欠落する問題を修正しました。([#9737](https://github.com/nocobase/nocobase/pull/9737)) by @mytharcher
- **[API documentation]** API ドキュメントプラグインの宣言ファイルのビルド失敗を修正しました。([#9752](https://github.com/nocobase/nocobase/pull/9752)) by @katherinehhh
- **[Action: Import records Pro]** Pro インポートで非同期タスク作成前にリクエストノードで大きなファイルを解析しないようにしました。 by @mytharcher
- **[Version control]** バージョン管理のトップショートカット入口の位置を調整し、旧版および v2 管理レイアウトの両方で UI エディターの横に表示されるようにしました。 by @cgyrock
- **[Workflow: Approval]** v2 承認フォームで関連データが表示されない問題を修正しました。 by @zhangzhonghe
