## はじめに

今年、OpenCode は注目を集めるオープンソース AI Coding Agent の一つです。

![OpenCode.png](https://static-docs.nocobase.com/OpenCode-c2tqyc.png)

OpenCode は、開発者により高い自由度と制御性を与えてくれます。使うモデルを選べるだけでなく、自分のターミナルやプロジェクト環境で利用でき、既存の開発フローにも組み込めます。特定のクローズドなプラットフォームに完全に依存する必要はありません。

[Reddit のこのユーザーも次のように共有しています](https://www.reddit.com/r/opencodeCLI/comments/1rwbbbh/what_is_your_opinion_on_open_code/)：**自分で AI ツールを選びたい。自分を「バブル」の中に閉じ込める企業は信頼できない。自由にプロバイダーを切り替えられる場所がほしい。**

![reddit.png](https://static-docs.nocobase.com/reddit-021umn.png)

**これこそ、AI 時代にオープンソースツールの重要性が高まっている理由です。**

以前、オープンソースツールを選ぶ理由は、無料で使える、セルフホストできる、自由に変更できる、といった点が中心でした。今はそこに、もう一つの価値が加わっています。**オープンソースプロジェクトは、AI ツールにとって読み取りやすく、操作しやすく、拡張しやすいのです。**

コード構造、ドキュメント、API、CLI、プラグイン機構が整っているプロジェクトであれば、OpenCode のような AI Agent は、単に「コードを数行書く」だけでは終わりません。インストール、設定、連携、拡張、保守まで、プロジェクトに実際に関わることができます。

そのため、OpenCode を使っている場合でも、毎回ゼロからコードを書かせる必要はありません。より現実的な方法は、成熟したオープンソースプロジェクトを土台にして、実際の業務開発を OpenCode に加速してもらうことです。

この記事では、OpenCode と組み合わせて使いやすい 5 つのオープンソースプロジェクトを紹介します。対象は、業務システム、データ API、自動化、データ分析、ナレッジベース、認証などの領域です。いずれも AI と相性のよい、実績あるオープンソースプロジェクトです。ぜひ試してみてください。

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---




| OpenCode で構築したいもの                                       | おすすめプロジェクト |
| --------------------------------------------------------------- | -------------------- |
| CRM、チケット管理、承認、資産管理、運用管理画面、各種内部ツール | NocoBase             |
| データ API、Headless CMS、コンテンツ管理画面                    | Directus             |
| データ分析、レポート、Dashboard                                 | Metabase             |
| プロジェクトドキュメント、ナレッジベース、AI のコンテキスト     | Outline              |
| SSO、認証、アクセス制御                                         | Keycloak             |

## 1. NocoBase：業務システムと内部ツール

公式サイト：[https://www.nocobase.com/](https://www.nocobase.com/)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Stars：22.5k

CRM、チケット管理システム、承認システム、資産管理、プロジェクト管理、運用管理画面のような業務システムを構築したい場合、NocoBase は OpenCode と組み合わせやすいオープンソースプロジェクトです。NocoBase は AI とノーコードを組み合わせた開発プラットフォームで、本番環境で検証された基盤と WYSIWYG のノーコード画面を提供します。AI と人が効率よく協働でき、開発スピードとシステムの信頼性を両立できます。

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-u2k53a.png)

例えば、社内向けのチケット管理システムを作りたい場合、OpenCode は次のような作業を支援できます。

* NocoBase プロジェクトの初期化
* 要件に基づくデータモデル設計
* 顧客、チケット、担当者、優先度などのデータ構造の作成
* チケット管理ページの構築
* ステータス遷移と通知ワークフローの設定
* 特殊な業務プラグインの開発
* 外部システム API との連携

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-x5mhwx.png)

一方で、NocoBase はシステムの基盤を担います。ページ、権限、自動化フロー、データ関係などを管理できます。つまり、OpenCode がシステム全体をゼロから生成する必要はありません。NocoBase の既存構造を前提に作業できます。

これは実際の業務システムにおいて重要です。企業内部システムの要件は、運用の中で頻繁に変わるからです。NocoBase を使えば、開発者は複雑な拡張を OpenCode に任せつつ、業務担当者もノーコード画面でページ、フィールド、フローを継続的に調整できます。

また、NocoBase には AI 従業員機能も組み込まれています。業務システムを NocoBase 上に構築すると、その後の業務でも AI と連携しやすくなります。

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-usmzfz.png)

例えば、システム内の業務データをもとにインサイトレポートを生成し、そのまま PDF としてエクスポートしたり、HTML 形式で表示したりできます。

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-7e0d9h.png)

関連ドキュメント：[OpenCode + NocoBase：オープンソース、自由、縛られない NocoBase の構築方法](https://docs.nocobase.com/ja/ai/opencode)

OpenCode は、次のような形で NocoBase と連携します。

```text
あなた（ターミナル / VS Code / JetBrains / ...）
  │
  └─→ OpenCode
        │
        ├── NocoBase Skills（Agent が NocoBase の設定体系を理解するためのもの）
        │
        └── NocoBase CLI（作成、変更、デプロイなどの操作を実行）
              │
              └─→ NocoBase サービス（あなたの業務システム）
```

* NocoBase Skills：OpenCode が NocoBase の操作方法を理解するためのドメイン知識パッケージ
* NocoBase CLI：データモデリングやページ構築などを実行するコマンドラインツール
* NocoBase サービス：実際に稼働している NocoBase インスタンス

### ワンクリック AI インストール

以下のプロンプトを OpenCode にコピーすると、NocoBase CLI のインストール、初期化、環境設定を自動で進められます。

```text
NocoBase CLI をインストールし、初期化まで完了してください：https://docs.nocobase.com/ja/ai/ai-quick-start.md （リンク先の内容を直接確認してください）
```

### 関連リソース

ドキュメント：[https://docs.nocobase.com/ja/ai/](https://docs.nocobase.com/ja/ai/)

CLI：[https://docs.nocobase.com/ja/api/cli/](https://docs.nocobase.com/ja/api/cli/)

Skills：[https://docs.nocobase.com/ja/ai-builder#nocobase-skills](https://docs.nocobase.com/ja/ai-builder#nocobase-skills)

MCP：[https://docs.nocobase.com/ja/ai/mcp/](https://docs.nocobase.com/ja/ai/mcp/)

## 2. Directus：データ API とコンテンツ管理画面

公式サイト：[https://directus.io/](https://directus.io/)

GitHub：[https://github.com/directus/directus](https://github.com/directus/directus)

GitHub Stars：35k

すでにデータベースがあるプロジェクトや、業務システム向けにデータ API、コンテンツ管理画面、権限管理レイヤーを素早く整えたい場合、Directus は OpenCode と組み合わせやすいオープンソースプロジェクトです。

![Directus1.png](https://static-docs.nocobase.com/Directus1-0a1hg8.png)

Directus の中核となる機能は、**SQL データベースを管理可能なデータプラットフォームに変えること**です。データベースをもとに REST API と GraphQL API を自動生成し、さらに可視化された Data Studio を提供します。開発者も業務担当者も、データ、コンテンツ、ファイル、権限を管理できます。

例えば、OpenCode を使ってコンテンツ中心の Web サイト、顧客ポータル、製品資料ライブラリ、内部データプラットフォームを開発しているとします。すべてをゼロから作る場合、OpenCode はデータベースモデル、API サービス、認証ロジック、管理画面、ファイル管理、権限制御まで生成する必要があり、作業量も保守負担も大きくなります。

Directus を土台にすれば、データ管理、API、権限、管理画面は Directus が提供します。OpenCode は、その上でプロジェクト開発、連携、拡張を進められます。

この組み合わせは、コンテンツやデータが多いプロジェクトに向いています。例えば製品資料ライブラリを作る場合、Directus は製品カテゴリ、仕様、画像、ドキュメント、公開ステータスを管理できます。OpenCode は Directus API をもとに、フロントエンドページ、検索・絞り込み機能、データインポートスクリプト、カスタム API を素早く作成できます。

![Directus2.png](https://static-docs.nocobase.com/Directus2-r78b4m.png)

Directus と OpenCode の組み合わせは、特に次のようなシーンに向いています。

* Headless CMS
* コンテンツ管理システム
* 製品資料ライブラリ
* 顧客事例センター
* 多言語コンテンツプラットフォーム
* 内部データ管理画面
* データ API レイヤー
* ファイル・メディアリソース管理
* 顧客ポータル / Partner portal
* モバイル App バックエンド

NocoBase との違いも明確です。

Directus は、データベースとコンテンツ API を中心としたプロジェクトに向いています。例えば、コンテンツプラットフォーム、製品カタログ、多言語サイト、顧客ポータルなどです。一方で NocoBase は、CRM、チケット管理、承認、資産管理、運用管理画面のような、より完整な業務システムの構築に向いています。このようなシステムでは、データ関係、ワークフロー、権限管理、ページ設定がより重要になります。

## 3. Metabase：データ分析と高度なレポート

公式サイト：[https://www.metabase.com/](https://www.metabase.com/)

GitHub：[https://github.com/metabase/metabase](https://github.com/metabase/metabase)

GitHub Stars：47.4k

OpenCode を使って業務システム、内部ツール、運用管理画面、データプラットフォームを開発しているなら、Metabase も組み合わせて使いやすいオープンソースプロジェクトです。

![Metabase1.png](https://static-docs.nocobase.com/Metabase1-hwifhf.png)

Metabase は、オープンソースのデータ分析・BI 機能を提供します。データベースに接続し、チームがグラフ、クエリ、Dashboard を使って業務データを分析できるようにします。自然言語によるデータ検索にも対応しており、指標や権限に基づいた分析環境をチームに提供できます。

例えば、すでにチケット管理システムがあり、顧客、チケット、担当者、優先度、対応ステータス、完了時間などのデータがあるとします。この場合、OpenCode がレポート機能をゼロから作る必要はありません。これらのデータを Metabase に接続し、分析機能を素早く整えることができます。

Metabase は、データ分析、グラフ、Dashboard、権限体系を提供します。OpenCode は、データベース接続、クエリ生成、指標設計、システムへの埋め込み、自動化連携を支援します。

Metabase と OpenCode の組み合わせは、特に次のようなシーンに向いています。

* 業務 Dashboard
* 営業分析
* 顧客分析
* チケット対応効率の分析
* IT 資産分析
* 運用データレポート
* 財務指標ダッシュボード
* プロダクト利用データ分析
* 経営層向けレポート
* 埋め込み BI

## 4. Outline：ナレッジベースとドキュメント共有

公式サイト：[https://www.getoutline.com/](https://www.getoutline.com/)

GitHub：[https://github.com/outline/outline](https://github.com/outline/outline)

GitHub Stars：38.5k

AI Agent の効果は、コンテキストの質に大きく左右されます。

プロジェクトに明確なドキュメントがないと、Agent は要件を誤解しやすくなります。システムルール、業務背景、データ定義、API 仕様、デプロイ方法、チーム内のルールを正しく把握できない可能性があります。

そのため、AI 支援開発ではドキュメントの重要性がさらに高まっています。ドキュメントは人が読むためだけのものではなく、AI Agent が作業するためのコンテキストにもなります。

Outline は、オープンソースのチーム向けナレッジベースです。内部ドキュメント、プロジェクト説明、プロダクト仕様、チームナレッジの管理に適しています。

![Outline1.png](https://static-docs.nocobase.com/Outline1-yccehc.png)

このタイプのツールは見落とされがちですが、長期的なプロジェクトでは非常に重要です。

適したシーン：

* チームナレッジベース
* プロダクトドキュメント
* プロジェクトドキュメント
* 技術ドキュメント
* Onboarding ドキュメント
* AI-ready docs
* 社内ルール管理

OpenCode にコードを書かせるだけでなく、プロジェクト協働に継続的に参加させたい場合、ドキュメントシステムは欠かせません。

## 5. Keycloak：認証とアクセス制御

公式サイト：[https://www.keycloak.org/](https://www.keycloak.org/)

GitHub：[https://github.com/keycloak/keycloak](https://github.com/keycloak/keycloak)

GitHub Stars：34.5k

OpenCode を使って実際のプロジェクトを開発するなら、Keycloak は組み合わせる価値の高いオープンソース認証ツールです。これらの機能をすべて OpenCode にゼロから生成させることもできますが、短期的には簡単なものを作れても、安全性、拡張性、保守コストが問題になりやすくなります。

![Keycloak1.png](https://static-docs.nocobase.com/Keycloak1-483p2p.png)

Keycloak は、成熟したオープンソースの認証・アクセス管理機能を提供します。主な機能は次の通りです。

* ユーザー登録とログイン
* シングルサインオン SSO
* ロールと権限管理
* OAuth 2.0 / OpenID Connect
* 企業アカウント体系との連携
* サードパーティ ID プロバイダーによるログイン
* 複数の内部システムの統一認証
* ユーザーセッションと Token 管理
* 多要素認証

## FAQ

### 1. OpenCode とは？

OpenCode は、オープンソースの AI Coding Agent です。開発者自身のターミナル、IDE、プロジェクトディレクトリ内で動作し、コードの読み取り、コード修正、スクリプト生成、設定処理、開発タスクの実行を支援します。クローズドな AI プログラミングツールと比べて、OpenCode はモデル選択、ツール連携、ワークフロー制御の自由度が高い点が特徴です。

### 2. なぜ OpenCode はオープンソースプロジェクトと相性がよいのですか？

実際のプロジェクトでは、コードを生成するだけでは不十分だからです。データモデル、API、権限、ワークフロー、レポート、ドキュメント、認証などの基盤機能も必要になります。成熟したオープンソースプロジェクトは、こうした基盤部分の一部をすでに解決しています。OpenCode はその上で、インストール、設定、連携、拡張、二次開発を進められます。

### 3. OpenCode はゼロから完全なアプリを構築できますか？

できます。ただし、それが常に最適とは限りません。デモやシンプルなツールであれば、ゼロからコードを生成する方法は速いかもしれません。しかし、長期運用する業務システムの場合は、成熟したオープンソースプロジェクトを土台にして、OpenCode にカスタマイズや拡張を任せる進め方がおすすめです。

### 4. OpenCode と組み合わせやすいオープンソースプロジェクトはどれですか？

プロジェクトの種類によって異なります。例えば、NocoBase は業務システムや内部ツールに向いています。Directus はデータ API とコンテンツ管理に、Metabase はデータ分析とレポートに、Outline はナレッジベースとプロジェクトドキュメントに、Keycloak は認証とアクセス制御に適しています。

### 5. OpenCode と NocoBase では何ができますか？

NocoBase は、業務システムに必要な基盤機能を提供します。データモデル、ページ、権限、ワークフロー、プラグイン、AI 従業員機能などが含まれます。OpenCode は、NocoBase プロジェクトの初期化、データモデル設計、ページ構築、ワークフロー設定、プラグイン開発、外部 API 連携を支援できます。この組み合わせは、CRM、チケット管理システム、承認システム、資産管理、プロジェクト管理、運用管理画面などの構築に向いています。

### 6. OpenCode は開発者だけが使うものですか？

OpenCode 自体は、主に開発者向けのツールです。ただし、NocoBase、Directus、Metabase、Outline、Keycloak のようなツールと組み合わせれば、最終的に作られるシステムは、業務担当者、運用担当者、管理者、チームメンバーも利用できます。ノーコード画面、Dashboard、ナレッジベース、統一ログインシステムを通じて、日常業務に活用できます。

### 7. OpenCode で実際のプロジェクトを構築するおすすめの進め方は？

OpenCode を Agent レイヤーとして使い、オープンソースプロジェクトをシステムレイヤーとして使う方法がおすすめです。OpenCode に空のリポジトリからすべてを生成させるのではなく、成熟したオープンソースプロジェクトを土台にして作業させます。既存のデータモデル、API、権限、ワークフロー、レポート、認証機能を活用することで、開発効率を高めながら、長期的な保守コストも抑えられます。

## まとめ：オープンソース Agent を選ぶことは、オープンソースのシステム基盤を選ぶことでもある

OpenCode は、開発者によりオープンで制御しやすい AI 開発ワークフローを提供します。

ただし、Agent はその中の一つのレイヤーにすぎません。

実際のプロジェクトを構築するには、長期的な要件を支えられるシステム基盤も必要です。NocoBase、Directus、Metabase、Outline、Keycloak などのオープンソースプロジェクトは、それぞれシステム基盤、データ API、分析、ドキュメント、認証の課題を解決します。

OpenCode を選ぶ開発者にとって、このようなオープンソース技術スタックは、その選択の意図にも合っています。

* 単一のプラットフォームにロックインされない
* コードとデータの制御権を保持できる
* プライベート環境にデプロイできる
* 継続的に拡張できる
* AI Agent を長期的なプロジェクト開発に実際に参加させられる

**関連記事**：

* [Codex にゼロから作らせないための6つのオープンソースプロジェクト](https://www.nocobase.com/ja/blog/building-internal-tools-with-codex)
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
