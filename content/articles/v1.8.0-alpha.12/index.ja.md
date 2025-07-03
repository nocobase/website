### 🚀 機能改善

* **[データベース]** 環境変数からプールオプションを追加できるようにサポート（[#7133](https://github.com/nocobase/nocobase/pull/7133)）@mytharcher
* **[ワークフロー]**
  * JSON フィールドを除くことで実行履歴一覧のロードパフォーマンスを改善（[#7138](https://github.com/nocobase/nocobase/pull/7138)）@mytharcher
  * ノードテスト用のログ API を追加（[#7129](https://github.com/nocobase/nocobase/pull/7129)）@mytharcher
* **[ワークフロー：承認]** タイムラインの時間表示を絶対時間に変更 @mytharcher

### 🐛 不具合修正

* **[ユーティリティ]** DateOnly やタイムゾーンなしの Datetime に対し、Exact day 変数を使用したフィルタリング不具合（[#7113](https://github.com/nocobase/nocobase/pull/7113)）@katherinehhh
* **[cli]**
  * プラグインダウンロード時の未定義エラー（[#7143](https://github.com/nocobase/nocobase/pull/7143)）@jiannx
  * プラグインインストール時のライセンスコピー処理を調整（[#7135](https://github.com/nocobase/nocobase/pull/7135)）@jiannx
* **[クライアント]**
  * 'x-acl-action' に基づく設定のフォールトトレランス（[#7128](https://github.com/nocobase/nocobase/pull/7128)）@mytharcher
  * 接続ビュー内のフィールド displayName 設定が機能しない問題（[#7130](https://github.com/nocobase/nocobase/pull/7130)）@aaaaaajie
  * ワークフロー手動ノードの UI 設定：連動規則で「現在のフォーム変数」が選択できない問題（[#7125](https://github.com/nocobase/nocobase/pull/7125)）@zhangzhonghe
* **[ワークフロー]** 循環インポートによるエラーを修正（[#7134](https://github.com/nocobase/nocobase/pull/7134)）@mytharcher
* **[plugin-commercial]**
  * 開発モード時のライセンスポップアップ非表示問題 @jiannx
  * ライセンス検証ポップアップの一時的閉鎖機能追加 @jiannx
  * ライセンス検証ロジックを調整し、パンドメイン名マッチングをサポート @jiannx
* **[パスワードポリシー]** ユーザーアカウントの永続ロックをサポート @2013xile
* **[ワークフロー：サブフロー]** クラスターモード時の不具合を修正 @mytharcher
* **[ワークフロー：承認]**
  * フォームレイアウト設定を追加 @mytharcher
  * フィルターからフィルタ不能なフィールドを削除 @mytharcher
