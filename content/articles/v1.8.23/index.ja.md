### 🚀 機能改善

* **[データベース]** リスト API の件数クエリを最適化し、リソース消費を削減（[#7453](https://github.com/nocobase/nocobase/pull/7453)）@aaaaaajie
* **[通知：アプリ内メッセージ]** アプリ内メッセージ通知の自動閉鎖遅延時間を設定する機能をサポート（[#7472](https://github.com/nocobase/nocobase/pull/7472)）@mytharcher
* **[ワークフロー：通知ノード]** 通知ノードのテスト機能をサポート（[#7470](https://github.com/nocobase/nocobase/pull/7470)）@mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 編集フォームブロックでタグコンポーネントに切り替えた際、関連フィールドが表示エラーになる問題（[#7468](https://github.com/nocobase/nocobase/pull/7468)）@katherinehhh
  * 選択した日付が最小日付（minDate）と一致する場合の時間制限異常問題（[#7461](https://github.com/nocobase/nocobase/pull/7461)）@katherinehhh
* **[モバイル]** タイムゾーンが設定されていないモバイル端末の日付フィールドで、日時が正しく表示されない問題（[#7473](https://github.com/nocobase/nocobase/pull/7473)）@katherinehhh
* **[パブリックフォーム]** パブリックフォームのフィールドで変数を使用する場合、デフォルト値が適用されない問題（[#7467](https://github.com/nocobase/nocobase/pull/7467)）@katherinehhh
* **[アクション：レコードインポート]** 重複データをインポートした際に表示される行番号が不正確になる問題を修正（[#7440](https://github.com/nocobase/nocobase/pull/7440)）@aaaaaajie
* **[コレクション：ツリー]** ツリー型コレクションを削除した後、当該コレクションに関連するデータベースイベントを削除（[#7459](https://github.com/nocobase/nocobase/pull/7459)）@2013xile
* **[ワークフロー：カスタムアクションイベント]** カスタムアクションイベントの初期化直後に手動実行できない問題を修正 @mytharcher
* **[ワークフロー：サブフロー]** サブプロセスが再開された際に複数回実行される問題を修正 @mytharcher
* **[ワークフロー：承認]** 現在の承認者ではないユーザーに対し、プロセスフローテーブルの対応する表示ボタンを非表示にする対応 @mytharcher
