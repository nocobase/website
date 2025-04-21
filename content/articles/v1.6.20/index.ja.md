### 🎉 新機能

* **[部署（部門）]** 部署（部門）、添付ファイルの URL、およびワークフローの応答メッセージのプラグインを無料化しました（[#6663](https://github.com/nocobase/nocobase/pull/6663)） by @chenos

### 🐛 不具合修正

* **[クライアント]**
  * フィルターフォームに「保存されていない変更」のプロンプトが表示されるべきではない問題を修正（[#6657](https://github.com/nocobase/nocobase/pull/6657)） by @zhangzhonghe
  * 関係フィールドにおける「複数選択を許可」オプションが機能しない問題（[#6661](https://github.com/nocobase/nocobase/pull/6661)） by @katherinehhh
  * フィルターフォームで、フィルターボタンをクリックしたとき、バリデーションを通過していないフィールドがあるにもかかわらず、フィルタリングがトリガーされる問題（[#6659](https://github.com/nocobase/nocobase/pull/6659)） by @zhangzhonghe
  * グループメニューに切り替えたとき、すでにメニューで非表示にされているページにジャンプしないようにする問題（[#6654](https://github.com/nocobase/nocobase/pull/6654)） by @zhangzhonghe
* **[ファイルストレージ: S3 (Pro)]**
  * 言語を整理する by @jiannx
  * 個別の baseurl とパブリック設定を行い、S3 pro ストレージの設定のユーザーエクスペリエンスを向上させる by @jiannx
* **[マイグレーションマネージャー]** マイグレーション中に環境変数のポップアップが表示された場合、自動バックアップをスキップするオプションが無効になる問題 by @gchust
