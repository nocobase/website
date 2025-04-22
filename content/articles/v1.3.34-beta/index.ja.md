### 🎉 新機能

- **[test]** フィルターフォームの関連フィールドは複数選択の許可を設定できるようになりました ([#5451](https://github.com/nocobase/nocobase/pull/5451)) by @zhangzhonghe

- **[client]** 「親オブジェクト」という名前の変数を追加 ([#5449](https://github.com/nocobase/nocobase/pull/5449)) by @zhangzhonghe
参考： [親オブジェクト](https://docs.nocobase.com/handbook/ui/variables#parent-object)
### 🐛 バグ修正

- **[client]**
  - URL検索パラメータ変数が解析されない問題を修正 ([#5454](https://github.com/nocobase/nocobase/pull/5454)) by @zhangzhonghe

  - ネストされたサブテーブルで、データスコープを設定した関連データを選択すると他の行が消えてしまうバグを修正 ([#5441](https://github.com/nocobase/nocobase/pull/5441)) by @katherinehhh

  - 表の行の選択時の背景色を修正 ([#5445](https://github.com/nocobase/nocobase/pull/5445)) by @mytharcher

- **[ブロック：地図]** 表のマップフィールドのズームレベル設定を削除 ([#5457](https://github.com/nocobase/nocobase/pull/5457)) by @katherinehhh

- **[ファイルマネージャー]** リードプレティのフィールドにおけるストレージルールフックの呼び出しを修正 ([#5447](https://github.com/nocobase/nocobase/pull/5447)) by @mytharcher

- **[データソース：メイン]** コンポーネントの変更によりE2Eケースが失敗する問題を修正 ([#5437](https://github.com/nocobase/nocobase/pull/5437)) by @mytharcher
