### 🎉 新機能

* **[サーバー]** 環境変数を介してリクエストボディのサイズ制限を設定できるようにサポート（[#7273](https://github.com/nocobase/nocobase/pull/7273)）@aaaaaajie
* **[クライアント]** テーブルブロックに「列設定」ボタンを追加し、列の順序と可視性を設定できるようにサポート（[#7204](https://github.com/nocobase/nocobase/pull/7204)）@kerwin612
* **[オフィスファイルプレビューワー]** Microsoft ライブプレビューを介してオフィスファイルのプレビューをサポート（[#7300](https://github.com/nocobase/nocobase/pull/7300)）@mytharcher
* **[データソース：メイン]**
  * メインデータソースからテーブルを読み込む機能をサポート（[#7238](https://github.com/nocobase/nocobase/pull/7238)）@aaaaaajie
* **[ワークフロー：並列ノード]** 並列ノードに「すべて完了」モードを追加（[#7263](https://github.com/nocobase/nocobase/pull/7263)）@mytharcher
* **[認証: SAML 2.0]** ユーザーが未認証の場合に SSO URL へ自動的にリダイレクトする機能をサポート @2013xile
* **[Redis キューアダプター]** イベントキュー用の Redis アダプターを追加 @mytharcher

### 🚀 機能改善

* **[クライアント]** 選択後にメニューが自動的に閉じないように変更（[#7252](https://github.com/nocobase/nocobase/pull/7252)）@kerwin612
* **[サーバー]** アイテムが満杯でない状態での処理時に、並行メモリキューを使用可能に（[#7267](https://github.com/nocobase/nocobase/pull/7267)）@mytharcher
* **[データベース]** データセットがしきい値を超えた場合に、自動的にシンプルページネーションを有効化（[#7227](https://github.com/nocobase/nocobase/pull/7227)）@aaaaaajie
* **[通知：アプリ内メッセージ]** アプリ内メッセージを SSE から WebSocket に変更（[#7302](https://github.com/nocobase/nocobase/pull/7302)）@mytharcher
* **[ワークフロー]**
  * 実行準備時に読み込むジョブ数を削減（[#7284](https://github.com/nocobase/nocobase/pull/7284)）@mytharcher
  * テスト変数用に JSON 型定数を追加（[#7274](https://github.com/nocobase/nocobase/pull/7274)）@mytharcher
* **[AI 統合]** `saveJob` 呼び出しにおける `await` を削除（[#7275](https://github.com/nocobase/nocobase/pull/7275)）@mytharcher
* **[ワークフロー：手動ノード]** storePopupContext でデフォルトコンテキストの保存をサポート（[#7264](https://github.com/nocobase/nocobase/pull/7264)）@zhangzhonghe
* **[ワークフロー: JSON 計算]** JSON クエリノードをテスト可能に @mytharcher
* **[Redis キューアダプター]** Redis アダプターにおいて、アイテムが満杯でない状態での処理時に並行キューを使用可能に @mytharcher
* **[認証：钉钉（DingTalk）]** 钉钉クライアントにおいて、ナビゲーションバーのタイトルを「Loading…」ではなく空文字列に設定 @2013xile

### 🐛 不具合修正

* **[ユーティリティ]** parseDate のタイムゾーン処理が不正確な問題（[#7318](https://github.com/nocobase/nocobase/pull/7318)）@katherinehhh
* **[クライアント]**
  * URL が null の場合のファイルプレビューアイテムを修正（[#7315](https://github.com/nocobase/nocobase/pull/7315)）@mytharcher
  * プレビュー時にローカルファイルに完全な URL を追加（[#7314](https://github.com/nocobase/nocobase/pull/7314)）@mytharcher
  * ツリーテーブルを展開できない問題を修正（[#7309](https://github.com/nocobase/nocobase/pull/7309)）@zhangzhonghe
  * テーブル行のドラッグアンドドロップによる並び替えにおける予期しない動作を修正（[#6959](https://github.com/nocobase/nocobase/pull/6959)）@ChimingLiu
  * フィールドのデフォルト値解析時の無限ループ問題を修正（[#7301](https://github.com/nocobase/nocobase/pull/7301)）@zhangzhonghe
  * フィルターフォームにおいて、関係フィールドにデータセレクターを設定した際に、ポップアップ内の日付フィールドの表示が異常になる問題を修正（[#7290](https://github.com/nocobase/nocobase/pull/7290)）@katherinehhh
  * タイトルフィールドとして数式を使用している場合、関連フィールド選択時のあいまい検索が機能しない問題（[#7280](https://github.com/nocobase/nocobase/pull/7280)）@katherinehhh
  * サブテーブルの連動規則に現在のオブジェクト変数が欠落する問題（[#7266](https://github.com/nocobase/nocobase/pull/7266)）@katherinehhh
  * 詳細ビューにおいて Markdown フィールドが正しく描画されない問題を修正（[#7257](https://github.com/nocobase/nocobase/pull/7257)）@aaaaaajie
  * フィールド変更後、当該フィールドに依存する関連フィールドの値がクリアされない問題（[#7262](https://github.com/nocobase/nocobase/pull/7262)）@zhangzhonghe
  * 履歴データの日付フィールドで非推奨の日付変数を使用した際の表示問題（[#7253](https://github.com/nocobase/nocobase/pull/7253)）@katherinehhh
  * データセレクターのタイトルフィールド設定が無効になる問題（[#7251](https://github.com/nocobase/nocobase/pull/7251)）@zhangzhonghe
* **[データベース]**
  * テーブル命名規則に起因する自動シンプルページネーションの失敗を解消（[#7256](https://github.com/nocobase/nocobase/pull/7256)）@aaaaaajie
  * PostgreSQL から大規模データセットをエクスポートする際の失敗を修正（[#7228](https://github.com/nocobase/nocobase/pull/7228)）@aaaaaajie
  * テーブルブロックで MSSQL 外部データソースを使用する場合、デフォルトの主キーソートによりリスト読み込みが失敗する問題を修正（[#7259](https://github.com/nocobase/nocobase/pull/7259)）@aaaaaajie
* **[認証]** サブアプリケーション設定の`secret`が空の場合にログインできない問題を修正（[#7239](https://github.com/nocobase/nocobase/pull/7239)）@2013xile
* **[ファイルマネージャー]** ストレージフィールドの権限を修正（[#7316](https://github.com/nocobase/nocobase/pull/7316)）@mytharcher
* **[ワークフロー]**
  * プロセッサ終了時の`undefined`結果を修正（[#7317](https://github.com/nocobase/nocobase/pull/7317)）@mytharcher
  * MySQL において、ジョブ保存時の BigInt ID の問題を修正（[#7292](https://github.com/nocobase/nocobase/pull/7292)）@mytharcher
  * 依存関係のバージョンが不正な問題を修正（[#7258](https://github.com/nocobase/nocobase/pull/7258)）@mytharcher
* **[ワークフロー: HTTP リクエストノード]** 競合状態のバグを修正（[#7310](https://github.com/nocobase/nocobase/pull/7310)）@mytharcher
* **[アクション：レコードエクスポート]** Excel にエクスポートする際のネストされた関係フィールドのフォーマットが不正確な問題を修正（[#7277](https://github.com/nocobase/nocobase/pull/7277)）@aaaaaajie
* **[データソースマネージャー]** コレクション設定において外部データソースの属性を保持するよう修正（[#7249](https://github.com/nocobase/nocobase/pull/7249)）@aaaaaajie
* **[アクション：一括編集]** データセレクターで一括編集と一括更新が実行できない問題（[#7250](https://github.com/nocobase/nocobase/pull/7250)）@zhangzhonghe
* **[データソース：外部 Oracle]** コレクション設定において外部データソースの属性を保持するよう修正 @aaaaaajie
* **[データソース：外部 SQL Server]** 外部データソースの MSSQL 日付時刻（タイムゾーンなし）フィールドのストレージ形式が不一致の問題を修正 @aaaaaajie
* **[ワークフロー：サブフロー]** フローが中断する問題を修正 @mytharcher
* **[ワークフロー：承認]**
  * 外部データソース内の担当者選択から発生するエラーを修正 @mytharcher
  * リンクボタンの URL が現在のページのポップアップを指しているにもかかわらず、クリックすると 404 エラーが表示される問題を修正 @zhangzhonghe
* **[メールマネージャー]**
  * パフォーマンス最適化のため rawId フィールドを追加 @jiannx
  * HTML 内の ref 属性が描画異常を引き起こす問題を修正 @jiannx
  * MySQL 環境下でメッセージとラベルの関係コレクションに異常が生じる問題を修正 @jiannx
