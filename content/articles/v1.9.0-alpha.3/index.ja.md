### 🎉 新機能

* **[データソース：メイン]** メインデータソースにプラグインで定義されたテーブルを表示できるようにサポート（[#7187](https://github.com/nocobase/nocobase/pull/7187)）@aaaaaajie
* **[ワークフロー：日付計算ノード]** ノードのテスト実行をサポート @mytharcher

### 🚀 機能改善

* **[クライアント]** カラーピッカー：推奨カラーを 4 色追加（[#7226](https://github.com/nocobase/nocobase/pull/7226)）@zhangzhonghe
* **[ワークフロー]** 日付値の比較を互換性あるものにする（[#7237](https://github.com/nocobase/nocobase/pull/7237)）@mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * テーブルアクション列にスタイルルールが適用されない問題（[#7225](https://github.com/nocobase/nocobase/pull/7225)）@katherinehhh
  * appends で非関連フィールドが選択されるのを回避（[#7231](https://github.com/nocobase/nocobase/pull/7231)）@mytharcher
  * エラー修正：'react-device-detect' を解決できない問題（[#7224](https://github.com/nocobase/nocobase/pull/7224)）@zhangzhonghe
  * メニューを削除した際に、uiSchemas テーブルの対応データが削除されない問題（[#7232](https://github.com/nocobase/nocobase/pull/7232)）@zhangzhonghe
* **[データベース]** 外部データソーステーブルでシンプルページネーションを有効にした際のエラーを修正（[#7222](https://github.com/nocobase/nocobase/pull/7222)）@aaaaaajie
* **[コレクションフィールド：ソート]** レコード複製時にソートフィールドの選択が欠落する問題（[#7116](https://github.com/nocobase/nocobase/pull/7116)）@katherinehhh
* **[ワークフロー：サブフロー]** 取消シグナルが到着したが保留中の実行が現在のインスタンスに存在しない場合に発生するエラーを修正 @mytharcher
* **[ワークフロー：承認]**
  * 承認送信時の多階層関連データを修正 @mytharcher
  * レコード一覧において削除された承認に対するフォールトトレランスを追加 @mytharcher
* **[メールマネージャー]** メールメッセージ一覧のパフォーマンスを最適化 @jiannx
