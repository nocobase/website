### 🚀 機能改善

* **[クライアント]**
  * ページバージョンを flow engine のコンテキストに追加 ([#7826](https://github.com/nocobase/nocobase/pull/7826)) by @gchust
  * Markdown エディタを最適化 ([#7793](https://github.com/nocobase/nocobase/pull/7793)) by @katherinehhh
  * v2.0 ブロックで tableoid フィールドに対応 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) by @katherinehhh
* **[データ可視化]** チャートのツールチップとイベントコードテンプレートのコメントを更新 ([#7814](https://github.com/nocobase/nocobase/pull/7814)) by @heziqiang
* **[権限管理]** リレーションフィールド関連操作の権限制御ロジックを最適化 ([#7800](https://github.com/nocobase/nocobase/pull/7800)) by @2013xile
* **[認証：OIDC]** リクエストのタイムアウト時間を延長 by @2013xile

### 🐛 不具合修正

* **[サーバー]** サービス分割モード有効時に、ワーカープロセスがメッセージを送信するとエラーが発生する問題を修正 ([#7797](https://github.com/nocobase/nocobase/pull/7797)) by @mytharcher
* **[クライアント]**
  * 現在のデータテーブル変数がフィルターコンポーネントの変数セレクターで選択できてしまう問題を修正 ([#7818](https://github.com/nocobase/nocobase/pull/7818)) by @gchust
  * フィルターフォームのリレーションフィールドで “value.replace is not a function” エラーが発生する問題を修正 ([#7824](https://github.com/nocobase/nocobase/pull/7824)) by @zhangzhonghe
  * onChange コールバックの引数が誤って渡される問題を修正 ([#7807](https://github.com/nocobase/nocobase/pull/7807)) by @zhangzhonghe
* **[フローエンジン]** イベントフローを編集後、ページをリロードしないと反映されない問題を修正 ([#7811](https://github.com/nocobase/nocobase/pull/7811)) by @gchust
* **[ワークフロー]** サービス分割モードで、プラグインがサービスモード外でもキューを消費してしまう問題を修正 ([#7820](https://github.com/nocobase/nocobase/pull/7820)) by @mytharcher
* **[ワークフロー：承認]** 関連データ再取得時にメインテーブルフィールドが正しく除外されない問題を修正 by @mytharcher
* **[メール管理]** Outlook のインライン画像および同期に関する問題を修正 by @jiannx
