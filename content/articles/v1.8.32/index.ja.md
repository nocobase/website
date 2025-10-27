### 🚀 機能改善

* **[server]** ローカライズリソースの読み込み方法を最適化し、イベントループのブロッキングを回避しました（[#7653](https://github.com/nocobase/nocobase/pull/7653)）by @2013xile
* **[cache]** ブルームフィルターのクローンによるパフォーマンス低下を防止しました（[#7652](https://github.com/nocobase/nocobase/pull/7652)）by @2013xile
* **[操作：レコードのインポート]** ヘッダーが見つからない場合のエラーメッセージを改善しました（[#7656](https://github.com/nocobase/nocobase/pull/7656)）by @mytharcher

### 🐛 不具合修正

* **[client]**
  * フィルター内の日付フィールドをクリアした際に発生するエラーを修正しました（[#7632](https://github.com/nocobase/nocobase/pull/7632)）by @katherinehhh
  * フィールド名が改行される際に単語が分断される問題を修正しました（[#7647](https://github.com/nocobase/nocobase/pull/7647)）by @katherinehhh
  * 編集モーダル内のサブテーブルのデフォルト値が反映されない問題を修正しました（[#7631](https://github.com/nocobase/nocobase/pull/7631)）by @katherinehhh
* **[データフィールド：中国行政区画]** 市と区の名称が同じ場合にインポートできない問題を修正しました（[#7673](https://github.com/nocobase/nocobase/pull/7673)）by @2013xile
* **[ワークフロー]**
  * 分岐を有効にしたノードを削除後、保持された分岐内の最初のノードのkeyが新しい値に変わってしまう問題を修正しました（[#7665](https://github.com/nocobase/nocobase/pull/7665)）by @mytharcher
  * アプリ停止時にログ出力でエラーが発生する問題を修正しました（[#7639](https://github.com/nocobase/nocobase/pull/7639)）by @mytharcher
* **[ファイルマネージャー]**`.msg` ファイルが正常にアップロードできない問題を修正しました（[#7662](https://github.com/nocobase/nocobase/pull/7662)）by @mytharcher
* **[データソース：メインデータベース]** 逆リレーションフィールド作成後、複数ノード間でメタデータが同期されない問題を修正しました（[#7628](https://github.com/nocobase/nocobase/pull/7628)）by @mytharcher
* **[ワークフロー：承認]**
  * 承認完了通知のステータス文言が正しく翻訳されない問題を修正し、ユーザーが言語設定をしていない場合はシステムのデフォルト言語を使用するようにしました by @mytharcher
  * 追加承認後にToDo数が更新されない問題を修正しました by @mytharcher
