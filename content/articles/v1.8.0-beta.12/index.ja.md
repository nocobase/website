### 🚀 機能改善

* **[データベース]** 環境変数からプールオプションを追加できるようにサポート（[#7133](https://github.com/nocobase/nocobase/pull/7133)）@mytharcher
* **[ワークフロー]**
  * JSON フィールドを除くことで実行履歴一覧のロードパフォーマンスを改善（[#7138](https://github.com/nocobase/nocobase/pull/7138)）@mytharcher
  * ノードテスト用のログ API を追加（[#7129](https://github.com/nocobase/nocobase/pull/7129)）@mytharcher
* **[マルチアプリマネージャー]** マルチアプリ管理にフィルター機能を追加（[#7124](https://github.com/nocobase/nocobase/pull/7124)）@katherinehhh
* **[ワークフロー：承認]** タイムラインの時間表示を絶対時間に変更 @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * \$nForm 変数を参照した Markdown の変更がリアルタイムに反映されない問題（[#7147](https://github.com/nocobase/nocobase/pull/7147)）@katherinehhh
  * 詳細ブロック内のサブテーブルの背景色スタイル不具合（[#7144](https://github.com/nocobase/nocobase/pull/7144)）@katherinehhh
  * ワークフロー手動ノードの UI 設定：連動規則で「現在のフォーム変数」が選択できない問題（[#7125](https://github.com/nocobase/nocobase/pull/7125)）@zhangzhonghe
  * 接続ビュー内のフィールド displayName 設定が機能しない問題（[#7130](https://github.com/nocobase/nocobase/pull/7130)）@aaaaaajie
  * 関連フィールドの初期値がサブテーブルの既存データを上書きする問題（[#7120](https://github.com/nocobase/nocobase/pull/7120)）@katherinehhh
  * 'x-acl-action' に基づく設定のフォールトトレランス（[#7128](https://github.com/nocobase/nocobase/pull/7128)）@mytharcher
* **[ユーティリティ]** DateOnly やタイムゾーンなしの Datetime に対し、Exact day 変数を使用したフィルタリング不具合（[#7113](https://github.com/nocobase/nocobase/pull/7113)）@katherinehhh
* **[ワークフロー]** 循環インポートによるエラーを修正（[#7134](https://github.com/nocobase/nocobase/pull/7134)）@mytharcher
* **[パスワードポリシー]** ユーザーアカウントの永続ロックをサポート @2013xile
* **[ワークフロー：サブフロー]** クラスターモード時の不具合を修正 @mytharcher
* **[ワークフロー：承認]**
  * フィルターからフィルタ不能なフィールドを削除 @mytharcher
  * フォームレイアウト設定を追加 @mytharcher
