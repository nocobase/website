### 🎉 新機能

* **[ワークフロー：承認]** 同一ワークフロー内のすべての承認ノードで一貫したタスクタイトルを使用できるようサポート @mytharcher

### 🚀 機能改善

* **[認証]** ログイン成功後、URL からトークンパラメータを削除（[#7386](https://github.com/nocobase/nocobase/pull/7386)）@2013xile
* **[テンプレート印刷]** フィールドの多対多配列をサポート @jiannx

### 🐛 不具合修正

* **[モバイル]** モバイル承認ダイアログのフォーム送信データが不正確な問題を修正（[#7389](https://github.com/nocobase/nocobase/pull/7389)）@zhangzhonghe
* **[ワークフロー]** ワークフロータスクセンターのページタイトルの翻訳を修正（[#7392](https://github.com/nocobase/nocobase/pull/7392)）@mytharcher
* **[カレンダー]** カレンダーイベントアイテムのツールチップに「[object Object]」が表示される問題（[#7372](https://github.com/nocobase/nocobase/pull/7372)）@katherinehhh
* **[通知：アプリ内メッセージ]** 翻訳を修正（[#7384](https://github.com/nocobase/nocobase/pull/7384)）@mytharcher
* **[ファイルマネージャー]** ファイルアップロードサイズ制限のヒントを削除（[#7391](https://github.com/nocobase/nocobase/pull/7391)）@mytharcher
* **[ファイルストレージ: S3 (Pro)]**
  * 問題のあるパラメータ`attachmentField`を非推奨に @mytharcher
  * IAM 認証方式を使用してファイルをアップロードできない問題を修正 @mytharcher
