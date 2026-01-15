### 🚀 機能改善

* **[evaluators]** より多くの関数を利用できるよう、math.js パッケージを最新版へ更新 ([#8411](https://github.com/nocobase/nocobase/pull/8411)) by @mytharcher
* **[通知：サイト内メッセージ]** 多数のユーザーへサイト内メッセージを送信する際のパフォーマンスを改善 ([#8402](https://github.com/nocobase/nocobase/pull/8402)) by @mytharcher

### 🐛 不具合修正

* **[client]**
  * 新規作成フォームにおいて、送信後もカスケードコンポーネントの値がクリアされない不具合を修正 ([#8403](https://github.com/nocobase/nocobase/pull/8403)) by @katherinehhh
  * 操作ボタンの schema に耐障害処理を追加し、クリック時にページがクラッシュする問題を防止 ([#8420](https://github.com/nocobase/nocobase/pull/8420)) by @mytharcher
  * 送信ボタンに二重確認と必須チェックのスキップを同時設定した場合、必須チェックのスキップが有効にならない不具合を修正 ([#8400](https://github.com/nocobase/nocobase/pull/8400)) by @katherinehhh
* **[データテーブルフィールド：多対多（配列）]** 関連クエリ時に、二次関連テーブルが多対多（配列）の場合にエラーが発生する不具合を修正 ([#8406](https://github.com/nocobase/nocobase/pull/8406)) by @cgyrock
* **[ワークフロー]** ワークフロー複製後、ノード設定内の画面設定 ID が更新されない問題を修正 ([#8396](https://github.com/nocobase/nocobase/pull/8396)) by @mytharcher
