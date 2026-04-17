### 🎉 新機能

* **[AI 従業員]** AI 従業員が sub agents を呼び出せるように対応 ([#8935](https://github.com/nocobase/nocobase/pull/8935)) by @cgyrock
* **[AI: MCP サーバー]** MCP 経由で呼び出せる汎用的なデータテーブル検索インターフェースを追加 ([#8985](https://github.com/nocobase/nocobase/pull/8985)) by @2013xile

### 🚀 機能改善

* **[undefined]**
  * README に目次を追加 ([#8878](https://github.com/nocobase/nocobase/pull/8878)) by @gaston98765
  * LibreOffice と Oracle Instant Client をサイレント展開し、サーバー起動時の冗長なログを削減 ([#8984](https://github.com/nocobase/nocobase/pull/8984)) by @Rishabh1925
* **[フロントエンドフローエンジン]** UI 構築向けの API を追加。 ([#8992](https://github.com/nocobase/nocobase/pull/8992)) by @gchust
* **[ワークフロー]** 有効化スイッチのサイズを小さく調整 ([#9010](https://github.com/nocobase/nocobase/pull/9010)) by @mytharcher
* **[AI 従業員]** deepseek が未対応のファイル形式を処理する際の案内を改善 ([#9003](https://github.com/nocobase/nocobase/pull/9003)) by @cgyrock
* **[操作：カスタムリクエスト]** カスタムリクエスト用の操作ボタンを追加 ([#8890](https://github.com/nocobase/nocobase/pull/8890)) by @jiannx
* **[ワークフロー：JavaScript ノード]**`isolated-vm` を JavaScript ノードのデフォルト実行エンジンに設定 ([#8973](https://github.com/nocobase/nocobase/pull/8973)) by @mytharcher
  参考ドキュメント：[JavaScript ノード](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 不具合修正

* **[server]**
  * 非サービスモードのインスタンスがアプリ状態を更新しないよう、配信アプリの状態にサービスモードチェックを追加 ([#8959](https://github.com/nocobase/nocobase/pull/8959)) by @mytharcher
  * hostname による受理アプリの取得をサポート ([#8978](https://github.com/nocobase/nocobase/pull/8978)) by @2013xile
* **[client]**
  * サブテーブルの関連フィールドを保存できない問題を修正 ([#9004](https://github.com/nocobase/nocobase/pull/9004)) by @jiannx
  * フィールドのサブフォームにデータが表示されない問題を修正 ([#9008](https://github.com/nocobase/nocobase/pull/9008)) by @jiannx
  * テーブル内の関連フィールド文言が初回レンダリング時に正しく表示されない問題を修正 ([#9007](https://github.com/nocobase/nocobase/pull/9007)) by @jiannx
  * 多段モーダルでフォームデータを変更したあとに閉じる際、再確認メッセージが正しく表示されない問題を修正。 ([#8944](https://github.com/nocobase/nocobase/pull/8944)) by @gchust
  * 変数式に空白が含まれる場合、名前が正しく表示されない問題を修正 ([#8988](https://github.com/nocobase/nocobase/pull/8988)) by @mytharcher
* **[flow-engine]**
  * モーダル内で設定メニューが切れてしまう問題を修正 ([#9005](https://github.com/nocobase/nocobase/pull/9005)) by @gchust
  * UI コンポーネントの幅が狭すぎる場合に、設定画面でメニューを選択できない問題を修正。 ([#8954](https://github.com/nocobase/nocobase/pull/8954)) by @gchust
  * フォームコントロールと詳細コントロール向けの js スニペットを追加 ([#8974](https://github.com/nocobase/nocobase/pull/8974)) by @jiannx
* **[ワークフロー：メール送信ノード]** 変数を利用できるフィールドの検証ルールを修正 ([#9047](https://github.com/nocobase/nocobase/pull/9047)) by @mytharcher
* **[データテーブルフィールド：ソート]** scopeKey が未定義の場合に field-sort プラグインがクラッシュする問題を修正 ([#9019](https://github.com/nocobase/nocobase/pull/9019)) by @gaston98765
* **[AI 従業員]**
  * AI 従業員が skills を利用できない問題を修正 ([#9023](https://github.com/nocobase/nocobase/pull/9023)) by @cgyrock
  * getSkill ツールを無効化したあとも大規模言語モデルがスキルを読み込もうとする問題を修正 ([#9013](https://github.com/nocobase/nocobase/pull/9013)) by @cgyrock
  * Qwen 大規模言語モデル使用時にオンライン検索の挙動が異常になる問題を修正 ([#9012](https://github.com/nocobase/nocobase/pull/9012)) by @cgyrock
  * AI セッション API に所有権チェックを追加 ([#8993](https://github.com/nocobase/nocobase/pull/8993)) by @cgyrock
* **[ブロック：グリッドカード]** グリッドカード更新時にボタンが更新されない問題を修正 ([#9021](https://github.com/nocobase/nocobase/pull/9021)) by @jiannx
* **[ワークフロー]**
  * 条件ノードの誤った検証ルールを修正 ([#9017](https://github.com/nocobase/nocobase/pull/9017)) by @mytharcher
  * データテーブルトリガーのトリガーモードを「新規追加または更新」に設定できない問題を修正 ([#8980](https://github.com/nocobase/nocobase/pull/8980)) by @mytharcher
* **[通知：サイト内メッセージ]** サイト内メッセージ操作のホワイトリスト処理を修正し、本人以外による不正な権限操作を防止 ([#9001](https://github.com/nocobase/nocobase/pull/9001)) by @mytharcher
* **[データソース管理]** MCP ツールの命名を改善し、冗長な API 出力を簡素化して AI 会話コンテキストの過剰消費を抑制 ([#9000](https://github.com/nocobase/nocobase/pull/9000)) by @2013xile
* **[ワークフロー：SQL ノード]** SQL ノードのセキュリティ問題を修正 ([#8989](https://github.com/nocobase/nocobase/pull/8989)) by @mytharcher
* **[データ可視化]** 変数付きフィルター条件を使用した際、チャート初回レンダリング時に変数値を正しく解析できない問題を修正 ([#8964](https://github.com/nocobase/nocobase/pull/8964)) by @2013xile
* **[ワークフロー：承認]**
  * 削除されたワークフローに対する例外処理を追加し、ToDo リスト読み込み時のエラーを回避 by @mytharcher
  * 「提出ラウンド」データが不足している場合の例外処理を追加 by @mytharcher
  * 履歴移行スクリプトのバージョン制限を修正し、新バージョン展開後の起動エラーを回避 by @mytharcher
* **[メール管理]** メール送信後に閉じる確認が表示されない問題を修正 by @jiannx
