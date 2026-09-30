### 🎉 新機能

* **[AI employees]** OpenCode Zen / Go を LLM サービスとして利用できるようになり、必要な会話リクエストヘッダーを自動送信するようにしました。DeepSeek Flash シリーズのモデルは画像添付に対応し、Web 検索は DeepSeek V4 Pro のみで利用可能です。これにより、Flash モデルが検索を暗黙的に無視して古い情報を返すことを防ぎます。([#10551](https://github.com/nocobase/nocobase/pull/10551)) by @cgyrock

### 🚀 機能改善

* **[client-v2]** テーブル列のクイック編集で、リレーションフィールドのデータ範囲を設定できるようになりました。([#10547](https://github.com/nocobase/nocobase/pull/10547)) by @katherinehhh

### 🐛 不具合修正

* **[client-v2]** ログアウト後に別のアカウントでログインすると 404 ページが表示される問題を修正しました。([#10549](https://github.com/nocobase/nocobase/pull/10549)) by @zhangzhonghe
* **[操作：一括更新]** 一括更新操作で、データテーブルの選択肢フィールドに存在しなくなった設定値が送信される問題を修正しました。([#10540](https://github.com/nocobase/nocobase/pull/10540)) by @jiannx
* **[ワークフロー]** データベース同期時に jobs のステータスと ID の複合インデックスが作成されない問題を修正しました。([#10552](https://github.com/nocobase/nocobase/pull/10552)) by @mytharcher
