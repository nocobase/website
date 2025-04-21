### 🚀 改善

- **[通知：アプリ内メッセージ]** SSE接続の再試行に関するコンソールエラーログを削除しました。 ([#6205](https://github.com/nocobase/nocobase/pull/6205)) by @sheldon66

### 🐛 バグ修正

- **[クライアント]**
  - 関係データのクイック作成操作モーダルでドラッグ設定が欠落している ([#6201](https://github.com/nocobase/nocobase/pull/6201)) by @katherinehhh

  - 高精度の数値フォーマットが適用されない問題 ([#6202](https://github.com/nocobase/nocobase/pull/6202)) by @katherinehhh

  - フォームで関係フィールドをクリアした後、送信時にフィールド値が実際にクリアされない問題を修正しました ([#5540](https://github.com/nocobase/nocobase/pull/5540)) by @zhangzhonghe

  - フォーム送信後にブロックが更新されない ([#6206](https://github.com/nocobase/nocobase/pull/6206)) by @zhangzhonghe

  - 関係フィールドをリセットした後、送信時にリンクフィールドの値が保持される ([#6207](https://github.com/nocobase/nocobase/pull/6207)) by @katherinehhh

  - テーブル内の更新権限がない行に対して更新アクションが表示される ([#6204](https://github.com/nocobase/nocobase/pull/6204)) by @katherinehhh

- **[コレクションフィールド：ソート]** 外部データソースでソートフィールドタイプが登録されていない問題を修正しました ([#6212](https://github.com/nocobase/nocobase/pull/6212)) by @mytharcher

- **[認証]** WebSocket認証の問題 ([#6209](https://github.com/nocobase/nocobase/pull/6209)) by @2013xile

- **[コレクションフィールド：添付（URL）]** フック内の非推奨リクエストURLを修正しました by @mytharcher