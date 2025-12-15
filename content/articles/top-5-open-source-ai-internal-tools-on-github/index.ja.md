これまでにも、私たちは多くのオープンソース AI 関連のプロジェクトを整理してきました。たとえば、[GitHub の 11 個のオープンソース AI ノーコードツール](https://www.nocobase.com/cn/blog/top-11-github-open-source-no-code-ai-tools) や、[AI 低コードツールのまとめ記事](https://www.nocobase.com/cn/blog/14-ai-low-code-platforms-github) などです。AI 技術の進化が加速する中で、より多くのオープンソースプロジェクトが積極的に AI を取り入れ始めています。

同じ動きは、内部ツール（Internal Tools）分野でも起こっています。昨年、私たちは[優れたオープンソース内部ツールのまとめ](https://www.nocobase.com/cn/blog/open-source-internal-tools)を紹介しましたが、2025 年に入ってそれらの多くが AI 機能を取り込み、大きく進化しました。そのため、今回あらためて体系的にアップデートすることにしました。

😄 [内部ツールとは何か、どのような価値があるのかを知りたい方は、こちらの解説をご覧ください。](https://www.nocobase.com/ja/blog/top-5-open-source-projects-for-building-internal-tools-in-2024#%E5%86%85%E9%83%A8%E3%83%84%E3%83%BC%E3%83%AB%E3%81%AE%E5%88%A9%E7%82%B9%E3%81%A8%E3%81%AF)

今回の記事では、[GitHub の Internal Tools](https://github.com/topics/internal-tools) タグの中から Star 数が上位で、20k 以上の Star を獲得しているオープンソースツールを再度選び、技術的特徴や利用シーンを紹介します。

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---

AI 時代において、どの内部ツールが依然として有力なのか、また自社内でツールを構築している技術チームにどのような指針を与えられるか——その一助になれば幸いです。

まず、今回紹介する 5 つのオープンソース内部ツールを簡単に見てみましょう：

* **NocoBase**：データモデルを軸にしたノーコード開発プラットフォーム。内部ツール構築に特化し、プラグイン拡張性が高い。AI を用いてデータ整理、モデリング、チャート生成、コード生成などに活用可能。
* **Budibase**：低コードの内部ツール開発環境。データベース、ドラッグ&ドロップ構築、自動 CRUD 生成、AI カラム、AI によるテーブル設計などに対応。
* **Refine**：React ベースのメタフレームワーク。CRUD を中心とした管理画面に強く、AI によるアプリ構造やコード生成も可能。
* **ToolJet**：低コードと AI-native を組み合わせたプラットフォーム。自然言語から UI やロジックを自動生成できる。
* **Appsmith**：成熟したオープンソース低コードツール。多様なデータソースと接続でき、管理画面・ダッシュボード・承認フローなどの構築に適しており、AI 操作も充実。

### NO.5 nocobase

![nocobase.png](https://static-docs.nocobase.com/nocobase-ovk3pi.png)


| GitHub アドレス          | [https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)           |
| ------------------------ | -------------------------------------------------------------------------------------- |
| 公式サイト               | [https://www.nocobase.com/]([https://www.nocobase.com/](https://www.nocobase.com/))    |
| オープンソースライセンス | AGPL-3.0                                                                               |
| GitHub Star 数           | 20.5k                                                                                  |
| GitHub Fork 数           | 2.3k                                                                                   |
| GitHub Issue 数          | 129                                                                                    |
| GitHub Pull Request 数   | 125                                                                                    |
| GitHub Contributor 数    | 101                                                                                    |
| GitHub 最終更新          | 当日                                                                                   |
| 関連ドキュメント         | [https://v2.docs.nocobase.com/ai-employees](https://v2.docs.nocobase.com/ai-employees) |

**ツール紹介**

NocoBase はデータモデルを中心に構築されたノーコード開発プラットフォームで、内部ツールづくりに特に適しています。プラグイン方式で柔軟に拡張でき、管理画面や業務システム、CRM、承認フローなど多様な企業向けアプリを構築できます。画面は直感的に編集でき、複雑なデータ構造や権限管理、カスタムロジックにも対応しており、業務ツールを素早く整えたいチームに最適です。

NocoBase の AI 機能は独立したモジュールではなく、テーブルやフォーム、データモデル、ワークフローと密接に連携しています。AI 社員モジュールを使うことで、データ整理、モデリング、検索、チャート生成、コード生成などをシステム内で直接実行でき、データ処理や画面設定、ロジック構築を効率化します。

**適用シーン**

**データ整理（Dex データ整理スペシャリスト）**

顧客情報や工単、契約情報などの入力時に、AI 社員が非構造化データやファイルから必要な情報を抽出し、構造化データとして整理し、フォームに入力することもできます。

![Dex.gif](https://static-docs.nocobase.com/Dex-c4uwn4.gif)

**データ分析（Viz インサイトアナリスト）**

Leads や Opportunities、Accounts などのデータページの内容を読み取り、トレンド、比較、KPI などのチャートを自動生成し、分析をわかりやすく提示します。

![Viz.gif](https://static-docs.nocobase.com/Viz-demgin.gif)

**フロントエンド設定（Nathan フロントエンドエンジニア）**

JavaScript が必要な場面で、エディタ内のコンテキストを理解し、自然言語の指示からコードの生成・改善を自動で行います。

![Nathan.png](https://static-docs.nocobase.com/Nathan-n9ybjn.png)

**データモデリング（Orin データモデラー）**

CRM や工単、在庫、プロジェクト管理などのデータ構造を作る際に、AI がテーブルの作成・編集を支援します。

![Orin.png](https://static-docs.nocobase.com/Orin-ahkat1.png)

### NO.4 budibase

![budibase.png](https://static-docs.nocobase.com/budibase-wahysy.png)


| GitHub アドレス          | [https://github.com/Budibase/budibase]([https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)) |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| 公式サイト               | [https://budibase.com/](https://budibase.com/)                                                                       |
| オープンソースライセンス | GPL-v3                                                                                                               |
| GitHub Star 数           | 27.4k                                                                                                                |
| GitHub Fork 数           | 2k                                                                                                                   |
| GitHub Issue 数          | 294                                                                                                                  |
| GitHub Pull Request 数   | 12                                                                                                                   |
| GitHub Contributor 数    | 112                                                                                                                  |
| GitHub 最終更新          | 当日                                                                                                                 |
| 関連ドキュメント         | [https://docs.budibase.com/docs/quickstart-budibase-ai](https://docs.budibase.com/docs/quickstart-budibase-ai)       |

**ツール紹介**

Budibase は、内部ツールを素早く構築できるオープンソースのローコードプラットフォームです。データベース連携、複数データソースの接続、ドラッグ&ドロップによる UI 作成、自動生成される CRUD 画面やワークフローなど、業務アプリに必要な機能を幅広く備えています。内蔵データベースと REST API の組み合わせにより、専門的なフロントエンド知識がなくても実用的な内部アプリを作れます。

Budibase には AI 機能も組み込まれており、AI Column によるデータ整理、自然言語からの JavaScript ロジック生成、データベース構造の自動生成、AI アクションによるテキスト分類・加工などが行えます。

**適用シーン**

**データ整理・クレンジング**
AI Column を使ってデータを自動的に整形・修正でき、顧客フィードバック管理や内容審査、工単処理などに役立ちます。

![AI Column.png](https://static-docs.nocobase.com/AI%20Column-imcj5c.png)

**データベース構造の自動生成**
顧客管理や契約管理、タスク管理など新しい業務モジュールを始める際、AI が適切なテーブル構造やサンプルデータを自動で作成します。

![数据库表结构.png](https://static-docs.nocobase.com/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%A1%A8%E7%BB%93%E6%9E%84-rc0ka3.png)

### NO.3 Refine

![refine-n5b1bb.png](https://static-docs.nocobase.com/refine-n5b1bb.png)


| GitHub アドレス          | [https://github.com/refinedev/refine](https://github.com/refinedev/refine) |
| ------------------------ | -------------------------------------------------------------------------- |
| 公式サイト               | [https://refine.dev/](https://refine.dev/)                                 |
| オープンソースライセンス | MIT                                                                        |
| GitHub Star 数           | 33.5k                                                                      |
| GitHub Fork 数           | 2.9k                                                                       |
| GitHub Issue 数          | 17                                                                         |
| GitHub Pull Request 数   | 11                                                                         |
| GitHub Contributor 数    | 311                                                                        |
| GitHub 最終更新          | 2日前                                                                      |
| 関連ドキュメント         | [https://ai.refine.dev/](https://ai.refine.dev/)                           |

**ツール紹介**

Refine は、CRUD を中心とした Web アプリや管理画面、企業向けダッシュボードなどを効率よく構築するための React メタフレームワークです。

Refine AI を利用すると、自然言語や API 仕様、ドキュメントを入力するだけで、一覧・フォーム・詳細ページを含む CRUD 画面、ルーティング、認証、データ取得、状態管理など、実運用レベルの React アプリ構成を自動生成できます。生成物は純粋な React コードのため、そこから自由にカスタマイズできます。

**適用シーン**

**管理画面の自動生成**
API やデータモデルに基づき、在庫・注文・プロジェクト管理などの管理画面を一括で生成し、内部システムの立ち上げを大幅に効率化できます。

![后台管理系统生成-3eh30p.png](https://static-docs.nocobase.com/%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E7%94%9F%E6%88%90-3eh30p.png)

**既存コードの再構築**
Refine AI は既存プロジェクトにも活用でき、ベストプラクティスに沿った構造を生成するため、老朽化したシステムの再構築や新機能の追加作業をスムーズにします。

![代码重构与维护.png](https://static-docs.nocobase.com/%E4%BB%A3%E7%A0%81%E9%87%8D%E6%9E%84%E4%B8%8E%E7%BB%B4%E6%8A%A4-muoonn.png)

💡おすすめ記事：[開源 CRUD 開発ツール：NocoBase と Refine の比較](https://www.nocobase.com/ja/blog/nocobase-vs-refine)

### NO.2 ToolJet

![ToolJet-4nyv0g.png](https://static-docs.nocobase.com/ToolJet-4nyv0g.png)


| GitHub アドレス          | [https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ |
| 公式サイト               | [https://tooljet.ai/](https://tooljet.ai/)                                                                   |
| オープンソースライセンス | AGPL-3.0                                                                                                     |
| GitHub Star 数           | 37k                                                                                                          |
| GitHub Fork 数           | 4.9k                                                                                                         |
| GitHub Issue 数          | 646                                                                                                          |
| GitHub Pull Request 数   | 313                                                                                                          |
| GitHub Contributor 数    | 651                                                                                                          |
| GitHub 最終更新          | 1日前                                                                                                        |
| 関連ドキュメント         | [https://docs.tooljet.com/docs/build-with-ai/overview](https://docs.tooljet.com/docs/build-with-ai/overview) |

**ツール紹介**

ToolJet は、企業向けの内部ツールやダッシュボード、管理システムを手早く作れるオープンソースのローコード + AI 対応プラットフォームです。ドラッグ&ドロップの UI ビルダー、内蔵データベース、豊富なデータソース統合、権限管理やコラボレーション機能といった、実務で必要な仕組みを幅広く備えています。

プラットフォームには AI が組み込まれており、自然言語でアプリの要件を書くだけで、画面構成、データ構造、クエリロジックをまとめて生成できます。

**適用シーン**

**自然言語からアプリを自動生成**

要件を文章で伝えるだけで、ToolJet が内部ツールの UI・データ構造・ロジックを自動作成します。既存アプリの調整や機能追加も可能で、在庫管理などの基本的な業務システムを短時間で構築できます。

![自然语言快速生成.png](https://static-docs.nocobase.com/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%BF%AB%E9%80%9F%E7%94%9F%E6%88%90-nwf730.png)

**AI ドキュメントアシスタント**

組み込みの AI アシスタントが、コンポーネントや機能、統合方法について質問に答え、理解と構築をサポートします。フロントエンドに詳しくないチームでもスムーズに使い始められます。

![AI 文档助手.png](https://static-docs.nocobase.com/AI%20%E6%96%87%E6%A1%A3%E5%8A%A9%E6%89%8B-75vt0c.png)

### NO.1 appsmith

![appsmith-of0467.png](https://static-docs.nocobase.com/appsmith-of0467.png)


| GitHub アドレス          | [https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith) |
| ------------------------ | ---------------------------------------------------------------------------------- |
| 公式サイト               | [https://www.appsmith.com/](https://www.appsmith.com/)                             |
| オープンソースライセンス | Apache-2.0                                                                         |
| GitHub Star 数           | 38.6k                                                                              |
| GitHub Fork 数           | 4.4k                                                                               |
| GitHub Issue 数          | 4.4k                                                                               |
| GitHub Pull Request 数   | 38                                                                                 |
| GitHub Contributor 数    | 335                                                                                |
| GitHub 最終更新          | 1日前                                                                              |
| 関連ドキュメント         | [https://www.appsmith.com/ai/low-code](https://www.appsmith.com/ai/low-code)       |

**ツール紹介**

Appsmith は、内部業務アプリを素早く作れるオープンソースのローコードプラットフォームです。さまざまなデータベースや API とつなげられ、豊富な UI コンポーネントと JavaScript による柔軟なロジック追加に対応しています。管理画面、データパネル、承認フロー、CRM、ダッシュボードなど、多様な業務システムに利用できます。

最新バージョンでは AI 機能が追加され、OpenAI・Google AI・Anthropic などの LLM と連携し、テキスト分析、要約、検索、分類などを行う AI actions が利用可能になりました。

**適用シーン**

**AI で構築を高速化**

Appsmith では、アプリ作成時に AI が文脈に応じた支援を行います。操作説明、機能解説、クエリ作成、JavaScript ロジック提案、UI カスタマイズなど、画面横のヘルプから Appy を呼び出せば、その場でサポートを得られます。

![借助 AI 提升构建速度.png](https://static-docs.nocobase.com/%E5%80%9F%E5%8A%A9%20AI%20%E6%8F%90%E5%8D%87%E6%9E%84%E5%BB%BA%E9%80%9F%E5%BA%A6-76dac4.png)

**内部アプリへの AI 統合**

顧客レビューの感情分析など、AI を取り込んだ業務ツールを簡単に構築できます。レビューを取得して表示し、AI で分類し、結果を画面に反映することで、業務効率を高めたインタラクティブなアプリを作れます。

![整合 AI 能力.png](https://static-docs.nocobase.com/%E6%95%B4%E5%90%88%20AI%20%E8%83%BD%E5%8A%9B-n2t9w0.png)

💡おすすめ記事：[NocoBase と Appsmith の比較](https://www.nocobase.com/ja/blog/nocobase-vs-appsmith)

また、前述の5つの主要プロジェクト以外にも、[Yao]([Yao](https://github.com/YaoApp/yao)) や[ILLA Builder ](https://github.com/illacloud/illa-builder)といったオープンソースツールはコミュニティが活発で、内部ツール構築に十分活用できます。[Yao](https://github.com/YaoApp/yao) はフルスタックのアプリケーションエンジンとしてモデル・フロー・API を素早く構築でき、[ILLA Builder](https://github.com/illacloud/illa-builder) は可視化 UI の作成に特化しており、短時間で管理画面やデータツールを立ち上げたいケースに向いています。どちらも AI 拡張に対応しており、内部ツールづくりの補完的な選択肢になります。

### **結語**

内部ツールの選定では、次のような観点を踏まえて比較検討することをおすすめします：

1. AI 機能の成熟度（ページ生成、SQL・ロジック生成、チャート生成、AI アシスタントの有無）
2. エコシステムの活発さ（Star、Issue、コミット頻度、ドキュメント更新など）
3. 自己ホスティングの可否とセキュリティ要件
4. 拡張しやすさや二次開発のしやすさ（将来的な改善コストに影響）

この記事が内部ツールを自社で構築する際の判断材料として役立てば幸いです。

生成系 AI の進化に伴い、これらのオープンソースプロジェクトも引き続きアップデートが進み、新たな機能が生まれてくるでしょう。

これらのツールが、あなたのチームのより効率的でスマートな内部システム構築に貢献できることを願っています。

**関連読み物：**

* [GitHubで注目のオープンソースAI内部ツール5選](https://www.nocobase.com/ja/blog/top-5-open-source-ai-internal-tools-on-github)
* [8つの Google Sheets 最良代替ツール（コストと機能まとめ）](https://www.nocobase.com/ja/blog/the-8-best-google-sheets-alternatives-with-full-cost-and-capability-analysis)
* [PoC に最適なオープンソースのノーコード／ローコードツール 6 選](https://www.nocobase.com/ja/blog/6-open-source-no-low-code-tools-for-building-pocs)
* [開発者向けノーコード／ローコードの技術判断ガイド（2026）](https://www.nocobase.com/ja/blog/a-developers-technical-decision-guide-to-no-code-and-low-code)
* [6 大企業向けノーコード・ローコードプラットフォームのRBAC権限体系詳細比較](https://www.nocobase.com/ja/blog/6-in-depth-comparison-rbac-no-code-low-code-platforms)
* [GitHubで注目のオープンソースAIローコードツール14選 ](https://www.nocobase.com/ja/blog/14-ai-low-code-platforms-github)
* [GitHubで人気のオープンソースノーコードAIツール11選](https://www.nocobase.com/ja/blog/top-11-github-open-source-no-code-ai-tools)
* [GitHub で Star 数トップ18 のオープンソース AI Agent プロジェクト](https://www.nocobase.com/ja/blog/github-open-source-ai-agent-projects)
