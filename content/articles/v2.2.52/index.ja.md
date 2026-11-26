### **🐛 不具合修正**

* **[client-v2]**

  * スマートフォンの狭い画面幅で、詳細ブロックとグリッドカード内の横並びの読み取り専用フィールドの間隔を縮小し、複数行テキストもコンパクトに表示するように改善。 ([#11673](https://github.com/nocobase/nocobase/pull/11673?utm_source=chatgpt.com))
  * モダンページを閲覧モードで開いた後、UI Editor を有効にしてブロックを追加すると、ページを更新した際にブロックが消える問題を修正。 ([#11672](https://github.com/nocobase/nocobase/pull/11672?utm_source=chatgpt.com))
* **[カスタム変数]** バッジ用の集計変数を設定する際、複数行テキストのフィルター条件に値を入力できない問題を修正。 ([#11688](https://github.com/nocobase/nocobase/pull/11688?utm_source=chatgpt.com))
* **[ファイルマネージャー]** 外部データソースを更新する際や、別の関連データを持つレコードを読み込む際に、エラーが発生することがある問題を修正。 ([#11698](https://github.com/nocobase/nocobase/pull/11698?utm_source=chatgpt.com))
* **[フォームの下書き]** ブラウザでローカルの下書きの読み込みや保存に失敗しても、フォームを通常どおり開き、入力・送信できるように修正。 ([#11671](https://github.com/nocobase/nocobase/pull/11671?utm_source=chatgpt.com))
* **[AI 従業員]** ログインページと二要素認証ページで、AI 従業員の一覧と未読件数を事前に取得するリクエストが送信される問題を修正。 ([#11691](https://github.com/nocobase/nocobase/pull/11691?utm_source=chatgpt.com))
* **[通知管理]** ワークフローから無効な通知先ユーザー設定が渡された場合、通知の送信を停止し、送信ログに修正方法を表示するように変更。 ([#11680](https://github.com/nocobase/nocobase/pull/11680?utm_source=chatgpt.com))
