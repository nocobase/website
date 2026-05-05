### 🎉 新機能

* **[AI 社員]** LLM 接続サービスが Xiaomi MIMO プラットフォームのサポートを追加 ([#9315](https://github.com/nocobase/nocobase/pull/9315)) by @cgyrock

### 🚀 機能改善

* **[flow-engine]** v2 ページブロックのドラッグレイアウトの操作表現を最適化 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) by @zhangzhonghe
* **[AI 社員]** AI 社員の分類を調整 ([#9274](https://github.com/nocobase/nocobase/pull/9274)) by @cgyrock
* **[ワークフロー：承認]** リレーションフィールドをデータベースから読み込む表示モードを廃止予定機能としてマークし、ユーザーに移行を促す by @mytharcher

### 🐛 不具合修正

* **[database]** SQL Server の外部データソースで日時フィールドのフィルタリングに失敗する可能性がある問題を修正 ([#9272](https://github.com/nocobase/nocobase/pull/9272)) by @2013xile
* **[client]**
  * v2 フォームの Data scope 変数で、依存フィールドに値がない場合に null が渡されない問題を修正。 ([#9287](https://github.com/nocobase/nocobase/pull/9287)) by @jiannx
  * JS column が行データの変更時にレンダリング処理を再実行 ([#9282](https://github.com/nocobase/nocobase/pull/9282)) by @jiannx
  * リレーションフィールドのポップアップ選択ページで、フィルタフォームのフィールドが消える問題を修正 ([#9211](https://github.com/nocobase/nocobase/pull/9211)) by @zhangzhonghe
  * v2 テーブルブロックでデータをフィルタまたは更新した後、JS フィールドのセルがまれに空白になる問題を修正。 ([#9285](https://github.com/nocobase/nocobase/pull/9285)) by @jiannx
* **[flow-engine]** フォーム関連の変数で、システムの非表示フィールドを選択できてしまう問題を修正。 ([#9302](https://github.com/nocobase/nocobase/pull/9302)) by @gchust
* **[操作：レコードをインポート]** インポートエラー時に失敗行インデックスが誤っている問題を修正 ([#9277](https://github.com/nocobase/nocobase/pull/9277)) by @mytharcher
* **[ブロック：ガントチャート]** ガントチャートブロックに「ドラッグで再スケジュールを有効化」設定を追加。 ([#9301](https://github.com/nocobase/nocobase/pull/9301)) by @jiannx
* **[AI 社員]** AI 社員で deepseek v4 接続時にエラーが発生する問題を修正 ([#9275](https://github.com/nocobase/nocobase/pull/9275)) by @cgyrock
* **[操作：レコードをエクスポート Pro]** 同期／非同期を自動判定するモードが有効にならない問題を修正 by @mytharcher
* **[ワークフロー：承認]**
  * 型エラーを修正 by @mytharcher
  * 承認 `execute` のトリガータイミングを修正し、承認トランザクションのコミット後に `latestExecutionId` を同期することを保証 by @mytharcher
