## TLDR

Claude Code は、コード生成や機能実装に強いツールです。ただし、長期的に保守できる企業向けシステムを作るには、明確な構造の境界が必要です。この記事では、Claude Code と組み合わせて使いやすい、実績のある 6 つのオープンソースツールを紹介します。業務システム、自動化、ナレッジベース、ベクトルストレージ、デプロイなど、主要な用途をカバーしています。

## はじめに

先日、[Reddit の r/ClaudeCode で、とても興味深い投稿を見かけました](https://www.reddit.com/r/ClaudeCode/comments/1rx1l7d/so_i_tried_using_claude_code_to_build_actual/)。

投稿者はデータエンジニアです。彼によると、ここ数か月で Claude Code はほとんど日常業務の一部になっていたそうです。データパイプライン（Pipelines）、可視化ダッシュボード（Dashboards）、分析スクリプトの作成などは、安心して任せられるようになっていました。

**これらはすべて彼の専門領域の仕事であり、Claude Code の出力ロジックを理解でき、結果もすばやく確認・検証できたからです。**

![Reddit.PNG](https://static-docs.nocobase.com/Reddit-2tnbbx.PNG)

そこで彼は、ある考えに至ります。**データ関連の作業でこれほど Claude Code が使えるなら、本格的なプロダクト開発にもそのまま使えるのではないか。**

その後、彼は PM と一緒に詳細なプロダクト要件書を用意し、その要件を Claude Code に渡しました。機能実装、テスト、Railway へのデプロイまで任せたのです。

**しかしリリース後、ほとんどの機能はまともに動きませんでした。**

Claude Code を使い込むにつれて、私自身も少しずつ気づくようになりました。自分の専門範囲内のタスクであれば、AI は大きく効率を高めてくれます。しかし、タスクが自分のよく知らない領域に入り、分解もできず、品質も判断しにくくなると、AI の出力は一気に制御しづらくなります。

これは、多くの人が AI Coding や Agent ツールを使うときに直面する課題でもあります。

**Claude Code にコードを書く力が足りないのではありません。必要なのは、より明確なシステム境界と、安定した構築基盤です。**

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---



## Claude Code とオープンソースツール

AI にとって、ブラックボックスは扱いにくいものです。ここで、オープンソースツールの強みがはっきり見えてきます。

明確なスキーマ、公開されたデータ構造、アクセス可能な API、プラグイン機構、制御しやすいデプロイ環境。これらはもともと開発者に好まれていた特徴ですが、今では AI と協働しやすくするための前提にもなっています。

長期利用と AI との協働という観点から見ると、オープンソースツールは企業システムの基盤として非常に相性がよいと言えます。

そこでこの記事では、**Claude Code と組み合わせることで、より安定したプロダクトや機能の構築を支援してくれる**オープンソースツールを紹介します。

## ツール比較一覧


| ツール        | GitHub Stars | 主な用途                    | デプロイ難易度 | 向いている用途                  | Claude Code との組み合わせ方                                                                                                                              |
| ------------- | ------------ | --------------------------- | -------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **NocoBase**  | 22.3k        | 業務システム構築<br/>       | ⭐⭐<br/>      | 内部ツール/CRM/チケット管理/ERP | NocoBase がデータモデル、権限、ページ、ワークフローの基盤を提供し、Claude Code がその上でシステム、連携インターフェース、追加の業務ロジックをすばやく生成 |
| **n8n**       | 187k         | ワークフロー自動化          | ⭐⭐⭐         | Agent 編成                      | Claude Code がノードロジックを生成し、n8n がフローを可視化                                                                                                |
| **Qdrant**    | 31.2k        | ベクトルデータベース        | ⭐             | RAG/AI 検索                     | AI が embedding ロジックを生成し、Qdrant が長期記憶を提供                                                                                                 |
| **Outline**   | 38.5k        | ナレッジベース/ドキュメント | ⭐⭐⭐         | チームコラボレーション          | AI がドキュメントのコンテキストをもとに作業し、Outline が知識を一元管理                                                                                   |
| **Coolify**   | 55k          | セルフホスティング基盤      | ⭐⭐           | アプリホスティング              | AI が Docker 設定を生成し、Coolify がデプロイを一元管理                                                                                                   |
| **OpenHands** | 73.2k        | AI Agent                    | ⭐⭐⭐         | 長期タスク<br/>                 | Claude Code を開発アシスタントとして使い、OpenHands がより大きなエンジニアリングタスクを実行                                                              |

## 1.  NocoBase

**公式サイト**：[https://www.nocobase.com/](https://www.nocobase.com/)

**GitHub**：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**Stars**： 22.3k

NocoBase は、オープンソースの AI + ノーコードプラットフォームです。主に CRM、チケット管理システム、承認システム、プロジェクト管理、運用管理画面など、業務システムや企業向け内部ツールの構築に使われます。

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-rqmsry.png)

NocoBase は Claude Code と非常に相性のよいツールです。この組み合わせは、よくある問題を解決します。Claude Code はアプリをすばやく生成できますが、完全にゼロから作る場合、その後のデータ関係、権限の境界、業務フローが保守しにくくなりがちです。

NocoBase は、Claude Code に対して、すでに検証された業務システムの基盤を提供します。

Claude Code は NocoBase をベースに、データモデル、ページ、ワークフローをすばやく生成できます。一方で、人はいつでもビジュアル画面からシステムを調整し、改善できます。AI は構築スピードを高め、NocoBase はデータ構造、権限、ワークフロー、システム境界を安定させます。

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-afsvm1.png)

この方法は、システム全体を完全にゼロから生成するよりも、はるかに安定しています。

特に CRM、チケット管理、承認、ERP のような企業向け業務シーンでは、複雑さの多くは画面そのものではなく、次のような部分から生まれます。

* データ関係
* 権限制御
* 複数ロールでの協働
* 長期保守

NocoBase の役割は、AI が毎回まったく白紙のプロジェクトから基盤を作り直すのではなく、すでに業務構造とルールの境界を持ったシステム上で作業を続けられるようにすることです。

![NocoBase3.jpg](https://static-docs.nocobase.com/NocoBase3-hifyev.jpg)

### **適した用途**

* Claude Code で CRM、チケット管理、ERP、プロジェクト管理などの内部システムを構築したい場合
* 権限、承認、ワークフローが必要な業務アプリ
* AI にシステム構築へ参加させたいが、システム全体の構造は制御したい場合
* セルフホスティングと長期保守が必要な企業向けシーン

### Claude Code を使ったインストール

以下のプロンプトを Claude Code にコピーすると、インストールと設定を自動で進められます。

<pre class="overflow-visible! px-0!" data-start="17552" data-end="17672"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼd ͼr"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span>NocoBase CLI をインストールして初期化を完了してください：https://docs.nocobase.com/cn/ai/ai-quick-start.md （リンク先の内容に直接アクセスしてください）</span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### 関連リソース

Claude Code にコピーして送ると、そのまま利用しやすくなります

ドキュメント：[https://docs.nocobase.com/cn/ai/](https://docs.nocobase.com/cn/ai/)

CLI:：[https://docs.nocobase.com/cn/api/cli/](https://docs.nocobase.com/cn/api/cli/)

Skills：[https://docs.nocobase.com/cn/ai-builder#nocobase-skills](https://docs.nocobase.com/cn/ai-builder#nocobase-skills)

Mcp：[https://docs.nocobase.com/cn/ai/mcp/](https://docs.nocobase.com/cn/ai/mcp/)

## 2.  n8n

**公式サイト**：[https://n8n.io/](https://n8n.io/)

**GitHub**：[https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

**Stars**：187k

n8n は、現在非常に人気のあるオープンソースの自動化プラットフォームです。異なるシステムの接続、ワークフローの編成、AI Agent を実際の業務プロセスに参加させる用途でよく使われます。

![n8n1.png](https://static-docs.nocobase.com/n8n1-ivqu3i.png)

多くの人は最初、Claude Code に自動化スクリプトを直接生成させます。たとえば、メール処理、Webhook、データ同期などです。

しかし、プロジェクトが複雑になるにつれて、すぐに問題が出てきます。自動化フローがどんどん保守しにくくなるのです。

特に、フローが複数のシステム、複数の AI Agent、大量の非同期タスクにまたがるようになると、スクリプトだけでは管理しきれなくなります。

n8n の役割は、こうした自動化フローに、可視化され、保守しやすい workflow 層を提供することです。

Claude Code は、ノードロジック、API 呼び出し、カスタムコードをすばやく生成できます。一方で、n8n はフロー全体を構造化し、自動化フローを長期的に保守できる状態にします。

コードだけで workflow を管理するよりも、n8n の可視化された構造は長期的な改善に向いています。チームメンバーが増えるほど、この違いはより明確になります。

### **適した用途**

* AI Agent workflow の編成
* Claude Code による自動化フロー管理
* メール、IM、CRM、データベースなどのシステム連携
* 複数システム間のデータ同期
* AI を使った業務プロセス自動化
* MCP と外部サービスの統合

### Claude Code を使ったインストール

以下のプロンプトを Claude Code にコピーすると、自動でインストールできます。

<pre class="overflow-visible! px-0!" data-start="18880" data-end="18951"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼd ͼr"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span>Docker を使って n8n をインストールし、PostgreSQL の永続化ストレージと基本認証を設定してください</span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### 関連リソース

ドキュメント：[https://docs.n8n.io/](https://docs.n8n.io/)

AI Agent：[https://docs.n8n.io/advanced-ai/](https://docs.n8n.io/advanced-ai/)

MCP：[https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcpclient/](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcpclient/)

Templates：[https://n8n.io/workflows/](https://n8n.io/workflows/)

## 3.  Qdrant

**公式サイト**：[https://qdrant.tech/](https://qdrant.tech/)

**GitHub**：[https://github.com/qdrant/qdrant](https://github.com/qdrant/qdrant)

**Stars**：31.2k

Qdrant は、現在広く使われているオープンソースのベクトルデータベースです。多くの AI Agent、RAG、AI Search、ナレッジベースプロジェクトで利用されています。

![Qdrant1.png](https://static-docs.nocobase.com/Qdrant1-8lg5gb.png)

Claude Code を使い始めると、多くの人が 1 つの問題に気づきます。AI は現在のコンテキスト（Context）に強く依存するということです。プロジェクトが大きくなると、Claude Code がシステム全体を長期的に「覚えておく」ことは難しくなります。

そこで必要になるのが、次のような機能です。

* 長期記憶
* ナレッジ検索
* セマンティック検索
* RAG

Qdrant は、現在のオープンソース AI スタックにおいて、非常によく使われるレイヤーになっています。

Claude Code は、embedding、検索ロジック、Agent の呼び出しチェーン、AI workflow をすばやく生成するのに向いています。一方で、Qdrant はそれらのベクトルデータを保存・管理し、AI が現在の会話コンテキストだけでなく、蓄積された知識にもとづいて長期的に作業できるようにします。

### 適した用途

* AI Knowledge Base
* AI カスタマーサポート
* ドキュメント検索
* 企業ナレッジシステム
* AI 検索
* Agent Memory

多くの SaaS 型 AI プラットフォームと比べて、自前で Qdrant を使う大きな利点は、データ構造、インデックス方式、retrieval ロジックを完全に制御できることです。これは、長期保守、self-hosted、社内業務データとの連携が必要なシステムでは特に重要です。

### Claude Code を使ったインストール

以下のプロンプトを Claude Code にコピーすると、自動でインストールできます。

<pre class="overflow-visible! px-0!" data-start="20384" data-end="20467"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼd ͼr"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span>Docker を使って Qdrant をインストールし、AI Knowledge Base 用の基本 collection を作成してください</span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### 関連リソース

**ドキュメント**：[https://qdrant.tech/documentation/](https://qdrant.tech/documentation/)

**RAG**：[https://qdrant.tech/rag/](https://qdrant.tech/rag/)

**LangChain**：[https://python.langchain.com/docs/integrations/vectorstores/qdrant/](https://python.langchain.com/docs/integrations/vectorstores/qdrant/)

**LlamaIndex**：[https://docs.llamaindex.ai/en/stable/examples/vector\_stores/QdrantIndexDemo/](https://docs.llamaindex.ai/en/stable/examples/vector_stores/QdrantIndexDemo/)

## 4.  Outline

**公式サイト**：[https://www.getoutline.com/](https://www.getoutline.com/)

**GitHub**：[https://github.com/outline/outline](https://github.com/outline/outline)

**Stars**：38.5k

Outline は、オープンソースのナレッジベース兼チームドキュメントシステムです。Notion、Confluence、社内 Wiki の代替として使うチームも多くあります。

![Outline.png](https://static-docs.nocobase.com/Outline-y38npr.png)

AI 時代には、ドキュメントの重要性がさらに高まります。

ドキュメントは人が読むためだけのものではなく、AI がシステムを理解するための重要なコンテキストにもなるからです。PRD、データ構造、workflow、prompt、Agent の振る舞いなどが明確に記録されていなければ、AI が継続的に開発や保守に関わることは難しくなります。

Outline の価値は、分散しがちなチームの知識を一元管理できる点にあります。さらに、権限管理、共同編集、Markdown サポート、セルフホスティングに対応しているため、ドキュメントを長期的に保守しやすくなります。AI を開発プロセスに取り入れたいチームにとって、Outline は人と AI に共通のコンテキストを提供する、明確で制御しやすいナレッジベースの土台になります。

多くの SaaS 型ドキュメントツールと比べて、Outline は構造がシンプルで、セルフホスティングしやすい点が強みです。AI に社内ドキュメント、業務フロー、チーム知識へアクセスさせたい場合にも、より制御しやすくなります。

### Claude Code を使ったインストール

以下のプロンプトを Claude Code にコピーすると、自動でインストールできます。

<pre class="overflow-visible! px-0!" data-start="21854" data-end="21927"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼd ͼr"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span>Docker を使って Outline をインストールし、PostgreSQL とオブジェクトストレージを設定してください</span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### 関連リソース

ドキュメント：[https://docs.getoutline.com/](https://docs.getoutline.com/)

デプロイ：[https://docs.getoutline.com/s/hosting/doc/docker-7pfeLP5a8t](https://docs.getoutline.com/s/hosting/doc/docker-7pfeLP5a8t)

GitHub：[https://github.com/outline/outline](https://github.com/outline/outline)

## 5.  Coolify

**公式サイト**：[https://coolify.io/](https://coolify.io/)

**GitHub**：[https://github.com/coollabsio/coolify](https://github.com/coollabsio/coolify)

**Stars**：55k

Coolify は、人気の高いオープンソースのセルフホスティングプラットフォームです。オープンソース版の Vercel / Railway / Heroku のような存在で、サーバー、Docker、データベース、アプリのデプロイ管理に使えます。

![Coolify.png](https://static-docs.nocobase.com/Coolify-kryo22.png)

Claude Code で初めてプロジェクトを作るとき、多くの人はまず Vercel や Railway にデプロイします。確かに、最初のスピードは非常に速いからです。

しかし、AI Stack 全体を本格的にセルフホスティングし始めると、Docker やサーバーを手動で管理し続けるのはだんだん負担になります。

Coolify は、この段階でデプロイ層を引き受けるのに適しています。

Claude Code は、Docker 設定、CI/CD スクリプト、サービス構成をすばやく生成できます。一方で、Coolify はアプリ、データベース、実行環境を一元管理し、AI Stack 全体を長期的に保守しやすくします。

従来の手動運用と比べて、Coolify は高速に改善を重ねる小規模チームや AI プロジェクトに向いています。

### Claude Code を使ったインストール

以下のプロンプトを Claude Code にコピーすると、自動でインストールできます。

<pre class="overflow-visible! px-0!" data-start="23033" data-end="23092"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼd ͼr"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span>Ubuntu サーバーに Coolify をインストールし、基本的な初期設定を完了してください</span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### 関連リソース

**ドキュメント**：[https://coolify.io/docs/](https://coolify.io/docs/)

**インストール**：[https://coolify.io/docs/installation](https://coolify.io/docs/installation)

**GitHub**：[https://github.com/coollabsio/coolify](https://github.com/coollabsio/coolify)

## 6.  OpenHands

**公式サイト**：[https://www.all-hands.dev/](https://www.all-hands.dev/)

**GitHub**：[https://github.com/All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands)

**Stars**：73.2k+

OpenHands は、最近急速に成長しているオープンソースの AI Agent プロジェクトです。従来の AI Coding ツールと比べて、単にコードを生成するだけでなく、「AI を本格的にソフトウェアエンジニアリングへ参加させる」ことを重視しています。

![OpenHands.png](https://static-docs.nocobase.com/OpenHands-y8wd74.png)

Claude Code を、より複雑な開発タスクに関与させることができます。たとえば、次のような作業です。

* コードベース全体を読む
* 既存のプロジェクト構造を理解する
* ログを分析する
* デプロイの問題を修正する
* 長時間タスクを実行する
* 外部ツールを呼び出す
* 複数ステップで協働する

Claude Code が高品質な開発アシスタントだとすれば、OpenHands は継続的に動けるエンジニアリング Agent に近い存在です。両者を組み合わせることで、長時間の実行、継続的な改善、複数ツールをまたぐ協働が必要なタスクに対応しやすくなります。

### 適した用途

* 自動修復タスク
* AI DevOps
* 長時間実行する Agent
* AI エンジニアリング協働
* 開発フローの自動実行
* 複数ツール連携 workflow

### Claude Code を使ったインストール

以下のプロンプトを Claude Code にコピーすると、自動でインストールできます。

<pre class="overflow-visible! px-0!" data-start="24216" data-end="24278"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼd ͼr"><div class="cm-scroller"><pre class="cm-content q9tKkq_readonly m-0"><code><span>Docker を使って OpenHands をインストールし、基本的な実行環境設定を完了してください</span></code></pre></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### 関連リソース

ドキュメント：[https://docs.all-hands.dev/](https://docs.all-hands.dev/)

GitHub：[https://github.com/All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands)

MCP：[https://docs.all-hands.dev/usage/mcp/](https://docs.all-hands.dev/usage/mcp/)

## FAQ

**1. これらのツールはすべて企業向け内部システムの構築に適していますか？**

用途はそれぞれ異なります。

CRM、チケット管理システム、承認システム、プロジェクト管理、運用管理画面のように、長期保守が必要な業務システムを構築するなら、NocoBase がより適しています。NocoBase は、データモデル、権限、ページ、ワークフローを中心に設計されているためです。

AI Agent の編成、自動化タスク、ナレッジベース Q&A を重視する場合、他のツールは業務システム全体の基盤というより、特定の機能を補完するツールとして適しています。

**2. なぜ NocoBase は AI と一緒に使うのに適しているのですか？**

NocoBase は単なるページ生成ツールではなく、データモデル駆動のプラットフォームだからです。

AI は、明確なデータ構造をもとに、テーブル、フィールド、関係、ページ、フローを生成できます。その後、AI Agent や自動化ワークフローを接続したり、AI にシステム内の業務データを読み取らせたりする場合にも、実装しやすくなります。

簡単に言えば、NocoBase は「AI が企業システムを構築し、運用する」ための基盤に向いています。

**3. これらのツールは Claude Code や Cursor のような AI プログラミングツールを置き換えられますか？**

直接置き換えるものではありません。むしろ補完関係にあります。

Claude Code や Cursor は、開発者がコードを書いたり、修正したり、プラグインや拡張機能を作ったりするのに向いています。一方で、NocoBase のようなプラットフォームは、データモデル、権限、ページ、フロー、デプロイ環境といったシステム基盤を提供します。

よりよい使い方は、どちらか一方を選ぶことではなく、AI プログラミングツールをこれらのオープンソースプラットフォームの上で活用することです。完全にゼロからシステムを生成するよりも、その方が保守しやすくなります。

**4. すでに成熟した SaaS を使っている場合でも、オープンソースツールを検討する必要がありますか？**

ニーズによります。

標準機能を使うだけであれば、成熟した SaaS の方が手軽です。

ただし、AI Agent の接続、社内データの連携、複雑な権限制御、プライベートデプロイ、業務変化に合わせた長期的な拡張が必要な場合、オープンソースツールの方が柔軟です。

特に、AI がシステム内のデータを直接理解し、操作する必要がある場合、オープンソースツールの透明な構造は大きな強みになります。

**5. どのようなシーンで NocoBase を優先的に試すべきですか？**

次のようなシーンから始めるのが適しています。

* 顧客管理システム
* チケット管理システム
* 承認システム
* プロジェクト管理システム
* 資産管理システム
* 運用管理画面
* データダッシュボード
* 内部フロー自動化

これらのシーンには、比較的明確なデータ構造、権限関係、フロールールがあります。そのため、NocoBase で素早く構築しやすく、さらに AI を接続する用途にも向いています。

## よくある課題と解決策

Claude Code で企業向けシステムを構築するとき、開発者はよく次のような課題に直面します。


| 課題                             | 従来の方法                          | オープンソースによる解決策の強み                  |
| -------------------------------- | ----------------------------------- | ------------------------------------------------- |
| **データモデルが制御不能になる** | AI が毎回異なる構造を生成する       | NocoBase が事前に検証されたデータモデル層を提供   |
| **権限管理が混乱する**           | AI が生成したコードは保守しにくい   | NocoBase が企業向け権限システムを内蔵             |
| **知識が分断される**             | AI がシステムを長期的に記憶できない | Outline + Qdrant が統一されたナレッジベースを提供 |
| **デプロイが複雑になる**         | 複数のコンテナを手動で管理する      | Coolify がデプロイスタックを一元管理              |
| **ワークフローの保守が難しい**   | スクリプトが各所に散在する          | n8n が可視化されたフロー管理を提供                |

## 最後に

Claude Code は、多くの人に初めて「自分でコードを書ける」という感覚を与えました。

しかし、動く Demo から、長期的に使える本格的なシステムまでは、まだ大きな距離があります。本当に難しいのは、システム構造が明確かどうか、データを保守できるかどうか、権限を制御できるかどうか、そして AI が明確な境界の中で作業できるかどうかです。

だからこそ、私は Claude Code をこれらのオープンソースツールと組み合わせて使う方がよいと考えています。優れたオープンソーススタックは、AI の出力をより制御しやすくし、人が引き継ぎ、検証し、継続的に保守しやすい状態を作ってくれます。


**関連記事**：

* [企業向けソフトウェア開発に適したオープンソース AI ノーコードツール 10 選 ](https://www.nocobase.com/ja/blog/open-source-ai-no-code-tools-enterprise-software-development)
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
