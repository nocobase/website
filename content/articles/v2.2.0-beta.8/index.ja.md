### 🚀 機能改善

* **[cli]** OAuth デバイス認可モードに対応しました。 ([#9922](https://github.com/nocobase/nocobase/pull/9922)) by @chenos
* **[client-v2]** JS block でブロックカードを表示するかどうかを設定できるようにしました。 ([#9897](https://github.com/nocobase/nocobase/pull/9897)) by @gchust
* **[flow-engine]** RunJS がリソース API でデータを更新した後、ポップアップを閉じた際に関連データブロックが自動更新されるようにしました。 ([#9873](https://github.com/nocobase/nocobase/pull/9873)) by @gchust
* **[フォーム下書き]** フォーム下書きプラグインを client v2 に移行しました。 ([#9910](https://github.com/nocobase/nocobase/pull/9910)) by @gchust

### 🐛 不具合修正

* **[client-v2]**
  * モバイル埋め込みページで、操作にアイコンのみモードを有効にしているもののアイコンが設定されていない場合、リンク操作のテキストが表示されない問題を修正しました。 ([#9921](https://github.com/nocobase/nocobase/pull/9921)) by @katherinehhh
  * UI 設定モードでページを更新した際、「ページがありません」という案内が一瞬表示される問題を修正しました。 ([#9918](https://github.com/nocobase/nocobase/pull/9918)) by @katherinehhh
  * v2 フォームの送信成功後、遷移リンクから保存済みのレスポンス結果レコードを参照できない問題を修正しました。 ([#9907](https://github.com/nocobase/nocobase/pull/9907)) by @katherinehhh
  * モバイル埋め込みページで、操作にアイコンのみモードを有効にしているもののアイコンが設定されていない場合、リンク操作のテキストが表示されない問題を修正しました。 ([#9919](https://github.com/nocobase/nocobase/pull/9919)) by @katherinehhh
  * v2 のテーブル行操作ボタンによって行の高さが変わる問題を修正しました。 ([#9866](https://github.com/nocobase/nocobase/pull/9866)) by @jiannx
  * テーブルブロック設定で、ドラッグソート用フィールドが削除された後に実行エラーが発生する問題を修正しました。また、ドラッグソート用フィールド設定をクリアできるようにしました。 ([#9867](https://github.com/nocobase/nocobase/pull/9867)) by @jiannx
* **[flow-engine]**
  * モバイル端末のハーフモーダルで内容が長い場合に、スクロールできない問題を修正しました。 ([#9871](https://github.com/nocobase/nocobase/pull/9871)) by @zhangzhonghe
  * runjs で ctx.openView の一部パラメータが有効にならない問題を修正しました。 ([#9883](https://github.com/nocobase/nocobase/pull/9883)) by @gchust
* **[cli]** cli で pnpm と yarn による更新に対応しました。 ([#9912](https://github.com/nocobase/nocobase/pull/9912)) by @chenos
* **[client]** 一部の文言ミスを修正しました。 ([#9905](https://github.com/nocobase/nocobase/pull/9905)) by @Molunerfinn
* **[フロントエンドフローエンジン]** Flow Surfaces API でモバイルページを正しく作成できない問題を修正しました。 ([#9911](https://github.com/nocobase/nocobase/pull/9911)) by @gchust
* **[AIワーカー]**
  * AI データソースのカード一覧が、異なるビューポート幅に合わせて自動調整されない問題を修正しました。 ([#9924](https://github.com/nocobase/nocobase/pull/9924)) by @cgyrock
  * 異常なツール呼び出し履歴が後続の会話で繰り返し送信され、AIワーカーの返信が失敗する問題を修正しました。 ([#9900](https://github.com/nocobase/nocobase/pull/9900)) by @cgyrock
* **[バックアップマネージャー]** v2 バックアップマネージャーの設定ページで、ラベルが不自然に太字になり、他の設定ページとスタイルが一致しない問題を修正しました。 ([#9908](https://github.com/nocobase/nocobase/pull/9908)) by @katherinehhh
* **[ブロック：iframe]** 一般ユーザーが v2 の iframe HTML モードブロックを表示した際に 403 エラーになる問題を修正しました。 ([#9889](https://github.com/nocobase/nocobase/pull/9889)) by @jiannx
* **[データソース：外部 NocoBase]** NocoBase 外部データソースで、接続設定にランタイムオブジェクトが含まれている場合に読み込みが失敗する問題を修正しました。 by @2013xile
* **[AI: ナレッジベース]** バージョン管理とナレッジベースのドキュメント一覧で、内容が長い場合やビューポートの高さが不足している場合にレイアウトがはみ出す問題を修正しました。 by @cgyrock
* **[マイグレーション管理]** データベース同期テーブルのマイグレーションルール処理に関する問題を修正しました。 by @2013xile
* **[履歴]**
  * 一部のデータテーブルで、変更内容が履歴に保存されない場合がある問題を修正しました。 by @2013xile
  * レコード履歴を有効にした後、外部 NocoBase データソースの読み込みが失敗する問題を修正しました。 by @2013xile
* **[アプリケーションスーパーバイザー]** Client V2 のアプリケーション監視で、Applications タブの登録エラーを修正しました。 by @2013xile
* **[WeCom]** Client V2 で WeCom プラグインを有効にした後、ルーティングメニューを切り替える際にページが一時的に白画面になる問題を修正しました。 by @2013xile
