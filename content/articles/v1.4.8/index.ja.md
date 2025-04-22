### 🐛 バグ修正

* **[クライアント]**
  * 関連フィールドレコードピッカーで設定されたフィルターフォームのデータテンプレート問題を修正 ([#5837](https://github.com/nocobase/nocobase/pull/5837)) by @katherinehhh
  * Markdown文字列テンプレートが関連データ（外部データソース）のデータをロードしない問題を修正 ([#5791](https://github.com/nocobase/nocobase/pull/5791)) by @katherinehhh
* **[ユーザーデータ同期]** 同期中にサポートされていないデータタイプをスキップしてエラーをスローする代わりに ([#5835](https://github.com/nocobase/nocobase/pull/5835)) by @chenzhizdt
* **[バックアップマネージャー]**
  * 大きなバックアップファイルのダウンロードウィンドウが遅くポップアップされる問題を修正 by @gchust
  * バックアップサブアプリケーションをリストアしてすべてのアプリケーションが再起動する問題を修正 by @gchust
