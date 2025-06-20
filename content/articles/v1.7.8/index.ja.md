### 🎉 新機能

* **[監査ログ]** 環境変数`AUDIT_LOGGER_TRANSPORT`を追加し、監査ログの出力方法を制御できるようにしました @2013xile

### 🚀 機能改善

* **[カレンダー]** カレンダーブロックで週の始まりの曜日を設定できるようにサポート（[#7032](https://github.com/nocobase/nocobase/pull/7032)）@katherinehhh
* **[コレクションフィールド：多対多（配列）]** データテーブルで多対多（many）フィールドを表示する際のアクセス権関連のエラーを修正（[#7028](https://github.com/nocobase/nocobase/pull/7028)）@aaaaaajie

### 🐛 不具合修正

* **[クライアント]**
  * サブポップアップフォームでフィールドを設定する際に自動的に閉じてしまう問題（[#7042](https://github.com/nocobase/nocobase/pull/7042)）@katherinehhh
  * フィルターフォームの連携ルールでセレクトフィールドのオプションが機能しない問題（[#7035](https://github.com/nocobase/nocobase/pull/7035)）@katherinehhh
  * フィルターフォームの検証ルールによりフィルターボタンが無効になる問題（[#6975](https://github.com/nocobase/nocobase/pull/6975)）@zhangzhonghe
  * 重複した API リクエストによりブロックテンプレート内のフィールドが表示されない問題を修正（[#6985](https://github.com/nocobase/nocobase/pull/6985)）@zhangzhonghe
* **[アクション：レコードインポート]** 関連フィールドを含む場合の子テーブルのインポート失敗を修正（[#7039](https://github.com/nocobase/nocobase/pull/7039)）@aaaaaajie
* **[データ可視化]** チャート内のチェックボックスグループフィールドにラベルを表示するよう修正（生データではなく）（[#7033](https://github.com/nocobase/nocobase/pull/7033)）@2013xile
* **[ワークフロー]** トリガーが正しく設定されていない場合に手動実行アクションで発生するエラーを修正（[#7036](https://github.com/nocobase/nocobase/pull/7036)）@mytharcher
* **[ワークフロー：承認]**
  * 未定義フィールドによるエラーを回避 @mytharcher
  * 詳細ページを更新する際の API エラーを修正 @mytharcher
* **[WeCom]** ゲートウェイミドルウェアにコールバックパスのチェックを追加 @2013xile
