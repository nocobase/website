### 🐛 バグ修正

* **[クライアント]**
  * テーブルブロックで外部データソースフィールドが表示されない問題を修正 ([#5825](https://github.com/nocobase/nocobase/pull/5825)) by @katherinehhh
  * フォーム設定内の継承フィールド表示問題を修正 ([#5822](https://github.com/nocobase/nocobase/pull/5822)) by @katherinehhh
  * フィールドリストに継承フィールドが表示されず、上書きできない問題を修正 ([#5800](https://github.com/nocobase/nocobase/pull/5800)) by @katherinehhh
* **[データビジュアライゼーション]** MySQLでタイムゾーンを意識した日付フィールドのフォーマット問題を修正 ([#5829](https://github.com/nocobase/nocobase/pull/5829)) by @2013xile
* **[ワークフロー]**
  * データソース間でのトランザクションがコレクションイベントエラーを引き起こす問題を修正 ([#5818](https://github.com/nocobase/nocobase/pull/5818)) by @mytharcher
  * 日付フィールドベースのスケジュール設定で日付タイプが抜けていた問題を修正 ([#5816](https://github.com/nocobase/nocobase/pull/5816)) by @mytharcher
* **[コレクションフィールド：多対多（配列）]** 単一関係コレクションでm2m配列フィールドを更新しても効果がない問題を修正 ([#5820](https://github.com/nocobase/nocobase/pull/5820)) by @2013xile
* **[カレンダー]**
  * カレンダーで空白の日付をクリックした際のエラーを修正 ([#5803](https://github.com/nocobase/nocobase/pull/5803)) by @katherinehhh
  * 'カレンダーブロック'で開いたポップアップを閉じるとすべてのポップアップが閉じてしまう問題を修正 ([#5793](https://github.com/nocobase/nocobase/pull/5793)) by @zhangzhonghe
* **[公開フォーム]** サブアプリケーションの公開フォームでQCコードスキャンパスが間違っていた問題を修正 ([#5799](https://github.com/nocobase/nocobase/pull/5799)) by @katherinehhh
