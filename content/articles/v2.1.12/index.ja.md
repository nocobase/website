### 🚀 機能改善

* **[flow-engine]** RunJS がリソース API でデータを更新した後、ポップアップを閉じた際に関連データブロックが自動更新されるようにしました。 ([#9873](https://github.com/nocobase/nocobase/pull/9873)) by @gchust
* **[client-v2]** JS block でブロックカードを表示するかどうかを設定できるようにしました。 ([#9897](https://github.com/nocobase/nocobase/pull/9897)) by @gchust

### 🐛 不具合修正

* **[client-v2]**
  * モバイル埋め込みページで、操作にアイコンのみモードを有効にしているもののアイコンが設定されていない場合、リンク操作のテキストが表示されない問題を修正しました。 ([#9921](https://github.com/nocobase/nocobase/pull/9921)) by @katherinehhh
  * v2 のテーブル行操作ボタンによって行の高さが変わる問題を修正しました。 ([#9866](https://github.com/nocobase/nocobase/pull/9866)) by @jiannx
  * v2 フォームの送信成功後、遷移リンクから保存済みのレスポンス結果レコードを参照できない問題を修正しました。 ([#9907](https://github.com/nocobase/nocobase/pull/9907)) by @katherinehhh
  * テーブルブロック設定で、ドラッグソート用フィールドが削除された後に実行エラーが発生する問題を修正しました。また、ドラッグソート用フィールド設定をクリアできるようにしました。 ([#9867](https://github.com/nocobase/nocobase/pull/9867)) by @jiannx
* **[client]** 一部の文言ミスを修正しました。 ([#9905](https://github.com/nocobase/nocobase/pull/9905)) by @Molunerfinn
* **[flow-engine]** runjs で ctx.openView の一部パラメータが有効にならない問題を修正しました。 ([#9883](https://github.com/nocobase/nocobase/pull/9883)) by @gchust
* **[cli]** cli で pnpm と yarn による更新に対応しました。 ([#9912](https://github.com/nocobase/nocobase/pull/9912)) by @chenos
* **[AIワーカー]**
  * AI データソースのカード一覧が、異なるビューポート幅に合わせて自動調整されない問題を修正しました。 ([#9924](https://github.com/nocobase/nocobase/pull/9924)) by @cgyrock
  * 異常なツール呼び出し履歴が後続の会話で繰り返し送信され、AIワーカーの返信が失敗する問題を修正しました。 ([#9900](https://github.com/nocobase/nocobase/pull/9900)) by @cgyrock
* **[ブロック：iframe]** 一般ユーザーが v2 の iframe HTML モードブロックを表示した際に 403 エラーになる問題を修正しました。 ([#9889](https://github.com/nocobase/nocobase/pull/9889)) by @jiannx
* **[AI: ナレッジベース]** バージョン管理とナレッジベースのドキュメント一覧で、内容が長い場合やビューポートの高さが不足している場合にレイアウトがはみ出す問題を修正しました。 by @cgyrock
* **[マイグレーション管理]** データベース同期テーブルのマイグレーションルール処理に関する問題を修正しました。 by @2013xile
* **[履歴]** 一部のデータテーブルで、変更内容が履歴に保存されない場合がある問題を修正しました。 by @2013xile
