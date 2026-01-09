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
