### 🎉 新機能

* **[client]** 関連ブロックに関連付け/関連付け解除操作を追加 ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh
* **[データ可視化]** 新規ブロックプラグインで client-v2 をサポート ([#9297](https://github.com/nocobase/nocobase/pull/9297)) by @zhangzhonghe

### 🚀 機能改善

* **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn

### 🐛 不具合修正

* **[client-v2]**
  * 一部の v2 ページでリモートプラグインの読み込みに失敗する問題を修正 ([#9369](https://github.com/nocobase/nocobase/pull/9369)) by @zhangzhonghe
  * v2 ページでブロックをドラッグする際、プレースホルダーのハイライトとドロップ位置が正しく表示されない問題を修正 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) by @zhangzhonghe
* **[client]**
  * ブロック内フォームの値が変更された際に、連動ルールが自動実行されない問題を修正。 ([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust
  * サブテーブル内の選択肢フィールドの必須入力が、モバイル端末で 2 回選択しないと反映されない問題を修正 ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh
  * v2 サブテーブルで、関係フィールドのドロップダウン選択肢コンポーネントにクイック編集の設定項目が誤って表示される問題を修正 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh
  * キャッシュされたページを切り替えた後、URL クエリパラメータ変数が無効になる問題を修正 ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe
  * グリッドカードブロックでデータ更新後に再読み込みしても、データが正しく表示されない問題を修正 ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh
* **[server]** プラグインパッケージ名の検証を追加 ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos
* **[undefined]** 多言語ドキュメント内のリンク切れを修正し、ドキュメントビルド時のリンク切れ検出をデフォルトで有効化。 ([#9371](https://github.com/nocobase/nocobase/pull/9371)) by @Molunerfinn
* **[AI 従業員]**
  * ワークフローの AI 従業員ノードが関係フィールドの添付ファイルを読み取る際にエラーが発生する問題を修正 ([#9377](https://github.com/nocobase/nocobase/pull/9377)) by @cgyrock
  * ワークフローの AI 従業員ノードで使用するツールを指定した後、ノード呼び出しが正常に終了しない問題を修正 ([#9381](https://github.com/nocobase/nocobase/pull/9381)) by @cgyrock
* **[ブロック：カンバン]**
  * カンバンカードのコンパクト表示を改善し、クイック作成ポップアップのテンプレート選択を改善。 ([#9370](https://github.com/nocobase/nocobase/pull/9370)) by @jiannx
  * v1 カンバンブロックの長文フィールドで、単語の途中で改行される問題を修正 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh
  * ポップアップまたは第 2 階層ページ内の関連カンバンブロックで、未解析のランタイムリソースパラメータが使用される問題を修正。 ([#9350](https://github.com/nocobase/nocobase/pull/9350)) by @jiannx
* **[操作：カスタムリクエスト]** koa を v3 にアップグレード ([#9368](https://github.com/nocobase/nocobase/pull/9368)) by @chenos
* **[データテーブルフィールド：数式]** v2 サブテーブルで数式フィールドの値が自動計算されない問題を修正 ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh
* **[メール管理]** メールボックスエイリアスのタイトル表示問題を修正 by @jiannx
