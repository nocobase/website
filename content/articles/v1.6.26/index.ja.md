### 🎉 新機能

* **[ブロック: iframe]** iframe ブロックが allow 属性の設定をサポートするようになりました（[#6824](https://github.com/nocobase/nocobase/pull/6824)）by @zhangzhonghe
* **[テンプレート印刷]** 機能：テンプレート印刷で `{ ラベル, 値 }` 形式のセレクトオプションをサポートします。by @sheldon66

### 🐛 不具合修正

* **[クライアント]**
  * ネストされたサブページで、「ブロックを追加」ボタンにマウスをホバーしてもブロックリストが表示されない問題を修正しました（[#6832](https://github.com/nocobase/nocobase/pull/6832)）by @zhangzhonghe
  * フィルターフォームのリレーションフィールドコンポーネントをデータセレクターに変更した際に、「複数選択を許可」の設定項目がない問題を修正しました（[#6656](https://github.com/nocobase/nocobase/pull/6656)）by @zhangzhonghe
  * フォームフィールドで検証ルールに違反したときに複数のエラーメッセージが表示される問題を修正しました（[#6805](https://github.com/nocobase/nocobase/pull/6805)）by @katherinehhh
  * サブテーブル内のサブフォーム（ポップアップ）で連動ルールを設定する際の問題を修正しました（[#6803](https://github.com/nocobase/nocobase/pull/6803)）by @katherinehhh
  * フィルターフォームで 1 対多フィールドのサブフィールドをフィルタリングオプションとして選択できない問題を修正しました（[#6809](https://github.com/nocobase/nocobase/pull/6809)）by @zhangzhonghe
  * 読み取り専用モードでのサブテーブルページネーションバーのスタイル問題を修正しました（[#6830](https://github.com/nocobase/nocobase/pull/6830)）by @katherinehhh
  * フィルターフォーム内のテーブルセレクターのスタイルが異常な問題を修正しました（[#6827](https://github.com/nocobase/nocobase/pull/6827)）by @zhangzhonghe
* **[データベース]**
  * MariaDB で外部キーが bigInt の場合、appends で belongs-to 関連が読み込まれない問題を修正しました（[#6823](https://github.com/nocobase/nocobase/pull/6823)）by @mytharcher
  * テストケースを修正しました（[#6811](https://github.com/nocobase/nocobase/pull/6811)）by @mytharcher
* **[コレクションフィールド：添付ファイル (URL)]** 添付ファイル (URL) フィールドで連動ルールにおける値の設定を許可しないように修正しました（[#6831](https://github.com/nocobase/nocobase/pull/6831)）by @katherinehhh
* **[ワークフロー：カスタムアクションイベント]** トリガーされたワークフローアクションの連携問題を修正しました by @katherinehhh
