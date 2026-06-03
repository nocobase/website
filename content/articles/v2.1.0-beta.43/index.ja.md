### 🎉 新機能

- **[client-v2]** `TypedVariableInput` を追加し、v2 メールプラグインの SMTP ポートとセキュリティモードのフィールドが型付き定数または `{{ $env.X }}` 変数を受け入れられるようにしました。 ([#9637](https://github.com/nocobase/nocobase/pull/9637)) by @Molunerfinn

- **[Access control]** ユーザーと役割の権限設定ページを v2 に移行しました。 ([#9619](https://github.com/nocobase/nocobase/pull/9619)) by @jiannx

### 🚀 改善

- **[undefined]** オープンソースプラグインの NocoBase 埋め込みドキュメントを更新しました ([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
参考: [NocoBase の埋め込み](https://docs.nocobase.com/en/integration/embed/)
- **[client]** 一部の組み込み RunJS 関数のオートコンプリートサポートを強化しました。 ([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust

- **[cli]** init と self update のガイダンスを改善しました ([#9633](https://github.com/nocobase/nocobase/pull/9633)) by @chenos

### 🐛 バグ修正

- **[client]**
  - ページ更新後にブロックが誤って削除済みと表示される問題を修正しました ([#9662](https://github.com/nocobase/nocobase/pull/9662)) by @zhangzhonghe

  - テーブルブロックの行操作のリンケージルールの動作が正しくない問題を修正しました。 ([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust

  - 非表示後に表示されたフィールドが読み取り専用になる問題を修正しました ([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh

- **[cli]** nginx テンプレートで `.mjs` アセットを JavaScript MIME タイプで提供するよう修正しました。 ([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher

- **[database]** 数値パスワード値のインポートに失敗する可能性のある問題を修正しました ([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile

- **[flow-engine]**
  - UI 設定モードのスイッチを切り替えた後、ポップアップに古い UI データが表示される問題を修正しました。 ([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust

  - 関連フィールドにマウスを合わせた際にフィールド検索がクリアされる問題を修正しました ([#9646](https://github.com/nocobase/nocobase/pull/9646)) by @zhangzhonghe

- **[client-v2]** フィールド値の割り当てを保持するように修正しました ([#9640](https://github.com/nocobase/nocobase/pull/9640)) by @katherinehhh

- **[File manager]** ローカルファイルストレージパスの検証を修正し、安全でないパスが設定されたストレージルートから逸脱するのを防ぎました。 ([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher

- **[Block: Gantt]** ガントチャートのツールチップ配置を改善し、タスクバーを覆わないようにし、バーの内外でタスクラベルの一貫した配置を実現しました ([#9638](https://github.com/nocobase/nocobase/pull/9638)) by @jiannx

- **[Access control]** ユニオン役割がデフォルトの場合、初回ログイン時の権限が不完全になる問題を修正しました ([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile

- **[License settings]** pkg ログインチェックが遅い場合や到達不能な場合に、ライセンス設定ページが長時間ハングする問題を修正しました ([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji

- **[Workflow: JavaScript]** Workflow JavaScript モジュールサポートモードが安全ではなく、権限境界ではないことを明確にしました ([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
参考: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Password policy]** 数値パスワード値のパスワードポリシー検証に失敗する可能性のある問題を修正しました by @2013xile