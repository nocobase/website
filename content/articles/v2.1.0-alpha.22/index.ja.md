### 🎉 新機能

- **[ワークフロー]** ノード作成時に検査用のAPIを追加 ([#9207](https://github.com/nocobase/nocobase/pull/9207)) by @mytharcher

### 🚀 機能改善

- **[cli]** リクエストログと監査ログにCLIリクエストソースマークを追加 ([#9223](https://github.com/nocobase/nocobase/pull/9223)) by @2013xile
- **[権限制御]** 権限管理SkillにAIモード用の新しいAPIアダプタを追加 ([#9198](https://github.com/nocobase/nocobase/pull/9198)) by @Andrew1989Y
- **[ワークフロー：承認]**

  - 承認ノード作成時にタイプ検証を追加 by @mytharcher
  - 承認記録テーブルの列にインデックスを追加し、リストと送信操作のパフォーマンスを最適化 by @mytharcher

### 🐛 不具合修正

- **[client]** 関連フィールドの非表示並べ替えスイッチ ([#9220](https://github.com/nocobase/nocobase/pull/9220)) by @jiannx
- **[database]** decimalフィールドに検証ルールを設定すると有効な数値入力が拒否される可能性がある問題を修正 ([#9204](https://github.com/nocobase/nocobase/pull/9204)) by @2013xile
- **[AI 従業員]** AI従業員がフォームを選択時に添付ファイルURLフィールド値が失われる問題を修正 ([#9216](https://github.com/nocobase/nocobase/pull/9216)) by @cgyrock
- **[ユーザー]** プロフィール編集時の動的設定フィールドが最新のユーザーデータを読み込まない問題を修正 ([#9205](https://github.com/nocobase/nocobase/pull/9205)) by @2013xile
- **[データソース管理]** 外部データソースの並べ替えフィールドのグループ並べ替えをクリアできない問題を修正 ([#9203](https://github.com/nocobase/nocobase/pull/9203)) by @2013xile
