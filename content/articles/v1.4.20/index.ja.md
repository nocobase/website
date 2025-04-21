### 🎉 新機能

* **[クライアント]** app.getHref() メソッドを追加しました ([#6019](https://github.com/nocobase/nocobase/pull/6019)) by @chenos

### 🚀 改善

* **[クライアント]**
  * アクションボタンにバインドするワークフローの並べ替えを可能にしました ([#6017](https://github.com/nocobase/nocobase/pull/6017)) by @mytharcher
  * 評価者の参照リンクをドキュメントサイトに変更しました ([#6021](https://github.com/nocobase/nocobase/pull/6021)) by @mytharcher
  * マルチセレクトドロップダウンコンポーネントで maxTagCount: 'responsive' をサポートしました ([#6007](https://github.com/nocobase/nocobase/pull/6007)) by @katherinehhh
  * フィルター欄の時間範囲コンポーネントのデフォルト終了時間を 23:59:59 に設定しました ([#6012](https://github.com/nocobase/nocobase/pull/6012)) by @katherinehhh
* **[アクション: 一括編集]** 一括編集フォームの送信ボタンをリファクタリング: フィールド割り当てとリンクルールを削除しました ([#6008](https://github.com/nocobase/nocobase/pull/6008)) by @katherinehhh

### 🐛 バグ修正

* **[クライアント]**
  * リッチテキストエディターでデータを削除した後、必須検証が動作しない問題を修正しました ([#6006](https://github.com/nocobase/nocobase/pull/6006)) by @katherinehhh
  * アクションカラムのボタンが隠れている際の位置ズレ問題を修正しました ([#6014](https://github.com/nocobase/nocobase/pull/6014)) by @katherinehhh
  * REST API ページのコレクションタブをクリックした際の「コレクション作成」ボタンの問題を修正しました ([#5992](https://github.com/nocobase/nocobase/pull/5992)) by @katherinehhh
  * 一対多の関連で targetKey が NanoID フィールドを選択できない問題を修正しました ([#5999](https://github.com/nocobase/nocobase/pull/5999)) by @katherinehhh
  * コンパクトテーマの設定ボタンのスタイルを修正しました ([#6001](https://github.com/nocobase/nocobase/pull/6001)) by @katherinehhh
  * リストコンポーネントのスタイルを修正しました ([#5998](https://github.com/nocobase/nocobase/pull/5998)) by @mytharcher
  * クライアントリクエストに含まれるヘッダーが上書きされる問題を修正しました ([#6009](https://github.com/nocobase/nocobase/pull/6009)) by @2013xile
  * foreignKey, targetKey, sourceKey が中国語文字によるフィルターをサポートするように修正しました ([#5997](https://github.com/nocobase/nocobase/pull/5997)) by @katherinehhh
* **[アクション: レコードのインポート]** belongs to many 関連を使用する異なる target key のインポートを修正しました ([#6024](https://github.com/nocobase/nocobase/pull/6024)) by @chareice
* **[ブロック: マップ]** 詳細ブロックのマップフィールドがマップブロックとしてレンダリングされる問題を修正しました ([#6010](https://github.com/nocobase/nocobase/pull/6010)) by @katherinehhh
* **[NocoBase の埋め込み]** 埋め込みのトークンが認証と競合する問題を修正しました by @chenos
