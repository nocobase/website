週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.24](https://www.nocobase.com/ja/blog/v1.9.24)

*リリース日：2025-12-09*

### 🐛 不具合修正

* **[client]**`RemoteSelect` が値なしのときに誤った候補を読み込む問題を修正 ([#8137](https://github.com/nocobase/nocobase/pull/8137)) by @mytharcher
* **[データテーブルフィールド：自動コード]** sequence フィールドのプラグインが repair コマンドを扱う際の安定性を強化 ([#8139](https://github.com/nocobase/nocobase/pull/8139)) by @cgyrock
* **[通知：メール]** メール通知の接続数制限に関する不具合を修正 ([#8119](https://github.com/nocobase/nocobase/pull/8119)) by @jiannx

### [v1.9.23](https://www.nocobase.com/ja/blog/v1.9.23)

*リリース日：2025-12-09*

### 🚀 機能改善

* **[auth]**[CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) の脆弱性に対応しました ([#8128]) by @2013xile
* **[操作：レコードインポート]** インポート項目で ID を選択できるようになりました ([#8132]) by @katherinehhh

### 🐛 不具合修正

* **[server]** データインポート後、すでにトリガーされていたワークフローが処理キューに登録されない不具合を修正し、インポート後もワークフローが正しく動作するようにしました ([#8121]) by @mytharcher

### [v1.9.21](https://www.nocobase.com/ja/blog/v1.9.21)

*リリース日：2025-12-07*

### 🚀 機能改善

* **[監査ログ]** 一意識別子の項目を `text` 型に変更し、一括編集時に識別子が長くなり過ぎて記録できなくなる不具合を防ぐようにしました by @2013xile

### 🐛 不具合修正

* **[ワークフロー：承認]** 権限範囲に変数が含まれている場合、関連する承認データが読み込めなくなる問題を修正しました by @mytharcher

### [v1.9.20](https://www.nocobase.com/ja/blog/v1.9.20)

*リリース日：2025-12-05*

### 🎉 新機能

* **[データテーブル項目：自動コード]** データ移行後に「自動コード」項目が自動的に更新されるようになりました ([#8063](https://github.com/nocobase/nocobase/pull/8063)) by @cgyrock

### 🚀 機能改善

* **[移行管理]** データ移行後に「自動コード」項目が自動更新されるよう改善しました by @cgyrock

### 🐛 不具合修正

* **[ワークフロー]** 実行記録ビューでノードを削除した際に発生していたエラーを修正しました ([#8090](https://github.com/nocobase/nocobase/pull/8090)) by @mytharcher
* **[ワークフロー：承認]** 役割の結合モード使用時に、関連承認が読み込めずエラーやデータ欠落が発生する問題を修正しました by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.18](https://www.nocobase.com/ja/blog/v1.9.0-beta.18)

*リリース日：2025-12-09*

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.52](https://www.nocobase.com/ja/blog/v2.0.0-alpha.52)

*リリース日：2025-12-07*

### 🎉 新機能

* **[client]** 多対サブフォームで「データ追加」「既存データの選択」「関連解除」が設定できるように機能を追加 ([#8099](https://github.com/nocobase/nocobase/pull/8099)) by @katherinehhh
* **[データソース：REST API]** REST API データソース設定に、エラー内容を変換できる項目を追加 by @cgyrock

### 🚀 機能改善

* **[auth]**[CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) の脆弱性を修正 ([#8128](https://github.com/nocobase/nocobase/pull/8128)) by @2013xile
* **[操作：レコードインポート]**
  * インポート設定で ID を選べるよう対応 ([#8133](https://github.com/nocobase/nocobase/pull/8133)) by @katherinehhh
  * インポートフィールドで ID を選べるよう対応 ([#8132](https://github.com/nocobase/nocobase/pull/8132)) by @katherinehhh
* **[ワークフロー：承認]** 承認単票を取得する API を見直し、コードを簡潔化 by @mytharcher

### 🐛 不具合修正

* **[client]**
  * リレーションフィールドが子フィールドの disabled 設定で制限される問題を修正 ([#8131](https://github.com/nocobase/nocobase/pull/8131))
  * `RemoteSelect` が値なしの場合に誤った候補を読み込む問題を修正 ([#8137](https://github.com/nocobase/nocobase/pull/8137))
  * 日付フィルターで「過去」「未来」を選んだ際に幅が揃わない UI 問題を修正 ([#8130](https://github.com/nocobase/nocobase/pull/8130))
  * フィルターフォームのデフォルトラベルが正しく翻訳されない問題を修正 ([#8135](https://github.com/nocobase/nocobase/pull/8135))
  * JS block のタイトル説明の見た目を他のブロックと統一 ([#8115](https://github.com/nocobase/nocobase/pull/8115))
  * サブフォーム内の入れ子テーブルが表示されない問題を修正 ([#8117](https://github.com/nocobase/nocobase/pull/8117))
  * 複数行テキストが改行されない問題を修正 ([#8122](https://github.com/nocobase/nocobase/pull/8122))
  * フィルターフォームでリレーションデータが正しく読み込まれない問題を修正 ([#8109](https://github.com/nocobase/nocobase/pull/8109))
  * 「いずれかを含む」「いずれも含まない」で全候補が表示されない問題を修正 ([#8118](https://github.com/nocobase/nocobase/pull/8118))
  * カスタムフィールド設定が反映されず、一部が適用されない問題を修正 ([#8106](https://github.com/nocobase/nocobase/pull/8106))
  * 時間範囲フィルターをクリア後に再実行するとエラーが出る問題を修正 ([#8110](https://github.com/nocobase/nocobase/pull/8110))
  * number フィールド値が正しく反映されない問題を修正 ([#8104](https://github.com/nocobase/nocobase/pull/8104))
  * 一部フィールドの演算子が正しく動作しない問題を修正 ([#8100](https://github.com/nocobase/nocobase/pull/8100))
  * Checkbox フィールドのフィルターが機能しない問題を修正 ([#8103](https://github.com/nocobase/nocobase/pull/8103))
* **[flow-engine]**
  * integer 型の選択肢が正しく変換されない問題を修正 ([#8138](https://github.com/nocobase/nocobase/pull/8138))
  * toggleable サブモデルメニューが useModel 未指定で切り替えできない問題を修正し、自動推定に対応 ([#8105](https://github.com/nocobase/nocobase/pull/8105))
* **[server]** インポート後に開始されたワークフローがキューへ追加されない問題を修正し、正常処理できるよう改善 ([#8121](https://github.com/nocobase/nocobase/pull/8121))
* **[通知：メール]** メール通知の接続数制限の問題を修正 ([#8119](https://github.com/nocobase/nocobase/pull/8119))
* **[データテーブルフィールド：計算式]** 計算式フィールドがフィルターで値入力できない問題を修正 ([#8102](https://github.com/nocobase/nocobase/pull/8102))
* **[マルチスペース]** システムテーブルで他のフィールドが作成できない問題を修正 by @jiannx

### [v2.0.0-alpha.51](https://www.nocobase.com/ja/blog/v2.0.0-alpha.51)

*リリース日：2025-12-07*

### 🎉 新機能

* **[client]**
  * テーマエディタで全体のスタイルを自由にカスタマイズできるようになりました ([#7960](https://github.com/nocobase/nocobase/pull/7960)) by @ljmiaoo
  * 詳細ブロックでデフォルトの並び順を設定できるようになりました ([#8070](https://github.com/nocobase/nocobase/pull/8070)) by @katherinehhh
  * 数値フィールドのデータ型として、double・float・decimal を選べるようになりました ([#8058](https://github.com/nocobase/nocobase/pull/8058)) by @chenos
* **[データテーブル項目：自動コード]** データ移行後に「自動コード」項目が自動的に更新されるようになりました ([#8063](https://github.com/nocobase/nocobase/pull/8063)) by @cgyrock

### 🚀 機能改善

* **[client]**
  * サブテーブルで行削除後に最後のページへ移動してしまう不具合を解消し、列ごとにバリデーションを設定できるようになりました ([#8094](https://github.com/nocobase/nocobase/pull/8094)) by @katherinehhh
  * 編集中のサブテーブルで、大きなフィールドがより見やすく表示されるよう調整しました ([#8078](https://github.com/nocobase/nocobase/pull/8078)) by @katherinehhh
  * JSON フィールドが長い場合でも、省略してわかりやすく表示できるようになりました ([#8067](https://github.com/nocobase/nocobase/pull/8067)) by @katherinehhh
* **[flow-engine]**
  * FlowModelRenderer にキャッシュを使える useCache オプションを追加しました ([#8072](https://github.com/nocobase/nocobase/pull/8072)) by @zhangzhonghe
  * モデルとその子モデルをまとめて削除できる `removeModelWithSubModels` を新たに追加しました ([#8064](https://github.com/nocobase/nocobase/pull/8064)) by @zhangzhonghe
* **[ブロック：グリッドカード]** グリッドカードに 1ページあたりの行数設定を追加し、pageSize は自動計算に切り替わりました ([#8055](https://github.com/nocobase/nocobase/pull/8055)) by @katherinehhh
* **[監査ログ]** 一意識別子の項目を `text` 型に変更し、一括編集時に長さ制限で保存できなくなる問題を防ぐようにしました by @2013xile
* **[移行管理]** データ移行後に「自動コード」項目が自動更新されるよう改善しました by @cgyrock

### 🐛 不具合修正

* **[client]**

  * ブロックを削除しても、フィルターブロックに残っていた対応フィールドが正しく消えない不具合を修正しました。 ([#8098](https://github.com/nocobase/nocobase/pull/8098)) by @gchust
  * ボタンを非表示にした際、通常モードで余分なスペースが生じる問題を修正しました ([#8092](https://github.com/nocobase/nocobase/pull/8092)) by @katherinehhh
  * フィルターフォームのリセットボタンの文言が編集できなかった不具合を修正しました。 ([#8089](https://github.com/nocobase/nocobase/pull/8089)) by @gchust
  * フィルター演算子が \$in / \$notIn の場合でも複数値を入力できるよう修正しました。 ([#8081](https://github.com/nocobase/nocobase/pull/8081)) by @gchust
  * データブロックを追加した際、フィルターフォームのフィールド一覧に自動で反映されない問題を修正しました。 ([#8085](https://github.com/nocobase/nocobase/pull/8085)) by @gchust
  * リレーションフィールドの設定メニューに「ショートカット作成」が表示されないよう調整しました。 ([#8083](https://github.com/nocobase/nocobase/pull/8083)) by @gchust
  * リストブロックでリレーションのサブテーブルデータが誤って表示される不具合を修正しました。 ([#8082](https://github.com/nocobase/nocobase/pull/8082)) by @katherinehhh
  * データテーブルで設定した数値フィールドの検証ルールがフォームで反映されない問題を修正しました。 ([#8025](https://github.com/nocobase/nocobase/pull/8025)) by @katherinehhh
  * フィルターフォームのフィールドがバックエンドの検証ルールによって制限されてしまう問題を修正しました。 ([#8074](https://github.com/nocobase/nocobase/pull/8074)) by @gchust
  * json フィールドのクイック編集で発生していたエラーを修正しました。 ([#8059](https://github.com/nocobase/nocobase/pull/8059)) by @katherinehhh
  * サブテーブル内の大きなフィールドが編集後に正しく表示されない問題を修正しました。 ([#8069](https://github.com/nocobase/nocobase/pull/8069)) by @katherinehhh
  * 多対多リレーションのドロップダウンで多選択を無効化した場合、ショートカット追加でエラーが出る不具合を修正しました。 ([#8034](https://github.com/nocobase/nocobase/pull/8034)) by @katherinehhh
  * json フィールド送信時に、内容がオブジェクトとして扱われるよう修正しました。 ([#8057](https://github.com/nocobase/nocobase/pull/8057)) by @katherinehhh
  * Enter キーでフィルターが実行できなかった問題を修正しました。 ([#8056](https://github.com/nocobase/nocobase/pull/8056)) by @gchust
* **[flow-engine]**

  * フィールドコンポーネントを切り替えた際、以前のコンポーネントの設定項目がメニューに残ってしまう不具合を修正しました。 ([#8095](https://github.com/nocobase/nocobase/pull/8095)) by @gchust
  * useEffect の実行位置を FlowModelRenderer 内の条件 return より前へ移動しました。 ([#8088](https://github.com/nocobase/nocobase/pull/8088)) by @zhangzhonghe
  * フィルター操作に対応していないリレーションフィールドが候補に表示されてしまう問題を修正しました。 ([#8086](https://github.com/nocobase/nocobase/pull/8086)) by @gchust
* **[acl]** acl.allow が意図より早く実行されてしまう問題を修正しました ([#8065]) by @chenos
* **[ファイルマネージャー]**

  * List や Grid card の子詳細データが誤って表示される不具合を修正しました。([#8087](https://github.com/nocobase/nocobase/pull/8087)) by @katherinehhh
  * 閲覧モードのサブテーブルで Attachment フィールドが正しく読み込めない問題を修正しました。 ([#8073](https://github.com/nocobase/nocobase/pull/8073)) by @katherinehhh
* **[ワークフロー]**

  * 実行記録ビューでノード削除後にエラーが起きる問題を修正しました。([#8090](https://github.com/nocobase/nocobase/pull/8090)) by @mytharcher
  * 実行履歴ページでノードに記録がない場合にエラーが発生する問題を修正しました。([#8066](https://github.com/nocobase/nocobase/pull/8066)) by @mytharcher
* **[データテーブル項目：計算式]** 計算式フィールドをフィルターフォームに追加できなかった問題を修正しました。([#8071](https://github.com/nocobase/nocobase/pull/8071)) by @gchust
* **[ブロック：操作パネル]** List レイアウトの余白を調整し、見た目を改善しました。([#8084](https://github.com/nocobase/nocobase/pull/8084)) by @katherinehhh
* **[AI スタッフ]**

  * データソース追加時にロール名が正しくコンパイルされない不具合を修正しました。([#8076](https://github.com/nocobase/nocobase/pull/8076)) by @heziqiang
  * 現在レコードの一部フィールドが変数リストに表示されない問題を修正しました。([#8053](https://github.com/nocobase/nocobase/pull/8053)) by @gchust
* **[操作：レコードインポート]** インポートするフィールドと権限設定のフィールドが一致しない不具合を修正しました。([#8075](https://github.com/nocobase/nocobase/pull/8075)) by @2013xile
* **[権限管理]** 外部データソースに関連するデータテーブル操作へ、権限チェックのミドルウェアを追加しました。([#8062](https://github.com/nocobase/nocobase/pull/8062)) by @2013xile
* **[ワークフロー：承認]**

  * 権限範囲に変数が含まれる場合、関連承認が取得できない問題を修正しました。by @mytharcher
  * 承認者フォームで入力内容が消えてしまう不具合を修正しました。by @mytharcher
  * データ詳細ポップアップで承認情報を読み込む際の権限エラーを修正しました。by @mytharcher
  * 分岐モードや順次会署で処理が正しく行われない問題を修正しました。by @mytharcher
  * 承認一覧の読み込み時にメモリが溢れる問題を修正しました。by @mytharcher
  * 差戻し分岐で承認記録が利用できない問題を修正しました。by @mytharcher
  * 承認者ポップアップでタイトルが表示されない問題を修正しました。by @mytharcher
  * 役割の結合モードで承認データが読めずエラーが出る問題を修正しました。by @mytharcher
* **[メール管理]**

  * 異常データへのフォールバック処理を追加しました。by @jiannx
  * 不同期の Gmail の定。by @jiannx
