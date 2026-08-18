### 🚀 機能改善

* **[ワークフロー：HTTP リクエストノード]** 不安定だったテストケースを修正しました。 ([#10246](https://github.com/nocobase/nocobase/pull/10246)) by @mytharcher

### 🐛 不具合修正

* **[auth]** クロスオリジン構成でデプロイした場合、API リクエストでまれに `Invalid CSRF token` エラーが発生する問題を修正しました。 ([#10245](https://github.com/nocobase/nocobase/pull/10245)) by @mytharcher
* **[Portal 管理]** Portal カードのデバイスアイコン、および長いタイトルが正しく表示されない問題を修正しました。 ([#10248](https://github.com/nocobase/nocobase/pull/10248)) by @zhangzhonghe
* **[データテーブルフィールド：自動採番]** データ移行後、複数のレコードが同じ最新作成日時を持つ場合に、自動採番の値が重複する可能性がある問題を修正しました。 ([#10239](https://github.com/nocobase/nocobase/pull/10239)) by @mytharcher
* **[ワークフロー：JavaScript ノード]** JavaScript ワークフローノードで、スクリプトが結果を返した後、または非同期ワークフローがタイムアウトした後も Worker が終了しない問題を修正しました。 ([#10241](https://github.com/nocobase/nocobase/pull/10241)) by @mytharcher
