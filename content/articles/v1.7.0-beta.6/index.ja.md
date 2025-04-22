### 🎉 新機能

- **[client]** 関連フィールドのタイトルとして長文テキストフィールドをサポート ([#6495](https://github.com/nocobase/nocobase/pull/6495)) by @katherinehhh
- **[ワークフロー：集計ノード]** 集計結果の精度設定をサポート ([#6491](https://github.com/nocobase/nocobase/pull/6491)) by @mytharcher

### 🐛 バグ修正

- **[evaluators]** 小数点以下の桁数を9桁に戻す ([#6492](https://github.com/nocobase/nocobase/pull/6492)) by @mytharcher
- **[ワークフロー]** ワークフロー削除後のレガシータスク数の集計誤りを修正 ([#6493](https://github.com/nocobase/nocobase/pull/6493)) by @mytharcher
- **[データソース：メイン]** MySQLビューが作成できない問題を修正 ([#6477](https://github.com/nocobase/nocobase/pull/6477)) by @aaaaaajie
- **[ファイルマネージャー]** URLのエンコード ([#6497](https://github.com/nocobase/nocobase/pull/6497)) by @chenos
- **[バックアップマネージャー]**
  - GTIDセットの重複によるMySQLデータベースリストアの失敗を修正 by @gchust
  - バックアップテンプレートからサブアプリ作成時に、アップロードファイルが正しくリストアされない問題を修正 by @gchust
- **[ワークフロー：承認]**
  - 承認プロセステーブルにおいて発起人確認ボタンが表示されない問題を修正 by @mytharcher
  - 差し戻された承認申請をToDoとして扱うよう変更 by @mytharcher