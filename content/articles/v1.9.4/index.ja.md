### 🚀 機能改善

* **[権限管理]** リレーションフィールドに関連する操作の権限制御ロジックを最適化 ([#7800](https://github.com/nocobase/nocobase/pull/7800)) by @2013xile
* **[ワークフロー：JavaScript ノード]** 実行環境に渡された上位関数によるセキュリティ脆弱性を修正し、上位実行環境への不正アクセスを防止 by @mytharcher
* **[認証：OIDC]** リクエストのタイムアウト時間を延長 by @2013xile

### 🐛 不具合修正

* **[サーバー]** サービス分割モード有効時に、ワーカープロセスがメッセージを送信するとエラーが発生する問題を修正 ([#7797](https://github.com/nocobase/nocobase/pull/7797)) by @mytharcher
* **[クライアント]** 詳細ブロックのシンプルページネーションで空データの次ページが表示される問題を修正 ([#7784](https://github.com/nocobase/nocobase/pull/7784)) by @katherinehhh
* **[ワークフロー]**
  * ワークフローのログに `workflowId` のデータ識別子を追加 ([#7789](https://github.com/nocobase/nocobase/pull/7789)) by @mytharcher
  * サービス分割モードでワークフロープラグインがサービスモード外でもキューを消費してしまう問題を修正 ([#7820](https://github.com/nocobase/nocobase/pull/7820)) by @mytharcher
* **[ユーザー]** フィールド名が snake\_case 形式の場合、インデックスフィールドのリセットが正しく行われない問題を修正 ([#7785](https://github.com/nocobase/nocobase/pull/7785)) by @2013xile
* **[ワークフロー：カスタム変数ノード]** 変数ノードで config が欠落している際に発生するエラーを修正 by @mytharcher
