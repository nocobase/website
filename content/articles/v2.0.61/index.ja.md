### 🚀 機能改善

- **[client]** 一部の組み込み RunJS 関数の自動補完サポートを強化しました。([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust
- **[undefined]** オープンソースプラグイン向けの Embed NocoBase ドキュメントを更新しました。([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
  参考：[Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)

### 🐛 不具合修正

- **[flow-engine]**

  - サブフォームにフィールド値を設定する際、ページが固まる問題を修正しました。([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust
  - UI 設定モードのスイッチを切り替えた後、ポップアップに古い UI データが表示される問題を修正しました。([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust
- **[client]**

  - テーブルブロックでレコードアクション連動ルールの動作が正しくない問題を修正しました。([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust
  - モバイル端末で選択済みのリレーションフィールドデータが表示されない問題を修正しました。([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe
  - 連動ルールにより非表示から再表示されたフィールドが読み取り専用になる問題を修正しました。([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh
- **[cli]** `.mjs` アセットを JavaScript MIME タイプで配信するよう、nginx テンプレートを修正しました。([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher
- **[database]** 数値のみのパスワード値をインポートする際に失敗する可能性がある問題を修正しました。([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile
- **[AI employees]** AI プロバイダーの Base URL 検証を修正しました。([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock
- **[Flow engine]**

  - ポップアップのタブをドラッグして並び替えできない問題を修正しました。([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust
  - テンプレートを複製した後にブロックを変更すると、元のブロック内容に意図せず影響する可能性がある問題を修正しました。([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust
- **[Notification: In-app message]** アプリ内通知チャンネルのタイムスタンプフィルターにおける SQL インジェクションリスクを修正しました。([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher
- **[License settings]** pkg ログインチェックが遅い、または到達できない場合に、ライセンス設定ページが長時間停止する問題を修正しました。([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji
- **[Workflow: JavaScript]** Workflow JavaScript モジュールサポートモードは安全ではなく、権限境界ではないことを明確にしました。([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
  参考：[Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Access control]** union role がデフォルトロールの場合、初回ログイン時の権限が不完全になる問題を修正しました。([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile
- **[File manager]** ローカルファイルストレージのパス検証を修正し、安全でないパスが設定済みのストレージルート外へ抜け出さないようにしました。([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher
- **[Password policy]** 数値のみのパスワード値でパスワードポリシー検証が失敗する可能性がある問題を修正しました。 by @2013xile
