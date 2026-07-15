ノーコードツールでデータを管理するとき、多くのチームはまず Airtable、Notion、Google Sheets で顧客、注文、プロジェクトデータを管理し始めます。しかし、データテーブル、関連関係、権限、自動化ワークフローが増えていくと、シンプルな表計算ツールだけでは次第に維持しにくくなります。

AI の発展により、新しい試みも生まれています。

Reddit の [「Claude + Airtable」と「Claude + Sheets」のワークフロー](https://www.reddit.com/r/Airtable/comments/1t4x393/the_claude_airtable_vs_claude_sheets_workflow/) に関する議論では、あるユーザーが実際の利用経験を共有しています。

![Reddit-bkbhub.png](https://static-docs.nocobase.com/Reddit-bkbhub.png)

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---

Google Sheets と Claude は、すばやい構築や軽量なワークフローに向いています。一方で、複数テーブルの関連、複数のビュー、メンバー権限、複雑なデータ構造が関わる場合は、構造化データを Airtable やデータベースに置き、Claude でデータ処理、情報補完、ワークフロー自動化を行うほうが整理しやすく、保守もしやすくなります。ただし、Airtable は商用のクローズドソース製品です。予算が限られているチームや、セルフホスト、データ管理権限、長期的な拡張性を重視するチームには、必ずしも適しているとは限りません。

そこで本記事では、複雑なリレーションモデルに適した 5 つのオープンソース AI ノーコードツールを取り上げ、それぞれの複雑なリレーションモデル対応力と AI 機能を中心に紹介します。

## 1. NocoBase

**CRM、ERP、注文管理、プロジェクト管理、承認、チケット管理など、複雑な企業業務システムの構築に適しています。**

* 公式サイト：[https://www.nocobase.com/ja/](https://www.nocobase.com/ja/)
* GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)
* GitHub Stars：23.3k
* ドキュメント：[https://docs.nocobase.com/ja/](https://docs.nocobase.com/ja/)

![NocoBase1-cerpp6.png](https://static-docs.nocobase.com/NocoBase1-cerpp6.png)

NocoBase は、オープンソースの AI ノーコードプラットフォームです。データモデルを基盤にし、業務データとページ表示を分けて管理できます。チームはまず顧客、連絡先、注文、商品などのデータテーブルと関連関係を作成し、その後 WYSIWYG の画面でページや業務機能を設定できます。プラグインベースのアーキテクチャを採用しているため、実際のニーズに合わせて機能を追加したり、新しく開発したりすることもできます。

### 複雑なリレーションモデル対応力

NocoBase は、一対一、一対多、多対一、多対多の関係をサポートしています。多対多の関係を扱う場合は、中間テーブルを使って 2 つのデータテーブルを接続し、中間テーブルに数量、価格、ステータス、日時などの業務フィールドを保存できます。

注文システムを例にすると、顧客、注文、商品、注文明細の 4 つのテーブルを作成できます。注文明細は注文と商品の中間テーブルとして機能し、購入数量、成約単価、割引、小計を記録します。これにより、注文と商品の多対多関係を保ちながら、各取引の具体的な情報も保存できます。

画面上では、関連データをドロップダウンセレクター、データセレクター、サブフォーム、サブテーブル、サブ詳細などのコンポーネントで表示・管理できます。サブフォームは関連レコードを直接編集する場合に適しており、サブテーブルは一対多または多対多のデータをまとめて管理する場合に向いています。

![NocoBase2-eq4r6p.png](https://static-docs.nocobase.com/NocoBase2-eq4r6p.png)

関連フィールドのドキュメント：[https://docs.nocobase.com/ja/data-sources/data-modeling/collection-fields/associations/](https://docs.nocobase.com/ja/data-sources/data-modeling/collection-fields/associations/)

多対多関係のドキュメント：[https://docs.nocobase.com/ja/data-sources/data-modeling/collection-fields/associations/m2m/](https://docs.nocobase.com/ja/data-sources/data-modeling/collection-fields/associations/m2m/)

関連フィールドコンポーネント：[https://docs.nocobase.com/ja/interface-builder/fields/association-field](https://docs.nocobase.com/ja/interface-builder/fields/association-field)

### AI 構築機能

NocoBase は、Claude Code、Codex、Cursor などの AI Agent と連携し、自然言語に基づいてシステム設定を行うことができます。

たとえば、「CRM を構築しています。データモデルの設計と構築を手伝ってください」と入力すると、AI は顧客、連絡先、商談、注文などのデータテーブルを作成し、フィールドを追加して関連関係を設定できます。データモデリング Skill は、データテーブルの変更や削除、フィールド追加、既存の関連関係の調整にも対応しています。

![NocoBase3-ruwwb0.png](https://static-docs.nocobase.com/NocoBase3-ruwwb0.png)

データモデリング以外にも、NocoBase Skills は次のような内容をカバーしています。

* ページとブロックの設定；
* ワークフローの作成と診断；
* ロールと権限の設定；
* プラグイン管理；
* リリース、移行、バックアップ；
* バージョン保存と復元。

AI が作成したデータモデル、ページ、ワークフロー、権限は、ノーコード画面で引き続き確認・修正できます。チームはまず AI に基本構造を作成させ、その後、業務担当者がフィールド、ページレイアウト、操作の細部を調整できます。

AI 構築ドキュメント：[https://docs.nocobase.com/ja/ai-builder](https://docs.nocobase.com/ja/ai-builder)

AI データモデリングドキュメント：[https://docs.nocobase.com/ja/ai-builder/data-modeling](https://docs.nocobase.com/ja/ai-builder/data-modeling)

![NocoBase4-31yvjv.png](https://static-docs.nocobase.com/NocoBase4-31yvjv.png)

### AI 従業員

システム構築後、AI は AI 従業員として日常業務にも参加できます。

AI 従業員は、現在のページ、データブロック、データ構造、選択中の内容を読み取り、適切な Skill を呼び出して検索、分析、入力、設定、コンテンツ生成などを実行できます。ワークフローに参加し、業務プロセスの中で情報を処理したり、タスクを実行したりすることもできます。

![NocoBase5-xa2w2r.png](https://static-docs.nocobase.com/NocoBase5-xa2w2r.png)

たとえば、チームは AI 従業員に次のような作業を依頼できます。

* 顧客データや営業データを分析する；
* フォーム内容を整理・補完する；
* 現在のページデータに基づいてレポートを生成する；
* ワークフロー内で文書を処理したり、タスク割り当てを補助したりする；
* 企業ナレッジベースと組み合わせて業務上の質問に回答する。

AI 構築と AI 従業員は役割が異なります。AI 構築はシステムの作成と調整に使われ、AI 従業員はすでに稼働しているシステム内で業務処理を支援します。

AI 従業員ドキュメント：[https://docs.nocobase.com/ja/ai-employees](https://docs.nocobase.com/ja/ai-employees)

### 外部データソースとデプロイ

NocoBase のメインデータベースは MySQL、PostgreSQL、MariaDB に対応しています。データソースプラグインを使うことで、外部 MySQL、MariaDB、PostgreSQL、Microsoft SQL Server、Oracle、REST API、その他の NocoBase アプリケーションにも接続できます。

外部データベースに接続すると、NocoBase は既存のデータテーブルとフィールドを読み取り、チームはそのデータをもとにページやその他の業務機能を設定できます。外部データベースのテーブル構造は元のデータベース側で変更し、その後 NocoBase に同期する必要があります。外部データソースプラグインごとに対応バージョンが異なるため、利用前に具体的なバージョン要件を確認する必要があります。

NocoBase コミュニティ版は完全なソースコードを提供し、プライベートデプロイに対応しています。また、アプリケーション数、ユーザー数、データ量に制限はありません。一部の外部データソース、エンタープライズ管理、高度な機能は商用版に含まれています。

データソース管理ドキュメント：[https://docs.nocobase.com/ja/data-sources/data-source-manager/](https://docs.nocobase.com/ja/data-sources/data-source-manager/)

外部データベースドキュメント：[https://docs.nocobase.com/ja/data-sources/data-source-manager/external-database](https://docs.nocobase.com/ja/data-sources/data-source-manager/external-database)

### 適用シーン

NocoBase は、CRM、営業管理、ERP、販売・在庫管理、注文・在庫管理、プロジェクト管理、承認、チケット管理、契約管理、サプライヤー管理などの企業業務システムに適しています。データテーブルが多く、関係が複雑で、データ構造やシステム機能を長期的に調整する必要があるプロジェクトに特に向いています。

![NocoBase6-n20xki.png](https://static-docs.nocobase.com/NocoBase6-n20xki.png)

## 2. Baserow

**Excel、Google Sheets、Airtable からオープンソースデータベースへ移行したいチームに適しています。**

* 公式サイト：[https://baserow.io/](https://baserow.io/)
* GitHub：[https://github.com/baserow/baserow](https://github.com/baserow/baserow)
* GitHub Stars：5.3k
* ドキュメント：[https://baserow.io/user-docs/](https://baserow.io/user-docs/)

Baserow は、データベース、業務アプリ、自動化ワークフロー、AI Agent を構築できるオープンソース AI ノーコードプラットフォームです。表計算ソフトに近い操作感を保っており、ユーザーはデータテーブルから始めて、フィールド関連、ビュー、フォーム、アプリページを段階的に追加できます。

![Baserow1-jne5a8.png](https://static-docs.nocobase.com/Baserow1-jne5a8.png)

### 複雑なリレーションモデル対応力

Baserow は主に「他のテーブルへのリンク」フィールドで異なるデータテーブルを接続します。デフォルトでは、1 つのフィールドが複数のレコードに関連付けられるため、多対多関係に適しています。複数選択をオフにすると、一対一関係に制限できます。関連を作成すると、別のテーブルに逆方向の関連フィールドを自動生成することもできます。

関連関係を作成した後は、ルックアップで関連テーブルのフィールドを読み取り、ロールアップフィールドで件数、合計、平均、最大値、最小値を計算し、さらに数式と組み合わせて処理できます。

注文と商品の間で購入数量、価格、割引を記録する必要がある場合は、「注文明細」の中間テーブルを別途作成し、注文テーブルと商品テーブルにそれぞれ関連付けることができます。

![Baserow2-4tr7e7.png](https://static-docs.nocobase.com/Baserow2-4tr7e7.png)

### AI 機能

Baserow の AI アシスタント Kuma は、自然言語に基づいてデータテーブル、フィールド、ビュー、関連関係を作成・修正できます。数式の生成、フィルターやグループの追加、既存データの整理も可能です。

![Baserow3-l9qhfy.png](https://static-docs.nocobase.com/Baserow3-l9qhfy.png)

Kuma は、完全なアプリページを生成し、データソースを接続し、フォームやアクションを追加し、その後の指示に基づいてページ構造やスタイルを調整することもできます。

さらに、AI プロンプトフィールドは、テーブル内容の要約、分類、情報抽出を行い、元フィールドが変更されたときに結果を再生成できます。この機能は Premium 以上のプランに含まれています。

Kuma AI ドキュメント：[https://baserow.io/user-docs/ai-assistant](https://baserow.io/user-docs/ai-assistant)

### 適用シーン

Baserow は、軽量 CRM、プロジェクト・タスク管理、コンテンツライブラリ、資産ライブラリ、表計算から構造化データ管理へ移行するシーンに適しています。AI 機能を備えたオープンソース Airtable 代替に近く、表計算に近い操作感とセルフホストを重視するチームに向いています。

## 3. Teable

**表計算に近い操作感を保ちながら、PostgreSQL をデータ基盤として使いたいチームに適しています。**

* 公式サイト：[https://teable.ai/](https://teable.ai/)
* GitHub：[https://github.com/teableio/teable](https://github.com/teableio/teable)
* GitHub Stars：21.5k
* ドキュメント：[https://help.teable.ai/en/](https://help.teable.ai/en/)

Teable は PostgreSQL をベースにしたノーコードデータベースで、操作感は Airtable に近いものです。ユーザーは表でデータを管理し、関連フィールド、計算フィールド、アプリページ、自動化ワークフローを段階的に追加できます。

![Teable1-3fx2sm.png](https://static-docs.nocobase.com/Teable1-3fx2sm.png)

### 複雑なリレーションモデル対応力

Teable の関連フィールドは、一対一、一対多、多対一、多対多の関係をサポートし、単方向または双方向の関連も設定できます。関連を作成した後は、ルックアップ、ロールアップ、条件付きルックアップ、条件付きロールアップを使って、異なるテーブル間のデータを読み取ったり集計したりできます。

たとえば、顧客と注文、プロジェクトとタスク、学生とコースを関連付けることができます。注文シーンでは、注文明細を使って商品、数量、価格を記録することもできます。

### AI 機能

Teable AI は現在のデータを分析し、グラフやレポートを生成できます。また、データテーブル、フィールド、ビュー、アプリ、自動化ワークフローを作成・修正することもできます。ユーザーは必要なデータベースや業務アプリを直接説明し、生成結果をさらに調整できます。

AI チャットドキュメント：[https://help.teable.ai/en/basic/ai/ai-chat](https://help.teable.ai/en/basic/ai/ai-chat)

AI アプリ構築ドキュメント：[https://help.teable.ai/en/basic/ai/app-builder](https://help.teable.ai/en/basic/ai/app-builder)

![Teable2-pqd910.png](https://static-docs.nocobase.com/Teable2-pqd910.png)

### 適用シーン

Teable は、Airtable 代替、共同編集データベース、注文管理、プロジェクト管理、PostgreSQL データ管理などに適しています。AI アプリ構築とセルフホストの両方を使いたいチームは、必要な機能がどのバージョンに含まれるかをさらに確認する必要があります。

## 4. ToolJet

**既存データベースに接続し、管理画面や社内業務アプリをすばやく生成したいチームに適しています。**

* 公式サイト：[https://www.tooljet.com/](https://www.tooljet.com/)
* GitHub：[https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)
* GitHub Stars：38.2k
* ドキュメント：[https://docs.tooljet.com/docs/](https://docs.tooljet.com/docs/)

ToolJet は、データベース、API、クラウドストレージ、業務ソフトウェアに接続し、既存データをもとに管理画面、ダッシュボード、社内ツールを作成できるオープンソースのローコードアプリ構築プラットフォームです。コミュニティ版では、ビジュアルページビルダー、内蔵データベース、データソース接続機能が提供されています。

![ToolJet1-py55nl.png](https://static-docs.nocobase.com/ToolJet1-py55nl.png)

### 複雑なリレーションモデル対応力

ToolJet の内蔵データベースは、主キー、外部キー、一意制約、結合クエリをサポートしています。ユーザーは外部キーで異なるデータテーブルを接続し、既存の関係に基づいて関連データを読み取ることができます。

多対多関係では通常、中間テーブルを作成し、その中に 2 つの業務テーブルを指す外部キーをそれぞれ設定します。ToolJet は PostgreSQL、MySQL、MongoDB、多様な API に直接接続することもできるため、既存のデータ構造の上にアプリを構築する用途により適しています。

データベースエディタードキュメント：[https://docs.tooljet.com/docs/tooljet-db/database-editor/](https://docs.tooljet.com/docs/tooljet-db/database-editor/)

### AI 機能

ToolJet AI は、自然言語に基づいてアプリページ、データ構造、クエリ、データバインディングを生成できます。既存のデータベース構造を読み取り、そのデータの上にアプリを作成することもできます。生成後、ユーザーはページ、コンポーネント、クエリを引き続き調整できます。

さらに、ToolJet AI はクエリ生成、コンポーネントデバッグ、AI Agent 構築などの機能も提供します。主な AI 機能はエンタープライズ版に含まれ、オープンソースのコミュニティ版はビジュアルアプリ構築とデータ接続を中心としています。

AI 構築ドキュメント：[https://docs.tooljet.com/docs/build-with-ai/overview/](https://docs.tooljet.com/docs/build-with-ai/overview/)

![ToolJet2-ctr08l.png](https://static-docs.nocobase.com/ToolJet2-ctr08l.png)

### 適用シーン

ToolJet は、管理画面、社内運用ツール、データ検索プラットフォーム、既存データベースをもとにした業務アプリに適しています。すでにデータベース構造を持っており、ページや操作画面をすばやく補いたいチームにとって、ToolJet の強みはより明確です。

## 5. Budibase

**フォーム、承認、チケット管理、自動化フロー型の社内アプリ構築に適しています。**

* 公式サイト：[https://budibase.com/](https://budibase.com/)
* GitHub：[https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)
* GitHub Stars：28.1k
* ドキュメント：[https://docs.budibase.com/docs/](https://docs.budibase.com/docs/)

Budibase は、オープンソースの社内ツール・ワークフロー自動化プラットフォームです。既存のデータベース、API、業務システムに接続できるほか、内蔵データベースを使ってフォーム、データページ、アプリ、自動化ワークフローを作成できます。

![Budibase1-bzkpnu.png](https://static-docs.nocobase.com/Budibase1-bzkpnu.png)

### 複雑なリレーションモデル対応力

Budibase の関連フィールドは双方向関連をサポートしており、1 つのレコードを複数のレコードに関連付けることもできるため、多対多関係を扱えます。

PostgreSQL、MySQL、MariaDB、Microsoft SQL Server、Oracle などの外部データベースに接続する場合、多対多関係では中間テーブルが必要です。中間テーブルには両側のデータテーブルを指す外部キーを保存し、Budibase はその関係に基づいて関連データを読み取り、管理します。

SQL データソースドキュメント：[https://docs.budibase.com/docs/sql-datasource](https://docs.budibase.com/docs/sql-datasource)

### AI 機能

Budibase AI は、プロンプトに基づいて内蔵データベースのデータテーブル、フィールド、関連関係、サンプルデータを生成できます。また、JavaScript を生成し、自動化の中でテキスト分類、翻訳、要約、コンテンツ生成、文書情報抽出を行うこともできます。さらに、データやワークフローを呼び出せる AI Agent の構築にも対応しています。

AI テーブル生成機能は、現在は内蔵の Budibase DB のみに対応しています。1 つまたは複数のテーブルとその関係を生成できますが、アプリページは同時には生成されません。正式に利用する前に、フィールドタイプと関連関係を確認する必要があります。

AI テーブル生成ドキュメント：[https://docs.budibase.com/docs/ai-powered-table-generation](https://docs.budibase.com/docs/ai-powered-table-generation)

Budibase AI 設定ドキュメント：[https://docs.budibase.com/docs/quickstart-budibase-ai](https://docs.budibase.com/docs/quickstart-budibase-ai)

![Budibase2-xbhqu5.png](https://static-docs.nocobase.com/Budibase2-xbhqu5.png)

### 適用シーン

Budibase は、承認・申請フォーム、チケットシステム、社内運用ツール、既存 SQL データベースをもとにしたデータページや自動化ワークフローに適しています。フォーム、ワークフロー、AI データ処理の面で特に強みがあります。

**本記事が、複雑なリレーションモデルに適したオープンソース AI ノーコードツールをより早く見つける助けになれば幸いです。Airtable 代替、AI アプリ構築プラットフォーム、企業向け社内システムツールを検討しているチームにも、ぜひ共有してください。**


**関連記事**：

* **[AI ノーコードとは？AI 時代のノーコードプラットフォーム実用ガイド - NocoBase](https://www.nocobase.com/ja/blog/what-is-ai-no-code)**
* **[GitHub で注目したい 9 つのオープンソース AI ノーコードツール](https://www.nocobase.com/ja/blog/open-source-ai-no-code-tools-github-9)**
* **[GitHub で注目したい14のオープンソース AI Agent ツール](https://www.nocobase.com/ja/blog/github-open-source-ai-agent-tools-16)**
* **[GitHub Stars が多い 8 つのオープンソース AI Assistant ツール](https://www.nocobase.com/ja/blog/top-open-source-ai-assistant-tools-github-stars)**
* **[6 つの WorkBuddy と組み合わせて使いやすいオープンソースツール](https://www.nocobase.com/ja/blog/workbuddy-open-source-tools)**
* **[GitHub Stars 上位のオープンソース AI ツール 6 選](https://www.nocobase.com/ja/blog/6-github-top-open-source-ai-tools-for-ai-agents)**
* **[Hermes で内部ツールの効率を高める：おすすめのオープンソースプロジェクト 5 選](https://www.nocobase.com/ja/blog/open-source-internal-tools-self-hosted-ai-agent-hermes)**
* **[OpenClaw を実務で活用するには？おすすめのオープンソースツール 5 選](https://www.nocobase.com/ja/blog/openclaw-open-source-enterprise-tools)**
* **[Codex にゼロから作らせないための6つのオープンソースプロジェクト](https://www.nocobase.com/ja/blog/building-internal-tools-with-codex)**
* **[Claude Code を使うなら知っておきたい 6 つのオープンソースツール](https://www.nocobase.com/ja/blog/open-source-tools-after-claude-code)**
* **[企業向けソフトウェア開発に適したオープンソース AI ノーコードツール 10 選](https://www.nocobase.com/ja/blog/open-source-ai-no-code-tools-enterprise-software-development)**
* **[企業内部ツール必須：8 大オープンソース AI Agent プラットフォーム比較](https://www.nocobase.com/ja/blog/8-open-source-ai-agent-platforms-for-internal-tools)**
