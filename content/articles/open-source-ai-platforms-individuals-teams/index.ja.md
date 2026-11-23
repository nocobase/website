最近、Hacker News でセルフホスト型のオープンソース AI プラットフォームについて、いくつもの議論が交わされているのを見かけました。

興味深いのは、「AI プラットフォームを探している」と言っても、求めているものが人によって大きく異なることです。自分の PC でモデルを動かしたい人もいれば、Agent を Slack や社内システムにつないで日常業務を任せたい人もいます。複数の Agent を常時稼働させながらコストを抑える方法を考えている人もいます。次の 3 つの議論が、その違いをよく表しています。

- [Ask HN: What Does Your Self-Hosted LLM Stack Look Like in 2025?](https://news.ycombinator.com/item?id=44187275)：ローカルモデル、実行ツール、ハードウェアをどう組み合わせれば、実用的なセルフホスト AI 環境を作れるかという質問です。

![image](https://static-docs.nocobase.com/image-bh0zb8.png)

- [Ask HN: Open-source AI Agents building platform?](https://news.ycombinator.com/item?id=42620424)：ある創業者は、Slack 経由で社内システムと接続し、Agent に実際の業務を手伝わせるための、オープンソースでセルフホスト可能な基盤を探していました。Agent を毎回ゼロから開発したくないという背景があります。

![image](https://static-docs.nocobase.com/image-r98fnh.png)

- [Ask HN: Is anyone running multi/always-on agents that don't cost a fortune?](https://news.ycombinator.com/item?id=50391647)：複数の Agent を継続稼働させながら、運用費用を抑え、セルフホストが適しているかを知りたいという声もあります。

![image](https://static-docs.nocobase.com/image-6g8shj.png)

こうしたニーズをもとに、AI Agent、ワークフロー自動化、モデル実行、ナレッジベース、業務アプリ開発にわたる **セルフホスト可能なオープンソースまたはソース公開型 AI プラットフォーム 24 選**をまとめました。

選びやすいよう、用途に応じて 3 つに分類しています。

1. **個人・企業の両方（11 件）**：個人で使い始め、チーム利用へも広げられるもの。
2. **企業向け（8 件）**：共同作業、一元管理、企業内デプロイに向くもの。
3. **個人向け（5 件）**：ローカル実行、個人開発、日常的な AI 活用に向くもの。

各プロジェクトの主要機能と利用シーンを紹介します。自分の目的に合うツールを探す際の参考にしてください。

それでは、24 のプロジェクトを見ていきましょう。

---

💬 こんにちは！NocoBase ブログをお読みいただきありがとうございます。NocoBase は企業向けアプリケーション開発のためのオープンソースプラットフォームで、業務システムの構築と継続的な改善に AI を参加させることができます。ぜひ [GitHub](https://github.com/nocobase/nocobase) もご覧ください。

---


| プロジェクト  | 対象       | 主な用途                                                       | Stars  |
| ------------- | ---------- | -------------------------------------------------------------- | ------ |
| NocoBase      | 個人・企業 | Agent で CRM、購買、チケット管理などの業務システムを開発・改善 | 25.0k  |
| Dify          | 個人・企業 | Agent、ワークフロー、RAG アプリを視覚的に構築                  | 161.4k |
| Langflow      | 個人・企業 | Agent・RAG フローをドラッグ＆ドロップで構築                    | 156.7k |
| n8n           | 個人・企業 | AI ノードを備えたセルフホスト型ワークフロー自動化              | 210.9k |
| LobeHub       | 個人・企業 | 個人チャットからチーム向け super-agents まで                   | 85.7k  |
| Ollama        | 個人・企業 | コマンド一つでモデルを実行し REST API を提供                   | 187.5k |
| Open WebUI    | 個人・企業 | ChatGPT 型 UI、マルチユーザー、RBAC                            | 159.0k |
| LibreChat     | 個人・企業 | 複数モデル・ユーザー対応チャット、Agent と MCP                 | 47.3k  |
| AnythingLLM   | 個人・企業 | 文書 Q&A・ノーコード Agent、デスクトップ版と Docker 版         | 68.4k  |
| OpenClaw      | 個人・企業 | メッセージチャネルにつながる実行型 Agent                       | 394.7k |
| Khoj          | 個人・企業 | ナレッジ Q&A と定期自動化の AI セカンドブレイン                | 38.2k  |
| Sim           | 企業       | 共同利用できる Agent・ワークフローワークスペース               | 30.2k  |
| Paperclip     | 企業       | Agent 組織の承認・予算・プロジェクト管理                       | 114.7k |
| Buzz          | 企業       | 人と Agent がチャネルで協業するワークスペース                  | 37.6k  |
| Onyx          | 企業       | 企業ナレッジを横断する AI 検索・アシスタント                   | 33.4k  |
| vLLM          | 企業       | 本番向け大規模モデル推論サービス                               | 97.1k  |
| LiteLLM       | 企業       | 100 以上のモデル API を統一、予算とキーを管理                  | 63.5k  |
| RAGFlow       | 企業       | 複雑な文書解析に強い RAG エンジン                              | 94.4k  |
| MLflow        | 企業       | 実験追跡、モデル登録、LLM 評価                                 | 28.9k  |
| Jan           | 個人       | 完全オフラインのデスクトップ AI アプリ                         | 45.8k  |
| LocalAI       | 個人       | GPU 不要の OpenAI 互換ローカル推論                             | 50.4k  |
| Hermes Agent  | 個人       | 記憶と定期タスクを備えた個人向け Agent                         | 264.3k |
| nanobot       | 個人       | 超軽量セルフホスト型の個人 Agent フレームワーク                | 50.2k  |
| Cherry Studio | 個人       | モデル・Agent を扱うデスクトップワークスペース                 | 53.6k  |

## 第 1 部：個人・企業の両方に向くツール

### 1. NocoBase

![studio-en-req-accept-20261111-normal-2x](https://static-docs.nocobase.com/studio-en-req-accept-20261111-normal-2x-2ula22.png)

GitHub Stars：25.0k

公式サイト：[https://www.nocobase.com](https://www.nocobase.com)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

[NocoBase](https://www.nocobase.com/ja/) は、AI を使って業務システムを開発・運用し、継続的に改善できるオープンソースプラットフォームです。Coding Agent が業務機能を開発し、NocoBase がアプリケーション基盤と開発ガバナンスを提供します。人は目標を決め、成果を確認し、重要な判断を下します。

Coding Agent を使えば、CRM、購買、チケット管理システムの初期版はゼロからでも短期間で作れるでしょう。しかし、本当の課題は公開後に現れます。要件が変わるたびにデータ構造、ロール権限、承認フロー、デプロイ方法を調整する必要があり、新機能の追加が既存の構造に影響して保守が難しくなることもあります。NocoBase が取り組むのは、**AI で作った業務システムを迅速に公開するだけでなく、長期にわたって安定して改善し続けるにはどうすればよいか**という課題です。

![image](https://static-docs.nocobase.com/image-oxqk94.png)

そのために NocoBase は 2 つの中核部分を用意しています。[NocoBase Core](https://www.nocobase.com/core/) はオープンソースのアプリケーション基盤で、データ管理、ロール権限、ワークフロー、承認、デプロイなどの共通機能を提供します。Coding Agent は毎回システム基盤を作り直すことなく、個別の業務機能に集中できます。[NocoBase Studio](https://www.nocobase.com/studio/) は、人と Agent の開発協業を支えます。複数の Agent による開発、テスト、レビューを調整し、検査、人による受け入れ、リリース承認を一つのプロセスにまとめることで、未承認の変更が本番環境へ入るのを防ぎます。

![image](https://static-docs.nocobase.com/image-mxxyt2.png)

**個人開発者**なら、無料の [Community 版](https://www.nocobase.com/pricing/)（Apache-2.0）をローカル PC や自分のサーバーで動かせます。Claude Code、Codex、Hermes Agent などの Coding Agent を利用して、Core の構造上に業務機能を開発できます。ログイン、権限、管理画面といった共通機能を毎回実装する必要がないため、個人でも保守・拡張しやすい業務システムを構築できます。

**チームや企業**でも、NocoBase は共同開発と長期運用に対応します。業務 Agent はメンバーと同じロール・権限体系を利用でき、重要な操作では人による承認を求められ、操作履歴も確認できます。複数の開発案件や Agent をまとめて管理したい場合、あるいは高度なリリース承認や企業 SSO が必要な場合は、NocoBase Studio を含む [Professional 版](https://www.nocobase.com/pricing/)を選べます。

### 2. Dify

![Dify 界面截图](https://raw.githubusercontent.com/langgenius/dify/main/images/describe.png)

GitHub Stars：161.4k

公式サイト：[https://dify.ai](https://dify.ai)

GitHub：[https://github.com/langgenius/dify](https://github.com/langgenius/dify)

Dify は、セルフホスト可能な AI アプリ開発・ワークフロー編成プラットフォームです。キャンバス上で Agent、ワークフロー、RAG を視覚的に組み合わせ、複数モデルを接続してアプリや API として公開できます。試作やフロー変更の負担を減らせる一方、担当範囲は AI のオーケストレーションとインターフェースであり、既存の業務システムを置き換えるものではありません。複雑なデータ権限や承認フローは外部の仕組みが必要です。**個人**は Docker Compose で始め、AI フローの試作・検証に利用できます。**チーム**はワークスペースで共同改善し、複数モデルを使うフローをアプリや API として提供できます。社内利用に制限はありませんが、マルチテナントのホスティングサービスには書面による許可が必要で、フロントエンドのロゴを削除することはできません。

### 3. Langflow

![Langflow 界面截图](https://raw.githubusercontent.com/langflow-ai/langflow/main/docs/static/img/workspace-basic-prompting.png)

GitHub Stars：156.7k

公式サイト：[https://www.langflow.org](https://www.langflow.org)

GitHub：[https://github.com/langflow-ai/langflow](https://github.com/langflow-ai/langflow)

Langflow は、Agent や RAG フローをドラッグ＆ドロップで作るセルフホスト対応ツールです。LangChain エコシステムの一般的な部品をキャンバス上のノードとして扱い、つないで動作確認し、必要に応じて API として公開できます。連携コードを繰り返し書く手間を減らせますが、主な用途はプロトタイプとフロー編成であり、権限や承認などの業務ルールは別途実装する必要があります。**個人**は pip や Docker で始め、フローの実現性を確認してからコード化を判断できます。**チーム**は共通インスタンスでフローを共有・再利用し、複数の Agent 案を試せます。MIT ライセンスで、商用利用や再配布への追加条件はありません。

### 4. n8n

![n8n 界面截图](https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-screenshot-readme.png)

GitHub Stars：210.9k

公式サイト：[https://n8n.io](https://n8n.io)

GitHub：[https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

n8n は、セルフホスト対応のワークフロー自動化ツールです。AI Agent ノードを加えたことで、「AI 付き Zapier」と呼ばれることもあります。400 種類以上の連携ノードで CRM、メール、データベース、モデル呼び出しを接続でき、キャンバスで扱えない処理はコードノードで補えます。ただし、あくまでワークフローエンジンであり、業務データのモデリング、権限、承認は接続先システムが担います。**個人**は Docker コマンドで自分のツール群を自動連携できます。**チーム**は社内通知やデータ同期などに利用できます。Sustainable Use License 1.0 はソース公開型の fair-code で、OSI 認定のオープンソースライセンスではありません。個人利用と自社の社内業務利用は認められますが、外部向けホスティングには商用ライセンスが必要です。

### 5. LobeHub

![LobeHub 界面截图](https://hub-apac-1.lobeobjects.space/images/home/overview-cao-light.webp)

GitHub Stars：85.7k

公式サイト：[https://lobehub.com](https://lobehub.com)

GitHub：[https://github.com/lobehub/lobehub](https://github.com/lobehub/lobehub)

LobeHub は、個人向けチャット画面 Lobe Chat から発展し、チーム向けの「super-agents」を重視する AI Agent プラットフォームです。Agent マーケット、複数モデルの切り替え、ローカルデプロイに加え、Slack、Discord、Telegram などのチャネルと接続でき、Auth0 などによる SSO にも対応します。ただし主な役割は対話・アシスタント層であり、Agent が扱う業務データや権限の境界は外部システムが決めます。**個人**は複数モデル対応の使いやすいチャットアシスタントを手軽に導入できます。**チーム**は既存のコラボレーションツール内に AI を配置し、ログインを一元管理できます。LobeHub Community License は Apache-2.0 に条件を追加したもので、無改変なら商用利用できますが、改変したコードの再配布には商用ライセンスが必要です。

### 6. Ollama

![Ollama 界面截图](https://files.ollama.com/ollama-app-screenshot.png)

GitHub Stars：187.5k

公式サイト：[https://ollama.com](https://ollama.com)

GitHub：[https://github.com/ollama/ollama](https://github.com/ollama/ollama)

Ollama は、オープンソースモデルをローカルにダウンロードして実行するツールです。コマンド一つで Llama、Qwen、DeepSeek などを取得・実行でき、他のアプリ向けに REST API と OpenAI 互換インターフェースも提供します。ローカル AI 環境のモデル実行層としてよく使われますが、チャット画面、マルチユーザー、ナレッジベースは備えていません。これらは Open WebUI や LibreChat などで補います。**個人**はデータを外部へ送らず自分の PC でモデルを動かせます。**チーム**は社内サーバーに設置し、複数アプリ共通のモデルサービスとして使うことがあります。MIT ライセンスで商用利用に追加条件はありません。

### 7. Open WebUI

![Open WebUI 界面截图](https://docs.openwebui.com/images/landing/hero.png)

GitHub Stars：159.0k

公式サイト：[https://openwebui.com](https://openwebui.com)

GitHub：[https://github.com/open-webui/open-webui](https://github.com/open-webui/open-webui)

Open WebUI は、ChatGPT に似たセルフホスト型チャットインターフェースです。Ollama や OpenAI 互換 API に接続し、マルチユーザー、RBAC、ナレッジベース、ツール呼び出し、モデル管理を利用できます。ただし対話の入口であって業務システムではないため、Agent が業務データを更新する際の権限や承認は別途設計が必要です。**個人**は Docker で Ollama と組み合わせ、ローカルの ChatGPT のような環境を作れます。**チーム**は全社共通のモデル入口を用意し、ロール別にアクセスを割り当てられます。Open WebUI License は BSD-3 系にブランド条件を加えたものです。ブランド表示の変更・削除は原則不可で、任意の 30 日間の直接利用者が 50 人以下なら例外があります。超える場合は表示を維持するか企業ライセンスが必要です。

### 8. LibreChat

![LibreChat 界面截图](https://www.librechat.ai/_next/static/media/demo_dark.102d59a6.png)

GitHub Stars：47.3k

公式サイト：[https://librechat.ai](https://librechat.ai)

GitHub：[https://github.com/LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat)

LibreChat は、セルフホスト対応のマルチモデルチャット画面です。OpenAI、Anthropic、Google、Ollama などを一つの画面で使い分けられ、OAuth2、LDAP、メールログインにも対応します。Admin Panel でユーザー、グループ、ロールを管理でき、Agent の共有対象を指定できるほか、MCP ツールも利用できます。ただし設定項目が多く、モデル提供元や認証方式を追加するたびに設定ファイルを変更する必要があり、初期導入は Open WebUI より手間がかかります。**個人**は公式 Docker Compose から始め、複数モデルを比較できます。**チーム**は社内ディレクトリ認証とグループ別の Agent・モデル権限を利用できます。MIT ライセンスで商用利用に追加条件はありません。

### 9. AnythingLLM

![AnythingLLM 界面截图](https://raw.githubusercontent.com/Mintplex-Labs/anythingllm-docs/main/public/images/document-chat/manage-attached-docs.png)

GitHub Stars：68.4k

公式サイト：[https://anythingllm.com](https://anythingllm.com)

GitHub：[https://github.com/Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)

AnythingLLM は、文書 Q&A とノーコード Agent のための AI アプリです。PDF、Web ページ、メモなどをワークスペースに登録して質問でき、コードを書かずに Agent や定期タスクを設定できます。デスクトップ版と Docker 版がありますが、主な用途はナレッジ Q&A と軽量な自動化で、複雑な業務フローを担うものではありません。**個人**は macOS、Windows、Linux のデスクトップ版をインストールして手持ちの資料を活用できます。**チーム**は Docker 版でマルチユーザーと権限管理を利用し、文書 Q&A を共有できます。マルチユーザーと権限は Docker 版のみで、デスクトップ版は単独利用向けです。MIT ライセンスです。

### 10. OpenClaw

![OpenClaw 界面截图](https://raw.githubusercontent.com/openclaw/openclaw/main/.github/pr-proof/claw-creator/main-chat.png)

GitHub Stars：394.7k

公式サイト：[https://openclaw.ai](https://openclaw.ai)

GitHub：[https://github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

OpenClaw は、メッセージチャネルと連携し、実際にタスクを実行できる個人向け Agent です。同じ Gateway を設定によってノート PC の個人用 claw にも、複数人で共有する claw にもできます。質問に答えるだけでなくホスト上で処理を実行する点が特徴です。ただし標準ツールはホスト上で直接動くため、すべての受信メッセージを信頼できない入力として扱い、安全境界を自分で設定する必要があります。**個人**はチャットから実作業を依頼できるアシスタントとして使えます。**小規模チーム**はインスタンスを共有できますが、README は外部共有前にセキュリティとサンドボックスのガイドを読むよう求めています。MIT ライセンスです。

### 11. Khoj

![Khoj 界面截图](https://raw.githubusercontent.com/khoj-ai/khoj/master/documentation/assets/img/khoj_web_app_home.png)

GitHub Stars：38.2k

公式サイト：[https://khoj.dev](https://khoj.dev)

GitHub：[https://github.com/khoj-ai/khoj](https://github.com/khoj-ai/khoj)

Khoj はセルフホスト対応の「AI セカンドブレイン」です。ノート、文書、Web ページを一つのアシスタントにまとめ、検索、Q&A、定期自動化を行えます。README では端末上の個人用 AI からクラウド規模の企業 AI まで拡張できると説明され、別途オンプレミスの企業版もあります。ただしセルフホスト版のマルチユーザー仕様は README に詳しく書かれていないため、導入前に公式文書で確認する必要があります。原文によると、2026 年 11 月 18 日時点でリポジトリの最終プッシュは 2026 年 8 月です。**個人**は自分用のナレッジアシスタントから始められ、**チーム**への拡張を見据える場合も同じコードベースを出発点にできます。AGPL-3.0 は商用利用を認めていますが、改変したソースコードの公開を求めます。

## 第 2 部：チーム・企業向けツール

### 12. Sim

![Sim 界面截图](https://raw.githubusercontent.com/simstudioai/sim/main/apps/sim/public/static/readme-platform.png)

GitHub Stars：30.2k

公式サイト：[https://www.sim.ai](https://www.sim.ai)

GitHub：[https://github.com/simstudioai/sim](https://github.com/simstudioai/sim)

Sim は、Agent とワークフローを共同管理するワークスペースです。複数人が同じキャンバスで Agent フローを構築、デバッグ、デプロイ、監視でき、フロー編成とチーム協業を組み合わせています。ただし Sim が担うのはフローの編成であり、Agent の操作対象となる業務データや権限は接続先システムが管理します。**個人**も Docker で試せます。**チーム**では複数人で共通の Agent フローを保守したい場合に向いています。Apache-2.0 ライセンスです。

### 13. Paperclip

![Paperclip 界面截图](https://raw.githubusercontent.com/paperclipai/paperclip/master/doc/assets/pap-3368/desktop-planning-detail.png)

GitHub Stars：114.7k

公式サイト：[https://paperclip.ing](https://paperclip.ing)

GitHub：[https://github.com/paperclipai/paperclip](https://github.com/paperclipai/paperclip)

Paperclip は複数の Agent を管理する組織レイヤーです。README では「OpenClaw が従業員なら、Paperclip は会社」と説明されています。Agent 組織に承認ステップや会社・Agent・プロジェクトの 3 階層の予算を設定し、上限を超えると自動停止できます。ただし予算制御は Agent が報告する利用額に依存し、多くのコネクタはまだ実験段階です。**個人**は Agent 一つから始められます。**チーム**では複数 Agent をすでに運用し、組織のように管理したい場合に役立ちます。MIT ライセンスです。

### 14. Buzz

![Buzz 界面截图](https://raw.githubusercontent.com/block/buzz/main/docs/assets/screenshots/channel-thread.png)

GitHub Stars：37.6k

GitHub：[https://github.com/block/buzz](https://github.com/block/buzz)

Buzz は Block が公開した、人と Agent が同じチャネルで協業するワークスペースで、自社の relay 上で動きます。メッセージ、承認、git イベントは署名付きで記録され、誰がいつ何を承認したか追跡できます。ただし README は開発途中の「未完成」と明記しており、モバイル対応やプッシュ通知は開発中です。**個人**ではチーム向けの形態を活かしにくく、**チーム**では初期段階のプロジェクトを追いながら Agent をチャネル型の協業に組み込みたいエンジニア組織に向いています。Apache-2.0 ライセンスです。

### 15. Onyx

![Onyx 界面截图](https://raw.githubusercontent.com/onyx-dot-app/onyx/main/.github/assets/onyx-chat-use-cases.png)

GitHub Stars：33.4k

公式サイト：[https://onyx.app](https://onyx.app)

GitHub：[https://github.com/onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx)

Onyx は自らを「Open Source AI Platform」と位置付け、企業ナレッジの検索とアシスタントを提供します。文書、チケット、チャット履歴など 50 以上の企業ナレッジソースに接続し、元のシステムに設定されたユーザー権限も引き継ぎます。元のシステムで閲覧できない文書は回答にも表示されません。ただし SSO や RBAC などの機能は ee ディレクトリにあり、Onyx Enterprise License が適用されます。**個人**は Docker で自分の資料を接続できます。**チーム**では自社環境内に全社向けのナレッジ Q&A 入口を構築する用途に向いています。コアコードは MIT（Expat）ライセンスです。

### 16. vLLM

![vLLM 界面截图](https://raw.githubusercontent.com/vllm-project/vllm/main/docs/assets/design/hierarchy.png)

GitHub Stars：97.1k

公式サイト：[https://vllm.ai](https://vllm.ai)

GitHub：[https://github.com/vllm-project/vllm](https://github.com/vllm-project/vllm)

vLLM は、本番運用向けの大規模言語モデル推論サービスです。PagedAttention などの最適化により同じ GPU で多くの同時リクエストを処理でき、OpenAI 互換 API を提供するため既存アプリの接続先を変更して利用できます。ただし GPU と運用リソースが必要で、ノート PC での個人利用には Ollama のほうが適しています。**個人**は GPU を持つ開発者が自分のモデルサーバーを運用できます。**チーム**は複数アプリに共通の推論サービスを提供する基盤として利用できます。Apache-2.0 ライセンスです。

### 17. LiteLLM

![LiteLLM 界面截图](https://docs.litellm.ai/assets/ideal-img/ui_request_logs.8cfa565.1280.png)

GitHub Stars：63.5k

公式サイト：[https://www.litellm.ai](https://www.litellm.ai)

GitHub：[https://github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)

LiteLLM は、複数のモデル提供元の API を統一するゲートウェイです。100 以上のモデル提供元を OpenAI 互換 API で扱い、予算、キー、レート制限、ログによってチームごとの費用を管理できます。ただし対象はモデル呼び出しであり、業務システム内で Agent に与える権限までは管理しません。**個人**は Python SDK でコードからモデルを切り替えられます。**プラットフォームチーム**は複数の社内アプリ向けに共通のモデルゲートウェイを提供できます。予算・キーなどの中核機能は MIT の範囲で、SSO など企業向け機能は enterprise ディレクトリで別ライセンスとなります。

### 18. RAGFlow

![RAGFlow 界面截图](https://raw.githubusercontent.com/infiniflow/ragflow-docs/main/images/agent_list.jpg)

GitHub Stars：94.4k

公式サイト：[https://ragflow.io](https://ragflow.io)

GitHub：[https://github.com/infiniflow/ragflow](https://github.com/infiniflow/ragflow)

RAGFlow は、複雑な文書の解析に強みを持つ RAG エンジンです。表や複雑なレイアウトを含む PDF を分割・解析し、原文中の位置まで追跡できる引用付き回答を生成します。ただし解決するのは検索品質の問題であり、誰がどの情報を検索できるかという権限は接続部分で管理する必要があります。**個人**は Docker で自分の資料を扱えます。**チーム**は契約書、マニュアル、報告書をナレッジ Q&A に取り込む用途に向いています。Apache-2.0 ライセンスです。

### 19. MLflow

![MLflow 界面截图](https://raw.githubusercontent.com/mlflow/mlflow/refs/heads/master/assets/readme-tracing.png)

GitHub Stars：28.9k

公式サイト：[https://mlflow.org](https://mlflow.org)

GitHub：[https://github.com/mlflow/mlflow](https://github.com/mlflow/mlflow)

MLflow は、実験追跡、モデル登録、LLM 評価のためのプラットフォームとして広く使われています。近年のバージョンでは LLM や Agent の呼び出しトレースが追加され、Agent の評価と従来のモデル管理を同じ場所で行えます。ただし主な利用者はデータサイエンスやプラットフォームの担当者で、業務部門が直接操作することは多くありません。**個人**はローカルで実験を実行でき、**チーム**ではデータサイエンス組織がモデルと Agent の評価を一元管理できます。Apache-2.0 ライセンスです。

## 第 3 部：個人向けツール

### 20. Jan

![image](https://static-docs.nocobase.com/image-6mbodr.png)

GitHub Stars：45.8k

公式サイト：[https://jan.ai](https://jan.ai)

GitHub：[https://github.com/janhq/jan](https://github.com/janhq/jan)

Jan は 100% オフラインで動くデスクトップ AI アプリです。モデルと会話はすべてローカルに保存され、内蔵モデルライブラリと localhost:1337 の API を通じて他のプログラムからローカルモデルを利用できます。ただし端末上で動作する仕組みで、マルチユーザー、チーム共有、サーバー導入の形態はありません。**個人**ではデータを一切外部へ出したくない人に向いています。**チーム**で使う場合は各自がインストールする必要があります。Apache-2.0 ライセンスです。

### 21. LocalAI

![LocalAI 界面截图](https://raw.githubusercontent.com/mudler/LocalAI/master/website/static/media/v4-9-0-ui-activity.png)

GitHub Stars：50.4k

公式サイト：[https://localai.io](https://localai.io)

GitHub：[https://github.com/mudler/LocalAI](https://github.com/mudler/LocalAI)

LocalAI は OpenAI 互換のローカル推論エンジンです。GPU がなくても動作し、テキスト、音声、画像モデルを OpenAI 形式の API で提供します。既存プログラムは接続先を変更するだけでローカル推論へ切り替えられます。ただし性能はハードウェアに依存し、CPU 推論は小規模モデルや低頻度の利用に向いています。**個人**は古い PC や小型機で「ローカル OpenAI」を構築できます。**チーム**ではマルチユーザープラットフォームではなく推論層として利用し、規模が大きい場合は vLLM が選ばれることもあります。MIT ライセンスです。

### 22. Hermes Agent

![Hermes Agent 界面截图](https://raw.githubusercontent.com/NousResearch/hermes-agent/main/website/static/img/dashboard/admin-sessions.png)

GitHub Stars：264.3k

公式サイト：[https://hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com)

GitHub：[https://github.com/NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

Hermes Agent は Nous Research が公開した、記憶と定期タスクを備える個人向けオープンソース Agent です。長期記憶とスケジュール実行により、定期的な資料整理やスクリプト実行ができ、NocoBase などの開発環境では Coding Agent としても利用できます。使うほど利用者の習慣を学んでいく点が特徴です。ただし単独ユーザー向けのインスタンスで、マルチユーザーや権限管理の概念はありません。**個人**では継続的に使えるアシスタントを求める開発者に向いています。**チーム**で使うには利用者ごとにインスタンスを用意する必要があります。MIT ライセンスです。

### 23. nanobot

![nanobot 界面截图](https://raw.githubusercontent.com/HKUDS/nanobot/main/images/nanobot-workbench.png)

GitHub Stars：50.2k

公式サイト：[https://nanobot.wiki](https://nanobot.wiki)

GitHub：[https://github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

nanobot は、超軽量でオープンソースのセルフホスト型個人 AI Agent フレームワークです。コード量が少なく構造が分かりやすいため、開発者がソースを理解して直接変更できます。ブラウザー、ターミナル、チャットアプリから利用できます。ただし一つのインスタンスで記憶が共有され、WebUI にアクセスすると管理権限が与えられます。**個人**ではソースレベルで Agent をカスタマイズしたい開発者に適しています。**チーム**では利用者ごとに別インスタンスが必要で、マルチユーザーモードはありません。MIT ライセンスです。

### 24. Cherry Studio

![Cherry Studio 界面截图](https://raw.githubusercontent.com/CherryHQ/cherry-studio/main/.github/images/readme/chat-light-en.webp)

GitHub Stars：53.6k

公式サイト：[https://cherryai.com](https://cherryai.com)

GitHub：[https://github.com/CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)

Cherry Studio は Windows、macOS、Linux 対応のデスクトップ AI ワークスペースです。一つの画面で複数モデルを切り替えられ、Agent、ナレッジベース、MCP も利用できるため、ブラウザーよりデスクトップアプリを好む人に向いています。ただしモデルの一元管理や共有ナレッジベースなどのチーム機能は非公開の Enterprise Edition に含まれ、この記事では Community 版のみを扱います。**個人**は日常的に複数モデルを使い分ける用途に適しています。**チーム**向けの機能は Community 版にはありません。Community 版は AGPL-3.0 で、商用利用は認められますが、改変したソースの公開が求められます。

⭐ このまとめが役に立ったら、ツールを検討している同僚にも共有してください。[GitHub](https://github.com/nocobase/nocobase) で NocoBase に Star を付けていただけるとうれしいです。

## 関連記事

- [2026 年 GitHub の AI プロジェクト TOP 20](/ja/blog/best-open-source-ai-projects-github-2026/)
- [ビジネス向けオープンソース AI Agent プラットフォーム 10 選](/ja/blog/open-source-ai-agent-platforms-for-business/)
- [社内ツール向けオープンソース AI Agent プラットフォーム 8 選](/ja/blog/8-open-source-ai-agent-platforms-for-internal-tools/)
- [GitHub のオープンソース AI 社内ツール 5 選](/ja/blog/top-5-open-source-ai-internal-tools-on-github/)
- [NocoBase で既存の企業システムに AI を導入する方法](/ja/blog/add-ai-to-existing-enterprise-systems-with-nocobase/)
- [NocoBase Core：業務システムのアプリケーション基盤](/ja/core/)
- [NocoBase Studio：人と Agent の協業開発と承認付きリリース](/ja/studio/)
- [NocoBase Solutions：オープンソース業務アプリ](/ja/solutions/)
- [プランと料金](/ja/pricing/)
- [NocoBase 3 ドキュメント](https://docs.nocobase.com/ja/)
