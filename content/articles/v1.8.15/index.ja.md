### 🚀 機能改善

* **[クライアント]**
  * 「一昨日」の日付変数をサポート（[#7359](https://github.com/nocobase/nocobase/pull/7359)）@katherinehhh
  * ポップアップタブ切り替え時のパフォーマンスを最適化（[#7353](https://github.com/nocobase/nocobase/pull/7353)）@zhangzhonghe
* **[ワークフロー]**
  * 不安定なテストケースを修正（[#7349](https://github.com/nocobase/nocobase/pull/7349)）@mytharcher
  * 対応するバージョンが無効化されていても、タスクカードのワークフロータイトルに取り消し線が表示されないように変更（[#7339](https://github.com/nocobase/nocobase/pull/7339)）@mytharcher
* **[オフィスファイルプレビューワー]** `.odt`ファイルのプレビューをサポート（[#7347](https://github.com/nocobase/nocobase/pull/7347)）@mytharcher
* **[バックアップマネージャー]** MySQL データベースのバックアップ操作のパフォーマンスを改善 @gchust

### 🐛 不具合修正

* **[クライアント]**
  * モバイルデバイスで複数列フォームレイアウトが単列レイアウトに変換されない問題を修正（[#7355](https://github.com/nocobase/nocobase/pull/7355)）@zhangzhonghe
  * コレクションの一括削除エラーを修正（[#7345](https://github.com/nocobase/nocobase/pull/7345)）@aaaaaajie
  * 個別に権限を設定する際に、以前に保存したデータ範囲が事前に選択されない問題を修正（[#7288](https://github.com/nocobase/nocobase/pull/7288)）@aaaaaajie
* **[ワークフロー]**
  * 「ノード追加」メニューをリファクタリングし、それに起因するワークフローキャンバスの描画パフォーマンス問題を修正（[#7363](https://github.com/nocobase/nocobase/pull/7363)）@mytharcher
  * 単一のタスクアイテムを取得する際のフィルター条件が不正確な問題を修正（[#7366](https://github.com/nocobase/nocobase/pull/7366)）@mytharcher
  * フィールド選択におけるキーワード一致の問題を修正（[#7356](https://github.com/nocobase/nocobase/pull/7356)）@mytharcher
  * 停止時にイベントキューに発行することで引き起こされるエラーを回避（[#7348](https://github.com/nocobase/nocobase/pull/7348)）@mytharcher
* **[通知：アプリ内メッセージ]** サイト内メッセージを受信したがポップアップで表示されない問題を修正（[#7364](https://github.com/nocobase/nocobase/pull/7364)）@mytharcher
* **[モバイル]** 日付範囲制限を適用した場合に、モバイルデバイスの日付ピッカーが不正に表示される問題を解消（[#7362](https://github.com/nocobase/nocobase/pull/7362)）@katherinehhh
* **[ファイルマネージャー]** 権限設定をサポートするため、ファイルコレクションに`storageId`フィールドを追加（[#7351](https://github.com/nocobase/nocobase/pull/7351)）@mytharcher
* **[ワークフロー：並列ノード]** MySQL 環境下で、並列ノードが再開後に中断する問題を修正（[#7346](https://github.com/nocobase/nocobase/pull/7346)）@mytharcher
* **[ワークフロー: CC]** ブロックを削除できない問題を修正（[#7338](https://github.com/nocobase/nocobase/pull/7338)）@mytharcher
* **[オフィスファイルプレビューワー]** URL のみで`.docx`、`.xlsx`、`.pptx`ファイルのプレビューをサポート（[#7336](https://github.com/nocobase/nocobase/pull/7336)）@mytharcher
* **[データ可視化]** チャートフィルターブロックの日付フィールドのデフォルト値における日付変数の問題（[#7291](https://github.com/nocobase/nocobase/pull/7291)）@katherinehhh
* **[ワークフロー：承認]**
  * 承認元の詳細ブロックにおいて連動規則が機能しない問題を修正 @mytharcher
  * ドラフトを送信する際の関連データ更新を修正 @mytharcher
