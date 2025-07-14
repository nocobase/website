### 🎉 新機能

* **[マルチアプリマネージャー]** サブアプリの独立した認証シークレットを設定できるようにサポート（[#7197](https://github.com/nocobase/nocobase/pull/7197)）@mytharcher
* **[ワークフロー: CC]** ワークフローに CC ノードを追加（[#7201](https://github.com/nocobase/nocobase/pull/7201)）@mytharcher

### 🚀 機能改善

* **[通知：アプリ内メッセージ]** モバイルメッセージページのフォントサイズを最適化（[#7199](https://github.com/nocobase/nocobase/pull/7199)）@zhangzhonghe
* **[認証：钉钉（DingTalk）]** コールバック URL のプロトコルとポート番号を設定できるようにサポート @2013xile

### 🐛 不具合修正

* **[通知：アプリ内メッセージ]** 文字列形式の BigInt タイムスタンプが dayjs で問題を引き起こす不具合を修正（[#7196](https://github.com/nocobase/nocobase/pull/7196)）@mytharcher
* **[ワークフロー：承認]**
  * ユーザーが存在しない場合のエラーを回避 @mytharcher
  * レコードの関連データを再読み込み @mytharcher
  * UI スキーマ更新時のマイグレーションに`try/catch`を追加 @mytharcher
