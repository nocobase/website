### 🚀 機能改善

* **[クライアント]**
  * QR コードスキャンによる入力フィールドの値の充填をサポート（[#6943](https://github.com/nocobase/nocobase/pull/6943)）@katherinehhh
  * Markdown ブロックのコンテンツをローカライズ可能にする（[#6941](https://github.com/nocobase/nocobase/pull/6941)）@katherinehhh
  * グループメニューを自身の中に移動することを禁止（[#7005](https://github.com/nocobase/nocobase/pull/7005)）@zhangzhonghe
* **[コレクションフィールド：多対多（配列）]** データテーブルで多対多フィールドを表示する際のアクセス権関連のエラーを修正（[#7028](https://github.com/nocobase/nocobase/pull/7028)）@aaaaaajie
* **[カレンダー]** カレンダーブロックで週の始まりの曜日を設定できるようサポート（[#7032](https://github.com/nocobase/nocobase/pull/7032)）@katherinehhh
* **[コレクションフィールド: Markdown (Vditor)]** Markdown（Vditor）のプレビューモードで画像をクリックしてズームできるようサポート（[#7024](https://github.com/nocobase/nocobase/pull/7024)）@katherinehhh

### 🐛 不具合修正

* **[クライアント]**
  * サブポップアップフォームでフィールドを設定する際に自動的に閉じてしまう問題（[#7052](https://github.com/nocobase/nocobase/pull/7052)）@katherinehhh
  * 重複した API リクエストによりブロックテンプレート内のフィールドが表示されない問題を修正（[#6985](https://github.com/nocobase/nocobase/pull/6985)）@zhangzhonghe
  * サブポップアップフォームでフィールドを設定する際に自動的に閉じてしまう問題（[#7042](https://github.com/nocobase/nocobase/pull/7042)）@katherinehhh
  * フィルターフォームの検証ルールによりフィルターボタンが無効になる問題（[#6975](https://github.com/nocobase/nocobase/pull/6975)）@zhangzhonghe
  * サブポップアップフォームでフィールドを設定する際に自動的に閉じてしまう問題（[#7042](https://github.com/nocobase/nocobase/pull/7042)）@katherinehhh
  * フィルターフォームの連携ルールでセレクトフィールドのオプションが機能しない問題（[#7035](https://github.com/nocobase/nocobase/pull/7035)）@katherinehhh
  * 連携ルールを使用してサブテーブルの必須フィールドの指示器をクリアできない問題（[#7022](https://github.com/nocobase/nocobase/pull/7022)）@zhangzhonghe
  * フィルターブロックのパラメータエラー問題を修正（[#6966](https://github.com/nocobase/nocobase/pull/6966)）@zhangzhonghe
  * 現在のユーザーデータが空になる問題を修正（[#7016](https://github.com/nocobase/nocobase/pull/7016)）@zhangzhonghe
  * 連携ルール内で現在のオブジェクト変数が無効な問題（[#7008](https://github.com/nocobase/nocobase/pull/7008)）@zhangzhonghe
  * ブロックが外部データソースからビューデータを読み取れない問題を解決（[#7017](https://github.com/nocobase/nocobase/pull/7017)）@aaaaaajie
  * 各フィールドに独立した変数スコープを適用（[#7012](https://github.com/nocobase/nocobase/pull/7012)）@mytharcher
* **[データ可視化]**
  * チャートフィルター内の日付範囲フィールドの表示エラー（[#7051](https://github.com/nocobase/nocobase/pull/7051)）@katherinehhh
  * チャート内のチェックボックスグループフィールドにラベルを表示するよう修正（生データではなく）（[#7033](https://github.com/nocobase/nocobase/pull/7033)）@2013xile
* **[アクション：レコードインポート]**
  * XLSX インポート時にテキストエリアフィールドに文字列以外の形式のデータが入力されることを制限（[#7049](https://github.com/nocobase/nocobase/pull/7049)）@aaaaaajie
  * 関連フィールドを含む場合の子テーブルのインポート失敗を修正（[#7039](https://github.com/nocobase/nocobase/pull/7039)）@aaaaaajie
  * XLSX ツリーテーブルデータのインポート時に一括編集中に発生するエラーを修正（[#7013](https://github.com/nocobase/nocobase/pull/7013)）@aaaaaajie
* **[API ドキュメント]** NocoBase 公式プラグイン以外の API ドキュメントが表示できない問題（[#7045](https://github.com/nocobase/nocobase/pull/7045)）@chenzhizdt
* **[ワークフロー]**
  * スケジュールトリガーにおける`toJSON()`によるエラーを修正（[#7037](https://github.com/nocobase/nocobase/pull/7037)）@mytharcher
  * トリガーが正しく設定されていない場合に手動実行アクションで発生するエラーを修正（[#7036](https://github.com/nocobase/nocobase/pull/7036)）@mytharcher
  * ワークフローが存在しない場合の UI エラーを修正（[#7023](https://github.com/nocobase/nocobase/pull/7023)）@mytharcher
  * コレクションイベントの「作成」または「更新」モードで、変更フィールドなしで作成した際にトリガーが発火しない問題を修正（[#7015](https://github.com/nocobase/nocobase/pull/7015)）@mytharcher
* **[モバイル]** モバイルポップアップの遅延問題を最適化（[#7029](https://github.com/nocobase/nocobase/pull/7029)）@zhangzhonghe
* **[データソースマネージャー]** possibleTypes のデータベース依存を削除し、API 駆動の構成を強制（[#7019](https://github.com/nocobase/nocobase/pull/7019)）@aaaaaajie
* **[アクション：レコードエクスポート Pro]** 条件付きで添付ファイルをエクスポートする際に発生するエラーを修正 @aaaaaajie
