### 🚀 機能改善

* **[アクション：一括編集]** 選択モード下で`filter`の代わりに`filterByTk`を使用（[#6994](https://github.com/nocobase/nocobase/pull/6994)）@mytharcher
* **[アクション：レコードインポート Pro]** 大規模 XLSX ファイル（高行数 / 列数データセット）の処理時のパフォーマンス問題を最適化し、システムクラッシュやフリーズを防止 @aaaaaajie

### 🐛 不具合修正

* **[クライアント]**
  * フィールド割り当てコンポーネントにフィールドタイトルが表示されない問題（[#6987](https://github.com/nocobase/nocobase/pull/6987)）@katherinehhh
  * メニュー移動リストにおいて最後のメニュー項目が選択できない問題（[#6997](https://github.com/nocobase/nocobase/pull/6997)）@zhangzhonghe
  * ポップアップリンクから開かれたページでコンテンツが正しく表示されない問題を修正（[#6990](https://github.com/nocobase/nocobase/pull/6990)）@zhangzhonghe
* **[ワークフロー]**
  * カテゴリタブを切り替えた際にフィルターが更新されない問題を修正（[#6989](https://github.com/nocobase/nocobase/pull/6989)）@mytharcher
  * ワークフロー統計データが自動生成されない問題を修正（[#6993](https://github.com/nocobase/nocobase/pull/6993)）@mytharcher
