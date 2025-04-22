### 🎉 新機能

* **[クライアント]** m2m配列フィールドで「テーブル選択レコード」変数を使用するサポートを追加しました ([#5974](https://github.com/nocobase/nocobase/pull/5974)) by @2013xile

### 🚀 改善点

* **[未定義]** テーマプラグインをデフォルトで有効化しました ([#5957](https://github.com/nocobase/nocobase/pull/5957)) by @zhangzhonghe
* **[データソース：メイン]** システムコレクションと同じ名前のコレクションを作成するユーザーを防ぐため、名前競合バリデーションを追加しました ([#5962](https://github.com/nocobase/nocobase/pull/5962)) by @chareice
* **[ワークフロー]** フィルターコンポーネントを除き、ほとんどすべての場所で日付範囲変数の誤用を避けます ([#5954](https://github.com/nocobase/nocobase/pull/5954)) by @mytharcher

### 🐛 バグ修正

* **[データベース]**
  * filterByTkでフィルターパラメーターを使用してデータが削除できなかったdestroyアクションの問題を修正しました ([#5976](https://github.com/nocobase/nocobase/pull/5976)) by @chareice
  * リポジトリのfirstOrCreateとupdateOrCreateメソッドがコンテキストを失う問題を修正しました ([#5973](https://github.com/nocobase/nocobase/pull/5973)) by @chenos
* **[クライアント]**
  * フォームに一对一関係フィールドを追加する際の問題を修正しました ([#5975](https://github.com/nocobase/nocobase/pull/5975)) by @katherinehhh
  * データ削除後、再びデータを選択した際にサブテーブルでのフィールド割り当てに関する問題を修正しました ([#5958](https://github.com/nocobase/nocobase/pull/5958)) by @katherinehhh
  * データに'children'という名前のフィールドを含むとテーブルブロックエラーが発生する問題を修正しました ([#5951](https://github.com/nocobase/nocobase/pull/5951)) by @zhangzhonghe
* **[データソース：メイン]** unixTimestampフィールドのレガシーサポートに関する問題を修正しました ([#5967](https://github.com/nocobase/nocobase/pull/5967)) by @chareice
* **[ワークフロー]** マニュアルノードUI設定でサブ詳細ブロックがエラーを投げる問題を修正しました ([#5953](https://github.com/nocobase/nocobase/pull/5953)) by @mytharcher
