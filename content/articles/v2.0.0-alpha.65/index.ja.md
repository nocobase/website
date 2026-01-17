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
