### 🚀 機能改善

* **[ワークフロー：承認]** 承認通知チャネルで、タイトルによるリモート検索に対応しました。 by @mytharcher

### 🐛 不具合修正

* **[flow-engine]** ブロック追加メニューで検索すると、メニューが突然表示されなくなる問題を修正しました。 ([#10097](https://github.com/nocobase/nocobase/pull/10097)) by @gchust
* **[client-v2]**
  * JS Block でカード表示を有効にした場合、全体高さおよび指定高さの設定が反映されない問題を修正しました。 ([#10126](https://github.com/nocobase/nocobase/pull/10126)) by @gchust
  * 日付フィルターのデフォルト値が単一の日付として設定される問題を修正しました。 ([#9854](https://github.com/nocobase/nocobase/pull/9854)) by @zhangzhonghe
* **[カレンダー]** v2 カレンダーでイベント数が多い場合にポップアップが画面外にはみ出す問題を修正し、スクロールバーを追加しました。 ([#10138](https://github.com/nocobase/nocobase/pull/10138)) by @katherinehhh
* **[マルチスペース]** アカウント切り替え時に、認証復旧リクエストへ以前のスペースのリクエストヘッダーが含まれることでログインに失敗する問題を修正しました。 by @jiannx
