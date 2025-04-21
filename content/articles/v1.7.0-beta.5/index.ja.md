### 🎉 新機能

- **[client]** インラインテーブル操作でアイコンのみモードをサポートし、ホバー時に操作名を表示 ([#6451](https://github.com/nocobase/nocobase/pull/6451)) by @katherinehhh

### 🚀 改善

- **[File manager]** ファイル URL 生成ロジックと API を簡素化 ([#6472](https://github.com/nocobase/nocobase/pull/6472)) by @mytharcher

- **[File storage: S3(Pro)]**
  - 「Access URL Base」を「Base URL」に変更 by @zhangzhonghe

  - ファイル URL 生成方法をシンプルな方式に変更 by @mytharcher

- **[Backup manager]** 同一バージョンのプレリリース版とリリース版間でバックアップの復元を可能にする by @gchust

### 🐛 バグ修正

- **[client]**
  - ページ右上のアイコンの色がテーマに合わせて変更されない問題を修正 ([#6482](https://github.com/nocobase/nocobase/pull/6482)) by @zhangzhonghe

  - リッチテキストフィールドで送信時にデータがクリアされない問題を修正 ([#6486](https://github.com/nocobase/nocobase/pull/6486)) by @katherinehhh

  - フィルターフォームのリセットボタンをクリックしてもグリッドカードブロックのフィルター条件がクリアされない問題を修正 ([#6475](https://github.com/nocobase/nocobase/pull/6475)) by @zhangzhonghe

- **[Workflow: Manual node]**
  - マイグレーションの問題を修正 ([#6484](https://github.com/nocobase/nocobase/pull/6484)) by @mytharcher

  - 再実行が確実になるようにマイグレーション名を変更 ([#6487](https://github.com/nocobase/nocobase/pull/6487)) by @mytharcher

  - フィルター内のワークフロータイトルフィールドの問題を修正 ([#6480](https://github.com/nocobase/nocobase/pull/6480)) by @mytharcher

  - フィールドからのコレクション同期を回避 ([#6478](https://github.com/nocobase/nocobase/pull/6478)) by @mytharcher

  - IDカラムが存在しない場合のマイグレーションエラーを修正 ([#6470](https://github.com/nocobase/nocobase/pull/6470)) by @chenos

- **[Workflow]** ワークフロー削除時にタスクをカウントしないように修正 ([#6474](https://github.com/nocobase/nocobase/pull/6474)) by @mytharcher

- **[Workflow: Aggregate node]** null 結果に対する丸め処理を修正 ([#6473](https://github.com/nocobase/nocobase/pull/6473)) by @mytharcher

- **[Embed NocoBase]** NocoBase 埋め込み時にページが空白で表示される問題を修正 by @zhangzhonghe

- **[Backup manager]** デフォルトバックアップ設定が欠落している場合にサーバーが起動しない問題を修正 by @gchust

- **[Workflow: Approval]**
  - プロセスフォーム内のファイル関連フィールドのエラーを修正 by @mytharcher

  - フックに基づくタスク数のカウントを修正 by @mytharcher