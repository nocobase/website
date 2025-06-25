### 🎉 新機能

* **[データソースマネージャー]** ✨ 外部データソースからのコレクションの必要時読み込みをサポート（[#6979](https://github.com/nocobase/nocobase/pull/6979)）@aaaaaajie
* **[ワークフロー: HTTP リクエストノード]** `multipart/form-data`形式のリクエストをサポート（[#7087](https://github.com/nocobase/nocobase/pull/7087)）@shushu992
* **[データソース：外部 SQL Server]** 外部データソースからのコレクションの必要時読み込みをサポート @aaaaaajie

### 🐛 不具合修正

* **[クライアント]**
  * URL クエリパラメータ変数が空の場合、データ範囲条件が削除されない問題（[#7104](https://github.com/nocobase/nocobase/pull/7104)）@zhangzhonghe
  * 時間付き日付フィールドの範囲制限が誤って適用される問題（[#7107](https://github.com/nocobase/nocobase/pull/7107)）@katherinehhh
* **[モバイル]** モバイルポップアップの z-index 設定不具合を修正（[#7110](https://github.com/nocobase/nocobase/pull/7110)）@zhangzhonghe
* **[カレンダー]** カレンダーブロックのクイック作成フォームにおける日付フィールドの問題（[#7106](https://github.com/nocobase/nocobase/pull/7106)）@katherinehhh
* **[ワークフロー：承認]**
  * エラーを発生させる旧バージョンの変数 API を修正 @mytharcher
  * モバイル表示スタイルを修正 @mytharcher
  * 承認関連コレクションが削除された際のエラーを修正 @mytharcher
* **[メールマネージャー]** 添付ファイルが表示されない問題 @jiannx
