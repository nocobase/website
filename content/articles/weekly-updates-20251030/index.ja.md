週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.33](https://www.nocobase.com/ja/blog/v1.8.33)

*リリース日：2025-10-29*

### 🚀 機能改善

* **[server]** Gatewayレイヤーのログを追加しました（[#7683](https://github.com/nocobase/nocobase/pull/7683)）by @2013xile

### 🐛 不具合修正

* **[database]** MySQLのJSONカラムに対するデフォルト値同期処理をスキップするようにしました（[#7696](https://github.com/nocobase/nocobase/pull/7696)）by @2013xile
* **[client]**
  * モーダル内の iframe ブロックで連動ルールが動作しない問題を修正しました（[#7694](https://github.com/nocobase/nocobase/pull/7694)）by @katherinehhh
  * 操作パネル内のQRコードスキャン機能で連動ルールを設定できない問題を修正しました（[#7693](https://github.com/nocobase/nocobase/pull/7693)）by @katherinehhh
* **[ワークフロー]** サービス分割モードにおいて、ワークフローのメモリ待機キューが不適切に処理され、一部ワークフローが実行されない問題を修正しました（[#7692](https://github.com/nocobase/nocobase/pull/7692)）by @mytharcher

### [v1.8.32](https://www.nocobase.com/ja/blog/v1.8.32)

*リリース日：2025-10-27*

### 🚀 機能改善

* **[server]** ローカライズリソースの読み込み方法を最適化し、イベントループのブロッキングを回避しました（[#7653](https://github.com/nocobase/nocobase/pull/7653)）by @2013xile
* **[cache]** ブルームフィルターのクローンによるパフォーマンス低下を防止しました（[#7652](https://github.com/nocobase/nocobase/pull/7652)）by @2013xile
* **[操作：レコードのインポート]** ヘッダーが見つからない場合のエラーメッセージを改善しました（[#7656](https://github.com/nocobase/nocobase/pull/7656)）by @mytharcher

### 🐛 不具合修正

* **[client]**
  * フィルター内の日付フィールドをクリアした際に発生するエラーを修正しました（[#7632](https://github.com/nocobase/nocobase/pull/7632)）by @katherinehhh
  * フィールド名が改行される際に単語が分断される問題を修正しました（[#7647](https://github.com/nocobase/nocobase/pull/7647)）by @katherinehhh
  * 編集モーダル内のサブテーブルのデフォルト値が反映されない問題を修正しました（[#7631](https://github.com/nocobase/nocobase/pull/7631)）by @katherinehhh
* **[データフィールド：中国行政区画]** 市と区の名称が同じ場合にインポートできない問題を修正しました（[#7673](https://github.com/nocobase/nocobase/pull/7673)）by @2013xile
* **[ワークフロー]**
  * 分岐を有効にしたノードを削除後、保持された分岐内の最初のノードのkeyが新しい値に変わってしまう問題を修正しました（[#7665](https://github.com/nocobase/nocobase/pull/7665)）by @mytharcher
  * アプリ停止時にログ出力でエラーが発生する問題を修正しました（[#7639](https://github.com/nocobase/nocobase/pull/7639)）by @mytharcher
* **[ファイルマネージャー]**`.msg` ファイルが正常にアップロードできない問題を修正しました（[#7662](https://github.com/nocobase/nocobase/pull/7662)）by @mytharcher
* **[データソース：メインデータベース]** 逆リレーションフィールド作成後、複数ノード間でメタデータが同期されない問題を修正しました（[#7628](https://github.com/nocobase/nocobase/pull/7628)）by @mytharcher
* **[ワークフロー：承認]**
  * 承認完了通知のステータス文言が正しく翻訳されない問題を修正し、ユーザーが言語設定をしていない場合はシステムのデフォルト言語を使用するようにしました by @mytharcher
  * 追加承認後にToDo数が更新されない問題を修正しました by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.15](https://www.nocobase.com/ja/blog/v1.9.0-beta.15)

*リリース日：2025-10-25*

不具合修正

* **[Redis メッセージキューアダプター]** 起動後にサブスクライブしたチャンネルを正しく受信できない問題を修正しました by @mytharcher

### [v1.9.0-beta.14](https://www.nocobase.com/ja/blog/v1.9.0-beta.14)

*リリース日：2025-10-25*

### 🎉 新機能

* **[ワークフロー：承認]** 承認トリガーで申請番号（承認番号）の変数が使用できるようになりました by @mytharcher

### 🚀 機能改善

* **[server]** ローカライズリソースの読み込み処理を最適化し、イベントループをブロックしないよう改善しました（[#7653](https://github.com/nocobase/nocobase/pull/7653)) by @2013xile
* **[cache]** ブルームフィルターをcloneする際に発生するパフォーマンス低下を防止しました（[#7652](https://github.com/nocobase/nocobase/pull/7652)) by @2013xile
* **[操作：レコードインポート]** ヘッダーが見つからない場合のエラーメッセージを分かりやすく改善しました（[#7656](https://github.com/nocobase/nocobase/pull/7656)) by @mytharcher

### 🐛 不具合修正

* **[client]** フィールド名が改行時に途中で切れる問題を修正しました（[#7647](https://github.com/nocobase/nocobase/pull/7647)) by @katherinehhh
* **[ワークフロー]** アプリ停止時にログ出力でエラーが発生する問題を修正しました（[#7639](https://github.com/nocobase/nocobase/pull/7639)) by @mytharcher
* **[ワークフロー：承認]**
  * 承認送信後にDBエラーが発生した際、トランザクションが正しくロールバックされずタイムアウトになる問題を修正しました by @mytharcher
  * 加署後、未処理件数（ToDo）が更新されない問題を修正しました by @mytharcher
  * 承認フォーム送信時に一部の変数が正しく展開されない問題を修正しました by @mytharcher
* **[メール管理]** 同期エラーを適切に処理するよう対応しました by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.25](https://www.nocobase.com/ja/blog/v2.0.0-alpha.25)

*リリース日：2025-10-29*

### 🚀 機能改善

* **[server]** Gatewayレイヤーのログを追加しました（[#7683](https://github.com/nocobase/nocobase/pull/7683)）by @2013xile
* **[flow-engine]** flow step 内でコンテキスト変数を定義できるようになりました（[#7674](https://github.com/nocobase/nocobase/pull/7674)）by @gchust
* **[データ可視化]**
  * 「クエリを実行」をクリックしてからチャートオプションを設定するよう案内メッセージを追加しました（[#7685](https://github.com/nocobase/nocobase/pull/7685)）by @heziqiang
  * チャート設定パネルの共通プレビューボタンをクリックすると、チャートデータが自動更新されるようになりました（[#7678](https://github.com/nocobase/nocobase/pull/7678)）by @heziqiang
* **[AIスタッフ]** AIによるコードレビュー・診断・修復を含むAIプログラミング体験を改善しました（[#7679](https://github.com/nocobase/nocobase/pull/7679)）by @cgyrock
* **[データソース管理]** フィールドタイプとinterface列の順序を調整し、変更時に確認ダイアログを追加しました（[#7680](https://github.com/nocobase/nocobase/pull/7680)）by @2013xile
* **[ワークフロー]** レコード更新操作ボタンに関連ワークフロー設定項目を補完しました（[#7668](https://github.com/nocobase/nocobase/pull/7668)）by @mytharcher
* **[マルチアプリ管理（非推奨）]** app supervisor を改善しました（[#7661](https://github.com/nocobase/nocobase/pull/7661)）by @chenos

### 🐛 不具合修正

* **[client]**
  * フィールドが読み取り専用モードの場合にデフォルト値を設定できない問題を修正し、編集不可でもスムーズに設定できるようになりました（[#7689](https://github.com/nocobase/nocobase/pull/7689)）by @gchust
  * サブフォームの連動ルールに関する既知の問題を修正しました（[#7698](https://github.com/nocobase/nocobase/pull/7698)）by @zhangzhonghe
  * フィルターフォーム内のJSブロックフィールドが読み込まれない問題を修正しました（[#7690](https://github.com/nocobase/nocobase/pull/7690)）by @gchust
* **[flow-engine]** モーダル内で編集フォームの関連フィールドが誤ったレコードコンテキストを選択する問題を修正しました（[#7675](https://github.com/nocobase/nocobase/pull/7675)）by @gchust
* **[ワークフロー：手動処理ノード]** ワークフローを停止した際、ToDoセンターから手動処理タスクが消える問題を修正しました（[#7687](https://github.com/nocobase/nocobase/pull/7687)）by @mytharcher
* **[AIスタッフ]** APIリソースを含むブロック選択時に対応データを正しく取得できない問題を修正しました（[#7688](https://github.com/nocobase/nocobase/pull/7688)）by @cgyrock
* **[ワークフロー]** 分岐を有効にしたノード削除後、残った分岐内の最初のノードのkeyが新しい値に変更される問題を修正しました（[#7665](https://github.com/nocobase/nocobase/pull/7665)）by @mytharcher
* **[データフィールド：中国行政区画]** 市と区の名称が同じ場合にデータをインポートできない問題を修正しました（[#7673](https://github.com/nocobase/nocobase/pull/7673)）by @2013xile
* **[ファイルマネージャー]**`.msg` ファイルが正常にアップロードできない問題を修正しました（[#7662](https://github.com/nocobase/nocobase/pull/7662)）by @mytharcher
* **[フロントエンドフローエンジン]** 連動ルール内で変数代入が正しく解析されない問題を修正しました（[#7684](https://github.com/nocobase/nocobase/pull/7684)）by @gchust
* **[データ可視化]** チャート初期化時に `sql:runById` APIを使用してデータを取得するよう修正しました（[#7677](https://github.com/nocobase/nocobase/pull/7677)）by @heziqiang
* **[ワークフロー：承認]** 承認完了通知のステータス文言翻訳が不正確な問題を修正し、ユーザーが言語設定をしていない場合はシステムのデフォルト言語を使用するようにしました by @mytharcher

### [v2.0.0-alpha.24](https://www.nocobase.com/ja/blog/v2.0.0-alpha.24)

*リリース日：2025-10-27*

### 🎉 新機能

* **[フロントエンドフローエンジン]** SQL記述時に LiquidJS テンプレート文字列の使用をサポートしました（[#7667](https://github.com/nocobase/nocobase/pull/7667)）by @2013xile

### [v2.0.0-alpha.22](https://www.nocobase.com/ja/blog/v2.0.0-alpha.22)

*リリース日：2025-10-25*

### 🎉 新機能

* **[client]** 2.0版のMarkdownブロックを追加しました（[#7613](https://github.com/nocobase/nocobase/pull/7613)）by @katherinehhh
* **[データソース管理]**
  * メインデータソースでメインデータベースのテーブル読み込みとフィールドのinterface変更に対応しました（[#7118](https://github.com/nocobase/nocobase/pull/7118)）by @aaaaaajie
  * メインデータソースでメインデータベースのテーブル読み込みとフィールドのinterface変更に対応しました（[#7118](https://github.com/nocobase/nocobase/pull/7118)）by @aaaaaajie
* **[履歴]** 履歴ブロックを新たに追加しました by @2013xile

### 🐛 不具合修正

* **[flow-engine]** FlowModelでカスタムflow actionが設定できない問題を修正し、正常に設定できるようになりました（[#7666](https://github.com/nocobase/nocobase/pull/7666)）by @gchust
* **[Redis メッセージキューアダプター]** 起動後にサブスクライブしたチャンネルを正しく受信できない問題を修正しました by @mytharcher

### [v2.0.0-alpha.21](https://www.nocobase.com/ja/blog/v2.0.0-alpha.21)

*リリース日：2025-10-25*

### 🚀 機能改善

* **[cache]** ブルームフィルターをcloneした際に発生するパフォーマンス低下を防止しました（[#7652](https://github.com/nocobase/nocobase/pull/7652)) by @2013xile
* **[server]** ローカライズリソースの読み込み処理を見直し、イベントループのブロックを回避しました（[#7653](https://github.com/nocobase/nocobase/pull/7653)) by @2013xile
* **[操作：レコードインポート]** ヘッダーが見つからない場合のエラーメッセージをよりわかりやすく改善しました（[#7656](https://github.com/nocobase/nocobase/pull/7656)) by @mytharcher

### 🐛 不具合修正

* **[client]** フィールド名の折り返し表示で単語が途中で切れてしまう問題を修正しました（[#7647](https://github.com/nocobase/nocobase/pull/7647)) by @katherinehhh
* **[データ可視化]** チャートのSQLクエリ内で変数が誤って自動的に解析される問題を修正しました（[#7642](https://github.com/nocobase/nocobase/pull/7642)) by @heziqiang
* **[ワークフロー]** アプリ停止時にログ出力でエラーが発生する問題を修正しました（[#7639](https://github.com/nocobase/nocobase/pull/7639)) by @mytharcher

### [v2.0.0-alpha.20](https://www.nocobase.com/ja/blog/v2.0.0-alpha.20)

*リリース日：2025-10-23*

### 🎉 新機能

* **[client]** サブフォームに連動ルールを設定できるようになりました（[#7640](https://github.com/nocobase/nocobase/pull/7640)）by @zhangzhonghe
* **[ブロック：リスト]** 新たに2.0版のリストブロックを追加しました（[#7574](https://github.com/nocobase/nocobase/pull/7574)）by @katherinehhh
* **[データ可視化]** 環形チャート（ドーナツグラフ）を新しく追加しました（[#7629](https://github.com/nocobase/nocobase/pull/7629)）by @heziqiang
* **[ブロック：操作パネル]** 2.0版の操作パネルブロックを追加しました（[#7594](https://github.com/nocobase/nocobase/pull/7594)）by @katherinehhh
* **[ブロック：グリッドカード]** 2.0版グリッドカードブロックを追加しました（[#7579](https://github.com/nocobase/nocobase/pull/7579)）by @katherinehhh

### 🚀 機能改善

* **[flow-engine]** URLクエリに `skipRunJs=true` を追加することで、runjsフローのステップをスキップできるようになりました（[#7638](https://github.com/nocobase/nocobase/pull/7638)）by @gchust

### 🐛 不具合修正

* **[flow-engine]** JSコードエディタでコピー＆ペーストしたコード断片がエラーになる問題を修正しました（[#7641](https://github.com/nocobase/nocobase/pull/7641)）by @gchust
* **[フロントエンドフローエンジン]** 親ポップアップ内のレコード変数が正しく解析されない問題を修正しました（[#7637](https://github.com/nocobase/nocobase/pull/7637)）by @gchust
* **[データ可視化]** チャートのデータリクエスト時に `orders` パラメータが欠落する問題を修正しました（[#7636](https://github.com/nocobase/nocobase/pull/7636)）by @heziqiang
* **[メール管理]** 同期時の例外を適切に捕捉するよう対応しました by @jiannx
