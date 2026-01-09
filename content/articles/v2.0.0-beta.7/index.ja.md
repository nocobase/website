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
