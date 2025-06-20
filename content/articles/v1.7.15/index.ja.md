### 🐛 不具合修正

* **[クライアント]**
  * 各フィールドに独立した変数スコープを適用（[#7012](https://github.com/nocobase/nocobase/pull/7012)）@mytharcher
  * フィールド値の割り当て：関連フィールドのデータがクリアできない問題（[#7086](https://github.com/nocobase/nocobase/pull/7086)）@zhangzhonghe
  * テーブル列のテキストアライン機能が動作しない問題（[#7094](https://github.com/nocobase/nocobase/pull/7094)）@zhangzhonghe
* **[ワークフロー]** 大きな整数値のチェック処理が誤って実行される問題を修正（[#7091](https://github.com/nocobase/nocobase/pull/7091)）@mytharcher
* **[ファイルマネージャー]** 承認プロセス中に添付フィールドが更新できない問題を修正（[#7093](https://github.com/nocobase/nocobase/pull/7093)）@mytharcher
* **[ワークフロー：承認]** 型関連の問題を回避するため、暗黙的ロジックではなく比較演算子を使用 @mytharcher
