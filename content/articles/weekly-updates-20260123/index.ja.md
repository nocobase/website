週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.39](https://www.nocobase.com/ja/blog/v1.9.39)

*リリース日：2026-01-21*

### 🐛 不具合修正

* **[server]** 共通依存関係に含まれる `mathjs` パッケージのバージョン不整合を修正 ([#8475](https://github.com/nocobase/nocobase/pull/8475)) by @mytharcher
* **[client]** Chrome バージョン 144 において、設定メニューが表示されない不具合を修正 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) by @zhangzhonghe
* **[非同期タスクマネージャー]** 非同期インポートによってトリガーされるワークフローイベントの実行が遅延する問題を修正 ([#8478](https://github.com/nocobase/nocobase/pull/8478)) by @mytharcher
* **[操作：レコードのインポート Pro]** 非同期インポート実行時に、ワークフローイベントの処理が遅延する不具合を修正 by @mytharcher

### [v1.9.38](https://www.nocobase.com/ja/blog/v1.9.38)

*リリース日：2026-01-20*

### 🚀 機能改善

* **[server]** CORS の Origin ホワイトリストを設定できるように改善 ([#8454](https://github.com/nocobase/nocobase/pull/8454)) by @2013xile
* **[エラーハンドラー]** SQL の参照エラーがそのまま外部に表示されないよう処理を改善 ([#8464](https://github.com/nocobase/nocobase/pull/8464)) by @2013xile

### 🐛 不具合修正

* **[client]**
  * データテーブルのフィールドグループ並び替え設定が反映されない不具合を修正 ([#8453](https://github.com/nocobase/nocobase/pull/8453)) by @katherinehhh
  * データテーブルの GUI 編集画面でエラーが発生する問題を修正 ([#8451](https://github.com/nocobase/nocobase/pull/8451)) by @katherinehhh
  * テーブルの「列設定」ボタンが反応しない不具合を修正 ([#8441](https://github.com/nocobase/nocobase/pull/8441)) by @zhangzhonghe
  * テーブル行ボタンの連動ルールが、ダイアログフォーム内のボタン状態に影響してしまう問題を修正 ([#8434](https://github.com/nocobase/nocobase/pull/8434)) by @zhangzhonghe
* **[モバイル（廃止）]** モバイル向けプラグインを廃止し、2.0 以降は ui-layout プラグインへ移行 ([#8456](https://github.com/nocobase/nocobase/pull/8456)) by @chenos

### [v1.9.37](https://www.nocobase.com/ja/blog/v1.9.37)

*リリース日：2026-01-15*

### 🚀 機能改善

* **[evaluators]** より多くの関数を利用できるよう、math.js パッケージを最新版へ更新 ([#8411](https://github.com/nocobase/nocobase/pull/8411)) by @mytharcher
* **[通知：サイト内メッセージ]** 多数のユーザーへサイト内メッセージを送信する際のパフォーマンスを改善 ([#8402](https://github.com/nocobase/nocobase/pull/8402)) by @mytharcher

### 🐛 不具合修正

* **[client]**
  * 新規作成フォームにおいて、送信後もカスケードコンポーネントの値がクリアされない不具合を修正 ([#8403](https://github.com/nocobase/nocobase/pull/8403)) by @katherinehhh
  * 操作ボタンの schema に耐障害処理を追加し、クリック時にページがクラッシュする問題を防止 ([#8420](https://github.com/nocobase/nocobase/pull/8420)) by @mytharcher
  * 送信ボタンに二重確認と必須チェックのスキップを同時設定した場合、必須チェックのスキップが有効にならない不具合を修正 ([#8400](https://github.com/nocobase/nocobase/pull/8400)) by @katherinehhh
* **[データテーブルフィールド：多対多（配列）]** 関連クエリ時に、二次関連テーブルが多対多（配列）の場合にエラーが発生する不具合を修正 ([#8406](https://github.com/nocobase/nocobase/pull/8406)) by @cgyrock
* **[ワークフロー]** ワークフロー複製後、ノード設定内の画面設定 ID が更新されない問題を修正 ([#8396](https://github.com/nocobase/nocobase/pull/8396)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.13](https://www.nocobase.com/ja/blog/v2.0.0-beta.13)

*リリース日：2026-01-19*

### 🚀 機能改善

* **[server]** CORS の Origin ホワイトリストを設定できるように改善 ([#8454](https://github.com/nocobase/nocobase/pull/8454)) by @2013xile
* **[操作：レコードのエクスポート]** エクスポート時の対象データ範囲を見直し、選択中のレコードを優先し、次にフロントエンドのフィルター条件を適用するよう改善 ([#8442](https://github.com/nocobase/nocobase/pull/8442)) by @katherinehhh
* **[操作：レコードのエクスポート Pro]** エクスポート対象データの判定ロジックを改善し、選択レコードを最優先、次にフロントエンドのフィルター条件を適用 by @katherinehhh

### 🐛 不具合修正

* **[client]**
  * カスタム変数設定用ダイアログが画面上で遮られて表示される問題を修正 ([#8463](https://github.com/nocobase/nocobase/pull/8463)) by @zhangzhonghe
  * データテーブルの GUI 編集画面でエラーが発生する不具合を修正 ([#8451](https://github.com/nocobase/nocobase/pull/8451)) by @katherinehhh
  * データテーブルのフィールドグループ並び替え設定が反映されない問題を修正 ([#8453](https://github.com/nocobase/nocobase/pull/8453)) by @katherinehhh
  * クイック操作ダイアログの高さが画面を超えてしまう不具合を修正 ([#8437](https://github.com/nocobase/nocobase/pull/8437)) by @zhangzhonghe
  * テーブル行ボタンの連動ルールが、ダイアログフォーム内のボタン状態に影響してしまう問題を修正 ([#8434](https://github.com/nocobase/nocobase/pull/8434)) by @zhangzhonghe
  * ページ切り替え時に、テーブルブロックの操作列の状態が正しく更新されない問題を修正 ([#8438](https://github.com/nocobase/nocobase/pull/8438)) by @gchust
  * テーブルの「列設定」ボタンが反応しない不具合を修正 ([#8441](https://github.com/nocobase/nocobase/pull/8441)) by @zhangzhonghe
  * リレーションファイルのクイック編集時に、ファイル選択ダイアログの表示階層が不正となり、設定を保存できない問題を修正 ([#8446](https://github.com/nocobase/nocobase/pull/8446)) by @gchust
* **[flow-engine]**
  * runjs 関連処理で、実行前に変数が評価されてしまう不具合を修正 ([#8445](https://github.com/nocobase/nocobase/pull/8445)) by @gchust
  * データセレクターのクイック追加ダイアログにおいて、ダイアログ変数を選択できない問題を修正 ([#8450](https://github.com/nocobase/nocobase/pull/8450)) by @gchust
  * 設定メニューを連続して操作した際に、複数の設定ダイアログが開いてしまう不具合を修正 ([#8448](https://github.com/nocobase/nocobase/pull/8448)) by @gchust
* **[モバイル（廃止）]** モバイル向けプラグインを廃止し、2.0 以降は ui-layout プラグインへ移行 ([#8456](https://github.com/nocobase/nocobase/pull/8456)) by @chenos
* **[フロントエンドフローエンジン]** ハイフン（-）を含む変数が正しく解析されない不具合を修正 ([#8432](https://github.com/nocobase/nocobase/pull/8432)) by @gchust
* **[メール管理]** メール設定ダイアログが画面上で遮られて表示される問題を修正 by @zhangzhonghe

### [v2.0.0-beta.12](https://www.nocobase.com/ja/blog/v2.0.0-beta.12)

*リリース日：2026-01-16*

### 🚀 機能改善

* **[フロントエンドフローエンジン]** 編集フォームに追加されていないフィールドについても、現在のフォーム変数から値を取得・解析できるよう改善 ([#8436](https://github.com/nocobase/nocobase/pull/8436)) by @gchust

### 🐛 不具合修正

* **[flow-engine]** ボタン操作でダイアログを開いた際に、動的イベントフローのステップが二重に実行される不具合を修正 ([#8435](https://github.com/nocobase/nocobase/pull/8435)) by @gchust
* **[テンプレート印刷]** バージョン 2.0 において、スペースフィールドが正しく表示されるよう修正 by @jiannx

### [v2.0.0-beta.11](https://www.nocobase.com/ja/blog/v2.0.0-beta.11)

*リリース日：2026-01-15*

### 🚀 機能改善

* **[evaluators]** より多くの関数を利用できるよう、math.js パッケージを最新版へ更新 ([#8411](https://github.com/nocobase/nocobase/pull/8411)) by @mytharcher
* **[client]** リッチテキストエディターで、フォントサイズ変更、画像サイズ変更、ソフト改行に対応 ([#8401](https://github.com/nocobase/nocobase/pull/8401)) by @jiannx
* **[AI 従業員]** ワークフローの実行結果を `execution.output` から取得する方式に統一し、出力ノードを利用することで安定した結果が得られるよう改善 ([#8423](https://github.com/nocobase/nocobase/pull/8423)) by @mytharcher

### 🐛 不具合修正

* **[client]**
  * 操作ボタンの schema に耐障害処理を追加し、クリック時にページがクラッシュする問題を防止 ([#8420](https://github.com/nocobase/nocobase/pull/8420)) by @mytharcher
  * フォームのリレーションフィールドにおいて、タイトルに添付ファイル URL を設定後、別のフィールドへ変更するとタイトル設定が消えてしまう不具合を修正 ([#8418](https://github.com/nocobase/nocobase/pull/8418)) by @katherinehhh
  * 新規作成フォームでリレーションフィールドを閲覧モードに設定した際、タイトルフィールドの切り替えが反映されない問題を修正 ([#8413](https://github.com/nocobase/nocobase/pull/8413)) by @katherinehhh
* **[フロントエンドフローエンジン]** filterByTk が配列の場合に、変数が正しく解析されない不具合を修正 ([#8412](https://github.com/nocobase/nocobase/pull/8412)) by @gchust
* **[テンプレート印刷]** スペースフィールドに対応 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.66](https://www.nocobase.com/ja/blog/v2.0.0-alpha.66)

*リリース日：2026-01-16*

### 🐛 不具合修正

* **[フロントエンドフローエンジン]** ハイフン（-）を含む変数が正しく解析されない不具合を修正 ([#8432](https://github.com/nocobase/nocobase/pull/8432)) by @gchust

### [v2.0.0-alpha.65](https://www.nocobase.com/ja/blog/v2.0.0-alpha.65)

*リリース日：2026-01-16*

### 🎉 新機能

* **[test]** デフォルトのタスクマネージャーに、プロセス単位での並行実行制御を追加 ([#8343](https://github.com/nocobase/nocobase/pull/8343)) by @cgyrock

### 🚀 機能改善

* **[client]**
  * リッチテキストエディターで、フォントサイズ変更、画像サイズ変更、ソフト改行に対応 ([#8401](https://github.com/nocobase/nocobase/pull/8401)) by @jiannx
  * イベントフローにおいて、実行タイミングを指定できるよう改善 ([#8340](https://github.com/nocobase/nocobase/pull/8340)) by @gchust
  * webkit ネイティブ CSS によるテキスト省略表示を採用し、プラグインマネージャー一覧の表示パフォーマンスを向上 ([#8391](https://github.com/nocobase/nocobase/pull/8391)) by @mytharcher
* **[evaluators]** より多くの関数を利用できるよう、math.js パッケージを最新版へ更新 ([#8411](https://github.com/nocobase/nocobase/pull/8411)) by @mytharcher
* **[cli]** 環境変数を用いて CDN のベースアドレスを設定できるよう改善 ([#8384](https://github.com/nocobase/nocobase/pull/8384)) by @chenos
* **[flow-engine]** 行順を安定して保持できるよう、GridModel に `rowOrder` フィールドを追加 ([#8371](https://github.com/nocobase/nocobase/pull/8371)) by @zhangzhonghe
* **[フロントエンドフローエンジン]** 編集フォームに追加されていないフィールドについても、現在のフォーム変数から値を取得できるよう改善 ([#8436](https://github.com/nocobase/nocobase/pull/8436)) by @gchust
* **[AI 従業員]**
  * AI 従業員のメインエントリーボタンの視認性と操作性を改善 ([#8414](https://github.com/nocobase/nocobase/pull/8414)) by @heziqiang
  * ワークフローの実行結果取得を `execution.output` に統一し、出力ノードの利用によって安定した結果が得られるよう改善 ([#8423](https://github.com/nocobase/nocobase/pull/8423)) by @mytharcher
  * エントリー一覧から構成系 AI 従業員を非表示にし、LLM 連携フローを最適化、あわせて Gemini-3 モデル関連ドキュメントを更新 ([#8409](https://github.com/nocobase/nocobase/pull/8409)) by @heziqiang
  * Anthropic および Claude-4.5 に対応 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) by @heziqiang
* **[通知：サイト内メッセージ]** 多数のユーザーへサイト内メッセージを送信する際のパフォーマンスを改善 ([#8402](https://github.com/nocobase/nocobase/pull/8402)) by @mytharcher

### 🐛 不具合修正

* **[client]**
  * クイック操作ダイアログの高さが画面を超えてしまう不具合を修正 ([#8437](https://github.com/nocobase/nocobase/pull/8437)) by @zhangzhonghe
  * テーブル行ボタンの連動ルールが、ダイアログフォームのボタン状態に影響する問題を修正 ([#8434](https://github.com/nocobase/nocobase/pull/8434)) by @zhangzhonghe
  * ページ切り替え時に、テーブルブロックの操作列状態が不正に引き継がれる問題を修正 ([#8438](https://github.com/nocobase/nocobase/pull/8438)) by @gchust
  * 操作ボタンの schema に耐障害処理を追加し、クリック時にページがクラッシュする問題を防止 ([#8420](https://github.com/nocobase/nocobase/pull/8420)) by @mytharcher
  * 新規作成フォームでリレーションフィールドを閲覧モードに設定した場合、タイトルフィールド切り替えが反映されない不具合を修正 ([#8413](https://github.com/nocobase/nocobase/pull/8413)) by @katherinehhh
  * 数値入力コンポーネントで値が表示されない不具合を修正 ([#8410](https://github.com/nocobase/nocobase/pull/8410)) by @chenos
  * リレーションフィールドのタイトルに添付ファイル URL を設定後、別のフィールドへ変更すると設定項目が消える問題を修正 ([#8418](https://github.com/nocobase/nocobase/pull/8418)) by @katherinehhh
  * 送信ボタンに二重確認と必須チェックのスキップを同時に設定した場合、必須チェックのスキップが有効にならない問題を修正 ([#8400](https://github.com/nocobase/nocobase/pull/8400)) by @katherinehhh
  * グリッドカードブロックで、layout 設定にコロンがないと反映されない不具合を修正 ([#8399](https://github.com/nocobase/nocobase/pull/8399)) by @katherinehhh
  * 新規作成フォームで、カスケードコンポーネント送信後に値がクリアされない問題を修正 ([#8403](https://github.com/nocobase/nocobase/pull/8403)) by @katherinehhh
  * 数値入力欄に漢字を入力した際、値の代入が防止されない不具合を修正 ([#8397](https://github.com/nocobase/nocobase/pull/8397)) by @katherinehhh
  * ファイル関連テーブルの一対一リレーションフィールドで、ファイル選択ダイアログ右下に送信ボタンが表示される問題を修正 ([#8398](https://github.com/nocobase/nocobase/pull/8398)) by @katherinehhh
  * targetKey の選択可能フィールドに関する処理ロジックを修正 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh
* **[flow-engine]** ダイアログを開く操作時に、動的イベントフローのステップが二重に実行される不具合を修正 ([#8435](https://github.com/nocobase/nocobase/pull/8435)) by @gchust
* **[フロントエンドフローエンジン]** filterByTk が配列の場合に、変数が正しく解析されない不具合を修正 ([#8412](https://github.com/nocobase/nocobase/pull/8412)) by @gchust
* **[ファイルマネージャー]** S3 ストレージエンジンにアップロードしたファイルの URL が正しく生成されない問題を修正 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) by @mytharcher
* **[データテーブルフィールド：多対多（配列）]** 関連クエリ時に、二次関連テーブルが多対多（配列）の場合にエラーが発生する不具合を修正 ([#8406](https://github.com/nocobase/nocobase/pull/8406)) by @cgyrock
* **[ワークフロー]**
  * ワークフロー複製後、ノード設定内の画面設定 ID が更新されない問題を修正 ([#8396](https://github.com/nocobase/nocobase/pull/8396)) by @mytharcher
  * クラスタ環境での ID 衝突を防ぐため、ノード実行履歴の Snowflake ID にインスタンス ID 設定を追加 ([#8382](https://github.com/nocobase/nocobase/pull/8382)) by @mytharcher
* **[ブロック：テンプレート（廃止済み）]** 継承テンプレート（v1）の編集ページを開けない問題を修正 ([#8376](https://github.com/nocobase/nocobase/pull/8376)) by @gchust
* **[データソース：REST API]** リクエストコンテキストに耐障害処理を追加し、メソッド未定義時にエラーが発生しないよう改善 by @mytharcher
* **[マルチスペース]**
  * 関連データ追加時に、関連スペースが正しく設定されるよう改善 by @jiannx
  * スペースセレクターのカラーがテーマ設定に追従するよう改善 by @jiannx
* **[テンプレート印刷]**
  * テンプレート設定ダイアログが画面上で遮られて表示される問題を修正 by @zhangzhonghe
  * スペースフィールドに対応 by @jiannx
  * バージョン 2.0 でスペースフィールドを表示可能に対応 by @jiannx
* **[ファイルストレージ：S3 (Pro)]** ファイルのリネームモードが動作しない不具合を修正 by @mytharcher
* **[ワークフロー：承認]**
  * 不正なパラメータ設定によりデータ読み込みが失敗する問題を修正 by @mytharcher
  * `ValueBlock.Result` コンポーネントが注入されていないため、値ブロックの内容が表示されない不具合を修正 by @mytharcher
* **[メール管理]**
  * 会話スレッドの不具合を修正 by @jiannx
  * 管理画面にフィルター機能を追加 by @jiannx
