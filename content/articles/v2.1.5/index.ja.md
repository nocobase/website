### 🎉 新機能

- **[Workflow: Mailer node]** ワークフローのメール送信ノードで、添付ファイルの送信をサポートしました。([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher

### 🚀 機能改善

- **[client-v2]** フォームのサブテーブル内にあるリレーションフィールド列のデータスコープで、現在項目の変数をサポートしました。([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust
- **[undefined]** バージョン管理プラグインの中国語ドキュメント名を「版本控制」に統一しました。([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock
- **[File manager]** ファイルマネージャーの PDF プレビューに、埋め込みテキストを含む PDF 向けのテキスト選択サポートを追加しました。([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher
- **[Action: Bulk edit]** v2 アクションプラグインの読み込み方式を改善し、移行済みアクションボタンの順序を安定させました。([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh
- **[Version control]** バージョン管理プラグインの中国語表示名を「版本控制」に変更しました。 by @cgyrock

### 🐛 不具合修正

- **[cli-v1]** create-nocobase-app で作成したプロジェクトを 2.0 から 2.1 にアップグレードした後、`yarn dev` 実行時にエラーが発生する問題を修正しました。([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn
- **[client-v2]** マイグレーション進捗で専用の進捗ビューが表示されない問題を修正しました。([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile
- **[flow-engine]** v2 の単一行テキストおよび複数行テキストフィールドにおけるベトナム語と中国語 IME の入力問題を修正しました。([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh
- **[server]** `pm:enable` における安全でないプラグイン名処理を修正し、プラグイン解決時のローカルファイルインクルードリスクを回避しました。([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher
- **[File manager]** pdf.js worker モジュールの読み込み異常により PDF プレビューが失敗する問題を修正しました。([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher
- **[Block: Kanban]** 非編集状態で Calendar、Gantt、Kanban ブロックを開いた際、非表示のポップアップ操作が意図せず永続化され、削除リクエストが繰り返し送信される問題を修正しました。([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx
- **[Action: Export records Pro]** v2 Import/Export Pro の処理モード設定と説明表示を改善しました。 by @katherinehhh
- **[Migration manager]** 大きなマイグレーションデータファイルのインポート時に失敗する可能性がある問題を修正しました。 by @2013xile
- **[Template print]** テンプレート印刷開始前に、サポートされていないテンプレートファイル形式を拒否するようにしました。 by @2013xile
