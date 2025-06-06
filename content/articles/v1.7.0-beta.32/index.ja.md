### 🎉 新機能

* **[クライアント]** 一行テキストフィールドに複数キーワードフィルタリング機能を追加（[#6685](https://github.com/nocobase/nocobase/pull/6685)）@zhangzhonghe
  参照：[マルチキーワードフィルタ](https://docs-jp.nocobase.com/handbook/multi-keyword-filter)
* **[マルチキーワードフィルタ]** 一行テキストフィールドに複数キーワードを入力したフィルタリングをサポート @zhangzhonghe
  参照：[マルチキーワードフィルタ](https://docs-jp.nocobase.com/handbook/multi-keyword-filter)
* **[テンプレート印刷]** テンプレート印刷に一括印刷機能を追加 @sheldon66

### 🚀 機能改善

* **[ワークフロー]** 欠落していた en-US ロケールキーを全て追加（[#6885](https://github.com/nocobase/nocobase/pull/6885)）@mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * モーダル内のカスケードコンポーネントが初期状態で関連データを読み込まない問題（[#6886](https://github.com/nocobase/nocobase/pull/6886)）@katherinehhh
  * サブフォーム内の関連フィールドを公開した際の関連データ未送信の問題（[#6883](https://github.com/nocobase/nocobase/pull/6883)）@katherinehhh
  * ドラッグアンドドロップソートフィールドの利用可能オプションの表示エラー（[#6875](https://github.com/nocobase/nocobase/pull/6875)）@katherinehhh
  * データセレクタテーブルのデータスコープに現在のフォーム変数が含まれない問題（[#6882](https://github.com/nocobase/nocobase/pull/6882)）@katherinehhh
  * 関連付け済みのレコードをフィルタリングしない関連選択レコードテーブルの問題（[#6874](https://github.com/nocobase/nocobase/pull/6874)）@katherinehhh
* **[データベース]** フィールドインポート時の空文字列セルを処理し、エラーを防止（[#6880](https://github.com/nocobase/nocobase/pull/6880)）@aaaaaajie
* **[ワークフロー：手動ノード]** 未処理アイテム表示時のレンダリングエラー修正（[#6879](https://github.com/nocobase/nocobase/pull/6879)）@mytharcher
* **[ファイルマネージャー]** タイプの誤りを修正（[#6873](https://github.com/nocobase/nocobase/pull/6873)）@mytharcher
* **[ブロック：アクションパネル]** スキャナーからルートベースネームを読み取り、デスクトップ環境への適応（[#6877](https://github.com/nocobase/nocobase/pull/6877)）@sheldon66
* **[AI 連携]** LLM サービス設定ページと検証設定ページを切り替えた際にコンテンツが表示されない問題（[#6887](https://github.com/nocobase/nocobase/pull/6887)）@2013xile
* **[ワークフロー]** コレクションイベントのスタック制限の誤動作修正（[#6876](https://github.com/nocobase/nocobase/pull/6876)）@mytharcher
* **[ワークフロー：承認]** 代理人の割り当て範囲の修正と他の担当者への追加 @mytharcher
* **[バックアップマネージャー]** ビルド時のタイプエラーを修正 @mytharcher
