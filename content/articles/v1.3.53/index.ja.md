### 🚀 改善点

* **[クライアント]**
  * 必須のhookをエクスポート ([#5702](https://github.com/nocobase/nocobase/pull/5702)) by @mytharcher
  * 国内地区フィールドプラグインをビルトインプラグインから削除 ([#5693](https://github.com/nocobase/nocobase/pull/5693)) by @katherinehhh
* **[ワークフロー：事前アクションイベント]** リクエストインターセプターの警告ログを削除 by @mytharcher

### 🐛 バグ修正

* **[CLI]** デーモンモードでソケットファイルが削除されない問題を修正 ([#5750](https://github.com/nocobase/nocobase/pull/5750)) by @chenos
* **[クライアント]**
  * 同じターゲットコレクションを持つ複数の関連フィールドが相互に影響する問題を修正 ([#5744](https://github.com/nocobase/nocobase/pull/5744)) by @katherinehhh
  * サブテーブル内のチェックボックスの配置問題を修正 ([#5735](https://github.com/nocobase/nocobase/pull/5735)) by @katherinehhh
  * データセレクター内の外部キーフィールド表示の問題を修正 ([#5734](https://github.com/nocobase/nocobase/pull/5734)) by @katherinehhh
  * サブテーブル内の検証メッセージを改善するフィードバックレイアウトを調整 ([#5700](https://github.com/nocobase/nocobase/pull/5700)) by @katherinehhh
* **[サーバー]** プラグインを依存順にロード ([#5706](https://github.com/nocobase/nocobase/pull/5706)) by @chenos
* **[ブロック：マップ]** Google マップズでズームレベル変更時のエラーを修正 ([#5722](https://github.com/nocobase/nocobase/pull/5722)) by @katherinehhh
* **[データソース：メイン]** ビューコレクション内のフィールド名推論を修正 ([#5729](https://github.com/nocobase/nocobase/pull/5729)) by @chareice
* **[ファイルマネージャー]** エンドポイントが空でない場合、forcePathStyle を true に設定 ([#5712](https://github.com/nocobase/nocobase/pull/5712)) by @chenos
