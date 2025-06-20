### 🎉 新機能

* **[ワークフロー：承認]** ノード結果に承認記録変数を追加 @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * テーブル列のテキストアライン機能が動作しない問題（[#7094](https://github.com/nocobase/nocobase/pull/7094)）@zhangzhonghe
  * フィールド値の割り当て：関連フィールドのデータがクリアできない問題（[#7086](https://github.com/nocobase/nocobase/pull/7086)）@zhangzhonghe
  * 各フィールドに独立した変数スコープを適用（[#7012](https://github.com/nocobase/nocobase/pull/7012)）@mytharcher
* **[ファイルマネージャー]** 承認プロセス中に添付フィールドが更新できない問題を修正（[#7093](https://github.com/nocobase/nocobase/pull/7093)）@mytharcher
* **[ワークフロー]** 大きな整数値のチェック処理が誤って実行される問題を修正（[#7091](https://github.com/nocobase/nocobase/pull/7091)）@mytharcher
* **[ワークフロー：承認]** 型関連の問題を回避するため、暗黙的ロジックではなく比較演算子を使用 @mytharcher
