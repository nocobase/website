### 🐛 不具合修正

* **[クライアント]**
  * ポップアップ内で作成したブロックのコレクションが不正な問題を修正（[#6961](https://github.com/nocobase/nocobase/pull/6961)）@zhangzhonghe
  * サブページにおけるフィルターフォームのデフォルト値が無効な問題を修正（[#6960](https://github.com/nocobase/nocobase/pull/6960)）@zhangzhonghe
  * ロールデータテーブルスコープ内で外部データソースの関連コレクションフィールドを展開できない問題（[#6958](https://github.com/nocobase/nocobase/pull/6958)）@katherinehhh
  * 関連フィールドの「省略可能なオーバーフローコンテンツ」オプションが機能しない問題を修正（[#6967](https://github.com/nocobase/nocobase/pull/6967)）@zhangzhonghe
  * 一行テキストフィールドの値が簡易閲覧モードで配列として表示される問題を修正（[#6968](https://github.com/nocobase/nocobase/pull/6968)）@zhangzhonghe
* **[認証]** 有効期限切れトークンのクリーンアップに起因するパフォーマンス問題（[#6981](https://github.com/nocobase/nocobase/pull/6981)）@2013xile
* **[ファイルマネージャー]** Ali-OSS のタイムアウト設定を修正（[#6970](https://github.com/nocobase/nocobase/pull/6970)）@mytharcher
* **[ワークフロー：カスタムアクションイベント]** ワークベンチの初期化処理が省略される問題を修正 @mytharcher
* **[認証: OIDC]** サインインボタンのテキストがローカライズされない問題 @2013xile
