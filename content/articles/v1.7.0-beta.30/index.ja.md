### 🐛 不具合修正

* **[クライアント]**
  * フィルターフォームのリレーションフィールドコンポーネントをデータセレクターに変更した際に、「複数選択を許可」の設定項目がない問題を修正しました（[#6656](https://github.com/nocobase/nocobase/pull/6656)）by @zhangzhonghe
  * フィルターフォーム内のテーブルセレクターのスタイルが異常な問題を修正しました（[#6827](https://github.com/nocobase/nocobase/pull/6827)）by @zhangzhonghe
  * ネストされたサブページで、「ブロックを追加」ボタンにマウスをホバーしてもブロックリストが表示されない問題を修正しました（[#6832](https://github.com/nocobase/nocobase/pull/6832)）by @zhangzhonghe
  * 関連コレクションのフィールドを表示する際に、複数の関連フィールドの送信に失敗する問題を修正しました（[#6833](https://github.com/nocobase/nocobase/pull/6833)）by @katherinehhh
  * 複製ボタン上に他のボタンをドラッグできない問題を修正しました（[#6822](https://github.com/nocobase/nocobase/pull/6822)）by @katherinehhh
  * 読み取り専用モードでのサブテーブルページネーションバーのスタイル問題を修正しました（[#6830](https://github.com/nocobase/nocobase/pull/6830)）by @katherinehhh
* **[データベース]** MariaDB で外部キーが bigInt の場合、appends で belongs-to 関連が読み込まれない問題を修正しました（[#6823](https://github.com/nocobase/nocobase/pull/6823)）by @mytharcher
* **[コレクションフィールド：添付ファイル (URL)]** 添付ファイル (URL) フィールドで連動ルールにおける値の設定を許可しないように修正しました（[#6831](https://github.com/nocobase/nocobase/pull/6831)）by @katherinehhh
