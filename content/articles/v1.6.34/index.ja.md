### 🎉 新機能

* **[アクション：レコードインポート Pro]**
  * インポート設定時に複数フィールドでユニークレコードを定義できるようにしました @aaaaaajie
  * インポート設定時に空白セルの上書き / 無視設定をサポートしました @aaaaaajie

### 🚀 機能改善

* **[未定義]** CI 環境の Node バージョンを 20 にアップグレード（[#6927](https://github.com/nocobase/nocobase/pull/6927)）@mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 連携ルールにおける noneOf 条件チェックの失敗（[#6934](https://github.com/nocobase/nocobase/pull/6934)）@katherinehhh
  * ブロックの高さ設定がリアルタイム適用されない問題（[#6904](https://github.com/nocobase/nocobase/pull/6904)）@katherinehhh
* **[未定義]** commander パッケージの要件により Node 20 を使用（[#6924](https://github.com/nocobase/nocobase/pull/6924)）@mytharcher
* **[データベース]** 多対多関連での uuid/nanoid 自動生成機能の不動作を修正（[#6912](https://github.com/nocobase/nocobase/pull/6912)）@aaaaaajie
* **[アクション：レコードエクスポート]** ネスト関連付けのエクスポートエラーを修正（[#6917](https://github.com/nocobase/nocobase/pull/6917)）@aaaaaajie
* **[データソースマネージャー]** ドラッグアンドドロップソート機能の不動作を解決（[#6937](https://github.com/nocobase/nocobase/pull/6937)）@chenos
* **[API ドキュメント]** req.headers に欠落していたサブアプリ情報を追加（[#6933](https://github.com/nocobase/nocobase/pull/6933)）@chenos
* **[通知：アプリ内メッセージ]** 「全て既読にする」アクションが他ユーザーのデータに影響を及ぼす問題を解決（[#6926](https://github.com/nocobase/nocobase/pull/6926)）@sheldon66
* **[ワークフロー：カスタムアクションイベント]** プラグインのロード順序に起因するエラーを回避 @mytharcher
* **[ファイルストレージ: S3 (Pro)]**
  * プレビュー URL とアップロードパラメータを修正 @mytharcher
  * 重複するアップロードパラメータを修正 @mytharcher
* **[ブロック：多段フォーム]** タイプ定義を修正 @mytharcher
* **[ワークフロー：承認]**
  * ViewAction のレコード ID 不正を修正 @mytharcher
  * 承認プロセス送信前のデータ追加・計算を修正 @mytharcher
