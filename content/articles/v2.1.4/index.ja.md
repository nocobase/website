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
