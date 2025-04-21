### 🎉 新機能

* **[クライアント]**
  * リードプリティフィールドでリンク開設ポップアップを有効化するサポート ([#5747](https://github.com/nocobase/nocobase/pull/5747)) by @katherinehhh
  * 関連ブロック内の関連付けと解除アクションをサポート ([#5695](https://github.com/nocobase/nocobase/pull/5695)) by @katherinehhh
* **[サーバー]** 監査マネージャーを追加 ([#5601](https://github.com/nocobase/nocobase/pull/5601)) by @chenzhizdt
* **[ワークフロー]** 手動でワークフローをトリガーするサポート ([#5664](https://github.com/nocobase/nocobase/pull/5664)) by @mytharcher
* **[ワークフロー：事前アクションイベント]** 手動でワークフローをトリガーするサポート by @mytharcher

### 🚀 改善点

* **[クライアント]**
  * フロントエンドコンポーネントのオンデマンドローディングを実装 ([#5647](https://github.com/nocobase/nocobase/pull/5647)) by @gchust
  * ページレンダリング性能を改善し、ページのケープアライブ機能をサポート ([#5515](https://github.com/nocobase/nocobase/pull/5515)) by @zhangzhonghe
* **[コレクションフィールド：ソート]** プラグイン説明を追加 ([#5720](https://github.com/nocobase/nocobase/pull/5720)) by @mytharcher
* **[NocoBaseの埋め込み]** ページレンダリング性能を改善 by @zhangzhonghe

### 🐛 バグ修正

* **[クライアント]**
  * 第三者データソースブロックで変数が適切に使用できない問題を修正 ([#5782](https://github.com/nocobase/nocobase/pull/5782)) by @zhangzhonghe
  * ブロックテンプレート内の関連フィールド値が空になる問題を修正。第三者データソースで変数を使用したブロックデータスコープが適切に動作しない問題を修正 ([#5777](https://github.com/nocobase/nocobase/pull/5777)) by @zhangzhonghe
  * コンポーネントの動的プロパティが遅延ローディングで動作しない問題を修正 ([#5776](https://github.com/nocobase/nocobase/pull/5776)) by @gchust
  * 開発環境でフックを動的にロードする際のReactの警告メッセージを修正 ([#5758](https://github.com/nocobase/nocobase/pull/5758)) by @gchust
* **[データビジュアライゼーション]** チャートブロックのフィルタフィールドコンポーネントがレンダリングされない問題を修正 ([#5769](https://github.com/nocobase/nocobase/pull/5769)) by @2013xile
