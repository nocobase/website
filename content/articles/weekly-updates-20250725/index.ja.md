週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.9](https://www.nocobase.com/ja/blog/v1.8.9)

*リリース日：2025-07-24*

#### 🎉 新機能

* **[サーバー]** 環境変数を介してリクエストボディのサイズ制限を設定できるようにサポート（[#7273](https://github.com/nocobase/nocobase/pull/7273)）@aaaaaajie

#### 🚀 機能改善

* **[ワークフロー]** テスト変数用に JSON 型定数を追加（[#7274](https://github.com/nocobase/nocobase/pull/7274)）@mytharcher
* **[AI 統合]** `saveJob` 呼び出しにおける `await` を削除（[#7275](https://github.com/nocobase/nocobase/pull/7275)）@mytharcher
* **[ワークフロー: JSON 計算]** JSON クエリノードをテスト可能に @mytharcher

#### 🐛 不具合修正

* **[クライアント]** タイトルフィールドとして数式を使用している場合、関連フィールド選択時のあいまい検索が機能しない問題（[#7280](https://github.com/nocobase/nocobase/pull/7280)）@katherinehhh

### [v1.8.8](https://www.nocobase.com/ja/blog/v1.8.8)

*リリース日：2025-07-23*

#### 🎉 新機能

* **[ワークフロー：並列ノード]** 並列ノードに「すべて完了」モードを追加（[#7263](https://github.com/nocobase/nocobase/pull/7263)）@mytharcher
* **[Redis キューアダプター]** イベントキュー用の Redis アダプターを追加 @mytharcher

#### 🚀 機能改善

* **[サーバー]** アイテムが満杯でない状態での処理時に、並行メモリキューを使用可能に（[#7267](https://github.com/nocobase/nocobase/pull/7267)）@mytharcher
* **[データベース]** データセットがしきい値を超えた場合に、自動的にシンプルページネーションを有効化（[#7227](https://github.com/nocobase/nocobase/pull/7227)）@aaaaaajie
* **[ワークフロー：手動ノード]** storePopupContext でデフォルトコンテキストの保存をサポート（[#7264](https://github.com/nocobase/nocobase/pull/7264)）@zhangzhonghe
* **[Redis キューアダプター]** Redis アダプターにおいて、アイテムが満杯でない状態での処理時に並行キューを使用可能に @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * サブテーブルの連動規則に現在のオブジェクト変数が欠落する問題（[#7266](https://github.com/nocobase/nocobase/pull/7266)）@katherinehhh
  * データセレクターのタイトルフィールド設定が無効になる問題（[#7251](https://github.com/nocobase/nocobase/pull/7251)）@zhangzhonghe
  * 詳細ビューにおいて Markdown フィールドが正しく描画されない問題を修正（[#7257](https://github.com/nocobase/nocobase/pull/7257)）@aaaaaajie
  * フィールド変更後、当該フィールドに依存する関連フィールドの値がクリアされない問題（[#7262](https://github.com/nocobase/nocobase/pull/7262)）@zhangzhonghe
  * 履歴データの日付フィールドで非推奨の日付変数を使用した際の表示問題（[#7253](https://github.com/nocobase/nocobase/pull/7253)）@katherinehhh
* **[データベース]**
  * テーブル命名規則に起因する自動シンプルページネーションの失敗を解消（[#7256](https://github.com/nocobase/nocobase/pull/7256)）@aaaaaajie
  * PostgreSQL から大規模データセットをエクスポートする際の失敗を修正（[#7228](https://github.com/nocobase/nocobase/pull/7228)）@aaaaaajie
  * テーブルブロックで MSSQL 外部データソースを使用する場合、デフォルトの主キーソートによりリスト読み込みが失敗する問題を修正（[#7259](https://github.com/nocobase/nocobase/pull/7259)）@aaaaaajie
* **[認証]** サブアプリケーション設定の`secret`が空の場合にログインできない問題を修正（[#7239](https://github.com/nocobase/nocobase/pull/7239)）@2013xile
* **[データソースマネージャー]** コレクション設定において外部データソースの属性を保持するよう修正（[#7249](https://github.com/nocobase/nocobase/pull/7249)）@aaaaaajie
* **[アクション：一括編集]** データセレクターで一括編集と一括更新が実行できない問題（[#7250](https://github.com/nocobase/nocobase/pull/7250)）@zhangzhonghe
* **[ワークフロー]** 依存関係のバージョンが不正な問題を修正（[#7258](https://github.com/nocobase/nocobase/pull/7258)）@mytharcher
* **[データソース：外部 Oracle]** コレクション設定において外部データソースの属性を保持するよう修正 @aaaaaajie
* **[ワークフロー：承認]** リンクボタンの URL が現在のページのポップアップを指しているにもかかわらず、クリックすると 404 エラーが表示される問題を修正 @zhangzhonghe
* **[メールマネージャー]** MySQL 環境下でメッセージとラベルの関係コレクションに異常が生じる問題を修正 @jiannx

### [v1.8.7](https://www.nocobase.com/ja/blog/v1.8.7)

*リリース日：2025-07-18*

#### 🎉 新機能

* **[ワークフロー：日付計算ノード]** ノードのテスト実行をサポート @mytharcher

#### 🚀 機能改善

* **[クライアント]** カラーピッカー：推奨カラーを 4 色追加（[#7226](https://github.com/nocobase/nocobase/pull/7226)）@zhangzhonghe
* **[ワークフロー]** 日付値の比較を互換性あるものにする（[#7237](https://github.com/nocobase/nocobase/pull/7237)）@mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * テーブルアクション列にスタイルルールが適用されない問題（[#7225](https://github.com/nocobase/nocobase/pull/7225)）@katherinehhh
  * メニューを削除した際に、uiSchemas テーブルの対応データが削除されない問題（[#7232](https://github.com/nocobase/nocobase/pull/7232)）@zhangzhonghe
  * appends で非関連フィールドが選択されるのを回避（[#7231](https://github.com/nocobase/nocobase/pull/7231)）@mytharcher
* **[ワークフロー：サブフロー]** 取消シグナルが到着したが保留中の実行が現在のインスタンスに存在しない場合に発生するエラーを修正 @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.3](https://www.nocobase.com/ja/blog/v1.9.0-alpha.3)

*リリース日：2025-07-18*

#### 🎉 新機能

* **[データソース：メイン]** メインデータソースにプラグインで定義されたテーブルを表示できるようにサポート（[#7187](https://github.com/nocobase/nocobase/pull/7187)）@aaaaaajie
* **[ワークフロー：日付計算ノード]** ノードのテスト実行をサポート @mytharcher

#### 🚀 機能改善

* **[クライアント]** カラーピッカー：推奨カラーを 4 色追加（[#7226](https://github.com/nocobase/nocobase/pull/7226)）@zhangzhonghe
* **[ワークフロー]** 日付値の比較を互換性あるものにする（[#7237](https://github.com/nocobase/nocobase/pull/7237)）@mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * テーブルアクション列にスタイルルールが適用されない問題（[#7225](https://github.com/nocobase/nocobase/pull/7225)）@katherinehhh
  * appends で非関連フィールドが選択されるのを回避（[#7231](https://github.com/nocobase/nocobase/pull/7231)）@mytharcher
  * エラー修正：'react-device-detect' を解決できない問題（[#7224](https://github.com/nocobase/nocobase/pull/7224)）@zhangzhonghe
  * メニューを削除した際に、uiSchemas テーブルの対応データが削除されない問題（[#7232](https://github.com/nocobase/nocobase/pull/7232)）@zhangzhonghe
* **[データベース]** 外部データソーステーブルでシンプルページネーションを有効にした際のエラーを修正（[#7222](https://github.com/nocobase/nocobase/pull/7222)）@aaaaaajie
* **[コレクションフィールド：ソート]** レコード複製時にソートフィールドの選択が欠落する問題（[#7116](https://github.com/nocobase/nocobase/pull/7116)）@katherinehhh
* **[ワークフロー：サブフロー]** 取消シグナルが到着したが保留中の実行が現在のインスタンスに存在しない場合に発生するエラーを修正 @mytharcher
* **[ワークフロー：承認]**
  * 承認送信時の多階層関連データを修正 @mytharcher
  * レコード一覧において削除された承認に対するフォールトトレランスを追加 @mytharcher
* **[メールマネージャー]** メールメッセージ一覧のパフォーマンスを最適化 @jiannx
