### 🎉 新機能

* **[クライアント]**
  * テーブルブロックに「列設定」ボタンを追加し、列の並び順や表示・非表示を設定可能に（[#7204](https://github.com/nocobase/nocobase/pull/7204)）by @kerwin612
  * フィールドの検証ルールに対応（[#7297](https://github.com/nocobase/nocobase/pull/7297)）by @aaaaaajie
* **[データソース: メイン]**
  * メインデータソースのテーブル読み込みに対応（[#7238](https://github.com/nocobase/nocobase/pull/7238)）by @aaaaaajie
  * プラグインで定義されたテーブルもメインデータソースに表示可能に（[#7187](https://github.com/nocobase/nocobase/pull/7187)）by @aaaaaajie

### 🚀 機能改善

* **[クライアント]** プレビュー時に画像を回転できる機能を追加（[#7523](https://github.com/nocobase/nocobase/pull/7523)）by @mytharcher
* **[snowflake-id]** 一意識別子を持たない自動採番の主キーを、53ビットのSnowflake形式IDに変更（[#7465](https://github.com/nocobase/nocobase/pull/7465)）by @2013xile
* **[ワークフロー]** ディスパッチ処理を独立したモジュールに分離（[#7535](https://github.com/nocobase/nocobase/pull/7535)）by @mytharcher
* **[RabbitMQキューアダプタ]** 接続処理とメッセージ処理ロジックを改善 by @sdp-ncd
* **[メールマネージャー]**
  * 複数件の同期をまとめて実行可能に by @jiannx
  * リッチエディタで画像サイズを変更可能に by @jiannx

### 🐛 不具合修正

* **[クライアント]**
  * 「列設定」ボタンがモーダルダイアログ内のテーブル列を読み込んでしまう不具合を修正（[#7385](https://github.com/nocobase/nocobase/pull/7385)）by @kerwin612
  * サイドバーのサブメニューが正しくハイライトされない不具合を修正（[#7520](https://github.com/nocobase/nocobase/pull/7520)）by @duannyuuu
* **[ワークフロー]**
  * キュー処理の不具合によりタスクが二重に実行される問題を修正（[#7533](https://github.com/nocobase/nocobase/pull/7533)）by @mytharcher
  * 関連フィールドのコンテキスト読み込み時にワークフロー条件が正しく処理されない問題を修正（[#7516](https://github.com/nocobase/nocobase/pull/7516)）by @mytharcher
  * 日付フィールドを基準とするスケジュールタスクが開始後に実行されない問題を修正（[#7524](https://github.com/nocobase/nocobase/pull/7524)）by @mytharcher
* **[ワークフロー: ループノード]** 条件を満たさなくても次の処理に進んでしまう不具合を修正（[#7521](https://github.com/nocobase/nocobase/pull/7521)）by @mytharcher
* **[メールマネージャー]**
  * 不正な件名のメールが表示される不具合を修正 by @jiannx
  * リッチエディタでソフト改行に対応 by @jiannx
  * 同じメールを複数の宛先に送信可能に by @jiannx
  * メール一覧表示のパフォーマンスを改善 by @jiannx
  * 行を選択した後に既読/未読を設定できるよう修正 by @jiannx
  * パフォーマンス向上のため rawId フィールドを追加 by @jiannx
  * HTML内のref属性が原因でレンダリング例外が発生する不具合を修正 by @jiannx
  * サブメールの内容がフィルタされない不具合を修正 by @jiannx
  * 再同期に対応 by @jiannx
  * 転送と返信を手動で判別できるよう修正 by @jiannx
