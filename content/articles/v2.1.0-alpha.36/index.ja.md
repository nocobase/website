### 🎉 新機能

* **[Markdown]** Markdown ブロックで client v2 をサポート ([#9487](https://github.com/nocobase/nocobase/pull/9487)) by @jiannx
* **[ブロック：リスト]** リストブロックで client-v2 をサポート ([#9486](https://github.com/nocobase/nocobase/pull/9486)) by @jiannx

### 🚀 機能改善

* **[flow-engine]** イベントフロー設定ページを閉じる際に未保存データがある場合、確認メッセージを表示。 ([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust
* **[cli]** NocoBase CLI のインストールと管理の対話フローを Inquirer に移行し、案内表示を改善。あわせて、関連するインストール、スキル管理、Docker ランタイムの問題を修正。 ([#9452](https://github.com/nocobase/nocobase/pull/9452)) by @chenos
* **[データソース管理]** データモデリングインターフェースを改善し、AI によるコメントテーブルの作成、外部データソースの関係フィールド設定、フィールドバリデーションルールの設定をサポート ([#9480](https://github.com/nocobase/nocobase/pull/9480)) by @2013xile
* **[ブロック：グリッドカード]** グリッドカードプラグインを更新し、client v2 をサポート ([#9484](https://github.com/nocobase/nocobase/pull/9484)) by @jiannx
* **[ブロック：iframe]** iframe ブロックで v2 をサポート。 ([#9485](https://github.com/nocobase/nocobase/pull/9485)) by @jiannx

### 🐛 不具合修正

* **[client]**
  * サブテーブル内の関係フィールドを表示のみとして設定した後、再読み込みすると表示されない、またはクリックできない問題を修正。 ([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx
  * フォーム送信アクションに「送信成功後」設定項目を追加。 ([#9414](https://github.com/nocobase/nocobase/pull/9414)) by @jiannx
* **[client-v2]** テーブル内の関係フィールドで、タイトルフィールドの選択肢リストが空になる問題を修正 ([#9490](https://github.com/nocobase/nocobase/pull/9490)) by @katherinehhh
* **[flow-engine]** サブモデルメニュー内の関係フィールドサブメニューの状態が不安定になる問題を修正 ([#9417](https://github.com/nocobase/nocobase/pull/9417)) by @jiannx
* **[ファイルマネージャー]** ファイルマネージャーで `tx-cos` アップロード後にファイルサイズのメタデータが不足する問題を修正。 ([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher
* **[データテーブルフィールド：手書き署名]** モバイル端末で署名ボックスの表示が異常になる問題を修正 by @chenzhizdt
