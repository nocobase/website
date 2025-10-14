### 🚀 機能改善

* **[クライアント]** フロントエンドで `mime` パッケージを使用し、ファイルのMIMEタイプをより正確に検出できるように改善（[#7551](https://github.com/nocobase/nocobase/pull/7551)）@mytharcher
* **[ワークフロー]**
  * 環境変数で1つのワークフロー内の最大ノード数を制限できるように対応（[#7542](https://github.com/nocobase/nocobase/pull/7542)）@mytharcher
  * ノード削除時に「分岐を保持」オプションを追加（[#7571](https://github.com/nocobase/nocobase/pull/7571)）@mytharcher
* **[ワークフロー：ループノード]** 環境変数でループノードの最大ループ回数を制限できるように対応（[#7543](https://github.com/nocobase/nocobase/pull/7543)）@mytharcher
* **[ワークフロー：承認]** カスタム承認ブロックの詳細ダイアログに印刷ボタンを追加 @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 画像プレビュー時に回転とズームを同時に行うと表示が乱れる問題を修正（[#7573](https://github.com/nocobase/nocobase/pull/7573)）@mytharcher
  * AssignedFieldコンポーネントが動的プロパティを実装していなかったため、新規作成・更新ノードでファイルアップロードエラーが発生する問題を修正（[#7556](https://github.com/nocobase/nocobase/pull/7556)）@mytharcher
* **[公開フォーム]** 公開フォームでファイルフィールドのアップロードルールが正しく適用されない問題を修正（[#7553](https://github.com/nocobase/nocobase/pull/7553)）@mytharcher
* **[カレンダー]** カレンダーブロックのデータテーブルで一意識別子を設定した後、詳細データ取得時にエラーが発生する問題を修正（[#7562](https://github.com/nocobase/nocobase/pull/7562)）@katherinehhh
* **[認証：LDAP]** 非ASCII文字（UTF-8）を含むADでログインに失敗する問題を修正 @2013xile
