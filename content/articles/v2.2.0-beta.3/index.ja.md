### 🎉 新機能

* **[Workflow: Mailer node]** ワークフローのメール送信ノードで添付ファイルの送信をサポートしました。([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher
* **[Workflow]** ワークフローにデータベーストランザクションスコープのサポートを追加しました。([#9742](https://github.com/nocobase/nocobase/pull/9742)) by @mytharcher
  参考：[Database transactions](docs/docs/ja/workflow/nodes/transaction.md)
* **[Workflow: Database transaction node]** データベーストランザクション用のワークフローノードプラグインを追加しました。 by @mytharcher

### 🚀 機能改善

* **[client-v2]** フォームサブテーブルのリレーションフィールド列で、データスコープに現在の項目変数を使用できるようになりました。([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust
* **[undefined]** Version control プラグインの中国語ドキュメント名を「版本控制」に統一しました。([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock
* **[File manager]** File manager の PDF プレビューに、埋め込みテキストを含む PDF 向けのテキスト選択サポートを追加しました。([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher
* **[Users]** v2 の Users と Permissions ページのレイアウトを改善し、部門ツリーの動作を最適化しました。([#9780](https://github.com/nocobase/nocobase/pull/9780)) by @jiannx
* **[Action: Bulk edit]** v2 アクションプラグインの読み込み方式を最適化し、移行済みアクションボタンの順序を安定させました。([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh
* **[Version control]** Version control プラグインの中国語表示名を「版本控制」に変更しました。 by @cgyrock

### 🐛 不具合修正

* **[cli-v1]** create-nocobase-app で作成したプロジェクトを 2.0 から 2.1 にアップグレードした後、`<span>yarn dev</span>` 実行時にエラーが発生する問題を修正しました。([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn
* **[flow-engine]** v2 の単一行テキストフィールドと複数行テキストフィールドにおける、ベトナム語および中国語 IME の入力問題を修正しました。([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh
* **[client-v2]** マイグレーション進捗で専用の進捗ビューが表示されない問題を修正しました。([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile
* **[server]** `<span>pm:enable</span>` における安全でないプラグイン名の処理を修正し、プラグイン解決時にローカルファイルインクルードのリスクが発生しないようにしました。([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher
* **[Async task manager]** 非同期タスクファイルのダウンロード時に `<span>filterByTk</span>` が欠落し、データベースクエリエラーが発生する問題を修正しました。([#9705](https://github.com/nocobase/nocobase/pull/9705)) by @mytharcher
* **[File manager]** pdf.js worker モジュールの読み込み異常により PDF プレビューが失敗する問題を修正しました。([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher
* **[Block: Kanban]** 非編集モードで Calendar、Gantt、Kanban ブロックを開いた際、非表示ポップアップ操作が意図せず永続化され、削除リクエストが繰り返し送信される問題を修正しました。([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx
* **[Action: Export records Pro]** v2 Import/Export Pro の処理モード設定と説明文を改善しました。 by @katherinehhh
* **[Multi-space]** スペース管理者がユーザーメールフィールドの権限を持たない場合に、スペースユーザーの追加時に権限エラーが発生する問題を修正しました。 by @jiannx
* **[Migration manager]** 大きなマイグレーションデータファイルのインポート時に失敗する可能性がある問題を修正しました。 by @2013xile
* **[Template print]** テンプレート印刷の開始前に、サポートされていないテンプレートファイル形式を拒否するようにしました。 by @2013xile
