## 背景

最近、[Hacker News](https://news.ycombinator.com/item?id=47796469) で、AI Coding Agent に関する議論を見かけました。**AI にゼロからアプリを作らせることは、必ずしも最も確実な使い方ではない**という内容です。

![HN.png](https://static-docs.nocobase.com/HN-nb8ae5.png)

この開発者は、AI にただ「アプリを作って」と指示するだけでは、**見た目はよくても、構造が不安定なものが生成されやすい**と述べています。

AI は実行効率を高めるのに非常に有効です。ただし、その力を活かすには、AI が作業できる明確な構造が必要です。

実際の企業向け内部ツールを作る場合も、信頼できる基盤の上で Coding Agent を使う方が効率的です。

今回は、企業向け内部ツールの構築という文脈で、Codex と組み合わせやすいオープンソースプロジェクトを紹介します。内部システムや業務ツールをより効率よく構築したい開発者に向けた内容です。

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---




| プロジェクト | 最適な用途                                                      | 適した開発者                                                                     |
| ------------ | --------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| NocoBase     | CRM、チケット管理、承認、資産管理などの内部業務システム構築     | 保守しやすい業務システムを素早く構築したい開発者                                 |
| Refine       | React 管理画面、Dashboard、B2B アプリの構築                     | React に慣れており、コードの主導権を持ちたい開発者                               |
| Payload CMS  | TypeScript / Next.js ベースのデータ管理画面や管理システムの構築 | TypeScript-first なバックエンドと Admin Panel を好む開発者                       |
| Directus     | 既存の SQL データベースから API と管理画面を生成                | 既存データベースを活かし、管理画面と API レイヤーを短期間で整備したいチーム      |
| Supabase     | 内部ツール向けの Postgres バックエンド構築                      | 認証、データベース、ストレージ、リアルタイム機能、バックエンド関数が必要な開発者 |
| Windmill     | スクリプトを内部ツール、タスク、ワークフローに変換              | 多数の社内スクリプトや自動化タスクを運用する技術チーム                           |

## 1. NocoBase

公式サイト：[https://www.nocobase.com/](https://www.nocobase.com/)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Stars：22.4k

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-nfhndl.png)

NocoBase は、CRM、チケット管理システム、承認システム、プロジェクト管理、資産管理、運用管理画面など、企業向け内部業務システムの構築に適したオープンソースの AI ノーコードプラットフォームです。

NocoBase の主な価値は、**内部システムに必要な基盤を一通り提供できること**です。データモデル、ページ設定、権限管理、ワークフロー、プラグイン拡張、AI 機能などが含まれます。開発者にとって、NocoBase は単なるドラッグ＆ドロップ型の画面作成ツールではありません。コードで拡張しながら使える、業務システム向けの基盤です。

NocoBase 公式では、Codex 関連のドキュメントも提供されています：[Codex で NocoBase を操作し、構築と開発を両立する](https://docs.nocobase.com/ja/ai/codex)

Codex と連携すると、Codex は [NocoBase Skills](https://docs.nocobase.com/ja/ai-builder#nocobase-skills) と [CLI](https://docs.nocobase.com/ja/api/cli/) を通じて、NocoBase の設定方法や開発ルールを理解できます。これにより、開発者は自然言語でデータテーブルの作成、ページ設定、ワークフロー設計、権限設定を進められます。さらに、プラグイン開発、機能拡張、問題調査にも活用できます。

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-40774f.png)

**Codex に内部システムをゼロから生成させるよりも、NocoBase を使うことで、より安定したシステム基盤の上で開発できます**。生成されるものは、保守しにくい一回限りのコードではなく、NocoBase の仕組みの中で継続的に改善・拡張できるシステムになります。

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-qu1ijq.png)

構築段階だけでなく、NocoBase には AI 従業員機能もあります。AI 従業員は、業務ページ、データテーブル、ワークフローの文脈を理解しながら、データ整理、データ分析、翻訳、リサーチ、メール処理、データモデリング、グラフ設定などを支援できます。つまり、Codex は開発者によるシステム構築や拡張に向いており、NocoBase の AI 従業員は、システム公開後の日常業務にも活用できます。

![ai员工填表单-yhms5j.gif](https://static-docs.nocobase.com/ai%E5%91%98%E5%B7%A5%E5%A1%AB%E8%A1%A8%E5%8D%95-yhms5j.gif)

LLM サービス、Skills、ナレッジベース、クイックタスクを設定することで、AI 従業員は具体的な業務操作に自然に参加できます。これにより、チームはシステム構築と日常利用の両方で効率を高められます。

### Codex と NocoBase を組み合わせるとできること

Codex と NocoBase を組み合わせると、開発者は保守しやすい企業向け内部業務システムをより短期間で構築できます。例えば、次のようなシステムです。

* CRM
* チケット管理システム
* 承認システム
* プロジェクト管理
* 資産管理
* 運用管理画面
* データダッシュボード

Codex は、要件の理解、業務構造の分解、実装の生成を支援します。NocoBase は、データモデル、権限、ページ、ワークフロー、プラグイン拡張を支える基盤になります。開発者は AI に保守しにくいコードをゼロから生成させるのではなく、NocoBase の既存フレームワークの中で Codex に構築と開発を任せられます。

### おすすめ prompt

#### NocoBase のインストール

以下のプロンプトを Codex にコピーすると、NocoBase のインストールと初期設定を進められます。

```text
NocoBase CLI をインストールし、初期化まで完了してください：https://docs.nocobase.com/ja/ai/ai-quick-start.md （リンク先の内容を直接確認してください）
```

#### システム設計

```text
nocobase-dsl-reconciler skill を使って、チケット管理システムを構築してください。ダッシュボード、チケット一覧、ユーザー管理、SLA 設定を含めてください。
```

#### 実際の効果

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-1klco2.png)

![NocoBase5.png](https://static-docs.nocobase.com/NocoBase5-fhuwo3.png)

### 関連リソース

Codex にコピーして送ると、すぐに使いやすくなります。

ドキュメント：[https://docs.nocobase.com/ja/ai/](https://docs.nocobase.com/ja/ai/)

CLI：[https://docs.nocobase.com/ja/api/cli/](https://docs.nocobase.com/ja/api/cli/)

Skills：[https://docs.nocobase.com/ja/ai-builder#nocobase-skills](https://docs.nocobase.com/ja/ai-builder#nocobase-skills)

MCP：[https://docs.nocobase.com/ja/ai/mcp/](https://docs.nocobase.com/ja/ai/mcp/)

## 2. Refine

公式サイト：[https://refine.dev/](https://refine.dev/)

GitHub：[https://github.com/refinedev/refine](https://github.com/refinedev/refine)

GitHub Stars：34.7k

![Refine1.png](https://static-docs.nocobase.com/Refine1-8qgxcz.png)

Refine は、開発者向けのオープンソース React フレームワークです。主に内部ツール、管理画面、Dashboard、B2B アプリの構築に使われます。認証、権限管理、ルーティング、データ取得、状態管理、国際化などの基本機能を備えており、CRUD が多いアプリケーションを素早く作るのに適しています。

Refine は現在、AI Agent 向けの利用シーンも強化しています。既存の REST API や Supabase プロジェクトに接続し、バックエンド構造を分析したうえで、AI agents 向けの blueprint を作成できます。これにより、AI が生成するアプリを実際のデータモデルに合わせやすくなります。

Refine が Codex と組み合わせやすい理由もここにあります。Codex は、内部ツールの構造をゼロから推測する必要がありません。Refine のプロジェクト構造、リソースモデル、データソース設定を前提に、一覧ページ、詳細ページ、編集ページ、フォーム、フィルター、権限判定、API 呼び出しロジックを生成できます。

![Refine2.png](https://static-docs.nocobase.com/Refine2-jpcnwg.png)

Refine には CLI も用意されています。リソース作成、更新管理、コンポーネントの swizzle、build、start、dev などのプロジェクトタスクを実行できます。Codex のような Coding Agent にとって、明確な CLI は自動化しやすく、既存プロジェクトを継続的に改善する際にも扱いやすい入口になります。

### Codex と Refine を組み合わせるとできること

Codex と Refine の組み合わせは、React 技術スタックで内部管理画面を素早く開発したい場合に特に向いています。例えば、CRM 管理画面、注文管理画面、運用レビュー画面、カスタマーサポート画面、データ管理パネル、B2B SaaS 管理画面などです。

注文管理画面を作る場合、Codex は注文、顧客、商品、支払いステータスなどのデータ構造に基づいて、Refine 上で注文一覧、注文詳細、編集フォーム、絞り込み条件、ステータス更新ボタン、権限判定ロジックを生成できます。Refine は React 内部ツールの基本構造を提供し、Codex は具体的な業務画面の開発を加速します。

この組み合わせは、コードの主導権を保ちたい開発者に向いています。最終的に得られるのは React プロジェクトであり、閉じたプラットフォーム内の設定結果ではありません。その後も Codex を使って、コンポーネントの修正、ロジックのリファクタリング、新しい API の接続、業務モジュールの拡張を続けられます。

### おすすめ prompt

```text
Refine をベースに注文管理画面を作成してください。REST API をデータソースとして使用し、注文一覧、注文詳細、注文編集フォーム、顧客フィルター、注文ステータス更新、基本的な権限管理を含めてください。
```

## 3. Payload CMS

公式サイト：[https://payloadcms.com/](https://payloadcms.com/)

GitHub：[https://github.com/payloadcms/payload](https://github.com/payloadcms/payload)

GitHub Stars：42.5k

![Payload CMS1.png](https://static-docs.nocobase.com/Payload%20CMS1-9l7yh9.png)

Payload CMS は、オープンソースのフルスタック Next.js フレームワークです。CMS、管理画面、データ駆動型アプリ、企業向け内部ツールの構築に利用できます。TypeScript 設定、データ collection、権限管理、Admin Panel、REST / GraphQL API、Hooks、プラグイン、ファイル管理などの機能を備えています。

Payload では、データモデルと業務ロジックをコードで定義します。TypeScript で collections、fields、access control、hooks、admin UI を設定できるため、内部ツールのバックエンド、API、管理画面を同じコードプロジェクト内で管理できます。

Payload も AI Agent 関連の利用シーンに対応し始めています。公式ドキュメントでは MCP Plugin が提供されており、AI がどの collections や globals に対して find、create、update、delete などの操作を実行できるかを開発者が制御できます。また、独自の prompts、tools、resources も定義できます。

![Payload CMS2.png](https://static-docs.nocobase.com/Payload%20CMS2-jczl8t.png)

### Codex と Payload を組み合わせるとできること

Codex と Payload の組み合わせは、TypeScript / Next.js 技術スタックで、データ管理画面、コンテンツ管理システム、顧客管理画面、注文管理画面、資産管理画面、運用管理ツールを素早く開発したい場合に適しています。

![Payload CMS3.png](https://static-docs.nocobase.com/Payload%20CMS3-lejqn0.png)

例えば資産管理画面を作る場合、Codex は「設備、従業員、部門、貸出記録、修理記録、承認ステータス」などの要件に基づいて、Payload collections、フィールド設定、アクセス権限、hooks を生成できます。Payload は、データ管理画面、API、権限実行の基盤を提供します。後から業務ロジックを追加したい場合も、Codex を使って TypeScript 設定や拡張コードを変更できます。

### おすすめ prompt

```text
Payload CMS をベースに資産管理画面を作成してください。設備、従業員、部門、貸出記録、修理記録の collections を含め、基本フィールド、アクセス権限、Admin Panel の表示フィールド、よく使う hooks を設定してください。
```

## 4. Directus

公式サイト：[https://directus.io/](https://directus.io/)

GitHub：[https://github.com/directus/directus](https://github.com/directus/directus)

GitHub Stars：35.7k

![Directus1.png](https://static-docs.nocobase.com/Directus1-7w23p8.png)

Directus は、オープンソースのデータ管理プラットフォームです。PostgreSQL、MySQL、SQLite、MariaDB、MS SQL、OracleDB などの SQL データベースを、REST / GraphQL API とビジュアル管理画面に変換できます。データ管理画面、コンテンツ管理システム、運用管理画面、顧客データ管理画面、内部 API レイヤーなどの構築に適しています。

Directus の特徴は、既存データベースとの相性がよいことです。多くの内部ツールはゼロから作るものではありません。すでに業務データベースは存在しているものの、使いやすい管理画面、権限管理、API レイヤーが不足していることがよくあります。Directus は既存の SQL データベースに直接接続し、その上にデータモデル管理、ロール権限、ファイル管理、自動化フロー、拡張機能を提供できます。

Directus は MCP Server も提供しており、Claude、ChatGPT、Cursor などの AI ツールを Directus に接続できます。AI は既存の権限体系の中でコンテンツを作成、編集、管理できます。データを別途コピーする必要も、Directus の権限管理を迂回する必要もありません。

![Directus2.png](https://static-docs.nocobase.com/Directus2-otlau7.png)

### Codex と Directus を組み合わせるとできること

Codex と Directus の組み合わせは、既存データベースを活かして、内部データ管理画面や API レイヤーを素早く構築したい場合に適しています。例えば、顧客データ管理、注文データ管理、コンテンツ管理、商品カタログ管理、運用設定画面、データレビュー画面などです。

この組み合わせでは、Directus がデータベース接続、API 生成、管理画面、権限体系を担います。Codex は、業務要件の理解、データ構造の設計、拡張ロジック、Hooks、Custom Endpoints、データスクリプト、フロントエンド呼び出しコードの作成を支援します。

この方法のメリットは、既存のデータベースやバックエンドを書き直さなくてよいことです。Directus がデータレイヤーと管理画面を提供し、Codex が業務ロジックと拡張開発を加速します。すでにデータベースを持っていて、内部ツールとして使うための機能を短期間で整えたいチームに向いています。

### おすすめ prompt

```text
Directus をベースに、既存の注文データベース向けの内部管理画面を設計してください。注文、顧客、商品、支払い記録の4種類のデータを含め、基本権限、一覧ビュー、ステータス更新フロー、注文ステータス変更後の通知 Hook を設定してください。
```

## 5. Supabase

公式サイト：[https://supabase.com/](https://supabase.com/)

GitHub：[https://github.com/supabase/supabase](https://github.com/supabase/supabase)

GitHub Stars：103k

Supabase については、すでに詳しく紹介する必要はないでしょう。

Supabase 公式は Supabase MCP Server を提供しており、AI ツールが Supabase プロジェクトに接続し、権限の範囲内でプロジェクトを参照・操作できます。また、Supabase には AI agents 向けの skills も用意されています。対象は、データベース、Auth、Edge Functions、Realtime、Storage、Vectors、Cron、Queues、CLI、MCP、schema changes、migrations、RLS ポリシー、セキュリティ監査などです。

![Supabase1-rq907o.png](https://static-docs.nocobase.com/Supabase1-rq907o.png)

### Codex と Supabase を組み合わせるとできること

Codex と Supabase の組み合わせは、内部ツールのバックエンド部分を素早く構築したい場合に適しています。Supabase は、データベース、認証、API、ストレージ、関数実行環境を提供します。Codex は、業務要件に基づく schema 設計、SQL 作成、RLS 権限設定、Edge Functions の生成、フロントエンドからの Supabase API 呼び出しを支援します。

例えば顧客管理画面を作る場合、Codex は「顧客、連絡先、フォロー記録、営業機会、契約、添付ファイル」などの要件に基づいて、Postgres のテーブル構造、フィールド間の関係、インデックス、RLS ポリシーを設計できます。Supabase は、データベース、認証、自動 API、権限実行の基盤を提供します。後から顧客の自動割り当て、外部データの同期、AI 要約の生成が必要になった場合も、Codex に Edge Functions やデータベース関数の作成を任せられます。

### おすすめ prompt

```text
Supabase をベースに、顧客管理画面のバックエンドを設計してください。customers、contacts、opportunities、contracts、follow_ups、attachments テーブルを含めてください。SQL migration、基本インデックス、RLS ポリシー、認証権限設計、営業担当者を自動割り当てする Edge Function を生成してください。
```

## 6. Windmill

公式サイト：[https://www.windmill.dev/](https://www.windmill.dev/)

GitHub：[https://github.com/windmill-labs/windmill](https://github.com/windmill-labs/windmill)

GitHub Stars：16.5k

Windmill は、開発者向けのオープンソースプラットフォームです。Python、TypeScript、Go、Bash、SQL などのスクリプトを、API、バックグラウンドタスク、ワークフロー、内部アプリに素早く変換できます。自動化フロー、データ処理タスク、運用ツール、バックグラウンドタスク管理、社内スクリプト基盤、軽量な管理画面の構築に適しています。

![Windmill1-kcvxsb.png](https://static-docs.nocobase.com/Windmill1-kcvxsb.png)

Windmill は CLI と組み込みの AI skills を通じて、ローカル環境で Claude Code や Codex を使った開発に対応しています。その後、`wmill sync push` でリモート workspace にデプロイできます。つまり、Codex がスクリプトやワークフローのロジック作成を支援し、Windmill が実行、スケジューリング、権限管理、ログ、可視化された操作画面を担います。

### Codex と Windmill を組み合わせるとできること

Codex と Windmill の組み合わせは、開発者が書いたスクリプトを、チームで使える内部ツールに変換したい場合に特に向いています。例えば、データ同期、レポート生成、一括インポート・エクスポート、Webhook 処理、定期タスク、顧客データクレンジング、注文ステータス同期、Slack / Email 通知、AI データ処理フローなどです。

例えば、「毎晩 CRM の顧客データを同期し、異常レポートを生成する」内部フローを作る場合、Codex はデータの読み取り、クレンジング、比較、レポート生成スクリプトの作成を支援できます。Windmill はそれを定期タスクとして設定し、実行ログを記録し、チームが手動で実行したり結果を確認したりできる内部ページを提供します。

### おすすめ prompt

```text
Windmill をベースに顧客データ同期フローを作成してください。毎晩 PostgreSQL から顧客データを読み取り、重複レコードをクレンジングし、不正または異常なメールアドレスを検出し、異常レポートを生成して Slack で運用チームに通知してください。TypeScript でスクリプトを書き、定期タスクと入力パラメータの設定方法も説明してください。
```

## 最後に

Codex のような AI Coding Agent は、開発者が内部ツールを構築する方法を変えつつあります。

NocoBase、Refine、Payload、Directus、Supabase、Windmill などのプロジェクトは、業務システム、フロントエンドフレームワーク、データ管理画面、バックエンドサービス、スクリプト自動化など、それぞれ異なる角度から、開発者に明確なエンジニアリング基盤を提供します。

Codex の価値は、これらの基盤の上で開発効率をさらに高められることです。要件を分解し、コードを生成し、リソースを設定し、スクリプトを書き、ワークフローを設計し、連携を処理し、問題を調査する作業を支援します。

より理想的な開発方法は、次のようなものです。

> 開発者が適切なオープンソース基盤を選び、その明確な構造の中で Codex に具体的な実装を任せる。

このように構築した内部ツールは、保守しやすく、拡張しやすく、実際の業務にも投入しやすくなります。

## SEO 信息

### 中文

**SEO 标题**：别让 Codex 从零生成应用：6 个可组合的开源项目

**SEO 摘要**：推荐 NocoBase、Refine、Payload CMS 等开源项目，帮助 Codex 在清晰框架中构建更稳定、可维护的内部工具。

### 日本語

**SEO タイトル**：Codex にゼロから作らせないための6つのオープンソースプロジェクト

**SEO 概要**：NocoBase、Refine、Payload CMS など、Codex と組み合わせて保守しやすい内部ツールを作るためのプロジェクトを紹介します。

### English

**SEO Title**: Do Not Let Codex Build from Scratch: 6 Open Source Projects to Try

**SEO Summary**: Explore open source projects such as NocoBase, Refine, and Payload CMS that help Codex build more stable and maintainable internal tools.

**関連記事**：

* [Claude Code を使うなら知っておきたい 6 つのオープンソースツール](https://www.nocobase.com/ja/blog/open-source-tools-after-claude-code)
* [企業向けソフトウェア開発に適したオープンソース AI ノーコードツール 10 選](https://www.nocobase.com/ja/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [企業内部ツール必須：8 大オープンソース AI Agent プラットフォーム比較](https://www.nocobase.com/ja/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [RBAC・AI・API 完全対応｜エンタープライズ向けセルフホスト型 CRM 厳選ガイド](https://www.nocobase.com/ja/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [自社開発ミドルウェアから脱却するための、オープンソース統合ツール6選](https://www.nocobase.com/ja/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Airtable vs NocoBase のリアルな移行コスト](https://www.nocobase.com/ja/blog/airtable-vs-nocobase-migration-cost-comparison)
* [Excel データをすばやく Web アプリ化する 4 つの方法を比較](https://www.nocobase.com/ja/blog/excel-to-web-app-4-methods)
* [PostgreSQL だけじゃない 外部データベース対応のノーコード／ローコードプラットフォーム 5 選 비교](https://www.nocobase.com/ja/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [オープンソースのプロジェクト管理ツール比較・選定ガイド（2026年最新版）](https://www.nocobase.com/ja/blog/open-source-project-management-tool-selection-guide-2026-edition)
* [PostgreSQL を使って独自の CRM を構築する方法](https://www.nocobase.com/ja/blog/how-to-build-a-custom-crm-with-postgresql)
* [2026年に注目すべき20のGitHub AIプロジェクト：OpenClawだけではない](https://www.nocobase.com/ja/blog/best-open-source-ai-projects-github-2026)
* [GitHubで注目されるオープンソースCRMのAI機能を徹底解説：NocoBase vs Twenty vs Krayin CRM](https://www.nocobase.com/ja/blog/best-ai-crm-open-source-nocobase-twenty-krayin)
