### 🎉 新機能

* **[ワークフロー：並列ノード]** 並列ノードに「すべて完了」モードを追加（[#7263](https://github.com/nocobase/nocobase/pull/7263)）@mytharcher
* **[Redis キューアダプター]** イベントキュー用の Redis アダプターを追加 @mytharcher

### 🚀 機能改善

* **[サーバー]** アイテムが満杯でない状態での処理時に、並行メモリキューを使用可能に（[#7267](https://github.com/nocobase/nocobase/pull/7267)）@mytharcher
* **[データベース]** データセットがしきい値を超えた場合に、自動的にシンプルページネーションを有効化（[#7227](https://github.com/nocobase/nocobase/pull/7227)）@aaaaaajie
* **[ワークフロー：手動ノード]** storePopupContext でデフォルトコンテキストの保存をサポート（[#7264](https://github.com/nocobase/nocobase/pull/7264)）@zhangzhonghe
* **[Redis キューアダプター]** Redis アダプターにおいて、アイテムが満杯でない状態での処理時に並行キューを使用可能に @mytharcher

### 🐛 不具合修正

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
