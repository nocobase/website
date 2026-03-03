### 🐛 不具合修正

* **[client]**
  * デフォルト値コンポーネント内でフィールドコンポーネントがレンダリングされない問題を修正 ([#8744](https://github.com/nocobase/nocobase/pull/8744)) by @mytharcher
  * メニュー切り替え時にデータブロックが更新されない問題を修正 ([#8735](https://github.com/nocobase/nocobase/pull/8735)) by @gchust
* **[database]** v2バージョンにおけるフィールドのカスタム正規表現バリデーション失敗を修正 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) by @jiannx
* **[flow-engine]** ctx.exitがユーザー定義イベントフローの実行を終了できない問題を修正 ([#8737](https://github.com/nocobase/nocobase/pull/8737)) by @gchust
* **[ワークフロー：承認]** 承認提出時にリレーションデータが更新および処理されない問題を回避するため、不足していたパラメータを補完 by @mytharcher
