### 🚀 機能改善

* **[クライアント]** JSフィールドモデルがリレーションフィールドをサポート（[#7618](https://github.com/nocobase/nocobase/pull/7618)）@gchust
* **[AI エージェント]**
  * OpenAI LLM プロバイダーをリファクタリングし、Completions API と Chat Completions API をそれぞれサポートする2つの独立したプロバイダーに分割（[#7615](https://github.com/nocobase/nocobase/pull/7615)）@cgyrock
  * 新しい LLM プロバイダー Ollama を追加（[#7612](https://github.com/nocobase/nocobase/pull/7612)）@ReLaMi96

### 🐛 不具合修正

* **[ワークフロー：承認]**
  * 追加承認者を設定した後、未処理タスク数が更新されない問題を修正 @mytharcher
  * 承認送信後にデータベースエラーが発生した際、トランザクションがロールバックされずタイムアウトする問題を修正 @mytharcher
