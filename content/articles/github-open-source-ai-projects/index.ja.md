2025年8月5日、**[OpenAI は2つのオープンソース大規模言語モデル（LLM）](https://openai.com/ja-JP/index/introducing-gpt-oss/)****gpt-oss-120b** と **gpt-oss-20b** を正式に公開しました。これは **GPT-2** 以来、OpenAI にとって初のオープンソース LLM のリリースです。

![OpenAI released two open-source large language models](https://static-docs.nocobase.com/1-zowkui.png)

オープンソースの言語モデルの陣営に、また新たな大型プレイヤーが加わりました。多くの開発者にとって、AIプロジェクトにおいてオープンソースは常に優先事項です。OpenAI の参加により、オープンソースの LLM 界隈はさらに勢いを増しています。

この機会に、注目すべきオープンソースの AI プロジェクトを紹介します。

LLM の統合、エージェント構築、マルチモーダル生成、知識ベースの QA システムまで、GitHub にはすでに多くの価値あるオープンソースプロジェクトが揃っています。

今回は、**GitHub でスター数トップ20の ****[AI プロジェクト](https://github.com/topics/ai)** を機能別に整理しました。目的に合ったツール選びの参考にしてください。

また、MCP（モデルコンテキストプロトコル）に興味がある方は、先週公開したこちらの記事もぜひご覧ください：

[GitHub でスター数トップ 8 のオープンソース MCP プロジェクト](https://www.nocobase.com/ja/blog/github-open-source-mcp-projects)

## 📌 プロジェクトナビ


| **機能カテゴリ**                                                 | **プロジェクト番号 + 名称**                                                                                                                       | **説明明**                                                                                                                           |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 💡**インテリジェントエージェント & 自動化ワークフロー**<br/>     | No.1 AutoGPTNo.3 n8nNo.4 LangChainNo.18 gpt-engineer                                                                                              | マルチステップタスクの実行や、ワークフローのオーケストレーション、自律型エージェント構築のための開発フレームワークとツール。         |
| **🎨 マルチモーダル生成 / プロンプトツール / データ & 運用基盤** | No.2 Stable Diffusion web UINo.8 SupabaseNo.9 ComfyUINo.10 NetdataNo.11 system-prompts-and-models-of-ai-toolsNo.12 Deep-Live-CamNo.20 Meilisearch | 画像生成、プロンプトエンジニアリング、リアルタイム監視、バックエンドデータ管理など、AIツールの応用範囲と効率を広げるプロジェクト群。 |
| **💬 チャットUI & AIアプリのフロントエンド**<br/>                | No.5 DifyNo.6 Open WebUINo.14 Lobe ChatNo.19 ChatGPT                                                                                              | LLM と連携し、チャット型アプリを迅速に構築できるオープンソースのフロントエンドツール。                                               |
| 📚**ナレッジQA / 文書RAGシステム**<br/>                        | No.13 GlamaNo.16 RAGFlow                                                                                                                          | ドキュメントベースの情報検索とQA機能を提供。企業向けナレッジベースやカスタマーサポート構築に最適。                                   |
| 🧠**モデル学習 / 微調整 / 教材リソース**<br/>                    | No.7: Generative AI for BeginnersNo.15 LLMs-from-scratchNo.17 LLaMA Factory                                                                       | LLMの学習・微調整ツール、ゼロからの構築教材など、初心者から上級者まで役立つリソース。                                                |

---

💬 [NocoBase](https://www.nocobase.com/) ブログへようこそ。NocoBase は、エンタープライズアプリケーションや業務ツール、ワークフローシステムを構築できる、オープンソースのノーコード／ローコード開発プラットフォームです。セルフホスティング、プラグインアーキテクチャ、開発者フレンドリーな設計が特徴です。→ [GitHubで詳しく見る](https://github.com/nocobase/nocobase)

---

## No.1: AutoGPT

![AutoGPT](https://static-docs.nocobase.com/2-5k8uwc.PNG)

* GitHub Star: 177k
* GitHub: https://github.com/Significant-Gravitas/AutoGPT
* Website: https://agpt.co/

![AutoGPT](https://static-docs.nocobase.com/3-5srsox.PNG)

**プロジェクト概要：**

2023年3月にToran Bruce Richards氏とSignificant Gravitas社によって公開された**AutoGPT**のOSSプロジェクトは、GPT-4を基盤とした自主的タスク実行モデルを初めて実現し、GitHubで爆発的な人気を博し、多くの派生プロジェクトを生み出しました。企業の自動化とAI統合へのニーズが急増する中で、Auto-GPTは持続的稼働、視覚的構築、多モデル接続をサポートする完全なプラットフォームへと進化しています。現在では、開発者がインテリジェントエージェントを構築し、AIをビジネスプロセスに統合するための中核ツールとなりつつあります。

**コア機能：**

* **シームレスなローコード構築方式**：直感的なインターフェースで、深いコーディング知識がなくても複雑なワークフローを素早く作成し、多様なアシスタントやツールを簡単に連携可能。
* **自主稼働および持続的エージェント機構**：エージェントはクラウドまたはホスティング環境で継続的に動作し、人手による介入を必要としません。タイマー、Webhook、ファイルトリガーなどの外部トリガーによって自動的に起動でき、長時間または繰り返しの処理が可能。
* **インテリジェント自動化と高信頼性の実行**：内蔵AIモデルと意思決定ロジックにより反復作業を自動化し、人為的介入を削減。監視・分析機能を備え、エージェントの挙動、稼働状態、性能指標を観察し、長期の安定稼働を保証。

**利用シーン：**

* **企業の自動化ワークフロー管理**：業務システムと統合されたインテリジェントエージェントを構築し、顧客対応やレポート作成などの反復作業を自動化。
* **ローコードAIアシスタント開発**：複雑なプログラミングなしで、データ処理やコンテンツ生成が可能なAIエージェントを素早く構築。
* **AI意思決定支援およびシステム統合**：データベース、モデル、外部APIを連携させ、跨るシステムの自動意思決定プロセスを構築。

## No.2: Stable Diffusion web UI

![Stable Diffusion web UI](https://static-docs.nocobase.com/4-cdwggu.png)

* GitHub Star: 155k
* GitHub: https://github.com/AUTOMATIC1111/stable-diffusion-webui

![Stable Diffusion web UI](https://static-docs.nocobase.com/5-hujk2y.png)

**プロジェクト概要：**

過去2年間でStable Diffusionはオープンソースのテキストから画像生成モデルの爆発的普及を牽引し、AUTOMATIC1111コミュニティによる**Stable Diffusion Web UI**はこれらのモデルを利用する開発者・クリエイターの主要ツールとなりました。最初はGradioを基にした実験的なインターフェースでしたが、徐々に機能豊富でプラグインエコシステムが整ったGUI生成プラットフォームへと成長しました。

本プロジェクトはGitHubでAIおよびAIGC分野の人気ランキング上位に位置し、マルチモデル切替、LoRA微調整、画像制御、一括生成、スクリプト編成などの機能をサポートしています。個人の画像制作だけでなく、AIアート製品のプロトタイプや画像生成の自動化ワークフローにも広く活用されており、AIGCツールを実務に導入するための重要な架け橋となっています。

**コア機能：**

* **マルチモデル対応とカスタムロード**：多様なテキスト生成モデルをロード可能。LoRA微調整モデル、Checkpointメインモデル、VAE画像デコーダーをインターフェース上で即時切替可能で、再起動不要。Hugging Faceやローカルモデルリポジトリと連携し、管理・デバッグが容易。
* **強力な画像生成・制御機能**：テキスト生成、画像生成、バッチ処理、画像修復など詳細な制御パラメータを備えた生成ツール。
* **プラグインエコシステムと拡張性**：UI改良、モデル訓練・微調整、ワークフロー統合、商用展開適合など、多彩なコミュニティプラグイン。

**利用シーン：**

* **創造的な画像・ビジュアルコンテンツ生成**：Stable Diffusion Web UIを素早く導入し、キャラクターやカバー、ブランド素材などのビジュアルコンテンツを生成。
* **AIGCツールプロトタイプ開発**：製品の基盤エンジンとして組み込み、クリエイティブコミュニティや壁紙ジェネレーターなどAI描画アプリを構築。
* **画像生成の自動化・バッチ処理**：スクリプトとプラグインを活用し、漫画のコマ割りや商品画像などを大量自動生成。

## No.3: n8n

![n8n](https://static-docs.nocobase.com/6-bril8y.png)

* GitHub Star: 127k
* GitHub: https://github.com/n8n-io/n8n
* Website: https://n8n.io/

![n8n](https://static-docs.nocobase.com/7-lakufi.PNG)

**プロジェクト概要：**

**n8n**はオープンソースの自動化プラットフォームで、視覚的なワークフロー構築とAIツールの統合をサポートし、自動化アシスタントや多システム間連携フローの構築に適しています。

👉 [n8nの詳細な紹介と利用シーンはこちらをご覧ください](https://www.nocobase.com/ja/blog/github-open-source-mcp-projects#no1-n8n)

## No.4: LangChain

![LangChain](https://static-docs.nocobase.com/8-syau7t.png)

* GitHub Star: 113k
* GitHub: https://github.com/langchain-ai/langchain
* Website: https://python.langchain.com/

![LangChain](https://static-docs.nocobase.com/9-86rxvk.png)

**プロジェクト概要：**

2022年末のオープンソース化以来、**LangChain**はLLMアプリ構築の事実上の標準となりました。Harrison Chase氏により開始され、「大規模モデルは強力だが複雑なアプリ構築が難しい」という課題を解決することを目的としています。モジュール化設計により、プロンプトテンプレート、ドキュメント検索、ツール呼び出し、エージェント実行チェーンなどを高度に抽象化し、開発者はブロックを組み立てるように、知能的なQA、チャットボット、エージェント、RAGシステムなど複雑なLLMアプリを構築可能です。

LangChainの影響はフレームワークの枠を超え、「AIスタック」概念の形成を促進し、LangServe、LangSmithなどの関連プロジェクトと共にAIアプリの開発、展開、監視の完全なツールチェーンを構成。多数のスタートアップやAI製品、企業プロトタイプで広く採用されています。

**コア機能：**

* **プロンプトおよびチェーン呼び出しフレームワーク**：LLMアプリをチェーン構造に分解し、各種呼び出しフローやエージェントの構築をサポート。モジュールの柔軟な組み合わせや同期/非同期実行が可能。
* **RAG（検索強化生成）機能**：ベクトルデータベース（FAISS、Pineconeなど）をネイティブサポートし、長文分割、埋め込み生成、意味検索に対応。Chat with Docs、ナレッジベースQA、ドキュメントアシスタントなどのシナリオ構築が可能。
* **エージェント構造とツール統合**：思考チェーン（ReAct）とツール呼び出し（Tool/ToolKit）に基づくエージェント構築機能を提供し、多数ツールの自動呼び出しや複雑な目標の実行、多数エージェントの協調をサポート。

**利用シーン：**

* **企業ドキュメントQA・知識検索アシスタント**：PDFやウェブページなどの内容をサポートし、コンテキスト検索と構造的回答を実現。
* **多段階インテリジェントQA・エージェントアシスタント**：記憶機能やツール呼び出し能力を備えたAIエージェントを構築し、データ分析や社内QA、多ツール協働に利用。
* **AI製品の研究開発・プロトタイププラットフォーム**：プロンプト管理と多モデル統合フレームワークとして、迅速なAIアプリ原型とフロー構築を支援。

## No.5: Dify

![Dify](https://static-docs.nocobase.com/10-ee6wpb.png)

* GitHub Star: 110k
* GitHub: https://github.com/langgenius/dify
* Website: https://dify.ai/

![Dify](https://static-docs.nocobase.com/11-wh7r5e.png)

**プロジェクト概要：**

**Dify**はワンストップのツールチェーンを提供し、開発者が企業向け知識QA、AIフォーム、垂直特化型スマートアシスタントなどのRAGアプリを迅速に構築できるよう支援。オンプレミス展開とマルチモデル接続をサポート。

👉 [Difyの詳細な紹介と利用シーンはこちらをご覧ください](https://www.nocobase.com/ja/blog/github-open-source-mcp-projects#no2-dify)

## No.6: Open WebUI

![Open WebUI](https://static-docs.nocobase.com/12-rdqsdh.png)

* GitHub Star: 105k
* GitHub: https://github.com/open-webui/open-webui
* Website: https://openwebui.com/

![Open WebUI](https://static-docs.nocobase.com/13-co0ddy.png)

**プロジェクト概要：**

**Open WebUI**はローカルの大規模モデル展開用Webフロントエンドソリューションで、軽量かつ拡張可能で権限管理を備え、プライベートAIアシスタントのUIやモデルデバッグプラットフォーム構築に適しています。

👉 [Open WebUIの詳細な紹介と利用シーンはこちらをご覧ください](https://www.nocobase.com/ja/blog/github-open-source-mcp-projects#no3-open-webui)

## No.7: Generative AI for Beginners

![Generative AI for Beginners](https://static-docs.nocobase.com/14-l6h62x.png)

* GitHub Star: 94k
* GitHub: https://github.com/microsoft/generative-ai-for-beginners
* Website: https://microsoft.github.io/generative-ai-for-beginners/

![Generative AI for Beginners](https://static-docs.nocobase.com/15-krn66z.PNG)

**プロジェクト概要：**

ここ数年で生成AIは技術の注目点から一般利用へと進展し、マイクロソフトは世界中の開発者向けに「**Generative AI for Beginners**」というオープンソースコースを提供。このプロジェクトはMicrosoft Cloud Advocatesチームにより維持されており、現在第3版、全21講で、テキスト生成、画像生成、RAG検索強化、関数呼び出し、エージェントなど多様なAIアプリ構築を体系的に解説しています。

## No.8: Supabase

![Supabase](https://static-docs.nocobase.com/16-2vidc1.png)

GitHub Star: 86.6k

GitHub: https://github.com/supabase/supabase

Website: https://supabase.com/

![Supabase](https://static-docs.nocobase.com/17-sag4ho.PNG)

**プロジェクト概要：**

**Supabase**は「Firebaseのオープンソース代替」としてスタートし、基本的なデータベースサービス（PostgreSQL + REST API）を提供していましたが、過去2年でBaaS市場とAIアプリの急成長に伴い、認証、ストレージ、リアルタイム購読、エッジ関数などを含むフルスタックバックエンドプラットフォームへと急速に進化しました。

PostgreSQLを基盤とし、Firebaseに似た開発体験を提供しつつも完全なセルフホスティングとデータ制御を可能にし、Web3、AIネイティブアプリ、モバイルアプリなど現代的なWebアプリの理想的バックエンドとなっています。

**コア機能：**

* **PostgreSQLベースの即使用可能なデータベースプラットフォーム**：RESTfulおよびGraphQL APIを自動生成し、行レベルセキュリティ（RLS）、リアルタイム購読によるデータ変更イベント監視、カスタム関数や拡張（pgvector、PostGISなど）をサポート。
* **組み込みの認証とユーザー管理**：完全な認証モジュール、多要素認証（MFA）対応、ユーザー管理画面とアクセストークン管理、権限グループ、RBAC、JWTなどの仕組みを提供。
* **ファイルストレージ＋CDN配信**：あらゆるタイプのファイルアップロードをサポートし、アクセス権限管理、自動画像処理、ファイル署名、ストレージイベントトリガーなどに対応。

**利用シーン：**

* **AI MVPやハッカソンプロジェクトの迅速立ち上げ**：ほぼバックエンド開発不要で、AI Web/モバイルアプリの原型構築に適する。
* **AIアプリにおけるデータおよびベクトルストレージ**：pgvectorや権限管理対応で、RAGやCopilot等のシステム組込みDBとして利用可能。
* **中小チームのFirebaseセルフホスティング代替**：完全なバックエンド機能とセルフホスティング選択肢を提供し、データ管理重視のチームニーズに対応。

## No.9: ComfyUI

![ComfyUI](https://static-docs.nocobase.com/18-lxld57.PNG)

GitHub Star: 84.4

GitHub: https://github.com/comfyanonymous/ComfyUI

Website: https://www.comfy.org/

![ComfyUI](https://static-docs.nocobase.com/19-ezesx9.PNG)

**プロジェクト概要：**

**ComfyUI**は2023年にコミュニティ主導で開発された、画像生成向けのオープンソースGUIワークフローツールで、Stable Diffusionモデルエコシステムに特化。モジュール式ノードシステムにより、これまで複雑だったプロンプト設計、画像制御、モデルロードのプロセスを視覚化し、AI画像制作のハードルを大幅に下げました。

AIビジュアル創作の需要拡大と共に、ComfyUIは開発者やデザイナー、クリエイターがカスタム画像生成フローを構築するための重要プラットフォームとなり、トレーニング実験、スタイルミックス、動画生成など高度なタスクにも広く利用されています。

**コア機能：**

* **ノードベースの画像生成フローエディター**：ドラッグ＆ドロップによるノード形式で、モデル選択、プロンプト挿入、後処理までの一連の生成フローを構築、見たままの結果を得られる。
* **多種のStable Diffusionモデルと拡張プラグイン対応**：SD1.x/2.x、SDXLにネイティブ対応し、LoRA、ControlNet、T2I-Adapter、IP-Adapterなど多彩な拡張モジュールをサポート。
* **高性能かつ再利用可能な設計**：最適化された実行エンジンとキャッシュ機構を備え、バッチ処理や高解像度出力に対応。フローは保存・再利用可能で、画像生成テンプレートの構築に便利。

**利用シーン：**

* **AIビジュアルコンテンツ制作**：クリエイターがノードを組み合わせてスタイル化画像生成フローを設計し、プロンプトから画像まで全工程を制御。
* **トレーニングと実験プロトタイプ構築**：AI研究者が独自のトレーニング・テストフローを作成し、モデル組合せやパラメータを素早く試行。
* **画像・動画生成プラットフォームの基盤エンジン**：画像生成SaaSや動画合成ツールの核として利用可能で、ユーザーの自由な設定と効率的生成を支援。

## No.10: **Netdata**

![Netdata](https://static-docs.nocobase.com/20-syzmq4.PNG)

GitHub Star: 75.3k

GitHub: https://github.com/netdata/netdata

Website: https://www.netdata.cloud/

![Netdata](https://static-docs.nocobase.com/21-sz1mk9.png)

**プロジェクト概要：**

**Netdata**はオープンソースのリアルタイムシステム監視ツールで、AIアプリケーションの展開においてGPU、メモリ、IOなどのリソース使用状況を追跡し、大規模モデルの推論安定稼働を支えます。

👉 [Netdataの詳細な紹介と利用シーンはこちらをご](https://www.nocobase.com/ja/blog/github-open-source-mcp-projects#no4-netdata)

## No.11: system-prompts-and-models-of-ai-tools

![system-prompts-and-models-of-ai-tools](https://static-docs.nocobase.com/22-mm99vt.PNG)

GitHub Star: 73.7k

GitHub: https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools

![system-prompts-and-models-of-ai-tools](https://static-docs.nocobase.com/23-mzyae1.PNG)

**プロジェクト概要：**

本プロジェクトは、ChatGPT、Claude、Perplexityなどの様々なAIツールのシステムプロンプト（System Prompts）やモデル呼び出しパラメータを収集・アーカイブするオープンソースのリポジトリです。複数のAI製品の背後にあるプロンプトを体系的に整理した初期の資料庫として、プロンプトエンジニアリングの研究、モデル挙動解析、AI製品の再現に貴重な素材を提供しています。

**コア機能：**

* **複数の主要AIツールのシステムプロンプトを収録**：役割定義、行動制約、口調指定などの原始的なシステムプロンプトを含む。
* **モデル呼び出し設定とAPIパラメータを含む**：使用モデルのバージョン、温度パラメータ、最大トークン制限などの詳細情報。
* **継続的な更新とコミュニティ協力体制**：コミュニティの貢献とバージョン更新を支援し、プロンプトエンジニアリングの透明性を促進。

**利用シーン：**

* **AI製品の再現とデバッグ**：開発者がプロンプトを基に元の動作を復元し、競合製品の機能を迅速に再現可能。
* **プロンプトエンジニアリング研究・教材資料**：LLMの挙動研究における実例として、講義やチューニング実習に適している。
* **システムプロンプト設計の参考**：カスタムAIアシスタントやエージェントシステム構築のための高品質テンプレートを提供。

## No.12: Deep-Live-Cam

![Deep-Live-Cam](https://static-docs.nocobase.com/24-n2sc8a.png)

GitHub Star: 72.3k

GitHub: https://github.com/hacksider/Deep-Live-Cam

Website: https://deeplivecam.net/

![Deep-Live-Cam](https://static-docs.nocobase.com/25-zaglnj.PNG)

**プロジェクト概要：**

**Deep-Live-Cam**は、AIビデオ処理とリアルタイム映像強化技術を組み合わせたオープンソースプロジェクトです。深層学習モデルを活用し、リアルタイムカメラ映像の人物最適化、美顔、スタイル変換などを実現します。主にバーチャル配信者、ビデオ会議、美顔ライブ配信などの用途を想定した「AI駆動のリアルタイムカメラ強化エンジン」です。

**コア機能：**

* **リアルタイム人物認識・処理**：ONNX/TensorRTによる高速顔認識、人物分割、背景差し替えなど。
* **内蔵美顔・フィルターアルゴリズム**：スキン平滑化、美白、大きな目、小顔効果をサポートし、パラメータ調整可能。
* **複数スタイル・フィルター重ね合わせ**：アニメ化、油絵風、サイバーパンクなど多彩な視覚スタイルモデルを統合。

**利用シーン：**

* **バーチャル配信・配信者コンテンツ強化**：リアルタイムの美化・エフェクト重ね合わせで視覚的魅力を向上。
* **AIビデオ会議最適化ツール**：ZoomやOBSなどのプラットフォーム向けのリアルタイム映像強化。
* **クリエイティブ短編動画制作プラットフォーム**：インタラクティブでパーソナライズされた動画撮影ツールやテンプレートの構築に。

## No.13: Glama

![Glama](https://static-docs.nocobase.com/26-91i4ng.PNG)

GitHub Star: 64.8k

GitHub: https://github.com/punkpeye/awesome-mcp-servers

Website: https://glama.ai/mcp/servers

![Glama](https://static-docs.nocobase.com/27-io2bza.png)

**プロジェクト概要：**

**Glama**は企業向けAIアプリケーションの展開に注力したプロジェクトで、任意のMCP対応モデルバックエンドをサポートし、モデルコンテキスト、命令、権限ポリシーを集中管理し、より制御可能なLLMシステムの構築を支援します。

👉 [Glamaの詳細な紹介と利用シーンはこちら](https://www.nocobase.com/ja/blog/github-open-source-mcp-projects#no6-glama)

## No.14: Lobe Chat

![Lobe Chat](https://static-docs.nocobase.com/28-peobw3.png)

GitHub Star: 64.1k

GitHub: https://github.com/lobehub/lobe-chat

Website: https://lobechat.com/

![Lobe Chat](https://static-docs.nocobase.com/29-yz65bm.png)

**プロジェクト概要：**

**Lobe Chat**はオープンソースのマルチモデルチャットアシスタントプラットフォームで、ローカルデプロイとプラグイン拡張を特徴とし、ChatGPTのようなユーザー体験を目指しています。

👉 [Lobe Chatの詳細な紹介と利用シーンはこちら](https://www.nocobase.com/ja/blog/github-open-source-mcp-projects#no5-lobe-chat)

## No.15: LLMs-from-scratch

![LLMs-from-scratch](https://static-docs.nocobase.com/30-uyen1n.png)

GitHub Star: 62.2k

GitHub: https://github.com/rasbt/LLMs-from-scratch

![LLMs-from-scratch](https://static-docs.nocobase.com/31-xurcwa.png)

**プロジェクト概要：**

**LLMs-from-scratch**はゼロから大規模言語モデルをトレーニングする実践プロジェクトで、Hugging Faceコミュニティメンバーが開始。データ準備、トークナイザー構築、モデル設計からトレーニングと評価までの全工程をカバーし、大規模モデルの基礎を深く理解したい研究者・開発者向け。

**コア機能：**

* **Transformerアーキテクチャの段階的構築**：attentionから位置エンコーディングまで層ごとに実装。
* **カスタムトークナイザーとデータパイプライン**：生テキストからトレーニングサンプルまで対応。
* **微調整と評価対応**：複数のオープンデータセットやモデルチェックポイントに対応。

**利用シーン：**

* **AI教育コースやワークショップ**：LLM構造やトレーニングプロセスの教授に。
* **独自小型言語モデル研究**：特定用途に適した軽量モデルを構築可能。
* **大規模モデルのトレーニング再現**：異なる設計の効果比較に便利。

## No.16: RAGFlow

![RAGFlow](https://static-docs.nocobase.com/32-1mmw55.png)

GitHub Star: 61.7k

GitHub: https://github.com/infiniflow/ragflow

Website: https://ragflow.io/

![RAGFlow](https://static-docs.nocobase.com/33-nynzcr.png)

**プロジェクト概要：**

**RAGFlow**はモジュール化されたRAGシステム構築フレームワークで、データ取り込み、ベクトル検索、プロンプトテンプレート、多モデル呼び出しをカバーし、知識問答システムのプロトタイプを迅速に構築可能。

👉 [RAGFlowの詳細な紹介と利用シーンはこちら](https://www.nocobase.com/ja/blog/github-open-source-mcp-projects#no7-ragflow)

## No.17: LLaMA Factory

![LLaMA Factory](https://static-docs.nocobase.com/34-srl0ci.png)

GitHub Star: 55.6k

GitHub: https://github.com/hiyouga/LLaMA-Factory

Website: https://llamafactory.readthedocs.io/

![LLaMA Factory](https://static-docs.nocobase.com/35-m5ff1m.png)

**プロジェクト概要：**

**LLaMA Factory**はMetaのLLaMAシリーズ（LLaMA2、LLaMA3含む）専用の微調整・デプロイツールで、LoRA、QLoRA、Flash Attentionなどの技術を統合し、中小規模の個人や企業がローカルで効率的に言語モデルをトレーニング・デプロイ可能。

**コア機能：**

* **複数のトレーニング方式をサポート**：LoRA、全パラメータ微調整、INT8/4bit量子化微調整。
* **モデル構造の自動適合**：多様なHugging Faceフォーマット対応。
* **使いやすいUIと簡単デプロイ**：Web UIからトレーニング開始可能。
* **推論およびエクスポート対応**：トレーニング完了後すぐに推論やデプロイに利用可能。

**利用シーン：**

* **自社データによるモデル微調整**：企業が内部データで素早くカスタムモデル作成。
* **研究やコンペ用途**：異なるトレーニング手法の高速試行に。
* **小型モデルの迅速デプロイ**：教育やスタートアップのLLM検証に最適。

## No.18: gpt-engineer

GitHub Star: 54.6k

GitHub: https://github.com/AntonOsika/gpt-engineer

![gpt-engineer](https://static-docs.nocobase.com/36-i77bm0.png)

**プロジェクト概要：**

**gpt-engineer**はユーザーが自然言語で要求を記述すると、完全なコード構造を自動生成することを目指しています。対話形式で要求を収集し、LLMがディレクトリ、モジュール、コードを生成する「AIプログラミングアシスタント」の重要な探究分野です。

**コア機能：**

* **ユーザー要求収集プロセス**：プロンプトを通じてプロジェクト構造や開発目標を収集。
* **プロジェクトコードの自動生成**：ファイル構造からコード実装まで一体化生成。
* **開発スタイル・プロンプトの設定可能**：コードスタイル、言語、フレームワークの好みをユーザーが指定可能。
* **反復的な最適化機能**：修正・デバッグのループをサポートし、開発者のフィードバック過程を模倣。

**利用シーン：**

* **プロジェクト初期コードフレームワークの迅速生成**：新規プロジェクト立ち上げやハッカソンに最適。
* **AIプログラミング補助研究**：AIが開発意図を段階的に理解する様子を探求。
* **コード教育・デモツール**：初心者に完全なプロジェクト構築過程を理解させる補助。

## No.19: ChatGPT

![ChatGPT](https://static-docs.nocobase.com/37-mn61ch.png)

GitHub Star: 53.9k

GitHub: https://github.com/lencx/ChatGPT

![ChatGPT](https://static-docs.nocobase.com/38-dik0fz.png)

**プロジェクト概要：**

**ChatGPT**はlencxによるオープンソースのデスクトップクライアントで、OpenAIのChatGPTに対してクロスプラットフォーム（Windows、macOS、Linux）でのネイティブ体験を提供します。軽量で美しいUI、多アカウント対応が特徴で、OpenAI APIユーザーの主要なデスクトップソリューションの一つです。

**コア機能：**

* **クロスプラットフォームのネイティブアプリ**：Tauriベースで軽量かつリソース消費が非常に少ない。
* **マルチアカウント対応と簡単切替**：異なるAPIキーに対応。
* Markdown、コードハイライト、チャット履歴のローカル保存をサポート。

**利用シーン：**

* **開発者向けAIアシスタントクライアント**：迅速にChatGPTを呼び出してタスク処理。
* **個人知識管理ツール**：Markdownで会話内容を記録・整理。
* **教育・デモンストレーションツール**：ChatGPTの機能やAPIテストの展示に適す。

## No.20: Meilisearch

![Meilisearch](https://static-docs.nocobase.com/39-agg8q7.png)

GitHub Star: 52.6k

GitHub: https://github.com/meilisearch/meilisearch

![Meilisearch](https://static-docs.nocobase.com/40-l9tm6v.png)

**プロジェクト概要：**

**Meilisearch**は高速オープンソース検索エンジンで、モダンなWebアプリケーション構築に最適化されています。リアルタイム検索（オートコンプリート、ファジーマッチ）を特徴とし、簡単にデプロイ・柔軟に設定可能で、中小規模プロジェクトやスタートアップのElasticsearch代替として広く利用されています。

**コア機能：**

* **高性能な自然言語検索**：タイプミス耐性、プレフィックスマッチ、重み付けソート対応。
* **簡単なデプロイとAPI利用**：数分で完全な検索サービス構築可能。
* **多言語対応とカスタム辞書**：グローバル製品ニーズに適応。

**利用シーン：**

* **ウェブサイト検索機能**：ブログ、EC、ドキュメントサイトへの迅速な検索統合。
* **SaaS製品の組み込み検索モジュール**：製品内検索体験の向上。
* **ローカル知識ベース・ドキュメント検索エンジン**：RAGアプリケーションと連携したスマートQ&A構築。

## 最後に

この⽂章が、オープンソースのAIツールを選ぶ際や利⽤する際の実⽤的な参考になれば幸いです。もし役に⽴ったと感じたら、AIに関⼼のある開発者仲間にもぜひ共有してください！

⭐ 私たちも引き続き優れたプロジェクトを追いかけながら、さらに多くのインスピレーションと可能性を⾒つけていきます！


**関連読み物：**

* [GitHub でスター数トップ 8 のオープンソース MCP プロジェクト](https://www.nocobase.com/ja/blog/github-open-source-mcp-projects)
* [GitHubスター数トップのオープンソースWebアプリ7選](https://www.nocobase.com/ja/blog/github-open-source-web-applications)
* [GitHub のスター数上位 40 の開発者ツール](https://www.nocobase.com/ja/blog/github-open-source-developer-tools)
* [2025 年 GitHub 上で最も成長が速い上位 15 のオープンソース低コードプロジェクト](https://www.nocobase.com/ja/blog/github-top15-fastest-growing-open-source-low-code-projects)
* [GitHubで最も星を集めたオープンソースCRMプロジェクトトップ11](https://www.nocobase.com/ja/blog/github-open-source-crm-projects)
* [GitHub上で人気のオープンソース管理ダッシュボード11選](https://www.nocobase.com/ja/blog/top-11-open-source-admin-dashboard-projects-on-github)
