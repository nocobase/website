### 🚀 機能改善

* **[フローエンジン]** 遅延操作をサポートする flow model を追加 ([#7786](https://github.com/nocobase/nocobase/pull/7786)) by @gchust
* **[ワークフロー：JavaScript ノード]** 実行環境に渡された上位関数から発生するセキュリティ脆弱性を修正し、上位実行環境への不正アクセスを防止 by @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 詳細ブロックのシンプルページネーションで空データの次ページが表示される問題を修正 ([#7784](https://github.com/nocobase/nocobase/pull/7784)) by @katherinehhh
  * テーブル操作列および jsColumn の列幅設定が反映されない問題を修正 ([#7777](https://github.com/nocobase/nocobase/pull/7777)) by @katherinehhh
  * ページイベントフロー設定でブロックのデータ範囲が有効にならない問題を修正 ([#7788](https://github.com/nocobase/nocobase/pull/7788)) by @gchust
* **[ワークフロー]** ワークフローのログに `workflowId` データ識別子を追加 ([#7789](https://github.com/nocobase/nocobase/pull/7789)) by @mytharcher
* **[ワークフロー：カスタム変数ノード]** 変数ノードで config が欠落している場合にエラーが発生する問題を修正 by @mytharcher
* **[メール管理]**`mailMessages` にインデックスを追加 by @jiannx
