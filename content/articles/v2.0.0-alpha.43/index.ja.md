### 🚀 機能改善

* **[データ可視化]** プラグイン画面がロシア語に対応しました ([#7676](https://github.com/nocobase/nocobase/pull/7676)) by @sembaev-a-a
* **[権限コントロール]** member ロールの初期権限を縮小しました ([#7921](https://github.com/nocobase/nocobase/pull/7921)) by @2013xile
* **[ワークフロー：Webhook トリガー]** レスポンスノードにアイコンを追加しました by @mytharcher

### 🐛 不具合修正

* **[client]** Can't resolve 'antd-mobile' と 'antd-mobile-icons' のエラーを修正しました ([#7914](https://github.com/nocobase/nocobase/pull/7914)) by @zhangzhonghe
* **[flow-engine]** テーブルブロックを開いた際にクイック編集フォームで発生していたエラーを修正しました ([#7923]()) by @gchust
* **[フロントエンドフローエンジン]** レコード変数の解析が正しく行われない問題を修正しました：レコード本体とフィールドを併用すると常に全レコードが返っていた不具合を解消 ([#7917]()) by @gchust
* **[データソース：メインデータベース]** 一対多フィールド追加後、再起動前に外部キーを選択できなかった問題を修正しました ([#7907]()) by @cgyrock
* **[権限コントロール]** リレーションフィールドの操作でデータ範囲の制限に対応しました ([#7919]()) by @2013xile
