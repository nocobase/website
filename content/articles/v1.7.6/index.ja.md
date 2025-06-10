### 🚀 機能改善

* **[クライアント]** グループメニューを自身の中に移動することを禁止（[#7005](https://github.com/nocobase/nocobase/pull/7005)）@zhangzhonghe

### 🐛 不具合修正

* **[クライアント]**
  * ブロックが外部データソースからビューデータを読み取れない問題を解決（[#7017](https://github.com/nocobase/nocobase/pull/7017)）@aaaaaajie
  * フィルターブロックのパラメータエラー問題を修正（[#6966](https://github.com/nocobase/nocobase/pull/6966)）@zhangzhonghe
  * 連携ルール内で現在のオブジェクト変数が無効な問題（[#7008](https://github.com/nocobase/nocobase/pull/7008)）@zhangzhonghe
  * 連携ルールを使用してサブテーブルの必須フィールドの指示器をクリアできない問題（[#7022](https://github.com/nocobase/nocobase/pull/7022)）@zhangzhonghe
* **[未定義]** possibleTypes のデータベース依存を削除し、API 駆動の構成を強制 @aaaaaajie
* **[モバイル]** モバイルポップアップの遅延問題を最適化（[#7029](https://github.com/nocobase/nocobase/pull/7029)）@zhangzhonghe
* **[データソースマネージャー]** possibleTypes のデータベース依存を削除し、API 駆動の構成を強制（[#7019](https://github.com/nocobase/nocobase/pull/7019)）@aaaaaajie
* **[アクション：レコードインポート]** XLSX ツリーテーブルデータのインポート時に一括編集中に発生するエラーを修正（[#7013](https://github.com/nocobase/nocobase/pull/7013)）@aaaaaajie
* **[ワークフロー]** ワークフローが存在しない場合の UI エラーを修正（[#7023](https://github.com/nocobase/nocobase/pull/7023)）@mytharcher
* **[ワークフロー: JavaScript]** 相対パスの require を修正 @mytharcher
* **[ワークフロー：承認]**
  * ワークフローが削除された際に発生するエラーを修正 @mytharcher
  * スナップショットからファイル関連付けを再読み込みし、URL の有効期限切れを回避 @mytharcher
  * トリガー変数を修正 @mytharcher
