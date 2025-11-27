週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.14](https://www.nocobase.com/ja/blog/v1.9.14)

*リリース日：2025-11-27*

### 🎉 新機能

* **[認証：OIDC]** 未ログイン時に自動で SSO ログインページへリダイレクトできるようになりました by @heziqiang

### 🚀 機能改善

* **[client]** メッセージ内の変数に三重括弧を使うことで、Handlerbars による自動エスケープを防ぐよう改善しました ([#7972](https://github.com/nocobase/nocobase/pull/7972)) by @mytharcher
* **[データ表フィールド：Markdown(Vditor)]** 全画面表示時のレイアウト幅を調整しました ([#7974](https://github.com/nocobase/nocobase/pull/7974)) by @katherinehhh

### 🐛 不具合修正

* **[database]** time フィールド変換で UTC 処理を行っていたため時間がずれる問題を解消しました ([#7812](https://github.com/nocobase/nocobase/pull/7812)) by @ChimingLiu
* **[client]** ドロップダウンで値がオブジェクトでない場合に label が正しく表示されない問題を修正しました ([#7975](https://github.com/nocobase/nocobase/pull/7975)) by @katherinehhh
* **[ワークフロー]**
  * サービス停止前に作成された実行スケジュールがキューへ送られない不具合を修正しました ([#7981](https://github.com/nocobase/nocobase/pull/7981)) by @mytharcher
  * デフォルトの ToDo リストからタスクを開くと誤ったページへ遷移する問題を修正しました ([#7983](https://github.com/nocobase/nocobase/pull/7983)) by @mytharcher
  * 一部の ToDo メニューが表示されない問題を修正しました ([#7980](https://github.com/nocobase/nocobase/pull/7980)) by @mytharcher
  * provider 設定の誤りで ToDo 件数が表示されなくなる問題を修正しました ([#7968](https://github.com/nocobase/nocobase/pull/7968)) by @mytharcher
* **[ワークフロー：人工処理ノード]** 人工 ToDo の件数が正しく集計されない問題を修正しました ([#7984](https://github.com/nocobase/nocobase/pull/7984)) by @mytharcher
* **[データ可視化]**
  * 外部データソースのフィルターフィールド設定で固有属性が表示されない問題を修正しました ([#7982](https://github.com/nocobase/nocobase/pull/7982)) by @2013xile
  * グラフのデータクエリが ACL のデータ範囲を扱えない問題を修正しました ([#7915](https://github.com/nocobase/nocobase/pull/7915)) by @2013xile
* **[データソース管理]** 外部データソースでパスワード更新がシステムに反映されない問題を修正しました ([#7977](https://github.com/nocobase/nocobase/pull/7977)) by @cgyrock
* **[操作：レコードインポート]** ツリーテーブルのインポート時に発生していたエラーを修正しました ([#7976](https://github.com/nocobase/nocobase/pull/7976)) by @cgyrock

### [v1.9.13](https://www.nocobase.com/ja/blog/v1.9.13)

*リリース日：2025-11-25*

### 🐛 不具合修正

* **[client]** Iframe 使用時に発生していたルーティング異常を修正しました ([#7957]()) by @zhangzhonghe

### [v1.9.12](https://www.nocobase.com/ja/blog/v1.9.12)

*リリース日：2025-11-24*

### 🚀 機能改善

* **[client]** 更新・削除ボタンにローディング表示を追加し、重複リクエストを防止できるようになりました ([#7964]()) by @mytharcher
* **[非同期タスクマネージャー]** タスク失敗時のエラー内容がより分かりやすく表示されるようになりました ([#7796]()) by @mytharcher
* **[操作：レコードインポート Pro]** タスク失敗時のエラー表示を改善しました by @mytharcher
* **[ワークフロー：承認]**
  * 承認者選択コンポーネントを調整し、ユーザーテーブルの主外キーだけを選べるようにしました
  * 承認ダイアログの表示時に読み込むデータ量を減らし、動作を軽くしました
  * 手動実行やサブフロー呼び出しで、行データ全体または主キーのみの入力に対応し、トリガーデータの不整合を防ぐよう改善しました

### 🐛 不具合修正

* **[非同期タスクマネージャー]**`asyncTasks` テーブルに移行ルールを追加し、タスク記録が誤って移行されないようにしました ([#7950]()) by @mytharcher
* **[ワークフロー：承認]** 言語ファイルの不備を修正しました by @mytharcher

### [v1.9.11](https://www.nocobase.com/ja/blog/v1.9.11)

*リリース日：2025-11-24*

### 🐛 不具合修正

* **[client]** 外部データソースで belongsTo を設定した際、field interface が one to one ではなく many to one と表示される不具合を修正しました ([#7936](https://github.com/nocobase/nocobase/pull/7936)) by @cgyrock
* **[ワークフロー]** 未処理件数を更新した際、入力途中のフォームがリセットされてしまう問題を修正しました ([#7937](https://github.com/nocobase/nocobase/pull/7937)) by @mytharcher
* **[データテーブルフィールド：多対多（配列）]** 多対多（配列）フィールドで関連データを追加・編集する際の不具合を修正しました ([#7926](https://github.com/nocobase/nocobase/pull/7926)) by @cgyrock

### [v1.9.10](https://www.nocobase.com/ja/blog/v1.9.10)

*リリース日：2025-11-20*

### 🚀 機能改善

* **[権限コントロール]** member ロールの標準権限を縮小しました ([#7921](https://github.com/nocobase/nocobase/pull/7921)) by @2013xile
* **[データ可視化]** プラグイン画面にロシア語の表示対応を追加しました ([#7676](https://github.com/nocobase/nocobase/pull/7676)) by @sembaev-a-a
* **[ワークフロー：Webhook トリガー]** レスポンスノードにアイコンを追加しました by @mytharcher

### 🐛 不具合修正

* **[client]** Can't resolve 'antd-mobile' および 'antd-mobile-icons' のエラーを修正しました ([#7914](https://github.com/nocobase/nocobase/pull/7914)) by @zhangzhonghe
* **[権限コントロール]** リレーションフィールドの操作でデータ範囲の制限が適用できるようになりました ([#7919]()) by @2013xile
* **[データソース：メインデータベース]** 一対多フィールド追加後、再起動前に外部キーを選択できなかった問題を修正しました ([#7907]()) by @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.17](https://www.nocobase.com/ja/blog/v1.9.0-beta.17)

*リリース日：2025-11-21*

### 🚀 機能改善

* **[database]** MariaDB 接続で `multipleStatements` が利用できるようになり、1 回のクエリで複数文の実行が可能になりました ([#7781]()) by @mytharcher
* **[権限コントロール]**
  * member ロールの基本権限を縮小しました ([#7921]()) by @2013xile
  * リレーションフィールド操作時の権限制御をより適切に処理するよう改善しました ([#7800]()) by @2013xile
* **[データ可視化]** プラグイン画面がロシア語に対応しました ([#7676]()) by @sembaev-a-a
* **[ワークフロー]** データブロックでも詳細ブロックと同じ設定メニューが利用できるようになりました ([#7771]()) by @mytharcher
* **[ワークフロー：Webhook トリガー]** レスポンスノードにアイコンを追加しました by @mytharcher
* **[ワークフロー：JavaScript ノード]** 実行環境に渡る関数を利用した不正アクセスの可能性を防ぐため、関連する安全性の問題を修正しました by @mytharcher
* **[認証：OIDC]** リクエストのタイムアウト時間を延長しました by @2013xile
* **[ワークフロー：承認]** 差し戻し・引継ぎ時に新しい承認担当者へ通知するよう改善しました by @mytharcher

### 🐛 不具合修正

* **[client]**
  * 外部データソースで belongsTo を設定した際、field interface が many to one と誤表示される不具合を修正しました ([#7936]()) by @cgyrock
  * Can't resolve 'antd-mobile' / 'antd-mobile-icons' のエラーを修正しました ([#7914]()) by @zhangzhonghe
  * テンプレート参照をドラッグ後に削除すると複製テンプレートが表示されない問題を修正しました ([#7847]()) by @zhangzhonghe
  * 承認フォームの連動ルールが反映されない不具合を修正しました ([#7858]()) by @zhangzhonghe
  * 詳細ブロックの簡易ページングで空ページが表示されてしまう問題を修正しました ([#7784]()) by @katherinehhh
  * “Maximum call stack size exceeded” のエラーを解消しました ([#7780]()) by @zhangzhonghe
* **[server]**
  * サービス分離モードで未購読のキューに publish できない問題を修正しました ([#7875]()) by @mytharcher
  * pub/sub のチャンネルをアプリ名で分離するようにしました ([#7762]()) by @mytharcher
  * 分離モードで worker からのメッセージ送信がエラーになる問題を修正しました ([#7797]()) by @mytharcher
* **[utils]** intersect ルールにオブジェクト型が扱えるようになりました ([#7840]()) by @chenos
* **[database]** snake\_case のフィールド名でインデックス判定が正しく動かない問題を修正しました ([#7776]()) by @2013xile
* **[データテーブルフィールド：多対多（配列）]** 関連データの追加・編集時に発生していた不具合を修正しました ([#7926]()) by @cgyrock
* **[データソース：メインデータベース]** 一対多フィールド追加後、再起動まで外部キーが選択できない問題を修正しました ([#7907]()) by @cgyrock
* **[ワークフロー]**
  * 未処理件数の更新時、入力中のフォームがリセットされてしまう問題を修正しました ([#7937]()) by @mytharcher
  * 分離モードで共有キューが誤って消費されるのを防ぐため、内部イベントキューへ変更しました ([#7871]()) by @mytharcher
  * ワークフロープラグインがサービスモード外でもキューを消費してしまう問題を修正しました ([#7820]()) by @mytharcher
  * 存在しない外部データソースイベントを監視した際に出るエラーを修正しました ([#7855]()) by @mytharcher
  * 中断ノードのあるワークフローを手動実行した際、処理が進まない問題を修正しました ([#7767]()) by @mytharcher
  * ログに `workflowId` を記録するようになりました ([#7789]()) by @mytharcher
  * クラスターモードで空き状態を誤判定し、準備前にイベントを処理してしまう問題を修正しました ([#7768](github.com/nocobase/nocobase/pull/7768)) by @mytharcher
* **[権限コントロール]**
  * リレーション操作時のデータ範囲制限に対応しました ([#7919]()) by @2013xile
  * リレーション操作 snippets が正しく動かない問題を修正しました ([#7876]()) by @2013xile
* **[ワークフロー：人工処理ノード]** 誤った翻訳参照先を修正し、正しい文言が表示されるようにしました ([#7877]()) by @mytharcher
* **[ユーザー]** snake\_case フィールド名でインデックスリセットが正しく行われない問題を修正しました ([#7785]()) by @2013xile
* **[モバイル（非推奨）]** 日付フィールドの初期値選択ポップアップで日付が選べない問題を修正しました ([#7783]()) by @zhangzhonghe
* **[ワークフロー：カスタム変数ノード]** config がない場合のエラーを修正しました by @mytharcher
* **[ワークフロー：カスタム操作イベント]** 存在しない外部データソースイベントを監視した際のエラーを修正しました by @mytharcher
* **[テンプレート印刷]** filter 内の変数解析に対応しました by @jiannx
* **[データ可視化：ECharts]** Label type 設定が反映されない問題を修正しました by @heziqiang
* **[ワークフロー：承認]**
  * 承認カードの日付表示を修正し、完全な日時が表示されるようにしました by @mytharcher
  * 通知チャネルのページング数が少なく、全件表示されない問題を修正しました by @mytharcher
  * 承認処理送信時の履歴クエリのパフォーマンス問題を修正しました by @mytharcher
  * 関係再取得時に主テーブルフィールドが除外されない問題を修正しました by @mytharcher
  * 複数承認者の同時操作で競合が発生し、ノードが二重実行される問題を修正しました by @mytharcher
  * 並列分岐では承認ノードを新規作成できないようにし、状態不整合を防ぎました by @mytharcher
  * 承認フォームの連動ルールが反映されない問題を修正しました by @zhangzhonghe
  * 承認ワークフローの複製時に発生するエラーを修正しました by @mytharcher
* **[メール管理]**
  * 同期ログを追加しました by @jiannx
  * Microsoft メールの既読状態がタイムスタンプなしで同期できるようになりました by @jiannx
  * mailMessages にインデックスを追加しました by @jiannx
  * インデックスのマイグレーションスクリプトを追加しました by @jiannx
  * Outlook のインライン画像と同期の問題を修正しました by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.47](https://www.nocobase.com/ja/blog/v2.0.0-alpha.47)

*リリース日：2025-11-26*

### 🚀 機能改善

* **[client]**
  * グラフの初回クエリで使用するフィルター項目を事前に選択できるようになりました ([#7933]()) by @heziqiang
  * メッセージ内の変数を三重括弧で扱うことで、Handlerbars によるエスケープを防ぐよう改善しました ([#7972]()) by @mytharcher
  * レコード更新・削除ボタンにロード表示を追加し、重複リクエストを防げるようにしました ([#7964]()) by @mytharcher
* **[データ表フィールド：Markdown(Vditor)]** 全画面表示時のレイアウト幅を調整しました ([#7974]()) by @katherinehhh

### 🐛 不具合修正

* **[client]**
  * 非 id リレーションフィールドの詳細ポップアップが開けない問題を修正しました ([#7973]()) by @gchust
  * 非 id リレーションフィールドで関連データの読み込みが誤る問題を修正しました ([#7970]()) by @gchust
  * Iframe 使用時に発生していたルーティング異常を修正しました ([#7957]()) by @zhangzhonghe
  * 数値フィールドの精度設定が反映されない問題を修正しました ([#7967]()) by @katherinehhh
  * 新規 2.0 ページでページタイプが正しく設定されない問題を修正しました ([#7945]()) by @zhangzhonghe
  * フィルターのリセット操作で値がクリアされない問題を修正しました ([#7966]()) by @zhangzhonghe
* **[ワークフロー]** provider 設定の誤りで ToDo 数が表示されなくなる問題を修正しました ([#7968]()) by @mytharcher
* **[データ可視化]** グラフデータクエリが ACL のデータ範囲を扱えなかった問題を修正しました ([#7915]()) by @2013xile
* **[ブロック：引用]** 引用元ブロックが元ページから削除されてしまう問題を修正しました ([#7969]()) by @gchust
* **[AI スタッフ]** AI スタッフの SQL 出力が崩れる問題を修正しました ([#7956]()) by @heziqiang
* **[テンプレート印刷]** テーブル行からテンプレートを追加できない問題を修正しました by @katherinehhh

### [v2.0.0-alpha.46](https://www.nocobase.com/ja/blog/v2.0.0-alpha.46)

*リリース日：2025-11-24*

### 🚀 機能改善

* **[flow-engine]** flow model の種類を動的に切り替えられるようになりました ([#7952]()) by @gchust
* **[AI スタッフ]** AI スタッフ用プラグインに upgrade フックを追加しました ([#7951]()) by @heziqiang
* **[非同期タスクマネージャー]** 非同期タスク失敗時のエラー内容がより分かりやすく表示されるようになりました ([#7796]()) by @mytharcher
* **[ワークフロー：承認]**
  * 手動実行やサブフロー呼び出し時に、行データ全体または主キーだけを渡す方法の両方に対応し、トリガーデータの不整合を防ぐよう改善しました
  * 承認モーダルを開く際に読み込む関連データ量を減らし、表示速度を向上しました
  * 承認者選択コンポーネントの挙動を調整し、ユーザー表の主外キーのみ選択できるようにしました

### 🐛 不具合修正

* **[client]** 詳細ブロックでテキストが幅を超えた場合、自動で改行されるよう修正しました ([#7955]()) by @katherinehhh
* **[非同期タスクマネージャー]**`asyncTasks` テーブルにマイグレーションルールを追加し、タスク記録が誤って移行されないようにしました ([#7950]()) by @mytharcher
* **[ファイルマネージャー]** 添付ファイルフィールドで設定したストレージが正しく利用されない問題を修正しました ([#7947]()) by @katherinehhh
* **[ワークフロー：承認]** 言語ファイルの不備を修正しました by @mytharcher

### [v2.0.0-alpha.45](https://www.nocobase.com/ja/blog/v2.0.0-alpha.45)

*リリース日：2025-11-21*

### 🎉 新機能

* **[client]** テーブル列で並び替えができるようになりました ([#7900]()) by @katherinehhh
* **[ワークフロー]**`switch` / `case` のように使える「多条件分岐」ノードを追加しました ([#7878]()) by @mytharcher

### 🐛 不具合修正

* **[client]** カスケードセレクターでクリア操作を行うとエラーになる問題を修正しました ([#7943]()) by @katherinehhh
* **[データ可視化]** グラフ設定を保存してもブロックが更新されない問題を修正しました ([#7920]()) by @heziqiang
* **[テンプレート印刷]** 詳細ブロックのテンプレート印刷ボタンで発生していたエラーを修正しました by @katherinehhh

### [v2.0.0-alpha.44](https://www.nocobase.com/ja/blog/v2.0.0-alpha.44)

*リリース日：2025-11-21*

### 🎉 新機能

* **[client]**
  * リレーションフィールドのドロップダウンで、素早く新規追加できるようになりました ([#7887]()) by @katherinehhh
  * ツリーテーブルのリレーションフィールドで、カスケードセレクターが使えるようになりました ([#7846]()) by @katherinehhh
* **[テレメトリー]** OpenTelemetry を利用した監視プラグインを追加しました。CPU・メモリ・HTTP リクエストなどを計測し、HTTP でのエクスポートにも対応しています by @2013xile

### 🚀 機能改善

* **[telemetry]** 送信対象の指標を選択できるようになりました ([#7938]()) by @2013xile
* **[非同期タスクマネージャー]** サブアプリでの非同期タスク実行時、そのアプリだけが起動するよう改善しました ([#7927]()) by @2013xile

### 🐛 不具合修正

* **[client]**
  * ツリーテーブル用のボタンが別のブロックにも表示されてしまう問題を修正しました ([#7931]()) by @katherinehhh
  * 外部データソースで belongsTo を設定した際、field interface が one to one ではなく many to one と表示される不具合を修正しました ([#7936]()) by @cgyrock
* **[flow-engine]** 詳細ブロックのボタンで、ツールバーアイコンがずれて表示される問題を修正しました ([#7929]()) by @zhangzhonghe
* **[ワークフロー]** 未処理件数の更新時、入力途中のフォームが意図せずリセットされる問題を修正しました ([#7937]()) by @mytharcher
* **[データテーブルフィールド：多対多（配列）]** 多対多（配列）フィールドで関連データを追加・更新する際の不具合を修正しました ([#7926]()) by @cgyrock
* **[操作：レコードインポート Pro]** インポート時に設定変更が反映されない問題を修正しました by @katherinehhh

### [v2.0.0-alpha.43](https://www.nocobase.com/ja/blog/v2.0.0-alpha.43)

*リリース日：2025-11-20*

### 🚀 機能改善

* **[データ可視化]** プラグイン画面がロシア語に対応しました ([#7676](https://github.com/nocobase/nocobase/pull/7676)) by @sembaev-a-a
* **[権限コントロール]** member ロールの初期権限を縮小しました ([#7921](https://github.com/nocobase/nocobase/pull/7921)) by @2013xile
* **[ワークフロー：Webhook トリガー]** レスポンスノードにアイコンを追加しました by @mytharcher

### 🐛 不具合修正

* **[client]** Can't resolve 'antd-mobile' と 'antd-mobile-icons' のエラーを修正しました ([#7914](https://github.com/nocobase/nocobase/pull/7914)) by @zhangzhonghe
* **[flow-engine]** テーブルブロックを開いた際にクイック編集フォームで発生していたエラーを修正しました ([#7923]()) by @gchust
* **[フロントエンドフローエンジン]** レコード変数の解析が正しく行われない問題を修正しました：レコード本体とフィールドを併用すると常に全レコードが返っていた不具合を解消 ([#7917]()) by @gchust
* **[データソース：メインデータベース]** 一対多フィールド追加後、再起動前に外部キーを選択できなかった問題を修正しました ([#7907]()) by @cgyrock
* **[権限コントロール]** リレーションフィールドの操作でデータ範囲の制限に対応しました ([#7919]()) by @2013xile
