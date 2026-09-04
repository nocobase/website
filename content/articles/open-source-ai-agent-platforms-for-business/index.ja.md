## TL;DR

この 10 のプラットフォームは、大きく 3 つに分けられます。

- NocoBase、Activepieces、Kestra、Windmill は、AI を企業データ、自動化、業務プロセスへ組み込む用途に向いています。
- Coze Studio、Langflow、Dify は、Agent や AI アプリを視覚的に構築する用途に向いています。
- MaxKB、AnythingLLM、RAGFlow は、企業ナレッジベースや RAG に向いています。

企業が構造化された業務データ、権限、社内アプリを管理したい場合は、NocoBase を優先的に検討できます。複数の SaaS を連携し、タスクを自動実行することが中心なら Activepieces が候補になります。Agent や AI ワークフローの構築が主目的なら、Dify、Langflow、Coze Studio から始めるとよいでしょう。非公開文書の Q&A や複雑なナレッジ検索を重視する場合は、MaxKB、AnythingLLM、RAGFlow がより適しています。

## はじめに

AI Agent を日常業務へ取り入れようとする企業は増えています。顧客フォロー、メール整理、タスクリマインド、データ集計など、これまで人が繰り返し処理していた仕事の多くを AI に任せられるようになりつつあります。

![Reddit-uemixv.png](https://static-docs.nocobase.com/Reddit-uemixv.png)

Reddit の [r/smallbusiness](https://www.reddit.com/r/smallbusiness/comments/1vkc911/small_business_owner_using_chatgpt_where_should_i/) では、ある小規模事業者が、普段から ChatGPT を使っており、さらに顧客フォロー、メール分類、Proposal のリマインド、週次サマリーまで AI に任せたいと投稿していました。調べていくうちに n8n、Zapier、API、MCP、さまざまな Agent 構築ツールに出会ったものの、開発経験はなく、いくつかの自動化フローのためだけに新しい技術体系を学ぶつもりもありませんでした。さらに気になっていたのは保守です。数週間かけてアプリを構築したとして、その後も継続的にメンテナンスが必要になり、結局は元の仕事のやり方より複雑になるのではないか、という懸念です。

これは、企業が AI Agent ツールを選ぶときによく直面する問題です。「AI Agent」と検索するだけでも、LangChain、CrewAI、Haystack のような開発者向けフレームワーク、Agent 構築プラットフォーム、自動化ツール、RAG プラットフォーム、さらに業務データ、ページ、権限、プロセスまでまとめて管理できる企業向けアプリケーションプラットフォームなど、さまざまな種類の製品が見つかります。

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---

企業で実際に使うことを前提に、この記事では **セルフホストに対応し、すでにビジュアルアプリ、ワークフロー、ナレッジベース、または業務システム機能を提供しているオープンソース AI Agent プロジェクト 10 選**をまとめました。各プロジェクトについて、基本情報、注目すべき AI Agent 機能、ビジネス用途、どのようなチームに向いているかを順に紹介します。

> 対象範囲を明確にするため、この記事では次の条件を満たすプロジェクトを選んでいます。**コアコードが公開され、継続的にメンテナンスされていること、セルフホストに対応していること、Agent、ツール呼び出し、または AI ワークフロー機能をすでに提供していること、さらにビジュアルアプリ、自動化、ナレッジベース、企業向け業務システムのうち少なくとも 1 種類の機能を備えていること。** 記事内のプロジェクト情報と選定判断は、主に各プロジェクトの公式サイト、GitHub、公式ドキュメントをもとに整理しています。統一環境での性能テストや完全なランキングではありません。

💡 LangChain や CrewAI のような開発フレームワークをより重視し、Agent フレームワークや開発プラットフォームを比較したい場合は、以前の記事も参考にしてください：[社内ツール向けオープンソース AI Agent プラットフォーム 8 選](https://www.nocobase.com/ja/blog/8-open-source-ai-agent-platforms-for-internal-tools)。

各プロジェクトを詳しく見る前に、まず全体の位置付け、適用シーン、技術的なハードルを確認しておくと選びやすくなります。

## 1. 企業アプリケーションと業務自動化

### 1. NocoBase

**公式サイト**：[https://www.nocobase.com/](https://www.nocobase.com/)

**GitHub**：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**GitHub Stars**：23.9K

**関連ドキュメント**

**AI 従業員**：[https://docs.nocobase.com/ja/ai-employees/quick-start](https://docs.nocobase.com/ja/ai-employees/quick-start)

**AI Builder**：[https://docs.nocobase.com/ja/ai-builder](https://docs.nocobase.com/ja/ai-builder)

NocoBase は、オープンソースかつセルフホスト対応の AI ノーコード企業アプリケーションプラットフォームです。主に CRM、チケット管理、IT 管理、承認、その他の社内業務システムの構築に使われます。データモデル、ページ、権限、ワークフローといった企業アプリケーションの基盤機能を提供しながら、AI にアプリの構築やその後の調整へ参加させることができます。システム内には AI 従業員を設定でき、現在の業務データ、ツール、プロセスと組み合わせて、分析、情報処理、タスク実行を行わせることもできます。

![NocoBase1-d3zdlw.png](https://static-docs.nocobase.com/NocoBase1-d3zdlw.png)

#### 主な AI 機能

- **AI + ノーコード構築**：業務要件を自然言語で説明すると、AI がデータテーブルと関連関係、ページ、ワークフロー、ロール権限を作成できます。NocoBase にはノーコードポータルと AI ポータルの 2 種類があり、前者は業務担当者が視覚的に調整を続けやすく、後者は複雑なインタラクションや高度にカスタマイズされたページに向いています。

👉 [AI Portal クイックスタート - NocoBase ドキュメント](https://docs.nocobase.com/ja/ai-builder/ai-portal/)

AI ポータル：

![NocoBase2-fbd2y1.png](https://static-docs.nocobase.com/NocoBase2-fbd2y1.png)

ノーコードポータル：

![NocoBase3-hyg550.png](https://static-docs.nocobase.com/NocoBase3-hyg550.png)

- **AI 従業員と業務実行**：AI を具体的なロールとして日常業務へ参加させ、データ分析、メール整理、情報抽出などを担当させることができます。また、システムのツールやワークフローを呼び出して、データ検索、フォーム入力、業務プロセスの起動も行えます。

👉 [AI 従業員によるツール利用 - NocoBase ドキュメント](https://docs.nocobase.com/ja/ai-employees/features/tools)

![NocoBase4-xxuvt5.png](https://static-docs.nocobase.com/NocoBase4-xxuvt5.png)

- **企業ナレッジベース**：AI 従業員は企業ナレッジベースを自動または必要に応じて検索でき、現在のユーザーロールに基づいてアクセス可能な内容を絞り込めます。カスタマーサポート、営業、社内アシスタントなどが企業独自の知識を利用して業務を行えます。

👉 [NocoBase AI ナレッジベース ドキュメント](https://docs.nocobase.com/ja/ai-employees/knowledge-base/knowledge-base)

![NocoBase5-xtr048.png](https://static-docs.nocobase.com/NocoBase5-xtr048.png)

- **企業権限と実行制御**：AI 従業員は現在のユーザーのデータ権限を引き継ぎます。データ変更など重要な操作は実行前に確認を求める設定もでき、Agent がユーザー本人の権限を超えてアクセスすることを防げます。

👉 [AI 従業員のロールと権限 - NocoBase ドキュメント](https://docs.nocobase.com/ja/ai-employees/permission)

![NocoBase6-2n7cas.png](https://static-docs.nocobase.com/NocoBase6-2n7cas.png)

#### ビジネス活用シーン

- **CRM**：顧客メールや会議記録からコミュニケーション情報を整理し、フォローアップ案を生成し、顧客、連絡先、商談データと組み合わせて営業を支援します。

💡 関連記事：[AI と NocoBase で本番運用できる CRM を構築する方法](https://www.nocobase.com/ja/blog/build-production-ready-crm-with-ai-and-nocobase)

![NocoBase7-rhk2ez.png](https://static-docs.nocobase.com/NocoBase7-rhk2ez.png)

- **カスタマーサポートとチケット管理**：ユーザーから送られた問題を分析し、カテゴリや優先度を判断し、ナレッジベースを使って返信案を生成し、チケット処理プロセスに参加します。

![NocoBase8-12xpon.png](https://static-docs.nocobase.com/NocoBase8-12xpon.png)

- **IT 管理**：従業員の自然言語による説明から IT リクエストの種類、優先度、対応案を識別し、資産、修理、承認などのデータと組み合わせて処理します。

💡 関連記事：[AI と NocoBase で 2 時間以内に企業 IT 運用システムを構築する方法](https://www.nocobase.com/ja/blog/build-it-operations-system-with-ai-nocobase)

![NocoBase9-1b5gyk.png](https://static-docs.nocobase.com/NocoBase9-1b5gyk.png)

- **社内業務アプリ**：購買、承認、プロジェクト管理、運用などのシステムで、職種ごとの AI 従業員を設定し、業務データやワークフローを使って日常タスクを処理できます。

#### 選定のポイント

CRM、カスタマーサポートのチケット管理、IT 管理、承認など、すでに比較的明確な業務要件があり、AI で構築を速めたいものの、AI に業務システム全体をゼロから作らせたくないチームには NocoBase が適しています。データモデル、権限、ワークフローなど、業務システムに必要な基盤機能はプラットフォーム側に用意されています。業務チームはノーコードと AI で大部分を構築し、その後 API やプラグインで拡張できます。長期運用と継続的な改善を前提とした社内システムに特に向いています。

### 2. Activepieces

**公式サイト**：[https://www.activepieces.com/](https://www.activepieces.com/)

**GitHub**：[https://github.com/activepieces/activepieces](https://github.com/activepieces/activepieces)

**GitHub Stars**：24.0K

**関連ドキュメント**

**MCP**：[https://www.activepieces.com/docs/mcp/overview](https://www.activepieces.com/docs/mcp/overview)

#### 製品概要

Activepieces は、オープンソースかつセルフホスト対応の AI 自動化プラットフォームで、企業が現在利用しているアプリ、データ、業務プロセスをつなぐことを主な目的としています。AI Agent、自動化フロー、データを同じ環境で扱えるため、営業、カスタマーサポート、運用など複数ツールをまたいで行う業務に向いています。

💡 関連記事：[WorkBuddy と組み合わせて使えるオープンソースツール 6 選](https://www.nocobase.com/ja/blog/workbuddy-open-source-tools)

![Activepieces1-p5mhpr.png](https://static-docs.nocobase.com/Activepieces1-p5mhpr.png)

#### 主な AI 機能

- **AI Agent を視覚的に作成**：Agent のタスク、モデル、利用可能なツールを設定し、そのまま自動化フロー内で実行できます。既存フローを Agent のツールとして再利用することもできます。

![Activepieces2-usoav3.png](https://static-docs.nocobase.com/Activepieces2-usoav3.png)

- **自然言語による自動化構築**：実現したい作業を文章で説明すると、AI が Agent や自動化フローの生成を支援します。その後、ビジュアルエディタで条件分岐、ループ、コード実行などを追加できます。
- **業務ツールとの接続**：CRM、メール、コラボレーションツール、表計算など 700 以上のアプリと接続できます。MCP を通じて、プラットフォーム内のツールやフローを他の MCP 対応 AI クライアントから呼び出すこともできます。

![Activepieces3-beqsn8.png](https://static-docs.nocobase.com/Activepieces3-beqsn8.png)

#### ビジネス活用シーン

- **営業リード処理**：メールやフォームから新しいリードを取得し、AI が顧客タイプと優先度を判断して CRM を更新し、フォローアップ内容を生成します。
- **カスタマーサポートフロー**：顧客の問い合わせを自動で読み取り、分類、要約、チケット割り当てを行い、サポートシステムと CRM の情報を同期します。
- **日常業務の自動化**：メール整理、情報抽出、表計算やデータベースの同期を行い、複数システムのデータをもとに日報、週報、業務通知を自動生成します。

#### 選定のポイント

Activepieces は、複数の SaaS をすでに利用している一方で、開発リソースが限られている中小チームや業務部門に向いています。営業、マーケティング、カスタマーサポート、運用などで、複数システム間のデータ移動、メッセージ送信、フォローアップが頻繁に発生する場合は、まずビジュアルフローから始め、業務が複雑になった段階で API やカスタム連携を追加できます。

### 3. Kestra

**公式サイト**：[https://kestra.io/](https://kestra.io/)

**GitHub**：[https://github.com/kestra-io/kestra](https://github.com/kestra-io/kestra)

**GitHub Stars**：28.0K

**関連ドキュメント**

**AI Copilot**：[https://kestra.io/docs/ai-tools/ai-copilot](https://kestra.io/docs/ai-tools/ai-copilot)

#### 製品概要

Kestra は、オープンソースかつセルフホスト対応のワークフローオーケストレーションプラットフォームで、データ、AI、インフラ関連の自動化フローを管理するために使われます。AI Agent はワークフロー内のタスクとして直接実行でき、目的に応じてツールを呼び出したり、他のタスクを実行したり、既存フローを起動したりできます。

![Kestra1-qepx6c.png](https://static-docs.nocobase.com/Kestra1-qepx6c.png)

#### 主な AI 機能

- **AI Agent とワークフローの連携**：AI Copilot を使って自然言語からワークフローを生成・変更できます。また、Agent を既存フローに直接組み込み、モデル、メモリ、ツール、Kestra 上の既存タスクやフローを利用させ、実行結果に応じて次の処理を決定できます。

![Kestra2-un0lak.png](https://static-docs.nocobase.com/Kestra2-un0lak.png)

- **ビジュアルとコードの併用**：ビジュアル画面からフローを作成・調整でき、複雑な要件は YAML、Python、Docker、カスタムスクリプトで拡張できます。

![Kestra3-favk4g.png](https://static-docs.nocobase.com/Kestra3-favk4g.png)

- **実行状況を追跡可能**：Agent と通常タスクは同じ実行基盤を使うため、実行状態、ログ、失敗履歴を一元的に確認でき、トラブルシューティングや保守がしやすくなります。

#### ビジネス活用シーン

- **データ処理の自動化**：データ状態に応じて次の処理を選択し、既存フローを呼び出してクレンジング、分析、集計を行います。
- **IT・運用フロー**：アラートやシステムイベントを分析し、その後にチェック、通知、その他の処理を実行します。
- **複雑な業務・AI フロー**：モデル、ツール、承認、データ処理、システム間タスクを組み合わせ、多段階の処理や動的判断が必要なフローを実装します。

#### 選定のポイント

Kestra は、すでにある程度の自動化基盤があり、開発者、データ担当、運用担当が参加するチームに向いています。フローが長くなり、タスク依存、失敗時の再試行、実行状態、多段階の AI 判断を扱う必要が出てくると、オーケストレーション機能の価値が高まります。単純な業務自動化を数本だけすばやく作りたい小規模チームには、ここまで包括的なワークフロー基盤は必要ない場合があります。

### 4. Windmill

**公式サイト**：[https://www.windmill.dev/](https://www.windmill.dev/)

**GitHub**：[https://github.com/windmill-labs/windmill](https://github.com/windmill-labs/windmill)

**GitHub Stars**：17.7K

**関連ドキュメント**

**AI Agent アプリ**：[https://www.windmill.dev/use-cases/ai-agents](https://www.windmill.dev/use-cases/ai-agents)

#### 製品概要

Windmill は、オープンソースかつセルフホスト対応の開発・自動化プラットフォームで、スクリプト、API、ワークフロー、社内アプリを同じ環境で実行できます。ビジュアルオーケストレーションに加えて Python、TypeScript、Go、SQL などのコードも利用できるため、一定の技術力があるチームに向いています。

![Windmill1-u4c2db.png](https://static-docs.nocobase.com/Windmill1-u4c2db.png)

#### 主な AI 機能

- **Agent をワークフローへ組み込む**：AI Agent をフロー内の 1 ステップとして実行し、条件分岐、承認、エラー処理などのノードと組み合わせ、AI 判断が必要なタスクを処理できます。

![Windmill2-86jcks.png](https://static-docs.nocobase.com/Windmill2-86jcks.png)

- **既存の技術資産を利用**：Agent は Windmill 内にある既存スクリプト、データベース、API、他のワークフローを利用できます。MCP ツールも接続でき、企業内で蓄積されたコードや内部サービスをそのまま Agent に組み込めます。

![Windmill3-jejm47.png](https://static-docs.nocobase.com/Windmill3-jejm47.png)

- **権限、承認、実行履歴**：Agent がアクセス・実行できるリソースを制限し、重要操作の前に人による確認を追加できます。また、各実行のツール呼び出し、入出力、ログ、実行状態を確認できます。

#### ビジネス活用シーン

- **IT・運用自動化**：アラートやシステム状態から問題を分析し、スクリプトを呼び出して確認、処理、通知を実行します。
- **データ処理・分析**：データベース検索や既存データスクリプトを実行し、Agent が結果を分析して後続フローを起動します。
- **社内 AI ツール**：Agent、バックエンドスクリプト、社内アプリ画面を組み合わせ、データアシスタント、運用ツール、その他の社内アプリを構築します。

#### 選定のポイント

Windmill は、すでに開発者、データ担当、運用担当がいるチームにより向いています。社内にスクリプト、データベース、API、内部サービスが多くあり、それらを活用して Agent や自動化を構築したい場合は使いやすい選択肢です。一方、技術担当者がおらず、ビジュアル操作だけで簡単なフローを数本作りたいチームには、開発プラットフォームとしての性格が重く感じられる可能性があります。

## 2. ビジュアル AI Agent 構築プラットフォーム

### 5. Coze Studio

**公式サイト**：[https://www.coze.cn/home](https://www.coze.cn/home)

**GitHub**：[https://github.com/coze-dev/coze-studio](https://github.com/coze-dev/coze-studio)

**GitHub Stars**：21.5K

**AI Agent 関連ドキュメント**：[https://github.com/coze-dev/coze-studio/wiki/1.-What-is-Coze-Studio](https://github.com/coze-dev/coze-studio/wiki/1.-What-is-Coze-Studio)

#### 製品概要

Coze Studio は、ByteDance がオープンソース化したオールインワンの AI Agent 開発プラットフォームです。Agent の作成、デバッグ、デプロイを視覚的に行えることが特徴で、モデル、ナレッジ、ツールを直接組み合わせながら、カスタマーサポート、ナレッジ Q&A、コンテンツアシスタントなどの AI アプリをすばやく構築できます。

![Coze1-x3ltv6.png](https://static-docs.nocobase.com/Coze1-x3ltv6.png)

#### 主な AI 機能

- **Agent とワークフローのビジュアル構築**：画面上でモデル、プロンプト、ツールを設定でき、キャンバス上で条件分岐やデータ処理を含む多段階フローも構築できます。

![Coze2-tarjfy.png](https://static-docs.nocobase.com/Coze2-tarjfy.png)

- **RAG とナレッジベース**：企業文書やナレッジデータを接続し、指定された内容をもとに Agent が質問へ回答したり、タスクを処理したりできます。
- **プラグインと外部ツール**：Agent はプラグイン経由で外部サービスを呼び出し、検索、データ照会、データ処理などの機能を実行プロセスへ組み込めます。

![Coze3-abbyw4.png](https://static-docs.nocobase.com/Coze3-abbyw4.png)

- **開発、デバッグ、デプロイ**：Agent の作成、テスト、デプロイを同じプラットフォーム内で行えるため、複数ツールを行き来する必要を減らせます。

#### ビジネス活用シーン

- **AI カスタマーサポート**：ナレッジベースを利用して製品、サービス、アフターサポートに関する質問へ回答し、プラグイン経由で追加の業務情報を照会します。
- **企業ナレッジアシスタント**：社内文書やナレッジベースをもとに、従業員向け Q&A、資料検索、情報整理を行います。
- **コンテンツ・マーケティング支援**：検索、コンテンツ生成、ワークフローを組み合わせ、情報収集、内容整理、初稿作成を行います。

#### 選定のポイント

AI Agent をこれから試し始めるチームで、専任の AI 開発者を置かずにカスタマーサポート、ナレッジ Q&A、コンテンツアシスタントなどをすばやく作りたい場合、Coze Studio は比較的始めやすい選択肢です。プロダクト、運用、業務担当者がまずビジュアル操作でアイデアを動かし、その後必要に応じてナレッジベース、プラグイン、より複雑なフローを追加できます。

### 6. Langflow

**公式サイト**：[https://www.langflow.org/](https://www.langflow.org/)

**GitHub**：[https://github.com/langflow-ai/langflow](https://github.com/langflow-ai/langflow)

**GitHub Stars**：153.9K

**関連ドキュメント**

**Agent**：[https://docs.langflow.org/agents](https://docs.langflow.org/agents)

#### 製品概要

Langflow は、Agent や AI ワークフローを構築するためのオープンソースのビジュアル AI アプリ開発プラットフォームです。モデル、ツール、データ、他の Agent をコンポーネント形式で組み合わせつつ、Python による拡張性も残しているため、試行錯誤しながら AI アプリを構築したい場面に向いています。

![Langflow1-dbxpex.png](https://static-docs.nocobase.com/Langflow1-dbxpex.png)

#### 主な AI 機能

- **ドラッグ＆ドロップ構築とマルチ Agent 構成**：ビジュアルキャンバス上で Agent を設定し、モデル、プロンプト、ツール、その他のコンポーネントを接続してフローを作成できます。コンポーネントやフロー自体を Agent のツールとして使うこともでき、複数の Agent に検索、分析、整理などの役割を分担させることもできます。
- **MCP 対応**：外部 MCP サービスへ接続できるほか、Langflow で構築したフローを他の MCP 対応 AI アプリから呼び出せるようにすることもできます。

![Langflow2-p8b1dx.png](https://static-docs.nocobase.com/Langflow2-p8b1dx.png)

- **モデルと Python 拡張**：異なるモデルやデータソースを自由に組み合わせられます。既存コンポーネントで足りない要件は、カスタム Python コンポーネントを使って企業独自の API や処理ロジックへ接続できます。

#### ビジネス活用シーン

- **ナレッジ・文書アプリ**：社内文書、検索、モデル、Agent を組み合わせ、ナレッジ Q&A、資料分析、情報抽出を行います。
- **マルチ Agent フロー**：複数の Agent に検索、分析、整理などを分担させ、1 つの完全なフローへつなげます。
- **AI アプリのプロトタイプ**：カスタマーサポート、リサーチアシスタント、コンテンツ生成などのアイデアをすばやく検証し、API 経由で既存製品へ組み込みます。

#### 選定のポイント

Langflow は、ある程度の技術担当者が参加し、異なるモデルや Agent 構成を頻繁に試したいチームに向いています。プロダクトやデータ担当者がまずキャンバス上でフローを作り、開発者が Python、カスタムコンポーネント、API で複雑な部分を補えます。プロトタイプや継続的な実験には適していますが、技術担当者がまったくおらず、固定された業務フローだけをすばやく本番投入したいチームでは、運用後半に開発力への依存が高くなる可能性があります。

### 7. Dify

**公式サイト**：[https://dify.ai/](https://dify.ai/)

**GitHub**：[https://github.com/langgenius/dify](https://github.com/langgenius/dify)

**GitHub Stars**：154.0K

**関連ドキュメント**

**公式ドキュメント**：[https://docs.dify.ai/](https://docs.dify.ai/)

Dify は、Agent、ナレッジアシスタント、より複雑な AI ワークフローを構築できるオープンソースの AI アプリ開発プラットフォームです。アプリ作成、デバッグ、公開、その後の運用管理まで一連のプロセスをカバーしており、1 つのプラットフォーム内で複数の AI アプリを継続的に開発したいチームに向いています。

![Dify1-835tx4.png](https://static-docs.nocobase.com/Dify1-835tx4.png)

#### 主な AI 機能

- **Agent とワークフロー構築**：ビジュアル画面で Agent のモデル、指示、ツール、ナレッジベースを設定し、キャンバス上で条件分岐、ナレッジ検索、ツール呼び出し、人による入力などを含む多段階フローを構築できます。

![Dify2-9eaiyv.png](https://static-docs.nocobase.com/Dify2-9eaiyv.png)

- **RAG とナレッジ処理**：PDF、PPT などの文書からナレッジベースを作成でき、内容のクリーニング、分割、インデックス作成、検索テストなどの処理機能を提供します。

![Dify3-xs0trk.png](https://static-docs.nocobase.com/Dify3-xs0trk.png)

- **モデルとプラグイン拡張**：複数のモデルプロバイダーを接続でき、プラグインを通じて新しいツール、データソース、トリガー、Agent 機能を追加できます。
- **公開と運用管理**：構築したアプリを Web アプリや API として公開でき、ログ、フィードバック、遅延、呼び出し状況も確認できます。

#### ビジネス活用シーン

- **AI カスタマーサポートとナレッジアシスタント**：企業ナレッジベースと外部ツールを組み合わせ、顧客からの問い合わせや社内ナレッジ検索へ対応します。
- **業務情報処理**：情報抽出、分類、分析、生成、ツール呼び出しを 1 つの完全なフローへまとめます。
- **AI アプリの迅速な公開**：構築した Agent やワークフローをアプリまたは API として公開し、既存製品や業務システムへ組み込みます。

#### 選定のポイント

チームが単一 Agent の試用段階を超え、カスタマーサポート、ナレッジアシスタント、コンテンツ処理など複数の AI アプリを継続的に作る段階に入っている場合、Dify は適しています。業務・プロダクト担当者がビジュアル操作で大部分を設定し、開発者がいる場合はプラグイン、API、より深いシステム連携へ進めます。複数の AI プロジェクトを 1 つのプラットフォームで管理したい中小企業やプロダクトチームでは、複数ツールを個別に維持するより扱いやすいでしょう。

## 3. 企業ナレッジと RAG Agent

### 8. MaxKB

**公式サイト**：[https://maxkb.cn/](https://maxkb.cn/)

**GitHub**：[https://github.com/1Panel-dev/MaxKB](https://github.com/1Panel-dev/MaxKB)

**GitHub Stars**：22.6K

**関連ドキュメント**

**公式ドキュメント**：[https://maxkb.cn/docs/v2/index.html](https://maxkb.cn/docs/v2/index.html)

#### 製品概要

MaxKB は、オープンソースかつセルフホスト対応の企業向け Agent プラットフォームで、企業ナレッジベースやナレッジ Q&A から AI アプリを始めたいケースに向いています。基本的な RAG に加えて、ビジュアルワークフローとツール呼び出しも提供しており、カスタマーサポートやオフィスアシスタントなどへ拡張できます。

![MaxKB1-fgub0k.png](https://static-docs.nocobase.com/MaxKB1-fgub0k.png)

#### 主な AI 機能

- **企業ナレッジベースと RAG**：文書アップロードや Web コンテンツ取得に対応し、分割、ベクトル化、ナレッジ検索を行い、社内資料や専門知識の Q&A に利用できます。
- **ビジュアルワークフローとツール呼び出し**：キャンバス上で AI 会話、ナレッジ検索、条件分岐、フォーム、文書抽出などのノードを組み合わせられます。MCP サービスも接続でき、モデルに外部ツールを呼び出させることができます。
- **複数モデルとローカルデプロイ**：OpenAI、Claude、Gemini、DeepSeek、通義千問などの公開モデルに加えて、Ollama、vLLM などのローカルモデルにも対応します。
- **既存システムへの組み込み**：作成した Agent は公開リンク、埋め込みコード、API を通じて Web サイトや社内アプリへ組み込めます。

#### ビジネス活用シーン

- **AI カスタマーサポート**：製品ナレッジ、FAQ、業務資料を Agent へ接続し、顧客問い合わせへ対応します。
- **専門ナレッジアプリ**：金融、教育、研究などで、業界資料に基づく検索、整理、分析を行います。

#### 選定のポイント

**大量の企業文書やナレッジ資料をすでに保有し、ナレッジ型 AI Agent を比較的短期間で構築したいチーム**に向いています。ビジュアルワークフローとナレッジベースは比較的扱いやすく、ローカルデプロイやローカルモデルにも対応しているため、社内ナレッジ利用、データ管理、外部システム連携に要件がある企業にも適しています。

### 9. AnythingLLM

**公式サイト**：[https://anythingllm.com/](https://anythingllm.com/)

**GitHub**：[https://github.com/Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)

**GitHub Stars**：65.4K

**関連ドキュメント**

**Agent Flow**：[https://docs.anythingllm.com/agent-flows/overview](https://docs.anythingllm.com/agent-flows/overview)

#### 製品概要

AnythingLLM は、オープンソースでローカルファーストの AI アプリケーションです。主に非公開文書や社内ナレッジを使った AI アシスタントの構築に利用されます。デスクトップ版とセルフホスト版があり、GUI も比較的充実しているため、複雑な開発環境を先に整えなくても利用を始められます。

![AnythingLLM1-5fia5p.png](https://static-docs.nocobase.com/AnythingLLM1-5fia5p.png)

#### 主な AI 機能

- **非公開文書と RAG**：PDF、Word、テキストなどの資料を個別ワークスペースへ追加し、指定された内容に基づいて AI に回答させ、参照元も保持できます。

![AnythingLLM2-4h817b.png](https://static-docs.nocobase.com/AnythingLLM2-4h817b.png)

- **Agent Flow**：Web 取得、API 呼び出し、モデル指示、ファイル読み書きなどの処理をビジュアルに組み合わせ、固定された再利用可能な処理フローを構築できます。
- **マルチユーザーと権限**：セルフホスト版は複数ユーザーと権限管理に対応し、チームメンバーごとに独立したワークスペースやナレッジアクセス範囲を設定できます。

#### ビジネス活用シーン

- **社内ナレッジ・文書アシスタント**：社内規程、製品資料、研修文書、契約書、レポートをもとに Q&A、要約、情報抽出を行います。
- **リサーチと資料整理**：社内文書、Web 情報、ツール呼び出しを組み合わせ、情報収集、整理、分析を行います。

#### 選定のポイント

AnythingLLM は、個人、小規模チーム、またはまず部門内で非公開 AI アシスタントを試したい企業に向いています。専任の AI 開発者がいなくても、文書 Q&A や資料整理から比較的すばやく始められます。主な目的が複雑な業務フローの構築ではなく、社内ナレッジを安全に AI へ利用させることなら、より軽量な選択肢です。

### 10. RAGFlow

**公式サイト**：[https://ragflow.io/](https://ragflow.io/)

**GitHub**：[https://github.com/infiniflow/ragflow](https://github.com/infiniflow/ragflow)

**GitHub Stars**：89.7K

**関連ドキュメント**

**Agent ガイド**：[https://github.com/infiniflow/ragflow/tree/main/docs/guides/agent](https://github.com/infiniflow/ragflow/tree/main/docs/guides/agent)

#### 製品概要

RAGFlow は、複雑な文書処理と企業ナレッジ検索に重点を置く、オープンソースの RAG・AI Agent プラットフォームです。一般的なナレッジ Q&A ツールと比べて、文書形式が複雑で、ナレッジ量が多く、検索精度や参照根拠を重視するシーンに向いています。

💡 関連記事：[OpenClaw を実際の業務で使うには？おすすめオープンソースツール 5 選](https://www.nocobase.com/ja/blog/openclaw-open-source-enterprise-tools)

![AnythingLLM2-lvcqjv.png](https://static-docs.nocobase.com/AnythingLLM2-lvcqjv.png)

#### 主な AI 機能

- **複雑な文書理解**：PDF、Word、PPT、表計算、画像、長文書を処理し、検索や分析に利用できる情報を非構造化データから抽出します。
- **高精度 RAG**：ベクトル検索、キーワード検索、リランキング、メタデータフィルタリングを組み合わせ、検索精度と追跡可能性を高めます。
- **Agent ワークフロー**：ビジュアルキャンバス上で検索、モデル、条件分岐、ループ、分類などを組み合わせられます。マルチ Agent、プランニング、リフレクションなど、より複雑なフローにも対応します。

![RAGFlow2-3r2pqb.png](https://static-docs.nocobase.com/RAGFlow2-3r2pqb.png)

- **ツールとデータソース連携**：Agent は外部ツールを呼び出せ、MCP にも対応します。また、Confluence、S3、Notion、Google Drive などから企業ナレッジを同期できます。

![RAGFlow3-tlomcm.png](https://static-docs.nocobase.com/RAGFlow3-tlomcm.png)

#### ビジネス活用シーン

- **複雑な企業ナレッジベース**：大量の規程、技術マニュアル、レポート、専門資料を横断して検索できる統合ナレッジシステムを構築します。
- **法務・コンプライアンス分析**：法令、契約書、事例、社内資料から根拠を検索し、出典付きの分析結果を生成します。
- **リサーチ・意思決定支援**：社内データと外部資料をまとめ、Agent に検索、分析、レポート生成を行わせます。

#### 選定のポイント

RAGFlow は、ナレッジ量が多く、文書が複雑で、一定の技術リソースを持つチームに向いています。法務、製造、技術サポート、研究などで、長文書、表、画像、専門情報が多く、検索精度や参照根拠を特に重視する場合に強みがあります。

## まとめ

**多くの AI Agent 製品では機能が重なり始めています。ビジュアルワークフロー、ナレッジベース、MCP、ツール呼び出しは、ますます多くのプラットフォームで利用できるようになっています。実際に選ぶときは、これらの機能を既存の業務へ無理なく組み込めるか、そして新たにどれだけの運用・保守負担が発生するかを考えることが重要です。**

この記事が選択肢を絞り込む参考になれば幸いです。AI Agent ツールを探している方やチームにもぜひ共有してください。

AI と NocoBase を使って同様の企業アプリを構築したい場合は、次の実例も参考にできます。

👉 [AI + NocoBase で CRM を構築](https://www.nocobase.com/ja/blog/build-production-ready-crm-with-ai-and-nocobase)

👉 [AI + NocoBase で企業 IT 運用システムを構築](https://www.nocobase.com/ja/blog/build-it-operations-system-with-ai-nocobase)
