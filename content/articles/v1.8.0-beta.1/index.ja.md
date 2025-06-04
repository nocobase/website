### 🎉 新機能

* **[未定義]** 一行テキストフィールド用の新規「入力コピーボタン」プラグインを追加（[#6894](https://github.com/nocobase/nocobase/pull/6894)）@kerwin612
* **[ワークフロー]** ワークフローカテゴリ管理機能を追加（[#6965](https://github.com/nocobase/nocobase/pull/6965)）@mytharcher

### 🚀 機能改善

* **[クライアント]** メニューリンクを新ウィンドウで開くかどうかを設定可能に（[#6918](https://github.com/nocobase/nocobase/pull/6918)）@katherinehhh
* **[アクション：レコードインポート Pro]** xlsx インポートのパフォーマンスを最適化 @aaaaaajie
* **[認証: OIDC]** ユーザーをメールアドレスで照合する際の大文字小文字の区別を無視 @2013xile
* **[ワークフロー：承認]** ワークフローコレクションをワークフロープラグインからインポートして重複を回避 @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * フィールドとアクションがページを更新しないと反映されない問題（[#6977](https://github.com/nocobase/nocobase/pull/6977)）@zhangzhonghe
  * 重複した API リクエストによりブロックテンプレートにフィールドが表示されない問題を修正（[#6957](https://github.com/nocobase/nocobase/pull/6957)）@zhangzhonghe
  * ポップアップ内で作成したブロックのコレクションが不正な問題を修正（[#6961](https://github.com/nocobase/nocobase/pull/6961)）@zhangzhonghe
  * 関連フィールドのデフォルト値を設定する際に変数を選択できない問題（[#6974](https://github.com/nocobase/nocobase/pull/6974)）@zhangzhonghe
  * 一行テキストフィールドの値が簡易閲覧モードで配列として表示される問題を修正（[#6968](https://github.com/nocobase/nocobase/pull/6968)）@zhangzhonghe
  * ロールデータテーブルスコープ内で外部データソースの関連コレクションフィールドを展開できない問題（[#6958](https://github.com/nocobase/nocobase/pull/6958)）@katherinehhh
  * 関連フィールドの「省略可能なオーバーフローコンテンツ」オプションが機能しない問題を修正（[#6967](https://github.com/nocobase/nocobase/pull/6967)）@zhangzhonghe
  * サブページにおけるフィルターフォームのデフォルト値が無効な問題を修正（[#6960](https://github.com/nocobase/nocobase/pull/6960)）@zhangzhonghe
  * 新しいデータを追加する際に関連フィールドのポップアップが最初の入力で閉じる問題（[#6971](https://github.com/nocobase/nocobase/pull/6971)）@katherinehhh
  * サブテーブル内の関連フィールドが空値の反復変数でリクエストをトリガーする問題を修正（[#6969](https://github.com/nocobase/nocobase/pull/6969)）@katherinehhh
  * フィルターボタンのドロップダウンリスト内のフィールド順序を修正（[#6962](https://github.com/nocobase/nocobase/pull/6962)）@zhangzhonghe
  * パネルを折りたたむとフォーム検証ルールのデータが失われる問題（[#6949](https://github.com/nocobase/nocobase/pull/6949)）@katherinehhh
  * 連携ルールでマルチセレクトドロップダウンオプションを更新すると選択値がリセットされる問題（[#6953](https://github.com/nocobase/nocobase/pull/6953)）@katherinehhh
  * サブテーブル連携変数がフォーム値を使用せず、クリア時に関連データを取得する問題を修正（[#6963](https://github.com/nocobase/nocobase/pull/6963)）@katherinehhh
  * 関連フィールドのドロップダウンデータをページサイズ 200 でページネーション（[#6950](https://github.com/nocobase/nocobase/pull/6950)）@katherinehhh
  * 日付ピッカーで「期間」から「指定日」に切り替えた後にリフレッシュされない問題（[#6956](https://github.com/nocobase/nocobase/pull/6956)）@katherinehhh
  * テーブル行をドラッグする際のハイライト位置の誤り（[#6952](https://github.com/nocobase/nocobase/pull/6952)）@chenos
* **[認証]** 有効期限切れトークンのクリーンアップに起因するパフォーマンス問題（[#6981](https://github.com/nocobase/nocobase/pull/6981)）@2013xile
* **[ワークフロー]** ワークフローをフィルタリングする際に発生するエラーを修正（[#6978](https://github.com/nocobase/nocobase/pull/6978)）@mytharcher
* **[ファイルマネージャー]** Ali-OSS のタイムアウト設定を修正（[#6970](https://github.com/nocobase/nocobase/pull/6970)）@mytharcher
* **[テーマエディタ]** テーマ切り替えオプションを非表示にし、ポップアップスタイルを修正（[#6964](https://github.com/nocobase/nocobase/pull/6964)）@zhangzhonghe
* **[ワークフロー：カスタムアクションイベント]** ワークベンチの初期化処理が省略される問題を修正 @mytharcher
* **[認証: OIDC]** サインインボタンのテキストがローカライズされない問題 @2013xile
* **[ワークフロー：承認]** 関連条件を含む担当者スコープのクエリ時のエラーを修正 @mytharcher
