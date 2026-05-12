### 🎉 新機能

* **[client]**
  * ページメニュー項目で連動ルールを設定できるように ([#9304](https://github.com/nocobase/nocobase/pull/9304)) by @zhangzhonghe
  * v2 に現在のユーザー言語変数を追加 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) by @katherinehhh

### 🚀 機能改善

* **[client-v2]** v2 レイアウトで v1 メニューを除外し、v2 メニューのみを表示 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) by @zhangzhonghe
* **[undefined]** nb cli で session レベルの current env をサポート ([#9415](https://github.com/nocobase/nocobase/pull/9415)) by @chenos
* **[AI 従業員]** AI 従業員が複数のセッションを並列処理できるように ([#9344](https://github.com/nocobase/nocobase/pull/9344)) by @cgyrock
* **[部門]** 部門リストのスタイルを改善し、アイコンの追加と間隔の調整を実施 ([#9435](https://github.com/nocobase/nocobase/pull/9435)) by @katherinehhh

### 🐛 不具合修正

* **[build]** v1 client のビルド時に、他のプラグインの `/client-v2` エントリを参照するとエラーが発生する問題を修正。 ([#9436](https://github.com/nocobase/nocobase/pull/9436)) by @Molunerfinn
* **[client]**
  * v2 サブテーブル内の対多関係フィールドのコンポーネント一覧に、サブテーブルコンポーネントが表示される問題を修正 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) by @katherinehhh
  * 操作ボタンの連動ルールがまれに有効にならない問題を修正。 ([#9430](https://github.com/nocobase/nocobase/pull/9430)) by @gchust
* **[ビジュアルデータテーブル管理]** Graphical interface の自動レイアウトで “to do update action, filter or filterByTk is required” エラーが発生する問題を修正 ([#9421](https://github.com/nocobase/nocobase/pull/9421)) by @katherinehhh
* **[ブロック：ツリー]** ツリーフィルターブロックの設定を改善し、未対応の関連レコード入口、タイトルフィールドが欠落している場合のメッセージ、検索を閉じた後のリセット挙動を修正。 ([#9426](https://github.com/nocobase/nocobase/pull/9426)) by @jiannx
