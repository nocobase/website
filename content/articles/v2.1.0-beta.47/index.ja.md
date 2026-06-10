### 🎉 新機能

- **[undefined]** nginx および caddy 向けのトップレベル proxy コマンドを追加。 ([#9721](https://github.com/nocobase/nocobase/pull/9721)) by @chenos
- **[バックアップマネージャー]** 新しいバージョン管理プラグインに適応。 ([#9563](https://github.com/nocobase/nocobase/pull/9563)) by @cgyrock
- **[バージョン管理]** バージョン管理プラグインを追加。 by @cgyrock

### 🚀 機能改善

- **[データソース管理]** client-v2 データソース権限管理を追加し、関連する権限選択ドロワーのレイアウトを統一。 ([#9706](https://github.com/nocobase/nocobase/pull/9706)) by @jiannx
- **[データテーブル：外部データ連携（FDW）]** SQL データテーブルおよび外部データテーブル向けに V2 テンプレートの V1 との同等性を改善（SQL 確認、外部データベースサーバー管理、テンプレートの表示順を含む）。 ([#9711](https://github.com/nocobase/nocobase/pull/9711)) by @katherinehhh
- **[テンプレート印刷]** バージョン管理バックアップ分類のため、印刷テンプレートのコレクションメタデータを更新。 by @cgyrock
- **[レコード履歴]** バージョン管理バックアップ分類のため、レコード履歴のコレクションメタデータを更新。 by @cgyrock
- **[ワークフロー：承認]** バージョン管理バックアップ分類のため、承認ワークフローのコレクションメタデータを更新。 by @cgyrock
- **[監査ログ]** バージョン管理バックアップ分類のため、監査ロガーのコレクションメタデータを更新。 by @cgyrock
- **[メール管理]** バージョン管理バックアップ分類のため、メールマネージャーのコレクションメタデータを更新。 by @cgyrock
- **[アプリスーパーバイザー]** バージョン管理バックアップ分類のため、アプリスーパーバイザーのコレクションメタデータを更新。 by @cgyrock

### 🐛 不具合修正

- **[client-v2]**

  - client-v2 詳細ビューで JSON フィールドのオブジェクト値が空白セルとして表示される問題を修正。 ([#9714](https://github.com/nocobase/nocobase/pull/9714)) by @katherinehhh
  - ローカライズ環境でオプションフィールドの通常のオプションラベルが誤って翻訳される問題を修正。 ([#9708](https://github.com/nocobase/nocobase/pull/9708)) by @katherinehhh
- **[エラーハンドラー]** トークンを持たない通常の未認証リクエストに対するノイズの多いエラーログを低減。 ([#9718](https://github.com/nocobase/nocobase/pull/9718)) by @2013xile
- **[ブロック：リスト]** アクションが現在のレコードに依存する場合に、リストブロックの行アクションの連動状態が残留する問題を修正。 ([#9716](https://github.com/nocobase/nocobase/pull/9716)) by @katherinehhh
- **[データソース管理]** V2 データソース管理において、データテーブル・フィールド・同期・テーブル読み込み操作の失敗時のエラーメッセージを改善。 ([#9710](https://github.com/nocobase/nocobase/pull/9710)) by @katherinehhh
- **[AI従業員]** client-v2 グラフ設定で Dara アシスタントボタンが表示されない問題を修正。 ([#9696](https://github.com/nocobase/nocobase/pull/9696)) by @cgyrock
- **[AI：ナレッジベース]** S3 ナレッジベースのファイル URL でパスが欠落する問題を修正。 by @cgyrock
- **[操作：レコードインポート Pro]** UTF-8 共有文字列がストリーミングチャンクに分割される際に XLSX インポートで文字化けが発生する問題を修正。 by @mytharcher
- **[レコード履歴]** 外部データソースの変更がレコード履歴に記録されない問題を修正。 by @2013xile
