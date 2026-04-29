### 🎉 新機能

- **[ワークフロー：承認]** 承認下書きの削除をサポート by @mytharcher

### 🚀 機能改善

- **[undefined]** AIドキュメントのNocoBaseバージョン要件を >= 2.1.0-beta.20 に更新し、最新のbetaバージョンへのアップグレードを推奨。 ([#9252](https://github.com/nocobase/nocobase/pull/9252)) by @Molunerfinn
- **[AI従業員]** AI従業員クイックタスク設定で、ワークフローAI従業員ノード設定と同じスキル設定コンポーネントを使用するように更新 ([#9246](https://github.com/nocobase/nocobase/pull/9246)) by @cgyrock

### 🐛 不具合修正

- **[client]**

  - サブテーブル内のレコードが削除された後，再次添加レコード時にデフォルト値が有効にならない問題を修正。 ([#9192](https://github.com/nocobase/nocobase/pull/9192)) by @gchust
  - 关联字段的选择弹框中过滤非必要的可选区块。 ([#9224](https://github.com/nocobase/nocobase/pull/9224)) by @jiannx
- **[操作：インポートレコード]** xlsxファイルのインポートに失敗し、ヘッダーが一致しないというエラーが表示される問題を修正 ([#9253](https://github.com/nocobase/nocobase/pull/9253)) by @mytharcher
- **[ライセンス設定]** ライセンス保存成功メッセージを更新 ([#9251](https://github.com/nocobase/nocobase/pull/9251)) by @jiannx
- **[AI従業員]** AI従業員システムプロンプト内の変数が有効にならない問題を修正 ([#9256](https://github.com/nocobase/nocobase/pull/9256)) by @cgyrock
- **[IdP: OAuth]** OAuth CLIログイン失敗の問題を修正し、動的登録はローカルコールバックアドレスのみ使用可能に制限 ([#9248](https://github.com/nocobase/nocobase/pull/9248)) by @2013xile
- **[AI：ナレッジベース]** ナレッジベースドキュメント削除後、関連するベクトルデータが同期削除されない問題を修正 by @cgyrock
- **[操作：インポートレコード Pro]** xlsxファイルのインポートに失敗し、ヘッダーが一致しないというエラーが表示される問題を修正 by @mytharcher
