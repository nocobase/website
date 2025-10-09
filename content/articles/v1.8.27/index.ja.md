### 🚀 機能改善

* **[クライアント]** 画像プレビュー時に画像の回転をサポートする機能を追加 ([#7523](https://github.com/nocobase/nocobase/pull/7523)) by @mytharcher
* **[ワークフロー]** スケジュール関連のロジックを独立したスケジュール処理機能に分割 ([#7535](https://github.com/nocobase/nocobase/pull/7535)) by @mytharcher

### 🐛 不具合修正

* **[クライアント]** 左側メニューのサブメニューが正しくハイライトされない問題を修正 ([#7520](https://github.com/nocobase/nocobase/pull/7520)) by @duannyuuu
* **[ワークフロー：繰り返しノード]** ループノードの条件が満たされていない場合に誤って次の項目に進む問題を修正 ([#7521](https://github.com/nocobase/nocobase/pull/7521)) by @mytharcher
* **[ワークフロー]**
  * キュー処理が不適切なため、ワークフローが繰り返し実行される問題を修正 ([#7533](https://github.com/nocobase/nocobase/pull/7533)) by @mytharcher
  * ワークフロー設定でリレーションフィールドのコンテキスト読み込み時にワークフローリストの条件が誤っている問題を修正 ([#7516](https://github.com/nocobase/nocobase/pull/7516)) by @mytharcher
  * 日付フィールドに基づくスケジュールタスクが期限後にトリガーされない問題を修正 ([#7524](https://github.com/nocobase/nocobase/pull/7524)) by @mytharcher
