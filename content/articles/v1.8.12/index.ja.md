### 🎉 新機能

* **[クライアント]** Input、TextArea、URL、InputNumber コンポーネントに「自動フォーカス」オプションを追加。有効にすると、ページ初期描画時に入力フィールドに自動的にフォーカスが当たるようになります（[#7320](https://github.com/nocobase/nocobase/pull/7320)）@zhangzhonghe

### 🐛 不具合修正

* **[クライアント]**
  * URL が null の場合のファイルプレビューアイテムを修正（[#7315](https://github.com/nocobase/nocobase/pull/7315)）@mytharcher
  * プレビュー時にローカルファイルに完全な URL を追加（[#7314](https://github.com/nocobase/nocobase/pull/7314)）@mytharcher
* **[ユーティリティ]** parseDate のタイムゾーン処理が不正確な問題（[#7318](https://github.com/nocobase/nocobase/pull/7318)）@katherinehhh
* **[未定義]** プリセットに新しいプラグインを追加（[#7319](https://github.com/nocobase/nocobase/pull/7319)）@mytharcher
* **[ファイルマネージャー]** ストレージフィールドの権限を修正（[#7316](https://github.com/nocobase/nocobase/pull/7316)）@mytharcher
* **[ワークフロー]** プロセッサ終了時の`undefined`結果を修正（[#7317](https://github.com/nocobase/nocobase/pull/7317)）@mytharcher
* **[ワークフロー：動的計算ノード]** レガシー API に起因するエラーを修正（[#7321](https://github.com/nocobase/nocobase/pull/7321)）@mytharcher
* **[ワークフロー：サブフロー]** フローが中断する問題を修正 @mytharcher
