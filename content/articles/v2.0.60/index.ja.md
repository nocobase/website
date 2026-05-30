### 🚀 機能改善

- **[AI employees]** LLM の Base URL フィールドを改善し、作成フォームと編集フォームの両方でグローバル変数を使用できるようにしました。 ([#9615](https://github.com/nocobase/nocobase/pull/9615)) by @cgyrock

### 🐛 不具合修正

- **[client]** トップナビゲーションバーの数値バッジ背景が広すぎる問題を修正しました。 ([#9607](https://github.com/nocobase/nocobase/pull/9607)) by @zhangzhonghe
- **[AI employees]** 参照しているテーブルブロックが削除された後、AI ショートカットボタンのコンテキストが空のブロックになる問題を修正しました。 ([#9617](https://github.com/nocobase/nocobase/pull/9617)) by @cgyrock
- **[Migration manager]** PostgreSQL のマイグレーション差分計算を修正し、子テーブルのローカル列が継承列に変わる際に誤って列削除文が生成されないようにしました。 by @hongboji
