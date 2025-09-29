### 🎉 新機能

* **[ワークフロー：承認]** 承認プロセス内の任意のノードに戻る機能をサポート @mytharcher

### 🚀 機能改善

* **[サーバー]** メッセージキューに標準的なシステムロガーを使用（[#7480](https://github.com/nocobase/nocobase/pull/7480)）@mytharcher
* **[クライアント]** ファイルリストから省略記号のポップオーバーを削除（[#7479](https://github.com/nocobase/nocobase/pull/7479)）@mytharcher
* **[ワークフロー]** ワークフロー準備プロセスを最適化し、事前読み込みされたノードデータの使用をサポート（[#7476](https://github.com/nocobase/nocobase/pull/7476)）@mytharcher
* **[テーマエディター]** サイドメニューの色カスタマイズ機能を追加サポート（[#7483](https://github.com/nocobase/nocobase/pull/7483)）@duannyuuu
* **[Redis キューアダプター]** Redis メッセージキューアダプターに標準的なシステムロガーを使用 @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * ポップオーバーコンポーネントが重なったり覆われたりする問題を修正（[#7491](https://github.com/nocobase/nocobase/pull/7491)）@zhangzhonghe
  * リンケージルールにおける数値フィールドの「空でない」チェックが不正確になる問題（[#7477](https://github.com/nocobase/nocobase/pull/7477)）@katherinehhh
  * パブリックフォームで読み取り専用の選択肢 / 複数選択 / 日付 / リッチテキストが依然として編集可能になる問題（[#7484](https://github.com/nocobase/nocobase/pull/7484)）@katherinehhh
* **[ワークフロー]** ワークフローログのキャッシュに関連する潜在的なエラーを修正（[#7490](https://github.com/nocobase/nocobase/pull/7490)）@mytharcher
* **[HTTP リクエスト暗号化]** リクエストパラメーターがネイティブの URLSearchParams 型をサポートしない問題を修正 @mytharcher
* **[データソース：REST API]** REST API の URL 検証ルールを修正 @katherinehhh
* **[ワークフロー：承認]** 承認完了通知内のステータステキストが翻訳されない問題を修正 @mytharcher
