### 🚀 機能改善

* **[flow-engine]** イベントフロー設定ページを閉じる際に未保存データがある場合、確認メッセージを表示。 ([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust

### 🐛 不具合修正

* **[client]**
  * テーブル内の関連フィールドでクイック編集が表示され、編集ポップアップを開けてしまう問題を修正 ([#9469](https://github.com/nocobase/nocobase/pull/9469)) by @katherinehhh
  * サブテーブル内の関係フィールドを表示のみとして設定した後、再読み込みすると表示されない、またはクリックできない問題を修正。 ([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx
  * v2 データブロックの複数選択フィールドで、選択肢ラベルではなく選択肢値が表示される問題を修正 ([#9472](https://github.com/nocobase/nocobase/pull/9472)) by @katherinehhh
* **[ブロック：ステップフォーム]** v1 ステップフォームブロックを全高に設定した後、ページにスクロールバーが表示される問題を修正 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) by @katherinehhh
