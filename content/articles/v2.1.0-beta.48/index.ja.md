### 🎉 新機能

- **[client-v2]** テキストフィールドでスキャン入力をサポート ([#9599](https://github.com/nocobase/nocobase/pull/9599)) by @katherinehhh
- **[非同期タスクマネージャー]** 非同期タスクマネージャーのトップバーアクションに v2 クライアントサポートを追加。 ([#9707](https://github.com/nocobase/nocobase/pull/9707)) by @jiannx
- **[バックアップマネージャー]** バックアップマネージャープラグインに v2 クライアントランタイムサポートを追加。 ([#9712](https://github.com/nocobase/nocobase/pull/9712)) by @katherinehhh
- **[データソース: 外部 NocoBase]** データソースプラグイン「外部 NocoBase」を追加 by @2013xile

### 🚀 機能改善

- **[client-v2]** v2 ポップアップ選択関連フィールドで複数選択の無効化をサポート。 ([#9730](https://github.com/nocobase/nocobase/pull/9730)) by @katherinehhh
- **[ファイルマネージャー]** ファイルマネージャーの内部アップロードに `subPath` サポートを追加。 ([#9731](https://github.com/nocobase/nocobase/pull/9731)) by @mytharcher
- **[変数とシークレット]** 環境変数（`$env`）が v1 ランタイムの flow-engine ベースの変数ピッカーで選択可能に。 ([#9728](https://github.com/nocobase/nocobase/pull/9728)) by @Molunerfinn

### 🐛 不具合修正

- **[database]** 一括更新時にパスワードフィールドがハッシュ化されない問題を修正。 ([#9736](https://github.com/nocobase/nocobase/pull/9736)) by @mytharcher
- **[client]** ポップアップサブテーブルの行アクションが連動ルールで非表示になった際、サブテーブルフィールド全体が誤って非表示になる問題を修正 ([#9717](https://github.com/nocobase/nocobase/pull/9717)) by @katherinehhh
- **[AI 従業員]** AI 従業員のデータクエリプロンプトを改善し、クエリツール使用前に必要なスキルをロードするよう誘導。 ([#9725](https://github.com/nocobase/nocobase/pull/9725)) by @cgyrock
- **[データソース管理]** v2 データソースのフィールド設定ドロワーでタイトルフィールド変更後に再度開いた際、古いタイトルフィールドが表示される問題を修正。 ([#9720](https://github.com/nocobase/nocobase/pull/9720)) by @katherinehhh
- **[ブロック: マップ]**

  - マッププラグイン有効化後、v2 データソース管理のフィールド追加メニューにマップジオメトリフィールドが表示されない問題を修正。 ([#9715](https://github.com/nocobase/nocobase/pull/9715)) by @katherinehhh
  - v1 Google マップブロックで DrawingManager が利用できない問題を修正 ([#9735](https://github.com/nocobase/nocobase/pull/9735)) by @katherinehhh
- **[カレンダー]** v2 カレンダーブロックの詳細ドロワー内で詳細ブロックと編集ブロックを追加できない問題を修正 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) by @jiannx
