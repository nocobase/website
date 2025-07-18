### 🎉 新機能

* **[ワークフロー：日付計算ノード]** ノードのテスト実行をサポート @mytharcher

### 🚀 機能改善

* **[クライアント]** カラーピッカー：推奨カラーを 4 色追加（[#7226](https://github.com/nocobase/nocobase/pull/7226)）@zhangzhonghe
* **[ワークフロー]** 日付値の比較を互換性あるものにする（[#7237](https://github.com/nocobase/nocobase/pull/7237)）@mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * テーブルアクション列にスタイルルールが適用されない問題（[#7225](https://github.com/nocobase/nocobase/pull/7225)）@katherinehhh
  * メニューを削除した際に、uiSchemas テーブルの対応データが削除されない問題（[#7232](https://github.com/nocobase/nocobase/pull/7232)）@zhangzhonghe
  * appends で非関連フィールドが選択されるのを回避（[#7231](https://github.com/nocobase/nocobase/pull/7231)）@mytharcher
* **[ワークフロー：サブフロー]** 取消シグナルが到着したが保留中の実行が現在のインスタンスに存在しない場合に発生するエラーを修正 @mytharcher
