### 🐛 不具合修正

* **[server]** アプリケーションを reload した後、Snowflake 主キーが重複する問題を修正しました。 ([#10911](https://github.com/nocobase/nocobase/pull/10911)) by @2013xile
* **[ワークフロー]** KingBase が有効状態と実行回数を文字列として返す場合に、ワークフローが有効かどうか、およびすでに実行済みかどうかを正しく判定できない問題を修正しました。 ([#10888](https://github.com/nocobase/nocobase/pull/10888)) by @mytharcher
* **[データソース管理]** v2 のリレーションフィールド設定で外部キーを手動入力できない問題を修正し、新しいフィールド名を入力するか、既存フィールドから選択できるようにしました。 ([#10915](https://github.com/nocobase/nocobase/pull/10915)) by @katherinehhh
