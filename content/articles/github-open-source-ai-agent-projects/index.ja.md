約1か月前、[Hacker News](https://news.ycombinator.com/item?id=44450160)で大きな議論を呼んだ記事 [「Stop Building AI Agents」](https://decodingml.substack.com/p/stop-building-ai-agents) を目にしました。

![Stop Building AI Agents](https://static-docs.nocobase.com/1-472k2u.png)

筆者は記事の中で、自らの体験を紹介しています。CrewAI を使って「研究チーム」を編成し、3名の agent（エージェント）、5つのツールを用意。紙の上では完璧な分業体制に見えました。しかし実際に動かすと、リサーチ担当の agent はクローラーツールを無視し、要約担当は引用を忘れ、コーディネーターは長文ドキュメントの処理を途中で放棄。見た目は隙のないプランが、実務ではドミノ倒しのように次々と破綻していったのです。

以下のフローチャートは、筆者が数え切れないほどの agent システムのデバッグと失敗を経験した末にまとめた、「agent を使うべきか否か」のガイドラインです。

![Should I use an Agent](https://static-docs.nocobase.com/2-45bvv4.png)

Image source: https://decodingml.substack.com/p/stop-building-ai-agents

記事では重要な原則が抽出されています。**agent は「人間が監督に関与する」不安定なプロセスでこそ最大の力を発揮する**──このような場面では、agent の探索力や創造性がワークフローを上回ることが多いのです。

* **有効なシナリオ**：データサイエンス支援（SQL の自動生成、可視化作成、データトレンド探索）、クリエイティブライティングパートナー（ブレインストーミング、文章改善）、コードリファクタリング支援（最適化提案、潜在的問題の発見）──これらのタスクでは人間が随時結果を評価し、誤りを修正できます。
* **非推奨シナリオ**：企業の中核的自動化（重要業務プロセスの安定性を LLM に委ねられない）、高リスクな意思決定（金融取引、医療診断、法的コンプライアンスなど確定的なロジックが必要な分野）。

![scenarios](https://static-docs.nocobase.com/3-ba22w7.png)

Image source: https://decodingml.substack.com/p/stop-building-ai-agents

もしここまで読んで、あなたのビジネスシーンが依然として agent の構築に適していると感じるなら、本記事では GitHub の[「Agent」](https://github.com/topics/agent)タグにおいて Star 数ランキング上位18件のオープンソースプロジェクトを取り上げます。プロジェクト概要、コア機能、そして適用シナリオの3つの観点から、それぞれの強みと限界を分析し、最適な場面で agent の価値を最大限に引き出すための参考にしてください。

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---

💡 あわせて読みたい、これまでの人気 GitHub プロジェクト特集（テーマが異なるため一部プロジェクトは重複します）：

* [GitHubで最もスターを獲得したオープンソースAIプロジェクト20選](https://www.nocobase.com/ja/blog/github-open-source-ai-projects)
* [GitHub でスター数トップ 8 のオープンソース MCP プロジェクト](https://www.nocobase.com/ja/blog/github-open-source-mcp-projects)
* [GitHub のスター数上位 40 の開発者ツール](https://www.nocobase.com/ja/blog/github-open-source-developer-tools)

## No.1: Dify

![Dify](https://static-docs.nocobase.com/4-in2l5n.png)

* GitHub Star: 110k
* GitHub: [https://github.com/langgenius/dify](https://github.com/langgenius/dify)
* Website: [https://dify.ai/](https://dify.ai/)

![Dify](https://static-docs.nocobase.com/5-psa2vb.png)

**プロジェクト概要**

**Dify** はオープンソースの LLM アプリケーション開発プラットフォームです。直感的なビジュアルインターフェース、RAG ワークフロー、agent 能力、モデル管理、フルチェーン可観測性を統合しており、開発者が迅速に AI アプリを構築・デバッグ・デプロイできる環境を提供します。

**コア機能**

* **ビジュアルワークフロー設計** – ドラッグ＆ドロップで複雑な AI フロー（プロンプト、モデル呼び出し、タスク連鎖）を設計・テスト可能。
* **RAG パイプライン対応** – PDF や PPT など多形式の文書を取り込み、自動的に内容を抽出し検索パイプラインを構築。知識強化生成に対応。
* **統合モデルエコシステムとプロンプトエディタ** – GPT、Mistral、Llama3 などの OpenAI API 互換モデルを管理し、プロンプトの調整やモデル切り替えを簡略化。

**適用シナリオ**

* インテリジェントなカスタマーサポート・QA システム構築
* 企業知識ベースとの連携
* コンテンツ生成ツールの迅速なデプロイ

## No.2: Lobe Chat

![Lobe Chat](https://static-docs.nocobase.com/6-8eachs.png)

* GitHub Star: 64.3k
* GitHub: [https://github.com/lobehub/lobe-chat](https://github.com/lobehub/lobe-chat)
* Website: [https://lobechat.com/](https://lobechat.com/)

![Lobe Chat](https://static-docs.nocobase.com/7-t7pkjl.png)

**プロジェクト概要**

**Lobe Chat** はオープンソースのマルチモデルチャット＆アプリケーションプラットフォームで、UX に重点を置いています。音声、視覚認識、マルチモーダル入力、プラグインマーケット、モバイル対応、マルチユーザー管理をサポート。

**コア機能**

* **マルチモーダル & プラグイン対応** – 音声会話、画像認識・生成に対応し、プラグインマーケットで機能拡張可能。
* **コミュニティ駆動の agent インデックス** – ユーザーはカスタムアシスタントを閲覧・追加・提出でき、再利用や拡張が容易。
* **統合モデルアダプタ** – OpenAI、Anthropic、Gemini、Ollama などを統一インターフェースで接続、モデル移行・アップグレードが容易。

**適用シナリオ**

* 高インタラクティブなマルチモーダルチャットアプリ構築
* ドメイン特化型カスタムアシスタントのデプロイ

## No.3: RAGFlow

![RAGFlow](https://static-docs.nocobase.com/8-p4g4dr.png)

* GitHub Star: 62.1k
* GitHub: [https://github.com/infiniflow/ragflow](https://github.com/infiniflow/ragflow)
* Website: [https://ragflow.io/](https://ragflow.io/)

![RAGFlow](https://static-docs.nocobase.com/9-9lvp8h.png)

**プロジェクト概要**

**RAGFlow** は、ドキュメント理解に基づくオープンソースの RAG エンジンで、企業や個人に高品質・説明可能な QA と agent サービスを提供します。複雑な文書フォーマット処理や、引用付き回答、可視化ブロック管理に対応。

**コア機能**

* **深層ドキュメント理解** – PDF、Word、PPT、Excel、画像など非構造化コンテンツを解析し、検索可能な情報ブロックを抽出。
* **RAG QA と引用追跡** – ベクトル検索と LLM を組み合わせ、引用付き回答を生成。検索ブロックを手動調整可能。
* **柔軟なデプロイ・統合** – Docker Compose でのデプロイが可能で、様々な LLM と統合可能。

**適用シナリオ**

* ドキュメント駆動型 QA システム・知識アシスタント構築
* コンテンツ審査と引用追跡
* 複雑ファイル構造に対応する RAG アプリのデプロイ

## No.4: OpenHands

![OpenHands](https://static-docs.nocobase.com/10-b9ssqh.png)

* GitHub Star: 62k
* GitHub: https://github.com/All-Hands-AI/OpenHands
* Website: https://all-hands.dev/

![OpenHands](https://static-docs.nocobase.com/11-a2rzhi.png)

**プロジェクト概要**

**OpenHands** は、AI が人間の開発者のように「少ないコードでより多くを達成」することを目指すプロジェクトです。コード編集、コマンド実行、ウェブブラウジング、API 呼び出しなどをサポート。MIT ライセンスのオープンソースで、Docker によるローカル展開や Cloud SaaS 版も提供。

**コア機能**

* **汎用開発者 agent 能力** – コード変更、コマンド実行、ウェブ閲覧、API 呼び出しをシミュレート。
* **複数 agent 協働とセッション管理** – Session、EventStream、AgentController によるタスク分担や協働処理。
* **安全なサンドボックス実行** – agent のコード実行環境を Docker コンテナで隔離、ホストへのリスクを低減。

**適用シナリオ**

* 日常的なコードタスク補助
* 自動テスト・デプロイプロセス
* プロトタイピング・ツール構築

## No.5: MetaGPT

![MetaGPT](https://static-docs.nocobase.com/12-btl5l3.png)

* GitHub Star: 57.8k
* GitHub: https://github.com/FoundationAgents/MetaGPT
* Website: https://mgx.dev/

![13-2pwtad.png](https://static-docs.nocobase.com/13-2pwtad.png)

**プロジェクト概要**

**MetaGPT** はマルチ agent 協働フレームワークで、「ソフトウェア会社のシミュレーション」を重視。自然言語の要件からユーザーストーリー、競合分析、API 設計、ドキュメント作成まで一貫したプロセスを自動化します。「Code = SOP(Team)」の理念で、役割ごとの agent が SOP に従い協働。

![MetaGPT](https://static-docs.nocobase.com/14-8jh7z3.png)

**コア機能**

* **多役割 agent 協働** – プロダクトマネージャー、アーキテクト、プロジェクトマネージャー、エンジニアなどの agent が実際のチームを模擬。
* **SOP 駆動プロセス** – 標準作業手順で agent をガイド、タスク分解と構造化実行を実現。
* **自然言語プログラミング** – ユーザーが要件を一文で入力すると、ユーザーストーリー、データ構造、API、アーキテクチャ設計を生成。

**適用シナリオ**

* ソフトウェアプロジェクト開発提案の自動生成
* チーム協働プロトタイプ構築
* AI 駆動の開発プロセス最適化・自動化研究

## No.6: LLMs-from-scratch

![LLMs-from-scratch](https://static-docs.nocobase.com/15-w7easd.png)

* GitHub Star: 56k
* GitHub: [https://github.com/rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)

![LLMs-from-scratch](https://static-docs.nocobase.com/16-68zqun.png)

**プロジェクト概要**

**LLMs-from-scratch** は、ゼロから大規模言語モデル（LLM）を実装する教育向けプロジェクトです。開発者が LLM の核心原理やトレーニングプロセスを理解することを目的としています。

👉 [点击查看 LLMs-from-scratch 的完整介绍与应用场景](https://www.nocobase.com/cn/blog/github-open-source-ai-projects#no15-llms-from-scratch)

## No.7: Huginn

![Huginn](https://static-docs.nocobase.com/17-wzc3ll.png)

* GitHub Star: 47k
* GitHub: https://github.com/huginn/huginn

![Huginn](https://static-docs.nocobase.com/18-orl7h1.png)

**プロジェクト概要**

**Huginn** はオープンソースの自動化ツールで、ユーザーは自前のサーバー上で agent を稼働させ、ネット上の情報を収集して条件に応じたアクションをトリガーできます。自ホスティング、データ制御、拡張可能な agent システムとして長く活発に利用されています。

**コア機能**

* **自ホスティング Web agent プラットフォーム** – サーバー上で agent を展開し、データ管理とタスク実行を完全にコントロール。
* **イベント・アクションルールエンジン** – 指定イベントに応じて通知、スクリプト、HTTP 呼び出しなどを自動実行。
* **拡張可能な agent メカニズム** – 内蔵 agent に加え、Huginn Agent gem でカスタム agent を追加可能。

**適用シナリオ**

* 情報モニタリングと通知
* データ収集と自動化ワークフロー
* カスタム自動化ツールの構築

## No.8: Unsloth

![Unsloth](https://static-docs.nocobase.com/19-ihomc8.png)

* GitHub Star: 43.8k
* GitHub: https://github.com/unslothai/unsloth
* Website: https://docs.unsloth.ai/

![Unsloth](https://static-docs.nocobase.com/20-eci5h1.png)

**プロジェクト概要**

**Unsloth** は、OpenAI gpt-oss、Qwen3、Llama 4 などの LLM を効率的かつ低メモリで微調整するためのオープンソースツールです。OpenAI の Triton アーキテクチャを採用し、トレーニング速度の向上とメモリ使用量の削減を実現。

**コア機能**

* **効率的なメモリ最適化微調整** – LLM 上で 1.5–2.2 倍の速度向上、メモリ使用量 70–80% 削減。
* **使いやすい Notebook ワークフロー** – データセットを追加して「Run All」で即座にモデル微調整可能。
* **幅広いモデル互換性** – Llama、Gemma、Qwen などの微調整をサポート。

**適用シナリオ**

* 研究やプロトタイプ向け LLM 微調整
* 教育ツールとして無料 GPU 環境でモデル学習体験
* リソース制約デバイスへのモデル展開

## No.9: Mem0

![Mem0](https://static-docs.nocobase.com/21-uxkki5.png)

* GitHub Star: 38.1k
* GitHub: https://github.com/mem0ai/mem0
* Website: https://mem0.ai/

![Mem0](https://static-docs.nocobase.com/22-bmb2sv.png)

**プロジェクト概要**

**Mem0** は、AI agent 向け長期記憶管理システムです。統合メモリレイヤーにより、agent がセッションやアプリを跨いでユーザーの履歴や好みを保持でき、連続的かつパーソナライズされたインタラクションを実現。LOCOMO ベンチマークでは、OpenAI Memory に比べ正確率 +26%、応答遅延 -91%、Token 消費 -90% を達成。

**コア機能**

* **多層記憶アーキテクチャ** – ユーザー、セッション、agent レベルの階層的記憶管理。
* **高性能・コスト効率** – 精度向上、遅延削減、Token 消費削減で長期記憶を効率化。
* **ローカルプライバシー優先** – データをローカルで処理・保存、ユーザーが完全制御。

**適用シナリオ**

* カスタマーサポート agent：ユーザー履歴の保持
* AI アシスタント：セッション跨ぎのタスクや人設の保持
* 医療・コンサルティングシステム：コンテキスト維持による精度向上

## No.10: ChatTTS

![ChatTTS](https://static-docs.nocobase.com/23-azdged.png)

* GitHub Star: 37.5k
* GitHub: https://github.com/2noise/ChatTTS
* Website: https://2noise.com/

![ChatTTS](https://static-docs.nocobase.com/24-e17utt.png)

**项目概览：**

**プロジェクト概要**

**ChatTTS** は、対話タスク向けに最適化されたオープンソース TTS システムで、複数話者に対応し、自然で感情豊かな発話を生成。モデル学習時に高頻度ノイズを加え、倫理的利用を促す検出機能も計画中。

**コア機能**

* **対話最適化 TTS** – マルチキャラクター対話と自然なリズム表現に対応。
* **細粒度韻律制御** – 笑い声、間、フィラーの精密制御で自然な音声合成。

**適用シナリオ**

* 人間らしい音声ボット・対話システム
* 教育製品のキャラクターボイスや言語練習
* ポッドキャストや音声コンテンツ制作支援

## No.11: Arthas

![Arthas](https://static-docs.nocobase.com/25-1e8yxo.png)

* GitHub Star: 36.6k
* GitHub: https://github.com/alibaba/arthas
* Website: https://arthas.aliyun.com/

![Arthas](https://static-docs.nocobase.com/26-rnqi0c.png)

**プロジェクト概要**

**Arthas** は Alibaba が開発した Java 診断ツールで、コード変更やサーバー再起動なしに本番環境に attach 可能。スタック情報確認、ブレークポイント設定、デバッグを即座に実行でき、開発者の問題解決効率を大幅に向上。

**コア機能**

* **動的 Attach 実行** – JVM に直接注入し即デバッグ。
* **CLI 診断コマンド** – stack, trace, watch, monitor 等のコマンドで実行中情報を取得。

**適用シナリオ**

* 本番障害の迅速な特定
* 性能ボトルネック分析
* 回帰テスト問題の調査

## No.12: AgentGPT

![AgentGPT](https://static-docs.nocobase.com/27-yvq9f7.png)

* GitHub Star: 34.7k
* GitHub: https://github.com/reworkd/AgentGPT
* Website: https://arthas.aliyun.com/

![AgentGPT](https://static-docs.nocobase.com/28-fwguw8.png)

**プロジェクト概要**

**AgentGPT** はブラウザ上で agent を簡単に設定・実行できるオープンソースプロジェクトです。目標を入力すると agent が「思考–実行–学習」サイクルでタスクを達成します。

**コア機能**

* **ブラウザでの agent 設定** – 名前と目標を入力するだけで起動。
* **目標駆動型実行** – タスクを分解し、自動実行・フィードバック・最適化。
* **環境自動初期化** – CLI により環境変数、MySQL、FastAPI、Next.js を一括設定。

**適用シナリオ**

* タスク型補助 agent
* プロトタイプ検証
* 学習・デモ用プラットフォーム

## No.13: Cherry Studio

![Cherry Studio](https://static-docs.nocobase.com/29-z4pzy1.png)

* GitHub Star: 31.3k
* GitHub: https://github.com/CherryHQ/cherry-studio
* Website: https://cherry-ai.com/

![Cherry Studio](https://static-docs.nocobase.com/30-qageqb.png)

**プロジェクト概要**

**Cherry Studio** は CSDN、GitCode、Huawei Cloud CodeArts IDE による AI プログラミングアシスタントで、2024年12月に公開。自然言語インターフェース、プロジェクト単位コード書き換え、フルスタック開発をサポート。

**コア機能**

* **AI アシスタントマトリックス** – 300+ 業界専用テンプレート、カスタム作成可能。
* **マルチモデル統合** – OpenAI、Gemini などのクラウド/ローカルモデルを切替可能。
* **ビジュアル agent 編集** – 既存アシスタント選択やカスタム agent 作成、プロンプト最適化。

**適用シナリオ**

* プロジェクト単位コード支援
* 業界専用ソリューション
* 知識駆動のコード生成

## No.14: Khoj

![Khoj](https://static-docs.nocobase.com/31-l08bdf.png)

* GitHub Star: 31.3k
* GitHub: https://github.com/khoj-ai/khoj
* Website: https://khoj.dev/

![Khoj](https://static-docs.nocobase.com/32-x8rb4x.png)

**プロジェクト概要**

**Khoj** は「個人用 AI セカンドブレイン」を目指すオープンソースアシスタント。複数ソースの文書を統合して知識ベース化し、セマンティック検索で問答・通知を実行。カスタム agent で定期タスクや自動応答も可能。

**コア機能**

* **多ソース知識統合** – PDF、Markdown、Notion、GitHub などを統合。
* **セマンティック検索 & 通知** – 自然言語検索、定期通知・メール送信対応。
* **クロスプラットフォーム agent** – デスクトップ、Obsidian、Web、Emacs、WhatsApp などで利用可能。

**適用シナリオ**

* 個人知識管理アシスタント
* 自動リマインダー
* 複数ツール統合体験

## No.15: AIHawk

![AIHawk](https://static-docs.nocobase.com/33-dxlkjy.png)

* GitHub Star: 28.6k
* GitHub: https://github.com/feder-cr/Jobs\_Applier\_AI\_Agent\_AIHawk
* Website: https://laboro.co/

![AIHawk](https://static-docs.nocobase.com/34-g4zibv.png)

**プロジェクト概要**

**AIHawk** は AGPL ライセンスのオープンソース agent で、自動的に求人に応募。求人情報収集と LLM による応募書類生成を行い、効率的な就職支援を実現。

**コア機能**

* **自動応募** – 求人サイト情報を収集し、最適化された応募書類を生成・提出。
* **拡張可能なオープンアーキテクチャ** – コアはオープンソースでカスタマイズやプラグイン追加可能。
* **プラットフォーム展開** – laboro.co としてホスティングや自動化機能を提供。

**適用シナリオ**

* 自動応募アシスタント
* 採用プロセス自動化研究
* 採用プラットフォーム統合ツール

## No.16: FastGPT

![FastGPT](https://static-docs.nocobase.com/35-xvxjpm.png)

* GitHub Star: 25.5k
* GitHub: https://github.com/labring/FastGPT
* Website: https://fastgpt.io/

![FastGPT](https://static-docs.nocobase.com/36-bu5ifv.png)

**プロジェクト概要**

**FastGPT** は「AI agent 構築プラットフォーム」を目指し、視覚的ワークフローと知識ベースで複雑な AI アプリを簡単に構築可能に。

**コア機能**

* **ビジュアルワークフロー設計** – ドラッグ＆ドロップで対話ノード、HTTP 呼び出し、RPA、条件分岐を組み立て。
* **知識ベース & RAG 対応** – txt、md、pdf などのファイルをインポートし、ベクトル検索や混合検索に対応。
* **マルチモデル & API 互換** – OpenAI、Claude など接続、OpenAPI 互換インターフェース提供。

**適用シナリオ**

* 質問応答ボット構築
* 文書分析・自動要約
* 外部 API 接続によるタスク自動化

## No.17: GPT Researcher

![GPT Researcher](https://static-docs.nocobase.com/37-dzrr44.png)

* GitHub Star: 22.9k
* GitHub: https://github.com/assafelovic/gpt-researcher
* Website: https://gptr.dev/

![GPT Researcher](https://static-docs.nocobase.com/38-34tscx.png)

**プロジェクト概要**

**GPT Researcher** は研究タスク向け agent フレームワーク。自動で調査フローを計画し、情報収集、レポート生成、引用付き出力を実現。

**コア機能**

* **並列 agent 研究** – Planner Agent が課題設定、複数 Executor Agents が資料収集・まとめを並行処理。
* **事実ベースレポート出力** – 引用整理済みの構造化・客観的レポート生成。

**適用シナリオ**

* 競合分析や技術調査レポート作成
* 学術研究の下書き自動生成
* カスタム知識 agent 構築

## No.18: CopilotKit

![CopilotKit](https://static-docs.nocobase.com/39-z4vv5d.png)

* GitHub Star: 22.4k
* GitHub: https://github.com/CopilotKit/CopilotKit
* Website: https://docs.copilotkit.ai/

![CopilotKit](https://static-docs.nocobase.com/40-u5mh13.png)

**プロジェクト概要**

**CopilotKit** は、AI Copilot をアプリに統合するためのオープンソースフレームワーク。React UI コンポーネントや headless アーキテクチャで多様なインターフェースに対応。

**コア機能**

* **React & Headless UI 対応** – 即利用可能な UI コンポーネント、API 専用展開も可能。
* **アプリ文脈接続** – ロジック・状態・ユーザー文脈を agent に連携。
* **モデル & アーキテクチャ分離** – 任意モデル・agent と独立運用可能。

**適用シナリオ**

* 組込み AI アシスタント
* カスタム AI ツール
* マルチモーダルインタラクション体験

## 最後に

Agent（エージェント）は探索に優れ、ルール順守には弱い。

今回紹介した 18 のオープンソース agent プロジェクトはツールボックスであると同時に、**適切なシナリオ選定と境界設計** が最大限の価値を引き出す鍵であることを示しています。

この記事が参考になった場合、AI Agent 探索中の友人とぜひ共有してください。👍

**関連読み物：**

* [GitHubで最もスターを獲得したオープンソースAIプロジェクト20選](https://www.nocobase.com/ja/blog/github-open-source-ai-projects)
* [GitHub でスター数トップ 8 のオープンソース MCP プロジェクト](https://www.nocobase.com/ja/blog/github-open-source-mcp-projects)
* [GitHubスター数トップのオープンソースWebアプリ7選](https://www.nocobase.com/ja/blog/github-open-source-web-applications)
* [GitHub のスター数上位 40 の開発者ツール](https://www.nocobase.com/ja/blog/github-open-source-developer-tools)
* [2025 年 GitHub 上で最も成長が速い上位 15 のオープンソース低コードプロジェクト](https://www.nocobase.com/ja/blog/github-top15-fastest-growing-open-source-low-code-projects)
* [GitHubで最も星を集めたオープンソースCRMプロジェクトトップ11](https://www.nocobase.com/ja/blog/github-open-source-crm-projects)
