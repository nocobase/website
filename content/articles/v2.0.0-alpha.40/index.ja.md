### 🚀 機能改善

* **[flow-engine]** ツールバーのレイアウトを調整し、アイコンが隠れないよう改善しました。([#7883](https://github.com/nocobase/nocobase/pull/7883)) by @zhangzhonghe

### 🐛 不具合修正

* **[flow-engine]** ユーザー再ログイン時に ACL 権限データが再読み込みされない不具合を修正しました。([#7874](https://github.com/nocobase/nocobase/pull/7874)) by @gchust
* **[client]** フォームフィールド設定に存在した不具合を修正しました。([#7867](https://github.com/nocobase/nocobase/pull/7867)) by @katherinehhh
* **[データ可視化]** チャートプレビュー時のみ SQL クエリのデバッグモードを使用するように改善しました。([#7893](https://github.com/nocobase/nocobase/pull/7893)) by @heziqiang
* **[多スペース]** 複数スペースでのユーザー関連付けの不具合を修正しました。by @jiannx
* **[ワークフロー：承認]**
  * 通知チャネルのページサイズが小さすぎて全件表示できなかった問題を修正しました。by @mytharcher
  * 承認処理送信時に発生していた承認レコード取得のパフォーマンス問題を改善しました。by @mytharcher
  * To-do センターの承認カードの日付表示を見直し、日時をわかりやすく表示するよう修正しました。by @mytharcher
