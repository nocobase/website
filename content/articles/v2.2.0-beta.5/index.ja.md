### 🚀 機能改善

* **[cli]** env 設定の schema バージョン記録を追加しました。([#9782](https://github.com/nocobase/nocobase/pull/9782)) by @chenos
* **[File manager]** PDF プレビューを改善しました。クロスオリジンの PDF ファイルはブラウザー標準のプレビューを使用し、同一オリジンの PDF ファイルは引き続き PDF.js でレンダリングします。([#9796](https://github.com/nocobase/nocobase/pull/9796)) by @mytharcher

### 🐛 不具合修正

* **[client-v2]**
  * ブロックをテンプレートに変換した後、イベントフロー設定を再編集できなくなる問題を修正しました。([#9585](https://github.com/nocobase/nocobase/pull/9585)) by @gchust
  * v2 フィルターフォームのチェックボックスドロップダウン選択肢で、翻訳テキストが表示されない問題を修正しました。([#9792](https://github.com/nocobase/nocobase/pull/9792)) by @katherinehhh
  * v2 テーブルのリレーションフィールドで、タイトルフィールドに時刻、日付、または日時フィールドを使用した場合の表示およびフォーマット設定が正しくない問題を修正しました。([#9785](https://github.com/nocobase/nocobase/pull/9785)) by @katherinehhh
* **[Flow engine]** AI による構築時に、ポップアップ内の現在レコードフォームと詳細データが正しくない問題を修正しました。([#9788](https://github.com/nocobase/nocobase/pull/9788)) by @gchust
* **[Workflow: Custom action event]** アクションパネル v2 のワークフロートリガーボタンで、ワークフローが未バインドの場合でも成功と表示され、リクエストが送信される問題を修正しました。([#9798](https://github.com/nocobase/nocobase/pull/9798)) by @mytharcher
* **[AI employees]** AI employees がサブテーブルデータを正しく入力できない問題を修正しました。([#9801](https://github.com/nocobase/nocobase/pull/9801)) by @gchust
