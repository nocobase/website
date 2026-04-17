### 🚀 機能改善

* **[ワークフロー：承認]** 承認処理の記録リスト読み込み時に、JSON フィールド起因のパフォーマンス問題を改善 by @mytharcher

### 🐛 不具合修正

* **[server]** Pub-Sub の停止タイミングを `beforeStop` に変更し、データベース停止後にメッセージ送信や処理が行われてしまう問題を回避 ([#8934](https://github.com/nocobase/nocobase/pull/8934)) by @mytharcher
* **[ローカライズ]** 権限がない場合に localizationTexts:missing API が呼び出されてしまう問題を修正 ([#8903](https://github.com/nocobase/nocobase/pull/8903)) by @chenos
* **[データソース：外部 Oracle]** Oracle データソースの読み込みエラーを修正 by @2013xile
