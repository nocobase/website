### 🐛 不具合修正

* **[database]**`$in` オペレーターの値が `null` の場合に発生するエラーを修正（[#7610](https://github.com/nocobase/nocobase/pull/7610)）@mytharcher
* **[ワークフロー：承認]**
  * 承認送信後にデータベースエラーが起きた際、トランザクションが正常にロールバックされずタイムアウトする不具合を修正 @mytharcher
  * 承認フォーム送信時、一部の変数が正しく解釈されない不具合を修正 @mytharcher
