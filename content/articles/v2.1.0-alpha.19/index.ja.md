### 🎉 新機能

- **[cli-v1]** storage path変数をリファクタリング ([#9147](https://github.com/nocobase/nocobase/pull/9147)) by @chenos
- **[カレンダー]** カレンダーブロック v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) by @jiannx

### 🚀 機能改善

- **[cli]** `nb api`実行時のブートストラップ失敗時のヘルプ降格動作を最適化し、警告メッセージのスタイルを統一 ([#9153](https://github.com/nocobase/nocobase/pull/9153)) by @2013xile
- **[部門]** インターフェースに部門テーブルの`parentId`外部キー字段を表示する ([#9130](https://github.com/nocobase/nocobase/pull/9130)) by @2013xile

### 🐛 不具合修正

- **[client]** ページ設定モードでのタブの高さと幅が異常に変わる問題を修正 ([#9144](https://github.com/nocobase/nocobase/pull/9144)) by @zhangzhonghe
- **[database]** 再帰ツリーのプリロードとグループソートの初期化におけるSQLインジェクションリスクを修正 ([#9133](https://github.com/nocobase/nocobase/pull/9133)) by @2013xile
- **[ワークフロー：JavaScriptノード]** `node:vm`モードでのスクリプト実行時のセキュリティ問題を修正 ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher
- **[IdP: OAuth]** サービス再起動後のOAuthクライアント登録とトークンリフレッシュの失敗を修正 ([#9139](https://github.com/nocobase/nocobase/pull/9139)) by @2013xile
- **[部門]** 部門管理における部門リストが`sort`フィールド順に並んでいない問題を修正 ([#9150](https://github.com/nocobase/nocobase/pull/9150)) by @2013xile
- **[データテーブル: SQL]** SQLデータテーブル更新時のSQLバリデーションが欠落する問題を修正 ([#9134](https://github.com/nocobase/nocobase/pull/9134)) by @2013xile
- **[データ可視化]** チャートブロックが集計クエリでソート時にメジャーとディメンションエイリアスを使用しない問題を修正 ([#9131](https://github.com/nocobase/nocobase/pull/9131)) by @2013xile
