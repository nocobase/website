### 🎉 新機能

- **[client-v2]** テキストフィールドでスキャン入力をサポート ([#9599](https://github.com/nocobase/nocobase/pull/9599)) by @katherinehhh
- **[undefined]** nginx および caddy 向けのトップレベル proxy コマンドを追加 ([#9721](https://github.com/nocobase/nocobase/pull/9721)) by @chenos
- **[非同期タスクマネージャー]** 非同期タスクマネージャーのトップバーアクションに v2 クライアントサポートを追加。 ([#9707](https://github.com/nocobase/nocobase/pull/9707)) by @jiannx
- **[バックアップマネージャー]**

  - バックアップマネージャープラグインに v2 クライアントランタイムサポートを追加。 ([#9712](https://github.com/nocobase/nocobase/pull/9712)) by @katherinehhh
  - 新しいバージョン管理プラグインに適応 ([#9563](https://github.com/nocobase/nocobase/pull/9563)) by @cgyrock
- **[データソース: 外部 NocoBase]** データソースプラグイン「外部 NocoBase」を追加 by @2013xile
- **[バージョン管理]** バージョン管理プラグインを追加 by @cgyrock

### 🚀 機能改善

- **[client-v2]**

  - v2 ポップアップ選択関連フィールドで複数選択の無効化をサポート。 ([#9730](https://github.com/nocobase/nocobase/pull/9730)) by @katherinehhh
  - 設定済み外部データソースが無効化された際の v2 ブロックレンダリングを改善し、レンダーエラーを防止し、より明確な UI エディターのプレースホルダーを表示。 ([#9699](https://github.com/nocobase/nocobase/pull/9699)) by @katherinehhh
- **[変数とシークレット]** 環境変数（`$env`）が v1 ランタイムの flow-engine ベースの変数ピッカーで選択可能に。 ([#9728](https://github.com/nocobase/nocobase/pull/9728)) by @Molunerfinn
- **[ファイルマネージャー]** ファイルマネージャーの内部アップロードに `subPath` サポートを追加。 ([#9731](https://github.com/nocobase/nocobase/pull/9731)) by @mytharcher
- **[データソース管理]** データソース権限管理の client-v2 実装を追加し、関連する権限ピッカードロワーを統一。 ([#9706](https://github.com/nocobase/nocobase/pull/9706)) by @jiannx
- **[データテーブル: 外部データ接続（FDW）]** SQL 確認、外部データベースサーバー管理、テンプレート順序を含め、SQL コレクションと外部データコレクションの V2 テンプレート互換性を改善。 ([#9711](https://github.com/nocobase/nocobase/pull/9711)) by @katherinehhh
- **[テンプレート印刷]** バージョン管理バックアップ分類用に印刷テンプレートコレクションのメタデータを更新。 by @cgyrock
- **[履歴レコード]** バージョン管理バックアップ分類用にレコード履歴コレクションのメタデータを更新。 by @cgyrock
- **[ワークフロー: 承認]** バージョン管理バックアップ分類用にワークフロー承認コレクションのメタデータを更新。 by @cgyrock
- **[監査ログ]** バージョン管理バックアップ分類用に監査ログコレクションのメタデータを更新。 by @cgyrock
- **[メールマネージャー]** バージョン管理バックアップ分類用にメールマネージャーコレクションのメタデータを更新。 by @cgyrock
- **[アプリスーパーバイザー]** バージョン管理バックアップ分類用にアプリスーパーバイザーコレクションのメタデータを更新。 by @cgyrock

### 🐛 不具合修正

- **[database]** 一括更新時にパスワードフィールドがハッシュ化されない問題を修正。 ([#9736](https://github.com/nocobase/nocobase/pull/9736)) by @mytharcher
- **[client]** ポップアップサブテーブルの行アクションが連動ルールで非表示になった際、サブテーブルフィールド全体が誤って非表示になる問題を修正 ([#9717](https://github.com/nocobase/nocobase/pull/9717)) by @katherinehhh
- **[client-v2]**

  - client v2 表示ビューで JSON フィールドのオブジェクト値が空白セルとして表示される問題を修正。 ([#9714](https://github.com/nocobase/nocobase/pull/9714)) by @katherinehhh
  - ローカライズ環境で V2 オプションフィールドが通常のオプションラベルを誤って翻訳する問題を修正。 ([#9708](https://github.com/nocobase/nocobase/pull/9708)) by @katherinehhh
- **[ブロック: マップ]**

  - v1 Google マップブロックで DrawingManager が利用できない問題を修正 ([#9735](https://github.com/nocobase/nocobase/pull/9735)) by @katherinehhh
  - マッププラグイン有効化後、v2 データソース管理のフィールド追加メニューにマップジオメトリフィールドが表示されない問題を修正。 ([#9715](https://github.com/nocobase/nocobase/pull/9715)) by @katherinehhh
- **[カレンダー]** v2 カレンダーブロックの詳細ドロワー内で詳細ブロックと編集ブロックを追加できない問題を修正 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) by @jiannx
- **[データソース管理]**

  - v2 データソースのフィールド設定ドロワーでタイトルフィールド変更後に再度開いた際、古いタイトルフィールドが表示される問題を修正。 ([#9720](https://github.com/nocobase/nocobase/pull/9720)) by @katherinehhh
  - コレクション、フィールド、同期、テーブル読み込み操作失敗時の V2 データソース管理のエラーメッセージを改善。 ([#9710](https://github.com/nocobase/nocobase/pull/9710)) by @katherinehhh
- **[AI 従業員]**

  - AI 従業員のデータクエリプロンプトを改善し、クエリツール使用前に必要なスキルをロードするよう誘導。 ([#9725](https://github.com/nocobase/nocobase/pull/9725)) by @cgyrock
  - client-v2 チャート設定で Dara アシスタントボタンが表示されない問題を修正。 ([#9696](https://github.com/nocobase/nocobase/pull/9696)) by @cgyrock
- **[ブロック: リスト]** リストブロックの行アクションが現在のレコードに依存する場合に、連動状態が古くなる問題を修正。 ([#9716](https://github.com/nocobase/nocobase/pull/9716)) by @katherinehhh
- **[エラーハンドラー]** トークンなしの未認証リクエストに対する通常のエラーログのノイズを低減 ([#9718](https://github.com/nocobase/nocobase/pull/9718)) by @2013xile
- **[操作: レコードインポート Pro]** XLSX インポート時に UTF-8 共有文字列がストリーミングチャンクに分割されることによる文字化けを修正。 by @mytharcher
- **[AI: ナレッジベース]** S3 ナレッジベースのファイル URL でパスが欠落する問題を修正。 by @cgyrock
- **[履歴レコード]** 外部データソース変更のレコード履歴が欠落する問題を修正 by @2013xile
