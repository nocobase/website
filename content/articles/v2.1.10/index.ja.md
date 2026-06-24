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
