### 🎉 新機能

- **[バックアップマネージャー]** KingBase をプライマリデータベースとして使用する場合のバックアップとリストアに対応しました ([#9791](https://github.com/nocobase/nocobase/pull/9791)) by @2013xile
- **[マイグレーションマネージャー]** KingBase をプライマリデータベースとして使用する場合のマイグレーションに対応しました。 by @2013xile

### 🚀 機能改善

- **[AI: ナレッジベース]** AI ナレッジベースの検索および関連ドキュメントを改善しました。 ([#9765](https://github.com/nocobase/nocobase/pull/9765)) by @cgyrock
- **[cli]** env 設定のスキーマバージョン記録を追加しました ([#9782](https://github.com/nocobase/nocobase/pull/9782)) by @chenos
- **[ワークフロー]** 更新オプションのテストの安定性を向上させました ([#9773](https://github.com/nocobase/nocobase/pull/9773)) by @mytharcher
- **[ファイルマネージャー]** PDF プレビューを改善：クロスオリジンの PDF ファイルはブラウザネイティブビューアーを使用し、同一オリジンの PDF ファイルは引き続き PDF.js で描画します。 ([#9796](https://github.com/nocobase/nocobase/pull/9796)) by @mytharcher
- **[バックアップマネージャー]** コレクションの `dataCategory` が `'runtime'` に設定されているテーブルは、バックアップから自動的に除外されるようになりました。 ([#9804](https://github.com/nocobase/nocobase/pull/9804)) by @cgyrock
- **[AI: ナレッジベース]** AI ナレッジベースにおけるドキュメントセグメンテーション、セグメント管理、ヒットテスト、およびドキュメントワークフローノードのサポートを改善しました。 by @cgyrock

### 🐛 不具合修正

- **[client-v2]**

  - サブフォームにサブテーブルが含まれる場合に、フォーム送信時に誤ったメッセージが表示される問題を修正しました。 ([#9807](https://github.com/nocobase/nocobase/pull/9807)) by @gchust
  - サブテーブル列のイベントフローが誤って実行される問題を修正しました。 ([#9821](https://github.com/nocobase/nocobase/pull/9821)) by @gchust
  - 関連フィールドから予期しない `updateAssociationValues` を削除しました ([#9812](https://github.com/nocobase/nocobase/pull/9812)) by @katherinehhh
  - v2 フィルターフォームのチェックボックスドロップダウンで Yes/No オプションが翻訳されていなかった問題を修正しました。 ([#9792](https://github.com/nocobase/nocobase/pull/9792)) by @katherinehhh
  - ブロックをテンプレートとして保存した後にイベントフロー設定を更新できなかった問題を修正しました。 ([#9585](https://github.com/nocobase/nocobase/pull/9585)) by @gchust
  - v2 テーブルの関連タイトルフィールドで時刻、日付のみ、または日時フィールドを使用した場合に、表示とフォーマット設定が正しくなかった問題を修正しました。 ([#9785](https://github.com/nocobase/nocobase/pull/9785)) by @katherinehhh
- **[ワークフロー]** 予期しないディスパッチエラー後のワークフローディスパッチャーの復旧を修正しました。 ([#9783](https://github.com/nocobase/nocobase/pull/9783)) by @mytharcher
- **[ファイルマネージャー]** 外部データソースの添付ファイル URL フィールドへのファイルアップロード時に発生していた 404 エラーを修正しました ([#9809](https://github.com/nocobase/nocobase/pull/9809)) by @2013xile
- **[操作: カスタムリクエスト]** V2 カスタムリクエストアクションにおいて、リクエスト設定が未構成の場合に不要なエラーが表示される問題を修正しました。 ([#9802](https://github.com/nocobase/nocobase/pull/9802)) by @katherinehhh
- **[AI 従業員]**

  - AI 従業員がサブテーブルデータを正しく入力できなかった問題を修正しました。 ([#9801](https://github.com/nocobase/nocobase/pull/9801)) by @gchust
  - AI 従業員のショートカットタスクトリガーにおいて、ショートカットプロファイルからタスクを実行する際に現在の作業コンテキストの添付ファイルが含まれるよう修正しました。 ([#9808](https://github.com/nocobase/nocobase/pull/9808)) by @cgyrock
- **[ワークフロー: カスタムアクションイベント]** アクションパネル v2 のワークフロー起動ボタンで、ワークフローがバインドされていない場合に成功と表示されリクエストが送信される問題を修正しました。 ([#9798](https://github.com/nocobase/nocobase/pull/9798)) by @mytharcher
- **[フローエンジン]** AI によって構築された場合に、ポップアップ内の現在のレコードフォームと詳細に誤ったデータが含まれる可能性がある問題を修正しました。 ([#9788](https://github.com/nocobase/nocobase/pull/9788)) by @gchust
- **[非同期タスクマネージャー]** `filterByTk` にタスク ID が欠落している場合の非同期タスクファイルダウンロードエラーを修正しました。 ([#9705](https://github.com/nocobase/nocobase/pull/9705)) by @mytharcher
- **[データソース: 外部 NocoBase]** NocoBase 外部データソースのファイルアップロードおよびストレージアクションを、アップロードデータソースによってプロキシするよう修正しました by @2013xile
- **[マルチスペース]** スペース管理者がユーザーメールフィールドへのアクセス権なしにスペースユーザーを追加した際の権限エラーを修正しました。 by @jiannx
- **[ワークフロー: サブフロー]** 非同期サブフローにおいて、ワーカー再起動後やインメモリイベントマッピング喪失後に親ワークフローが再開できるよう修正しました。 by @mytharcher
- **[アプリスーパーバイザー]** リモート WebSocket プロキシレスポンスが失敗した際のクラッシュを修正しました by @2013xile
