### 🚀 改善

- **[ファイルマネージャー]** ファイル URL 生成ロジックと API を簡素化 ([#6472](https://github.com/nocobase/nocobase/pull/6472)) by @mytharcher
- **[ファイルストレージ：S3(Pro)]** ファイル URL の生成方法をシンプルに変更 by @mytharcher
- **[バックアップマネージャー]** 同一バージョンのプレリリース版とリリース版間でのバックアップ復元を可能にする by @gchust

### 🐛 バグ修正

- **[クライアント]**
  - リッチテキストフィールドが送信時にデータをクリアしない ([#6486](https://github.com/nocobase/nocobase/pull/6486)) by @katherinehhh
  - ページ右上のアイコンの色がテーマに応じて変更されない ([#6482](https://github.com/nocobase/nocobase/pull/6482)) by @zhangzhonghe
  - フィルターフォームのリセットボタンを押しても、グリッドカードブロックのフィルター条件がクリアされない ([#6475](https://github.com/nocobase/nocobase/pull/6475)) by @zhangzhonghe

- **[ワークフロー：手動ノード]**
  - マイグレーションスクリプトを修正 ([#6484](https://github.com/nocobase/nocobase/pull/6484)) by @mytharcher
  - マイグレーション名を変更して、再実行を保証 ([#6487](https://github.com/nocobase/nocobase/pull/6487)) by @mytharcher
  - フィルター内のワークフロータイトルフィールドを修正 ([#6480](https://github.com/nocobase/nocobase/pull/6480)) by @mytharcher
  - id カラムが存在しない場合のマイグレーションエラーを修正 ([#6470](https://github.com/nocobase/nocobase/pull/6470)) by @chenos
  - フィールドからコレクションが同期されるのを回避 ([#6478](https://github.com/nocobase/nocobase/pull/6478)) by @mytharcher

- **[ワークフロー：集約ノード]** 集約結果が null の場合の丸め処理エラーを修正 ([#6473](https://github.com/nocobase/nocobase/pull/6473)) by @mytharcher

- **[ワークフロー]** 削除されたワークフローのタスクをカウントしない ([#6474](https://github.com/nocobase/nocobase/pull/6474)) by @mytharcher

- **[バックアップマネージャー]** デフォルトのバックアップ設定が存在しない場合にサーバーが起動しない問題を修正 by @gchust

- **[ワークフロー：承認]**
  - プロセスフォーム中のファイル関連フィールドのエラーを修正 by @mytharcher
  - フックに基づくタスク数のカウントを修正 by @mytharcher