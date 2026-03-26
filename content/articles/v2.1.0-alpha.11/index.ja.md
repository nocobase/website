### 🎉 新機能

* **[client]** JS item 操作を追加しました ([#8911](https://github.com/nocobase/nocobase/pull/8911)) by @jiannx
* **[AI 従業員]** AI 従業員に SKILLS 機能を追加しました ([#8797](https://github.com/nocobase/nocobase/pull/8797)) by @cgyrock
* **[データソース管理]** MCP ツールのオンデマンド読み込みに対応しました ([#8936](https://github.com/nocobase/nocobase/pull/8936)) by @2013xile

### 🚀 機能改善

* **[flow-engine]** ページ構築関連 API のスキーマ検証を強化しました。 ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust
* **[client]** フォームボタンの横並びレイアウトを改善しました ([#8869](https://github.com/nocobase/nocobase/pull/8869)) by @jiannx
* **[app]** client-v1 に Rsbuild ベースの開発ワークフローを追加し、ローカルプラグイン開発と現在の `/v2/` 環境との互換性を維持しました ([#8902](https://github.com/nocobase/nocobase/pull/8902)) by @Molunerfinn
* **[データテーブルフィールド：中国行政区画]** 中国行政区画フィールドが 2.0 に対応しました ([#8831](https://github.com/nocobase/nocobase/pull/8831)) by @jiannx
* **[ワークフロー]** すべてのトリガーとノードに検証ルールを追加しました ([#8930](https://github.com/nocobase/nocobase/pull/8930)) by @mytharcher
* **[ワークフロー：承認]** 承認処理記録リストの読み込み時に、JSON フィールド起因のパフォーマンス問題を改善しました by @mytharcher

### 🐛 不具合修正

* **[flow-engine]** フォームフィールド削除時に、状態がフィールド設定へ正しく同期されるよう修正しました ([#8857](https://github.com/nocobase/nocobase/pull/8857)) by @jiannx
* **[resourcer]** 外部データソースが正しく読み込まれない問題を修正しました ([#8929](https://github.com/nocobase/nocobase/pull/8929)) by @2013xile
* **[database]** 関連データ追加パラメータに誤りがある場合、警告ログを出力して該当フィールドをスキップし、エラーにより処理が実行できなくなる問題を回避しました ([#8923](https://github.com/nocobase/nocobase/pull/8923)) by @mytharcher
* **[server]** Pub-Sub の停止タイミングを `beforeStop` に変更し、データベース停止後にメッセージ送信や処理が行われてしまう問題を回避しました ([#8934](https://github.com/nocobase/nocobase/pull/8934)) by @mytharcher
* **[カスタム変数]** 公開フォーム送信データの後に No permissions エラーが発生する問題を修正しました ([#8942](https://github.com/nocobase/nocobase/pull/8942)) by @chenos
* **[AI 従業員]** core パッケージ内の ai モジュールで通らないテストケースを修正しました ([#8941](https://github.com/nocobase/nocobase/pull/8941)) by @cgyrock
* **[ローカライズ]** 権限がない場合に localizationTexts:missing API が呼び出されてしまう問題を修正しました ([#8903](https://github.com/nocobase/nocobase/pull/8903)) by @chenos
* **[操作：レコードインポート Pro]** 「ワークフローをトリガー」オプションを選択していない場合でも、ワークフローが実行される問題を修正しました by @mytharcher
* **[データソース：外部 Oracle]** Oracle データソースの読み込みエラーを修正しました by @2013xile
* **[ワークフロー：承認]** v2 承認フォームの戻るボタンの翻訳、ノード選択、および差し戻し先に関する問題を修正しました by @zhangzhonghe
