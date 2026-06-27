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
