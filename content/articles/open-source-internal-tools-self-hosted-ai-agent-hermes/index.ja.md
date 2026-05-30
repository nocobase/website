AI Agent の注目は、もはや開発領域だけにとどまりません。

Claude Code や OpenClaw のようなツールに加えて、最近は Hermes Agent も話題に上がることが増えています。

![reddit.png](https://static-docs.nocobase.com/reddit-px26au.png)

[Reddit では](https://www.reddit.com/r/LocalLLaMA/comments/1ro9lph/comment/obgsyod/)、OpenClaw、Nanobot、Nanoclaw など複数の Agent ツールを試したうえで、最終的に Hermes Agent の方が気に入っているというユーザーの投稿もありました。必要な機能は残しつつ、余計な機能や負担が少ないためです。ローカルモデル、セルフホストサーバー、SSH アクセス、Telegram 操作などの場面でも、軽量で制御しやすい使い方に合っています。

> 💡もっと読む：
>
> [OpenClaw はどのように実際の業務に使えるか？おすすめの 5 つのオープンソースツール](https://www.nocobase.com/ja/blog/openclaw-open-source-enterprise-tools)
>
> [Claude Code を使った後に必要な 6 つのオープンソースツール](https://www.nocobase.com/ja/blog/open-source-tools-after-claude-code)

すでにセルフホスト型の業務システムや内部ツールを構築しようとしているチームにとって、AI Agent が実際の業務システムに入り、データ検索、システム設定、フロー保守、タスク実行に関わるのであれば、Hermes Agent は非常に相性のよい選択肢です。

内部ツール構築プラットフォームが業務システムの土台を担い、Hermes はセルフホスト型 Agent として、チームが自然言語でシステムを検索、設定、保守できるようにします。さらに、よく使う操作を再利用可能な Skill として蓄積できます。

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---

この記事では、NocoBase、Appsmith、Budibase、Directus、Baserow といった内部ツール構築プラットフォームを取り上げます。それぞれを Hermes Agent と組み合わせたときに、どのような使い方やユースケースに向いているのかを紹介します。

まず、この記事で触れるツール、よくある業務システムの種類、Hermes Agent が補える能力を表に整理します。全体像をすばやく確認するためのものです。


| ツール   | おすすめの業務システム / 内部ツール                                                                                    | Hermes Agent が補える能力                                                                                                    |
| -------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| NocoBase | CRM、ERP、承認システム、チケットシステム、プロジェクト管理、サプライヤー管理、資産管理、運用管理画面などの業務システム | 自然言語でデータモデル、ページ、権限を設計し、ワークフローを保守し、よく使う業務モジュールを再利用可能な Skill として蓄積    |
| Appsmith | 管理画面、データダッシュボード、カスタマーサポート管理画面、審査画面、運用操作ツール、データベース管理画面             | ページ構造、クエリ、フィルター条件を整理し、コンポーネントとデータソースの関係を説明し、よくある管理画面テンプレートを再利用 |
| Budibase | フォームシステム、承認フロー、従業員リクエスト、IT サービスデスク、運用フローアプリ、内部ワークフローツール            | フォーム項目、承認ノード、ステータス遷移を整理し、フローテンプレートを生成し、リクエスト処理 Skill を蓄積                    |
| Directus | データベース管理画面、API 管理、コンテンツ管理システム、構造化データ管理プラットフォーム、データ運用管理画面           | データ構造を説明し、フィールド間の関係を整理し、自然言語でのデータ検索を支援し、データ管理とコンテンツ保守フローを蓄積       |
| Baserow  | 表形式データベース、軽量 CRM、サプライヤーリスト、コンテンツ計画、プロジェクト進捗表、在庫リスト                       | テーブル構造とビューを設計し、フィルター条件を整理し、分類・ステータス項目を作成し、軽量アプリテンプレートを再利用           |

## 1. NocoBase

![NocoBase1.png](https://static-docs.nocobase.com/NocoBase1-orh9iv.png)

公式サイト：[https://www.nocobase.com/](https://www.nocobase.com/)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

GitHub Star：22.6k

### 概要

NocoBase は、企業向けの内部業務システムや管理画面を構築するための、オープンソースの AI ノーコード / ローコードプラットフォームです。

NocoBase の中心にあるのは、データモデル、ページ設定、権限管理、ワークフロー、プラグイン拡張です。これらを組み合わせることで、チームは長期的に運用できる業務システムを構築できます。この種のシステムは、運用の中で継続的に変化します。フィールドの調整、ページの改善、権限の再設計、承認・通知フローの追加などが繰り返し発生します。

NocoBase は、長期運用・継続保守が必要なシステムの土台として使いやすいプラットフォームです。Hermes Agent は、そこに加わることで、システムの構築、設定、保守をさらに支援できます。

AI 機能についても、NocoBase は AI 従業員、AI Skills、CLI、MCP などをすでに提供しています。AI 従業員は、システム内のスマートアシスタントとして、データ検索、コンテンツ生成、タスク処理などに関われます。AI Skills は、外部 Agent が NocoBase の設定方法や操作範囲を理解するためのものです。CLI を使えば、Agent はコマンドを通じてインストール、作成、変更などを実行できます。MCP は、外部 AI ツールが NocoBase に接続するための標準的な入口になります。

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-civede.png)

### Hermes と組み合わせるとできること

Hermes を NocoBase に接続すると、Hermes は NocoBase Skills を通じて設定体系を理解し、NocoBase CLI を通じて作成、変更、デプロイなどの操作を実行できます。

**1. 自然言語で業務モジュールを作成する**

例えば顧客契約更新管理モジュールを作る場合、Hermes に顧客、契約、契約更新記録、フォローアップタスクなどのデータ構造を整理させることができます。そのうえで、一覧ページ、詳細ページ、カンバン、基本権限を設計できます。

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-auh66t.png)

**2. 権限とフローの保守を支援する**

例えば「営業は自分が担当する顧客だけを閲覧できる。主管はチームの顧客を閲覧できる。財務は契約金額を閲覧できる」といった業務ルールを、Hermes はより具体的な権限設定やフロー設計に落とし込めます。

**3. よく使う操作を Skill として蓄積する**

CRM、承認フロー、サプライヤー管理モジュールなどを一度作成すると、Hermes はフィールド命名、ページ構造、権限ルールなどの経験を蓄積できます。次に似たモジュールを作るときに、そのまま再利用できます。

### タスク説明例

```text
NocoBase で顧客契約更新管理モジュールを作成してください。

顧客情報、契約満了日、更新ステータス、担当者、フォローアップ記録、承認フローを含める必要があります。

権限について：
営業は自分が担当する顧客のみ閲覧できます。
営業主管はチームの顧客を閲覧できます。
財務は契約金額と支払いステータスを閲覧できます。
管理者はすべての内容を閲覧・編集できます。

フローについて：
契約満了 30 日前に更新リマインダーを自動生成します。
更新金額が 10 万元を超える場合、主管と財務の承認が必要です。
承認後、更新ステータスを更新し、次回のフォローアップタスクを生成します。

完了後、今回のモジュール構築プロセスを再利用可能な Skill として整理し、今後サプライヤー管理、契約管理、プロジェクト管理モジュールを作成しやすくしてください。
```

![NocoBase4-yks1wd.png](https://static-docs.nocobase.com/NocoBase4-yks1wd.png)

### 関連リソース

ドキュメント：[https://docs.nocobase.com/](https://docs.nocobase.com/)

AI ドキュメント：[https://docs.nocobase.com/ja/ai/](https://docs.nocobase.com/ja/ai/)

CLI：[https://docs.nocobase.com/ja/api/cli/](https://docs.nocobase.com/ja/api/cli/)

Skills：[https://docs.nocobase.com/ja/ai-builder#nocobase-skills](https://docs.nocobase.com/ja/ai-builder#nocobase-skills)

MCP：[https://docs.nocobase.com/ja/ai/mcp/](https://docs.nocobase.com/ja/ai/mcp/)

Hermes Agent：[https://docs.nocobase.com/ja/ai/hermes-agent](https://docs.nocobase.com/ja/ai/hermes-agent)

## 2. Appsmith

![Appsmith1.png](https://static-docs.nocobase.com/Appsmith1-ixuhwg.png)

公式サイト：[https://www.appsmith.com/](https://www.appsmith.com/)

GitHub：[https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

GitHub Star：39.9k

### 概要

Appsmith は、管理画面、データダッシュボード、カスタマーサポート管理画面、審査ツール、IT ツールなどの内部アプリを構築するためのオープンソースローコードプラットフォームです。データベース、API、サードパーティサービスに接続し、ドラッグ＆ドロップのコンポーネント、クエリ設定、JavaScript 拡張を使って、内部チーム向けの操作画面を素早く構築できます。

Appsmith は Appsmith AI を提供しており、アプリ内に AI によるデータ検索、テキスト生成、分類、要約などの機能を追加できます。また、内部データをもとにした AI インタラクションも構築できます。さらに Appsmith Agents も進められており、AI 機能をチームが日常的に使うツールやシステムに組み込む方向で展開されています。

![Appsmith2.png](https://static-docs.nocobase.com/Appsmith2-64xce0.png)

### Hermes と組み合わせるとできること

Appsmith は具体的なページとデータ操作画面を構築します。Hermes は、チームの自然言語での要件を、より明確なページ構造、クエリロジック、操作ルールへ整理する役割を担えます。

1. 内部管理画面を設計する

例えば注文異常処理パネルを作る場合、まず Hermes に、表示すべきフィールド、必要なフィルター、操作ボタン、ページの分け方を整理させることができます。その後、Appsmith で具体的な画面構築とデータ接続を進められます。

2. クエリとフィルター条件を整理する

内部ツールでよくある問題は、「ページがあるかどうか」ではありません。むしろ、ページの裏側にあるデータロジックが明確かどうかです。Hermes は、「どの注文を見たいのか」「異常をどう判断するのか」「どのレコードを優先処理すべきか」といった説明を、クエリ条件や操作ルールに整理できます。

3. 管理画面テンプレートを蓄積する

カスタマーサポート管理画面、審査画面、運用ダッシュボード、財務検索ページのようなツールは、何度も必要になります。Hermes は、よく使うフィールド、コンポーネントレイアウト、フィルター項目、操作ロジックを Skill として蓄積できます。次に似たページを作るときに、そのまま再利用できます。

### タスク説明例

```text
注文異常処理パネルを設計してください。後で Appsmith で構築します。

ページには、異常注文、顧客名、注文金額、担当者、異常理由、処理ステータス、直近のコミュニケーション記録を表示する必要があります。

フィルター条件は以下を含みます：
地域；
注文金額；
処理ステータス；
担当者；
異常タイプ。

操作について：
運用担当者は処理ステータスを更新できます。
主管は担当者を一括割り当てできます。
財務は注文金額と支払いステータスのみ閲覧できます。

ページ構造、データクエリロジック、コンポーネントレイアウトを整理し、再利用可能な内部ツールページテンプレートとして蓄積してください。
```

### 関連リソース

ドキュメント：[https://docs.appsmith.com/](https://docs.appsmith.com/)

Appsmith AI：[https://docs.appsmith.com/connect-data/reference/appsmith-ai](https://docs.appsmith.com/connect-data/reference/appsmith-ai)

## 3. Budibase

![Budibase1.png](https://static-docs.nocobase.com/Budibase1-py408w.png)

公式サイト：[https://budibase.com/](https://budibase.com/)

GitHub：[https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

GitHub Star：28k

### 概要

Budibase は、内部アプリ、自動化フロー、AI Agent の構築に使えるオープンソースの運用プラットフォームです。従業員リクエスト、承認処理、IT サービスデスク、フォームの回覧、データ更新、運用自動化のような、フロー型の業務に向いています。

Budibase は、コード生成、データベーステーブル生成、大規模言語モデルによる自動化フロー作成に対応しています。Budibase Agents も進められており、チームは自然言語で Agent の動作を定義し、内部データや API に接続できるようになります。

### Hermes と組み合わせるとできること

Budibase は、フォーム、承認、フロー系アプリを支えるのに向いています。Hermes は、フロー設計の初期段階でルール整理を支援し、その後、よく使うリクエスト処理方法を蓄積できます。

1. フォームと承認フローを整理する

例えば設備申請、経費精算、カスタマーサポート、契約承認のようなフローでは、Hermes がまずフィールド、承認ノード、トリガー条件、通知ルールを整理します。その後、Budibase で具体的なアプリとして構築できます。

2. フロー処理テンプレートを生成する

多くの内部リクエストには、決まった処理の流れがあります。Hermes は「従業員が申請を提出する → 主管が承認する → 関連部門が処理する → ステータスを更新する → 申請者に通知する」といった流れをテンプレートとして整理し、後で素早く再利用できます。

3. 運用ルールを蓄積する

フロー型アプリは、組織ルールの変化に合わせて調整されることが多いです。Hermes は、承認順序、例外処理方法、役割分担、通知ルールを記録し、再利用可能な Skill として蓄積できます。

![Budibase2.png](https://static-docs.nocobase.com/Budibase2-b8427g.png)

### タスク説明例

```text
従業員の設備申請フローを設計してください。後で Budibase で構築します。

フローは以下を含みます：
従業員が設備申請を提出する；
主管が承認する；
IT が在庫を確認する；
承認後に設備ステータスを更新する；
システムが申請者に設備受け取りを通知する。

フォームフィールドは以下を含みます：
申請者；
部門；
設備タイプ；
用途説明；
希望受け取り時間；
承認ステータス；
処理担当者。

フォームフィールド、承認ノード、ステータス遷移、通知ルールを整理し、この設備申請フローを再利用可能な Skill として蓄積してください。
```

### 関連リソース

ドキュメント：[https://docs.budibase.com/](https://docs.budibase.com/)

Budibase AI：[https://docs.budibase.com/docs/quickstart-budibase-ai](https://docs.budibase.com/docs/quickstart-budibase-ai)

## 4. Directus

![Directus1.png](https://static-docs.nocobase.com/Directus1-tqzvl0.png)

公式サイト：[https://directus.io/](https://directus.io/)

GitHub：[https://github.com/directus/directus](https://github.com/directus/directus)

GitHub Star：35.9k

### 概要

Directus は、SQL データベースの内容を管理するためのリアルタイム API とアプリ管理画面です。既存データベースの上に REST / GraphQL API と管理画面を生成できます。PostgreSQL、MySQL、SQLite、OracleDB、MariaDB、MS SQL などのデータベースに対応し、ローカルデプロイ、プライベートデプロイ、クラウドサービスでも利用できます。

AI 機能として、Directus は Directus MCP を提供しています。これにより、Claude、ChatGPT などの AI ツールが Directus のデータを読み取り、作成し、管理できます。Directus MCP は既存の権限体系に従うため、AI によるアクセスや変更も、同じ認証・認可レイヤーを通る必要があります。

![Directus2.png](https://static-docs.nocobase.com/Directus2-92qier.png)

### Hermes と組み合わせるとできること

Directus は、データ管理画面と API 管理に向いたツールです。Hermes と Directus を組み合わせる場合、重点はページ生成ではありません。チームがデータ構造を理解し、業務データを検索し、よく使うデータ管理操作を蓄積できるようにすることです。

1. データ構造を説明する

既存データベースでは、業務担当者がフィールド間の関係を十分に理解していないことがあります。Hermes は collection、フィールド、関連関係、権限境界を整理し、データ構造を理解しやすくできます。

2. データ検索と整理を支援する

例えばサプライヤー、契約、支払い、コンテンツステータス、顧客記録などの情報を検索する場合、Hermes は自然言語での要件を、より具体的なデータ検索の考え方に整理できます。

3. データ管理操作を蓄積する

コンテンツ審査、サプライヤー情報の保守、顧客データ整理、契約ステータス確認などは、繰り返し発生しやすい操作です。Hermes はこれらのデータ操作フローを Skill として整理し、次回以降も同じルールで実行できるようにします。

### タスク説明例

```text
Directus 内のサプライヤーデータ構造を整理してください。

以下を区別する必要があります：
サプライヤー基本情報；
連絡先；
契約記録；
支払いステータス；
協力ステータス；
直近のコミュニケーション記録。

これらの collection をどのように関連付けるべきか説明し、サプライヤーステータス確認フローを整理してください。

今後、自然言語で以下を検索できるようにしたいです：
どのサプライヤーの契約がもうすぐ期限切れになるか；
どのサプライヤーの支払いステータスが異常か；
どのサプライヤーが 30 日以上コミュニケーション記録を更新していないか。

このデータ整理とクエリ方法を再利用可能な Skill として蓄積してください。
```

### 関連リソース

ドキュメント：[https://directus.io/docs](https://directus.io/docs)

Directus MCP：[https://directus.io/mcp](https://directus.io/mcp)

MCP ドキュメント：[https://directus.io/docs/guides/ai/mcp](https://directus.io/docs/guides/ai/mcp)

## 5. Baserow

![Baserow1.png](https://static-docs.nocobase.com/Baserow1-23hy4e.png)

公式サイト：[https://baserow.io/](https://baserow.io/)

GitHub：[https://github.com/baserow/baserow](https://github.com/baserow/baserow)

GitHub Star：4.9k

### 概要

Baserow は、データベース、アプリ、自動化、AI Agent の構築に使えるオープンソースのノーコードプラットフォームです。Airtable のオープンソース代替として知られており、クラウドとセルフホストの両方に対応しています。構造化データや軽量な業務アプリを管理するのに適しています。

Baserow 2.0 では Kuma AI assistant が導入されました。自然言語でデータベースを作成したり、数式を書いたり、自動化を構築したりできます。さらに、AI フィールド、自動化ビルダー、ワークスペース検索などの機能も提供されています。

![Baserow2.png](https://static-docs.nocobase.com/Baserow2-1684s9.png)

### Hermes と組み合わせるとできること

Baserow は、表形式データから軽量アプリを作るのに向いています。Hermes と Baserow を組み合わせることで、チームは「表を整理する」段階から、「データ管理のルールや習慣を蓄積する」段階へ進めます。

1. テーブル構造とビューを作成する

顧客リスト、サプライヤーリスト、コンテンツ計画、プロジェクト進捗、在庫記録などについて、Hermes は業務説明をもとにテーブル構造、フィールド、ビューを設計できます。その後、Baserow でデータ管理を進められます。

2. フィルターと分類ルールを整理する

軽量アプリは、複数のビューに依存することが多いです。Hermes は「審査待ち」「協力中」「もうすぐ期限切れ」「高優先度」などの業務ルールを、フィルター条件やビュー設定に整理できます。

3. 軽量アプリテンプレートを蓄積する

チームが Baserow で似たような業務データをよく管理する場合、Hermes はフィールド構造、ビュー規則、ステータス分類を Skill として蓄積できます。次に新しいテーブルを作るときに再利用できます。

### タスク説明例

```text
サプライヤー管理テーブルを設計してください。後で Baserow で作成します。

フィールドは以下を含みます：
サプライヤー名；
連絡先；
連絡方法；
協力ステータス；
契約満了日；
支払いステータス；
担当者；
直近のコミュニケーション時間；
備考。

3 つのビューを作成する必要があります：
審査待ちサプライヤー；
協力中サプライヤー；
契約がもうすぐ期限切れになるサプライヤー。

各ビューのフィルター条件を設計し、このサプライヤーテーブル構造とビュー規則を再利用可能な Skill として蓄積してください。今後、顧客テーブル、チャネルテーブル、パートナーテーブルを作成しやすくするためです。
```

### 関連リソース

ドキュメント：[https://baserow.io/user-docs](https://baserow.io/user-docs)

Baserow AI：[https://baserow.io/product/baserow-ai](https://baserow.io/product/baserow-ai)

## FAQ

### 1. これらのプラットフォームにすでに AI 機能があるなら、なぜ Hermes が必要なのですか？

プラットフォーム内蔵の AI は、通常、ページ、SQL、フォームロジック、コンポーネント設定の生成など、局所的なタスクを処理するのに向いています。

Hermes の価値は、セルフホスト、長期記憶、Skill の蓄積にあります。業務ルール、権限の使い方、システム設定の方法を、タスクや会話をまたいで記憶する用途に向いています。

### 2. どの内部ツールプラットフォームが Hermes との組み合わせに向いていますか？

長期的に運用され、継続的な保守が必要な業務システムプラットフォームが特に向いています。例えば、NocoBase、Budibase、Appsmith、Directus、Baserow などです。

その中でも、NocoBase は完整な業務システムの保守に向いています。Appsmith は内部画面やデータパネルに、Budibase はフォームやフローに、Directus と Baserow はデータ管理のユースケースに向いています。

### 3. Hermes Agent はどのようなチームに向いていますか？

Hermes は、すでにセルフホストツールを使っており、データセキュリティを重視し、業務システムを長期的に保守する必要があり、AI に設定の習慣や操作経験を記憶・蓄積してほしいチームに向いています。

### 4. セルフホスト型 AI Agent はなぜ企業内部ツールに重要なのですか？

内部ツールには通常、顧客、注文、契約、承認、従業員、財務などの機密性の高い業務データが含まれるからです。

AI Agent がこれらのデータにアクセスし、システム操作に関わる場合、チームはデータの保存場所、権限制御、操作監査、長期記憶の管理をより重視します。セルフホスト型 Agent は、制御権を重視するチームに向いています。

AI Agent 製品は数多くあります。ただ、すでにオープンソースの内部ツールプラットフォームを使っていて、より安全で制御しやすい方法で AI Agent を企業内部システムに取り入れたいチームにとって、Hermes Agent は試す価値のある選択肢です。この記事が役に立ったと思ったら、セルフホスト型 AI Agent や内部ツール構築に関心のある方にもぜひ共有してください。


**関連記事**：

* [OpenClaw を実務で活用するには？おすすめのオープンソースツール 5 選](https://www.nocobase.com/ja/blog/openclaw-open-source-enterprise-tools)
* [Codex にゼロから作らせないための6つのオープンソースプロジェクト](https://www.nocobase.com/ja/blog/building-internal-tools-with-codex)
* [Claude Code を使うなら知っておきたい 6 つのオープンソースツール](https://www.nocobase.com/ja/blog/open-source-tools-after-claude-code)
* [企業向けソフトウェア開発に適したオープンソース AI ノーコードツール 10 選](https://www.nocobase.com/ja/blog/open-source-ai-no-code-tools-enterprise-software-development)
* [企業内部ツール必須：8 大オープンソース AI Agent プラットフォーム比較](https://www.nocobase.com/ja/blog/8-open-source-ai-agent-platforms-for-internal-tools)
* [RBAC・AI・API 完全対応｜エンタープライズ向けセルフホスト型 CRM 厳選ガイド](https://www.nocobase.com/ja/blog/the-best-self-hosted-crm-for-enterprise-teams)
* [自社開発ミドルウェアから脱却するための、オープンソース統合ツール6選](https://www.nocobase.com/ja/blog/6-open-source-integration-tools-to-replace-custom-middleware)
* [Airtable vs NocoBase のリアルな移行コスト](https://www.nocobase.com/ja/blog/airtable-vs-nocobase-migration-cost-comparison)
* [Excel データをすばやく Web アプリ化する 4 つの方法を比較](https://www.nocobase.com/ja/blog/excel-to-web-app-4-methods)
* [PostgreSQL だけじゃない 外部データベース対応のノーコード／ローコードプラットフォーム 5 選 비교](https://www.nocobase.com/ja/blog/5-no-code-low-code-platforms-supporting-external-databases-mysql-mongodb-api)
* [オープンソースのプロジェクト管理ツール比較・選定ガイド（2026年最新版）](https://www.nocobase.com/ja/blog/open-source-project-management-tool-selection-guide-2026-edition)
* [PostgreSQL を使って独自の CRM を構築する方法](https://www.nocobase.com/ja/blog/how-to-build-a-custom-crm-with-postgresql)
