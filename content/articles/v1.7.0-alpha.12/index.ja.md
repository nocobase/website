### 🚀 改善点

* **[cli]**`nocobase upgrade`コマンドの内部ロジックを最適化しました ([#6754](https://github.com/nocobase/nocobase/pull/6754)) by @chenos
* **[create-nocobase-app]** 依存関係をアップグレードし、SQLiteのサポートを削除しました ([#6708](https://github.com/nocobase/nocobase/pull/6708)) by @chenos
* **[モバイル]** モバイル日付ピッカーのポップアップの開く速度を最適化しました ([#6735](https://github.com/nocobase/nocobase/pull/6735)) by @zhangzhonghe
* **[ブロック: テンプレート]** テンプレートブロックを通常のブロックに変換する機能を追加しました ([#6662](https://github.com/nocobase/nocobase/pull/6662)) by @gchust
* **[ファイルマネージャー]** ユーティリティAPIを公開しました ([#6705](https://github.com/nocobase/nocobase/pull/6705)) by @mytharcher
* **[テーマエディター]** テーマ設定でサイドバーの幅を設定できるようになりました ([#6720](https://github.com/nocobase/nocobase/pull/6720)) by @chenos
* **[ワークフロー]** 変数のタイプセットに日付タイプを追加しました ([#6717](https://github.com/nocobase/nocobase/pull/6717)) by @mytharcher
* **[テンプレート印刷]** データソースアクションコントロールをクライアントロールベースのアクセスコントロールに置き換えました by @sheldon66

### 🐛 バグ修正

* **[client]**
  * マルチレベルの関連データのリンクルールの表示問題を修正しました ([#6755](https://github.com/nocobase/nocobase/pull/6755)) by @katherinehhh
  * 木構造テーブルの「子を追加」ボタンのリンクルールに「現在のレコード」が欠落していた問題を修正しました ([#6752](https://github.com/nocobase/nocobase/pull/6752)) by @katherinehhh
  * 成功した提出の後にデータブロックが更新されない問題を修正しました ([#6748](https://github.com/nocobase/nocobase/pull/6748)) by @zhangzhonghe
  * 左メニューの折りたたみボタンがワークフローポップアップウィンドウに隠れる問題を修正しました ([#6733](https://github.com/nocobase/nocobase/pull/6733)) by @zhangzhonghe
  * モバイルトップナビゲーションバーのアイコンが削除しにくい問題を修正しました ([#6734](https://github.com/nocobase/nocobase/pull/6734)) by @zhangzhonghe
  * 「インデックス列を有効にする」の値表示が間違っていた問題を修正しました ([#6724](https://github.com/nocobase/nocobase/pull/6724)) by @katherinehhh
  * リンクルールで日時フィールドの条件が機能しない問題を修正しました ([#6728](https://github.com/nocobase/nocobase/pull/6728)) by @katherinehhh
  * リンクルールを再開する際にアクションオプションの制約が欠落していた問題を修正しました ([#6723](https://github.com/nocobase/nocobase/pull/6723)) by @katherinehhh
  * リンクルールによって隠された必須フィールドはフォームの提出に影響を与えないように修正しました ([#6709](https://github.com/nocobase/nocobase/pull/6709)) by @zhangzhonghe
  * 既に関連付けられたデータのフィルターが欠落していた問題を修正しました ([#6750](https://github.com/nocobase/nocobase/pull/6750)) by @katherinehhh
* **[server]** create-migrationによって生成されたappVersionが間違っていた問題を修正しました ([#6740](https://github.com/nocobase/nocobase/pull/6740)) by @chenos
* **[cli]** アップグレード時に`package.json`を自動更新するようにしました ([#6747](https://github.com/nocobase/nocobase/pull/6747)) by @chenos
* **[build]** tarコマンドで発生するエラーを修正しました ([#6722](https://github.com/nocobase/nocobase/pull/6722)) by @mytharcher
* **[ブロック: Gantt]** Ganttチャートブロックがカレンダーヘッダーで月が重なる問題を修正しました ([#6753](https://github.com/nocobase/nocobase/pull/6753)) by @katherinehhh
* **[アクション: レコードのインポート]** フィールド権限を設定すると発生するインポートとエクスポートの例外を修正しました ([#6677](https://github.com/nocobase/nocobase/pull/6677)) by @aaaaaajie
* **[ブロック: テンプレート]** MySQL環境でブロックテンプレートが使用できない問題を修正しました ([#6726](https://github.com/nocobase/nocobase/pull/6726)) by @gchust
* **[ワークフロー]** サブフローでスケジュールイベントを実行する際に発生するエラーを修正しました ([#6721](https://github.com/nocobase/nocobase/pull/6721)) by @mytharcher
* **[ワークフロー: カスタムアクションイベント]** 複数レコードモードで実行できるようにしました by @mytharcher
* **[アクション: レコードのエクスポート Pro]**
  * フィールド権限を設定すると発生するインポートとエクスポートの例外を修正しました by @aaaaaajie
  * テーブルカラムを並べ替えた後にプロエクスポートボタンがフィルターパラメーターを失う問題を修正しました by @katherinehhh
* **[ファイルストレージ: S3(Pro)]**
  * アップロードされたファイルのレスポンスデータを修正しました by @mytharcher
  * サーバーサイドアップロード用の multer 構築ロジックを追加しました by @mytharcher
* **[ワークフロー: 承認]** レコードのプリロード関連フィールドを修正しました by @mytharcher
