### 🚀 機能改善

- **[部門]** インターフェースに部門テーブルの`parentId`外部キー字段を表示する ([#9130](https://github.com/nocobase/nocobase/pull/9130)) by @2013xile

### 🐛 不具合修正

- **[data-source-manager]** ファイルテーブルフィールドの同期中に`preview`フィールドが誤って削除される問題を修正 ([#9129](https://github.com/nocobase/nocobase/pull/9129)) by @2013xile
- **[client]**

  - フィールド値設定におけるリレーションシップフィールドコンポーネントが正しく表示されない問題を修正 ([#9063](https://github.com/nocobase/nocobase/pull/9063)) by @gchust
  - ページ設定モードでのタブの高さと幅が異常に変わる問題を修正 ([#9144](https://github.com/nocobase/nocobase/pull/9144)) by @zhangzhonghe
- **[database]** 再帰ツリーのプリロードとグループソートの初期化におけるSQLインジェクションリスクを修正 ([#9133](https://github.com/nocobase/nocobase/pull/9133)) by @2013xile
- **[データ可視化]** チャートブロックが集計クエリでソート時にメジャーとディメンションエイリアスを使用しない問題を修正 ([#9131](https://github.com/nocobase/nocobase/pull/9131)) by @2013xile
- **[データテーブル: SQL]** SQLデータテーブル更新時のSQLバリデーションが欠落する問題を修正 ([#9134](https://github.com/nocobase/nocobase/pull/9134)) by @2013xile
