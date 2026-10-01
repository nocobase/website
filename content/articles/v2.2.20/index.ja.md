### 🎉 新機能

* **[AI employees]** AI employee の会話レスポンスで、引用したナレッジベースドキュメントを返すようになりました。([#10560](https://github.com/nocobase/nocobase/pull/10560)) by @cgyrock
* **[AI: ナレッジベース]** AI employee の会話レスポンスで引用されたナレッジベースドキュメントを解析するようにしました。 by @cgyrock

### 🐛 不具合修正

* **[create-nocobase-app]** `js-yaml` と `uuid` をアップグレードしました。([#10555](https://github.com/nocobase/nocobase/pull/10555)) by @2013xile
* **[sdk]** axios を 1.20.0 にアップグレードしました。([#10566](https://github.com/nocobase/nocobase/pull/10566)) by @2013xile
* **[client-v2]** 承認フォームのリレーションフィールドでクイック作成ポップアップを開いた際に、「現在のポップアップの親レコード」変数が表示されない問題を修正しました。([#10554](https://github.com/nocobase/nocobase/pull/10554)) by @zhangzhonghe
* **[ブロック：Kanban]** Kanban に AI employee の操作を追加した際に、ブロックがちらつく問題を修正しました。([#10553](https://github.com/nocobase/nocobase/pull/10553)) by @jiannx
* **[データソース：External NocoBase]** axios 1.20.0 へのアップグレードによって発生した型ビルドエラーを修正しました。 by @2013xile
* **[データソース：External Oracle]** axios 1.20.0 へのアップグレードで顕在化した型エラーを修正しました。 by @2013xile
* **[ワークフロー：承認]** 承認開始後の詳細画面で、非表示にしたフィールドのタイトルが再表示され、フィールド値が空になる問題を修正しました。 by @zhangzhonghe
