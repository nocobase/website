### 🚀 機能改善

* **[evaluators]** より多くの関数を利用できるよう、math.js パッケージを最新版へ更新 ([#8411](https://github.com/nocobase/nocobase/pull/8411)) by @mytharcher
* **[client]** リッチテキストエディターで、フォントサイズ変更、画像サイズ変更、ソフト改行に対応 ([#8401](https://github.com/nocobase/nocobase/pull/8401)) by @jiannx
* **[AI 従業員]** ワークフローの実行結果を `execution.output` から取得する方式に統一し、出力ノードを利用することで安定した結果が得られるよう改善 ([#8423](https://github.com/nocobase/nocobase/pull/8423)) by @mytharcher

### 🐛 不具合修正

* **[client]**
  * 操作ボタンの schema に耐障害処理を追加し、クリック時にページがクラッシュする問題を防止 ([#8420](https://github.com/nocobase/nocobase/pull/8420)) by @mytharcher
  * フォームのリレーションフィールドにおいて、タイトルに添付ファイル URL を設定後、別のフィールドへ変更するとタイトル設定が消えてしまう不具合を修正 ([#8418](https://github.com/nocobase/nocobase/pull/8418)) by @katherinehhh
  * 新規作成フォームでリレーションフィールドを閲覧モードに設定した際、タイトルフィールドの切り替えが反映されない問題を修正 ([#8413](https://github.com/nocobase/nocobase/pull/8413)) by @katherinehhh
* **[フロントエンドフローエンジン]** filterByTk が配列の場合に、変数が正しく解析されない不具合を修正 ([#8412](https://github.com/nocobase/nocobase/pull/8412)) by @gchust
* **[テンプレート印刷]** スペースフィールドに対応 by @jiannx
