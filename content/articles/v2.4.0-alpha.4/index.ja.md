### 🎉 新機能

* **[AI：ナレッジベース]** 認証が必要なナレッジベース検索 API と、リモートの NocoBase ナレッジベースに接続するための組み込み Provider を追加。 by @cgyrock

### 🚀 機能改善

* **[通知：サイト内通知]** ワークフロー v2 の通知ノードでサイト内通知またはメールチャネルを選択した後、フロントエンドの動作が遅くなる問題を修正 ([#10445](https://github.com/nocobase/nocobase/pull/10445)) by @jiannx

### 🐛 不具合修正

* **[server]** 未デプロイの環境でアプリケーションが誤って起動される問題を修正 ([#10464](https://github.com/nocobase/nocobase/pull/10464)) by @2013xile
* **[データテーブルフィールド：Markdown(Vditor)]** Vditor の詳細フィールドでプレーンテキストプレビューがデフォルトになっていたため Markdown 画像を表示できない問題を修正し、デフォルトを HTML プレビューに変更。 ([#10459](https://github.com/nocobase/nocobase/pull/10459)) by @mytharcher
* **[AI 従業員]**
  * AI 従業員のナレッジベースプロンプトに検索内容のプレースホルダーがない場合、ナレッジベースを繰り返し検索する可能性がある問題を修正し、設定保存時に分かりやすい検証メッセージを表示。 ([#10413](https://github.com/nocobase/nocobase/pull/10413)) by @cgyrock
  * AI の応答が中断された後、ツール呼び出しに対応する結果が不足し、Bedrock リクエストでエラーが発生する問題を修正。 ([#10447](https://github.com/nocobase/nocobase/pull/10447)) by @cgyrock
* **[ブロック：コメント]** コメントブロックで「最終更新者」フィールドを使用した際、コメント投稿者のニックネームが正しく表示されない問題を修正 ([#10446](https://github.com/nocobase/nocobase/pull/10446)) by @jiannx
* **[データソース管理]** v2 データテーブルエディターにレコードの一意識別子の設定がない問題を修正。 ([#10453](https://github.com/nocobase/nocobase/pull/10453)) by @katherinehhh
* **[ワークフロー]** ユーザー関連のデータテーブルで主キーをユーザーの外部キーとして使用した場合、ワークフローでユーザーを正しく選択できない問題を修正 ([#10354](https://github.com/nocobase/nocobase/pull/10354)) by @mytharcher
* **[データテーブル：SQL]** SQL データテーブルから PostgreSQL のシステムオブジェクトをクエリしたり、複数の SQL ステートメントを実行したりできないよう制限 ([#10455](https://github.com/nocobase/nocobase/pull/10455)) by @2013xile
* **[AI：ナレッジベース]**
  * AI ナレッジベースの PGVector 接続テスト、ZIP インポート結果の表示、ドキュメント分割設定の継承、Chunk overlap パラメータの検証に関する問題を修正。 by @cgyrock
  * ナレッジベースへのアップロードで、バックエンドが対応しているすべてのドキュメント形式を選択できるように改善 by @cgyrock
* **[テンプレート印刷]** テンプレート印刷で、安定したファイル URL を使用した動的画像が正しくレンダリングされない問題を修正。 by @hongboji
* **[アプリケーション監督]** アプリケーション管理 API のレスポンスからサブアプリケーションの認証キーが漏洩する問題を修正 by @2013xile
