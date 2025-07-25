### 🎉 新機能

* **[サーバー]** 環境変数を介してリクエストボディのサイズ制限を設定できるようにサポート（[#7273](https://github.com/nocobase/nocobase/pull/7273)）@aaaaaajie
* **[ワークフロー：並列ノード]** 並列ノードに「すべて完了」モードを追加（[#7263](https://github.com/nocobase/nocobase/pull/7263)）@mytharcher
* **[認証: SAML 2.0]** ユーザーが未認証の場合に SSO URL に自動的にリダイレクトする機能をサポート @2013xile
* **[Redis キューアダプター]** イベントキュー用の Redis アダプターを追加 @mytharcher
* **[ワークフロー：日付計算ノード]** ノードのテスト実行をサポート @mytharcher

### 🚀 機能改善

* **[サーバー]** アイテムが満杯でない状態での処理時に、並行メモリキューを使用可能に（[#7267](https://github.com/nocobase/nocobase/pull/7267)）@mytharcher
* **[データベース]** データセットがしきい値を超えた場合に、自動的にシンプルページネーションを有効化（[#7227](https://github.com/nocobase/nocobase/pull/7227)）@aaaaaajie
* **[クライアント]** カラーピッカー：推奨カラーを 4 色追加（[#7226](https://github.com/nocobase/nocobase/pull/7226)）@zhangzhonghe
* **[AI 統合]** `saveJob` 呼び出しにおける `await` を削除（[#7275](https://github.com/nocobase/nocobase/pull/7275)）@mytharcher
* **[ワークフロー：手動ノード]** storePopupContext でデフォルトコンテキストの保存をサポート（[#7264](https://github.com/nocobase/nocobase/pull/7264)）@zhangzhonghe
* **[ワークフロー]**
  * テスト変数用に JSON 型定数を追加（[#7274](https://github.com/nocobase/nocobase/pull/7274)）@mytharcher
  * ステータスにより実行が不要な場合、エラーをスローする代わりにロギングを使用（[#7217](https://github.com/nocobase/nocobase/pull/7217)）@mytharcher
  * 日付値の比較を互換性あるものにする（[#7237](https://github.com/nocobase/nocobase/pull/7237)）@mytharcher
* **[コレクションフィールド：数式]** さらに多くの計算可能なインターフェースを追加（[#7215](https://github.com/nocobase/nocobase/pull/7215)）@mytharcher
* **[Redis キューアダプター]** Redis アダプターにおいて、アイテムが満杯でない状態での処理時に並行キューを使用可能に @mytharcher
* **[ワークフロー: JSON 計算]** JSON クエリノードをテスト可能に @mytharcher
* **[ワークフロー：承認]** 関連データが削除された場合に承認を削除できるようにサポート @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * タイトルフィールドとして数式を使用している場合、関連フィールド選択時のあいまい検索が機能しない問題（[#7280](https://github.com/nocobase/nocobase/pull/7280)）@katherinehhh
  * サブテーブルの連動規則に現在のオブジェクト変数が欠落する問題（[#7266](https://github.com/nocobase/nocobase/pull/7266)）@katherinehhh
  * フィールド変更後、当該フィールドに依存する関連フィールドの値がクリアされない問題（[#7262](https://github.com/nocobase/nocobase/pull/7262)）@zhangzhonghe
  * 詳細ビューにおいて Markdown フィールドが正しく描画されない問題を修正（[#7257](https://github.com/nocobase/nocobase/pull/7257)）@aaaaaajie
  * データセレクターのタイトルフィールド設定が無効になる問題（[#7251](https://github.com/nocobase/nocobase/pull/7251)）@zhangzhonghe
  * appends で非関連フィールドが選択されるのを回避（[#7231](https://github.com/nocobase/nocobase/pull/7231)）@mytharcher
  * メニューを削除した際に、uiSchemas テーブルの対応データが削除されない問題（[#7232](https://github.com/nocobase/nocobase/pull/7232)）@zhangzhonghe
  * テーブルアクション列にスタイルルールが適用されない問題（[#7225](https://github.com/nocobase/nocobase/pull/7225)）@katherinehhh
  * 履歴データの日付フィールドで非推奨の日付変数を使用した際の表示問題（[#7253](https://github.com/nocobase/nocobase/pull/7253)）@katherinehhh
  * 連動規則における関連フィールドの表示問題（[#7220](https://github.com/nocobase/nocobase/pull/7220)）@katherinehhh
  * エラー修正：'react-device-detect' を解決できない問題（[#7224](https://github.com/nocobase/nocobase/pull/7224)）@zhangzhonghe
* **[データベース]**
  * テーブル命名規則に起因する自動シンプルページネーションの失敗を解消（[#7256](https://github.com/nocobase/nocobase/pull/7256)）@aaaaaajie
  * テーブルブロックで MSSQL 外部データソースを使用する場合、デフォルトの主キーソートによりリスト読み込みが失敗する問題を修正（[#7259](https://github.com/nocobase/nocobase/pull/7259)）@aaaaaajie
  * PostgreSQL から大規模データセットをエクスポートする際の失敗を修正（[#7228](https://github.com/nocobase/nocobase/pull/7228)）@aaaaaajie
  * 外部データソーステーブルでシンプルページネーションを有効にした際のエラーを修正（[#7222](https://github.com/nocobase/nocobase/pull/7222)）@aaaaaajie
* **[認証]** サブアプリケーション設定の`secret`が空の場合にログインできない問題を修正（[#7239](https://github.com/nocobase/nocobase/pull/7239)）@2013xile
* **[ワークフロー]** 依存関係のバージョンが不正な問題を修正（[#7258](https://github.com/nocobase/nocobase/pull/7258)）@mytharcher
* **[アクション：一括編集]** データセレクターで一括編集と一括更新が実行できない問題（[#7250](https://github.com/nocobase/nocobase/pull/7250)）@zhangzhonghe
* **[データソースマネージャー]** コレクション設定において外部データソースの属性を保持するよう修正（[#7249](https://github.com/nocobase/nocobase/pull/7249)）@aaaaaajie
* **[コレクションフィールド：ソート]** レコード複製時にソートフィールドの選択が欠落する問題（[#7116](https://github.com/nocobase/nocobase/pull/7116)）@katherinehhh
* **[データソース：外部 Oracle]** コレクション設定において外部データソースの属性を保持するよう修正 @aaaaaajie
* **[ワークフロー：サブフロー]** 取消シグナルが到着したが保留中の実行が現在のインスタンスに存在しない場合に発生するエラーを修正 @mytharcher
* **[ワークフロー：承認]**
  * 承認送信時の多階層関連データを修正 @mytharcher
  * リンクボタンの URL が現在のページのポップアップを指しているにもかかわらず、クリックすると 404 エラーが表示される問題を修正 @zhangzhonghe
  * 承認送信時の関連データを修正 @mytharcher
  * レコード一覧において削除された承認に対するフォールトトレランスを追加 @mytharcher
  * レコード削除時の例外を修正 @mytharcher
* **[メールマネージャー]** MySQL 環境下でメッセージとラベルの関係コレクションに異常が生じる問題を修正 @jiannx
