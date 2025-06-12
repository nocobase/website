### 🎉 新機能

* **[監査ログ]** 環境変数`AUDIT_LOGGER_TRANSPORT`を追加し、監査ログの出力方法を制御できるようにしました @2013xile

### 🚀 機能改善

* **[クライアント]** グループメニューを自身の中に移動することを禁止（[#7005](https://github.com/nocobase/nocobase/pull/7005)）@zhangzhonghe
* **[カレンダー]** カレンダーブロックで週の始まりの曜日を設定できるようにサポート（[#7032](https://github.com/nocobase/nocobase/pull/7032)）@katherinehhh
* **[コレクションフィールド: Markdown (Vditor)]** Markdown（Vditor）のプレビューモードで画像をクリックしてズームできるようサポート（[#7024](https://github.com/nocobase/nocobase/pull/7024)）@katherinehhh
* **[コレクションフィールド：多対多（配列）]** データテーブルで多対多フィールドを表示する際のアクセス権関連のエラーを修正（[#7028](https://github.com/nocobase/nocobase/pull/7028)）@aaaaaajie
* **[コメント]** コメントブロックでページネーションをサポート @katherinehhh

### 🐛 不具合修正

* **[クライアント]**
  * サブポップアップフォームでフィールドを設定する際に自動的に閉じてしまう問題（[#7052](https://github.com/nocobase/nocobase/pull/7052)）@katherinehhh
  * 連携ルールにより無限ループが発生する問題を修正（[#7050](https://github.com/nocobase/nocobase/pull/7050)）@zhangzhonghe
  * サブポップアップフォームでフィールドを設定する際に自動的に閉じてしまう問題（[#7042](https://github.com/nocobase/nocobase/pull/7042)）@katherinehhh
  * アップロードサイズのヒントを修正（[#7057](https://github.com/nocobase/nocobase/pull/7057)）@mytharcher
  * APIClient でハンドラが未定義の場合、オプショナルチェーニングを使用して安全にリクエストを拒否する（[#7054](https://github.com/nocobase/nocobase/pull/7054)）@sheldon66
  * サブポップアップフォームでフィールドを設定する際に自動的に閉じてしまう問題（[#7042](https://github.com/nocobase/nocobase/pull/7042)）@katherinehhh
  * 重複した API リクエストによりブロックテンプレート内のフィールドが表示されない問題を修正（[#6985](https://github.com/nocobase/nocobase/pull/6985)）@zhangzhonghe
  * フィルターフォームの連携ルールでセレクトフィールドのオプションが機能しない問題（[#7035](https://github.com/nocobase/nocobase/pull/7035)）@katherinehhh
  * フィルターフォームの検証ルールによりフィルターボタンが無効になる問題（[#6975](https://github.com/nocobase/nocobase/pull/6975)）@zhangzhonghe
  * 連携ルールを使用してサブテーブルの必須フィールドの指示器をクリアできない問題（[#7022](https://github.com/nocobase/nocobase/pull/7022)）@zhangzhonghe
  * フィルターブロックのパラメータエラー問題を修正（[#6966](https://github.com/nocobase/nocobase/pull/6966)）@zhangzhonghe
  * ブロックが外部データソースからビューデータを読み取れない問題を解決（[#7017](https://github.com/nocobase/nocobase/pull/7017)）@aaaaaajie
  * 各フィールドに独立した変数スコープを適用（[#7012](https://github.com/nocobase/nocobase/pull/7012)）@mytharcher
  * 連携ルール内で現在のオブジェクト変数が無効な問題（[#7008](https://github.com/nocobase/nocobase/pull/7008)）@zhangzhonghe
* **[データベース]** XLSX インポート時に欠落していた作成者と更新者フィールドを追加（[#7011](https://github.com/nocobase/nocobase/pull/7011)）@aaaaaajie
* **[未定義]** possibleTypes のデータベース依存を削除し、API 駆動の構成を強制 @aaaaaajie
* **[アクション：レコードインポート]**
  * XLSX インポート時にテキストエリアフィールドに文字列以外の形式のデータが入力されることを制限（[#7049](https://github.com/nocobase/nocobase/pull/7049)）@aaaaaajie
  * 関連フィールドを含む場合の子テーブルのインポート失敗を修正（[#7039](https://github.com/nocobase/nocobase/pull/7039)）@aaaaaajie
  * XLSX ツリーテーブルデータのインポート時に一括編集中に発生するエラーを修正（[#7013](https://github.com/nocobase/nocobase/pull/7013)）@aaaaaajie
* **[データ可視化]**
  * チャートフィルター内の日付範囲フィールドの表示エラー（[#7051](https://github.com/nocobase/nocobase/pull/7051)）@katherinehhh
  * チャート内のチェックボックスグループフィールドにラベルを表示するよう修正（生データではなく）（[#7033](https://github.com/nocobase/nocobase/pull/7033)）@2013xile
* **[API ドキュメント]** NocoBase 公式プラグイン以外の API ドキュメントが表示できない問題（[#7045](https://github.com/nocobase/nocobase/pull/7045)）@chenzhizdt
* **[ワークフロー]**
  * スケジュールトリガーにおける`toJSON()`によるエラーを修正（[#7037](https://github.com/nocobase/nocobase/pull/7037)）@mytharcher
  * トリガーが正しく設定されていない場合に手動実行アクションで発生するエラーを修正（[#7036](https://github.com/nocobase/nocobase/pull/7036)）@mytharcher
  * ワークフローが存在しない場合の UI エラーを修正（[#7023](https://github.com/nocobase/nocobase/pull/7023)）@mytharcher
  * コレクションイベントの「作成」または「更新」モードで、変更フィールドなしで作成した際にトリガーが発火しない問題を修正（[#7015](https://github.com/nocobase/nocobase/pull/7015)）@mytharcher
* **[データソースマネージャー]** possibleTypes のデータベース依存を削除し、API 駆動の構成を強制（[#7019](https://github.com/nocobase/nocobase/pull/7019)）@aaaaaajie
* **[モバイル]** モバイルポップアップの遅延問題を最適化（[#7029](https://github.com/nocobase/nocobase/pull/7029)）@zhangzhonghe
* **[アクション：レコードエクスポート Pro]** 条件付きで添付ファイルをエクスポートする際に発生するエラーを修正 @aaaaaajie
* **[ワークフロー: JavaScript]** 相対パスの require を修正 @mytharcher
* **[テンプレート印刷]** アクセス権解析のバグを修正し、データ未見つかりのチェックを追加 @sheldon66
* **[ワークフロー：承認]**
  * 未定義フィールドによるエラーを回避 @mytharcher
  * ワークフローが削除された際に発生するエラーを修正 @mytharcher
  * トリガー変数を修正 @mytharcher
  * スナップショットからファイル関連付けを再読み込みし、URL の有効期限切れを回避 @mytharcher
  * 詳細ページを更新する際の API エラーを修正 @mytharcher
* **[WeCom]** ゲートウェイミドルウェアにコールバックパスのチェックを追加 @2013xile
