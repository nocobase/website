### 🎉 新機能

- **[WeCom]** サインインボタンのカスタムツールチップ設定をサポート by @2013xile

### 🐛 不具合修正

- **[client]**
  - 画像URL内の特殊文字が原因で画像が表示されない問題を修正 ([#6459](https://github.com/nocobase/nocobase/pull/6459)) by @mytharcher
  - サブテーブルのページサイズ変更後、データ追加時にページ番号が正しく表示されない問題を修正 ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh
  - ロゴのスタイルが以前と一致しない問題を修正 ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe

- **[Workflow: Manual node]** マイグレーションスクリプトで発生するエラーを修正 ([#6445](https://github.com/nocobase/nocobase/pull/6445)) by @mytharcher

- **[Data visualization]** カスタムフィルタフィールド追加時に、削除済みフィールドが表示される問題を修正 ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile

- **[File manager]** ファイルマネージャーのいくつかの問題を修正 ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher

- **[Action: Custom request]** カスタムリクエストのサーバー側権限検証エラーを修正 ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh

- **[Data source manager]** ロール管理でデータソースを切り替えた際、対応するコレクションが読み込まれない問題を修正 ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh

- **[Action: Batch edit]** バッチ編集送信時にワークフローが起動しない問題を修正 ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher

- **[Workflow: Custom action event]** E2Eテストケースから「only」を除去 by @mytharcher

- **[Workflow: Approval]**
  - 承認フォームにおいて関連データが表示されない問題を修正 by @mytharcher
  - 外部データソースの承認時にエラーが発生する問題を修正 by @mytharcher