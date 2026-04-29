### 🎉 新機能

- **[ワークフロー]** ワークフローに作成者と更新者フィールドを追加 ([#9217](https://github.com/nocobase/nocobase/pull/9217)) by @mytharcher

### 🚀 機能改善

- **[undefined]**

  - AI Agentインストールガイドを改良し、Agentが `--ui` ビジュアルウィザードをバイパスするのを防止し、Nodeバージョン管理ツールの自動検出をサポート。 ([#9243](https://github.com/nocobase/nocobase/pull/9243)) by @Molunerfinn
  - AIドキュメントのNocoBaseバージョン要件を >= 2.1.0-beta.20 に更新し、最新のbetaバージョンへのアップグレードを推奨。 ([#9252](https://github.com/nocobase/nocobase/pull/9252)) by @Molunerfinn
  - - ([#9098](https://github.com/nocobase/nocobase/pull/9098)) by @Molunerfinn
- **[client-v2]** client v2 を client v1 から分離し、client v1 への依存関係を解消 ([#8937](https://github.com/nocobase/nocobase/pull/8937)) by @zhangzhonghe

### 🐛 不具合修正

- **[undefined]** ドキュメントサイトの言語スイッチャーが誤ったURLを生成する問題（例： `/cn/es/` 而不是 `/es/`）を修正。 ([#9233](https://github.com/nocobase/nocobase/pull/9233)) by @Molunerfinn
- **[client]** クイック編集ポップオーバーの最大高さとスクロール制限を設定し、画面下部の送信ボタンに到達できるように確保 ([#9226](https://github.com/nocobase/nocobase/pull/9226)) by @jiannx
- **[データ可視化]** プロセスは页面中图表查询配置字段下拉为空的问题を修正 ([#9276](https://github.com/nocobase/nocobase/pull/9276)) by @2013xile
- **[ユーザー認証]** パスワード変更後、古いセッションが引き続き使用できる問題を修正 ([#9261](https://github.com/nocobase/nocobase/pull/9261)) by @2013xile
