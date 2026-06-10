ここ数週間、私たちは注目度の高い AI Agent を中心に、組み合わせて使いやすいオープンソースツールをいくつか整理してきました。

[💡Claude Code を使った後に必要な 6 つのオープンソースツール](https://www.nocobase.com/ja/blog/open-source-tools-after-claude-code)

[💡Codex にゼロからアプリを生成させない：組み合わせて使える 6 つのオープンソースプロジェクト](https://www.nocobase.com/ja/blog/building-internal-tools-with-codex)

最近 Reddit を見ていると、AI Agent だけでなく、AI Assistant も依然として多くのユーザーが話題にしていることに気づきました。自主的な計画やタスク実行を重視する Agent と比べると、Assistant はより日常的な使い方に近い作業の起点です。個人でも、小規模チームや企業でも利用できます。

r/AI_Agents のある投稿では、あるユーザーが[本当に長く使う価値のある個人向け AI Assistant](https://www.reddit.com/r/AI_Agents/comments/1t7c020/what_ai_personal_assistants_are_actually_worth/)を探していました。メモ、タスク、カレンダー、メール、リマインダー、連絡先など、日常の情報管理を支援してくれるものを求めているようです。

![Raddit1.png](https://static-docs.nocobase.com/Raddit1-6ez8j5.png)

もう一つの投稿は、より企業やチームでの利用に近い内容です。投稿者はサービス事業を運営しており、小規模企業の顧客向けに Web サイトコンテンツ、メール、ソーシャルメディア関連の業務を行っています。そのため、[どのような AI Assistant や AI ツール](https://www.reddit.com/r/AI_Agents/comments/1qfuity/what_is_the_best_ai_assistant_for_small_businesses/)が自分のニーズに合うのかを知りたいと考えていました。

![Raddit2.png](https://static-docs.nocobase.com/Raddit2-ouhn35.png)

これらの議論を見ると、AI Assistant へのニーズは大きく 2 つに分けられます。1 つは個人利用向け、もう 1 つは企業やチーム向けです。

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---

**個人向け AI Assistant**：主に個人ユーザーの日常情報管理や作業効率向上を支援します。たとえば、メモの整理、タスクのフォロー、カレンダー管理、メール処理、リマインダー設定、ローカルツールの呼び出し、デスクトップや開発環境での補助などです。

**企業向け AI Assistant**：チームや企業での利用に向いています。業務システムとの接続、アプリ画面への埋め込み、顧客対応、コンテンツ運用支援、自動化フロー、データ・権限・タスク協働の支援などに使われます。

この考え方に基づき、GitHub の [ai-assistant](https://github.com/topics/ai-assistant) トピックで上位にある高スターのプロジェクトを整理し、その中から紹介しやすい 8 つのオープンソースプロジェクトを選びました。

この記事では、企業向け AI Assistant と個人向け AI Assistant の 2 つに分けて紹介します。個人向け AI Assistant は、デスクトップ、開発ツール、日常の効率化など、比較的わかりやすい用途が中心です。一方、企業向け AI Assistant は、業務システム、権限フロー、データ管理、アプリへの埋め込み、チーム協働などにも関わるため、この記事では企業向け AI Assistant をやや重点的に取り上げます。


| 分類                  | プロジェクト    | GitHub Stars | 位置づけ                                                         |
| --------------------- | --------------- | ------------ | ---------------------------------------------------------------- |
| 企業向け AI Assistant | NocoBase        | 22.7k        | 業務システムの構築と保守に向けた AI + ノーコードプラットフォーム |
| 企業向け AI Assistant | NanoClaw        | 29.8k        | メッセージ入口 + コンテナ化実行の AI Assistant                   |
| 企業向け AI Assistant | CopilotKit      | 34.3k        | アプリ内 AI Copilot / Generative UI フロントエンドフレームワーク |
| 企業向け AI Assistant | Ruflo           | 58.6k        | マルチ Agent 協働と自動化ワークフロー Assistant                  |
| 個人向け AI Assistant | DeepChat        | 6k           | モデル、ツール、個人コンテキストをつなぐデスクトップ Assistant   |
| 個人向け AI Assistant | Everywhere      | 6k           | デスクトップのコンテキストを理解する AI Assistant                |
| 個人向け AI Assistant | CopilotForXcode | 6.1k         | Xcode 向け AI coding assistant                                   |
| 個人向け AI Assistant | Leon            | 17.3k        | オープンソースの個人 AI Assistant                                |

## 企業向け AI Assistant

## NocoBase

**サイト**：[https://www.nocobase.com/](https://www.nocobase.com/)

**オンライン Demo**：[https://demo.nocobase.com/new](https://demo.nocobase.com/new)

**ドキュメント**：[https://docs.nocobase.com/](https://docs.nocobase.com/)

**GitHub**：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**Stars**：22.7k

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-ibmr8j.png)

### 概要

NocoBase は、企業内部の業務システムを素早く構築するための、オープンソースの AI + ノーコードプラットフォームです。NocoBase では、ユーザーが自然言語で業務要件を説明し、AI にデータモデル設計、ページ設定、ワークフロー編成、権限設定、プラグイン管理などを支援させることができます。さらに、AI 従業員、AI Skills、CLI などにも対応しており、AI が一度きりのアプリ生成にとどまらず、既存の業務システムを中心に継続的に役割を発揮できます。

これは企業内部システムにとって特に重要です。多くの業務アプリは、一度生成して終わりではありません。フィールド、権限、フロー、ページ、データ関係を継続的に調整する必要があります。NocoBase の価値は、AI に構造化されたシステム環境を提供し、AI が既存のデータモデル、権限、ワークフロー、プラグイン体系の中で働けるようにする点にあります。

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-8bkkfe.png)

### 主な特徴

* **AI が業務システム構築に参加できる**

NocoBase では、自然言語で業務要件を説明し、AI にデータテーブル、フィールド、関連関係、ページ、フローの初期構築を支援させることができます。たとえば、顧客管理、チケット管理、契約承認、プロジェクトカンバンなどの場面を説明すると、AI がまずシステムの基礎を生成し、その後チームが確認・調整できます。

この方法は企業内部システムに向いています。業務システムには通常、明確なデータ構造、ロール権限、フロールールが必要だからです。AI は構築効率を高め、人は業務ロジックの確認とシステム境界の管理を担います。

🔎関連リソース：

CLI：[https://docs.nocobase.com/ja/api/cli/](https://docs.nocobase.com/ja/api/cli/)

Skills：[https://docs.nocobase.com/ja/ai-builder#nocobase-skills](https://docs.nocobase.com/ja/ai-builder#nocobase-skills)

MCP：[https://docs.nocobase.com/ja/ai/mcp/](https://docs.nocobase.com/ja/ai/mcp/)

* **AI 従業員がシステム運用にも関われる**

NocoBase の AI 従業員は、ページデータや構造をコンテキストとして自動的に取得し、業務シーンを理解したうえでタスクを実行できます。たとえば、メールの要約、データ分析、非構造化コンテンツの整理と自動フォーム入力、データモデル設計、JavaScript コード作成などです。各 AI 従業員は独立したスキル、ツール、ナレッジベースを持ち、企業は任意の数の AI 従業員を作成して、自社の AI チームを構成できます。

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-cebxw6.png)

* **ノーコード機能により、運用後の保守コストを下げられる**

多くの AI 生成ツールは素早くコードを生成できますが、その後の保守は開発者に依存しがちです。NocoBase が異なるのは、AI が生成した後も、ユーザーがノーコード画面からフィールド、ページ、メニュー、操作ボタン、権限、ワークフローを引き続き変更できることです。

業務チームにとって、これはシステムが一度きりの Demo で終わらないことを意味します。業務が変われば、チームはプラットフォーム上で調整を続けられます。毎回コード開発のフローに戻る必要はありません。

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-oh4h11.png)

* **企業レベルのデータ、権限、フローを支えられる**

企業向け AI Assistant を実際に導入する場合、データ、権限、フローは避けて通れません。NocoBase は、データモデル、ロール権限、ワークフロー、プラグイン拡張、複数データソースなどの機能を備えており、AI Assistant が業務システムに入るための基盤として利用できます。

たとえば、AI は顧客、注文、チケット、プロジェクト、在庫、契約などの業務オブジェクトを中心に作業できます。同時に、ロールごとにデータアクセス範囲や操作権限を設定できるため、全員が同じ情報を見たり、同じ操作を実行したりする状況を避けられます。

* **具体的な場面から構築を始めやすい**

NocoBase を使う場合、最初から AI に完全な ERP や複雑な企業システムを作らせることはおすすめしません。よりよい方法は、顧客管理、購買申請、設備台帳、アフターサービスチケット、契約承認、プロジェクトカンバン、在庫記録など、明確な小さな場面から始めることです。

一つの具体的な場面が動くようになったら、フィールド、ページ、フロー、権限を段階的に拡張できます。これにより、AI の生成結果を業務に合わせやすくなり、チームによる後続の確認と保守もしやすくなります。

### 適したシーン

* [CRM 顧客管理システム](https://www.nocobase.com/ja/solutions/all-in-one/crm)
* 承認システム
* [チケットシステム](https://www.nocobase.com/ja/solutions/all-in-one/ticketing)
* [プロジェクト管理システム](https://www.nocobase.com/ja/solutions/all-in-one/project)
* 購買、在庫、注文などの軽量 ERP モジュール
* 運用管理画面、管理画面
* 設備管理、[資産管理](https://www.nocobase.com/ja/solutions/all-in-one/asset)、文書管理
* 顧客フォローアップ、サービス管理
* プライベートデプロイが必要な企業内部システム
* 権限、フロー、データモデル、継続的な調整が必要な業務アプリ
* AI とノーコード機能を組み合わせて内部システムを構築したいチーム

## NanoClaw

**GitHub**：[https://github.com/nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)

**公式サイト**：[https://nanoclaw.dev](https://nanoclaw.dev/)

**Stars**：29.8k

![NanoClaw1.png](https://static-docs.nocobase.com/NanoClaw1-of21br.png)

### 概要

NanoClaw は、軽量な AI Assistant プロジェクトです。コンテナ内で Agent を実行し、WhatsApp、Telegram、Slack、Discord、Gmail などのメッセージ入口と接続できる点が特徴です。「メッセージ入口 + コンテナ分離」の企業向け AI Assistant に近く、チャットツールから Agent を呼び出し、タスク処理や自動化フローを実行したい場合に向いています。

一般的なチャット助手と比べると、NanoClaw は安全な分離と制御しやすい実行環境を重視しています。各 Agent を独立したコンテナで実行できるため、ホストシステムや他のタスクへの影響を減らせます。

### 主な特徴

* **コンテナ化実行**：Agent は独立したコンテナ内で実行されるため、ファイルシステムと実行環境を分離しやすくなります。
* **豊富なメッセージ入口**：Telegram、Discord、WhatsApp、Slack、Gmail などに対応しており、AI Assistant を日常の協働ツールに接続しやすくなります。
* **軽量でカスタマイズしやすい**：大型 Agent システムと比べて、NanoClaw はコード構造が明確で理解しやすく、自分のニーズに合わせて調整しやすい点を重視しています。

![NanoClaw2.png](https://static-docs.nocobase.com/NanoClaw2-vn9die.png)

### 適したシーン

* Telegram、Discord、Slack などのメッセージツールから AI Assistant を呼び出す。
* 個人またはチーム向けに、セルフホスト型のタスク処理入口を構築する。
* より安全で分離された環境で Agent タスクを実行する。

## CopilotKit

**GitHub**：[https://github.com/CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)

**公式サイト**：[https://docs.copilotkit.ai](https://docs.copilotkit.ai/)

**Stars**：34.4k

![CopilotKit1.png](https://static-docs.nocobase.com/CopilotKit1-hb37we.png)

### 概要

CopilotKit は、AI Copilot、Generative UI、Agent アプリケーションを構築するためのフロントエンドフレームワークです。「アプリ内 AI Assistant」の開発フレームワークとして捉えるとわかりやすく、Agent の能力を Web、モバイル、Slack、Teams など、ユーザーがすでに使っている画面に埋め込めます。

重点はチャットウィンドウの提供だけではありません。Generative UI、共有状態、人的確認フローも含まれており、AI Assistant を製品の操作体験に深く組み込みたいチームに向いています。

![CopilotKit2.png](https://static-docs.nocobase.com/CopilotKit2-krgkmy.png)

### 主な特徴

* **アプリ内 Copilot**：AI Assistant を既存アプリに直接埋め込めるため、ユーザーが独立したチャットツールへ切り替える必要がありません。
* **Generative UI**：Agent はタスク状態やユーザー意図に応じて、画面コンポーネントを生成または更新できます。
* **人的確認フロー**：Human-in-the-loop に対応しており、重要なステップでユーザーが確認、修正、またはタスクを引き継げます。

### 適したシーン

* SaaS 製品に AI Copilot を組み込む。
* アプリ状態を読み取り、ツールを呼び出し、画面を生成できる AI Assistant を構築する。
* Slack、Teams、Web アプリに Agent ワークフローを接続したいチーム。

## Ruflo

**GitHub**：[https://github.com/ruvnet/ruflo](https://github.com/ruvnet/ruflo)

**公式サイト**：[https://flo.ruv.io](https://flo.ruv.io/)

**Stars**：58.6k

![Ruflo1.png](https://static-docs.nocobase.com/Ruflo1-06q7de.png)

### 概要

Ruflo は、Claude Code と Codex 向けのマルチ Agent 協働プラットフォームです。複数の専門 Agent、自動化ワークフロー、チームレベルのタスクを調整するために使われます。企業向け AI Assistant の背後にある Agent 協働基盤に近く、複雑な開発、テスト、セキュリティ、ドキュメント、アーキテクチャ、DevOps などの場面に向いています。

その中心的な価値は、単一 Agent の能力を複数 Agent の協働能力へ拡張できることです。タスクを分解し、ルーティングし、実行し、記憶する流れを作れます。

### 主な特徴

* **マルチ Agent 協働**：複数の専門 Agent が連携し、開発、テスト、セキュリティ、ドキュメントなどのタスクを処理できます。
* **複雑なワークフロー向け**：Claude Code / Codex と組み合わせて、コード、テスト、監査、ドキュメント生成などのフローを処理できます。
* **プラグインと記憶能力**：プラグイン体系、ベクトル記憶、タスク調整機能を提供し、より複雑な Agent 作業環境に向いています。

![Ruflo2.png](https://static-docs.nocobase.com/Ruflo2-u9z8jz.png)

### 適したシーン

* 複数の Agent が協働して開発タスクを完了する必要がある。
* チームがコードレビュー、テスト生成、ドキュメント保守、セキュリティスキャンなどのフローを自動化したい。
* Claude Code や Codex の上に、より複雑な Agent 協働能力を拡張したい。

## 個人向け AI Assistant

## DeepChat

**GitHub**：[https://github.com/ThinkInAIXYZ/deepchat](https://github.com/ThinkInAIXYZ/deepchat)

**公式サイト**：[https://deepchat.thinkinai.xyz](https://deepchat.thinkinai.xyz/)

**Stars**：6k

![DeepChat.png](https://static-docs.nocobase.com/DeepChat-eap6c8.png)

### 概要

DeepChat は、オープンソースのデスクトップ AI Assistant プラットフォームです。複数のクラウド型モデルとローカル大規模モデルに対応しており、MCP ツール呼び出し、Skills、ACP Agent 統合、リモートコントロール機能も備えています。モデル、ツール、個人コンテキストをつなぐデスクトップ Assistant に近い存在です。

個人ユーザーにとって、DeepChat の強みは、マルチモデルチャット、ローカルモデル、ツール呼び出し、検索強化、スキルワークフローを 1 つのデスクトップアプリにまとめて使えることです。

### 主な特徴

* **マルチモデルの一元管理**：OpenAI、Gemini、Anthropic、DeepSeek、Ollama など、複数のモデルソースに対応しています。
* **ツールとスキルのサポート**：MCP、Skills、ACP Agent 統合を内蔵しており、コードレビュー、ドキュメント処理、PDF、PPT、表計算などのタスク能力を拡張できます。
* **リモートコントロール**：Telegram、Feishu、QQBot、Discord、WeChat iLink などのチャネルから DeepChat セッションを操作できます。

## Everywhere

**GitHub**：[https://github.com/Sylinko/Everywhere](https://github.com/Sylinko/Everywhere)

**公式サイト**：[https://everywhere.sylinko.com](https://everywhere.sylinko.com/)

**Stars**：6k

![Everywhere.png](https://static-docs.nocobase.com/Everywhere-hesiph.png)

### 概要

Everywhere は、デスクトップ向けの AI Assistant です。画面認識とコンテキスト理解を主な特徴としています。現在のアプリや画面内容を認識できるため、ユーザーはスクリーンショット、コピー、ウィンドウ切り替えを頻繁に行わなくても、現在の作業環境の中で AI の支援を呼び出せます。

「デスクトップのコンテキストを理解する Assistant」に近く、個人ユーザーが読解、翻訳、トラブルシューティング、要約、アプリ横断操作を行う際に向いています。

### 主な特徴

* **画面コンテキスト認識**：現在の画面やアプリ環境を理解でき、コピー＆ペーストやウィンドウ切り替えを減らせます。
* **クイック呼び出し**：ショートカットキーで現在の場面から AI Assistant を呼び出せるため、デスクトップワークフローに合っています。
* **マルチモデルと MCP ツールをサポート**：異なる LLM や MCP ツールと組み合わせ、デスクトップ環境でより多くの操作を行えます。

## GitHub Copilot for Xcode

**GitHub**：[https://github.com/github/CopilotForXcode](https://github.com/github/CopilotForXcode)

**公式サイト**：[https://github.com/github/CopilotForXcode](https://github.com/github/CopilotForXcode)

**Stars**：6.1k

![GitHub Copilot for Xcode.png](https://static-docs.nocobase.com/GitHub%20Copilot%20for%20Xcode-8j5kvk.png)

### 概要

GitHub Copilot for Xcode は、Xcode 向けの AI coding assistant です。主に Swift、Objective-C、iOS、macOS 開発に向いています。開発者 Assistant に近いもので、Xcode に直接組み込まれ、コード補完、チャット、コードレビュー、Agent Mode などの機能を提供します。

Apple エコシステムの開発者にとって、その価値は AI プログラミング支援をネイティブ開発環境に組み込めることです。Xcode と他の AI ツールの間を行き来する手間を減らせます。

### 主な特徴

* **Xcode ネイティブ統合**：Swift、Objective-C、iOS、macOS 開発向けで、Xcode から直接利用できます。
* **コード補完とチャット**：コード提案、Copilot Chat、コードレビューなどをサポートしています。
* **Agent Mode**：コードベースを理解・修正し、関連ファイルを検索し、ファイルを作成し、MCP ツールを実行できます。

## Leon

**GitHub**：[https://github.com/leon-ai/leon](https://github.com/leon-ai/leon)

**公式サイト**：[https://getleon.ai](https://getleon.ai/)

**Stars**：17.3k

![Leon.png](https://static-docs.nocobase.com/Leon-0uz82q.png)

### 概要

Leon は、オープンソースの個人 AI Assistant です。ツール、コンテキスト、記憶、Agent 型のタスク実行を中心に構築されています。ローカルまたはサーバー上で実行できる個人 Assistant に近く、プライバシー、制御性、拡張性を重視するユーザーに向いています。

一般的なチャット Assistant と比べると、Leon は実際のツールを使ってタスクを完了することを重視しています。記憶とコンテキストを組み合わせることで、回答やアクションをユーザーの実際の環境に近づけられます。

### 主な特徴

* **個人 Assistant としての位置づけが明確**：個人タスク、音声、自動化、記憶、ローカル環境を対象としています。
* **ツール、スキル、記憶をサポート**：ローカルツール、スキル、階層型記憶を使って、より具体的なタスクを実行できます。
* **ローカルとリモートモデルを両方使える**：ローカルとリモートの AI プロバイダーをサポートしており、プライバシーと能力のバランスを取りやすくなります。

## FAQ

## 1. オープンソース AI Assistant を選ぶとき、何を考慮すべきですか？

オープンソース AI Assistant を選ぶときは、主に 5 つの点を見るとよいです。プロジェクトが継続的に保守されているか、自分の利用シーンに合っているか、既存ツールやシステムに接続できるか、セルフホストまたはプライベートデプロイに対応しているか、ドキュメントが明確でコミュニティが活発かどうかです。

個人ユーザーは、使いやすさ、モデル対応、ローカルツール呼び出し、デスクトップ体験を優先するとよいです。企業ユーザーは、権限、データ構造、フロー自動化、システム統合、長期保守能力を重点的に見るべきです。

## 2. 企業向けの内部業務システムを構築したい場合、どの AI Assistant プロジェクトを選ぶべきですか？

企業向けに CRM、承認、チケット、プロジェクト管理、在庫管理、運用管理画面などの内部業務システムを構築したい場合は、まず **NocoBase** を見るとよいです。

NocoBase は、企業の業務データ、権限、フロー、ページ設定を支えるのに向いています。AI によるシステム構築支援ができるだけでなく、生成後もノーコード画面からフィールド、ページ、権限、ワークフローを継続的に調整できます。長期保守が必要な企業内部システムでは、このような構造化プラットフォームの方が安定しています。

## 3. 個人利用で、デスクトップ AI Assistant が欲しい場合はどれを選ぶべきですか？

主に個人利用で、デスクトップ上で複数モデルをまとめて使い、ファイル処理、ツール呼び出し、情報整理をしたい場合は、まず **DeepChat** または **Everywhere** を見るとよいです。

DeepChat は、複数モデル、MCP、Skills、リモートコントロール機能を 1 つのデスクトップアプリにまとめるのに向いています。Everywhere は画面認識とコンテキスト理解を重視しており、読解、翻訳、トラブルシューティング、Web ページやドキュメントの要約に向いています。

## 4. 開発者として、開発ツールの中で AI Assistant を使いたい場合はどれを選ぶべきですか？

Apple エコシステムの開発者で、主に Xcode を使って iOS、macOS、Swift、Objective-C プロジェクトを開発している場合は、**GitHub Copilot for Xcode** を見るとよいです。

これは開発者 Assistant として使いやすく、Xcode に直接組み込まれ、コード補完、チャット、コードレビュー、Agent Mode などの機能を提供します。ニーズがマルチ Agent 協働、コードレビュー、テスト生成、ドキュメント保守、DevOps フロー寄りであれば、**Ruflo** もあわせて見るとよいです。

## 5. AI Assistant を自分の製品画面に埋め込みたい場合はどれを選ぶべきですか？

SaaS、Web アプリ、内部製品を作っており、AI Assistant をアプリ画面に直接埋め込みたい場合は、まず **CopilotKit** を見るとよいです。

CopilotKit は、アプリ内 Copilot の構築に向いています。AI Assistant がアプリ状態を読み取り、ツールを呼び出し、画面を生成し、重要なステップで人的確認フローを追加できるようにします。製品に AI Copilot、Generative UI、Agent ワークフローを追加したいチームに適しています。

## 6. オープンソースの個人 AI Assistant を構築したい場合、どう選べばよいですか？

Leon は個人 Assistant 寄りで、個人タスク、音声インタラクション、ツール呼び出し、記憶、自動化に向いています。プライバシー、セルフホスト、長期記憶、拡張性を重視するユーザーに適しています。ローカル環境や個人ワークフローに段階的に接続できる Assistant が欲しい場合、Leon は単なるチャットツールよりもこの方向に近いです。

## 7. NocoBase は企業にしか使えませんか？個人ユーザーも使えますか？

**NocoBase** は企業だけでなく、個人ユーザーも自分用の管理システムやナレッジベースを構築するために使えます。オープンソースの基本版は無料で、個人ユーザーにも使いやすいです。

たとえば、個人は NocoBase でナレッジベース、読書記録、タスク管理、資料ライブラリ、プロジェクトカンバン、顧客フォローアップ表、コンテンツ企画ライブラリなどを構築できます。データテーブル、フィールド、関係、ページ、長期的な整理が必要な用途であれば、NocoBase は軽量な個人管理プラットフォームとしても使えます。

**⭐ この記事が参考になったら、オープンソース AI ツールや効率化に関心のある方にもぜひ共有してください。**


**関連記事**：

* [6 つの WorkBuddy と組み合わせて使いやすいオープンソースツール](https://www.nocobase.com/ja/blog/workbuddy-open-source-tools)
* [GitHub Stars 上位のオープンソース AI ツール 6 選](https://www.nocobase.com/ja/blog/6-github-top-open-source-ai-tools-for-ai-agents)
* [Hermes で内部ツールの効率を高める：おすすめのオープンソースプロジェクト 5 選](https://www.nocobase.com/ja/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)
* [OpenClaw を実務で活用するには？おすすめのオープンソースツール 5 選](https://www.nocobase.com/ja/blog/openclaw-open-source-enterprise-tools)
* [Codex にゼロから作らせないための6つのオープンソースプロジェクト](https://www.nocobase.com/ja/blog/building-internal-tools-with-codex)
* [Claude Code を使うなら知っておきたい 6 つのオープンソースツール](https://www.nocobase.com/ja/blog/open-source-tools-after-claude-code)
* [企業向けソフトウェア開発に適したオープンソース AI ノーコードツール 10 選](https://www.nocobase.com/ja/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [企業内部ツール必須：8 大オープンソース AI Agent プラットフォーム比較](https://www.nocobase.com/ja/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [RBAC・AI・API 完全対応｜エンタープライズ向けセルフホスト型 CRM 厳選ガイド](https://www.nocobase.com/ja/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [自社開発ミドルウェアから脱却するための、オープンソース統合ツール6選](https://www.nocobase.com/ja/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Airtable vs NocoBase のリアルな移行コスト](https://www.nocobase.com/ja/blog/airtable-vs-nocobase-migration-cost-comparison)
* [Excel データをすばやく Web アプリ化する 4 つの方法を比較](https://www.nocobase.com/ja/blog/excel-to-web-app-4-methods)
