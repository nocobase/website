### 🚀 機能改善

* **[Office ファイルプレビュー]** Microsoft のオンラインプレビュー機能で、より多くのファイル形式を表示できるよう改善 ([#8500](https://github.com/nocobase/nocobase/pull/8500)) by @mytharcher

### 🐛 不具合修正

* **[client]**
  * nanoid フィールドがフォーム送信後に再生成されない不具合を修正 ([#8491](https://github.com/nocobase/nocobase/pull/8491)) by @katherinehhh
  * カスケードコンポーネントの必須チェックが重複して表示される問題を修正 ([#8476](https://github.com/nocobase/nocobase/pull/8476)) by @katherinehhh
* **[database]**
  * データテーブル再読み込み後に `empty` 演算子でフィルターするとエラーが発生する不具合を修正 ([#8496](https://github.com/nocobase/nocobase/pull/8496)) by @2013xile
  * ネストしたリレーション更新処理における不具合を修正 ([#8492](https://github.com/nocobase/nocobase/pull/8492)) by @chenos
* **[ファイルマネージャー]** ファイルアップロード時にファイル名が二重デコードされ、文字化けが発生する問題を修正 ([#8481](https://github.com/nocobase/nocobase/pull/8481)) by @mytharcher
* **[データソース：メインデータベース]** 多対多リレーションの削除時に `onDelete: 'restrict'` 制約が正しく適用されない不具合を修正 ([#8493](https://github.com/nocobase/nocobase/pull/8493)) by @2013xile
* **[ブロック：iframe]** iframe で集計変数を追加した際にエラーが発生する問題を修正 ([#8482](https://github.com/nocobase/nocobase/pull/8482)) by @zhangzhonghe
* **[ワークフロー：Webhook トリガー]** リクエストボディ解析が未設定の場合に、トリガーデータが欠落する問題を修正 by @mytharcher
* **[テンプレート印刷]** 複数ロールを併用した場合に、印刷ボタンの権限制御が正しく機能しない不具合を修正 by @jiannx
* **[ワークフロー：承認]**
  * 同時送信によりプロセスが重複して再実行される不具合を修正 by @mytharcher
  * 分岐モードの承認処理で、指定ノードへ正しく差し戻せない問題を修正 by @mytharcher
* **[マイグレーション管理]** マイグレーション失敗時に、例外オブジェクト内の SQL が過大となりプロセスが停止しやすくなる問題を修正 by @cgyrock
