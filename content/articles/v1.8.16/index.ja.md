### 🚀 機能改善

* **[通知：アプリ内メッセージ]** `console.log`による SQL ログ出力を削除（[#7368](https://github.com/nocobase/nocobase/pull/7368)）@2013xile

### 🐛 不具合修正

* **[サーバー]** 一部リクエストに`ctx.action`がなく、監査ログミドルウェアでエラーが発生する問題を修正（[#7369](https://github.com/nocobase/nocobase/pull/7369)）@2013xile
* **[コレクションフィールド：数式]** 変数の型により数式入力が検証を通過できない問題を修正（[#7373](https://github.com/nocobase/nocobase/pull/7373)）@mytharcher
* **[バックアップマネージャー]** 大ファイルのバックアップが実際に完了する前に「成功」と表示される問題を修正 @gchust
