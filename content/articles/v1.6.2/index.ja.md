### 🐛 バグ修正

- **[client]** フォームの日付フィールドの日付範囲選択で、最大日付が除外される ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh
- **[通知：アプリ内メッセージ]** 誤った受信者設定により全ユーザーのクエリを防ぐ ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66
- **[ワークフロー：手動ノード]**
  - テーブルプレフィックスとスキーマロジックが欠落しているマイグレーションスクリプトを修正 ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher
  - マイグレーションスクリプトのバージョン制限を `<1.7.0` に変更 ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher