### 🚀 機能改善

* **[Office ファイルプレビュー]** Microsoft のオンラインプレビュー機能で、対応するファイル形式を拡充 ([#8500](https://github.com/nocobase/nocobase/pull/8500)) by @mytharcher

### 🐛 不具合修正

* **[database]** データテーブル再読み込み後に `empty` 演算子でフィルターするとエラーが発生する不具合を修正 ([#8496](https://github.com/nocobase/nocobase/pull/8496)) by @2013xile
* **[テンプレート印刷]** 複数ロールを併用した場合に、印刷ボタンの権限制御が正しく機能しない不具合を修正 by @jiannx
* **[ワークフロー：承認]** 1.x 系の承認記録ダイアログでエラーが発生する問題を修正 by @mytharcher
* **[マイグレーション管理]** マイグレーション失敗時に、例外オブジェクト内の SQL が過大となりプロセスが停止しやすくなる問題を修正 by @cgyrock
