### 🎉 新機能

* **[AIワーカー]** LLM プロバイダーとして OrcaRouter を追加しました。 ([#10003](https://github.com/nocobase/nocobase/pull/10003)) by @jinhaosong-source

### 🚀 機能改善

* **[ワークフロー]** 条件ノードから算術演算子を削除しました。 ([#10019](https://github.com/nocobase/nocobase/pull/10019)) by @mytharcher

### 🐛 不具合修正

* **[client-v2]**
  * 実行時編集モーダルでレコードを切り替えた際、連動フィールドの状態が残ってしまう問題を修正しました。 ([#10010](https://github.com/nocobase/nocobase/pull/10010)) by @katherinehhh
  * フィルターフォームのリレーションフィールドに設定したデフォルト値をクリアできない問題を修正しました。 ([#10022](https://github.com/nocobase/nocobase/pull/10022)) by @gchust
* **[ファイルマネージャー]**
  * ファイルアップロード時に、設定されたストレージの MIME type ルールで明示的に許可されていない限り、アクティブコンテンツとして扱われるファイル名を拒否するようにしました。 ([#10021](https://github.com/nocobase/nocobase/pull/10021)) by @mytharcher
    参考：[ローカルストレージ](https://docs.nocobase.com/file-manager/storage/local), [セキュリティガイド](https://docs.nocobase.com/security/guide)
  * v2 データテーブル管理で Attachment フィールドのインターフェースが欠落している問題を修正しました。また、公開フォームのファイルリレーションフィールドで画像をアップロードする際のプリフライトチェックも修正しました。 ([#10012](https://github.com/nocobase/nocobase/pull/10012)) by @katherinehhh
* **[データソースマネージャー]** V2 データテーブルのフィールド追加メニューから、旧 Attachment フィールドのインターフェースを非表示にしました。 ([#10018](https://github.com/nocobase/nocobase/pull/10018)) by @katherinehhh
* **[データ可視化]** チャートの再レンダリング後、クリック操作が効かなくなる場合がある問題を修正しました。 ([#10031](https://github.com/nocobase/nocobase/pull/10031)) by @2013xile
* **[マイグレーションマネージャー]** マイグレーション後、アプリが修復画面で止まる可能性がある問題を修正しました。 by @2013xile
* **[アプリケーションスーパーバイザー]** アプリの JWT シークレット分離を修正しました。独立したシークレットを有効にした後、サブアプリが主アプリのトークンを受け入れないようになりました。 by @2013xile
