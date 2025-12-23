### 🚀 機能改善

* **[ワークフロー]** データテーブルイベントにおける「変更されたフィールド」設定の説明を見直し、誤解が生じにくい表現に改善 ([#8216](https://github.com/nocobase/nocobase/pull/8216)) by @mytharcher

### 🐛 不具合修正

* **[cli]** DB\_PASSWORD が未設定の場合でも license-kit が正しく動作するよう対応 ([#8220](https://github.com/nocobase/nocobase/pull/8220)) by @jiannx
* **[database]** メインデータソースと外部データソース間で、日付フィールドの検索結果が一致しない不具合を修正 ([#8181](https://github.com/nocobase/nocobase/pull/8181)) by @cgyrock
* **[ライセンス設定]** ライセンスプラグインの表示に関する不具合を修正 ([#8214](https://github.com/nocobase/nocobase/pull/8214)) by @jiannx
* **[ワークフロー：承認]**
  * 承認完了時にリレーションフィールドで不要な新規データが作成される不具合を修正 by @mytharcher
  * 承認完了時に多対多リレーションフィールドで不要な新規データが作成される不具合を修正 by @mytharcher
