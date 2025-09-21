### 🚀 機能改善

* **[クライアント]** ツールチップとグループ項目のタイトルにローカライズ機能を追加サポート（[#7485](https://github.com/nocobase/nocobase/pull/7485)）@katherinehhh
* **[カレンダー]** カレンダーヘッダーのロケールマッピング表示をサポート（[#7508](https://github.com/nocobase/nocobase/pull/7508)）@katherinehhh

### 🐛 不具合修正

* **[クライアント]** メニューアイコン設定のポップオーバーが隠れる問題を修正（[#7515](https://github.com/nocobase/nocobase/pull/7515)）@zhangzhonghe
* **[通知：アプリ内メッセージ]**
  * 通知リンクの解析が不正確になる問題を修正（[#7509](https://github.com/nocobase/nocobase/pull/7509)）@mytharcher
  * 通知ポップアップを開いた際に最新のメッセージが表示されない問題を修正（[#7514](https://github.com/nocobase/nocobase/pull/7514)）@mytharcher
* **[ワークフロー]** ワークフローのバックグラウンドタスクキューにおける不正なサブスクリプションロジックにより実行メッセージが誤って処理される問題を修正（[#7507](https://github.com/nocobase/nocobase/pull/7507)）@mytharcher
* **[ワークフロー：承認]**
  * 外部データソースからデータを削除する際にエラーが発生する問題を修正 @mytharcher
  * 承認フォーム内の数式フィールドが自動的に更新されない問題を修正 @mytharcher
