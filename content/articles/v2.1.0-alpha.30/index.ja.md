### 🚀 機能改善

* **[undefined]** 手動リリースワークフローに Feishu への失敗時通知を追加 ([#9349](https://github.com/nocobase/nocobase/pull/9349)) by @Molunerfinn
* **[IdP: OAuth]** OAuth セッションの有効期限をシステムの Token ポリシーに合わせて統一 ([#9345](https://github.com/nocobase/nocobase/pull/9345)) by @2013xile

### 🐛 不具合修正

* **[client-v2]** リモートプラグイン読み込み時に、すでに `.js` 拡張子が付いたプラグイン URL が重複した `.js.js` パスとして誤解析される問題を修正。 ([#9336](https://github.com/nocobase/nocobase/pull/9336)) by @Molunerfinn
* **[cli]** CLI のブールオプションを否定パラメータで無効化できない問題を修正 ([#9337](https://github.com/nocobase/nocobase/pull/9337)) by @2013xile
* **[AI 社員]**
  * deepseek v4 モデル利用時に、AI 社員でまれにエラーが発生する問題を修正 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) by @cgyrock
  * ワークフロー AI 社員ノードで AI 社員を切り替えた際に、スキルが消えてしまう問題を修正 ([#9342](https://github.com/nocobase/nocobase/pull/9342)) by @cgyrock
* **[データソース：メインデータベース]** コレクション読み込み中に `fields` が未定義の場合でもクラッシュしないよう改善 ([#9174](https://github.com/nocobase/nocobase/pull/9174)) by @saraTabbane
* **[UI テンプレート]** ポップアップテンプレート一覧で利用可能なテンプレートが正しく読み込まれない問題を修正。 ([#9332](https://github.com/nocobase/nocobase/pull/9332)) by @gchust
* **[区块：看板]** ポップアップまたはサブページ内の関連カンバンブロックで、未解析のランタイムリソースパラメータが使われる問題を修正。 ([#9350](https://github.com/nocobase/nocobase/pull/9350)) by @jiannx
* **[ワークフロー：承認]** 起票可能な承認一覧 API で、フィルタや他のクエリパラメータが機能しない問題を修正 by @mytharcher
