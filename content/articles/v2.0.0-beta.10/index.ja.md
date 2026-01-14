### 🚀 機能改善

* **[client]** イベントフローにおいて、実行タイミングを指定できるように改善 ([#8340](https://github.com/nocobase/nocobase/pull/8340)) by @gchust
* **[AI 従業員]**
  * AI 従業員のメインエントリーボタンのデザインと操作性を改善 ([#8414](https://github.com/nocobase/nocobase/pull/8414)) by @heziqiang
  * エントリー一覧から構成系の AI 従業員を非表示にし、LLM 連携フローを最適化、あわせて Gemini-3 モデル関連ドキュメントを更新 ([#8409](https://github.com/nocobase/nocobase/pull/8409)) by @heziqiang
* **[通知：サイト内メッセージ]** 多数のユーザーへサイト内メッセージを送信する際のパフォーマンスを改善 ([#8402](https://github.com/nocobase/nocobase/pull/8402)) by @mytharcher

### 🐛 不具合修正

* **[client]**
  * 数値入力コンポーネントで値が表示されない不具合を修正 ([#8410](https://github.com/nocobase/nocobase/pull/8410)) by @chenos
  * 新規作成フォームにおいて、カスケードコンポーネントが正常に送信された後も値がクリアされない問題を修正 ([#8403](https://github.com/nocobase/nocobase/pull/8403)) by @katherinehhh
  * 送信ボタンに二重確認と必須チェックのスキップを同時に設定した場合、必須チェックのスキップが有効にならない不具合を修正 ([#8400](https://github.com/nocobase/nocobase/pull/8400)) by @katherinehhh
  * ファイル関連テーブルの一対一リレーションフィールドで、ファイル選択ダイアログ右下に送信ボタンが表示されてしまう問題を修正 ([#8398](https://github.com/nocobase/nocobase/pull/8398)) by @katherinehhh
  * グリッドカードブロックで layout 設定にコロンがない場合、設定が反映されない不具合を修正 ([#8399](https://github.com/nocobase/nocobase/pull/8399)) by @katherinehhh
  * フォームの数値入力欄に漢字を入力した際、値の代入が防止されない問題を修正 ([#8397](https://github.com/nocobase/nocobase/pull/8397)) by @katherinehhh
* **[データテーブルフィールド：多対多（配列）]** 関連クエリ時に、二次関連テーブルが多対多（配列）の場合にエラーが発生する不具合を修正 ([#8406](https://github.com/nocobase/nocobase/pull/8406)) by @cgyrock
* **[マルチスペース]**
  * 関連データ追加時に、関連スペースが正しく設定されるよう改善 by @jiannx
  * スペースセレクターのカラーがテーマ設定に追従するよう改善 by @jiannx
