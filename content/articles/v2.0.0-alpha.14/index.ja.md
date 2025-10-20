### 🚀 機能改善

* **[AI 従業員]** AI によるコード生成機能を強化（[#7614](https://github.com/nocobase/nocobase/pull/7614)）@cgyrock
* **[データソース：主データベース]** フィールド検証エラーメッセージのローカライズロジックをリファクタリングし、エラー処理プラグインで統一（[#7582](https://github.com/nocobase/nocobase/pull/7582)）@2013xile

### 🐛 不具合修正

* **[database]**
  * `runSQL` で SQL を実行する前に `search_path` を設定するよう修正（[#7611](https://github.com/nocobase/nocobase/pull/7611)）@2013xile
  * `$in` オペレーターの値が `null` の場合に発生するエラーを修正（[#7610](https://github.com/nocobase/nocobase/pull/7610)）@mytharcher
* **[クライアント]** タブのアイコン設定ポップアップが他の要素に隠れる問題を修正（[#7607](https://github.com/nocobase/nocobase/pull/7607)）@zhangzhonghe
* **[ワークフロー：承認]** 承認フォーム送信時に一部の変数が正しく解析されない問題を修正 @mytharcher
