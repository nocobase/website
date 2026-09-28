### 🐛 不具合修正

* **[client]** ワークフローの手動処理ノードフォームで、同一行に複数のフィールドを配置した際にレイアウトエラーが発生したり、配置を保持できなかったりする問題を修正しました。([#10545](https://github.com/nocobase/nocobase/pull/10545)) by @mytharcher
* **[client-v2]** 承認フォームのサブテーブル内にある添付ファイルおよびファイルリレーションフィールドの変更を保存できない問題を修正しました。([#10544](https://github.com/nocobase/nocobase/pull/10544)) by @mytharcher
* **[ブロック：グリッドカード]** グリッドカードのシンプルページネーションでページ切り替えが機能しない問題を修正し、1 ページあたりの件数オプションが設定された列数の倍数になるようにしました。([#10541](https://github.com/nocobase/nocobase/pull/10541)) by @jiannx
* **[ワークフロー：集計クエリノード]** 集計クエリノードで対多リレーションを介して関連テーブルを選択した後、集計フィールドを選択できない問題を修正しました。([#10543](https://github.com/nocobase/nocobase/pull/10543)) by @mytharcher
* **[マイグレーション管理]** `decompress` を `@xhmikosr/decompress` 11.1.4 にアップグレードしました。 by @2013xile
