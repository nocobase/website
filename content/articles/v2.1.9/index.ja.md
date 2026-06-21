### 🚀 機能改善

* **[client-v2]** フォーム値の設定に、値を上書きするオプションを追加しました。 ([#9578](https://github.com/nocobase/nocobase/pull/9578)) by @gchust

### 🐛 不具合修正

* **[client-v2]**
  * カスタム操作のワークフロートリガーボタンで、カスタムコンテキスト JSON が余分な `values` 階層に入ったり、シリアライズされた文字列として送信されたりする問題を修正しました。 ([#9815](https://github.com/nocobase/nocobase/pull/9815)) by @mytharcher
  * 固定値またはデフォルト値にリレーションフィールドの値を設定した場合に、設定が有効にならない問題を修正しました。 ([#9820](https://github.com/nocobase/nocobase/pull/9820)) by @gchust
* **[auth]** ログイン状態のレスポンスに、暗号化されたパスワードデータが含まれないようにしました。 ([#9836](https://github.com/nocobase/nocobase/pull/9836)) by @2013xile
* **[app]** プラグインの public path を推定する際に、無関係な currentScript が使用されないようにしました。 ([#9839](https://github.com/nocobase/nocobase/pull/9839)) by @chenos
* **[UI テンプレート]** ctx.openview のデフォルトコンテキストが正しくない問題を修正しました。 ([#9811](https://github.com/nocobase/nocobase/pull/9811)) by @gchust
