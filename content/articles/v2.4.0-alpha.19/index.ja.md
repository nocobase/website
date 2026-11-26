### **🚀 機能改善**

* **[client-v2]** モバイル端末の横並びの詳細ブロックで、フィールド間の余白を縮小。 ([#11644](https://github.com/nocobase/nocobase/pull/11644?utm_source=chatgpt.com))
* **[undefined]** NocoBase の Docker イメージに組み込まれている Nginx を 1.30.7 にアップグレード。 ([#11620](https://github.com/nocobase/nocobase/pull/11620?utm_source=chatgpt.com))
* **[AI 従業員]**

  * AI 従業員の設定ページにある「データソース」タブと、チャットダイアログのコンテキストメニューにある「データソース」項目を非表示に変更。 ([#11621](https://github.com/nocobase/nocobase/pull/11621?utm_source=chatgpt.com))
  * AI 従業員との会話で、複数の階層でラップされた `RangeError` が発生した場合、サーバーログに元のエラーのスタックトレースを表示し、原因を特定しやすいように改善。 ([#11640](https://github.com/nocobase/nocobase/pull/11640?utm_source=chatgpt.com))

### **🐛 不具合修正**

* **[client-v2]**

  * モダンページを閲覧モードで開いた後、UI Editor を有効にしてブロックを追加すると、ページを更新した際にブロックが消える問題を修正。 ([#11672](https://github.com/nocobase/nocobase/pull/11672?utm_source=chatgpt.com))
  * スマートフォンの狭い画面幅で、詳細ブロックとグリッドカード内の横並びの読み取り専用フィールドの間隔を縮小し、複数行テキストもコンパクトに表示するように改善。 ([#11673](https://github.com/nocobase/nocobase/pull/11673?utm_source=chatgpt.com))
  * 一対多ブロックで、対象テーブルにレコードを一意に識別するフィールドが複数設定されている場合、レコードを削除できない問題を修正。v1 / v2 の一括削除にも対応。 ([#11423](https://github.com/nocobase/nocobase/pull/11423?utm_source=chatgpt.com))
  * サイドバーの折りたたみボタンがナビゲーションパネルのリンクに重なり、操作を妨げる問題を修正。 ([#11546](https://github.com/nocobase/nocobase/pull/11546?utm_source=chatgpt.com))
* **[cli]** `nb api resource list` で、`--space <名称>` を指定して特定のスペースのレコードを取得できるように改善。 ([#11599](https://github.com/nocobase/nocobase/pull/11599?utm_source=chatgpt.com))
  参考ドキュメント：[リソース一覧](https://github.com/nocobase/nocobase/pull/11615?utm_source=chatgpt.com)
* **[client]** 旧版 iframe の HTML エディターで集計変数を新規作成した後、同じポップアップ内でその変数を直接選択して挿入できるように改善。 ([#11607](https://github.com/nocobase/nocobase/pull/11607?utm_source=chatgpt.com))
* **[エラーハンドラー]** レコードや関連データの保存時に、重複値や必須項目の未入力に関するエラーメッセージの先頭に、対象データテーブルのタイトルを表示するように改善。 ([#11638](https://github.com/nocobase/nocobase/pull/11638?utm_source=chatgpt.com))
* **[カスタム変数]** バッジ用の集計変数を設定する際、複数行テキストのフィルター条件に値を入力できない問題を修正。 ([#11688](https://github.com/nocobase/nocobase/pull/11688?utm_source=chatgpt.com))
* **[ファイルマネージャー]**

  * ファイルに関連付けられたストレージ情報を展開した際、ファイルルールやアクセス URL などの通常フィールドを保持し、ストレージエンジンの選択項目とサーバー側のリクエスト設定を非表示に変更。 ([#11611](https://github.com/nocobase/nocobase/pull/11611?utm_source=chatgpt.com))
  * 外部データソースを更新する際や、別の関連データを持つレコードを読み込む際に、エラーが発生することがある問題を修正。 ([#11698](https://github.com/nocobase/nocobase/pull/11698?utm_source=chatgpt.com))
* **[フォームの下書き]**

  * ブラウザで下書きの保存領域を開けない場合、今回の下書きは保存できないことをフォーム上に表示し、ユーザーは引き続き入力・送信できるように改善。 ([#11625](https://github.com/nocobase/nocobase/pull/11625?utm_source=chatgpt.com))
  * ブラウザでローカルの下書きの読み込みや保存に失敗しても、フォームを通常どおり開き、入力・送信できるように修正。 ([#11671](https://github.com/nocobase/nocobase/pull/11671?utm_source=chatgpt.com))
* **[UI テンプレート]** UI テンプレートの作成、編集、削除、およびテンプレート参照レコードへのアクセスにテンプレート管理権限が必要になりました。ログインユーザーは引き続きテンプレートを読み取ることができます。 ([#11537](https://github.com/nocobase/nocobase/pull/11537?utm_source=chatgpt.com))
* **[通知：サイト内通知]** モバイル端末の受信トレイで通知チャネルを開くと、別のチャネルのメッセージが表示されることがある問題を修正。 ([#11662](https://github.com/nocobase/nocobase/pull/11662?utm_source=chatgpt.com))
* **[公開フォーム]** 公開フォームは、設定されたデータソースとデータテーブルへのデータ送信のみを受け付けるように変更。 ([#11536](https://github.com/nocobase/nocobase/pull/11536?utm_source=chatgpt.com))
* **[AI 従業員]** ログインページと二要素認証ページで、AI 従業員の一覧と未読件数を事前に取得するリクエストが送信される問題を修正。 ([#11691](https://github.com/nocobase/nocobase/pull/11691?utm_source=chatgpt.com))
* **[ワークフロー]** V1 ワークフローエディターで、ループ内の Webhook レスポンスなどのノードを設定するとエラーが発生する問題を修正。 ([#11581](https://github.com/nocobase/nocobase/pull/11581?utm_source=chatgpt.com))
* **[データソース：メインデータベース]** メインデータベースから読み込んだテーブルでフィールドを同期できない問題を修正。また、物理テーブル名に設定されたプレフィックスが付いている場合も、既存フィールドのメタデータを保持するように修正。 ([#11327](https://github.com/nocobase/nocobase/pull/11327?utm_source=chatgpt.com))
* **[ワークフロー：ループノード]** トップレベルのループ条件を設定する際、ローカル変数を選択できない問題を修正。 ([#11583](https://github.com/nocobase/nocobase/pull/11583?utm_source=chatgpt.com))
* **[通知管理]** ワークフローから無効な通知先ユーザー設定が渡された場合、通知の送信を停止し、送信ログに修正方法を表示するように変更。 ([#11680](https://github.com/nocobase/nocobase/pull/11680?utm_source=chatgpt.com))
* **[ブロック：テンプレート（廃止済み）]** 旧版のブロックテンプレートレイアウトを保存する際、「設定画面を許可」権限が必要になりました。 ([#11538](https://github.com/nocobase/nocobase/pull/11538?utm_source=chatgpt.com))
* **[バックアップマネージャー]** より新しいメジャーバージョンの `pg_dump` で作成された PostgreSQL バックアップを、古いバージョンの `pg_restore` で復元しようとした場合、データベースを変更する前に復元処理を拒否するように修正。 ([#11585](https://github.com/nocobase/nocobase/pull/11585?utm_source=chatgpt.com))
* **[マルチスペース]** 現在のスペース内のレコードから画像やファイルのプレビューを開くと、404 エラーが発生する問題を修正。
* **[データソース：REST API]**

  * REST API データソースプラグインで TypeScript 宣言ファイルを生成すると、リリースビルドが失敗する問題を修正。
  * REST API データテーブルのフィールドをいったんクリアして再抽出すると保存できなくなる場合がある問題と、既存フィールドの表示名の変更内容が失われる場合がある問題を修正。
* **[データソース：外部 SQL Server]** 外部 SQL Server データソースでは、`dbo` スキーマに属するテーブルとビューのみを一覧表示するように変更。
* **[マイグレーション管理]**

  * PostgreSQL のマイグレーションパッケージから、移行対象に関係のないシーケンスを除外するように変更。移行先データベースに他のテーブルが使用するスキーマが存在しない場合でも、選択したテーブルを復元できるように改善。
  * PostgreSQL のマイグレーションで、複数行フィールド内の `--` で始まる行が失われる、改行コードが変更される、またはエクスポートしたデータを復元できない問題を修正。
* **[データソース：外部 Oracle]** Oracle Thin で、設定された Schema に基づいてデータテーブルを一覧表示するように改善。以前選択されていたものの現在は利用できないテーブルを明示し、新たに送信したテーブルが利用できない場合はエラーを表示。
