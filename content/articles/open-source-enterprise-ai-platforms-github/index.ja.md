## はじめに

**企業は実際にどんなセルフホスト型 AI を使っていて、何を基準に選んでいるのでしょうか。**

Reddit の [r/OpenSourceeAI](https://www.reddit.com/r/OpenSourceeAI/comments/1uhl061/what_are_companies_actually_using_for_selfhosted/) で、まさにこの問いが投げかけられていました。コメント欄では、コスト、データプライバシー、モデルの性能、運用保守といった観点が挙がっています。一方で、企業が必ず自前でモデルをホストする必要はなく、API 経由でモデルを呼び出し、AI を既存の業務システムに組み込むのも現実的な選択肢だ、という指摘もありました。

![image-uhibfw.png](https://static-docs.nocobase.com/image-uhibfw.png)

実際、AI に求めるものは企業ごとに異なります。社内で統一された AI チャットの入り口があれば十分なチームもあれば、社内ドキュメントの検索や既存ツールとの連携を AI に任せたいチームもあります。さらに、AI を使って CRM、購買管理、チケット管理などの業務システムを構築したいという企業もあります。

そこでこの記事では、**プライベート環境にデプロイできる企業向け AI プラットフォームと関連オープンソースプロジェクトを 10 件**まとめました。主な用途ごとに分類し、それぞれの中核機能、適した利用シーン、ライセンスを紹介します。自社のニーズに合うツールを見つける手がかりになれば幸いです。

---

💬 こんにちは！NocoBase ブログをお読みいただきありがとうございます。NocoBase は企業向けアプリケーション開発のためのオープンソースプラットフォームで、業務システムの構築と継続的な改善に AI を参加させることができます。ぜひ [GitHub](https://github.com/nocobase/nocobase) もご覧ください。

---

## 選定の基準

GitHub には企業向け AI に関するプロジェクトが数多くあります。今回は、具体的な用途に焦点を絞り、企業環境で実際に使えるツールを中心に、次の 3 つの条件で選びました。

- **コードが公開され、プライベートデプロイに対応していること：** GitHub でコードを確認でき、公式にセルフホストの手段が提供されている。
- **企業での用途が明確であること：** 業務システム開発、プロセス自動化、Agent 開発、ナレッジ管理、モデル運用などのニーズをカバーしている。
- **継続的にメンテナンスされていること：** 最近もコードの更新やリリースがあり、ドキュメントが整備されている。

## 早見表


| プロジェクト                                                 | 主な役割                                                                            | GitHub Stars | ライセンス（種類 / 主な制限）                                                        | 向いている用途                                                         |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------- | -----------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| [NocoBase](https://github.com/nocobase/nocobase)             | Coding Agent で業務システムを開発し、権限やワークフローなどの基盤を NocoBase が提供 |        24.8k | NocoBase 独自ライセンス（追加条項あり）；Studio などの商用機能は別途ライセンスが必要 | CRM、購買、チケット管理などの業務システムを構築し、長期的に保守する    |
| [Activepieces](https://github.com/activepieces/activepieces) | 異なるアプリをビジュアルにつなぎ、ワークフローと AI でタスクを自動実行              |        23.7k | MIT（コアはオープンソース）；エンタープライズ機能は別途ライセンス                    | 少ないコードでツール間の自動化を実現したいチーム                       |
| [Windmill](https://github.com/windmill-labs/windmill)        | API、ワークフロー、社内向け操作画面                                                 |        17.5k | AGPLv3 / Apache-2.0；公式ディストリビューションには独自機能と利用制限が含まれる      | コードを書いて社内の自動化ツールを開発する技術チーム                   |
| [Sim](https://github.com/simstudioai/sim)                    | AI Agent をビジュアルに構築、デプロイ、オーケストレーション                         |        29.4k | Apache-2.0                                                                           | AI Agent ワークフローを素早く構築してテストする                        |
| [Mastra](https://github.com/mastra-ai/mastra)                | TypeScript で Agent、ツール呼び出し、ワークフローを開発                             |        28.0k | Apache-2.0（コア）；エンタープライズ機能は別ライセンス                               | JavaScript / TypeScript で AI アプリを開発するチーム                   |
| [MaxKB](https://github.com/1Panel-dev/MaxKB)                 | 企業ナレッジベースを基に AI Q&A アシスタントや Agent を構築                         |        23.2k | GPL-3.0；改変や配布には条項の遵守が必要                                              | 社内ナレッジ Q&A アシスタントを素早く導入する                          |
| [RAGFlow](https://github.com/infiniflow/ragflow)             | 複雑なドキュメントを解析し、引用元付きの RAG 検索と回答を提供                       |        94.0k | Apache-2.0                                                                           | 契約書、マニュアル、スキャン文書などの複雑なドキュメントを扱う         |
| [LiteLLM](https://github.com/BerriAI/litellm)                | モデル API を統一し、キー、予算、ルーティング、呼び出し記録を管理                   |          60k | コアは MIT；エンタープライズ機能は別途ライセンス                                     | 複数チームが異なるモデルを共用し、利用コストを管理する                 |
| [MLflow](https://github.com/mlflow/mlflow)                   | AI アプリのトレースと評価、プロンプトやモデルのバージョン管理                       |        28.8k | Apache-2.0                                                                           | モデル評価、実験管理、バージョン管理が必要な AI エンジニアリングチーム |
| [Langfuse](https://github.com/langfuse/langfuse)             | LLM と Agent の実行をトレースし、品質、レイテンシ、利用量を分析                     |        32.8k | MIT（コア）；`ee` ディレクトリは別ライセンス                                         | 本番稼働中の AI アプリを監視し、継続的に改善する                       |

## 1. NocoBase：AI 駆動の企業向け業務システム開発プラットフォーム

**プロジェクト情報**

- GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)
- GitHub Stars：24.8k
- ライセンス：NocoBase 独自ライセンス。Apache-2.0 をベースに追加条項を含む。Studio などの商用機能は別途ライセンスが必要
- デプロイ方法：プライベートデプロイに対応。アプリケーションのコードとデータは企業自身が管理
- 公式サイト：[https://www.nocobase.com](https://www.nocobase.com)

### 概要

NocoBase は、企業の業務システムを対象としたオープンソースの開発プラットフォームです。AI を活用して、CRM、購買管理、チケット管理、IT 資産管理などのアプリケーションを構築し、継続的に改善していくことができます。アプリケーションの基盤として [NocoBase Core](https://www.nocobase.com/core/) を採用し、企業開発に必要な共通機能を提供するため、Coding Agent は具体的な業務機能の実装に集中できます。

さらに NocoBase は、複数の Agent が協調して開発を進めるための [Studio](https://www.nocobase.com/studio/) や、[NocoCRM](https://www.nocobase.com/solution-crm/)、[NocoITAM](https://www.nocobase.com/solution-itam/) といったすぐに使える [Solutions](https://www.nocobase.com/solutions/) も提供しており、アプリケーションの構築からその後の保守、継続的な改善までを支えます。

![NocoBase Studio のリクエスト画面：Agent がサプライヤー評価のリクエストを処理している様子](https://static-docs.nocobase.com/studio-en-req-now-20261111-normal-2x.webp)

### 注目の機能

**1. AI を業務機能の開発に集中させる**

[NocoBase Core](https://www.nocobase.com/core/) は、データモデル、ロールと権限、ワークフロー、承認、ファイル管理など、企業アプリケーションでよく使われる基盤機能を提供します。Coding Agent はこれらの機能の上で、具体的な業務機能を直接開発できます。業務コードは Core と分けて保守するため、重複した開発を減らせるだけでなく、後から機能を追加したり、業務ロジックを調整したり、基盤をアップグレードしたりするのも容易です。下図の NocoITAM は NocoBase Core 上に構築されており、下層の基盤機能はそのまま Core を利用しています。

![image (1)-s0rl11.png](https://static-docs.nocobase.com/image%20(1)-s0rl11.png)

**2. AI による開発と業務での協働を支援**

Claude Code や Codex などの Coding Agent を使い、業務要件に沿ってアプリケーションを開発・修正できます。商用版の [Studio](https://www.nocobase.com/studio/) を使えば、複数の Agent に開発、テスト、コードレビューを分担させ、担当者が検収してリリースを管理することも可能です。アプリケーションの稼働後は業務 Agent を接続し、既存のロール権限と承認ルールの範囲内でデータを照会したり業務タスクを処理したりして、日常の繰り返し作業を減らせます。

![NocoBase Studio の検収画面：担当者が納品レポートを確認し、マージするか差し戻すかを判断する](https://static-docs.nocobase.com/studio-en-req-accept-20261111-normal-2x.webp)

**3. すぐに使えるアプリケーションを提供し、継続的なカスタマイズにも対応**

NocoBase の [Solutions](https://www.nocobase.com/solutions/) は、Core 上に構築された NocoCRM、NocoITAM などのすぐに使える業務アプリケーションを提供します。企業はそのままデプロイして使うことも、自社の要件に合わせて改修を続けることもできます。Coding Agent は既存アプリケーションの上にモジュールを追加し、画面や業務プロセスを調整できるため、毎回ゼロからシステムを作り直す必要はありません。

### 利用シーンと向いているチーム

NocoBase は、AI を活用して CRM、購買、チケット管理、IT 資産管理などの業務システムを構築し、長期的に保守していきたい企業のチームや、顧客向けにアプリケーションを開発・納品するソフトウェアサービス事業者に向いています。業務データ、ロール権限、承認フロー、部門間の協業を同時に扱う必要がある場面で、NocoBase は統一されたアプリケーション基盤を提供し、業務の変化に合わせてシステムを拡張し続けることを支えます。

---

## 2. Activepieces：ビジュアルな AI ワークフロー自動化

**プロジェクト情報**

- GitHub：[https://github.com/activepieces/activepieces](https://github.com/activepieces/activepieces)
- GitHub Stars：23.7k
- ライセンス：MIT（コミュニティ版）；エンタープライズ機能は別途ライセンスが必要
- デプロイ方法：Docker、Kubernetes でのセルフホスト、または公式クラウドサービス
- 公式サイト：[https://www.activepieces.com](https://www.activepieces.com)

### 概要

Activepieces は、オープンソースの AI 自動化プラットフォームです。ビジュアルな画面でさまざまなアプリケーションをつなぎ、データ同期、情報処理、通知といった繰り返し作業を自動化ワークフローとしてまとめられます。多数のビルトイン連携コンポーネントを備え、AI Agent、モデル呼び出し、MCP にも対応しているため、既存の業務プロセスに AI の機能を組み込めます。

Activepieces の特徴は導入のハードルが低いことです。業務担当者はノードをドラッグ＆ドロップするだけで設定の大部分を完了でき、開発者はコードで特殊な機能を拡張できます。

![Activepieces のビジュアルワークフロー：トリガーとアクションのノード](https://mintcdn.com/activepieces/iL5rAezyhfVokrkv/images/actions-and-triggers.png)

### 注目の機能

**1. 業務ツールをビジュアルに接続**

ノードをドラッグ＆ドロップして CRM、メール、スプレッドシート、データベース、コラボレーションツールをつなぎ、トリガー条件、条件分岐、実行ステップを設定します。これまで複数のシステムに分散していた操作を一連の流れにまとめ、二重入力や手作業を減らせます。

**2. 自動化プロセスに AI Agent を組み込む**

ワークフローの中で大規模言語モデルや AI Agent を呼び出し、コンテンツ分類、情報抽出、テキスト生成、ツール呼び出しなどのタスクを実行できます。人の判断が必要なステップには承認や確認の工程を設け、確認が取れてからワークフローを続行させることも可能です。

![Activepieces の Agent 一覧画面](https://mintcdn.com/activepieces/39O5zgDWjZRx93_N/resources/screenshots/agents-list.png)

**3. カスタム連携と MCP 対応**

Activepieces は多数のビルトイン連携コンポーネント（Pieces）を提供するほか、開発者が TypeScript でカスタムコンポーネントを作成し、社内システムや特殊な API に接続することもできます。MCP にも対応しており、一部のツール機能を他の AI クライアントから呼び出せるようにして、自動化の適用範囲を広げられます。

![Activepieces の AI 機能設定画面：Web 検索、スクレイピング、ナレッジベース埋め込み](https://mintcdn.com/activepieces/H0ldfKIBwECfz9DC/resources/screenshots/ai-center-capabilities.png)

### 利用シーンと向いているチーム

Activepieces は、ツール間の自動化を素早く実現したい運用、マーケティング、営業、IT の各チームに向いています。特に、すでに複数の業務システムを使っていて、コード開発に大きく投資したくない企業に適しています。重点は既存ツールの接続とワークフローの実行にあり、顧客や注文といった中核の業務データは引き続きそれぞれのシステムで管理します。

---

## 3. Windmill：開発チーム向けの自動化と社内ツールのプラットフォーム

**プロジェクト情報**

- GitHub：[https://github.com/windmill-labs/windmill](https://github.com/windmill-labs/windmill)
- GitHub Stars：17.5k
- ライセンス：コアサービスは主に AGPLv3、一部の SDK は Apache-2.0；一部の機能は商用ライセンス
- デプロイ方法：Docker Compose、Kubernetes でのセルフホスト、または公式クラウドサービス
- 公式サイト：[https://www.windmill.dev](https://www.windmill.dev)

### 概要

Windmill は、コードを中心に据えたワークフローと社内ツールの開発プラットフォームです。Python、TypeScript、SQL などのスクリプトを API、自動化ジョブ、社内アプリに変換できます。開発者は手元の既存コードをそのまま使うことも、ビジュアルエディタでワークフローを組み立てることも、業務担当者向けの操作画面を作ることもできます。AI 支援による開発やモデル連携の機能も備えており、社内のスクリプト、自動化、AI 機能を一か所で管理したい技術チームに向いています。ドラッグ＆ドロップのノードに主に依存する自動化ツールと比べると、Windmill はコードの柔軟性をより重視しています。

### 注目の機能

**1. コードをそのまま実行可能なジョブに**

Python、TypeScript、SQL、Bash など複数の言語に対応し、スクリプトを API、定期実行ジョブ、ワークフローのステップとして公開できます。Windmill はスクリプトの引数から入力フォームを自動生成し、実行履歴を一元管理するため、既存のコードを他のシステムやチームメンバーが使いやすくなります。

![Windmill のスクリプトエディタ：TypeScript スクリプトを書いてその場でテストする](https://raw.githubusercontent.com/windmill-labs/windmill/main/imgs/windmill-editor.png)

**2. ビジュアルワークフローと AI 連携**

複数のスクリプト、データベースクエリ、外部 API を 1 つのワークフローにまとめ、条件分岐、並列実行、定期トリガー、エラー処理のルールを設定できます。ワークフローにはモデル呼び出しなどの AI ステップも追加でき、コードによる制御を保ちながらテキスト分析や情報抽出といったタスクを処理できます。

![Windmill のフローエディタ：分岐と承認ステップを含むフロー](https://raw.githubusercontent.com/windmill-labs/windmill/main/imgs/windmill-flow.png)

**3. 社内業務向けの操作画面を構築**

Windmill のアプリエディタでは、スクリプトとデータソースを基にフォーム、データテーブル、ダッシュボード、操作ボタンを作成できます。業務担当者はスクリプトに直接触れることなく画面からデータを照会したりバックエンドのジョブを実行したりでき、開発者は引き続き下層のコードを保守できます。

![Windmill のアプリエディタ：コードを基に構築した社内向けフォームアプリ](https://raw.githubusercontent.com/windmill-labs/windmill/main/imgs/windmill-builder.png)

### 利用シーンと向いているチーム

Windmill は、Python、TypeScript、SQL の開発スキルを持ち、社内のスクリプト、データ処理、自動化ジョブを一元管理したい企業に向いています。社内向けの操作ツールを素早く開発したい技術チームにも適しており、特に既存のコードロジックを再利用したい場面で力を発揮します。

---

## 4. Sim：ビジュアルな AI Agent 開発プラットフォーム

**プロジェクト情報**

- GitHub：[https://github.com/simstudioai/sim](https://github.com/simstudioai/sim)
- GitHub Stars：29.4k
- ライセンス：Apache-2.0
- デプロイ方法：セルフホスト、公式クラウドサービス、デスクトップクライアント
- 公式サイト：[https://www.sim.ai](https://www.sim.ai)

### 概要

Sim は、オープンソースの AI Agent およびワークフロー開発プラットフォームで、ビジュアルな画面、自然言語、コードのいずれでも AI アプリケーションを構築できます。モデル、ツール呼び出し、ナレッジベース、データ接続を 1 つのワークスペースに集約し、シンプルな Q&A から複数ステップの実行まで、さまざまな Agent ワークフローを組み立てられます。

Sim はテスト、実行ログ、デプロイ管理の機能も備えており、チームは同じプラットフォーム上で Agent の開発と調整を完結できます。AI アプリケーションのアイデアを素早く検証したいチームにとって、Agent の基礎部分をゼロから作る手間を減らせます。

![Sim のプラットフォーム画面：左側にチャット、右側にビジュアルワークフローエディタ](https://raw.githubusercontent.com/simstudioai/sim/main/apps/sim/public/static/readme-platform.png)

### 注目の機能

**1. Agent ワークフローをビジュアルに構築**

モデル、プロンプト、ツール、条件判定などのノードをつなぐことで、Agent の処理ステップと実行ロジックを定義できます。Sim は自然言語によるワークフローの作成・調整の支援にも対応しているため、毎回手でコードを書かなくても Agent の挙動を変えられます。

**2. モデル、ナレッジベース、外部ツールを接続**

さまざまな大規模言語モデル、データベース、ナレッジベース、サードパーティサービスに接続し、Agent がデータの読み取り、資料の検索、外部ツールの呼び出しを行えるようにします。タスクに応じてこれらの機能を組み合わせることで、Agent は単なるチャットの枠を超えて複数ステップの処理をこなせます。

![Sim のナレッジベース一覧：Agent の検索に使う](https://raw.githubusercontent.com/simstudioai/sim/main/apps/sim/public/static/readme-knowledge.png)

**3. ワークフローのテストと実行管理**

Sim はワークフローのテスト、実行ログ、実行監視の機能を提供し、各ステップの入力、出力、実行状況を確認できます。開発者は問題がモデルの応答、ツール呼び出し、ワークフロー設定のどこにあるのかを見極め、既存のフローの上で修正を続けられます。

![Sim のテーブル：Agent が照会できる構造化データ](https://raw.githubusercontent.com/simstudioai/sim/main/apps/sim/public/static/readme-tables.png)

### 利用シーンと向いているチーム

Sim は、AI Agent を素早く構築、テスト、デプロイしたいプロダクトチーム、スタートアップ、開発者に向いており、特に複数の AI タスクをビジュアルにオーケストレーションするプロジェクトに適しています。重点は Agent の開発と実行にあり、複雑な業務データや企業アプリケーションの管理は、通常ほかのシステムと組み合わせる必要があります。

---

## 5. Mastra：TypeScript ベースの AI Agent 開発フレームワーク

**プロジェクト情報**

- GitHub：[https://github.com/mastra-ai/mastra](https://github.com/mastra-ai/mastra)
- GitHub Stars：28.0k
- ライセンス：Apache-2.0（コアフレームワーク）；エンタープライズ機能は別ライセンス
- デプロイ方法：Node.js と TypeScript がベース。自社サーバーやクラウド環境にデプロイ可能
- 公式サイト：[https://mastra.ai](https://mastra.ai)

### 概要

Mastra は、既存のアプリケーションの中に Agent、ツール呼び出し、複雑なワークフローを組み込むためのオープンソースの TypeScript AI 開発フレームワークです。メモリ、評価、実行トレースなどの機能を備え、開発者はコードで Agent の挙動を定義し、既存のプロダクトやサービスに統合できます。AI 機能をアプリケーションコードの一部としてそのまま扱えるのが特徴です。すでに JavaScript や TypeScript の技術スタックを使っているチームなら、慣れた開発、テスト、デプロイの方法をそのまま続けられます。

![Mastra Studio のナレッジグラフ表示](https://raw.githubusercontent.com/mastra-ai/mastra/main/docs/static/img/knowledge/studio-tree-and-graph.png)

### 注目の機能

**1. TypeScript で AI Agent を開発**

開発者は TypeScript で Agent のモデル、指示、呼び出し可能なツールを定義し、既存アプリケーションの API や業務ロジックに直接接続できます。Agent のコードはプロジェクトの他のコードと一緒に型チェック、テスト、バージョン管理の対象になるため、長期的な保守がしやすくなります。

**2. ワークフローのオーケストレーションと MCP 連携**

Mastra は複数の処理ステップをワークフローとして編成でき、順次実行、条件分岐、明示的な制御が必要なタスクフローに対応します。MCP にも対応しており、外部のツールやサービスに接続して、Agent が既存システム内の情報を読み取ったり操作を実行したりできます。

![Mastra Studio で本番環境のトレースをデータセットのエントリとして保存する](https://raw.githubusercontent.com/mastra-ai/mastra/main/docs/static/img/guides/build-an-eval-loop/production-trace-ground-truth.png)

**3. Agent のメモリ、トレース、評価**

会話やタスクに必要なコンテキストを管理する Agent メモリの機能を備え、モデル呼び出しとツール実行の過程をトレースできます。さらに評価ツールを使って、異なるプロンプト、モデル、Agent 設定の結果を比較し、次の調整の根拠にすることができます。

![Mastra Studio の実験比較：異なるモデルでの Agent の出力とスコアを比べる](https://raw.githubusercontent.com/mastra-ai/mastra/main/docs/static/img/guides/build-an-eval-loop/model-experiment-comparison.png)

### 利用シーンと向いているチーム

Mastra は、JavaScript や TypeScript でプロダクトを開発していて、既存のアプリケーションに AI Agent を加えたい技術チームに向いています。Sim のようなビジュアルプラットフォームと比べると、Agent のロジックを細かくカスタマイズし、既存コードを再利用し、デプロイフローを自分たちで管理したい開発者に適しています。

---

## 6. MaxKB：企業ナレッジベースと AI Agent のプラットフォーム

**プロジェクト情報**

- GitHub：[https://github.com/1Panel-dev/MaxKB](https://github.com/1Panel-dev/MaxKB)
- GitHub Stars：23.2k
- ライセンス：GPL-3.0
- デプロイ方法：Docker でのセルフホスト、オフラインインストールに対応
- 公式サイト：[https://maxkb.cn](https://maxkb.cn)

### 概要

MaxKB は、オープンソースのエンタープライズ向け AI Agent プラットフォームです。企業のドキュメントをナレッジベースとして整理し、大規模言語モデルと組み合わせて Q&A アシスタントや Agent を構築できます。ドキュメント管理、ナレッジ検索、ワークフロー、アプリケーション連携の機能を備えており、RAG システムをゼロから開発しなくても、社内資料を基にした AI アプリケーションを立ち上げられます。

MaxKB はさまざまなモデルサービスに接続でき、プライベートデプロイにも対応しているため、企業のナレッジと AI アプリケーションを自社で管理したいチームに向いています。

### 注目の機能

**1. 企業ドキュメントとナレッジベースの管理**

さまざまな種類の企業ドキュメントを取り込み、チャンク分割、ベクトル化、検索設定を行って、AI がナレッジベースの資料を基に質問に答えられるようにします。チームはドキュメントの内容や検索設定を管理し、ナレッジベースを継続的に更新できるため、従業員が複数のファイルを行き来して情報を探す時間を減らせます。

![MaxKB でナレッジベースを作成：埋め込みモデルとドキュメントの種類を選択](https://docs.maxkb.pro/img/quick_start/creating_a_kb.png)

**2. AI Agent とワークフローの開発**

ナレッジ Q&A に加えて、MaxKB はビジュアルワークフローでナレッジ検索、モデル呼び出し、外部ツールをつなぎ、複数ステップを実行できる AI Agent を構築できます。チームは要件に応じてタスクの流れを調整し、AI が資料を検索した後に情報の整理、分析、その他の操作まで進められるようにできます。

![MaxKB のビジュアルワークフロー：ナレッジ検索、条件分岐、AI 対話ノード](https://maxkb.pro/images/overview.png)

**3. 複数モデルへの接続とアプリケーション連携**

パブリッククラウドのモデルとプライベートにデプロイしたモデルの両方に接続できるため、企業はデータ要件、利用コスト、モデルの品質に応じて選べます。構築した AI アプリケーションは埋め込みや API を通じて Web サイトや社内システムに組み込み、既存の業務ツールからナレッジ Q&A を利用できるようにすることも可能です。

![MaxKB でモデルを追加：OpenAI などのモデルプロバイダーに接続](https://docs.maxkb.pro/img/quick_start/adding_a_model.png)

### 利用シーンと向いているチーム

MaxKB は、社内ナレッジベース、製品 Q&A、カスタマーサポートアシスタント、技術サポートアシスタントを構築したいチームに向いており、特にビジュアルな設定で AI ナレッジアプリケーションを素早く導入したい企業に適しています。ナレッジベースから Q&A アプリケーションまでを一通り組み立てることに重点があり、ドキュメント解析のコンポーネントを単独で提供するものではありません。

---

## 7. RAGFlow：複雑なドキュメントのための RAG エンジン

**プロジェクト情報**

- GitHub：[https://github.com/infiniflow/ragflow](https://github.com/infiniflow/ragflow)
- GitHub Stars：94.0k
- ライセンス：Apache-2.0
- デプロイ方法：Docker Compose でのセルフホスト
- 公式サイト：[https://ragflow.io](https://ragflow.io)

### 概要

RAGFlow は、企業の複雑なドキュメントの解析、検索、Q&A に重点を置いたオープンソースの RAG エンジンです。PDF、スキャン文書、表、専門マニュアルなどの資料を処理し、ドキュメント理解と検索の技術によって、AI の回答を具体的な出典と結び付けられます。

RAGFlow は Agent とビジュアルワークフローにも対応しており、ナレッジ検索をモデル呼び出しや外部ツールと組み合わせられます。一般的なドキュメント Q&A ツールと比べると、ドキュメント解析の品質、検索の精度、回答の追跡可能性をより重視しています。

### 注目の機能

**1. 複雑なドキュメントの解析と処理**

PDF、Word、Excel、画像、スキャン文書など多様な形式に対応し、ドキュメント内のテキスト、表、レイアウト構造を解析できます。解析後のチャンク分割の結果を確認・調整できるため、複雑なドキュメントの抽出時に情報が抜け落ちたり構造が崩れたりするのを減らせます。

![RAGFlow のドキュメント解析結果：PDF 内の表が独立したチャンクとして認識されている](https://raw.githubusercontent.com/infiniflow/ragflow-docs/main/images/file_chunks.jpg)

**2. ハイブリッド検索と追跡可能な引用**

ベクトル検索、キーワード検索、リランキングを組み合わせ、質問に最も関連するドキュメントの内容を見つけ出します。AI の回答には対応する引用元を添えられるため、ユーザーは元の資料に戻って結果を確認できます。情報の正確さが特に求められる場面に適しています。

![RAGFlow のチャットアシスタント設定：モデルを選択し、データセットを関連付ける](https://raw.githubusercontent.com/infiniflow/ragflow-docs/main/images/configure_chat.jpg)

**3. Agent とワークフローの連携**

RAGFlow はビジュアルワークフローの中でナレッジベース、モデル、ツール呼び出しを組み合わせ、Agent に複数ステップの検索と分析タスクを実行させられます。API も提供しているため、ドキュメント検索と Q&A の機能を既存の業務システムに組み込むことができ、すべての操作を RAGFlow 内で行う必要はありません。

![RAGFlow の Agent テンプレート一覧](https://raw.githubusercontent.com/infiniflow/ragflow-docs/main/images/agent_template_list.jpg)

### 利用シーンと向いているチーム

RAGFlow は、法務、品質管理、製造、技術サポートなど、大量の複雑なドキュメントを扱う企業に向いており、特に契約書、修理マニュアル、スキャン文書、専門技術資料の検索と Q&A に適しています。MaxKB と比べると、注目すべきはドキュメント解析と検索の能力です。選定時には、まず実際のドキュメントで処理結果を試すことをおすすめします。

---

## 8. LiteLLM：モデル呼び出しを一元管理する AI ゲートウェイ

**プロジェクト情報**

- GitHub：[https://github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)
- GitHub Stars：60k
- ライセンス：MIT（コア）；エンタープライズ機能は別ライセンス
- デプロイ方法：Python SDK と、セルフホスト可能な Proxy Server を提供
- 公式サイト：[https://www.litellm.ai](https://www.litellm.ai)

### 概要

LiteLLM は、オープンソースの LLM ゲートウェイです。統一された API インターフェースでさまざまなモデルプロバイダーに接続し、複数の AI アプリケーションが同じ方法でモデルを呼び出せるようにします。モデルのルーティング、仮想キー、予算管理、利用量の集計に対応し、企業が異なるモデルサービスを一元管理するのを助けます。Python SDK としてアプリケーションに直接組み込むことも、独立したプロキシサービスとしてデプロイすることもできます。複数のモデルプロバイダーを同時に使うチームにとって、インターフェースの適合やキー管理にかかる重複作業を減らせます。

### 注目の機能

**1. 統一されたモデル API とルーティング**

LiteLLM はプロバイダーごとに異なる呼び出し方法を OpenAI 互換のインターフェースに統一し、開発者は 1 つの API でさまざまなモデルにアクセスできます。モデルの切り替えや追加は主にゲートウェイ側のプロバイダー設定とルーティングポリシーで管理するため、上位のアプリケーションの変更を抑えられます。

![LiteLLM の管理画面：複数プロバイダーのモデルを一元管理](https://docs.litellm.ai/assets/ideal-img/ui_tour_models.a05de57.1280.png)

**2. キー、予算、コストの管理**

チーム、ユーザー、アプリケーションごとに仮想キーを割り当てられるため、モデルプロバイダーの実際の API キーを直接共有する必要がありません。管理者は予算の上限を設定し、呼び出し量と費用の統計を確認して、プロジェクトごとのモデル支出を管理できます。予算の適用にはデータベースなどの依存サービスを正しく設定する必要があります。

![LiteLLM の仮想キー画面：チームごとにキーを割り当て、予算を設定](https://docs.litellm.ai/assets/ideal-img/ui_tour_keys.c36ccf4.1280.png)

**3. 呼び出しの安定性と稼働監視**

リトライ、フォールバックモデル、ロードバランシング、キャッシュなどの機能を備え、モデルサービスでエラーが発生した際に設定に従ってリクエストの処理を切り替えられます。LiteLLM は外部の監視・ログツールにも接続でき、チームはモデル呼び出し、障害、性能を一か所で確認できます。

![LiteLLM の利用量画面：リクエスト数、費用、トークンの統計](https://docs.litellm.ai/assets/ideal-img/ui_tour_usage.859eee9.1280.png)

### 利用シーンと向いているチーム

LiteLLM は、複数のモデルプロバイダーを同時に使っている、あるいは複数の AI アプリケーションでモデルアクセス、キー、予算を一元管理する必要がある企業の技術チームに向いています。担うのはモデル呼び出しとその管理であり、既存の Agent プラットフォーム、業務システム、AI アプリケーション開発ツールと組み合わせて使えます。

---

## 9. MLflow：AI アプリケーションの評価とモデルライフサイクル管理

**プロジェクト情報**

- GitHub：[https://github.com/mlflow/mlflow](https://github.com/mlflow/mlflow)
- GitHub Stars：28.8k
- ライセンス：Apache-2.0
- デプロイ方法：MLflow Tracking Server をセルフホスト
- 公式サイト：[https://mlflow.org](https://mlflow.org)

### 概要

MLflow は、開発チームが実験を記録し、AI アプリケーションをトレースし、モデルを評価し、モデルのバージョンを管理するためのオープンソースの AI エンジニアリングプラットフォームです。大規模言語モデルや Agent の開発と評価をカバーするだけでなく、従来の機械学習や深層学習プロジェクトの実験追跡、モデルレジストリ、デプロイ管理にも対応しています。

MLflow の狙いは、モデルと AI アプリケーションの開発過程を記録し、比較できるようにし、更新後の結果を継続的に確認できるようにすることです。複数の AI プロジェクトを長期的に保守するチームに向いています。

### 注目の機能

**1. AI Agent の実行トレース**

MLflow はモデルへのリクエスト、ツール呼び出し、実行結果、関連する実行情報を記録し、Agent がタスクを完了した具体的な過程を開発者が確認できるようにします。トレース機能は OpenTelemetry をベースにしており、多くの AI フレームワークに対応しているため、異なるアプリケーションの実行上の問題をまとめて分析しやすくなります。

![MLflow のトレース表示：Agent の実行過程の各ステップを確認](https://raw.githubusercontent.com/mlflow/mlflow/refs/heads/master/assets/readme-tracing.png)

**2. モデル、プロンプト、Agent の評価**

ビルトインおよびカスタムの評価指標に対応し、テストデータを使って異なるモデル、プロンプト、Agent 設定の結果を比較できます。開発チームはプロンプトのバージョン、テスト記録、評価結果を保持し、モデルやアプリケーションを更新する前に品質の変化を確認できます。

![MLflow の GenAI 評価：評価指標ごとに各レコードの合否を確認](https://raw.githubusercontent.com/mlflow/mlflow/refs/heads/master/assets/readme-llm-eval.png)

**3. モデルのバージョンとデプロイの管理**

モデルレジストリ、実験追跡、バージョン管理の機能により、モデルのバージョンを学習や評価の記録と関連付けられます。MLflow は AI Gateway や Agent Server などの機能も提供しており、モデルアクセスの管理と Agent のデプロイに対応し、開発から運用までの流れを管理しやすくします。

![MLflow のプロンプトバージョン比較](https://raw.githubusercontent.com/mlflow/mlflow/refs/heads/master/assets/readme-prompt.png)

### 利用シーンと向いているチーム

MLflow は、データサイエンス、機械学習、AI エンジニアリングのチームを持ち、モデル評価、実験管理、バージョン管理を継続的に行う必要がある企業に向いています。従来の機械学習モデルと LLM アプリケーションの両方を開発するチームなら、種類の異なる AI エンジニアリングの作業を一か所で管理できます。

---

## 10. Langfuse：LLM と Agent の稼働監視プラットフォーム

**プロジェクト情報**

- GitHub：[https://github.com/langfuse/langfuse](https://github.com/langfuse/langfuse)
- GitHub Stars：32.8k
- ライセンス：MIT（コア）；一部のエンタープライズ機能は別途ライセンスが必要
- デプロイ方法：Docker Compose、Kubernetes でのセルフホスト、または Langfuse Cloud
- 公式サイト：[https://langfuse.com](https://langfuse.com)

### 概要

Langfuse は、オープンソースの LLM アプリケーション監視・評価プラットフォームです。大規模言語モデルと Agent の実行過程をトレースし、回答の品質、応答時間、呼び出しコストを分析することを主な目的としています。既存の AI アプリケーションに接続すれば、モデルが実際にどんなタスクを処理したのか、どのステップで問題が起きたのかを開発チームが把握できます。

Langfuse は評価、プロンプトのバージョン管理、利用状況の分析機能も備えており、すでに AI アプリケーションを本番稼働させていて、継続的に効果を観察し改善する必要があるチームに向いています。

### 注目の機能

**1. LLM と Agent の実行トレース**

Langfuse はプロンプト、モデルの応答、ツール呼び出し、実行時間、トークン使用量を記録し、関連するステップを 1 つの完全な実行記録として結び付けます。開発者は最終出力だけを見るのではなく、トレース情報から回答の誤り、呼び出しの失敗、応答の遅延の原因を特定できます。

![Langfuse のトレース画面：1 回の実行における各ステップの入力と出力を確認](https://langfuse.com/images/docs/tracing-overview.png)

**2. AI アプリケーションの評価と実験**

テスト用データセット、実験、評価の機能に対応し、ユーザーフィードバック、人による採点、自動評価の結果を組み合わせて、異なるモデルやプロンプトの効果を比較できます。AI アプリケーションを更新する前にテストすることも、実際の利用記録から品質の問題を継続的に発見することもできます。

![Langfuse のスコア分析：評価器ごとのスコア分布と推移を比較](https://langfuse.com/images/docs/score-analytics-full-dashboard.png)

**3. プロンプトのバージョンとコストの管理**

Langfuse は一元化されたプロンプト管理を提供し、複数のバージョンを保存して、プロンプトを実際の実行記録と関連付けられるため、変更前後の効果を比べやすくなります。呼び出し量、レイテンシ、費用の分析も備えており、モデルやタスクごとのリソース消費を把握できます。

![Langfuse のプロンプト管理：バージョン一覧と本番環境ラベル](https://langfuse.com/images/docs/prompt-management.png)

### 利用シーンと向いているチーム

Langfuse は、すでに AI Agent、カスタマーサポートアシスタント、その他の LLM アプリケーションを導入していて、回答の品質、稼働状況、呼び出しコストを継続的に監視する必要がある開発チームに向いています。従来の機械学習やモデルライフサイクル管理までカバーする MLflow と比べると、LLM アプリケーションのオブザーバビリティ、評価、プロンプトの最適化に焦点を絞っています。

## おわりに

これまでにも、人気のオープンソース AI プラットフォームを多く紹介してきました。その中には GitHub Stars が十数万、あるいは数十万に達し、機能もますます充実しているものがあります。一方、今回まとめた 10 のプロジェクトは、それとは違う選択肢を見せてくれます。知名度はそれほど高くなく、機能の網羅性でも及ばないものもありますが、企業の業務システム開発、プロセス自動化、ナレッジ検索、AI アプリケーションの監視といった具体的な場面では、それぞれに強みがあります。

**GitHub Stars は参考になりますが、実際にツールを選ぶときは、結局のところ自社のニーズに立ち返ることになります。必要な機能をしっかり果たし、その後も使いやすく保守しやすいプロジェクトなら、時間をかけて調べる価値があります。**

⭐ この記事が参考になったら、企業での AI 活用を模索している方にもぜひ共有してください。

💡 関連記事：

- [ビジネス向けオープンソース AI Agent プラットフォーム 10 選：自動化から社内アプリまで](https://www.nocobase.com/ja/blog/open-source-ai-agent-platforms-for-business/)
- [企業内部ツール必須：8 大オープンソース AI Agent プラットフォーム比較](https://www.nocobase.com/ja/blog/8-open-source-ai-agent-platforms-for-internal-tools/)
- [企業向けソフトウェア開発に適したオープンソース AI ノーコードツール 10 選](https://www.nocobase.com/ja/blog/open-source-ai-no-code-tools-enterprise-software-development/)
- [企業向けセルフホストツールおすすめ：データを完全に管理できる20以上のツール](https://www.nocobase.com/ja/blog/20-best-self-hosted-tools-for-enterprises/)
- [NocoBase を活用して既存の企業システムに AI を導入する方法](https://www.nocobase.com/ja/blog/add-ai-to-existing-enterprise-systems-with-nocobase/)
- [RBAC（ロールベースアクセス制御）システムの設計方法](https://www.nocobase.com/ja/blog/how-to-design-rbac-role-based-access-control-system/)
- [GitHub スター数が最も多いAIワークフロープロジェクトTop 12](https://www.nocobase.com/ja/blog/top-12-ai-workflows-projects-with-the-most-github-stars/)
- [GitHub Stars が多い 8 つのオープンソース AI Assistant ツール](https://www.nocobase.com/ja/blog/top-open-source-ai-assistant-tools-github-stars/)
- [NocoBase 3 ドキュメント：リクエストはどのように完了するか（英語）](https://docs.nocobase.com/en/studio/intro/how-a-request-gets-done/)
- [NocoBase Core ドキュメント（英語）](https://docs.nocobase.com/en/core)
