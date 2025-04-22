### 🚀 改善点

* **[クライアント]** ブロックイニシャライザーにより適切な意味を持つアイコンを使用するように変更 ([#5757](https://github.com/nocobase/nocobase/pull/5757)) by @mytharcher

### 🐛 バグ修正

* **[クライアント]**
  * アイコンの変更に基づくE2Eケースを修正 ([#5768](https://github.com/nocobase/nocobase/pull/5768)) by @mytharcher
  * データが空の時、選択フィールドが空白を表示する問題を修正 ([#5762](https://github.com/nocobase/nocobase/pull/5762)) by @katherinehhh
* **[データベース]** 外部キーなしでhasOne/belongsTo関連値を更新する問題を修正 ([#5754](https://github.com/nocobase/nocobase/pull/5754)) by @chareice
* **[データソースマネージャー]** ソースキーの表示を修正 ([#5771](https://github.com/nocobase/nocobase/pull/5771)) by @katherinehhh
* **[ワークフロー：カスタムアクションイベント]**
  * 外部データソースでカスタムアクションイベントをトリガーするすべてのロールを許可 by @mytharcher
  * デフォルトデータソースをメインとして設定する問題を修正 by @mytharcher
  * データソースが一致しない場合のエラーを修正 by @mytharcher
  * 関連でカスタムアクショントリガーがトリガーされない問題を修正 by @mytharcher
