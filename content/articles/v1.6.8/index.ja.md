### 🐛 バグ修正

- **[server]** アップグレードコマンドはワークフローエラーを引き起こす可能性があります ([#6524](https://github.com/nocobase/nocobase/pull/6524)) by @gchust

- **[client]** フォーム内のサブテーブルの高さは、フォームの高さに合わせて設定されます ([#6518](https://github.com/nocobase/nocobase/pull/6518)) by @katherinehhh

- **[Authentication]**
  - X-Authenticator が欠落しています ([#6526](https://github.com/nocobase/nocobase/pull/6526)) by @chenos
  - オーセンティケーターのオプションの前後の空白および改行を除去 ([#6527](https://github.com/nocobase/nocobase/pull/6527)) by @2013xile

- **[Block: Map]** マップブロックのキー管理において、不可視文字によりリクエストが失敗する問題 ([#6521](https://github.com/nocobase/nocobase/pull/6521)) by @katherinehhh

- **[Backup manager]** 復元によりワークフローの実行エラーが発生する可能性があります by @gchust

- **[WeCom]** 通知設定の取得時に、環境変数およびシークレットを解析します by @2013xile