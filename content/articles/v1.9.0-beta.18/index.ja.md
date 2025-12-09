### 🎉 新機能

* **[データテーブルフィールド：自動コード]** データ移行後に「自動コード」フィールドを自動で更新する機能を追加 ([#8063](https://github.com/nocobase/nocobase/pull/8063)) by @cgyrock

* **[データテーブルフィールド：自動コード]** データ移行後に「自動コード」フィールドを自動で更新する機能を追加 ([#8063](https://github.com/nocobase/nocobase/pull/8063)) by @cgyrock
* **[データソース：REST API]** REST API データソース設定に、エラー内容を変換できる項目を追加 by @cgyrock
* **[認証：OIDC]** 未ログイン時に自動で SSO ログインページへ移動する設定を追加 by @heziqiang

### 🚀 機能改善

* **[auth]**[CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) の脆弱性を修正 ([#8128](https://github.com/nocobase/nocobase/pull/8128)) by @2013xile
* **[client]**
  * Select コンポーネントで、折りたたまれた選択済み項目をホバー時に確認できるよう改善 ([#8029](https://github.com/nocobase/nocobase/pull/8029)) by @katherinehhh
  * サブテーブル項目の必須チェックの表示を見やすく調整 ([#8001](https://github.com/nocobase/nocobase/pull/8001)) by @katherinehhh
  * 更新・削除ボタンに読み込み状態を追加し、連続操作による重複リクエストを防止 ([#7964](https://github.com/nocobase/nocobase/pull/7964)) by @mytharcher
  * メッセージ内の変数を三重括弧で扱い、Handlerbars による意図しないエスケープを防止 ([#7972](https://github.com/nocobase/nocobase/pull/7972)) by @mytharcher
* **[操作：レコードインポート]** インポート時に ID を指定できるよう対応 ([#8132](https://github.com/nocobase/nocobase/pull/8132)) by @katherinehhh
* **[ワークフロー]** UserSelect コンポーネントにメインデータソースの情報を持たせ、より広く使えるよう改善 ([#8010](https://github.com/nocobase/nocobase/pull/8010)) by @mytharcher
* **[データテーブルフィールド：Markdown(Vditor)]** 全画面表示時の幅をより適切に調整 ([#7974](https://github.com/nocobase/nocobase/pull/7974)) by @katherinehhh
* **[非同期タスクマネージャー]** タスク失敗時に原因が分かりやすいようエラーメッセージを改善 ([#7796](https://github.com/nocobase/nocobase/pull/7796)) by @mytharcher
* **[操作：レコードインポート Pro]** 非同期タスク失敗時に原因が明確になるようエラー表示を改善 by @mytharcher
* **[ワークフロー：承認]**
  * 承認者選択で、ユーザーテーブルの主外部キーのみ選べるよう修正 by @mytharcher
  * 共通コンポーネントを使い、重複コードを削減 by @mytharcher
  * 手動実行やサブフロー呼び出し時に、行データまたは主キーのどちらでも処理できるよう対応し、データ不整合を防止 by @mytharcher
  * 承認画面を開く際のデータ読み込みを減らし、動作を軽くする by @mytharcher
* **[監査ログ]** 一意識別子を `text` 型に変更し、大量編集で識別子が長くなりすぎる問題を回避 by @2013xile
* **[移行管理]** データ移行後に「自動コード」フィールドを自動更新するよう改善 by @cgyrock

### 🐛 不具合修正

* **[server]** インポート後に実行すべきワークフローが処理キューに入らない問題を修正 ([#8121](https://github.com/nocobase/nocobase/pull/8121)) by @mytharcher
* **[acl]** 外部データソースでユーザー関連変数を使った際、ACL 情報が正しく取得できない問題を修正 ([#8013](https://github.com/nocobase/nocobase/pull/8013)) by @2013xile
* **[client]**

  * Variable.Input の遅延読み込み不具合を修正し、メニューの異常再描画を解消 ([#8009](https://github.com/nocobase/nocobase/pull/8009)) by @mytharcher
  * ツリーテーブルで子レコード追加時に発生するエラーを修正 ([#7989](https://github.com/nocobase/nocobase/pull/7989)) by @katherinehhh
  * 連動ルール選択時のドロップダウン表示が点滅する問題を修正 ([#8018](https://github.com/nocobase/nocobase/pull/8018)) by @zhangzhonghe
  * フィールドのデフォルト値設定を開くとエラーが出る問題を解消 ([#7997](https://github.com/nocobase/nocobase/pull/7997)) by @mytharcher
  * Iframe 使用時にルーティングが乱れる問題を修正 ([#7957](https://github.com/nocobase/nocobase/pull/7957)) by @zhangzhonghe
  * ドロップダウンがオブジェクト以外の値を返す際にラベルを正しく表示するよう修正 ([#7975](https://github.com/nocobase/nocobase/pull/7975)) by @katherinehhh
* **[database]** time フィールドの UTC 変換処理を削除し、タイムゾーンで時間がずれる問題を解消 ([#7812](https://github.com/nocobase/nocobase/pull/7812)) by @ChimingLiu
* **[操作：レコードインポート]**

  * インポート項目と権限設定が一致しない問題を修正 ([#8075](https://github.com/nocobase/nocobase/pull/8075)) by @2013xile
  * `null` を含むフィールドでエラーになる問題を修正 ([#8037](https://github.com/nocobase/nocobase/pull/8037)) by @mytharcher
  * ツリーテーブルのインポート時に起きるエラーを修正 ([#7976](https://github.com/nocobase/nocobase/pull/7976)) by @cgyrock
* **[データテーブル項目：自動コード]** データ移行後に「自動コード」項目が自動更新されるようになりました ([#8063]) by @cgyrock
* **[データソース：REST API]** REST API データソース設定に「エラーメッセージ変換」オプションを新しく追加しました by @cgyrock
* **[認証：OIDC]** 未ログイン時に自動で SSO ログインページへ遷移できるようになりました by @heziqiangher
* **[ワークフロー]**

  * 実行履歴ページで、ノードに実行記録がない場合に起きるエラーを修正 ([#8066](https://github.com/nocobase/nocobase/pull/8066)) by @mytharcher
  * 実行記録キャンバスで、ノード削除後に発生するエラーを修正 ([#8090](https://github.com/nocobase/nocobase/pull/8090)) by @mytharcher
  * メッセージ送信前にキューがすでに閉じられている不具合を修正 ([#8003](https://github.com/nocobase/nocobase/pull/8003)) by @mytharcher
  * サービス停止前に作成された実行計画がキューに送られない問題を修正 ([#7981](https://github.com/nocobase/nocobase/pull/7981)) by @mytharcher
  * 一部ワークフローで待機タスクのメニューが表示されない不具合を修正 ([#7980](https://github.com/nocobase/nocobase/pull/7980)) by @mytharcher
  * デフォルト表示される待機タスクリストからタスクをクリックすると誤ったページへ遷移する問題を修正 ([#7983](https://github.com/nocobase/nocobase/pull/7983)) by @mytharcher
  * provider の設定ミスにより待機タスク数が表示されない不具合を修正 ([#7968](https://github.com/nocobase/nocobase/pull/7968)) by @mytharcher
* **[マルチアプリケーションマネージャー]** サブアプリにログレベル設定が反映されない不具合を修正 ([#8045](https://github.com/nocobase/nocobase/pull/8045)) by @2013xile
* **[権限管理]** 外部データソースに、関連操作の権限チェック用ミドルウェアを追加 ([#8062](https://github.com/nocobase/nocobase/pull/8062)) by @2013xile
* **[データテーブルフィールド：多対多（配列）]** サブテーブル内の多対多配列フィールドが更新できない問題を修正 ([#7998](https://github.com/nocobase/nocobase/pull/7998)) by @cgyrock
* **[テーマエディタ]** モバイル端末でテーマ切り替えを利用できるように対応 ([#8046](https://github.com/nocobase/nocobase/pull/8046)) by @zhangzhonghe
* **[データ可視化]**

  * 外部データソースのフィルターフィールドで固有属性が表示されない問題を修正 ([#7982](https://github.com/nocobase/nocobase/pull/7982)) by @2013xile
  * グラフデータクエリが ACL のデータ範囲を扱えない問題を修正 ([#7915](https://github.com/nocobase/nocobase/pull/7915)) by @2013xile
* **[データテーブル：ツリー]** 親フィールド取得の不具合によりパステーブルが更新できない問題を修正 ([#8000](https://github.com/nocobase/nocobase/pull/8000)) by @2013xile
* **[ワークフロー：手動処理ノード]** 手動タスク数が正しく集計されない問題を修正 ([#7984](https://github.com/nocobase/nocobase/pull/7984)) by @mytharcher
* **[非同期タスクマネージャー]**`asyncTasks` のデータを移行対象から除外するためのルールを追加 ([#7950](https://github.com/nocobase/nocobase/pull/7950)) by @mytharcher
* **[データソース管理]** 外部データソースでパスワード変更後にシステムへ反映されない不具合を修正 ([#7977](https://github.com/nocobase/nocobase/pull/7977)) by @cgyrock
* **[部署]** 部署プラグインで部署ユーザーの関連フィールドが編集できない不具合を修正 ([#7462](https://github.com/nocobase/nocobase/pull/7462)) by @heziqiang
* **[ワークフロー：サブフロー]** ワークフロー数が 200 件以上の際に選択コンポーネントが正しく表示されない問題を修正 by @mytharcher
* **[ワークフロー：承認]**

  * 言語ファイルを修正 by @mytharcher
  * 差し戻し時に承認記録が利用できない不具合を修正 by @mytharcher
  * 権限範囲に変数が含まれる場合、関連承認データが読み込めない問題を修正 by @mytharcher
  * `RemoteSelect` の変更により `approvalRecords.reassignee` 取得時に権限エラーが出る問題を修正 by @mytharcher
  * ページ更新後、承認詳細モーダルの印刷ボタンが動作しない問題を修正 by @mytharcher
  * 重複レコードでインデックス追加が失敗しないよう、移行スクリプトを追加 by @mytharcher
  * ブランチモードや順次会签で処理が誤る不具合を修正 by @mytharcher
  * コメント付きで承認送信してもノード結果に反映されない問題を修正 by @mytharcher
  * 差し戻し後の再提出で申請者情報がワークフローコンテキストに欠落する問題を修正 by @mytharcher
  * データ詳細モーダルで承認データを読み込む際の権限エラーを修正 by @mytharcher
  * 承認者モーダルのタイトルが表示されない問題を修正 by @zhangzhonghe
  * 役割の「和集合」モードのみの場合、承認データ読み込みでエラーやデータ欠落が起きる問題を修正 by @mytharcher
  * 承認リスト読み込み時のメモリリークを修正 by @mytharcher
