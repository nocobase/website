週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.17](https://www.nocobase.com/ja/blog/v1.7.17)

*リリース日：2025-06-24*

#### 🐛 不具合修正

* **[クライアント]**
  * 時間付き日付フィールドの範囲制限が誤って適用される問題（[#7107](https://github.com/nocobase/nocobase/pull/7107)）@katherinehhh
  * URL クエリパラメータ変数が空の場合、データ範囲条件が削除されない問題（[#7104](https://github.com/nocobase/nocobase/pull/7104)）@zhangzhonghe
* **[モバイル]** モバイルポップアップの z-index 設定不具合を修正（[#7110](https://github.com/nocobase/nocobase/pull/7110)）@zhangzhonghe
* **[カレンダー]** カレンダーブロックのクイック作成フォームにおける日付フィールドの問題（[#7106](https://github.com/nocobase/nocobase/pull/7106)）@katherinehhh

### [v1.7.16](https://www.nocobase.com/ja/blog/v1.7.16)

*リリース日：2025-06-20*

#### 🐛 不具合修正

* **[ワークフロー]**
  * 大きな整数値のチェック処理が誤って実行される問題を修正（[#7099](https://github.com/nocobase/nocobase/pull/7099)）@mytharcher
  * ワークフローの非現行バージョンによって統計情報が誤削除される問題を修正（[#7103](https://github.com/nocobase/nocobase/pull/7103)）@mytharcher
* **[アクション：レコードインポート]** ユーザー名とパスワードの一括インポート後にログインできない問題を解消（[#7076](https://github.com/nocobase/nocobase/pull/7076)）@aaaaaajie
* **[ワークフロー：承認]** 承認の詳細は参加者のみ閲覧可能に設定 @mytharcher

### [v1.7.15](https://www.nocobase.com/ja/blog/v1.7.15)

*リリース日：2025-06-18*

#### 🐛 不具合修正

* **[クライアント]**
  * 各フィールドに独立した変数スコープを適用（[#7012](https://github.com/nocobase/nocobase/pull/7012)）@mytharcher
  * フィールド値の割り当て：関連フィールドのデータがクリアできない問題（[#7086](https://github.com/nocobase/nocobase/pull/7086)）@zhangzhonghe
  * テーブル列のテキストアライン機能が動作しない問題（[#7094](https://github.com/nocobase/nocobase/pull/7094)）@zhangzhonghe
* **[ワークフロー]** 大きな整数値のチェック処理が誤って実行される問題を修正（[#7091](https://github.com/nocobase/nocobase/pull/7091)）@mytharcher
* **[ファイルマネージャー]** 承認プロセス中に添付フィールドが更新できない問題を修正（[#7093](https://github.com/nocobase/nocobase/pull/7093)）@mytharcher
* **[ワークフロー：承認]** 型関連の問題を回避するため、暗黙的ロジックではなく比較演算子を使用 @mytharcher


## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.10](https://www.nocobase.com/ja/blog/v1.8.0-beta.10)

*リリース日：2025-06-19*

#### 🎉 新機能

* **[ワークフロー：承認]** ノード結果に承認記録変数を追加 @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * テーブル列のテキストアライン機能が動作しない問題（[#7094](https://github.com/nocobase/nocobase/pull/7094)）@zhangzhonghe
  * フィールド値の割り当て：関連フィールドのデータがクリアできない問題（[#7086](https://github.com/nocobase/nocobase/pull/7086)）@zhangzhonghe
  * 各フィールドに独立した変数スコープを適用（[#7012](https://github.com/nocobase/nocobase/pull/7012)）@mytharcher
* **[ファイルマネージャー]** 承認プロセス中に添付フィールドが更新できない問題を修正（[#7093](https://github.com/nocobase/nocobase/pull/7093)）@mytharcher
* **[ワークフロー]** 大きな整数値のチェック処理が誤って実行される問題を修正（[#7091](https://github.com/nocobase/nocobase/pull/7091)）@mytharcher
* **[ワークフロー：承認]** 型関連の問題を回避するため、暗黙的ロジックではなく比較演算子を使用 @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.10](https://www.nocobase.com/ja/blog/v1.8.0-alpha.10)

*リリース日：2025-06-25*

#### 🎉 新機能

* **[データソースマネージャー]** ✨ 外部データソースからのコレクションの必要時読み込みをサポート（[#6979](https://github.com/nocobase/nocobase/pull/6979)）@aaaaaajie
* **[ワークフロー: HTTP リクエストノード]** `multipart/form-data`形式のリクエストをサポート（[#7087](https://github.com/nocobase/nocobase/pull/7087)）@shushu992
* **[データソース：外部 SQL Server]** 外部データソースからのコレクションの必要時読み込みをサポート @aaaaaajie

#### 🐛 不具合修正

* **[クライアント]**
  * URL クエリパラメータ変数が空の場合、データ範囲条件が削除されない問題（[#7104](https://github.com/nocobase/nocobase/pull/7104)）@zhangzhonghe
  * 時間付き日付フィールドの範囲制限が誤って適用される問題（[#7107](https://github.com/nocobase/nocobase/pull/7107)）@katherinehhh
* **[モバイル]** モバイルポップアップの z-index 設定不具合を修正（[#7110](https://github.com/nocobase/nocobase/pull/7110)）@zhangzhonghe
* **[カレンダー]** カレンダーブロックのクイック作成フォームにおける日付フィールドの問題（[#7106](https://github.com/nocobase/nocobase/pull/7106)）@katherinehhh
* **[ワークフロー：承認]**
  * エラーを発生させる旧バージョンの変数 API を修正 @mytharcher
  * モバイル表示スタイルを修正 @mytharcher
  * 承認関連コレクションが削除された際のエラーを修正 @mytharcher
* **[メールマネージャー]** 添付ファイルが表示されない問題 @jiannx

### [v1.8.0-alpha.9](https://www.nocobase.com/ja/blog/v1.8.0-alpha.9)

*リリース日：2025-06-20*

#### 🎉 新機能

* **[クライアント]** 外部データソースの SQL Server で BIT フィールドをサポート（[#7058](https://github.com/nocobase/nocobase/pull/7058)）@aaaaaajie
* **[データソース：外部 SQL Server]** 外部データソースの SQL Server の BIT フィールドをサポート @aaaaaajie
* **[ワークフロー：承認]** ノード結果に承認記録変数を追加 @mytharcher

#### 🚀 機能改善

* **[クライアント]** グリッドカードブロックのアクションバーを空の場合に自動的に非表示にする（[#7069](https://github.com/nocobase/nocobase/pull/7069)）@zhangzhonghe
* **[認証]** `verifiers:listByUser` API のレスポンスから検証者オプションを削除する（[#7090](https://github.com/nocobase/nocobase/pull/7090)）@2013xile
* **[ワークフロー]** `getCollectionFieldOptions` API の調整（[#7095](https://github.com/nocobase/nocobase/pull/7095)）@mytharcher
* **[ワークフロー：事前アクションイベント]** 変数 API の調整 @mytharcher
* **[ワークフロー：承認]** 変数 API の調整 @mytharcher

#### 🐛 不具合修正

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
