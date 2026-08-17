### 🚀 機能改善

* **[lock-manager]** ローカルロックのリース更新機能を追加し、`tryAcquire` で取得したロックが再利用時や例外発生時にも安全に解放されるようにしました。([#10368](https://github.com/nocobase/nocobase/pull/10368)) by @jiannx
* **[Redis 分散ロックアダプター]** Redis ロックのリース更新機能を追加し、再利用可能なロックハンドルが競合時や例外発生時にも安全に解放されるようにしました。 by @jiannx

### 🐛 不具合修正

* **[ファイルマネージャー]** 単一値フィールドで既存ファイルを選択した際に、追加の送信操作が必要になる問題を修正しました。([#10372](https://github.com/nocobase/nocobase/pull/10372)) by @zhangzhonghe
* **[データテーブルフィールド：Markdown (Vditor)]** v2 詳細ブロックの Markdown HTML プレビューがダークテーマで正しく表示されない問題を修正しました。([#10370](https://github.com/nocobase/nocobase/pull/10370)) by @katherinehhh
* **[データテーブルフィールド：暗号化]** 暗号化フィールドを含むコレクションを一括インポートした際に `model.changed is not a function` エラーが発生する問題を修正しました。 by @cgyrock
* **[ワークフロー：Webhook トリガー]** リクエストヘッダーを入力せずに Webhook ワークフローを手動実行すると 400 エラーが返される問題を修正しました。 by @mytharcher
