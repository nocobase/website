### 🎉 新機能

* **[client]** サブフォームに連動ルールを設定できるようになりました（[#7640](https://github.com/nocobase/nocobase/pull/7640)）by @zhangzhonghe
* **[ブロック：リスト]** 新たに2.0版のリストブロックを追加しました（[#7574](https://github.com/nocobase/nocobase/pull/7574)）by @katherinehhh
* **[データ可視化]** 環形チャート（ドーナツグラフ）を新しく追加しました（[#7629](https://github.com/nocobase/nocobase/pull/7629)）by @heziqiang
* **[ブロック：操作パネル]** 2.0版の操作パネルブロックを追加しました（[#7594](https://github.com/nocobase/nocobase/pull/7594)）by @katherinehhh
* **[ブロック：グリッドカード]** 2.0版グリッドカードブロックを追加しました（[#7579](https://github.com/nocobase/nocobase/pull/7579)）by @katherinehhh

### 🚀 機能改善

* **[flow-engine]** URLクエリに `skipRunJs=true` を追加することで、runjsフローのステップをスキップできるようになりました（[#7638](https://github.com/nocobase/nocobase/pull/7638)）by @gchust

### 🐛 不具合修正

* **[flow-engine]** JSコードエディタでコピー＆ペーストしたコード断片がエラーになる問題を修正しました（[#7641](https://github.com/nocobase/nocobase/pull/7641)）by @gchust
* **[フロントエンドフローエンジン]** 親ポップアップ内のレコード変数が正しく解析されない問題を修正しました（[#7637](https://github.com/nocobase/nocobase/pull/7637)）by @gchust
* **[データ可視化]** チャートのデータリクエスト時に `orders` パラメータが欠落する問題を修正しました（[#7636](https://github.com/nocobase/nocobase/pull/7636)）by @heziqiang
* **[メール管理]** 同期時の例外を適切に捕捉するよう対応しました by @jiannx
