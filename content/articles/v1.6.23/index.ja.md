### 🚀 改善点

* **[cli]**`nocobase upgrade`コマンドの内部ロジックを最適化しました ([#6754](https://github.com/nocobase/nocobase/pull/6754)) by @chenos
* **[テンプレート印刷]** データソースアクションコントロールをクライアントロールベースのアクセスコントロールに置き換えました by @sheldon66

### 🐛 バグ修正

* **[cli]** アップグレード時に`package.json`を自動更新するようにしました ([#6747](https://github.com/nocobase/nocobase/pull/6747)) by @chenos
* **[client]**
  * 既に関連付けられたデータのフィルターが欠落していた問題を修正しました ([#6750](https://github.com/nocobase/nocobase/pull/6750)) by @katherinehhh
  * 木構造テーブルの「子を追加」ボタンのリンクルールに「現在のレコード」が欠落していた問題を修正しました ([#6752](https://github.com/nocobase/nocobase/pull/6752)) by @katherinehhh
* **[アクション: レコードのインポート]** フィールド権限を設定すると発生するインポートとエクスポートの例外を修正しました ([#6677](https://github.com/nocobase/nocobase/pull/6677)) by @aaaaaajie
* **[ブロック: Gantt]** カレンダーヘッダーの月表示で月が重なる問題を修正しました ([#6753](https://github.com/nocobase/nocobase/pull/6753)) by @katherinehhh
* **[アクション: レコードのエクスポート Pro]**
  * テーブルカラムを並べ替えた後にプロエクスポートボタンがフィルターパラメーターを失う問題を修正しました by @katherinehhh
  * フィールド権限を設定すると発生するインポートとエクスポートの例外を修正しました by @aaaaaajie
* **[ファイルストレージ: S3(Pro)]** アップロードされたファイルのレスポンスデータを修正しました by @mytharcher
* **[ワークフロー: 承認]** レコードのプリロード関連フィールドを修正しました by @mytharcher
