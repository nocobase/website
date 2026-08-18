**NocoBase 2.2 正式版では、V2 の一連の利用体験がさらに充実しました。** 独立した `/v/` フロントエンドエントリーと新しいモバイル版の導入により、V2 は単なる新しいページ体験ではなく、より独立した軽量なフロントエンド実行環境へと進化しています。また、本バージョンではファイルアクセスの仕組みを刷新し、コメントブロック、AI ナレッジベース、ワークフロー、および主要プラグインの V2 対応も引き続き改善しています。

アプリケーションですでに V2 ページを中心に使用している場合、2.2 では、より完全で軽量な V2 体験を利用できます。引き続き V1 ページを中心に使用している場合は、ページとプラグインを移行してから、新しい `/v/` エントリーへ切り替えることをお勧めします。

## 新機能

### 独立した `/v/` フロントエンドエントリー

`/v/` は、新しく追加された独立ビルドのフロントエンドエントリーです。NocoBase 2.0 ではフロントエンドを大幅にリファクタリングしましたが、互換性を維持するため、V1 のモジュールやページも引き続きサポートしていました。一方、`/v/` ビルドでは V1 のレガシー要素を完全に取り除き、V1 ページやブロックの作成・表示は行わず、V2 向けの機能のみを提供します。また、`/v/` ではパフォーマンスも大幅に最適化されており、今後の NocoBase の主要な開発対象となります。

> 本番環境のページがすべて V2 で構成されている場合は、`/v/` エントリーの利用を検討できます。
>
> 主に V2 ページを使用しているものの、一部に V1 ページが残っている場合は、先にそれらを V2 へ移行してください。
>
> 引き続き V1 ページを中心に使用している場合、`/v/` へ直接切り替えることはお勧めしません。先にページと関連プラグインを移行してください。

通常は、既存のパスの先頭に `/v/` を追加するだけで、新しいエントリーへアクセスできます。

```text
# 元のパス
https://nocobase.example.com/admin/1xl0epqn6q3

# V2 独立エントリー
https://nocobase.example.com/v/admin/1xl0epqn6q3
```

#### アプリケーションのデフォルトエントリーを設定する

環境変数 `APP_CLIENT_ENTRY_MODE` を使用して、アプリケーションのエントリーモードを制御できます。

- `legacy-default`：`/` と `/v/` の両方にアクセスでき、デフォルトエントリーは `/`
- `modern-default`：`/` と `/v/` の両方にアクセスでき、デフォルトエントリーは `/v/`
- `modern-only`：`/v/` のみにアクセス可能

#### `/v/` の現在の状況

`/v/` は段階的に移行されるエントリーです。`/v/` では、主に次の変更があります。

1. Page V1 で作成したページは、`/v/` では表示されません。Page V2 で作成したページは、引き続き正常に表示されます。
2. `client-v1` のみに対応したプラグインは、`/v/` では読み込まれません。`/v/` では、`client-v2` に対応したプラグインのみが読み込まれます。詳細については、[クライアントプラグイン開発ドキュメント](https://docs.nocobase.com/ja/plugin-development/client/)を参照してください。

このバージョンでは、NocoBase の組み込みプラグインの大部分が client-v2 に対応・移行済みであり、多くの機能をそのまま利用できます。未移行の少数のプラグインについては、今後も段階的に移行を進めます。また、一部のプラグイン機能は、今後 `/v/` のみで更新・開発されます。現在の主な違いは次のとおりです。

- プラグイン一覧に、非推奨のプラグインや 1.x のみをサポートするプラグインは表示されません
- Page V1 を新規作成できません
- 公開フォームは V1 と V2 に分かれ、`/v/` では V1 の公開フォームは表示されません
- 承認ワークフローを `/v/` で使用するには、関連 UI の再設定が必要です
- 新しいモバイル版は `/v/` でのみ利用できます
- 「AI 従業員 / データソース」タブは削除されています
- コメント、カレンダー、式、外部データの各コレクションは削除されています
- ワークフローの手動ノードは、現時点では `/v/` に対応していません
- 現時点では、メニューにバッジ数を追加できません

本番環境での V1 と V2 の利用状況に応じて、`/v/` への移行を計画してください。

関連ドキュメント：

- [クライアントプラグイン開発](https://docs.nocobase.com/ja/plugin-development/client/)

### ファイルアクセス機構の刷新：安定 URL、権限チェック、デプロイ設定

NocoBase 2.2 では、NocoBase が管理するファイルのアクセス機構が大幅に刷新されました。デフォルトでは、添付ファイルやファイルのビジネス URL として、ローカルストレージのパス、オブジェクトストレージの URL、または署名付き URL を直接返さなくなりました。代わりに、次の安定した NocoBase URL を使用します。

```text
/files/<app>/<dataSource>/<collection>/<id><extname>
```

例：

```text
/files/main/main/attachments/42.pdf
```

`APP_PUBLIC_PATH=/nocobase` を設定している場合は、対応するサブパスが自動的に追加されます。

```text
/nocobase/files/main/main/attachments/42.pdf
```

安定 URL へアクセスすると、リクエストは最初に NocoBase に送られます。NocoBase は、現在のユーザー、ロール、対象の添付ファイルまたはファイルコレクションに対する閲覧権限、およびデータ範囲を確認します。確認に成功すると、ストレージエンジンが生成した実際の URL へ `302` リダイレクトします。

```text
安定 URL → NocoBase のユーザー確認と権限チェック → 302 → ローカルまたはオブジェクトストレージの実 URL
```

これにより、ビジネスコンテンツと実際の保存先 URL が分離されます。bucket、CDN ドメイン、署名方式、サムネイルルールを変更しても、ビジネスフィールドに保存済みの安定 URL は通常、変更する必要がありません。添付ファイルのアップロード、画像表示、ファイルプレビュー、ダウンロードといった日常的な操作方法は、基本的に変わりません。

#### ファイル URL と公開アクセスを個別に設定する

ファイルストレージエンジンでは、ファイルアクセスに NocoBase のロール権限とデータ権限を適用するため、デフォルトでは **NocoBase URL** の使用を推奨します。ストレージ URL を直接返す必要がある場合や、公開アクセスが必要な場合に向けて、2.2 では次の設定も個別に用意されています。

- **オリジナル URL**：ストレージエンジンの URL を直接返し、NocoBase の権限チェックを行いません
- **公開アクセスを許可**：NocoBase URL を引き続き返しますが、アクセス時にファイルレコードの権限をチェックしません

![](https://static-docs.nocobase.com/20260723221234.png)

オリジナル URL または公開アクセスを許可すると、ファイルへアクセスできる範囲が広がるため、実際の用途に応じて慎重に設定してください。設定を保存すると、同じストレージエンジン内の既存ファイルと新規ファイルの両方で API の返却形式が変わりますが、ファイルの移動や再アップロードは行われません。

#### アップグレード前にデプロイ設定を確認する

`/files/` は、NocoBase の認証を経由する必要があるアプリケーションルートです。静的ディレクトリとして処理したり、フロントエンド SPA の `index.html` フォールバックへ送ったりしないでください。現在の NocoBase CLI で生成した Nginx または Caddy の設定には、必要なルールが自動的に含まれます。リバースプロキシを独自に管理している場合は、次の点を確認してください。

- `/files/` が NocoBase へ転送され、SPA のフォールバックルールより先に評価されること
- `APP_PUBLIC_PATH` を設定している場合、対応するサブパス配下の `/files/` も転送し、互換性のためルートの `/files/` も維持すること
- 安定 URL が返す `302 Location` をキャッシュしないこと
- ページから API へクロスオリジンアクセスする場合、ページのオリジンを `CORS_ORIGIN_WHITELIST` に追加すること
- クラスターおよび複数レプリカを同時にアップグレードし、`/files/` リクエストが旧バージョンのノードへ送られないようにすること
- 外部 NocoBase データソースを使用している場合、先に利用側インスタンスと関連プラグインをアップグレードし、その後に提供側インスタンスをアップグレードすること

> **注意：** 過去の Markdown、リッチテキスト、ビジネスフィールドに保存されている `/storage/uploads/...`、CDN、オブジェクトストレージの URL は、自動的には書き換えられません。新バージョンの稼働後にアップロードしたファイルや編集したコンテンツには `/files/...` URL が保存される可能性がありますが、旧バージョンではこのルートを認識できません。ロールバック要件が厳しい環境では、書き込みを再開する前にデータベーススナップショットを保存し、あらかじめリバースプロキシ設定を検証してください。

#### セキュリティ上の境界

安定 URL はアクセス前の権限チェックを提供しますが、ファイルの内容が継続して NocoBase を経由するわけではありません。権限チェックに成功すると、ブラウザーから最終的なストレージ URL を確認できます。最終 URL が公開 bucket、公開 CDN、または公開されたローカル静的ディレクトリを指している場合、その URL を取得したユーザーは NocoBase を経由せずにアクセスできる可能性があります。

契約書、身分証明書、社内資料などの機密ファイルには、プライベートストレージ、短期間のみ有効な署名付き URL、CDN 認証など、ストレージ側のアクセス制御を併用することを推奨します。Office オンラインプレビューでは、ユーザーの権限チェックに成功した後、現在のファイルに紐づく短期間有効な一時 URL が発行されます。この URL のデフォルト有効期間は 10 分であり、長期共有用のリンクとして保存・配布しないでください。

関連ドキュメント：

- [ファイルマネージャー：安定 URL](https://docs.nocobase.com/ja/file-manager/stable-url)
- [ファイルストレージエンジンとアクセス制御](https://docs.nocobase.com/ja/file-manager/storage/)
- [環境変数](https://docs.nocobase.com/ja/get-started/installation/env)
- [本番環境へのデプロイ](https://docs.nocobase.com/ja/get-started/deployment/production)
- [Nginx リバースプロキシ](https://docs.nocobase.com/ja/nocobase-cli/production/reverse-proxy/nginx)
- [Caddy リバースプロキシ](https://docs.nocobase.com/ja/nocobase-cli/production/reverse-proxy/caddy)

### 新しいモバイル版（`/v/` のみ）

新しいモバイル版では、専用のモバイルレイアウトを使用する `/v/mobile` エントリーが提供されます。

モバイル版とデスクトップ版は、同じデータソースとビジネスデータを共有しますが、メニュー、ルート、ページコンテンツは個別に設定できます。これにより、モバイルでの利用方法に合わせてページを再構成し、モバイル端末に適したボトムタブバーをメインナビゲーションとして使用できます。

NocoBase 2.2 正式版では、モバイルのタブバー、ハーフスクリーンパネルのスクロール、埋め込みページ、権限制御などの操作性も改善され、データ入力、検索、承認、タスク処理の安定性が向上しています。

![](https://static-docs.nocobase.com/2026-07-10-08-04-59.png)

関連ドキュメント：

- [モバイルレイアウト](https://docs.nocobase.com/ja/interface-builder/ui-layout/mobile)

### 新しいコメントブロック

新しいコメントブロックは、メインデータソースのコメントコレクションに限定されず、リレーションブロックとして使用する必要もありません。タスク、記事、チケット、顧客などのレコード詳細ページやポップアップにコメントブロックを追加し、現在のレコードに関連するコメントの閲覧、返信、追加を行えます。

![](https://static-docs.nocobase.com/Comments-07-01-2026_12_02_PM.png)

関連ドキュメント：

- [コメントブロック](https://docs.nocobase.com/ja/interface-builder/blocks/data-blocks/comment)

### AI ナレッジベースの強化

AI ナレッジベースは client-v2 への移行を完了し、ナレッジベースとベクトルストレージの設定機能も強化されました。

- ワークフローでナレッジベース文書を作成する際、同じ文書 key を持つ既存文書を上書きできます
- ベクトルデータベースを設定・管理できます
- 外部ナレッジベースおよび外部ベクトルストレージ拡張用の設定エントリーが用意され、開発者はプラグインを通じて、NocoBase が標準対応していないベクトルデータベースやサードパーティの検索サービスを統合できます

![](https://static-docs.nocobase.com/20260728222404.png)

関連ドキュメント：

- [AI ナレッジベース](https://docs.nocobase.com/ja/ai-employees/knowledge-base/knowledge-base/)
- [ベクトルデータベース](https://docs.nocobase.com/ja/ai-employees/knowledge-base/vector-database)
- [External ナレッジベースプラグイン](https://docs.nocobase.com/ja/ai-employees/dev/knowledge-base/external-knowledge-base)

### ワークフロー：データベーストランザクションノード

ワークフローにデータベーストランザクションノードが追加されました。このノードは、複数のデータベース操作を同じトランザクション内で実行します。注文の作成後に在庫を減らし、注文明細を書き込み、ステータスを更新する場合など、複数のデータ処理を「すべて成功させるか、すべてロールバックする」必要があるシナリオに適しています。

![](https://static-docs.nocobase.com/20260610205505.png)

関連ドキュメント：

- [データベーストランザクションノード](https://docs.nocobase.com/ja/workflow/nodes/transaction)

## V2 対応と利用体験の改善

上記の新機能に加えて、NocoBase 2.2 正式版では、よく使用される機能の V2 インターフェースと操作性についても、移行と改善を続けています。

- ユーザー、部門、権限の設定
- ユーザーデータ同期
- DingTalk の認証、同期、通知設定
- WeCom の認証、同期、通知設定
- メール管理
- フォームの下書き
- 公開フォーム
- バックアップ管理
- データソース管理
- 翻訳テストツール

また、本バージョンでは、モバイル、埋め込みページ、サブアプリケーション SSO、印刷、エクスポートなどに関する問題を修正し、V2 エントリーの安定性と一貫性をさらに向上させています。

関連ドキュメント：

- [ユーザーデータ同期](https://docs.nocobase.com/ja/users-permissions/sync/)
- [DingTalk からユーザーデータを同期](https://docs.nocobase.com/ja/users-permissions/sync/sources/dingtalk)
- [WeCom からユーザーデータを同期](https://docs.nocobase.com/ja/users-permissions/sync/sources/wecom)

## V2 をサポートしなくなったプラグイン（非推奨、未削除）

一部のプラグインは以前のバージョンですでに非推奨となっています。現在も使用できるものがありますが、NocoBase 3 では完全に削除されます。


| プラグイン                                    | 代替機能                                | 備考           |
| --------------------------------------------- | --------------------------------------- | -------------- |
| `@nocobase/plugin-audit-logs`                 | `@nocobase/plugin-audit-logger`         | 1.0 以降非推奨 |
| `@nocobase/plugin-backup-restore`             | `@nocobase/plugin-backups`              | 1.0 以降非推奨 |
| `@nocobase/plugin-block-multi-step-form`      | JS Block                                | 2.0 以降非推奨 |
| `@nocobase/plugin-charts`                     | `@nocobase/plugin-data-visualization`   | 2.0 以降非推奨 |
| `@nocobase/plugin-collection-fdw`             | データベース同期                        | 2.2 以降非推奨 |
| `@nocobase/plugin-comments`                   | `@nocobase/plugin-block-comment`        | 2.2 以降非推奨 |
| `@nocobase/plugin-custom-variables`           | イベントフロー                          | 2.2 以降非推奨 |
| `@nocobase/plugin-data-visualization-echarts` | `@nocobase/plugin-data-visualization`   | 2.0 以降非推奨 |
| `@nocobase/plugin-disable-pm-add`             | なし                                    | 2.2 以降非推奨 |
| `@nocobase/plugin-field-component-mask`       | RunJS                                   | 2.0 以降非推奨 |
| `@nocobase/plugin-graph-collection-manager`   | なし                                    | 2.2 以降非推奨 |
| `@nocobase/plugin-mobile-client`              | `@nocobase/plugin-ui-layout`            | 2.0 以降非推奨 |
| `@nocobase/plugin-mobile`                     | `@nocobase/plugin-ui-layout`            | 2.0 以降非推奨 |
| `@nocobase/plugin-mock-collections`           | AI によるアプリ構築                     | 2.0 以降非推奨 |
| `@nocobase/plugin-multi-app-manager`          | `@nocobase/plugin-app-supervisor`       | 2.0 以降非推奨 |
| `@nocobase/plugin-multi-app-share-collection` | なし                                    | 1.0 以降非推奨 |
| `@nocobase/plugin-notifications`              | `@nocobase/plugin-notification-manager` | 1.0 以降非推奨 |
| `@nocobase/plugin-snapshot-field`             | なし                                    | 1.0 以降非推奨 |
