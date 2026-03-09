### 🚀 機能改善

* **[Redis 分散ロックアダプター]** メインリポジトリの LockManager インターフェース変更に基づいてリファクタリング by @mytharcher
* **[バックアップマネージャー]** 重複バックアップを防ぐため、定期バックアップに分散ロックを追加 by @mytharcher

### 🐛 不具合修正

* **[client]**
  * v2ブロックで、現在のデータソースがサポートする操作のみ表示されるよう修正 ([#8803](https://github.com/nocobase/nocobase/pull/8803)) by @zhangzhonghe
  * v2サブページの戻るボタンのスタイル異常を修正 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) by @zhangzhonghe
* **[lock-manager]** ロックマネージャーの競合状態の問題を修正 ([#8734](https://github.com/nocobase/nocobase/pull/8734)) by @mytharcher
* **[server]** 非データベース系データソースのテーブルクエリでエラーが発生する問題を修正 ([#8776](https://github.com/nocobase/nocobase/pull/8776)) by @cgyrock
* **[権限制御]** Restful APIデータソースのデータ更新操作でエラーが発生する問題を修正 ([#8788](https://github.com/nocobase/nocobase/pull/8788)) by @cgyrock
* **[操作：レコードエクスポート]** 多対多配列フィールドをエクスポートした後に空白になる問題を修正 ([#8787](https://github.com/nocobase/nocobase/pull/8787)) by @cgyrock
