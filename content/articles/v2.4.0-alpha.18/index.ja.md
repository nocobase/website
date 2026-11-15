### **🚀 機能改善**

* **[undefined]** `exit` と `exitAll` が、順次実行フローとすでに開始されている並列フローにどのような影響を与えるかを、ドキュメントで明確にしました。 ([#11451](https://github.com/nocobase/nocobase/pull/11451?utm_source=chatgpt.com))
  参考ドキュメント：[RunJS documentation (all supported translations)](https://github.com/nocobase/nocobase/blob/fix/main-issue-8946/docs/docs/cn/runjs/context/exit.md?utm_source=chatgpt.com)
* **[権限制御]** ロールチェック API における予約済みロール値のフォールバックルールと、API キーのロール優先順位を明確にしました。 ([#11452](https://github.com/nocobase/nocobase/pull/11452?utm_source=chatgpt.com))
  参考ドキュメント：[OpenAPI: roles:check](https://github.com/nocobase/nocobase/blob/fix/main-issue-10399/packages/plugins/@nocobase/plugin-acl/src/swagger/index.ts?utm_source=chatgpt.com)
* **[アプリケーションスーパーバイザー]** 「環境」と「プロキシ環境」のドロップダウンを名前の昇順で表示するようにしました。名前に含まれる数字は数値として扱うため、例えば `cluster-2` は `cluster-10` より前に表示されます。

### **🐛 不具合修正**

* **[resourcer]** リソース API の `filter` クエリパラメータに無効な JSON が指定された場合、空の成功レスポンスではなく、HTTP 400 エラーを返すようにしました。 ([#11465](https://github.com/nocobase/nocobase/pull/11465?utm_source=chatgpt.com))
* **[ai]** MCP ツールのグローバル権限設定がアプリケーションの再起動後に失われる問題と、アプリケーションインスタンス間で設定が一致しない問題を修正しました。 ([#11476](https://github.com/nocobase/nocobase/pull/11476?utm_source=chatgpt.com))
* **[client-v2]** 手動で設定した列の並び順をクリアすると、テーブルが元の設定順序に戻るようにしました。 ([#11443](https://github.com/nocobase/nocobase/pull/11443?utm_source=chatgpt.com))
* **[client]** リレーションラベルからレコードを開く際のモーダル表示方式とサイズを設定できるようにし、クリックしたレコードが開くようにしました。 ([#11449](https://github.com/nocobase/nocobase/pull/11449?utm_source=chatgpt.com))
* **[ワークフロー：CC]** ワークフローの CC タスクを既読・未読に切り替えた際、既読状態と時刻のみを更新し、元の受信者情報と関連するワークフローレコードは変更されないようにしました。 ([#11516](https://github.com/nocobase/nocobase/pull/11516?utm_source=chatgpt.com))
* **[認証：API キー]** API キーを削除した際、現在のユーザーに削除権限があるキーだけが無効化されるようにしました。 ([#11513](https://github.com/nocobase/nocobase/pull/11513?utm_source=chatgpt.com))
* **[ユーザー認証]**

  * パスワード再設定時、登録済み・未登録のどちらのメールアドレスにも同じ案内を表示し、実際のメールは登録済みアドレスにのみ送信するようにしました。 ([#11501](https://github.com/nocobase/nocobase/pull/11501?utm_source=chatgpt.com))
  * パスワード再設定メールから、サブアプリに紐付けられた独自ドメインを優先して開くようにしました。**メールによるパスワード再設定を有効にしているメインアプリと、独自ドメインを設定していないサブアプリでは、アップグレード前に **`APP_PUBLIC_ORIGIN`** を設定してください。** ([#11496](https://github.com/nocobase/nocobase/pull/11496?utm_source=chatgpt.com))
    参考ドキュメント：[メールによるパスワード再設定のドメインとアップグレードに関する説明](https://github.com/nocobase/nocobase/blob/f26e6b7705/docs/docs/cn/get-started/installation/env.md?utm_source=chatgpt.com#app_public_origin)
* **[カスタム変数]** カスタム変数の作成・編集・削除には、「UI 設定を許可」権限が必要になりました。 ([#11528](https://github.com/nocobase/nocobase/pull/11528?utm_source=chatgpt.com))
* **[カレンダー]** v1 と v2 のカレンダーで、選択したスペイン語ロケールに合わせて曜日のヘッダーが表示されるようにしました。 ([#11446](https://github.com/nocobase/nocobase/pull/11446?utm_source=chatgpt.com))
* **[モバイル版（非推奨）]** v1 モバイル版フォームで UnixTimestamp フィールドを送信した際、時刻形式が PC 版と一致するようにしました。 ([#11427](https://github.com/nocobase/nocobase/pull/11427?utm_source=chatgpt.com))
* **[ファイルマネージャー]** ファイルマネージャーを有効にすると、ツリーパスの再構築などのプラグイン CLI コマンドを読み込めなくなる問題を修正しました。 ([#11354](https://github.com/nocobase/nocobase/pull/11354?utm_source=chatgpt.com))
* **[AIワーカー]**

  * Web UI や API から stdio MCP サービスを新規作成したり、デプロイ管理対象の接続を変更・削除したりできないようにしました。サービスの起動・停止と接続テストは引き続き利用できます。また、MCP のデプロイ設定は `storage/ai/mcp/servers.json` から読み込む方式に変更し、TS/JS ファイルの自動インポートを廃止しました。 ([#11461](https://github.com/nocobase/nocobase/pull/11461?utm_source=chatgpt.com))
  * JavaScript エディターがブロックの内容を正常に返した後も、Nathan がツール呼び出しの中断を報告してしまう問題を修正しました。 ([#11454](https://github.com/nocobase/nocobase/pull/11454?utm_source=chatgpt.com))
* **[UI テンプレート]** 別のモーダルを開く操作からテンプレートを保存した後、テンプレートの参照をコピーに変更しても、元のモーダルの変更が引き続き反映されてしまう問題を修正しました。 ([#11491](https://github.com/nocobase/nocobase/pull/11491?utm_source=chatgpt.com))
* **[テンプレート印刷]** アップグレード後、必要な依存関係が不足しているためにテンプレート印刷プラグインを読み込めなくなる問題を修正しました。
