### 🎉 新機能

* **[client]** テーブル行クリックイベントに対応し、行をクリックした際に任意の処理を実行できるようになりました（[#7622](https://github.com/nocobase/nocobase/pull/7622)）@zhangzhonghe
* **[ワークフロー：承認]** 承認トリガーで申請書番号（承認ドキュメント番号）の変数が利用可能になりました @mytharcher

### 🐛 不具合修正

* **[flow-engine]** antdコンポーネントの翻訳が反映されない問題を修正（[#7621](https://github.com/nocobase/nocobase/pull/7621)）@zhangzhonghe
* **[データソース：メインDB]** 逆リレーションフィールド作成後に複数ノードでメタデータが同期されない問題を修正（[#7628](https://github.com/nocobase/nocobase/pull/7628)）@mytharcher
* **[plugin-demo-platform]** デモ環境でアプリを自動終了できるように対応 @jiannx
* **[マルチアプリ]**
  * マルチアプリのデータ移行時にhooksが発火しない問題を修正 @jiannx
  * マルチアプリのプロキシ機能でキャッシュをサポート @jiannx
