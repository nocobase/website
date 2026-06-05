## WorkBuddy とは？

WorkBuddy は Tencent が提供する、さまざまな職場シーンに対応する AI Agent デスクトップワークスペースです。主に企業の日常業務、ファイル処理、データ分析、多段階タスクの処理などに向いています。![WorkBuddy-8xxz2q.png](https://static-docs.nocobase.com/WorkBuddy-8xxz2q.png)

OpenClaw、Claude Code、Codex のようなツールと比べると、WorkBuddy の重点は少し異なります。OpenClaw はオープンな Agent 能力とクロスプラットフォームのスキルエコシステムを重視しています。Claude Code や Codex は、コード生成、開発協働、エンジニアリングタスクの処理に向いています。一方、WorkBuddy は職場での日常業務に近く、WeChat、QQ、WeCom、Feishu、DingTalk などのよく使われるオフィスツールと接続できます。ユーザーは、普段使っているコミュニケーション入口からタスクを開始できます。

企業の業務システムや社内業務とより深く接続したい場合、WorkBuddy は Agent のタスク受付口と実行の起点としても使いやすいツールです。WorkBuddy は指示の受け取り、タスクの分解、結果の返却を担います。オープンソースツールは、具体的な業務システム、自動化フロー、CRM、プロジェクト管理、データ API、BI 分析などの機能を提供します。

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---



この記事では、WorkBuddy と組み合わせて使いやすいオープンソースツールを紹介します。それぞれが企業にどのような機能を提供できるのか、WorkBuddy と組み合わせることでどのようなユースケースをカバーできるのかを見ていきます。

## 1. NocoBase：WorkBuddy から呼び出せるカスタム業務システムの構築に向いている

![NocoBase1-vpe2x5.png](https://static-docs.nocobase.com/NocoBase1-vpe2x5.png)

**公式サイト**： [https://www.nocobase.com/](https://www.nocobase.com/)

**GitHub**： [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**GitHub Stars**：22.3k

**ドキュメント**： [https://docs.nocobase.com/](https://docs.nocobase.com/)

**関連リソース**：

CLI：[https://docs.nocobase.com/ja/api/cli/](https://docs.nocobase.com/ja/api/cli/)

Skills：[https://docs.nocobase.com/ja/ai-builder#nocobase-skills](https://docs.nocobase.com/ja/ai-builder#nocobase-skills)

MCP：[https://docs.nocobase.com/ja/ai/mcp/](https://docs.nocobase.com/ja/ai/mcp/)

WorkBuddy + NocoBase：[https://docs.nocobase.com/ja/ai/workbuddy](https://docs.nocobase.com/ja/ai/workbuddy)

### 製品紹介

NocoBase は、AI 駆動のオープンソースノーコード / ローコード開発プラットフォームです。企業向けアプリ、内部ツール、さまざまな業務システムを素早く構築できます。プライベートデプロイに対応しており、プラグインアーキテクチャをベースに設計されています。企業が自社の業務に合わせて、CRM、ERP、承認、チケット、在庫、プロジェクト管理、運用管理画面などを構築するのに向いています。

![NocoBase2-t4x1fo.png](https://static-docs.nocobase.com/NocoBase2-t4x1fo.png)

WorkBuddy を内部ツールに接続したいチームにとって、NocoBase は業務システム層として使いやすいプラットフォームです。安定したデータ構造、権限管理の境界、フロールール、呼び出せる機能を支える役割を担えます。

NocoBase は AI 機能についても、業務システムに近い形で設計されています。AI 従業員、AI Skills、CLI、MCP などに対応しています。AI 従業員はシステム内のスマートアシスタントとして、データ検索、コンテンツ生成、タスク処理などに関われます。AI Skills は、外部 Agent が NocoBase の設定方法や操作範囲を理解するためのものです。CLI を使えば、Agent がコマンドを通じてインストール、作成、変更などを実行できます。MCP は、外部 AI ツールが NocoBase に接続するための標準的な入口になります。

![NocoBase3-ejtyuu.png](https://static-docs.nocobase.com/NocoBase3-ejtyuu.png)

### 主な強み

* **データモデル駆動**：NocoBase では、まずデータテーブル、フィールド、関連関係を定義し、その後にページや操作を構築できます。単純なフォーム収集よりも、複雑な業務システムに向いています。
* **プライベートデプロイに適している**：企業は自社サーバーにシステムをデプロイできます。データセキュリティ、権限制御、長期保守を重視する内部システムに向いています。
* **権限とフロー機能が充実している**：ロール権限、フィールド権限、データ権限、操作権限に対応しています。ワークフローを使って、承認、通知、データ更新、Webhook、HTTP リクエストなども処理できます。
* **柔軟なプラグインアーキテクチャ**：NocoBase はプラグイン型のマイクロカーネルアーキテクチャを採用しています。機能はプラグインで拡張できるため、標準機能に加えて独自の業務ロジックを作りたい企業にも向いています。
* **AI 機能が業務システムに近い**：NocoBase は AI 従業員、AI Skills、ナレッジベースなどをサポートしています。ページ、データテーブル、選択中のレコード、業務ルールをもとに操作できます。

### WorkBuddy と組み合わせた典型的なユースケース

多くの場面で、WorkBuddy は指示を受け取り、タスクを分解し、結果を返します。NocoBase は、顧客、注文、承認、チケット、在庫、プロジェクトなど、具体的な業務オブジェクトとシステム機能を支えます。

![NocoBase4-ono1dm.png](https://static-docs.nocobase.com/NocoBase4-ono1dm.png)

以下では、よくある 3 つの場面を例にします。

**CRM** 企業は NocoBase で顧客管理システムを構築し、顧客情報、フォロー状況、顧客ランク、担当者、契約金額などを一元管理できます。営業責任者は WeCom や Feishu で直接指示を出し、WorkBuddy に最近追加された顧客、長期間フォローされていないリード、重点顧客を確認させることができます。NocoBase は顧客データ、権限、フィルター条件を提供し、AI 従業員や関連 Skills はフォロー優先順位の整理、顧客サマリーの生成、営業 ToDo リストの出力をさらに支援できます。

**チケット管理** アフターサービスや運用保守チームでは、NocoBase がチケットのステータス、問題タイプ、優先度、担当者、締切を記録できます。日次チェックや週次レビューの際、チームは WorkBuddy に期限超過チケット、高優先度の問題、未処理事項をまとめさせ、担当者、緊急度、問題タイプごとに分類できます。これにより、処理順序を素早く確認しやすくなります。

**プロジェクト管理** 管理者にとって、承認とプロジェクト進捗は複数のノードに分散しがちです。NocoBase は承認フロー、プロジェクトノード、担当者、リスク事項、進捗ステータスを管理できます。WorkBuddy は指示に基づいて、承認待ち事項、遅延タスク、プロジェクトリスクを抽出し、部門、担当者、優先度ごとに分類したサマリーを生成できます。

## 2. Activepieces：WorkBuddy をより多くの自動化フローにつなげるのに向いている

![Activepieces1-xrlqbe.png](https://static-docs.nocobase.com/Activepieces1-xrlqbe.png)

**公式サイト**： [https://www.activepieces.com/](https://www.activepieces.com/)

**GitHub**： [https://github.com/activepieces/activepieces](https://github.com/activepieces/activepieces)

**GitHub Stars**：約 23k

**ドキュメント**： [https://www.activepieces.com/docs](https://www.activepieces.com/docs)

### 製品紹介

Activepieces は、オープンソースの AI 自動化プラットフォームです。複数のツールやシステムをまたぐ自動化フローの構築に向いています。API、Webhook、データベース、表、メール、CRM、プロジェクト管理ツール、その他のサードパーティサービスを接続し、分散した操作を再利用可能なワークフローとして組み合わせられます。

Activepieces と WorkBuddy の組み合わせは、「指示はオフィス入口から出し、実際の処理は複数システムで行う」場面に向いています。WorkBuddy は、ユーザーが WeCom、Feishu、DingTalk などの入口で出した依頼を受け取ります。Activepieces は、その裏側でデータの読み取り、API 呼び出し、記録の同期、通知送信、後続タスクのトリガーなどを実行します。

### 主な強み

* **複数ツールをつなぐ力が強い**：API、Webhook、データベース、サードパーティアプリを接続し、繰り返しの手作業を減らせます。
* **自動化フローの蓄積に向いている**：リード同期、通知配信、表の更新、タスク割り当て、データ整理などを固定ワークフローとして蓄積できます。
* **セルフホスト対応**：企業は自社環境にデプロイでき、キー、データ、実行ログを管理しやすくなります。
* **AI Agent に呼び出されやすい**：Activepieces の pieces は MCP servers として利用できるため、Agent ツールとの組み合わせにも向いています。

![Activepieces2-6x447z.png](https://static-docs.nocobase.com/Activepieces2-6x447z.png)

### WorkBuddy と組み合わせた典型的なユースケース

Activepieces は、システムをまたぐ自動化に向いています。たとえば、公式サイトのフォーム、カスタマーサポートのフィードバック、GitHub Issue、営業リードが異なるツールに分散している場合、チームはまず Activepieces でデータ読み取り、重複排除、分類、同期フローを設定できます。その後、WorkBuddy に「今日の新規リードを整理し、ソースと優先度ごとにグループ化して」と指示すれば、結果をグループチャット、ドキュメント、表に返せます。

## 3. Twenty：セルフホスト可能な CRM データ層の構築に向いている

![Twenty-tqe8g2.png](https://static-docs.nocobase.com/Twenty-tqe8g2.png)

**公式サイト**： [https://twenty.com/](https://twenty.com/)

**GitHub**： [https://github.com/twentyhq/twenty](https://github.com/twentyhq/twenty)

**GitHub Stars**：49k

**ドキュメント**： [https://twenty.com/developers](https://twenty.com/developers)

### 製品紹介

Twenty は、オープンソースの CRM です。公式では Salesforce のオープンソース代替として位置づけられています。企業、連絡先、顧客関係、商談、タスク、メモ、営業フローの管理に向いており、技術チームが自社の業務フローに合わせてカスタマイズすることもできます。

企業が顧客データの制御権を保ちつつ、クローズドな CRM に完全には依存したくない場合、Twenty は WorkBuddy の背後にある顧客データ層として使えます。顧客、商談、営業フォロー記録は Twenty に蓄積され、WorkBuddy はオフィス入口で検索、整理、リマインダー関連の依頼を受け取ります。

### 主な強み

* **CRM に特化している**：顧客管理、商談フォロー、営業タスク、顧客資料の整理に向いています。
* **オープンソースでセルフホスト可能**：企業は顧客データ、システム環境、今後のカスタマイズ余地をよりよく管理できます。
* **技術チームによるカスタマイズに向いている**：企業独自の営業フローに合わせて、オブジェクト、フィールド、業務構造を調整できます。
* **業務オブジェクトが集中している**：汎用型の内部ツールと比べて、Twenty のデータ構造は営業チームの日常業務に近いものです。

### WorkBuddy と組み合わせた典型的なユースケース

営業チームは Twenty で、顧客資料、企業情報、商談ステージ、フォロー記録、次のアクションを管理できます。営業責任者が重点顧客を確認したいとき、CRM 管理画面に入って一つずつ絞り込む必要はありません。WorkBuddy から「7 日間フォローされていない高価値顧客を探して」「今週の新規商談を整理して」「金額は高いが次のアクションがない Deal をリストアップして」といった依頼を出せます。

Twenty は営業データの保存と管理を担い、WorkBuddy は検索結果をフォローアップリスト、リマインダーサマリー、週報に整理します。これにより、チームは優先的に対応すべき顧客や商談をより早く見つけられます。営業データが CRM の中に埋もれ、誰にもタイムリーに確認されない問題も減らせます。

## 4. Plane：WorkBuddy にプロジェクト状態とタスク進捗を読み取らせるのに向いている

![Plane1-a68yj9.png](https://static-docs.nocobase.com/Plane1-a68yj9.png)

**公式サイト**： [https://plane.so/](https://plane.so/)

**GitHub**： [https://github.com/makeplane/plane](https://github.com/makeplane/plane)

**GitHub Stars**：49.8k

**ドキュメント**： [https://docs.plane.so/](https://docs.plane.so/)

### 製品紹介

Plane は、オープンソースのプロジェクト管理ツールです。Issues の追跡、Cycles の管理、Roadmap の維持、プロジェクトドキュメントやチームタスクの蓄積に向いています。プロダクト、開発、プロジェクト管理などのチームが、バージョン計画、タスクステータス、プロジェクトリスク、協働のリズムを管理するのに適しています。

Plane 公式も teams and agents の協働を強調しています。WorkBuddy の文脈では、Plane はプロジェクト協働層として使えます。プロジェクト、タスク、担当者、ステータス、優先度、バージョン計画は Plane に蓄積され、WorkBuddy がそれらの状態をチームの日常的なオフィス入口に届けます。

![Plane2-ojwlpm.png](https://static-docs.nocobase.com/Plane2-ojwlpm.png)

### 主な強み

* **プロジェクトと開発協働に向いている**：Issues、Cycles、Roadmap、ドキュメント、チームタスクを管理できます。
* **タスクステータスが明確**：優先度、担当者、バージョン計画、遅延リスクの追跡に向いています。
* **セルフホスト対応**：プロジェクトデータや開発情報を自社で管理したいチームに向いています。
* **Agent との組み合わせに向いている**：Plane は teams and agents の協働空間を重視しており、タスク推進、プロジェクト状態、ナレッジ蓄積を中心に組み合わせやすいツールです。

### WorkBuddy と組み合わせた典型的なユースケース

プロダクトマネージャーは Feishu で WorkBuddy に「このバージョンでまだクローズされていない P0 問題はどれか」と問い合わせることができます。プロジェクト責任者は「今週遅延しているタスクは何か、それぞれどの担当者で止まっているのか」を確認できます。開発責任者も、WorkBuddy にモジュールごとの高優先度 Issue を整理させることができます。

この場面では、Plane がプロジェクト、Issue、Roadmap、担当者情報を記録します。WorkBuddy はオフィス入口から問い合わせを受け取り、結果をサマリーやリマインダーとして整理します。タスクが多く、バージョン進行が速く、頻繁なステータス同期が必要なチームにとって、この組み合わせはプロジェクト管理画面を何度も開いて確認するコストを減らせます。

## 5. Directus：既存データベースを呼び出し可能なデータインターフェースに変えるのに向いている

![Directus1-x5gl6h.png](https://static-docs.nocobase.com/Directus1-x5gl6h.png)

**公式サイト**： [https://directus.io/](https://directus.io/)

**GitHub**： [https://github.com/directus/directus](https://github.com/directus/directus)

**GitHub Stars**：34.2k

**ドキュメント**： [https://directus.io/docs](https://directus.io/docs)

### 製品紹介

Directus は、SQL データベースの上に管理画面、REST API、GraphQL API を生成できるオープンソースのデータプラットフォームです。すでにデータベースはあるものの、使いやすい管理画面、標準化されたインターフェース、統一されたデータアクセス層が不足しているチームに向いています。

多くの企業は、データ自体がないわけではありません。むしろ、データが旧システム、データベーステーブル、複数の内部アプリに分散しています。Agent にデータベースへ直接アクセスさせるのはリスクが高く、業務担当者に SQL を書いてもらうのも現実的ではありません。Directus はデータベースと WorkBuddy の間に API と権限管理の層を追加し、既存データをより検索、整理、呼び出ししやすくします。

### 主な強み

* **既存の SQL データベースに接続できる**：既存データベースをより使いやすいデータサービスとして提供するのに向いています。
* **API を自動生成できる**：REST、GraphQL、SDK を通じてデータにアクセスできます。
* **データ管理画面を提供する**：API 層だけでなく、データ管理画面としても使えます。
* **段階的な改修に向いている**：企業はシステム全体を作り直す必要はありません。まず重要なデータテーブルを Directus 経由で公開できます。

![Directus2-9ia8ca.png](https://static-docs.nocobase.com/Directus2-9ia8ca.png)

### WorkBuddy と組み合わせた典型的なユースケース

たとえば、企業には既存の顧客データベース、注文データベース、在庫表、コンテンツ素材ライブラリがあるものの、それらのデータが旧システムに分散していて、業務担当者が素早く確認しにくい場合があります。企業はまず Directus で重要なデータテーブルに接続し、権限と API を設定できます。その後、WorkBuddy が API 経由でデータを確認します。

従業員はオフィス入口で「今日の新規注文を確認して」「在庫が安全ラインを下回っている商品を探して」「ある顧客の直近 3 回の取引記録を整理して」といった指示を出せます。Directus は API と権限管理の境界を提供し、WorkBuddy は自然言語での依頼を検索タスクに変換し、結果を読みやすいサマリーとして整理します。

## 6. Metabase：WorkBuddy にレポートと業務指標を読み取らせるのに向いている

![Metabase-uupms9.png](https://static-docs.nocobase.com/Metabase-uupms9.png)

**公式サイト**： [https://www.metabase.com/](https://www.metabase.com/)

**GitHub**： [https://github.com/metabase/metabase](https://github.com/metabase/metabase)

**GitHub Stars**：47k

**ドキュメント**： [https://www.metabase.com/docs](https://www.metabase.com/docs)

### 製品紹介

Metabase は、オープンソースの BI ツールです。データダッシュボード、業務レポート、セルフサービス分析の構築に向いています。データベースに接続し、営業、運用、プロダクト、財務、カスタマーサポートなどのデータをもとに、指標体系と Dashboard を作れます。

Directus がデータベースを API に変えるのに向いているとすれば、Metabase はデータを業務上の問いや指標ダッシュボードに変えるのに向いています。WorkBuddy と組み合わせると、Metabase はデータ分析層を担い、管理者がオフィス入口から重要指標や業務サマリーを取得しやすくなります。

### 主な強み

* **業務データ分析に向いている**：データベースに接続し、Dashboard、グラフ、レポートを構築できます。
* **データ確認のハードルを下げる**：業務担当者は可視化画面から指標を確認でき、必ずしも SQL を書く必要はありません。
* **管理層と運用チームに向いている**：よくある場面には、営業ダッシュボード、チャネル分析、ユーザー成長、チケット傾向、在庫分析などがあります。
* **API 機能がある**：Metabase は API を提供しており、一部の管理画面タスクやデータ確認の自動化に利用できます。

### WorkBuddy と組み合わせた典型的なユースケース

管理者は毎日 BI システムを開いて複数の Dashboard を見ているとは限りません。しかし、重要な変化は素早く把握する必要があります。たとえば、「今週の売上は先週と比べてどう変化したか」「今日の新規登録ユーザーはどのチャネルから来ているか」「どの製品ラインのチケット量が最も速く増えているか」「コンバージョン率の低下が最も大きいページはどれか」といった内容です。そのため、Metabase と WorkBuddy の組み合わせは、経営データのサマリーに向いています。

Metabase はデータベース接続、指標、ダッシュボードの蓄積を担当します。WorkBuddy はこれらの指標を WeCom、Feishu、DingTalk に届けます。ユーザーはオフィス入口から直接質問し、WorkBuddy が関連レポートやデータインターフェースを呼び出し、構造化されたサマリーを返します。

## FAQ

### 1. WorkBuddy は従来の SaaS、ERP、CRM に直接接続できますか？

できます。ただし、システム自体が API、Webhook、プラグイン、MCP、またはその他の呼び出し可能な機能を公開しているかによります。

多くの従来型 SaaS、ERP、CRM は、データ構造やフロールールが比較的固定されています。システム自体は使えますが、フィールド関係、インターフェース能力、権限管理の境界、監査記録が、Agent に直接開放するのに適しているとは限りません。

単純な検索、通知、データ同期だけであれば、従来システムも API や統合プラットフォームを通じて一部接続できます。ただし、企業が顧客、注文、承認、チケット、在庫、プロジェクトなどのオブジェクトを中心に、データ、権限、フローを柔軟に設定したい場合は、オープンソースツールやセルフホスト可能なプラットフォームの方が、機能を支える層として向いています。

### 2. なぜ WorkBuddy と組み合わせるツールとしてオープンソースツールが向いているのですか？

オープンソースツールは、自社でホストしたい、データを管理したい、インターフェースを開放したい、長期的に拡張したいチームに向いていることが多いです。

企業は、データの保存場所、システム権限、インターフェースの呼び出し方法、操作ログをより明確に把握できます。また、自社のニーズに応じて二次開発やシステム統合もできます。顧客情報、プロジェクトデータ、注文記録、経営指標、内部フローに関わる場面では、この制御性がより重要になります。

WorkBuddy はオフィス入口とタスクの調整を担当し、オープンソースツールは業務システム、自動化フロー、CRM、プロジェクト管理、データ API、BI 分析などの機能を支えます。両者を組み合わせることで、企業は日常的なオフィス入口と具体的な業務システムを接続できます。

### 3. システムレベルの内部ツールを構築したい場合、まず見るべきものはどれですか？

**NocoBase**。

企業が CRM、ERP、チケットシステム、承認システム、在庫管理、プロジェクト管理、運用管理画面を構築したい場合、NocoBase はシステムレベルの内部ツールプラットフォームとして向いています。データモデル駆動アーキテクチャを採用しているため、まず顧客、注文、チケット、承認、在庫、プロジェクトなどの業務オブジェクトを定義し、その後ページ、権限、ワークフロー、プラグイン機能を設定できます。

また、NocoBase は WorkBuddy 接続ドキュメントをすでに公開しており、この記事のテーマとも直接関係しています。複雑な業務データ、権限管理の境界、フロールールを担う必要があるチームにとって、NocoBase は単一の CRM、単一の自動化ツール、単一の BI ツールよりも広い範囲をカバーできます。

### 4. 主にダッシュボード監視と経営データ分析をしたい場合、どれを選ぶべきですか？

**Metabase**。

Metabase はデータベース接続、Dashboard 構築、業務指標の管理、データレポート生成に向いています。営業ダッシュボード、チャネル分析、ユーザー成長、チケット傾向、在庫変化、コンバージョン率変化などの場面は、Metabase で管理しやすい内容です。

WorkBuddy と組み合わせることで、管理者はオフィス入口で重要指標を確認できます。たとえば、「今週の売上は先週と比べてどう変化したか」「今日の新規ユーザーは主にどのチャネルから来ているか」「どの製品ラインのチケット量が最も速く増えているか」などです。Metabase は指標と Dashboard の蓄積を担当し、WorkBuddy は問い合わせを受けて構造化されたサマリーを返します。

### 5. 企業に既存データベースはあるが、統一された検索入口がない場合、どうすればよいですか？

多くの企業にはすでに顧客データベース、注文データベース、在庫表、コンテンツ素材ライブラリがあります。ただし、データが旧システムや内部データベースに分散していることが多いです。業務担当者がデータを確認したい場合、複数の管理画面に入るか、技術担当者に一時的なエクスポートを依頼しなければならないことがあります。

Directus は SQL データベースの上に管理画面、REST API、GraphQL API を生成できます。これは、既存データベースにより明確なデータアクセス入口を追加することに相当します。WorkBuddy と組み合わせると、従業員はオフィス入口から「今日の新規注文」「在庫が安全ラインを下回っている商品」「ある顧客の直近 3 回の取引記録」などを確認できます。

### 6. WorkBuddy とオープンソースツールを組み合わせるには、技術チームの参加が必要ですか？

利用の深さによります。

単純な検索、リマインダー、情報整理、レポートサマリーであれば、業務チームは既存ツールの機能から試し始めることができます。ただし、WorkBuddy と内部システムを安定して連携させたい場合、たとえばインターフェース呼び出し、権限設定、ワークフロー設計、キー管理、操作ログの保持などが必要になる場合は、IT または開発チームの参加が必要です。

比較的堅実な方法は、まず低リスクで高頻度の場面から始めることです。たとえば、顧客フォローアップリスト、プロジェクト進捗サマリー、期限超過チケットのリマインダー、経営データダッシュボード、在庫異常検索などです。フローが安定した後、より複雑なシステム操作やツール横断の自動化へ段階的に広げられます。

### 7. どのような場合に WorkBuddy を選ぶのが向いていますか？

チームが主に WeChat、QQ、WeCom、Feishu、DingTalk などの入口で協働しており、AI Agent を使ってファイル整理、表分析、PPT 生成、会議サマリー、タスク分配などの日常業務を処理したい場合、WorkBuddy は比較的向いている選択肢です。

さらに、企業が内部ツール、CRM、プロジェクト管理、データダッシュボード、自動化フローなどのシステムにも接続したい場合は、WorkBuddy をタスク入口として使い、NocoBase、Activepieces、Twenty などのオープンソースツールと組み合わせて、具体的な業務システムとデータ機能を補えます。

この記事が役に立ったと思ったら、AI Agent に関心のある方にもぜひ共有してください。


**関連記事**：

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
