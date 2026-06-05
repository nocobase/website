### 🎉 新機能

- **[client-v2]** `TypedVariableInput` を追加し、メールプラグイン v2 の SMTP ポートやセキュアモードなどのフィールドで、型付き定数または `{{ $env.X }}` 変数を入力できるようにしました。([#9637](https://github.com/nocobase/nocobase/pull/9637)) by @Molunerfinn
- **[Access control]** Users と Roles & Permissions の設定ページを v2 に移行しました。([#9619](https://github.com/nocobase/nocobase/pull/9619)) by @jiannx

### 🚀 機能改善

- **[server]** 新版クライアントの配信パスを `/v2/` から `/v/` に変更しました。([#9674](https://github.com/nocobase/nocobase/pull/9674)) by @Molunerfinn
- **[ai]** セキュリティ問題を回避するため、`xlsx` のバージョンをアップグレードしました。([#9675](https://github.com/nocobase/nocobase/pull/9675)) by @mytharcher
- **[client]** 一部の組み込み RunJS 関数の自動補完サポートを強化しました。([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust
- **[cli]** init と self-update のガイダンスを改善しました。([#9633](https://github.com/nocobase/nocobase/pull/9633)) by @chenos
- **[undefined]** オープンソースプラグイン向けの Embed NocoBase ドキュメントを更新しました。([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
  参考：[Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[Departments]** 部門、部門メンバー、ユーザーの所属部門を管理する v2 設定ページを追加しました。([#9660](https://github.com/nocobase/nocobase/pull/9660)) by @jiannx
- **[Auth: SAML 2.0]** SAML/CAS のサインインリダイレクトが新版クライアントのプレフィックスに従うようになりました。 by @Molunerfinn
- **[Action: Import records Pro]** セキュリティ問題を回避するため、`xlsx` のバージョンをアップグレードしました。 by @mytharcher
- **[Auth: OIDC]** OIDC のサインインリダイレクトが新版クライアントのプレフィックスに従うようになりました。 by @Molunerfinn
- **[Workflow: Approval]** 承認トリガーとノード設定の検証ルールを調整し、UI 関連フィールドが存在するようにしました。 by @mytharcher

### 🐛 不具合修正

- **[client-v2]**

  - カスタム列幅を 0 に設定した場合、v2 テーブル列が非表示になる問題を修正しました。([#9689](https://github.com/nocobase/nocobase/pull/9689)) by @katherinehhh
  - すべてのリレーションフィールドセレクターを調整し、関連フィールドを最大 2 階層に制限しました。([#9454](https://github.com/nocobase/nocobase/pull/9454)) by @jiannx
  - メニュー連動ルールの保存時にエラーが発生する問題を修正しました。([#9666](https://github.com/nocobase/nocobase/pull/9666)) by @zhangzhonghe
  - v2 ページでブロック上部の余白が大きすぎる問題を修正しました。([#9647](https://github.com/nocobase/nocobase/pull/9647)) by @zhangzhonghe
  - フィールド値の代入設定が保持されるよう修正しました。([#9640](https://github.com/nocobase/nocobase/pull/9640)) by @katherinehhh
- **[client]**

  - 参照フォームテンプレートでツリーリレーションフィールドを保存する際に発生するエラーを修正しました。([#9643](https://github.com/nocobase/nocobase/pull/9643)) by @zhangzhonghe
  - モバイル端末で選択済みのリレーションフィールドデータが表示されない問題を修正しました。([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe
  - ページ更新後、ブロックが誤って削除済みとして表示される場合がある問題を修正しました。([#9662](https://github.com/nocobase/nocobase/pull/9662)) by @zhangzhonghe
  - テーブルブロックでレコードアクション連動ルールの動作が正しくない問題を修正しました。([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust
  - 連動ルールにより非表示から再表示されたフィールドが読み取り専用になる問題を修正しました。([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh
- **[flow-engine]**

  - サブフォームにフィールド値を設定する際、ページが固まる問題を修正しました。([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust
  - UI 設定モードのスイッチを切り替えた後、ポップアップに古い UI データが表示される問題を修正しました。([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust
  - 関連フィールドにホバーした際、フィールド検索内容がクリアされる問題を修正しました。([#9646](https://github.com/nocobase/nocobase/pull/9646)) by @zhangzhonghe
- **[cli]** `.mjs` アセットを JavaScript MIME タイプで配信するよう、nginx テンプレートを修正しました。([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher
- **[database]** 数値のみのパスワード値をインポートする際に失敗する可能性がある問題を修正しました。([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile
- **[Collection: SQL]**

  - SQL Collection が機密性の高い PostgreSQL メタデータへアクセスできないようにしました。([#9683](https://github.com/nocobase/nocobase/pull/9683)) by @2013xile
- **[Data source manager]** v2 データソースマネージャーで、複数スペースを含むフィールドのローカライズ表示を修正しました。([#9690](https://github.com/nocobase/nocobase/pull/9690)) by @jiannx
- **[AI employees]**

  - フロントエンドメッセージに生の LLM プロバイダーエラーが表示されないようにしました。([#9678](https://github.com/nocobase/nocobase/pull/9678)) by @cgyrock
  - Workflow AI employee ノードでデフォルトモデルを使用できるようにしました。([#9679](https://github.com/nocobase/nocobase/pull/9679)) by @cgyrock
  - AI プロバイダーの Base URL 検証を修正しました。([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock
  - AI employee ワークフローノードで発生する `ctx.get` エラーを修正しました。([#9661](https://github.com/nocobase/nocobase/pull/9661)) by @cgyrock
- **[Action: Duplicate record]** レコード複製の送信に失敗した際、ボタン状態がリセットされない問題を修正しました。([#9676](https://github.com/nocobase/nocobase/pull/9676)) by @katherinehhh
- **[Workflow: Custom action event]** ワークベンチのアクションパネルボタン一覧に、ワークフロートリガーアクションが表示されない問題を修正しました。([#9682](https://github.com/nocobase/nocobase/pull/9682)) by @katherinehhh
- **[Calendar]** v2 ページで、設定された色フィールドに基づいてカレンダーイベントの色が表示されない問題を修正しました。([#9677](https://github.com/nocobase/nocobase/pull/9677)) by @jiannx
- **[Notification: In-app message]** アプリ内通知チャンネルのタイムスタンプフィルターにおける SQL インジェクションリスクを修正しました。([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher
- **[Flow engine]**

  - ポップアップのタブをドラッグして並び替えできない問題を修正しました。([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust
  - テンプレートを複製した後にブロックを変更すると、元のブロック内容に意図せず影響する可能性がある問題を修正しました。([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust
- **[License settings]** pkg ログインチェックが遅い、または到達できない場合に、ライセンス設定ページが長時間停止する問題を修正しました。([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji
- **[Access control]** union role がデフォルトロールの場合、初回ログイン時の権限が不完全になる問題を修正しました。([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile
- **[Block: Gantt]** ガントのツールチップ位置を改善し、タスクバーを覆わないようにしました。また、タスク名の配置をバー内外で一貫するよう調整しました。([#9638](https://github.com/nocobase/nocobase/pull/9638)) by @jiannx
- **[Workflow: JavaScript]** Workflow JavaScript モジュールサポートモードは安全ではなく、権限境界ではないことを明確にしました。([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
  参考：[Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[File manager]** ローカルファイルストレージのパス検証を修正し、安全でないパスが設定済みのストレージルート外へ抜け出さないようにしました。([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher
- **[Password policy]**

  - 基礎となるエラーにステータスコードがない場合、サインイン失敗時の実際のエラーが "argument #1 unsupported type undefined" によって隠される問題を修正しました。 by @Molunerfinn
  - 数値のみのパスワード値でパスワードポリシー検証が失敗する可能性がある問題を修正しました。 by @2013xile
- **[Data source: REST API]** データソースマネージャーの client-v2 型宣言の不一致により、REST API データソースプラグインの宣言ビルドが失敗する問題を修正しました。 by @katherinehhh
