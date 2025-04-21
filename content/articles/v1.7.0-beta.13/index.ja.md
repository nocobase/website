### 🚀 改善

- **[database]**
  - 複数行テキスト型フィールドに、先頭および末尾の空白文字を除去するオプションを追加 ([#6603](https://github.com/nocobase/nocobase/pull/6603)) by @mytharcher
  - 単一行テキスト型に、先頭および末尾の空白文字を自動で除去するオプションを追加 ([#6565](https://github.com/nocobase/nocobase/pull/6565)) by @mytharcher

- **[client]**
  - フォームフィールドラベルで、レイアウトに応じたコロン表示の設定をサポート ([#6561](https://github.com/nocobase/nocobase/pull/6561)) by @katherinehhh

- **[ファイルマネージャー]**
  - ストレージコレクションのテキストフィールドに、先頭および末尾の空白文字を除去するオプションを追加 ([#6604](https://github.com/nocobase/nocobase/pull/6604)) by @mytharcher

- **[ワークフロー]**
  - コードを改善 ([#6589](https://github.com/nocobase/nocobase/pull/6589)) by @mytharcher

- **[ワークフロー：承認]**
  - 承認フォームにおいて、ブロックテンプレートの利用をサポート by @mytharcher

### 🐛 不具合修正

- **[database]**
  - 更新時に値が変更されていない場合、'datetimeNoTz' フィールドが変更されたと認識されないようにする ([#6588](https://github.com/nocobase/nocobase/pull/6588)) by @mytharcher
  - 1対多のレコード削除時、`filter` と `filterByTk` が同時に指定され、`filter` に関連フィールドが含まれている場合、`filterByTk` が無視される問題を修正 ([#6606](https://github.com/nocobase/nocobase/pull/6606)) by @2013xile

- **[client]**
  - `SchemaInitializerItem` に `items` が設定されている場合、`disabled` プロパティが正しく動作しない問題を修正 ([#6597](https://github.com/nocobase/nocobase/pull/6597)) by @mytharcher
  - カスケードコンポーネントで、削除後に再選択する際に "The value of xxx cannot be in array format" エラーが発生する問題を修正 ([#6585](https://github.com/nocobase/nocobase/pull/6585)) by @katherinehhh
  - 関連フィールド（select）が、関連コレクションのフィールド表示時にデフォルトで N/A と表示される問題を修正 ([#6582](https://github.com/nocobase/nocobase/pull/6582)) by @katherinehhh
  - 送信およびリフレッシュボタンで、アイコンのみの表示モードが正しく機能しない問題を修正 ([#6592](https://github.com/nocobase/nocobase/pull/6592)) by @katherinehhh

- **[公開フォーム]**
  - 閲覧権限に list と get を含むように修正 ([#6607](https://github.com/nocobase/nocobase/pull/6607)) by @chenos

- **[ユーザー認証]**
  - `AuthProvider` 内での token 割り当てを修正 ([#6593](https://github.com/nocobase/nocobase/pull/6593)) by @2013xile

- **[データ表フィールド：多対多（配列）]**
  - 多対多（配列）フィールドを含む関連コレクションのフィールドで、主テーブルのフィルタリング時にエラーが発生する問題を修正 ([#6596](https://github.com/nocobase/nocobase/pull/6596)) by @2013xile

- **[ワークフロー]**
  - 同期オプションの表示に関する問題を修正 ([#6595](https://github.com/nocobase/nocobase/pull/6595)) by @mytharcher

- **[ブロック：マップ]**
  - マップ管理において、必須入力項目が空白入力により検証を通過してしまう問題を修正 ([#6575](https://github.com/nocobase/nocobase/pull/6575)) by @katherinehhh

- **[認証：OIDC]**
  - コールバックパスが文字列 'null' の場合に、不正なリダイレクトが発生する問題を修正 by @2013xile

- **[ワークフロー：承認]**
  - 承認フォーム内のフロントエンド変数の問題を修正 by @mytharcher
  - 分岐モードで 'endOnReject' が true に設定された際のプロセスの問題を修正 by @mytharcher