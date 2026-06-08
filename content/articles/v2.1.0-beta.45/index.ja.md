### 🎉 新機能

- **[undefined]** CLI における管理対象アプリとプラグイン管理を改善しました。appPath ベースの環境処理、プラグインのインポート、ライセンスプラグインの同期、および関連ドキュメントの更新を含みます。 ([#9655](https://github.com/nocobase/nocobase/pull/9655)) by @chenos
  参考: [CLI ドキュメント](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [クイックスタート](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
- **[Block: Gantt]** ガントチャートブロックに、デフォルトで今日にフォーカスするオプションを追加しました。 ([#9692](https://github.com/nocobase/nocobase/pull/9692)) by @jiannx
- **[IdP: OAuth]** マルチアプリ環境におけるアプリシングルサインオンの基盤サポートを追加しました。 ([#9547](https://github.com/nocobase/nocobase/pull/9547)) by @2013xile
- **[App SSO]** アプリケーション間の自動ログインを実現する App SSO プラグインを追加しました。 by @2013xile
- **[Multi-space]** マルチスペースプラグインに client v2 サポートを追加しました（スペース切り替えとスペース管理を含む）。 by @jiannx
- **[App supervisor]** サブアプリケーションの App SSO 設定を追加しました。 by @2013xile

### 🚀 機能改善

- **[server]** モダンクライアントのパスを `/v2/` から `/v/` に変更しました。 ([#9674](https://github.com/nocobase/nocobase/pull/9674)) by @Molunerfinn
- **[ai]** セキュリティ問題を回避するため `xlsx` のバージョンをアップグレードしました。 ([#9675](https://github.com/nocobase/nocobase/pull/9675)) by @mytharcher
- **[Multi-keyword filter]** マルチキーワードフィルターを client v2 に移行しました。 ([#9691](https://github.com/nocobase/nocobase/pull/9691)) by @gchust
- **[Workflow]** ワークフロー実行履歴とビジネストランザクションの結合を解除しました。 ([#9668](https://github.com/nocobase/nocobase/pull/9668)) by @mytharcher
- **[UI templates]** UI テンプレートを client v2 に移行しました。 ([#9591](https://github.com/nocobase/nocobase/pull/9591)) by @gchust
- **[Departments]** 部門、部門メンバー、ユーザーの所属部門を管理するための v2 部門設定ページを追加しました。 ([#9660](https://github.com/nocobase/nocobase/pull/9660)) by @jiannx
- **[Auth: SAML 2.0]** SAML/CAS ログインのリダイレクトがモダンクライアントのプレフィックスに従うようにしました。 by @Molunerfinn
- **[Action: Import records Pro]** セキュリティ問題を回避するため `xlsx` のバージョンをアップグレードしました。 by @mytharcher
- **[Workflow: Subflow]** サブフローワークフロー命令における実行履歴トランザクションの結合を解除しました。 by @mytharcher
- **[Auth: OIDC]** OIDC ログインのリダイレクトがモダンクライアントのプレフィックスに従うようにしました。 by @Molunerfinn
- **[Workflow: Approval]** 承認ワークフロー命令における実行履歴トランザクションの結合を解除しました。 by @mytharcher

### 🐛 不具合修正

- **[client]**
  - 非表示のリンクフィールドに古い値が残る問題を修正しました。 ([#9687](https://github.com/nocobase/nocobase/pull/9687)) by @zhangzhonghe
  - 参照フォームテンプレートでツリーリレーションフィールドを保存する際のエラーを修正しました。 ([#9643](https://github.com/nocobase/nocobase/pull/9643)) by @zhangzhonghe
- **[client-v2]**
  - カスタム列幅を 0 に設定した際に v2 テーブルの列が表示されなくなる問題を修正しました。 ([#9689](https://github.com/nocobase/nocobase/pull/9689)) by @katherinehhh
  - すべてのリレーションフィールド選択において、関連フィールドを最大 2 階層までに制限しました。 ([#9454](https://github.com/nocobase/nocobase/pull/9454)) by @jiannx
- **[Action: Import records]** インポートされたレコードに重複したソート値が生成される問題を修正しました。 ([#9684](https://github.com/nocobase/nocobase/pull/9684)) by @2013xile
- **[Flow engine]** 参照テンプレートブロックをコピーに変換する際のエラーを修正しました。 ([#9693](https://github.com/nocobase/nocobase/pull/9693)) by @gchust
- **[Collection: SQL]** SQL データテーブルから機密性の高い PostgreSQL メタデータへのアクセスを禁止しました。 ([#9683](https://github.com/nocobase/nocobase/pull/9683)) by @2013xile
- **[Workflow]** 複数ワーカーによる同時実行時にワークフローが重複してディスパッチされる問題を修正しました。 ([#9673](https://github.com/nocobase/nocobase/pull/9673)) by @mytharcher
- **[Block: Map]** 詳細ページの地図フィールドで、テキスト表示と地図表示の切り替え時に値が誤って変換され表示が異常になる問題を修正しました。 ([#9653](https://github.com/nocobase/nocobase/pull/9653)) by @hongboji
- **[Workflow: Custom action event]** ワークベンチ操作パネルのボタンリストにワークフロートリガーアクションが表示されない問題を修正しました。 ([#9682](https://github.com/nocobase/nocobase/pull/9682)) by @katherinehhh
- **[AI employees]**
  - ワークフロー AI 従業員ノードがデフォルトモデルを使用できるようにしました。 ([#9679](https://github.com/nocobase/nocobase/pull/9679)) by @cgyrock
  - フロントエンドメッセージから生の LLM プロバイダーエラーを非表示にしました。 ([#9678](https://github.com/nocobase/nocobase/pull/9678)) by @cgyrock
- **[Data source manager]** v2 データソース管理におけるマルチスペースフィールドのローカライズ表示の問題を修正しました。 ([#9690](https://github.com/nocobase/nocobase/pull/9690)) by @jiannx
- **[Data source: REST API]** データソースマネージャーの client-v2 型宣言の不一致により REST API データソースプラグインの宣言ビルドが失敗する問題を修正しました。 by @katherinehhh
- **[Password policy]** 基盤エラーにステータスコードがない場合に、実際のエラーが "argument #1 unsupported type undefined" で上書きされる問題を修正しました。 by @Molunerfinn
- **[Workflow: Approval]** 承認フォーム詳細にカスタムフィールドタイトルが表示されない問題を修正しました。 by @zhangzhonghe
