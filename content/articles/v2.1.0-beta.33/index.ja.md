### 🎉 新機能

* **[Markdown]** Markdown ブロックで client v2 をサポート ([#9487](https://github.com/nocobase/nocobase/pull/9487)) by @jiannx
* **[ブロック：リスト]** リストブロックで client-v2 をサポート ([#9486](https://github.com/nocobase/nocobase/pull/9486)) by @jiannx
* **[カレンダー]** カレンダープラグインで client v2 をサポート。 ([#9464](https://github.com/nocobase/nocobase/pull/9464)) by @jiannx
* **[ブロック：ツリー]** ツリーフィルターブロックで client-v2 をサポート。 ([#9466](https://github.com/nocobase/nocobase/pull/9466)) by @jiannx

### 🚀 機能改善

* **[flow-engine]** イベントフロー設定ページを閉じる際に未保存データがある場合、確認メッセージを表示。 ([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust
* **[データソース管理]** データモデリングインターフェースを改善し、AI によるコメントテーブルの作成、外部データソースの関係フィールド設定、フィールドバリデーションルールの設定をサポート ([#9480](https://github.com/nocobase/nocobase/pull/9480)) by @2013xile
* **[ブロック：グリッドカード]** グリッドカードプラグインを更新し、client v2 をサポート ([#9484](https://github.com/nocobase/nocobase/pull/9484)) by @jiannx
* **[ブロック：iframe]** iframe ブロックで v2 をサポート。 ([#9485](https://github.com/nocobase/nocobase/pull/9485)) by @jiannx
* **[AI 従業員]** AI 従業員の並列セッションにおけるインタラクションとパフォーマンスを改善 ([#9462](https://github.com/nocobase/nocobase/pull/9462)) by @cgyrock

### 🐛 不具合修正

* **[client]**
  * フォーム送信アクションに「送信成功後」設定項目を追加。 ([#9414](https://github.com/nocobase/nocobase/pull/9414)) by @jiannx
  * テーブル内の関連フィールドでクイック編集が表示され、編集ポップアップを開けてしまう問題を修正 ([#9469](https://github.com/nocobase/nocobase/pull/9469)) by @katherinehhh
  * サブテーブル内の関係フィールドを表示のみとして設定した後、再読み込みすると表示されない、またはクリックできない問題を修正。 ([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx
  * 古いデフォルト値設定を削除できない問題を修正。 ([#9470](https://github.com/nocobase/nocobase/pull/9470)) by @gchust
  * v2 データブロックの複数選択フィールドで、選択肢ラベルではなく選択肢値が表示される問題を修正 ([#9472](https://github.com/nocobase/nocobase/pull/9472)) by @katherinehhh
* **[client-v2]**
  * テーブル内の関係フィールドで、タイトルフィールドの選択肢リストが空になる問題を修正 ([#9490](https://github.com/nocobase/nocobase/pull/9490)) by @katherinehhh
  * v2 レイアウトで v1 メニューを除外した後、空のグループが残る問題を修正 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) by @zhangzhonghe
* **[flow-engine]** サブモデルメニュー内の関係フィールドサブメニューの状態が不安定になる問題を修正 ([#9417](https://github.com/nocobase/nocobase/pull/9417)) by @jiannx
* **[ファイルマネージャー]** ファイルマネージャーで `tx-cos` アップロード後にファイルサイズのメタデータが不足する問題を修正。 ([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher
* **[AI 従業員]** AI プラグインの起動に失敗する問題を修正 ([#9483](https://github.com/nocobase/nocobase/pull/9483)) by @cgyrock
* **[ブロック：ステップフォーム]** v1 ステップフォームブロックを全高に設定した後、ページにスクロールバーが表示される問題を修正 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) by @katherinehhh
* **[ワークフロー：Webhook トリガー]** バリデーションルールによりレスポンスノードの作成に失敗する問題を修正 by @mytharcher
* **[データテーブルフィールド：手書き署名]** モバイル端末で署名ボックスの表示が異常になる問題を修正 by @chenzhizdt
