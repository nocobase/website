### 🎉 新機能

- **[client]** 送信成功後、変数設定をサポートし、パラメータ付きで詳細ページへリダイレクト可能になりました ([#6465](https://github.com/nocobase/nocobase/pull/6465)) by @katherinehhh

- **[データ表フィールド：Markdown(Vditor)]** Vditor が S3 Pro をサポートしました ([#6441](https://github.com/nocobase/nocobase/pull/6441)) by @zhangzhonghe

### 🚀 改善

- **[client]**
  - プレーンテキストファイルのみのプレビューをサポートしました ([#6563](https://github.com/nocobase/nocobase/pull/6563)) by @mytharcher

  - 502エラーメッセージを改善しました ([#6547](https://github.com/nocobase/nocobase/pull/6547)) by @chenos

  - 連動規則における各フィールドで選択可能なアクションを制限しました ([#6548](https://github.com/nocobase/nocobase/pull/6548)) by @katherinehhh

- **[ワークフロー]** 統計データ列を独立テーブルに分割しました ([#6534](https://github.com/nocobase/nocobase/pull/6534)) by @mytharcher

- **[モバイル]** モバイル向けに通知ポップアップのスタイルを最適化しました ([#6557](https://github.com/nocobase/nocobase/pull/6557)) by @zhangzhonghe

- **[データ表フィールド：自動符号化]** カレンダーブロックのタイトルフィールドにシーケンスを使用可能にしました ([#6562](https://github.com/nocobase/nocobase/pull/6562)) by @katherinehhh

- **[ファイルマネージャー]** ストレージエンジンの `getFileData` API を調整しました ([#6553](https://github.com/nocobase/nocobase/pull/6553)) by @mytharcher

- **[アクセス制御]** 役割切替の順序とスタイルを改善しました ([#6555](https://github.com/nocobase/nocobase/pull/6555)) by @aaaaaajie

- **[公開フォーム]** 作成時に設定したタイトルを公開ページのタイトルとして表示するようにしました ([#6538](https://github.com/nocobase/nocobase/pull/6538)) by @katherinehhh

- **[ワークフロー：カスタム操作イベント]** 統計データ列を独立テーブルに分割しました by @mytharcher

- **[ワークフロー：承認]**
  - 承認処理ボタンがフォーム検証をスキップできる設定をサポートしました by @mytharcher

  - 統計データ列を独立テーブルに分割しました by @mytharcher

### 🐛 修正

- **[client]**
  - 古いバージョンのブラウザでページが空白で表示される問題を修正しました ([#6571](https://github.com/nocobase/nocobase/pull/6571)) by @zhangzhonghe

  - モーダル内で別のモーダルを開けない問題を修正しました ([#6535](https://github.com/nocobase/nocobase/pull/6535)) by @zhangzhonghe

  - 「省略して表示」オプションがページ更新なしでは反映されない問題を修正しました ([#6520](https://github.com/nocobase/nocobase/pull/6520)) by @zhangzhonghe

  - データ範囲で日付フィールドをフィルタリングした際の表示異常を修正しました ([#6564](https://github.com/nocobase/nocobase/pull/6564)) by @katherinehhh

  - ページ上部のメニューが空白で表示される問題を修正しました ([#6551](https://github.com/nocobase/nocobase/pull/6551)) by @zhangzhonghe

  - 関連フィールドを含むブロックでテンプレート保存時にエラーが発生する問題を修正しました ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust

  - リンクページ追加時に「現在のユーザー」変数が使用できない問題を修正しました ([#6536](https://github.com/nocobase/nocobase/pull/6536)) by @zhangzhonghe

  - フィールドへの「空値」設定が反映されない問題を修正しました ([#6549](https://github.com/nocobase/nocobase/pull/6549)) by @katherinehhh

  - 関連フィールドを含むブロックでテンプレート保存時にエラーが発生する問題を修正しました ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust

  - フィルターフォーム内のドロップダウンシングルセレクトから「複数選択を許可」オプションを除去しました ([#6515](https://github.com/nocobase/nocobase/pull/6515)) by @zhangzhonghe

  - 関連フィールドのデータ範囲連動が機能しない問題を修正しました ([#6530](https://github.com/nocobase/nocobase/pull/6530)) by @zhangzhonghe

  - `yarn doc` コマンドでエラーが発生する問題を修正しました ([#6540](https://github.com/nocobase/nocobase/pull/6540)) by @gchust

  - テーブル行のボタンをドラッグ＆ドロップで並べ替える際の不具合を修正しました ([#6544](https://github.com/nocobase/nocobase/pull/6544)) by @katherinehhh

- **[モバイル]** モバイルで表示されるフォントサイズを14pxに調整しました ([#6570](https://github.com/nocobase/nocobase/pull/6570)) by @zhangzhonghe

- **[ワークフロー]**
  - 自動削除オプション設定時のエラーを修正しました ([#6560](https://github.com/nocobase/nocobase/pull/6560)) by @mytharcher

  - ワークフロー作成前にキーが生成されるようにしました ([#6567](https://github.com/nocobase/nocobase/pull/6567)) by @mytharcher

- **[変数と密匙]** 変数と密匙のフィルターボタンにアイコンが欠如している、フィルタリング後に件数が表示されない、およびページ切替後にデータが更新されない問題を修正しました ([#6568](https://github.com/nocobase/nocobase/pull/6568)) by @katherinehhh

- **[公開フォーム]** 公開フォームのページタイトルに「Loading...」が表示される問題を修正しました ([#6569](https://github.com/nocobase/nocobase/pull/6569)) by @katherinehhh

- **[APIドキュメント]** APIドキュメントページでスクロールできない問題を修正しました ([#6566](https://github.com/nocobase/nocobase/pull/6566)) by @zhangzhonghe

- **[ワークフロー：操作後イベント]** 複数レコードの一括操作が複数回トリガーされる問題を修正しました ([#6559](https://github.com/nocobase/nocobase/pull/6559)) by @mytharcher

- **[区塊：テンプレート]**
  - 詳細ブロックでテンプレート保存メニューが重複して表示される問題を修正しました ([#6558](https://github.com/nocobase/nocobase/pull/6558)) by @gchust

  - フォームの連動ルールがテンプレートから正しく同期されない問題を修正しました ([#6550](https://github.com/nocobase/nocobase/pull/6550)) by @gchust

- **[ユーザー認証]** サインアップページのフィールドのローカライズ問題を修正しました ([#6556](https://github.com/nocobase/nocobase/pull/6556)) by @2013xile

- **[操作：カスタムリクエスト]** UTF-8エンコードされたファイルがダウンロードできない問題を修正しました ([#6541](https://github.com/nocobase/nocobase/pull/6541)) by @2013xile

- **[データ表：ツリー]** ツリーテーブルプラグインのマイグレーションスクリプトの問題を修正しました ([#6537](https://github.com/nocobase/nocobase/pull/6537)) by @2013xile

- **[区塊：分割フォーム]** 送信ボタンの通常時とハイライト時の色が同一である問題を修正しました by @jiannx

- **[ワークフロー：承認]** 承認フォームの送信値に関する問題を修正しました by @mytharcher