### 🚀 機能改善

* **[acl]**`acl.registerSnippet` による権限スニペット設定の統合に対応 ([#8155](https://github.com/nocobase/nocobase/pull/8155)) by @mytharcher
* **[権限管理]** ユーザーへの root ロール付与を禁止 ([#8180](https://github.com/nocobase/nocobase/pull/8180)) by @2013xile

### 🐛 不具合修正

* **[ライセンス設定]**
  * plugin-license の TypeScript ビルド時に発生していた不具合を修正 ([#8183](https://github.com/nocobase/nocobase/pull/8183)) by @jiannx
  * ライセンス処理を改善し、案内用のメッセージを追加 ([#7993](https://github.com/nocobase/nocobase/pull/7993)) by @jiannx
* **[ファイルマネージャー]** OSS 上の `.txt` ファイルをプレビューした際に、日本語以外の文字が文字化けして表示される不具合を修正 ([#8161](https://github.com/nocobase/nocobase/pull/8161)) by @mytharcher
* **[操作：レコードインポート]** インポート後に発火する `afterCreate` イベントの完了を同期的に待機するよう修正 ([#8158](https://github.com/nocobase/nocobase/pull/8158)) by @2013xile
* **[データテーブル：外部データ接続（FDW）]** 大文字のテーブル名を使用した場合に読み込みが失敗する不具合を修正 by @2013xile
* **[データソース：外部 SQL Server]**`encrypt` および `trustServerCertificate` オプションが利用できない不具合を修正 by @2013xile
