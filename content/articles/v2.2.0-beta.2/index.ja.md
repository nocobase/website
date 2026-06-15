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
