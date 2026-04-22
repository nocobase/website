### 🎉 新機能

* **[認証：OIDC]** カスタムフィールドマッピングに対応 by @chenzhizdt
* **[DingTalk]** DingTalk で通知、アプリ内自動ログイン、ユーザー同期に対応。 by @chenzhizdt

### 🚀 機能改善

* **[ai]** AI 従業員とナレッジベースで、アップロード対応ファイル形式を追加（.xlsx, .xls, .csv, .md, .json） ([#9172](https://github.com/nocobase/nocobase/pull/9172)) by @cgyrock
* **[undefined]** アラビア語のガイドおよびナビゲーションの翻訳を追加 ([#9141](https://github.com/nocobase/nocobase/pull/9141)) by @saraTabbane

### 🐛 不具合修正

* **[data-source-manager]** 外部データソースの再同期時に、パーセンテージフィールドが数値にリセットされる問題を修正 ([#9178](https://github.com/nocobase/nocobase/pull/9178)) by @jiannx
* **[client]**
  * レコード追加後に、新規フォームのデフォルト値設定が反映されない問題を修正。 ([#9185](https://github.com/nocobase/nocobase/pull/9185)) by @gchust
  * タブ追加ボタンが右端に寄りすぎている問題を修正 ([#9177](https://github.com/nocobase/nocobase/pull/9177)) by @zhangzhonghe
* **[部門]** 部門の重複同期時に、部門順序を更新できない問題を修正 ([#9173](https://github.com/nocobase/nocobase/pull/9173)) by @2013xile
* **[データソース：メインデータベース]** データベースビュー接続時に、コレクション名とデータベースビュー名の不一致によりフィールド同期が失敗する問題を修正 ([#9155](https://github.com/nocobase/nocobase/pull/9155)) by @2013xile
* **[ワークフロー：JavaScript ノード]**`node:vm` モードでのスクリプト実行におけるセキュリティ問題を修正 ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher
* **[AI: ナレッジベース]** ナレッジベースのドキュメント削除時に、ベクトルストアへ同期されない問題を修正 by @cgyrock
* **[WeCom]** WeCom で部門を同期する際に、部門順序が同期されない問題を修正 by @2013xile
