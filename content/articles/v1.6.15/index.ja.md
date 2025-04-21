### 🚀 改善

- **[データベース]**
  - 複数行テキストフィールドに、先頭および末尾の空白削除オプションを追加（[#6603](https://github.com/nocobase/nocobase/pull/6603)） by @mytharcher
  - 単一行テキストフィールドに、自動的に先頭と末尾の空白を削除するオプションを追加（[#6565](https://github.com/nocobase/nocobase/pull/6565)） by @mytharcher

- **[ファイルマネージャー]**
  - ストレージコレクションのテキストフィールドに、先頭と末尾の空白削除オプションを追加（[#6604](https://github.com/nocobase/nocobase/pull/6604)） by @mytharcher

- **[ワークフロー]**
  - コードを最適化（[#6589](https://github.com/nocobase/nocobase/pull/6589)） by @mytharcher

- **[ワークフロー：承認]**
  - 承認プロセスフォームでブロックテンプレートの使用をサポート by @mytharcher


### 🐛 バグ修正

- **[データベース]**
  - 更新時に値が変更されていない場合、「datetimeNoTz」フィールドの変更を防止（[#6588](https://github.com/nocobase/nocobase/pull/6588)） by @mytharcher

- **[クライアント]**
  - 関連コレクションのフィールドを表示する際、関連フィールド（select）が N/A と表示される問題を修正（[#6582](https://github.com/nocobase/nocobase/pull/6582)） by @katherinehhh
  - SchemaInitializerItem に items が設定されている場合、disabled プロパティが機能しない問題を修正（[#6597](https://github.com/nocobase/nocobase/pull/6597)） by @mytharcher
  - カスケード機能で、削除後に再選択すると「xxx の値は配列形式にできません」というエラーが発生する問題を修正（[#6585](https://github.com/nocobase/nocobase/pull/6585)） by @katherinehhh

- **[コレクションフィールド：多対多（配列）]**
  - メインテーブルで、多対多（配列）フィールドを持つ関連テーブルのフィールドをフィルタリングする際に発生するエラーを修正（[#6596](https://github.com/nocobase/nocobase/pull/6596)） by @2013xile

- **[公開フォーム]**
  - 公開フォームの閲覧権限に list および get を含むよう修正（[#6607](https://github.com/nocobase/nocobase/pull/6607)） by @chenos

- **[ユーザー認証]**
  - AuthProvider における token の割り当てを修正（[#6593](https://github.com/nocobase/nocobase/pull/6593)） by @2013xile

- **[ワークフロー]**
  - 同期オプションの表示不具合を修正（[#6595](https://github.com/nocobase/nocobase/pull/6595)） by @mytharcher

- **[ブロック：マップ]**
  - 地図管理の必須入力検証が空白入力で通過してしまう問題を修正（[#6575](https://github.com/nocobase/nocobase/pull/6575)） by @katherinehhh

- **[ワークフロー：承認]**
  - 承認フォーム内のフロントエンド変数の不具合を修正 by @mytharcher
  - ブランチモードにおいて、endOnReject が true に設定された場合のフローの問題を修正 by @mytharcher