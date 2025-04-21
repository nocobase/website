### 🎉 新機能

* **[部署（部門）]** 部署（部門）、添付ファイルの URL、およびワークフローの応答メッセージのプラグインを無料化しました（[#6663](https://github.com/nocobase/nocobase/pull/6663)） by @chenos
* **[アクション：一括更新]** あるデータブロック内のデータを更新した後、他のデータブロック内のデータを更新する機能をサポートします（[#6591](https://github.com/nocobase/nocobase/pull/6591)） by @zhangzhonghe

### 🚀 機能改善

* **[ワークフロー]** ワークフロータスクに固定のポップアップ URL をサポートします（[#6640](https://github.com/nocobase/nocobase/pull/6640)） by @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * グループメニューに切り替えたとき、すでにメニューで非表示にされているページにジャンプしないようにする問題（[#6654](https://github.com/nocobase/nocobase/pull/6654)） by @zhangzhonghe
  * フィルターフォームに「保存されていない変更」のプロンプトが表示されるべきではない問題（[#6657](https://github.com/nocobase/nocobase/pull/6657)） by @zhangzhonghe
  * プレビュー画像が隠れる問題を修正（[#6651](https://github.com/nocobase/nocobase/pull/6651)） by @zhangzhonghe
  * フィルターフォームで、フィルターボタンをクリックしたとき、バリデーションを通過していないフィールドがあるにもかかわらず、フィルタリングがトリガーされる問題（[#6659](https://github.com/nocobase/nocobase/pull/6659)） by @zhangzhonghe
  * 関係フィールドにおける「複数選択を許可」オプションが機能しない問題（[#6661](https://github.com/nocobase/nocobase/pull/6661)） by @katherinehhh
  * フォームブロックで、フィールド設定のデフォルト値が最初は元の変数文字列として表示され、その後消えてしまう問題（[#6649](https://github.com/nocobase/nocobase/pull/6649)） by @zhangzhonghe
* **[コレクションフィールド：添付ファイル (URL)]** パブリック URL アクセスが可能なファイルコレクションのみを許可する（[#6664](https://github.com/nocobase/nocobase/pull/6664)） by @katherinehhh
* **[ファイルストレージ: S3 (Pro)]**
  * 個別の baseurl とパブリック設定を行い、S3 pro ストレージの設定のユーザーエクスペリエンスを向上させる by @jiannx
  * 言語を整理する by @jiannx
* **[ワークフロー：承認]** タスクセンター内の承認アイテムに固定の URL をサポートする by @mytharcher
* **[マイグレーションマネージャー]** マイグレーション中に環境変数のポップアップが表示された場合、自動バックアップをスキップするオプションが無効になる問題 by @gchust
