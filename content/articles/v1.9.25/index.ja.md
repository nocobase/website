### 🚀 機能改善

* **[ワークフロー]**
  * 実行器の準備フェーズに耐障害性を持たせ、データ欠落によって処理が中断されるのを防止 ([#8156](https://github.com/nocobase/nocobase/pull/8156)) by @mytharcher
  * ワークフローキャンバスの関連データを遅延読み込みに変更し、パフォーマンスを改善 ([#8142](https://github.com/nocobase/nocobase/pull/8142)) by @mytharcher

### 🐛 不具合修正

* **[acl]** ロールが `root` の場合に `acl.can` API が `null` を返していた不具合を修正 ([#8150](https://github.com/nocobase/nocobase/pull/8150)) by @mytharcher
* **[ワークフロー：手動処理ノード]** 手動タスクリストで誤った一覧 API を使用していた不具合を修正 ([#8144](https://github.com/nocobase/nocobase/pull/8144)) by @mytharcher
* **[HTTP リクエスト暗号化]** qs の配列パース形式を brackets に統一 by @chenos
* **[ワークフロー：承認]** ワークフロー削除後に実行計画のキャンセルでエラーが発生していた不具合を修正 by @mytharcher
*
