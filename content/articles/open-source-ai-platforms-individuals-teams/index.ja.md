最近、Hacker News でセルフホスト型のオープンソース AI プラットフォームに関する議論をよく見かけます。

面白いのは、みんな「AI Platform」を探しているのに、実際のニーズは大きく異なることです。自分のパソコンで AI モデルを動かしたいだけの人もいれば、Slack や社内システムにつながってチームの日常業務を手伝うエージェントを求める人もいます。複数のエージェントを同時に動かし、コストを抑える方法を考え始めた人もいます。  
その中でも代表的な投稿をいくつか挙げます。

- [Ask HN: What Does Your Self-Hosted LLM Stack Look Like in 2025?](https://news.ycombinator.com/item?id=44187275)：ローカルモデル、実行ツール、ハードウェアをどう組み合わせれば、実際に使えるセルフホスト AI 環境になるのかを知りたいという投稿です。

![セルフホスト LLM スタックに関する Hacker News のスレッド](https://static-docs.nocobase.com/image-bh0zb8.png)

- [Ask HN: Open-source AI Agents building platform?](https://news.ycombinator.com/item?id=42620424)：ある創業者が、Slack 経由で社内システムにつながり、エージェントが実際の仕事を手伝ってくれる、オープンソースでセルフホスト可能なエージェントプラットフォームを探しています。エージェントごとにゼロから作るのではなく、既存のものを使いたいという投稿です。

![オープンソースの AI エージェント基盤を探す Hacker News のスレッド](https://static-docs.nocobase.com/image-r98fnh.png)

- [Ask HN: Is anyone running multi/always-on agents that don't cost a fortune?](https://news.ycombinator.com/item?id=50391647)：複数のエージェントに継続的にタスクを実行させながらコストを抑えたい、セルフホストの方が向いているのか知りたい、という投稿です。

![常時稼働するエージェントとコストに関する Hacker News のスレッド](https://static-docs.nocobase.com/image-6g8shj.png)

こうしたニーズをもとに、**セルフホストできるオープンソースまたはソース公開型の AI プラットフォーム 24 個**をまとめました。AI エージェント、ワークフロー自動化、モデル実行、ナレッジベース、業務システム開発など、さまざまな方向をカバーしています。

自分に合うツールを見つけやすいように、用途別に 3 つのパートに分けました。

1. **個人とチームの両方に適したもの（11 個）**：一人でも使え、チームにも広げられます。
2. **チーム向け（8 個）**：複数人での協業、一元管理、企業向けの導入に向いています。
3. **個人向け（5 個）**：ローカルでの実行、個人開発、日常の AI 作業に向いています。

各プロジェクトでは主な機能と向いている場面を紹介するので、自分のニーズに合わせて選べます。

それでは、この 24 個の中から試す価値のあるものを見ていきましょう。





---

💬 NocoBase は、企業が AI で業務システムを構築し、継続的に改善するためのオープンソースプラットフォームです。エージェントが業務部分を書き、NocoBase が基盤とワークフローを提供し、人が目標を決めて判断します。このコラムでは、AI と業務システムの組み合わせや、この記事のようなオープンソースプロジェクトのまとめを扱います。

---





| プロジェクト | 対象 | 主な用途 | Stars |
| --- | --- | --- | --- |
| NocoBase | 個人・チーム | エージェントで CRM、購買、チケットなどの業務システムを開発し継続的に改善 | 25.0k |
| Dify | 個人・チーム | エージェント、ワークフロー、RAG アプリを視覚的に編成 | 161.4k |
| Langflow | 個人・チーム | ドラッグ＆ドロップでエージェントと RAG フローを構築 | 156.7k |
| n8n | 個人・チーム | AI ノードを備えたセルフホスト型ワークフロー自動化 | 210.9k |
| LobeHub | 個人・チーム | 個人向けチャット画面からチームの super-agents まで | 85.7k |
| Ollama | 個人・チーム | コマンド一つでオープンモデルを実行、REST API も提供 | 187.5k |
| Open WebUI | 個人・チーム | ChatGPT 風の画面、マルチユーザーと RBAC | 159.0k |
| LibreChat | 個人・チーム | マルチモデル・マルチユーザーのチャット、エージェントと MCP 対応 | 47.3k |
| AnythingLLM | 個人・チーム | 文書 Q&A とノーコードエージェント、デスクトップ版と Docker 版 | 68.4k |
| OpenClaw | 個人・チーム | メッセージチャンネルにつながり、タスクを実行するエージェント | 394.7k |
| Khoj | 個人・チーム | セルフホスト型の AI 第二の脳、知識 Q&A と定期自動化 | 38.2k |
| Sim | チーム | 協働型のエージェントとワークフローのワークスペース | 30.2k |
| Paperclip | チーム | エージェント組織の承認、予算、プロジェクトを管理 | 114.7k |
| Buzz | チーム | 人とエージェントがチャンネルで協働するワークスペース | 37.6k |
| Onyx | チーム | 企業の知識源につながる AI 検索とアシスタント | 33.4k |
| vLLM | チーム | 本番向けの大規模モデル推論 | 97.1k |
| LiteLLM | チーム | 100 以上のモデルを一つの API に、予算とキーを管理 | 63.5k |
| RAGFlow | チーム | 深い文書解析を備えた RAG エンジン | 94.4k |
| MLflow | チーム | 実験追跡、モデルレジストリ、LLM 評価 | 28.9k |
| Jan | 個人 | 100% オフラインのデスクトップ AI アプリ | 45.8k |
| LocalAI | 個人 | GPU なしでも動く OpenAI 互換のローカル推論 | 50.4k |
| Hermes Agent | 個人 | 記憶と定期タスクを備えた個人向けエージェント | 264.3k |
| nanobot | 個人 | 超軽量のセルフホスト型個人エージェントフレームワーク | 50.2k |
| Cherry Studio | 個人 | デスクトップのモデル・エージェントワークベンチ | 53.6k |

## 第1部：個人とチームの両方に適したプラットフォーム

### 1. NocoBase

![NocoBase Studio の承認画面](https://static-docs.nocobase.com/studio-en-req-accept-20261111-normal-2x-2ula22.png)

GitHub Stars：25.0k

公式サイト：[++https://www.nocobase.com++](https://www.nocobase.com)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

[NocoBase](https://www.nocobase.com/zh-CN/) は、AI で業務システムを構築し、運用し、継続的に改善するためのオープンソースプラットフォームです。コーディングエージェントが業務機能を開発し、NocoBase がアプリケーション基盤と開発ガバナンスを提供し、人が目標を決め、結果を確認し、重要な判断を下します。

コーディングエージェントで CRM、購買、チケットなどのシステムをゼロから作ると、最初のバージョンはたいていすぐにできます。しかし本当の難しさは、システムが稼働した後に現れます。要件が変わり続けるにつれて、データ構造、ロールと権限、承認フロー、デプロイ方法を継続的に調整する必要があります。機能を一つ追加するたびに既存の設計に影響が及び、システムはどんどん保守しにくくなります。NocoBase が解こうとしているのはまさにこの問題です。**AI で作った業務システムを、素早く公開できるだけでなく、長期的に安定して改善し続けられるようにするにはどうすればよいか。**

![NocoBase のアプリケーション基盤とガバナンス](https://static-docs.nocobase.com/image-oxqk94.png)

そのために、NocoBase は二つの中核部分を提供します。[NocoBase Core](https://www.nocobase.com/core/) はオープンソースのアプリケーション基盤で、データ管理、ロールと権限、ワークフロー、承認、デプロイなどの基本機能を提供し、コーディングエージェントが毎回システム構造をゼロから組むのではなく、具体的な業務機能の開発に集中できるようにします。[NocoBase Studio](https://www.nocobase.com/studio/) はさらに、人とエージェントがどう協力して開発するかという問題を扱います。複数のエージェントによる開発、テスト、レビューを調整し、チェック、人の受け入れ確認、リリース承認を一つの流れにまとめることで、未確認の変更がそのまま本番環境に入らないようにします。

![NocoBase Studio のワークスペース](https://static-docs.nocobase.com/image-mxxyt2.png)

**個人開発者**には、無料の [Community 版](https://www.nocobase.com/pricing/)（Apache-2.0）を自分のパソコンやサーバーで動かせます。Claude Code、Codex、Hermes Agent などのコーディングエージェントを使い、Core が提供する構造の上で業務機能を開発できます。ログイン、権限、管理画面などの基本部分を毎回作る必要がなく、一人でも構造が明確で、後から保守・拡張しやすい業務システムを構築できます。

**チームと企業**にとっても、NocoBase は複数人での協業と長期的な運用に向いています。業務エージェントはチームメンバーと同じロールと権限を使い、重要な操作は承認フローで人に確認を求め、操作の過程も記録として残ります。複数の開発プロジェクトを同時に管理したい、複数のエージェントを調整したい、より充実したリリース承認や企業向け SSO を使いたい場合は、NocoBase Studio を含む [Professional 版](https://www.nocobase.com/pricing/) を選べます。

### 2. Dify

![Dify の画面](https://raw.githubusercontent.com/langgenius/dify/main/images/describe.png)

GitHub Stars：161.4k

公式サイト：[https://dify.ai](https://dify.ai)

GitHub：[https://github.com/langgenius/dify](https://github.com/langgenius/dify)

Dify はセルフホスト可能な AI アプリケーションとワークフローのオーケストレーションプラットフォームです。特徴は、キャンバス上でエージェント、ワークフロー、RAG パイプラインを視覚的に組み、複数のモデルにつないでアプリや API としてそのまま公開できることです。プロトタイプの試行錯誤やフロー調整のコストを大きく下げられます。ただし AI のオーケストレーションとインターフェース層に特化しており、基盤となる業務システムを置き換えるものではありません。複雑なデータ権限や承認の閉ループは外部システムで担う必要があります。個人なら Docker Compose ですぐ始められ、AI フローを素早く作りながら検証するのに向いています。チームならワークスペースで協力して改善でき、複数モデルの機能を素早く組み上げてアプリや API として届けたいチームに向いています。社内利用は制限されませんが、マルチテナントのホスティングサービスを提供するには書面による許諾が必要で、フロントエンドのロゴは外せません。

### 3. Langflow

![Langflow の画面](https://raw.githubusercontent.com/langflow-ai/langflow/main/docs/static/img/workspace-basic-prompting.png)

GitHub Stars：156.7k

公式サイト：[https://www.langflow.org](https://www.langflow.org)

GitHub：[https://github.com/langflow-ai/langflow](https://github.com/langflow-ai/langflow)

Langflow はセルフホスト可能な、ドラッグ＆ドロップでエージェントと RAG フローを組むツールです。特徴は、LangChain エコシステムの一般的なコンポーネントをキャンバス上のノードにし、ドラッグしてつなぐだけでエージェントや検索フローを動かし、必要に応じて API として公開できることです。グルーコードを何度も書く時間を省けます。ただし解くのはフローのプロトタイプとオーケストレーションで、権限や承認といった業務ルールはその外側で処理する必要があります。個人ならローカルの pip インストールか Docker ですぐ始められ、まず一つのフローを検証してからコードを書くか決めたい開発者に向いています。チームなら一度デプロイすればフローを共有・再利用でき、複数のエージェント案を素早く試したいプロトタイプチームに向いています。MIT ライセンスで、商用利用や再配布に追加条件はありません。

### 4. n8n

![n8n の画面](https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-screenshot-readme.png)

GitHub Stars：210.9k

公式サイト：[https://n8n.io](https://n8n.io)

GitHub：[https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

n8n はセルフホスト可能なワークフロー自動化ツールで、AI エージェントノードを加えると「AI 付きの Zapier」と呼ばれることがあります。特徴は 400 以上の既成連携ノードで、CRM、メール、データベース、モデル呼び出しを一つの自動化フローにつなげられ、キャンバスでできない部分はコードノードで補えることです。ただしワークフローエンジンであり、業務データそのもののモデリング、権限、承認は担いません。それらは接続先のシステムが提供する必要があります。個人なら Docker コマンド一つで始められ、自分のツールチェーンを自動でつなぐのに向いています。チームなら社内通知やデータ同期などの自動化に向いています。ライセンスは Sustainable Use License 1.0 で、fair-code かつソース公開型であり、OSI 認定のオープンソースライセンスではありません。個人利用と自社の内部業務利用は認められますが、外部にホスティングサービスを提供するには商用ライセンスが必要です。

### 5. LobeHub

![LobeHub の画面](https://hub-apac-1.lobeobjects.space/images/home/overview-cao-light.webp)

GitHub Stars：85.7k

公式サイト：[https://lobehub.com](https://lobehub.com)

GitHub：[https://github.com/lobehub/lobehub](https://github.com/lobehub/lobehub)

LobeHub は、個人向けチャット画面 Lobe Chat から発展した AI エージェントプラットフォームで、現在は「チームの super-agents」を前面に出しています。特徴は、エージェントマーケット、複数モデルの切り替え、ローカルデプロイを保ちながら、エージェントを Slack、Discord、Telegram などのチャンネルにつなぎ、Auth0 などの SSO にも対応することです。アシスタントがチームで既に使っているチャットツールに直接現れます。ただし会話とアシスタントの層に位置し、エージェントが扱う業務データと権限の境界は外部システムが決めます。個人ならワンクリックでデプロイでき、見た目がよく複数モデルにつながるチャットアシスタントが手に入ります。チームなら AI アシスタントを既存のコラボレーションツールに入れ、ログインを一元管理したいチームに向いています。ライセンスは LobeHub Community License（Apache-2.0 に条件を追加）です。ソースを変更しなければ商用利用でき、変更後に配布するには商用ライセンスが必要です。

### 6. Ollama

![Ollama アプリ](https://files.ollama.com/ollama-app-screenshot.png)

GitHub Stars：187.5k

公式サイト：[https://ollama.com](https://ollama.com)

GitHub：[https://github.com/ollama/ollama](https://github.com/ollama/ollama)

Ollama は、自分のマシンでオープンモデルをダウンロードして動かすツールです。特徴は、Llama、Qwen、DeepSeek などのオープンモデルをコマンド一つで取得して実行でき、REST API と OpenAI 互換インターフェースを提供して他のアプリから呼び出せることです。多くのローカル AI スタックの最初の層になります。ただしモデルの実行だけを担い、チャット画面、マルチユーザー、ナレッジベースはありません。それらは Open WebUI や LibreChat などのフロントエンドで補います。個人なら、モデルを自分のパソコンで動かし、データを外に出したくない人に向いています。チームなら、内部サーバーに置いて複数アプリが使う共通のモデルサービスとして展開することが多いです。MIT ライセンスで、商用利用に追加条件はありません。

### 7. Open WebUI

![Open WebUI の画面](https://docs.openwebui.com/images/landing/hero.png)

GitHub Stars：159.0k

公式サイト：[https://openwebui.com](https://openwebui.com)

GitHub：[https://github.com/open-webui/open-webui](https://github.com/open-webui/open-webui)

Open WebUI は、ChatGPT 風のセルフホスト可能なチャット画面です。特徴は、Ollama と任意の OpenAI 互換 API につながり、マルチユーザー、RBAC、ナレッジベース、ツール呼び出し、モデル管理を備えることです。「Ollama とフロントエンド」の組み合わせで最もよく使われるフロントエンドです。ただし会話の入口であり業務システムではないため、エージェントが業務データを変更する際の権限と承認は外側で設計する必要があります。個人なら Docker コマンド一つと Ollama でローカルの ChatGPT を組めます。チームなら全社に一つのモデル入口を用意し、ロールごとに権限を配分するのに向いています。ライセンスは Open WebUI License（BSD-3 系にブランド条項を追加）です。Open WebUI のブランド表示を変更・削除できず、任意の 30 日間で直接利用者が 50 人以下なら適用除外になります。それを超える場合はブランドを残すか企業ライセンスを結ぶ必要があります。

### 8. LibreChat

![LibreChat の画面](https://www.librechat.ai/_next/static/media/demo_dark.102d59a6.png)

GitHub Stars：47.3k

公式サイト：[https://librechat.ai](https://librechat.ai)

GitHub：[https://github.com/LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat)

LibreChat はセルフホスト可能なマルチモデルのチャット画面です。特徴は、OpenAI、Anthropic、Google、Ollama などのローカルモデルを一つの画面で扱え、OAuth2、LDAP、メールログインに対応し、Admin Panel でユーザー、グループ、ロールを管理できることです。エージェントは指定したユーザーやグループに共有でき、MCP ツールにも対応します。ただし設定項目が多く、モデルプロバイダーやログイン方式を追加するたびに設定ファイルを編集するため、初回のデプロイは Open WebUI より時間がかかります。個人なら公式の Docker Compose から始めるのがおすすめで、一つの画面で複数のモデルを比較したい人に向いています。チームなら企業ディレクトリのログインにつなぎ、グループごとにエージェントとモデルの権限を割り当てたいチームに向いています。MIT ライセンスで、商用利用に追加条件はありません。

### 9. AnythingLLM

![AnythingLLM の画面](https://raw.githubusercontent.com/Mintplex-Labs/anythingllm-docs/main/public/images/document-chat/manage-attached-docs.png)

GitHub Stars：68.4k

公式サイト：[https://anythingllm.com](https://anythingllm.com)

GitHub：[https://github.com/Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)

AnythingLLM は、文書 Q&A とノーコードエージェントのための AI アプリケーションです。特徴は、PDF、Web ページ、メモなどの文書をワークスペースに入れるだけで Q&A でき、コードを書かずにエージェントと定期タスクを設定でき、デスクトップ版と Docker 版の両方を提供することです。ただし対象は知識 Q&A と軽い自動化で、複雑な業務プロセスは担いません。個人なら macOS、Windows、Linux のデスクトップ版をインストールすればすぐ使え、自分の資料を Q&A につなぐのに向いています。チームなら Docker 版がマルチユーザーインスタンスと権限管理を提供し、チームで文書 Q&A ライブラリを共有するのに向いています。マルチユーザーと権限は Docker 版だけにあり、デスクトップ版は一人用ツールです。MIT ライセンス。

### 10. OpenClaw

![OpenClaw の画面](https://raw.githubusercontent.com/openclaw/openclaw/main/.github/pr-proof/claw-creator/main-chat.png)

GitHub Stars：394.7k

公式サイト：[https://openclaw.ai](https://openclaw.ai)

GitHub：[https://github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

OpenClaw は、メッセージチャンネルにつながり、タスクを実行できる個人向けエージェントです。特徴は、同じ Gateway をノート PC 上の個人 claw としても、共有のマルチプレイヤー claw としても動かせ、違いは設定だけであることです。さらにエージェントは質問に答えるだけでなく、実際にホストマシン上で作業します。ただし既定のツールはホスト上で直接動くため、受信メッセージはすべて信頼できない入力として扱い、セキュリティ境界を自分で設定する必要があります。個人なら、実際に手を動かしてくれ、チャットチャンネルからいつでも呼び出せるアシスタントが欲しい人に向いています。チームなら小規模なチームで一つのインスタンスを共有できますが、README は外部に共有する前にセキュリティとサンドボックスのガイドを読むよう求めています。MIT ライセンス。

### 11. Khoj

![Khoj の画面](https://raw.githubusercontent.com/khoj-ai/khoj/master/documentation/assets/img/khoj_web_app_home.png)

GitHub Stars：38.2k

公式サイト：[https://khoj.dev](https://khoj.dev)

GitHub：[https://github.com/khoj-ai/khoj](https://github.com/khoj-ai/khoj)

Khoj はセルフホスト可能な「AI 第二の脳」です。特徴は、メモ、文書、Web ページを一つのアシスタントにつなぎ、検索、Q&A、定期自動化に対応することです。README には、デバイス上の個人 AI からクラウド規模の企業 AI まで拡張でき、オンプレミスの企業版もあると書かれています。ただしセルフホストインスタンスのマルチユーザーに関する詳細は README に明記されておらず、デプロイ前に公式ドキュメントを確認する必要があります。また 2026-11-18 時点で、リポジトリの最新プッシュは 2026-08 でした。個人ならまず自分のための知識アシスタントを作るのに向いています。チームなら、将来チームに広げる可能性がある場合、同じコードベースから始められます。AGPL-3.0 ライセンスで、商用利用は認められますが、変更したソースを公開する必要があります。

## 第2部：チームと企業向け

### 12. Sim

![Sim の画面](https://raw.githubusercontent.com/simstudioai/sim/main/apps/sim/public/static/readme-platform.png)

GitHub Stars：30.2k

公式サイト：[https://www.sim.ai](https://www.sim.ai)

GitHub：[https://github.com/simstudioai/sim](https://github.com/simstudioai/sim)

Sim は協働型のエージェントとワークフローのワークスペースです。特徴は、複数人が同じキャンバスでエージェントフローを構築、デバッグ、デプロイ、監視できることで、オーケストレーションキャンバスとチームコラボレーションツールの中間に位置します。ただし担うのはフローのオーケストレーションで、エージェントが扱う業務データと権限は接続先のシステムが決めます。個人なら Docker で一人でも入れて試せます。チームなら複数人で一連のエージェントフローを共同で保守したいチームに向いています。Apache-2.0 ライセンス。

### 13. Paperclip

![Paperclip の画面](https://raw.githubusercontent.com/paperclipai/paperclip/master/doc/assets/pap-3368/desktop-planning-detail.png)

GitHub Stars：114.7k

公式サイト：[https://paperclip.ing](https://paperclip.ing)

GitHub：[https://github.com/paperclipai/paperclip](https://github.com/paperclipai/paperclip)

Paperclip は複数のエージェントを管理する組織レイヤーで、README は「OpenClaw が従業員なら、Paperclip は会社だ」と一行で位置づけています。特徴は、エージェント組織に承認ステージと、会社 / エージェント / プロジェクトの 3 段階の予算を設定し、超過すると自動で一時停止することです。ただし予算の執行はエージェントが報告する費用に依存し、ほとんどのコネクタはまだ実験段階です。個人なら一つのエージェントから始められます。チームなら複数のエージェントをすでに使い、会社のように管理したいチームに向いています。MIT ライセンス。

### 14. Buzz

![Buzz の画面](https://raw.githubusercontent.com/block/buzz/main/docs/assets/screenshots/channel-thread.png)

GitHub Stars：37.6k

GitHub：[https://github.com/block/buzz](https://github.com/block/buzz)

Buzz は Block がオープンソースで公開した「人とエージェントがチャンネルで一緒に働くワークスペース」で、自分の relay 上で動きます。特徴は、メッセージ、承認、git イベントがすべて署名付きイベントであるため、チームが誰がいつ何を承認したかをさかのぼれることです。ただし README は「未完成」と自ら述べており、モバイルとプッシュ通知は開発中です。個人には向かず、その形はチームワークスペースなので一人で使う意味は大きくありません。チームなら、早期プロジェクトを追いかけ、エージェントをチームのチャンネル協働に取り込みたいエンジニアリングチームに向いています。Apache-2.0 ライセンス。

### 15. Onyx

![Onyx の画面](https://raw.githubusercontent.com/onyx-dot-app/onyx/main/.github/assets/onyx-chat-use-cases.png)

GitHub Stars：33.4k

公式サイト：[https://onyx.app](https://onyx.app)

GitHub：[https://github.com/onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx)

Onyx はリポジトリで自らを「Open Source AI Platform」と説明し、企業の知識源につながる AI 検索とアシスタントを提供します。特徴は、50 以上の企業知識源（文書、チケット、チャット記録）につなぎ、元システムでユーザーが持つ権限をそのまま使うことです。元システムで見えない文書は、Q&A にも出てきません。ただし SSO、RBAC などの機能は ee ディレクトリにあり、Onyx Enterprise License で利用します。個人なら Docker でデプロイして自分の資料につなげられます。チームなら自社環境に全社向けの知識 Q&A の入口を作りたいチームに向いています。コアコードは MIT（Expat）ライセンスです。

### 16. vLLM

![vLLM のアーキテクチャ](https://raw.githubusercontent.com/vllm-project/vllm/main/docs/assets/design/hierarchy.png)

GitHub Stars：97.1k

公式サイト：[https://vllm.ai](https://vllm.ai)

GitHub：[https://github.com/vllm-project/vllm](https://github.com/vllm-project/vllm)

vLLM は本番向けの大規模モデル推論サービスです。特徴は、PagedAttention などの最適化により同じ GPU カードでより多くの同時リクエストを処理でき、OpenAI 互換 API を提供するため、既存アプリはアドレスを変えるだけで接続できることです。ただし GPU と運用の投資が必要で、個人がノート PC で使うなら Ollama の方が適しています。個人なら GPU を持つ開発者が自分のモデルサービスを動かすのに使えます。チームなら自前のモデル層を作り、複数アプリに共通の推論を提供したいチームに向いています。Apache-2.0 ライセンス。

### 17. LiteLLM

![LiteLLM の画面](https://docs.litellm.ai/assets/ideal-img/ui_request_logs.8cfa565.1280.png)

GitHub Stars：63.5k

公式サイト：[https://www.litellm.ai](https://www.litellm.ai)

GitHub：[https://github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

LiteLLM は複数のモデル API を統一するゲートウェイです。特徴は、100 以上のモデルを OpenAI 形式の API に統一し、予算、キー、レート制限、ログを提供して、プラットフォームチームがチームごとに費用を制御できることです。ただしモデル呼び出しの層だけを扱い、業務システム内でのエージェントの権限には関与しません。個人なら Python SDK としてコード内でモデルを切り替えられます。チームなら社内の複数アプリに共通のモデルゲートウェイを用意したいプラットフォームチームに向いています。予算やキーなどのコア機能は MIT の範囲で、SSO などの企業機能は enterprise ディレクトリで別途ライセンスが必要です。

### 18. RAGFlow

![RAGFlow の画面](https://raw.githubusercontent.com/infiniflow/ragflow-docs/main/images/agent_list.jpg)

GitHub Stars：94.4k

公式サイト：[https://ragflow.io](https://ragflow.io)

GitHub：[https://github.com/infiniflow/ragflow](https://github.com/infiniflow/ragflow)

RAGFlow は深い文書解析を特徴とする RAG エンジンです。特徴は、表やレイアウトが複雑な PDF をチャンク化し、原文の位置にさかのぼれる引用付きで回答することです。ただし解くのは検索品質で、誰が何を聞けるかは扱わないため、権限は接続層で処理する必要があります。個人なら Docker でデプロイして自分の資料をつなげられます。チームなら契約書、マニュアル、レポートを Q&A につなぎたいチームに向いています。Apache-2.0 ライセンス。

### 19. MLflow

![MLflow のトレーシング画面](https://raw.githubusercontent.com/mlflow/mlflow/refs/heads/master/assets/readme-tracing.png)

GitHub Stars：28.9k

公式サイト：[https://mlflow.org](https://mlflow.org)

GitHub：[https://github.com/mlflow/mlflow](https://github.com/mlflow/mlflow)

MLflow は実験追跡、モデルレジストリ、LLM 評価を行うプラットフォームで、機械学習チームにはおなじみの存在です。特徴は、近年のバージョンで LLM とエージェント呼び出しの追跡が加わり、エージェント評価と従来のモデル管理を一か所にまとめられることです。ただし対象はデータサイエンスとプラットフォームのチームで、業務チームが直接触ることはほとんどありません。個人なら一人で実験をローカルで動かせます。チームならデータサイエンスチームがすでにあり、モデルとエージェント評価を一元管理したい企業に向いています。Apache-2.0 ライセンス。

## 第3部：個人向け

### 20. Jan

![Jan デスクトップアプリ](https://static-docs.nocobase.com/image-6mbodr.png)

GitHub Stars：45.8k

公式サイト：[https://jan.ai](https://jan.ai)

GitHub：[https://github.com/janhq/jan](https://github.com/janhq/jan)

Jan は 100% オフラインで動くデスクトップ AI アプリです。特徴は、モデルと会話がすべてマシン上に残り、内蔵のモデルライブラリと localhost:1337 のローカル API により、他のプログラムから本機のモデルを直接呼び出せることです。ただしローカルでの実行だけで、マルチユーザー、チーム共有、サーバー配備のモードはありません。個人なら自分のパソコンだけで使い、データを一切外に出したくない人に向いています。チームにはチームモードがなく、複数人で使うには各自がインストールする必要があります。Apache-2.0 ライセンス。

### 21. LocalAI

![LocalAI の画面](https://raw.githubusercontent.com/mudler/LocalAI/master/website/static/media/v4-9-0-ui-activity.png)

GitHub Stars：50.4k

公式サイト：[https://localai.io](https://localai.io)

GitHub：[https://github.com/mudler/LocalAI](https://github.com/mudler/LocalAI)

LocalAI は OpenAI 互換のローカル推論エンジンです。特徴は、GPU がなくても動き、テキスト、音声、画像のモデルに対応して OpenAI 形式の API に統一するため、既存プログラムはアドレスを変えるだけでローカルに切り替えられることです。ただし性能はハードウェア次第で、CPU 推論は小さいモデルや低頻度の利用に向いています。個人なら古いパソコンや小型マシンで「ローカルの OpenAI」を自前で作りたい人に向いています。チームでは推論層でありマルチユーザープラットフォームではないため、vLLM を使うことが多いです。MIT ライセンス。

### 22. Hermes Agent

![Hermes Agent のダッシュボード](https://raw.githubusercontent.com/NousResearch/hermes-agent/main/website/static/img/dashboard/admin-sessions.png)

GitHub Stars：264.3k

公式サイト：[https://hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com)

GitHub：[https://github.com/NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

Hermes Agent は Nous Research がオープンソースで公開した、記憶と定期タスクを備えた個人向けエージェントです。特徴は長期記憶とスケジュールで動くタスクで、資料の整理やスクリプトの実行を定時にこなせます。NocoBase のような開発環境にコーディングエージェントとして接続することもでき、使うほどに利用者の習慣を理解します。ただし一人用のインスタンスで、マルチユーザーや権限の概念はありません。個人なら長く付き合える個人アシスタントが欲しい開発者に向いています。チームで共有するには各自がインスタンスをデプロイする必要があります。MIT ライセンス。

### 23. nanobot

![nanobot のワークベンチ](https://raw.githubusercontent.com/HKUDS/nanobot/main/images/nanobot-workbench.png)

GitHub Stars：50.2k

公式サイト：[https://nanobot.wiki](https://nanobot.wiki)

GitHub：[https://github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

nanobot は「超軽量でオープンソース、セルフホスト可能な個人 AI エージェントフレームワーク」です。特徴はコード量が少なく構造が明確で、ブラウザ、ターミナル、チャットアプリの三つから使えるため、開発者がすべての行を読んでから変更できます。ただし単一インスタンスで記憶を共有し、WebUI にアクセスすると管理権限を持ちます。個人ならソースレベルで自分のエージェントをカスタマイズしたい開発者に向いています。チームで複数人が使うにはインスタンスを分ける必要があり、プロジェクト自体はマルチユーザーモードを提供していません。MIT ライセンス。

### 24. Cherry Studio

![Cherry Studio の画面](https://raw.githubusercontent.com/CherryHQ/cherry-studio/main/.github/images/readme/chat-light-en.webp)

GitHub Stars：53.6k

公式サイト：[https://cherryai.com](https://cherryai.com)

GitHub：[https://github.com/CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)

Cherry Studio は Windows、macOS、Linux 向けのデスクトップ AI ワークベンチです。特徴は、一つのウィンドウで複数のモデルプロバイダーにつなぎ、いつでも切り替えられることです。エージェント、ナレッジベース、MCP サポートを内蔵し、デスクトップソフトに慣れた人はブラウザを開く必要がありません。ただし集中モデル管理や共有ナレッジベースなどのチーム機能はクローズドソースの Enterprise Edition にあり、この記事では Community 版だけを扱います。個人なら一つの画面でモデルを切り替えたい日常的なユーザーに向いています。チームでは Community 版にチームモードはありません。AGPL-3.0 ライセンス（Community 版）で、商用利用は認められますが、変更したソースを公開する必要があります。





⭐ このまとめが役に立ったら、ツールを選んでいる同僚に共有してください。[GitHub](https://github.com/nocobase/nocobase) で NocoBase に Star を付けていただけると嬉しいです。

## 関連記事

- [Top 20 AI Projects on GitHub 2026](/zh-CN/blog/best-open-source-ai-projects-github-2026/)
- [10 Open-Source AI Agent Platforms for Business](/zh-CN/blog/open-source-ai-agent-platforms-for-business/)
- [8 Open-Source AI Agent Platforms for Internal Tools](/zh-CN/blog/8-open-source-ai-agent-platforms-for-internal-tools/)
- [Top 5 Open Source AI Internal Tools on GitHub](/zh-CN/blog/top-5-open-source-ai-internal-tools-on-github/)
- [Add AI to Existing Enterprise Systems with NocoBase](/zh-CN/blog/add-ai-to-existing-enterprise-systems-with-nocobase/)
- [NocoBase Core：業務システムを構築・運用するアプリケーション基盤](/zh-CN/core/)
- [NocoBase Studio：エージェントと共に開発し、管理された手順でリリース](/zh-CN/studio/)
- [NocoBase Solutions：オープンソースの業務アプリケーション](/zh-CN/solutions/)
- [エディションと価格](/zh-CN/pricing/)
- [NocoBase 3 ドキュメント](https://docs.nocobase.com/zh-CN/)
