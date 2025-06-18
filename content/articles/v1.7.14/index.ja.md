### 🚀 機能改善

* **[クライアント]** グリッドカードブロックのアクションバーを空の場合に自動的に非表示にする（[#7069](https://github.com/nocobase/nocobase/pull/7069)）@zhangzhonghe
* **[認証]** `verifiers:listByUser` API のレスポンスから検証者オプションを削除する（[#7090](https://github.com/nocobase/nocobase/pull/7090)）@2013xile

### 🐛 不具合修正

* **[データベース]** updateOrCreate と firstOrCreate で関連情報の更新をサポートする（[#7088](https://github.com/nocobase/nocobase/pull/7088)）@chenos
* **[クライアント]**
  * 公開フォームのフィールド初期値で URL のクエリパラメータ変数が機能しない問題（[#7084](https://github.com/nocobase/nocobase/pull/7084)）@katherinehhh
  * サブテーブルの列フィールドにスタイル条件が正しく適用されない問題（[#7083](https://github.com/nocobase/nocobase/pull/7083)）@katherinehhh
  * フィルターフォームで関連コレクションフィールドを通じたフィルタリングが無効な問題（[#7070](https://github.com/nocobase/nocobase/pull/7070)）@zhangzhonghe
* **[コレクションフィールド：多対多（配列）]** 多対多（配列）フィールドを更新する際、`updatedBy` フィールドが存在するとエラーが発生する問題（[#7089](https://github.com/nocobase/nocobase/pull/7089)）@2013xile
* **[公開フォーム]** 公開フォームの送信時に未認証アクセスが発生する問題を修正（[#7085](https://github.com/nocobase/nocobase/pull/7085)）@zhangzhonghe
