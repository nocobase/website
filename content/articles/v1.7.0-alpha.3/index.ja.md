### 🎉 新機能

- **[client]** インラインテーブル操作において、アイコンのみモードをサポートし、ホバー時に操作名を表示するようになりました ([#6451](https://github.com/nocobase/nocobase/pull/6451)) by @katherinehhh

### 🚀 改善

- **[File manager]** ファイルURL生成のロジックとAPIを簡素化しました ([#6472](https://github.com/nocobase/nocobase/pull/6472)) by @mytharcher

- **[File storage: S3(Pro)]**
  - 『Access URL Base』の文言を『Base URL』に変更しました by @zhangzhonghe

  - ファイルURL生成方法をシンプルなものに変更しました by @mytharcher

- **[Backup manager]** 同一バージョンのプレリリース版とリリース版間でバックアップの復元を可能にしました by @gchust

### 🐛 バグ修正

- **[client]**
  - 連動ルール設定でフィールドが欠落して表示される問題を修正しました ([#6488](https://github.com/nocobase/nocobase/pull/6488)) by @katherinehhh

  - ページ右上のアイコンの色がテーマに合わせて変更されない問題を修正しました ([#6482](https://github.com/nocobase/nocobase/pull/6482)) by @zhangzhonghe

  - リッチテキストフィールドのデータが送信時にクリアされない問題を修正しました ([#6486](https://github.com/nocobase/nocobase/pull/6486)) by @katherinehhh

  - フォームのデフォルト値設定における入力フィールドのスタイルが正しく表示されない問題を修正しました ([#6490](https://github.com/nocobase/nocobase/pull/6490)) by @gchust

  - フィルターフォームのリセットボタンをクリックしても、グリッドカードブロックのフィルター条件がクリアされない問題を修正しました ([#6475](https://github.com/nocobase/nocobase/pull/6475)) by @zhangzhonghe

- **[Workflow: Manual node]**
  - 再実行を確実にするため、マイグレーションの名称を変更しました ([#6487](https://github.com/nocobase/nocobase/pull/6487)) by @mytharcher

  - マイグレーションの問題を修正しました ([#6484](https://github.com/nocobase/nocobase/pull/6484)) by @mytharcher

  - フィルター内のワークフロータイトルフィールドの不具合を修正しました ([#6480](https://github.com/nocobase/nocobase/pull/6480)) by @mytharcher

  - IDカラムが存在しない場合のマイグレーションエラーを修正しました ([#6470](https://github.com/nocobase/nocobase/pull/6470)) by @chenos

  - フィールドからのコレクション同期を防止しました ([#6478](https://github.com/nocobase/nocobase/pull/6478)) by @mytharcher

- **[Workflow]** ワークフローが削除された場合、タスクをカウントしないようにしました ([#6474](https://github.com/nocobase/nocobase/pull/6474)) by @mytharcher

- **[Variables and secrets]** 変数およびシークレット作成ダイアログでボタンが表示されない問題を修正しました ([#6485](https://github.com/nocobase/nocobase/pull/6485)) by @gchust

- **[Workflow: Aggregate node]** 集計結果がnullの場合の丸め処理に関する不具合を修正しました ([#6473](https://github.com/nocobase/nocobase/pull/6473)) by @mytharcher

- **[Embed NocoBase]** NocoBaseの埋め込み時にページが空白となる問題を修正しました by @zhangzhonghe

- **[Backup manager]** デフォルトのバックアップ設定が存在しない場合にサーバーが起動しない問題を修正しました by @gchust

- **[Workflow: Approval]**
  - 処理フォーム内のファイル関連フィールドのエラーを修正しました by @mytharcher

  - フックに基づくタスク集計の不具合を修正しました by @mytharcher