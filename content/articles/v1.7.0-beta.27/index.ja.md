### 🎉 新機能

* **[クライアント]** 二次確認のタイトルと内容に変数をサポートする（[#6787](https://github.com/nocobase/nocobase/pull/6787)） by @katherinehhh
* **[テンプレート印刷]**
  * 文書テンプレートにおけるダイナミック画像とバーコードレンダリングをサポートする。by @sheldon66
  * 機能：テンプレート印刷において`{ label, value }`形式の Select オプションをサポートする。by @sheldon66
* **[ブロック：ツリー]** ツリーブロックのフィルターに連携ルールをサポートする by @katherinehhh
* **[データビジュアライゼーション: ECharts]** 棒グラフに「Y 軸反転」設定を追加する by @2013xile

### 🚀 機能改善

* **[クライアント]** サブテーブルの追加ボタンのスタイルを最適化し、ページネーターを同行に配置する（[#6790](https://github.com/nocobase/nocobase/pull/6790)） by @katherinehhh
* **[ファイルマネージャー]** OSS のタイムアウトオプションを追加し、デフォルトを 10 分に設定する（[#6795](https://github.com/nocobase/nocobase/pull/6795)） by @mytharcher
* **[パスワードポリシー]** デフォルトのパスワード有効期限を「永遠有効」に変更する by @2013xile

### 🐛 不具合修正

* **[データベース]**
  * テストケースを修正する（[#6811](https://github.com/nocobase/nocobase/pull/6811)） by @mytharcher
  * データ型が文字列でない場合に発生するエラーを回避する（[#6797](https://github.com/nocobase/nocobase/pull/6797)） by @mytharcher
* **[クライアント]**
  * 変数選択が非同期ロードを必要とする場合、最後に選択したメニューが失われる問題を修正する。（[#6802](https://github.com/nocobase/nocobase/pull/6802)） by @gchust
  * フィルターフォームにおいて、一対多フィールドのサブフィールドがフィルタリングオプションとして選択できない問題を修正する（[#6809](https://github.com/nocobase/nocobase/pull/6809)） by @zhangzhonghe
  * サブテーブル内のサブフォーム（ポップアップ）における連携ルールの設定問題を修正する（[#6803](https://github.com/nocobase/nocobase/pull/6803)） by @katherinehhh
  * フォームフィールドにおいて、バリデーションルールに違反したときに複数のエラーメッセージが表示される問題を修正する（[#6805](https://github.com/nocobase/nocobase/pull/6805)） by @katherinehhh
  * 関連コレクションのフィールドを表示する際に、関連フィールドがデータを送信しない問題を修正する（[#6798](https://github.com/nocobase/nocobase/pull/6798)） by @katherinehhh
  * サブテーブル内のサブフォーム（ポップアップ）の連携ルールにおいて、フィールド属性の設定が欠落する問題を修正する（[#6800](https://github.com/nocobase/nocobase/pull/6800)） by @katherinehhh
* **[認証]** 認証器名の変更を禁止する（[#6808](https://github.com/nocobase/nocobase/pull/6808)） by @2013xile
* **[アクション：カスタムリクエスト]** カスタムリクエストのレスポンスを変数に設定した際に正しく表示されない問題を修正する（[#6793](https://github.com/nocobase/nocobase/pull/6793)） by @katherinehhh
