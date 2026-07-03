### 🎉 新機能

* **[ワークフロー]** ノードタスクにログフィールドを追加し、一部ノードのデバッグ時にログを表示できるように改善 ([#9165](https://github.com/nocobase/nocobase/pull/9165)) by @mytharcher

### 🚀 機能改善

* **[undefined]** ガイドとナビゲーションのアラビア語翻訳を追加 ([#9141](https://github.com/nocobase/nocobase/pull/9141)) by @saraTabbane
* **[cli]** 生成 API CLI のヘルプ出力と ACL コマンドグループを改善 ([#9166](https://github.com/nocobase/nocobase/pull/9166)) by @2013xile

### 🐛 不具合修正

* **[client]** フィールド代入で子テーブル内の値を変更した後、データが汚染される問題を修正。 ([#9163](https://github.com/nocobase/nocobase/pull/9163)) by @gchust
* **[data-source-manager]** データベース同期後に sequence フィールドが string 型になる可能性がある問題を修正 ([#9143](https://github.com/nocobase/nocobase/pull/9143)) by @2013xile
* **[cli]** Windows 上で CLI の OAuth ログインが認証リンクが長すぎるため失敗する可能性がある問題を修正 ([#9159](https://github.com/nocobase/nocobase/pull/9159)) by @2013xile
* **[部門]** ユーザーの部門保存後、主部門が同期されない、または誤って同期される問題を修正 ([#9156](https://github.com/nocobase/nocobase/pull/9156)) by @2013xile
* **[データソース：メインデータベース]** データベースビュー接続時にコレクション名とビュー名の不一致によりフィールド同期に失敗する問題を修正 ([#9155](https://github.com/nocobase/nocobase/pull/9155)) by @2013xile
* **[ファイルマネージャー]** プレビュー URL が存在しない場合は null を返すように修正 ([#9104](https://github.com/nocobase/nocobase/pull/9104)) by @gaston98765
