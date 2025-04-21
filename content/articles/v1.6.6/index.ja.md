### 🎉 新機能

- **[client]** 関連フィールドのタイトルフィールドとして長文テキストフィールドをサポート ([#6495](https://github.com/nocobase/nocobase/pull/6495)) by @katherinehhh
- **[Workflow: Aggregate node]** 集計結果の精度オプションを設定可能に ([#6491](https://github.com/nocobase/nocobase/pull/6491)) by @mytharcher

### 🚀 改善

- **[File storage: S3(Pro)]** 「アクセス URL 基礎」を「基礎 URL」に変更 by @zhangzhonghe

### 🐛 バグ修正

- **[evaluators]** 小数点以下の桁数を9桁に戻す ([#6492](https://github.com/nocobase/nocobase/pull/6492)) by @mytharcher
- **[File manager]** URLをエンコード ([#6497](https://github.com/nocobase/nocobase/pull/6497)) by @chenos
- **[Data source: Main]** MySQLビューを作成できない ([#6477](https://github.com/nocobase/nocobase/pull/6477)) by @aaaaaajie
- **[Workflow]** ワークフロー削除後の旧タスク件数の誤集計を修正 ([#6493](https://github.com/nocobase/nocobase/pull/6493)) by @mytharcher
- **[Embed NocoBase]** ページが空白に表示される by @zhangzhonghe
- **[Backup manager]**
  - バックアップテンプレートからサブアプリ作成時にアップロードファイルが正しく復元されなかった by @gchust
  - GTIDセットの重複によりMySQLデータベースの復元が失敗した by @gchust
- **[Workflow: Approval]**
  - 差し戻された承認をToDoに変更 by @mytharcher
  - 承認プロセス表で発起者の確認ボタンが表示されない問題を修正 by @mytharcher