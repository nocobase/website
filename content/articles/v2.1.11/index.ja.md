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
