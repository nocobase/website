週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.55](https://www.nocobase.com/ja/blog/v2.0.55)

*リリース日：2026-05-18*

### 🚀 機能改善

* **[AI 従業員]** ベクターストアへの書き込み検証を追加しました。同名のデータテーブルを検出した場合に警告を表示し、誤操作による上書きを防ぎます。([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock
* **[AI：ナレッジベース]** ベクターストアへの書き込み検証を追加しました。同名のデータテーブルを検出した場合に警告を表示し、誤操作による上書きを防ぎます by @cgyrock

### 🐛 不具合修正

* **[client]**
  * 操作ボタンのイベントフローで、現在開いているポップアップのレコード変数を解析できない問題を修正しました。([#9495](https://github.com/nocobase/nocobase/pull/9495)) by @gchust
  * フォーム送信時に、サブフォーム内の js field の値が正しく設定されない問題を修正しました。([#9496](https://github.com/nocobase/nocobase/pull/9496)) by @gchust
* **[ファイルマネージャー]** ファイルマネージャーで `tx-cos` にアップロードした後、ファイルサイズのメタデータが欠落する問題を修正しました。([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher
* **[データソース：メインデータベース]** フィールド同期後に、フィールドオプションがスキーマに書き込まれる問題を修正しました。([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile
* **[WEB クライアント]** メニュー削除時に内部ブロックデータを削除するようにしました。([#9459](https://github.com/nocobase/nocobase/pull/9459)) by @gchust
* **[AI 従業員]** AI 従業員が OSS ストレージ上のファイルを読み取る際にエラーが発生する問題を修正しました。([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock
* **[操作：レコードのインポート]** 日付フィールドのインポート後、時刻が正しく表示されない問題を修正しました。([#9463](https://github.com/nocobase/nocobase/pull/9463)) by @mytharcher
* **[操作：レコードのエクスポート Pro]** 添付ファイル URL フィールドで提供された添付ファイルをエクスポートする際にエラーが発生する問題を修正しました by @mytharcher
* **[操作：レコードのインポート Pro]** Pro 版の xlsx インポートにおけるタイムゾーン処理の問題を修正しました by @mytharcher

### [v2.0.53](https://www.nocobase.com/ja/blog/v2.0.53)

*リリース日：2026-05-14*

### 🚀 機能改善

* **[flow-engine]** イベントフロー設定ページを閉じる際に未保存データがある場合、確認メッセージを表示。 ([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust

### 🐛 不具合修正

* **[client]**
  * テーブル内の関連フィールドでクイック編集が表示され、編集ポップアップを開けてしまう問題を修正 ([#9469](https://github.com/nocobase/nocobase/pull/9469)) by @katherinehhh
  * サブテーブル内の関係フィールドを表示のみとして設定した後、再読み込みすると表示されない、またはクリックできない問題を修正。 ([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx
  * v2 データブロックの複数選択フィールドで、選択肢ラベルではなく選択肢値が表示される問題を修正 ([#9472](https://github.com/nocobase/nocobase/pull/9472)) by @katherinehhh
* **[ブロック：ステップフォーム]** v1 ステップフォームブロックを全高に設定した後、ページにスクロールバーが表示される問題を修正 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.35](https://www.nocobase.com/ja/blog/v2.1.0-beta.35)

*リリース日：2026-05-20*

### 🚀 機能改善

* **[client]** v1 と v2 アプリで条件判断機能を共通化しました。([#9522](https://github.com/nocobase/nocobase/pull/9522)) by @zhangzhonghe
* **[ローカリゼーション]** Lina のローカリゼーション翻訳タスクを改善し、翻訳範囲、参照言語の設定、クイック編集に対応しました。([#9521](https://github.com/nocobase/nocobase/pull/9521)) by @2013xile
* **[ワークフロー：承認]** 関連する承認をタイムラインカードで表示するようにしました by @zhangzhonghe

### 🐛 不具合修正

* **[undefined]** Nginx 設定パスを統一しました。([#9528](https://github.com/nocobase/nocobase/pull/9528)) by @chenos
* **[cli-v1]** create-nocobase-app プロジェクトを開発モードで起動できない問題を修正し、公開済みのアプリシェルを再利用してローカルプラグイン開発に対応しました。([#9471](https://github.com/nocobase/nocobase/pull/9471)) by @Molunerfinn
* **[client]**
  * メニューバッジの値が 0 の場合でも赤いドットが表示される問題を修正しました。([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe
  * フィルターフォームで現在のフォーム変数を使用できない問題を修正しました。([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe
* **[ユーザー認証]** WebSocket 認証 token が未読み込みまたは欠落した authType に紐づいた場合、サービスプロセスがクラッシュする問題を修正しました。([#9514](https://github.com/nocobase/nocobase/pull/9514)) by @Molunerfinn
* **[カレンダー]**
  * カレンダーで「さらに表示」から日程を展開した際、表示が崩れる問題を修正しました。([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe
  * カレンダーのその他項目パネルで、項目にホバーしてもポインターカーソルが表示されない問題を修正しました。([#9519](https://github.com/nocobase/nocobase/pull/9519)) by @jiannx
* **[ライセンス設定]** 依存関係のシンボリックリンクに関する問題を解消しました。([#9518](https://github.com/nocobase/nocobase/pull/9518)) by @chenos

### [v2.1.0-beta.34](https://www.nocobase.com/ja/blog/v2.1.0-beta.34)

*リリース日：2026-05-19*

### 🎉 新機能

* **[ブロック：カンバン]** カンバンプラグインに client-v2 サポートを追加しました。([#9475](https://github.com/nocobase/nocobase/pull/9475)) by @jiannx

### 🚀 機能改善

* **[cli]** NocoBase CLI のインストールおよび管理の対話フローを Inquirer に移行し、プロンプトの表示体験を改善しました。また、関連するインストール、スキル管理、Docker ランタイムの問題も修正しました。([#9452](https://github.com/nocobase/nocobase/pull/9452)) by @chenos
* **[AI 従業員]** ベクターストアへの書き込み検証を追加しました。同名のデータテーブルを検出した場合に警告を表示し、誤操作による上書きを防ぎます。([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock
* **[通知管理]** 送信性能を向上させるため、キュー戦略を調整しました。([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher
* **[ワークフロー：カスタム操作イベント]** block-workbench と workflow-custom-action-trigger プラグインを client v2 に移行し、操作パネルモデルと QR コードスキャンフローを同期しました。([#9494](https://github.com/nocobase/nocobase/pull/9494)) by @jiannx
* **[ユーザー認証]** client-v2 の認証設定ページを実装し、再利用可能なテーブル、変数入力、フォームの基本コンポーネントを提供しました。([#9457](https://github.com/nocobase/nocobase/pull/9457)) by @Molunerfinn
* **[AI：ナレッジベース]** ベクターストアへの書き込み検証を追加しました。同名のデータテーブルを検出した場合に警告を表示し、誤操作による上書きを防ぎます by @cgyrock
* **[認証：SAML 2.0]** CAS と SAML 認証プラグインに client-v2 の入口を追加し、v2 ログインページと認証器の管理画面設定で正常に使用できるようにしました by @Molunerfinn

### 🐛 不具合修正

* **[client-v2]**
  * クライアント側で dnd-kit 依存関係が提供されていないため、カンバンプラグインの v2 ルートを読み込めない問題を修正しました。([#9516](https://github.com/nocobase/nocobase/pull/9516)) by @jiannx
  * v2 の共通 Table コンポーネントで、ページネーションの件数セレクターをデフォルト表示し、動作を v1 と揃えました。([#9512](https://github.com/nocobase/nocobase/pull/9512)) by @Molunerfinn
* **[client]**
  * フォーム送信時に、サブフォーム内の js field の値が正しく設定されない問題を修正しました。([#9496](https://github.com/nocobase/nocobase/pull/9496)) by @gchust
  * 操作ボタンのイベントフローで、現在開いているポップアップのレコード変数を解析できない問題を修正しました。([#9495](https://github.com/nocobase/nocobase/pull/9495)) by @gchust
* **[flow-engine]** コンソールに誤ったエラーログが出力される問題を修正しました。([#9502](https://github.com/nocobase/nocobase/pull/9502)) by @gchust
* **[AI 従業員]**
  * ワークフローの AI 従業員ノードで指定した操作担当者ロールの権限が有効にならない問題を修正しました。([#9513](https://github.com/nocobase/nocobase/pull/9513)) by @cgyrock
  * AI 従業員が OSS ストレージ上のファイルを読み取る際にエラーが発生する問題を修正しました。([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock
* **[API ドキュメント]** Collection API ドキュメントで、クエリパラメーターが相互に影響する問題を修正しました。([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx
* **[データソース：メインデータベース]** フィールド同期後に、フィールドオプションがスキーマに書き込まれる問題を修正しました。([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile
* **[ワークフロー：JavaScript ノード]** 本番ビルドでワークフローの JavaScript ノードが QuickJS ランタイムパッケージを読み込めない問題を修正しました。([#9503](https://github.com/nocobase/nocobase/pull/9503)) by @mytharcher
* **[WEB クライアント]** メニュー削除時に内部ブロックデータを削除するようにしました。([#9459](https://github.com/nocobase/nocobase/pull/9459)) by @gchust
* **[操作：レコードのインポート]** 日付フィールドのインポート後、時刻が正しく表示されない問題を修正しました。([#9463](https://github.com/nocobase/nocobase/pull/9463)) by @mytharcher
* **[操作：レコードのインポート Pro]** Pro 版の xlsx インポートにおけるタイムゾーン処理の問題を修正しました by @mytharcher
* **[認証：SAML 2.0]** SAML 自動リダイレクトインターセプターがページ遷移のたびにリクエストを繰り返し、アプリの画面ちらつきやドロワーの重複表示が発生する問題を修正しました by @Molunerfinn
* **[操作：レコードのエクスポート Pro]** 添付ファイル URL フィールドで提供された添付ファイルをエクスポートする際にエラーが発生する問題を修正しました by @mytharcher

### [v2.1.0-beta.33](https://www.nocobase.com/ja/blog/v2.1.0-beta.33)

*リリース日：2026-05-15*

### 🎉 新機能

* **[Markdown]** Markdown ブロックで client v2 をサポート ([#9487](https://github.com/nocobase/nocobase/pull/9487)) by @jiannx
* **[ブロック：リスト]** リストブロックで client-v2 をサポート ([#9486](https://github.com/nocobase/nocobase/pull/9486)) by @jiannx
* **[カレンダー]** カレンダープラグインで client v2 をサポート。 ([#9464](https://github.com/nocobase/nocobase/pull/9464)) by @jiannx
* **[ブロック：ツリー]** ツリーフィルターブロックで client-v2 をサポート。 ([#9466](https://github.com/nocobase/nocobase/pull/9466)) by @jiannx

### 🚀 機能改善

* **[flow-engine]** イベントフロー設定ページを閉じる際に未保存データがある場合、確認メッセージを表示。 ([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust
* **[データソース管理]** データモデリングインターフェースを改善し、AI によるコメントテーブルの作成、外部データソースの関係フィールド設定、フィールドバリデーションルールの設定をサポート ([#9480](https://github.com/nocobase/nocobase/pull/9480)) by @2013xile
* **[ブロック：グリッドカード]** グリッドカードプラグインを更新し、client v2 をサポート ([#9484](https://github.com/nocobase/nocobase/pull/9484)) by @jiannx
* **[ブロック：iframe]** iframe ブロックで v2 をサポート。 ([#9485](https://github.com/nocobase/nocobase/pull/9485)) by @jiannx
* **[AI 従業員]** AI 従業員の並列セッションにおけるインタラクションとパフォーマンスを改善 ([#9462](https://github.com/nocobase/nocobase/pull/9462)) by @cgyrock

### 🐛 不具合修正

* **[client]**
  * フォーム送信アクションに「送信成功後」設定項目を追加。 ([#9414](https://github.com/nocobase/nocobase/pull/9414)) by @jiannx
  * テーブル内の関連フィールドでクイック編集が表示され、編集ポップアップを開けてしまう問題を修正 ([#9469](https://github.com/nocobase/nocobase/pull/9469)) by @katherinehhh
  * サブテーブル内の関係フィールドを表示のみとして設定した後、再読み込みすると表示されない、またはクリックできない問題を修正。 ([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx
  * 古いデフォルト値設定を削除できない問題を修正。 ([#9470](https://github.com/nocobase/nocobase/pull/9470)) by @gchust
  * v2 データブロックの複数選択フィールドで、選択肢ラベルではなく選択肢値が表示される問題を修正 ([#9472](https://github.com/nocobase/nocobase/pull/9472)) by @katherinehhh
* **[client-v2]**
  * テーブル内の関係フィールドで、タイトルフィールドの選択肢リストが空になる問題を修正 ([#9490](https://github.com/nocobase/nocobase/pull/9490)) by @katherinehhh
  * v2 レイアウトで v1 メニューを除外した後、空のグループが残る問題を修正 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) by @zhangzhonghe
* **[flow-engine]** サブモデルメニュー内の関係フィールドサブメニューの状態が不安定になる問題を修正 ([#9417](https://github.com/nocobase/nocobase/pull/9417)) by @jiannx
* **[ファイルマネージャー]** ファイルマネージャーで `tx-cos` アップロード後にファイルサイズのメタデータが不足する問題を修正。 ([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher
* **[AI 従業員]** AI プラグインの起動に失敗する問題を修正 ([#9483](https://github.com/nocobase/nocobase/pull/9483)) by @cgyrock
* **[ブロック：ステップフォーム]** v1 ステップフォームブロックを全高に設定した後、ページにスクロールバーが表示される問題を修正 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) by @katherinehhh
* **[ワークフロー：Webhook トリガー]** バリデーションルールによりレスポンスノードの作成に失敗する問題を修正 by @mytharcher
* **[データテーブルフィールド：手書き署名]** モバイル端末で署名ボックスの表示が異常になる問題を修正 by @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.39](https://www.nocobase.com/ja/blog/v2.1.0-alpha.39)

*リリース日：2026-05-20*

### 🎉 新機能

* **[ブロック：カンバン]** カンバンプラグインに client-v2 サポートを追加しました。([#9475](https://github.com/nocobase/nocobase/pull/9475)) by @jiannx

### 🚀 機能改善

* **[client]** v1 と v2 アプリで条件判断機能を共通化しました。([#9522](https://github.com/nocobase/nocobase/pull/9522)) by @zhangzhonghe
* **[ローカリゼーション]** Lina のローカリゼーション翻訳タスクを改善し、翻訳範囲、参照言語の設定、クイック編集に対応しました。([#9521](https://github.com/nocobase/nocobase/pull/9521)) by @2013xile
* **[AI 従業員]** ベクターストアへの書き込み検証を追加しました。同名のデータテーブルを検出した場合に警告を表示し、誤操作による上書きを防ぎます。([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock
* **[通知管理]** 送信性能を向上させるため、キュー戦略を調整しました。([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher
* **[ワークフロー：カスタム操作イベント]** block-workbench と workflow-custom-action-trigger プラグインを client v2 に移行し、操作パネルモデルと QR コードスキャンフローを同期しました。([#9494](https://github.com/nocobase/nocobase/pull/9494)) by @jiannx
* **[ユーザー認証]** client-v2 の認証設定ページを実装し、再利用可能なテーブル、変数入力、フォームの基本コンポーネントを提供しました。([#9457](https://github.com/nocobase/nocobase/pull/9457)) by @Molunerfinn
* **[AI：ナレッジベース]** ベクターストアへの書き込み検証を追加しました。同名のデータテーブルを検出した場合に警告を表示し、誤操作による上書きを防ぎます by @cgyrock
* **[認証：SAML 2.0]** CAS と SAML 認証プラグインに client-v2 の入口を追加し、v2 ログインページと認証器の管理画面設定で正常に使用できるようにしました by @Molunerfinn
* **[ワークフロー：承認]** 関連する承認をタイムラインカードで表示するようにしました by @zhangzhonghe

### 🐛 不具合修正

* **[undefined]** Nginx 設定パスを統一しました。([#9528](https://github.com/nocobase/nocobase/pull/9528)) by @chenos
* **[cli-v1]** create-nocobase-app プロジェクトを開発モードで起動できない問題を修正し、公開済みのアプリシェルを再利用してローカルプラグイン開発に対応しました。([#9471](https://github.com/nocobase/nocobase/pull/9471)) by @Molunerfinn
* **[client]**
  * フィルターフォームで現在のフォーム変数を使用できない問題を修正しました。([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe
  * メニューバッジの値が 0 の場合でも赤いドットが表示される問題を修正しました。([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe
* **[client-v2]**
  * v2 の共通 Table コンポーネントで、ページネーションの件数セレクターをデフォルト表示し、動作を v1 と揃えました。([#9512](https://github.com/nocobase/nocobase/pull/9512)) by @Molunerfinn
  * クライアント側で dnd-kit 依存関係が提供されていないため、カンバンプラグインの v2 ルートを読み込めない問題を修正しました。([#9516](https://github.com/nocobase/nocobase/pull/9516)) by @jiannx
* **[カレンダー]**
  * カレンダーのその他項目パネルで、項目にホバーしてもポインターカーソルが表示されない問題を修正しました。([#9519](https://github.com/nocobase/nocobase/pull/9519)) by @jiannx
  * カレンダーで「さらに表示」から日程を展開した際、表示が崩れる問題を修正しました。([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe
* **[ライセンス設定]** 依存関係のシンボリックリンクに関する問題を解消しました。([#9518](https://github.com/nocobase/nocobase/pull/9518)) by @chenos
* **[AI 従業員]**
  * ワークフローの AI 従業員ノードで指定した操作担当者ロールの権限が有効にならない問題を修正しました。([#9513](https://github.com/nocobase/nocobase/pull/9513)) by @cgyrock
  * AI 従業員が OSS ストレージ上のファイルを読み取る際にエラーが発生する問題を修正しました。([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock
* **[ユーザー認証]** WebSocket 認証 token が未読み込みまたは欠落した authType に紐づいた場合、サービスプロセスがクラッシュする問題を修正しました。([#9514](https://github.com/nocobase/nocobase/pull/9514)) by @Molunerfinn
* **[API ドキュメント]** Collection API ドキュメントで、クエリパラメーターが相互に影響する問題を修正しました。([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx
* **[データソース：メインデータベース]** フィールド同期後に、フィールドオプションがスキーマに書き込まれる問題を修正しました。([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile
* **[認証：SAML 2.0]** SAML 自動リダイレクトインターセプターがページ遷移のたびにリクエストを繰り返し、アプリの画面ちらつきやドロワーの重複表示が発生する問題を修正しました by @Molunerfinn

### [v2.1.0-alpha.38](https://www.nocobase.com/ja/blog/v2.1.0-alpha.38)

*リリース日：2026-05-18*

### 🐛 不具合修正

* **[client]**
  * 操作ボタンのイベントフローで、現在開いているポップアップのレコード変数を解析できない問題を修正しました。([#9495](https://github.com/nocobase/nocobase/pull/9495)) by @gchust
  * フォーム送信時に、サブフォーム内の js field の値が正しく設定されない問題を修正しました。([#9496](https://github.com/nocobase/nocobase/pull/9496)) by @gchust
* **[flow-engine]** コンソールに誤ったエラーログが出力される問題を修正しました。([#9502](https://github.com/nocobase/nocobase/pull/9502)) by @gchust
* **[ワークフロー：JavaScript ノード]** 本番ビルドでワークフローの JavaScript ノードが QuickJS ランタイムパッケージを読み込めない問題を修正しました。([#9503](https://github.com/nocobase/nocobase/pull/9503)) by @mytharcher
* **[操作：レコードのインポート]** 日付フィールドのインポート後、時刻が正しく表示されない問題を修正しました。([#9463](https://github.com/nocobase/nocobase/pull/9463)) by @mytharcher
* **[操作：レコードのインポート Pro]** Pro 版の xlsx インポートにおけるタイムゾーン処理の問題を修正しました by @mytharcher
* **[操作：レコードのエクスポート Pro]** 添付ファイル URL フィールドで提供された添付ファイルをエクスポートする際にエラーが発生する問題を修正しました by @mytharcher

### [v2.1.0-alpha.37](https://www.nocobase.com/ja/blog/v2.1.0-alpha.37)

*リリース日：2026-05-17*

### 🐛 不具合修正

* **[Web クライアント]** メニュー削除時に内部ブロックデータを削除。 ([#9459](https://github.com/nocobase/nocobase/pull/9459)) by @gchust

### [v2.1.0-alpha.36](https://www.nocobase.com/ja/blog/v2.1.0-alpha.36)

*リリース日：2026-05-16*

### 🎉 新機能

* **[Markdown]** Markdown ブロックで client v2 をサポート ([#9487](https://github.com/nocobase/nocobase/pull/9487)) by @jiannx
* **[ブロック：リスト]** リストブロックで client-v2 をサポート ([#9486](https://github.com/nocobase/nocobase/pull/9486)) by @jiannx

### 🚀 機能改善

* **[flow-engine]** イベントフロー設定ページを閉じる際に未保存データがある場合、確認メッセージを表示。 ([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust
* **[cli]** NocoBase CLI のインストールと管理の対話フローを Inquirer に移行し、案内表示を改善。あわせて、関連するインストール、スキル管理、Docker ランタイムの問題を修正。 ([#9452](https://github.com/nocobase/nocobase/pull/9452)) by @chenos
* **[データソース管理]** データモデリングインターフェースを改善し、AI によるコメントテーブルの作成、外部データソースの関係フィールド設定、フィールドバリデーションルールの設定をサポート ([#9480](https://github.com/nocobase/nocobase/pull/9480)) by @2013xile
* **[ブロック：グリッドカード]** グリッドカードプラグインを更新し、client v2 をサポート ([#9484](https://github.com/nocobase/nocobase/pull/9484)) by @jiannx
* **[ブロック：iframe]** iframe ブロックで v2 をサポート。 ([#9485](https://github.com/nocobase/nocobase/pull/9485)) by @jiannx

### 🐛 不具合修正

* **[client]**
  * サブテーブル内の関係フィールドを表示のみとして設定した後、再読み込みすると表示されない、またはクリックできない問題を修正。 ([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx
  * フォーム送信アクションに「送信成功後」設定項目を追加。 ([#9414](https://github.com/nocobase/nocobase/pull/9414)) by @jiannx
* **[client-v2]** テーブル内の関係フィールドで、タイトルフィールドの選択肢リストが空になる問題を修正 ([#9490](https://github.com/nocobase/nocobase/pull/9490)) by @katherinehhh
* **[flow-engine]** サブモデルメニュー内の関係フィールドサブメニューの状態が不安定になる問題を修正 ([#9417](https://github.com/nocobase/nocobase/pull/9417)) by @jiannx
* **[ファイルマネージャー]** ファイルマネージャーで `tx-cos` アップロード後にファイルサイズのメタデータが不足する問題を修正。 ([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher
* **[データテーブルフィールド：手書き署名]** モバイル端末で署名ボックスの表示が異常になる問題を修正 by @chenzhizdt

### [v2.1.0-alpha.35](https://www.nocobase.com/ja/blog/v2.1.0-alpha.35)

*リリース日：2026-05-14*

### 🎉 新機能

* **[undefined]** AI 従業員としてローカライゼーションエンジニア Lina を追加し、ローカライズ翻訳を支援 ([#9434](https://github.com/nocobase/nocobase/pull/9434)) by @2013xile
  参考ドキュメント：[ローカライゼーション管理](https://docs.nocobase.com/cn/system-management/localization)<br />[Lina：ローカライゼーションエンジニア](https://docs.nocobase.com/cn/ai-employees/built-in/lina)<br>[Lina とローカル HY-MT1.5-1.8B を使用してローカライゼーション語句を翻訳](https://docs.nocobase.com/cn/ai-employees/scenarios/localization-hy-mt)
* **[カレンダー]** カレンダープラグインで client v2 をサポート。 ([#9464](https://github.com/nocobase/nocobase/pull/9464)) by @jiannx
* **[ブロック：ツリー]** ツリーフィルターブロックで client-v2 をサポート。 ([#9466](https://github.com/nocobase/nocobase/pull/9466)) by @jiannx
* **[ファイルストレージ：S3 (Pro)]** v2 ファイルマネージャーで、S3 Pro ストレージを使用したファイルアップロードをサポート。 by @Molunerfinn

### 🚀 機能改善

* **[build]**`deleteServerFiles` の回帰テストを追加し、Windows および POSIX パス環境で `client` と `client-v2` のビルド成果物が誤って削除されないように改善。 ([#9318](https://github.com/nocobase/nocobase/pull/9318)) by @Molunerfinn
* **[client]** 一対多関係テーブルブロックの関連付け操作で、ポップアップ選択ブロックから関連付け済みデータを除外するように改善 ([#9448](https://github.com/nocobase/nocobase/pull/9448)) by @katherinehhh
* **[AI 従業員]** AI 従業員の並列セッションにおけるインタラクションとパフォーマンスを改善 ([#9462](https://github.com/nocobase/nocobase/pull/9462)) by @cgyrock
* **[ファイルマネージャー]** サードパーティストレージプラグインが、v2 ファイルマネージャーの設定ページでカスタムストレージタイプフォームを登録できるように改善。 ([#9439](https://github.com/nocobase/nocobase/pull/9439)) by @Molunerfinn
* **[AI: ナレッジベース]** ナレッジベース作成時に一意キーを指定できるように by @cgyrock

### 🐛 不具合修正

* **[client]**
  * テーブル内の関連フィールドでクイック編集が表示され、編集ポップアップを開けてしまう問題を修正 ([#9469](https://github.com/nocobase/nocobase/pull/9469)) by @katherinehhh
  * v2 データブロックの複数選択フィールドで、選択肢ラベルではなく選択肢値が表示される問題を修正 ([#9472](https://github.com/nocobase/nocobase/pull/9472)) by @katherinehhh
  * フィルターフォームにデフォルト値がある場合、テーブル初期化時にリクエストが重複する問題を修正 ([#9423](https://github.com/nocobase/nocobase/pull/9423)) by @zhangzhonghe
  * 古いデフォルト値設定を削除できない問題を修正。 ([#9470](https://github.com/nocobase/nocobase/pull/9470)) by @gchust
  * フィールド値の割り当てで、関係フィールドの選択フィールドから定数フィールドを選択できない問題を修正。 ([#9088](https://github.com/nocobase/nocobase/pull/9088)) by @gchust
  * システム設定を送信した後、ページが空白で表示される問題を修正 ([#9458](https://github.com/nocobase/nocobase/pull/9458)) by @zhangzhonghe
  * テーブルブロックのイベントフローでデータの選択を解除した際に、対象ブロックのデータ範囲が正しく設定されない問題を修正。 ([#9443](https://github.com/nocobase/nocobase/pull/9443)) by @gchust
  * v2 テーブルで関係フィールドのタイトルフィールドを変更するとエラーが発生する問題を修正 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) by @katherinehhh
  * V2 連動ルールでフィールドのオプション設定をサポートするよう修正 ([#9399](https://github.com/nocobase/nocobase/pull/9399)) by @jiannx
* **[client-v2]**
  * v2 レイアウトで v1 メニューを除外した後、空のグループが残る問題を修正 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) by @zhangzhonghe
  * プラグイン有効化ポップアップを開いた後、背後のページが空白になる問題を修正 ([#9455](https://github.com/nocobase/nocobase/pull/9455)) by @zhangzhonghe
  * 本番ビルド環境で、v1 管理画面が v2 プラグインモジュールを参照するとクラッシュする問題を修正。 ([#9460](https://github.com/nocobase/nocobase/pull/9460)) by @Molunerfinn
* **[cli-v1]** create-nocobase-app で作成したアプリが、開発起動時に app-dev クライアントパスの解析エラーによりビルドに失敗する問題を修正。 ([#9465](https://github.com/nocobase/nocobase/pull/9465)) by @Molunerfinn
* **[server]** fix(file-manager): ローカル/公開ストレージ内のリスクのあるコンテンツを含むファイルを強制的にダウンロードさせるよう修正 ([#9437](https://github.com/nocobase/nocobase/pull/9437)) by @mytharcher
* **[AI 従業員]**
  * AI プラグインの起動に失敗する問題を修正 ([#9483](https://github.com/nocobase/nocobase/pull/9483)) by @cgyrock
  * Ollama のテスト実行で Key が不要な場合でも入力を求められる問題を修正 ([#9450](https://github.com/nocobase/nocobase/pull/9450)) by @cgyrock
* **[ブロック：ステップフォーム]** v1 ステップフォームブロックを全高に設定した後、ページにスクロールバーが表示される問題を修正 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) by @katherinehhh
* **[部門]** Users & Permissions 設定で、ユーザー追加ボタンと部門追加ボタンの翻訳が相互に影響する問題を修正 ([#9456](https://github.com/nocobase/nocobase/pull/9456)) by @katherinehhh
* **[ワークフロー]** FlowModel ワークフロー紐付けポップアップに、操作系イベントとカスタム操作イベントのヒント文言を再追加 ([#9447](https://github.com/nocobase/nocobase/pull/9447)) by @mytharcher
* **[Markdown]** v2 Markdown ブロックでエラーが発生する問題を修正 ([#9440](https://github.com/nocobase/nocobase/pull/9440)) by @zhangzhonghe
* **[ワークフロー：Webhook トリガー]** バリデーションルールによりレスポンスノードの作成に失敗する問題を修正 by @mytharcher
* **[ワークフロー：承認]**
  * モバイル端末で承認フォームのレイアウトが正しく表示されない問題を修正 by @zhangzhonghe
  * 承認の転送時に承認記録のインデックスが重複する問題を修正。 by @mytharcher
* **[バックアップマネージャー]** バックアップ時にファイルが見つからず、処理が失敗してエラーになる問題を修正。 by @gchust
