### 🚀 機能改善

* **[認証（auth）]** ユーザー名に「.（ドット）」を使用する機能をサポート（[#7504](https://github.com/nocobase/nocobase/pull/7504)）@2013xile
* **[サーバー]** メッセージキューに標準的なシステムロガーを使用（[#7480](https://github.com/nocobase/nocobase/pull/7480)）@mytharcher
* **[スノーフレーク ID]** 自動インクリメントの主キーを持つが一意の識別子がないシステムテーブルの ID を、53 ビットのスノーフレーク風 ID に変更（[#7465](https://github.com/nocobase/nocobase/pull/7465)）@2013xile
* **[カレンダー]** カレンダーヘッダーのロケールマッピング表示をサポート（[#7508](https://github.com/nocobase/nocobase/pull/7508)）@katherinehhh
* **[ワークフロー：手動ノード]** 無効化されたワークフロー内の保留中の手動タスクを表示および再開する機能をサポート（[#7493](https://github.com/nocobase/nocobase/pull/7493)）@mytharcher
* **[テーマエディター]** サイドメニューの色カスタマイズ機能を追加サポート（[#7483](https://github.com/nocobase/nocobase/pull/7483)）@duannyuuu
* **[Redis キューアダプター]** Redis メッセージキューアダプターに標準的なシステムロガーを使用 @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * ボタンアイコン設定のポップアップが覆われる / 重なる問題を修正（[#7506](https://github.com/nocobase/nocobase/pull/7506)）@zhangzhonghe
  * ポップオーバーコンポーネントが重なったり覆われたりする問題を修正（[#7491](https://github.com/nocobase/nocobase/pull/7491)）@zhangzhonghe
  * パブリックフォームで読み取り専用の選択肢 / 複数選択 / 日付 / リッチテキストが依然として編集可能になる問題（[#7484](https://github.com/nocobase/nocobase/pull/7484)）@katherinehhh
* **[ワークフロー]**
  * ワークフローのバックグラウンドタスクキューにおける不正なサブスクリプションロジックにより実行メッセージが誤って処理される問題を修正（[#7507](https://github.com/nocobase/nocobase/pull/7507)）@mytharcher
  * ワークフローログのキャッシュに関連する潜在的なエラーを修正（[#7490](https://github.com/nocobase/nocobase/pull/7490)）@mytharcher
* **[通知：アプリ内メッセージ]** 通知リンクの解析が不正確になる問題を修正（[#7509](https://github.com/nocobase/nocobase/pull/7509)）@mytharcher
* **[データソース：REST API]** REST API の URL 検証ルールを修正 @katherinehhh
* **[HTTP リクエスト暗号化]** リクエストパラメーターがネイティブの URLSearchParams 型をサポートしない問題を修正 @mytharcher
* **[テンプレート印刷]** chinaRegions（中国地域）フィールドをサポート @jiannx
* **[メールマネージャー]** 件名の文字化け問題を修正 @jiannx
