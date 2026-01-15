週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.36](https://www.nocobase.com/ja/blog/v1.9.36)

*リリース日：2026-01-10*

### 🚀 機能改善

* **[client]** webkit ネイティブ CSS によるテキスト省略表示を採用し、プラグインマネージャー一覧の表示パフォーマンスを向上 ([#8391](https://github.com/nocobase/nocobase/pull/8391)) by @mytharcher

### 🐛 不具合修正

* **[ファイルマネージャー]** S3 ストレージエンジンにアップロードしたファイルの URL が正しく生成されない問題を修正 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) by @mytharcher
* **[ファイルストレージ：S3 (Pro)]** ファイルのリネームモードが動作しない不具合を修正 by @mytharcher
* **[ワークフロー：承認]**`ValueBlock.Result` コンポーネントが注入されていないことにより、値ブロックの内容が表示されない問題を修正 by @mytharcher

### [v1.9.35](https://www.nocobase.com/ja/blog/v1.9.35)

*リリース日：2026-01-09*

### 🚀 機能改善

* **[ワークフロー：承認]** クエリパラメータを整理し、検索パフォーマンスを向上 by @mytharcher

### 🐛 不具合修正

* **[ワークフロー：Webhook トリガー]** サブアプリケーションで webhook リクエストが 404 エラーを返してしまう問題を修正 by @mytharcher

### [v1.9.34](https://www.nocobase.com/ja/blog/v1.9.34)

*リリース日：2026-01-08*

### 🚀 機能改善

* **[権限管理]** ネストされたリレーションフィールドを編集する際の権限判定ロジックをより適切に処理できるよう改善 ([#7856](https://github.com/nocobase/nocobase/pull/7856)) by @2013xile

### 🐛 不具合修正

* **[client]**
  * フォームブロック内で、外部データソースのリレーションテーブルにおけるリレーションフィールドのデータが読み込まれない不具合を修正 ([#8356](https://github.com/nocobase/nocobase/pull/8356)) by @katherinehhh
  * `FilterAction` コンポーネントにおいて、リレーションフィールドの表示内容が正しくない問題を修正 ([#8295](https://github.com/nocobase/nocobase/pull/8295)) by @mytharcher
* **[logger]** システムログ出力時に、付加的なエラー情報が失われてしまう問題を修正 ([#8367](https://github.com/nocobase/nocobase/pull/8367)) by @cgyrock
* **[ワークフロー：ループノード]** 条件分岐内で失敗したノードの状態が上位分岐に引き継がれず、フローが誤動作する問題を修正 ([#8360](https://github.com/nocobase/nocobase/pull/8360)) by @mytharcher
* **[データソース：メインデータベース]** ビュー用テーブルのメタデータに、元のフィールド情報が正しく含まれるよう修正 ([#8337](https://github.com/nocobase/nocobase/pull/8337)) by @2013xile
* **[ワークフロー]**
  * ワークフローのCCノードにおいて、詳細ブロックの連動ルールが反映されない不具合を修正 ([#8381](https://github.com/nocobase/nocobase/pull/8381)) by @zhangzhonghe
  * クラスタ環境でのID衝突を防ぐため、ノード実行履歴のSnowflake IDにインスタンスID設定を追加 ([#8382](https://github.com/nocobase/nocobase/pull/8382)) by @mytharcher
  * ワークフロー削除後に、実行計画ページがクラッシュする問題を修正 ([#8361](https://github.com/nocobase/nocobase/pull/8361)) by @mytharcher
* **[操作：レコードのインポート]** xlsxファイルの非同期インポート時に一意制約エラーが発生した場合、正しいエラーメッセージが表示されない不具合を修正 ([#8342](https://github.com/nocobase/nocobase/pull/8342)) by @cgyrock
* **[権限管理]**
  * リレーションフィールドを、ターゲットキーを用いて関連付けできるよう対応 ([#8352](https://github.com/nocobase/nocobase/pull/8352)) by @2013xile
  * リレーションフィールドの権限処理時に、誤ったデータソースが参照される問題を修正 ([#8370](https://github.com/nocobase/nocobase/pull/8370)) by @2013xile
* **[データソース：REST API]** リクエストコンテキストに耐障害処理を追加し、メソッド未定義時にエラーが発生しないよう改善 by @mytharcher
* **[操作：レコードのエクスポート Pro]** メインアプリでインポート／エクスポートProプラグインが有効でない場合に、サブアプリで非同期インポート／エクスポートタスクを実行するとエラーになる不具合を修正 by @cgyrock
* **[ワークフロー：承認]** フィルターフィールドがタスクセンターで正常に利用できない問題を修正 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.10](https://www.nocobase.com/ja/blog/v2.0.0-beta.10)

*リリース日：2026-01-14*

### 🚀 機能改善

* **[client]** イベントフローにおいて、実行タイミングを指定できるように改善 ([#8340](https://github.com/nocobase/nocobase/pull/8340)) by @gchust
* **[AI 従業員]**
  * AI 従業員のメインエントリーボタンのデザインと操作性を改善 ([#8414](https://github.com/nocobase/nocobase/pull/8414)) by @heziqiang
  * エントリー一覧から構成系の AI 従業員を非表示にし、LLM 連携フローを最適化、あわせて Gemini-3 モデル関連ドキュメントを更新 ([#8409](https://github.com/nocobase/nocobase/pull/8409)) by @heziqiang
* **[通知：サイト内メッセージ]** 多数のユーザーへサイト内メッセージを送信する際のパフォーマンスを改善 ([#8402](https://github.com/nocobase/nocobase/pull/8402)) by @mytharcher

### 🐛 不具合修正

* **[client]**
  * 数値入力コンポーネントで値が表示されない不具合を修正 ([#8410](https://github.com/nocobase/nocobase/pull/8410)) by @chenos
  * 新規作成フォームにおいて、カスケードコンポーネントが正常に送信された後も値がクリアされない問題を修正 ([#8403](https://github.com/nocobase/nocobase/pull/8403)) by @katherinehhh
  * 送信ボタンに二重確認と必須チェックのスキップを同時に設定した場合、必須チェックのスキップが有効にならない不具合を修正 ([#8400](https://github.com/nocobase/nocobase/pull/8400)) by @katherinehhh
  * ファイル関連テーブルの一対一リレーションフィールドで、ファイル選択ダイアログ右下に送信ボタンが表示されてしまう問題を修正 ([#8398](https://github.com/nocobase/nocobase/pull/8398)) by @katherinehhh
  * グリッドカードブロックで layout 設定にコロンがない場合、設定が反映されない不具合を修正 ([#8399](https://github.com/nocobase/nocobase/pull/8399)) by @katherinehhh
  * フォームの数値入力欄に漢字を入力した際、値の代入が防止されない問題を修正 ([#8397](https://github.com/nocobase/nocobase/pull/8397)) by @katherinehhh
* **[データテーブルフィールド：多対多（配列）]** 関連クエリ時に、二次関連テーブルが多対多（配列）の場合にエラーが発生する不具合を修正 ([#8406](https://github.com/nocobase/nocobase/pull/8406)) by @cgyrock
* **[マルチスペース]**
  * 関連データ追加時に、関連スペースが正しく設定されるよう改善 by @jiannx
  * スペースセレクターのカラーがテーマ設定に追従するよう改善 by @jiannx

### [v2.0.0-beta.9](https://www.nocobase.com/ja/blog/v2.0.0-beta.9)

*リリース日：2026-01-12*

### 🚀 機能改善

* **[client]** webkit ネイティブ CSS によるテキスト省略表示を採用し、プラグインマネージャー一覧の表示パフォーマンスを向上 ([#8391](https://github.com/nocobase/nocobase/pull/8391)) by @mytharcher

### 🐛 不具合修正

* **[ファイルマネージャー]** S3 ストレージエンジンにアップロードしたファイルの URL が正しく生成されない問題を修正 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) by @mytharcher
* **[ワークフロー]** ワークフロー複製後、ノード設定内の画面設定 ID が更新されない不具合を修正 ([#8396](https://github.com/nocobase/nocobase/pull/8396)) by @mytharcher
* **[ファイルストレージ：S3 (Pro)]** ファイルのリネームモードが動作しない問題を修正 by @mytharcher
* **[テンプレート印刷]** テンプレート設定用ダイアログが画面上で遮られて表示される問題を修正 by @zhangzhonghe
* **[ワークフロー：承認]**`ValueBlock.Result` コンポーネントが注入されていないため、値ブロックの内容が表示されない問題を修正 by @mytharcher

### [v2.0.0-beta.8](https://www.nocobase.com/ja/blog/v2.0.0-beta.8)

*リリース日：2026-01-09*

### 🚀 機能改善

* **[cli]** 環境変数を利用して CDN のベース URL を設定できるように改善 ([#8384](https://github.com/nocobase/nocobase/pull/8384)) by @chenos
* **[AI 従業員]** Anthropic および Claude-4.5 に対応 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) by @heziqiang

### 🐛 不具合修正

* **[client]** targetKey の選択可能フィールドに関する処理ロジックの不具合を修正 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh
* **[ワークフロー：承認]** 不正なパラメータ設定によりデータ読み込みが失敗する問題を修正 by @mytharcher

### [v2.0.0-beta.7](https://www.nocobase.com/ja/blog/v2.0.0-beta.7)

*リリース日：2026-01-09*

### 🎉 新機能

* **[test]** デフォルトのタスクマネージャーに、プロセス単位での並行実行制御を追加 ([#8343](https://github.com/nocobase/nocobase/pull/8343)) by @cgyrock
* **[AI 従業員]** Gemini-3 モデルに対応し、関数呼び出しを含む思考プロセスのシグネチャ機能を利用可能に ([#8377](https://github.com/nocobase/nocobase/pull/8377)) by @heziqiang

### 🚀 機能改善

* **[flow-engine]** 行の順序を安定して保持できるよう、GridModel に `rowOrder` フィールドを追加 ([#8371](https://github.com/nocobase/nocobase/pull/8371)) by @zhangzhonghe
* **[AI 従業員]**
  * システムプロンプトを自由に編集できるようにし、自動更新にも対応 ([#8378](https://github.com/nocobase/nocobase/pull/8378)) by @heziqiang
  * LLM サービスおよびモデルレイヤーにおける AI のエラー処理を最適化 ([#8351](https://github.com/nocobase/nocobase/pull/8351)) by @heziqiang
* **[ファイルマネージャー]** OSS ストレージエンジンにリクエスト設定を追加し、サーバーからファイル取得時に追加のリクエストパラメータを渡せるよう改善 ([#8372](https://github.com/nocobase/nocobase/pull/8372)) by @mytharcher

### 🐛 不具合修正

* **[client]**
  * リレーションフィールドをデータセレクターから選択コンポーネントに切り替えた後も、ダイアログを開けてしまう不具合を修正 ([#8375](https://github.com/nocobase/nocobase/pull/8375)) by @gchust
  * 詳細・編集フォームおよびリストブロックにおいて、ページ切り替え後に連動ルールが再実行されない問題を修正 ([#8366](https://github.com/nocobase/nocobase/pull/8366)) by @gchust
  * フィールドコンポーネントの切り替え時に、設定済みのサブフォーム／サブテーブル内フィールドが表示されなくなる不具合を修正 ([#8365](https://github.com/nocobase/nocobase/pull/8365)) by @gchust
* **[logger]** システムログ出力時に、付加的なエラー情報が失われる不具合を修正 ([#8367](https://github.com/nocobase/nocobase/pull/8367)) by @cgyrock
* **[ブロック：テンプレート（廃止済み）]** 継承テンプレート（v1）の編集ページを開けない問題を修正 ([#8376](https://github.com/nocobase/nocobase/pull/8376)) by @gchust
* **[ワークフロー]**
  * クラスタ環境での ID 衝突を防ぐため、ノード実行履歴の Snowflake ID にインスタンス ID 設定を追加 ([#8382](https://github.com/nocobase/nocobase/pull/8382)) by @mytharcher
  * ワークフローの CC ノードにおいて、詳細ブロックの連動ルールが反映されない問題を修正 ([#8381](https://github.com/nocobase/nocobase/pull/8381)) by @zhangzhonghe
  * ワークフロー削除後に、実行計画ページがクラッシュする不具合を修正 ([#8361](https://github.com/nocobase/nocobase/pull/8361)) by @mytharcher
* **[権限管理]** リレーションフィールドの権限処理時に、誤ったデータソースが参照される問題を修正 ([#8370](https://github.com/nocobase/nocobase/pull/8370)) by @2013xile
* **[データソース：REST API]** リクエストコンテキストに耐障害処理を追加し、メソッド未定義時にエラーが発生しないよう改善 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.64](https://www.nocobase.com/ja/blog/v2.0.0-alpha.64)

*リリース日：2026-01-08*

### 🎉 新機能

* **[AI 従業員]** Gemini-3 モデルに対応し、関数呼び出しを含む思考プロセスのシグネチャ機能を利用可能に ([#8377](https://github.com/nocobase/nocobase/pull/8377)) by @heziqiang

### 🚀 機能改善

* **[AI 従業員]**
  * LLM サービスおよびモデルレイヤーにおける AI のエラー処理を強化 ([#8351](https://github.com/nocobase/nocobase/pull/8351)) by @heziqiang
  * システムプロンプトを自由に編集できるようにし、自動更新にも対応 ([#8378](https://github.com/nocobase/nocobase/pull/8378)) by @heziqiang
* **[ファイルマネージャー]** OSS ストレージエンジンにリクエスト設定を追加し、サーバーからファイル取得時に追加パラメータを渡せるよう改善 ([#8372](https://github.com/nocobase/nocobase/pull/8372)) by @mytharcher

### 🐛 不具合修正

* **[logger]** システムログ出力時に、付加的なエラー情報が失われる不具合を修正 ([#8367](https://github.com/nocobase/nocobase/pull/8367)) by @cgyrock
* **[client]**
  * リレーションフィールドをデータセレクターから選択コンポーネントに切り替えた後も、ダイアログを開けてしまう不具合を修正 ([#8375](https://github.com/nocobase/nocobase/pull/8375)) by @gchust
  * 詳細・編集フォームおよびリストブロックで、ページ切り替え後に連動ルールが再実行されない問題を修正 ([#8366](https://github.com/nocobase/nocobase/pull/8366)) by @gchust
  * フィールドコンポーネントの切り替え時に、設定済みのサブフォーム／サブテーブル内フィールドが表示されなくなる不具合を修正 ([#8365](https://github.com/nocobase/nocobase/pull/8365)) by @gchust
* **[ワークフロー]**
  * ワークフローの CC ノードにおいて、詳細ブロックの連動ルールが反映されない問題を修正 ([#8381](https://github.com/nocobase/nocobase/pull/8381)) by @zhangzhonghe
  * ワークフロー削除後に、実行計画ページがクラッシュする不具合を修正 ([#8361](https://github.com/nocobase/nocobase/pull/8361)) by @mytharcher
* **[権限管理]** リレーションフィールドの権限処理時に、誤ったデータソースが参照される問題を修正 ([#8370](https://github.com/nocobase/nocobase/pull/8370)) by @2013xile
