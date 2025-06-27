### 🎉 新機能

* **[クライアント]** 外部データソースの SQL Server で BIT フィールドをサポート（[#7058](https://github.com/nocobase/nocobase/pull/7058)）@aaaaaajie
* **[データソース：外部 SQL Server]** 外部データソースの SQL Server の BIT フィールドをサポート @aaaaaajie
* **[ワークフロー：承認]** ノード結果に承認記録変数を追加 @mytharcher

### 🚀 機能改善

* **[クライアント]** グリッドカードブロックのアクションバーを空の場合に自動的に非表示にする（[#7069](https://github.com/nocobase/nocobase/pull/7069)）@zhangzhonghe
* **[認証]** `verifiers:listByUser` API のレスポンスから検証者オプションを削除する（[#7090](https://github.com/nocobase/nocobase/pull/7090)）@2013xile
* **[ワークフロー]** `getCollectionFieldOptions` API の調整（[#7095](https://github.com/nocobase/nocobase/pull/7095)）@mytharcher
* **[ワークフロー：事前アクションイベント]** 変数 API の調整 @mytharcher
* **[ワークフロー：承認]** 変数 API の調整 @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * テーブル列のテキストアライン機能が動作しない問題（[#7094](https://github.com/nocobase/nocobase/pull/7094)）@zhangzhonghe
  * フィールド値の割り当て：関連フィールドのデータがクリアできない問題（[#7086](https://github.com/nocobase/nocobase/pull/7086)）@zhangzhonghe
  * 各フィールドに独立した変数スコープを適用（[#7012](https://github.com/nocobase/nocobase/pull/7012)）@mytharcher
  * サブテーブルの列フィールドにスタイル条件が正しく適用されない問題（[#7083](https://github.com/nocobase/nocobase/pull/7083)）@katherinehhh
  * フィルターフォームで関連コレクションフィールドを通じたフィルタリングが無効な問題（[#7070](https://github.com/nocobase/nocobase/pull/7070)）@zhangzhonghe
  * 公開フォームのフィールド初期値で URL のクエリパラメータ変数が機能しない問題（[#7084](https://github.com/nocobase/nocobase/pull/7084)）@katherinehhh
  * サブテーブル内の必須入力バリデーションメッセージがページ切り替え後も残る問題（[#7080](https://github.com/nocobase/nocobase/pull/7080)）@katherinehhh
  * フィルターボタンをクリックした際のエラー（[#7100](https://github.com/nocobase/nocobase/pull/7100)）@zhangzhonghe
* **[データベース]** updateOrCreate と firstOrCreate で関連情報の更新をサポートする（[#7088](https://github.com/nocobase/nocobase/pull/7088)）@chenos
* **[ワークフロー]**
  * ワークフローの非現行バージョンによって統計情報が誤削除される問題を修正（[#7103](https://github.com/nocobase/nocobase/pull/7103)）@mytharcher
  * 大きな整数値のチェック処理が誤って実行される問題を修正（[#7099](https://github.com/nocobase/nocobase/pull/7099)）@mytharcher
  * 大きな整数値のチェック処理が誤って実行される問題を修正（[#7091](https://github.com/nocobase/nocobase/pull/7091)）@mytharcher
* **[アクション：レコードインポート]** ユーザー名とパスワードの一括インポート後にログインできない問題を解消（[#7076](https://github.com/nocobase/nocobase/pull/7076)）@aaaaaajie
* **[コレクションフィールド：多対多（配列）]** 多対多（配列）フィールドを更新する際、`updatedBy`フィールドが存在するとエラーが発生する問題（[#7089](https://github.com/nocobase/nocobase/pull/7089)）@2013xile
* **[ファイルマネージャー]** 承認プロセス中に添付フィールドが更新できない問題を修正（[#7093](https://github.com/nocobase/nocobase/pull/7093)）@mytharcher
* **[公開フォーム]** 公開フォームの送信時に未認証アクセスが発生する問題を修正（[#7085](https://github.com/nocobase/nocobase/pull/7085)）@zhangzhonghe
* **[コレクションフィールド：シーケンス]** 文字列ベースの bigint シーケンス計算を修正（[#7079](https://github.com/nocobase/nocobase/pull/7079)）@mytharcher
* **[ワークフロー：承認]**
  * 型関連の問題を回避するため、暗黙的ロジックではなく比較演算子を使用 @mytharcher
  * 承認の詳細は参加者のみ閲覧可能に設定 @mytharcher
* **[メールマネージャー]** メール削除エラー @jiannx
