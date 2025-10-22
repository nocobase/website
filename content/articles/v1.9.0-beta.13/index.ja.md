### 🚀 機能改善

* **[client]** フロントエンドで `mime` パッケージを使用し、ファイルのMIMEタイプをより正確に判定できるようにしました（[#7551](https://github.com/nocobase/nocobase/pull/7551)）@mytharcher
* **[データソース：メインDB]** フィールド検証エラーのローカライズ処理を見直し、エラーハンドリング用プラグイン側で対応するよう改善しました（[#7582](https://github.com/nocobase/nocobase/pull/7582)）@2013xile
* **[ワークフロー]** ノード削除時に「ブランチを残す」オプションを追加しました（[#7571](https://github.com/nocobase/nocobase/pull/7571)）@mytharcher
* **[ワークフロー：承認]** コア変更に対応するため、分岐設定をリファクタリングしました @mytharcher

### 🐛 不具合修正

* **[client]**
  * フィルターで日付フィールドをクリアした際に発生するエラーを修正（[#7632](https://github.com/nocobase/nocobase/pull/7632)）@katherinehhh
  * 編集ダイアログでサブテーブルの初期値が反映されない問題を修正（[#7631](https://github.com/nocobase/nocobase/pull/7631)）@katherinehhh
  * 画像プレビューで回転と拡大を同時に行うと表示が崩れる問題を修正（[#7573](https://github.com/nocobase/nocobase/pull/7573)）@mytharcher
  * タブのアイコン設定ポップアップが隠れてしまう問題を修正（[#7607](https://github.com/nocobase/nocobase/pull/7607)）@zhangzhonghe
* **[database]**`$in` 演算子の値が `null` の場合に発生するエラーを修正（[#7610](https://github.com/nocobase/nocobase/pull/7610)）@mytharcher
* **[データソース：メインDB]** 逆リレーション作成後に複数ノードでメタデータが同期されない問題を修正（[#7628](https://github.com/nocobase/nocobase/pull/7628)）@mytharcher
* **[ワークフロー：承認]**
  * アプリ未インストール時にマイグレーションでテーブルが見つからず発生するエラーを修正 @mytharcher
  * hooksをスキップした際にSnowflake IDが生成されない問題を修正 @mytharcher
* **[認証：LDAP]** 非ASCII文字を含むDNでADログインに失敗する問題を修正 @2013xile
