## TLDR

オープンソースの AI CRM を探しているなら、**AI の統合度が最も高いのは NocoBase です。**NocoBase の AI エージェントは**、独立したチャットツールではなく、業務コンテキストを理解したうえで、データ操作、フォーム入力、プロセス連携まで直接担えます。Twenty はすぐに導入したい営業チーム向け、Krayin は標準的な CRM に AI 自動化を追加したい場合に向いています。

## SaaS vs オープンソース

[「3,000億ドルが吹き飛んだ！SaaS 終焉の時代はすでに始まっている！」](https://www.forbes.com/sites/donmuir/2026/02/04/300-billion-evaporated-the-saaspocalypse-has-begun)

最近、「SaaS の終焉」をめぐる議論が大きな注目を集めています。

![SAAS.PNG](https://static-docs.nocobase.com/SAAS-o2ty98.PNG)

この20年、ソフトウェアは企業の働き方を大きく形づくってきました。営業、財務、コラボレーション、プロジェクト管理を問わず、多くの企業にとって、システム導入は業務効率化の出発点でした。ソフトウェアそのものが、長らく生産性の中核を担ってきたとも言えます。

しかし、AI が分析、生成、調整、意思決定支援まで直接担うようになったことで、これまで特定のアプリケーション内部に閉じていた多くの業務プロセスが、いま改めて分解され、再構成されつつあります。CRM SaaS の領域では、その変化が特に顕著です。

![Salesforce.PNG](https://static-docs.nocobase.com/Salesforce-cvy6m5.PNG)

Salesforce の [2026年版「State of Sales」](https://www.salesforce.com/news/stories/state-of-sales-report-announcement-2026/) によると、営業担当者の 54% がすでに AI Agents を利用した経験があり、約 9 割が 2027 年までに導入を予定しています。AI によって、顧客開拓の調査時間は 34%、メール作成時間は 36% 短縮できると見込まれています。つまり、AI は CRM に後付けされる機能ではなく、CRM の中核機能そのものを再定義しつつあるのです。

一方で、現在の多くの商用 SaaS における AI は、依然としてクローズドなアーキテクチャの中で動いています。ユーザーは、用意された AI 機能を受け身で使うことはできても、その機能を自分たちの業務に合わせて拡張したり、調整したりするのは簡単ではありません。これに対してオープンソースは、単に既成機能を提供するだけでなく、編集、拡張、カスタマイズできる余地を持っています。だからこそ、AI を業務フローに深く組み込み、企業固有の生産性資産として蓄積しやすいのです。

そこで今回は、GitHub 上で注目度の高い 3 つのオープンソース CRM、NocoBase、Twenty、Krayin CRM を取り上げます。製品構造、AI の統合度、実際の活用シーンという 3 つの観点から整理し、オープンソース AI CRM を比較・検討する際の参考になるようまとめました。

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---



## 3つのオープンソース CRM 比較一覧


| 評価軸           | NocoBase                                                       | Twenty                              | Krayin CRM                    |
| ---------------- | -------------------------------------------------------------- | ----------------------------------- | ----------------------------- |
| AI の統合度      | ⭐⭐⭐⭐⭐ AI エージェントが業務システムに深く組み込まれている | ⭐⭐⭐ ワークフロー中心の AI 強化   | ⭐⭐ 独立した AI 強化レイヤー |
| 製品形態         | プラットフォーム基盤。CRM は自分で構築                         | そのまま使える完成型 CRM            | そのまま使える標準型 CRM      |
| 拡張の柔軟性     | ⭐⭐⭐⭐⭐ プラグイン・マイクロカーネル構造                    | ⭐⭐⭐⭐ カスタムオブジェクト + API | ⭐⭐⭐ フレームワーク型拡張   |
| セルフホスト     | ✅ 対応。比較的低コスト                                        | ✅ 対応                             | ✅ 対応                       |
| 学習コスト       | 中程度（構築は必要だがテンプレートあり）                       | 低い（導入しやすい）                | 低い（導入しやすい）          |
| 向いているシーン | 高度なカスタマイズ + AI の深い統合                             | すばやい導入 + チーム協業           | 標準 CRM + AI 自動化          |
| GitHub Stars     | 21.7k                                                          | 40.2k                               | 21.7k                         |
| 技術スタック     | React + Node.js                                                | React + TypeScript                  | Laravel + Vue.js              |

💡続きを読む：[GitHub でスター数上位 10 の AI CRM オープンソースプロジェクト](https://www.nocobase.com/ja/blog/top-10-open-source-ai-crm-projects-with-the-most-github-stars#huly-platform)

## NocoBase

公式サイト：[https://www.nocobase.com/](https://www.nocobase.com/)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

![NocoBase1.PNG](https://static-docs.nocobase.com/NocoBase1-e4pb8i.PNG)

### プロジェクト概要

**製品の位置づけ**：NocoBase は、企業向けアプリケーション、社内ツール、業務システムを構築するための、AI 駆動型オープンソース・ノーコード / ローコード開発プラットフォームです。CRM の文脈では、CRM を構築するための基盤として機能し、顧客、リード、商談といった主要オブジェクトを中心に、システムを柔軟に拡張できます。Salesforce、HubSpot、Pipedrive などの SaaS CRM のオープンソース代替として、標準的な CRM 機能に加え、プラットフォーム型アーキテクチャを活かした高度なカスタマイズにも対応しています。

**オープンソース属性**：完全オープンソースで、セルフホストに対応。ライセンスは Apache-2.0 です。

**GitHub Stars**：21.7k

**GitHub Forks**：2.5k

**GitHub Contributors**：106

**製品の成熟度**：NocoBase はプラットフォーム型製品で、データモデル、プラグイン、ワークフロー、AI を中核に構成されています。既存の構造を維持したまま、継続的に機能を拡張できます。最近では NocoBase 2.x をベースにした CRM 2.0 ソリューションも公開されており、ワークフロー自動化と AI を営業管理プロセスに直接組み込み、リードスコアリング、受注確率予測、顧客ヘルス監視などをカバーしています。さらに Restore Guide により、既存の NocoBase 環境へワンクリックで復元して利用できます。

👉[今すぐ NocoBase CRM 2.0 営業管理システムソリューションを体験する](https://www.nocobase.com/ja/solutions/crm-v2)

### 技術アーキテクチャ

**アーキテクチャの開放性**：

NocoBase は、データモデル駆動とプラグイン・マイクロカーネル構造を採用しています。データモデルを中心に設計されており、UI とデータ構造は分離。コアは軽量に保たれ、機能はプラグインで追加していく構成です。

**データとフローの柔軟性**：

NocoBase は MySQL、PostgreSQL、SQLite、MariaDB、MongoDB、REST API、GraphQL、JSON ファイル、Excel ファイルなど、多様なデータソースに対応しています。複数データソースの一元管理、データソース横断の関連検索、データソースごとの権限管理が可能で、顧客、リード、商談、および関連プロセスの管理に活用できます。

**二次開発と導入方法**：

NocoBase はプラグイン方式で拡張でき、各プラグインは独立してバージョン管理されます。そのため、プラットフォームのアップグレードがプラグインに影響しにくい設計です。既存業務の上に、フィールド、プロセス、プラグイン、システム機能を段階的に拡張していく用途にも向いています。

### AI 機能

**製品における AI の位置づけ**：

NocoBase の AI エージェントは、業務システムに深く統合されたインテリジェント機能であり、企業の業務システムや要件に応じて自由に定義できます。単なる会話ボットではなく、業務画面上で文脈を理解し、実際の操作まで行える「デジタル同僚」です。OpenAI、Claude、ローカル大規模モデルなど複数の AI モデルを利用でき、企業ナレッジベース、RAG、会話メモリにも対応しているため、現場の実際のフローや役割分担に沿った活用が可能です。

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-kirvws.png)

**AI が解決する主な CRM 課題**：データ整理、コンテンツ生成、ナレッジ検索、業務操作の実行、プロセス連携などに対応します。

### 代表的な活用シーン

AI エージェントの Scout は、営業インテリジェンス担当です。商談の詳細分析、受注確率予測、競合分析、取引戦略の提案に活用されます。現在の商談状況に応じて、より具体的な判断材料や提案を提示し、営業チームの案件推進を支援します。

![NocoBase3.png](https://static-docs.nocobase.com/NocoBase3-q9pqxd.png)

AI エージェントの Viz は、インサイト分析担当です。リードスコアリング、顧客ヘルス分析、営業データ分析、パイプライン予測のためのインサイトを提供します。閲覧中の画面に基づいてグラフや分析コメントを自動生成できるほか、定期的な分析タスクも担当できます。

![NocoBase4.png](https://static-docs.nocobase.com/NocoBase4-8is8iy.png)

Ellis は AI メール支援エージェントで、メールの感情・意図分析、返信文の下書き、やり取りの要約に利用されます。過去のコミュニケーション履歴、顧客属性、現在のメッセージを踏まえて、文脈整理と適切な返信作成を支援します。

![NocoBase5.png](https://static-docs.nocobase.com/NocoBase5-xeuks5.png)

Dex は AI データ整理エージェントで、非構造化データやファイルから必要な情報を抽出し、構造化された内容へ整理するのに適しています。さらに、整理した情報をそのままフォームへ入力できるため、入力、整理、変換といった繰り返し作業の効率化に役立ちます。

![NocoBase6.png](https://static-docs.nocobase.com/NocoBase6-o94suw.png)

Lexi は多言語コミュニケーション支援エージェントで、多言語での顧客対応、コンテンツ翻訳、海外取引メールの処理に向いています。言語をまたぐ業務シーンで、チームの国際的なやり取りを効率化できます。

![NocoBase7.png](https://static-docs.nocobase.com/NocoBase7-nv0rau.png)

NocoBase では、こうした AI エージェントを業務要件に応じて自由に追加・設定できます。CRM 2.0 ソリューションと組み合わせれば、リードスコアリング、商談分析、営業予測、メール処理などに直接関与し、営業プロセスの一員として機能します。

## Twenty

公式サイト：[https://twenty.com/](https://twenty.com/)

GitHub：[https://github.com/twentyhq/twenty](https://github.com/twentyhq/twenty)

![Twenty1.png](https://static-docs.nocobase.com/Twenty1-9js58a.png)

### プロジェクト概要

**製品の位置づけ**：Twenty はモダンなオープンソース CRM で、公式には Salesforce のオープンソース代替として位置づけられています。オープンソースコミュニティでは、HubSpot、Pipedrive、Zoho CRM などの商用 CRM とよく比較されます。連絡先管理、商談追跡、メール同期、自動化など、一般的な CRM に必要な機能を備えつつ、完全オープンソースの構成を採用しています。

**オープンソース属性**：オープンソースで、セルフホストに対応。自社インフラ上でデータとデプロイを管理できます。公式サイトでは GPL ライセンスと明記されており、開発者向けドキュメントでもセルフホスト手順が詳しく案内されています。

**GitHub Stars**：40.2k

**GitHub Forks**：5.3k

**GitHub Contributors**：592

**製品の成熟度**：Twenty は、すぐに使い始められる完成型 CRM に近い製品です。オブジェクトやフィールドのカスタマイズ、権限管理、ワークフロー自動化、メールとカレンダー同期、API、Webhooks など、CRM に必要な基礎機能をすでに備えています。その一方で、拡張や追加開発の余地も確保されています。

### 技術アーキテクチャ

**アーキテクチャの開放性**：

Twenty は、カスタムオブジェクト、フィールド、リレーションをサポートし、API や Webhooks、コードベースでの拡張構築にも対応しています。固定的な項目構成の CRM ではなく、業務に合わせてデータモデルを柔軟に調整できます。

**データとフローの柔軟性**：

Twenty はカスタムデータモデルに対応し、filters、sort、group by、kanban、table views を利用できます。また、triggers と actions に基づくワークフロー自動化も可能です。連絡先、会社、商談などの標準オブジェクトを中心に運用しつつ、新しい業務オブジェクトやプロセスを追加することもできます。

**二次開発と導入方法**：

Twenty は Extend、Self-Host、Contribute という 3 つの開発者向けルートを提供しており、API 連携、セルフホスト、コードレベルでの拡張に対応しています。開発者ドキュメントでは Docker Compose、クラウドデプロイ、マルチワークスペース構成も案内されており、既存 CRM を土台に自動化や業務カスタマイズを追加しやすい構成です。

### AI 機能

**製品における AI の位置づけ**：

Twenty は AI を独立した機能モジュールとして設計しており、現在は主に AI Chatbot と AI Agents in Workflows の 2 つの方向で進められています。AI Chatbot は自然言語で CRM データとやり取りするための機能、AI Agents はワークフロー内で AI アクションや複数ステップの処理を行うための機能です。どちらも現時点では近日提供予定の段階です。

**AI が解決する主な CRM 課題**：

自然言語による CRM データ照会、営業インサイト取得、データエンリッチメント、レコード分類、テキスト要約、カスタムプロンプト処理に加え、ワークフロー内でのリードスコアリング、データクレンジング、メール下書き生成、レコード割り当てなどに対応します。

### 代表的な活用シーン

AI Chatbot は、CRM 内で自然言語を使って、レコード、関連情報、指標を直接確認できます。たとえば、高額商談の一覧確認、一定期間フォローしていない連絡先の抽出、現在のパイプライン価値の集計、あるいは画面コンテキストを踏まえて「この会社に関連する案件は何か」「この連絡先とは最近どんなやり取りがあったか」といった追加確認も可能です。

![Twenty2.png](https://static-docs.nocobase.com/Twenty2-zg4hh8.png)

さらに、ワークフローに組み込めば、AI Agents はリードの自動分類、会社情報の補完、会議後フォローアップメールの下書き作成、内容に応じた担当者への自動振り分けにも活用できます。

![Twenty3.png](https://static-docs.nocobase.com/Twenty3-aamoh8.png)

## Krayin CRM

公式サイト：[https://krayincrm.com/](https://krayincrm.com/)

GitHub：[https://github.com/krayin/laravel-crm](https://github.com/krayin/laravel-crm)

![Krayin1.png](https://static-docs.nocobase.com/Krayin1-wm11g8.png)

### プロジェクト概要

**製品の位置づけ**：Krayin は Laravel と Vue.js をベースに構築されたオープンソース CRM で、中小企業や企業チーム向けに設計されています。リード、顧客、営業プロセス、関連する業務連携を含む、顧客ライフサイクル全体を管理できることが大きな特徴です。

**オープンソース属性**：完全オープンソースで、セルフホストに対応。長年にわたり MIT License のもとで無料提供されています。

**GitHub Stars**：21.7k

**GitHub Forks**：1.4k

**GitHub Contributors**：41

**製品の成熟度**：Krayin は標準型 CRM の完成品に近く、顧客管理と営業プロセスに必要な機能を一通り備えています。同時に、マルチテナント SaaS、WhatsApp、VoIP などの方向へ拡張する余地もあります。

### 技術アーキテクチャ

**アーキテクチャの開放性**：

Krayin は Laravel + Vue.js を採用しており、GitHub リポジトリ上では CRM フレームワークとして位置づけられています。すぐに使える CRM 本体を提供しながら、フレームワークとしての拡張性も備えています。

**データとフローの柔軟性**：

Krayin の標準機能は、leads、customers、sales といった主要オブジェクトを中心に構成されています。また、複数業種向けの利用シーンや、lead management、sales automation の典型的なユースケースも提供されています。

**二次開発と導入方法**：

Krayin は、開発ドキュメント、Docker による導入手順、API / 開発ガイドを提供しており、既存の CRM 本体をベースにしたモジュール追加、セルフホスト導入、業種別カスタマイズに向いています。

### AI 機能

**製品における AI の位置づけ**：

Krayin は AI を独立した拡張機能として提供しており、公式には [AI CRM](https://krayincrm.com/ai-crm/) ページと Magic AI の設定入口が用意されています。現時点では、既存の CRM 本体に追加する AI 強化レイヤーという位置づけに近いです。

**AI が解決する主な CRM 課題**：

主にタスク自動化、データ分析、顧客意図の把握、意思決定支援に対応します。Magic AI は API キーでモデルを接続でき、モデル名を手動で選択することも可能です。AI CRM ページでは、業務効率向上、データに基づく意思決定、顧客管理の自動化が強調されています。

### 代表的な活用シーン

AI は、データ入力、フォローアップのリマインド、スケジュール管理など、日常業務の自動化に活用できます。繰り返し発生する作業を処理しつつ、過去データをもとに業務改善の提案を行うことも可能です。

![Krayin2.png](https://static-docs.nocobase.com/Krayin2-n59oce.png)

AI は、複数ソースから集まる顧客データを自動で整理、クレンジング、統合、分析し、手作業によるミスを減らしながらデータ精度を維持できます。

![Krayin3.png](https://static-docs.nocobase.com/Krayin3-2yl0so.png)

また、営業プロセスの各段階を監視し、ボトルネックの把握、結果予測、リードスコアリングやトレンド分析を通じて、高確度の商機を優先できるよう支援します。

![Krayin4.png](https://static-docs.nocobase.com/Krayin4-go5oen.png)

## 製品ごとの違いまとめ

### AI 統合の深さの違い

* **NocoBase**：AI が業務システムに深く組み込まれており、AI エージェントがデータ、画面、プロセス操作に直接関与します。プラットフォームレベルでの AI 統合に最も近いタイプです
* **Twenty**：製品に組み込まれるネイティブ機能として AI を設計しており、自然言語対話やワークフロー内の AI アクションが中心です。CRM 内蔵型の AI 強化に近いです
* **Krayin CRM**：既存の CRM 本体に追加する形の AI 強化で、自動化、分析、意思決定支援が中心です。従来型 CRM に AI を後付けするアプローチに近いです

### アーキテクチャ拡張性の違い

* **NocoBase**：データモデル駆動とプラグイン・マイクロカーネルを核としており、拡張性が最も高く、継続的な高度カスタマイズに向いています
* **Twenty**：完成型 CRM でありながら、オブジェクト、フィールド、API、ワークフロー拡張にも対応しており、導入のしやすさと将来の拡張性を両立しています
* **Krayin CRM**：標準 CRM 本体をベースに、フレームワーク型の拡張が可能で、既存システムへの機能追加や業種別カスタマイズに向いています

## よくある質問（FAQ）

**Q1：どのオープンソース CRM が最も実用的な AI 機能を備えていますか？**A：NocoBase。

NocoBase の AI エージェントは、単なるチャット機能ではありません。現在の画面、データ、業務コンテキストを理解したうえで、検索、フォーム入力、データ更新、プロセス連携まで直接実行できます。つまり、業務システムの中に深く入り込んだ AI レイヤーとして機能します。さらに、企業ごとの業務システムや要件に合わせて専用の AI エージェントをカスタマイズできるため、特定の業務シーンに応じた明確な役割を持たせることも可能です。

[✨CRM 2.0 ソリューションを、すでにお使いの NocoBase システムに統合する](https://v2.docs.nocobase.com/ja/solution/crm/installation)

**Q2：すぐに導入して使い始めたい営業チームには、どの CRM が向いていますか？**

A：Twenty。

Twenty は、完成型に近いオープンソース CRM で、連絡先、会社、商談、タスク、メール、カレンダーなど、営業活動に必要な主要オブジェクトをすでにカバーしています。API、Webhooks、カスタムオブジェクト、ワークフローにも対応しているため、まずすぐに導入し、必要に応じて段階的に拡張できます。

**Q3：この 3 つの中で、従来の SaaS CRM から移行しやすいのはどれですか？**

A：より大きなコントロール権を確保したいのであれば、3 つともクローズドな SaaS より柔軟です。ただし、向いている方向は異なります。

* NocoBase は、AI と業務プロセスそのものを一緒に再設計したい場合に向いています
* Twenty は、モダンな CRM 体験を維持しながら AI を導入し、比較的すばやく立ち上げたい場合に向いています
* Krayin は、既存の標準 CRM プロセスをベースに、段階的に AI 自動化を追加したい場合に向いています

**Q4：オープンソース AI CRM を選ぶときに、何を重視すべきですか？**

* 業務フローにどこまでカスタマイズが必要か
* AI が CRM データとどこまで連携できるか
* 製品形態が自社の運用に合っているか
* チームに必要な技術力があるか
* 継続的な保守運用に対応できるか

**Q5：オープンソース CRM と Salesforce では、コストはどれくらい違いますか？**

A：50 人規模のチームが 3 年利用する想定では、以下が目安です。

* Salesforce：およそ \$150-300 / ユーザー / 月 × 50 人 × 36 か月 = \$270,000-\$540,000
* NocoBase：オープンソース版は無料。自社導入コストを抑えやすく、商用版は一括 \$800-\$8,000 で選択可能
* Twenty：セルフホスト時の運用コストは年間およそ \$5,000（サーバー + 保守）
* Krayin CRM：オープンソース版は無料で、自社導入コストを抑えやすい

**Q6：これらのオープンソース CRM は、どの AI モデルに対応していますか？**

A：NocoBase は OpenAI（GPT-4 / GPT-3.5）、Claude、ローカルモデル（Ollama など）に対応しています。Twenty と Krayin の AI 機能は現在開発中で、主要な商用モデルへの対応が見込まれています。

**Q7：非技術系のチームでも使えますか？**

A：Twenty と Krayin CRM は、非技術チームでも導入しやすいです。どちらも比較的そのまま使い始めやすい構成です。NocoBase はある程度の開発的な考え方が必要ですが、CRM 2.0 の完成済みソリューションテンプレートが用意されており、ワンクリックで復元して利用できます。

**Q8：データ移行の難易度はどうですか？**

A：3 つとも CSV インポートに対応しています。Salesforce から移行する場合は、API やサードパーティーツールの利用が必要です。NocoBase は複数データソースに対応しているため、既存データベースへ直接接続し、移行コストを抑えやすいのが特徴です。

**Q9：有償サポートはありますか？**

A：NocoBase はエンタープライズ向けサポートとカスタマイズサービスを提供しています。Twenty には商用クラウド版があります。Krayin は有償の技術サポートとホスティングサービスを提供しています。

**Q10：最も活発なコミュニティはどれですか？**

A：GitHub の数値ベースでは、Twenty（40.2k stars、592 contributors）> NocoBase（21.7k stars、106 contributors）> Krayin（21.7k stars、41 contributors）です。ただし、NocoBase もコミュニティとプラグインエコシステムの成長が速い点は見逃せません。

この記事が役に立ったら、オープンソース AI CRM に関心のある方にもぜひ共有してください。💕

**関連読み物：**

* [GitHub における 3 つのオープンソース AI ERP 比較：NocoBase、Odoo、ERPNext](https://www.nocobase.com/ja/blog/top-3-open-source-erp-with-ai-on-github-nocobase-vs-odoo-vs-erpnext)
* [GitHubで人気の高いオープンソースAIプロジェクト管理ツール5選](https://www.nocobase.com/ja/blog/5-most-popular-open-source-ai-project-management-tools-on-github)
* [注目のオープンソース AI 工单システム 6選](https://www.nocobase.com/ja/blog/6-best-open-source-ai-ticketing-systems)
* [OSSデータ管理ツールを再考する：業務向け4選](https://www.nocobase.com/ja/blog/4-open-source-data-management-tools-for-business-systems)
* [実例で見る ビジネスプロセス向け軽量エンタープライズソフトウェア 4 選](https://www.nocobase.com/ja/blog/4-lightweight-enterprise-software-for-business-processes)
* [6つの企業向けソフトウェア：社内業務でExcelの代替となる製品 ](https://www.nocobase.com/ja/blog/6-enterprise-softwares-to-replace-excel-for-internal-operations)
* [CRUD実装の重複を減らすためのオープンソースツール10選](https://www.nocobase.com/ja/blog/10-open-source-tools-developers-use-to-reduce-repetitive-crud)
* [GitHub スター数が最も多いAIワークフロープロジェクトTop 12](https://www.nocobase.com/ja/blog/top-12-ai-workflows-projects-with-the-most-github-stars)
