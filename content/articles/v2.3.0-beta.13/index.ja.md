### 🎉 新機能

* **[AI employees]**
  * AI employee の会話レスポンスで、引用したナレッジベースドキュメントを返すようになりました。([#10560](https://github.com/nocobase/nocobase/pull/10560)) by @cgyrock
  * OpenCode Zen / Go を LLM サービスとして利用できるようになり、必要な会話リクエストヘッダーを自動送信するようにしました。DeepSeek Flash シリーズのモデルは画像添付に対応し、Web 検索は DeepSeek V4 Pro のみで利用可能です。これにより、Flash モデルが検索を暗黙的に無視して古い情報を返すことを防ぎます。([#10551](https://github.com/nocobase/nocobase/pull/10551)) by @cgyrock
* **[AI: ナレッジベース]** AI employee の会話レスポンスで引用されたナレッジベースドキュメントを解析するようにしました。 by @cgyrock

### 🚀 機能改善

* **[client-v2]** テーブル列のクイック編集で、リレーションフィールドのデータ範囲を設定できるようになりました。([#10547](https://github.com/nocobase/nocobase/pull/10547)) by @katherinehhh

### 🐛 不具合修正

* **[client-v2]**
  * 承認フォームのリレーションフィールドでクイック作成ポップアップを開いた際に、「現在のポップアップの親レコード」変数が表示されない問題を修正しました。([#10554](https://github.com/nocobase/nocobase/pull/10554)) by @zhangzhonghe
  * ログアウト後に別のアカウントでログインすると 404 ページが表示される問題を修正しました。([#10549](https://github.com/nocobase/nocobase/pull/10549)) by @zhangzhonghe
  * 承認フォームのサブテーブル内にある添付ファイルおよびファイルリレーションフィールドの変更を保存できない問題を修正しました。([#10544](https://github.com/nocobase/nocobase/pull/10544)) by @mytharcher
* **[create-nocobase-app]** `js-yaml` と `uuid` をアップグレードしました。([#10555](https://github.com/nocobase/nocobase/pull/10555)) by @2013xile
* **[client]** ワークフローの手動処理ノードフォームで、同一行に複数のフィールドを配置した際にレイアウトエラーが発生したり、配置を保持できなかったりする問題を修正しました。([#10545](https://github.com/nocobase/nocobase/pull/10545)) by @mytharcher
* **[ワークフロー]** データベース同期時に jobs のステータスと ID の複合インデックスが作成されない問題を修正しました。([#10552](https://github.com/nocobase/nocobase/pull/10552)) by @mytharcher
* **[ワークフロー：集計クエリノード]** 集計クエリノードで対多リレーションを介して関連テーブルを選択した後、集計フィールドを選択できない問題を修正しました。([#10543](https://github.com/nocobase/nocobase/pull/10543)) by @mytharcher
* **[ブロック：グリッドカード]** グリッドカードのシンプルページネーションでページ切り替えが機能しない問題を修正し、1 ページあたりの件数オプションが設定された列数の倍数になるようにしました。([#10541](https://github.com/nocobase/nocobase/pull/10541)) by @jiannx
* **[操作：一括更新]** 一括更新操作で、データテーブルの選択肢フィールドに存在しなくなった設定値が送信される問題を修正しました。([#10540](https://github.com/nocobase/nocobase/pull/10540)) by @jiannx
* **[マイグレーション管理]** `decompress` を `@xhmikosr/decompress` 11.1.4 にアップグレードしました。 by @2013xile
