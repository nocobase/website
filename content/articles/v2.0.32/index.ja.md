### 🚀 機能改善

* **[undefined]** README に目次を追加 ([#8878](https://github.com/nocobase/nocobase/pull/8878)) by @gaston98765

### 🐛 不具合修正

* **[client]**
  * サブテーブルの関連フィールドを保存できない問題を修正 ([#9004](https://github.com/nocobase/nocobase/pull/9004)) by @jiannx
  * フィールドのサブフォームにデータが表示されない問題を修正 ([#9008](https://github.com/nocobase/nocobase/pull/9008)) by @jiannx
  * ctx.request で Authorization ヘッダーを上書きできない問題を修正 ([#8850](https://github.com/nocobase/nocobase/pull/8850)) by @gchust
* **[server]** サービスモードではないインスタンスがアプリ状態を更新しないよう、配信アプリの状態にサービスモードのチェックを追加 ([#8959](https://github.com/nocobase/nocobase/pull/8959)) by @mytharcher
* **[AI 従業員]**
  * Dashscope で deepseek または minmax モデルを使用した際にエラーが発生する問題を修正 ([#9033](https://github.com/nocobase/nocobase/pull/9033)) by @cgyrock
  * AI 従業員の推論処理を中断するとサービスがクラッシュする問題を修正 ([#9031](https://github.com/nocobase/nocobase/pull/9031)) by @cgyrock
* **[ワークフロー：HTTP リクエストノード]** ワークフロー HTTP リクエストノードの結果構造を整理し、リクエスト設定が露出しないよう改善。新しいノードではデフォルトでレスポンスデータのみを返し、リクエスト失敗時にはデバッグログを追加。 ([#9024](https://github.com/nocobase/nocobase/pull/9024)) by @mytharcher
* **[データテーブルフィールド：ソート]** scopeKey が未定義の場合に、field-sort プラグインがクラッシュする問題を修正 ([#9019](https://github.com/nocobase/nocobase/pull/9019)) by @gaston98765
* **[ブロック：グリッドカード]** グリッドカード更新時にボタンが更新されない問題を修正 ([#9021](https://github.com/nocobase/nocobase/pull/9021)) by @jiannx
* **[ワークフロー：承認]**
  * 削除されたワークフローに対する例外処理を追加し、ToDo リストの読み込みエラーを回避 by @mytharcher
  * 「提出ラウンド」データが不足している場合の例外処理を追加 by @mytharcher
