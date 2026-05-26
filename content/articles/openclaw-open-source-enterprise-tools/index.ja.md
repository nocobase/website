OpenClaw が最初に注目を集めたのは、AI に実際の作業を任せたいという期待に応えたからです。

以前、私たちは [OpenClaw に似たオープンソース AI Agent プロジェクト](https://www.nocobase.com/ja/blog/best-open-source-ai-projects-github-2026) を紹介する記事を書きました。当時の流れは明確でした。AI Agent はチャット画面の中だけにとどまらず、実際のワークフローに入り込み、より具体的なタスク実行に関わり始めていました。

ただ、最近あらためて OpenClaw を見てみると、初期ほどの熱量は感じられなくなっています。

コード生成、ワークフロー編成、企業向け AI アプリケーションに特化した Agent ツールと比べると、OpenClaw は少しずつ話題の中心から外れてきたようにも見えます。

では、今でも OpenClaw を使っている人はいるのでしょうか。使っているとすれば、何に使っているのでしょうか。

![reddit.png](https://static-docs.nocobase.com/reddit-kqsyww.png)

[Reddit](https://www.reddit.com/r/OpenClawUseCases/comments/1tikt2f/what_are_you_guys_actually_using_openclaw_for/) コミュニティでは、OpenClaw が日常的にどのように使われているのかについて議論されています。投稿を見ると、AI やニュースの追跡、リマインダーとフォローアップ、定期サマリー、管理画面や業務システムの監視、タスクやメモの整理などが、比較的よく見られる使い方です。コメントの中には、より業務に近い使い方もありました。例えば、財務リマインダー、カスタマーサポートの振り分け、マーケティングアシスタント、Telegram を通じた ERP、CRM、自動化ツールとの接続、日次ブリーフィングや当日のサマリー生成などです。

OpenClaw の価値は、チャットツール経由で PC を操作することだけではありません。規則的、周期的で、見落とされやすい業務上の変化を継続的に監視させることにもあります。

ここからは、OpenClaw と組み合わせやすいオープンソースツールをいくつか紹介します。OpenClaw が企業内部のプロセスにどのように入り込み、より実務に近い形で使えるのかを見ていきます。

## 1. NocoBase

**公式サイト**：[https://www.nocobase.com/](https://www.nocobase.com/)

**GitHub**：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

**GitHub Star**：22.5k

### 概要

![NocoBase.png](https://static-docs.nocobase.com/NocoBase-t8anfe.png)

NocoBase は、企業内部システムや業務ポータルの構築に適した、オープンソースの AI ノーコード / ローコードプラットフォームです。CRM、ERP、プロジェクト管理のような単一の業務システムだけでなく、より複雑な企業内アプリケーションの基盤としても利用できます。

複数のデータソースに接続でき、データモデルをもとに複雑な業務関係を整理できます。権限管理はフィールド単位まで対応しており、ワークフロー、監査ログ、プラグイン機構なども備えています。これにより、チームは同じプラットフォーム上で、業務データ、プロセスルール、操作記録、システム拡張をまとめて管理できます。

AI 機能についても、NocoBase は一度きりのアプリ生成にとどまりません。AI はシステム構築にも、日常の業務処理にも関われます。AI 従業員機能、AI Skills、CLI などを通じて、データモデル設計、ページ設定、ワークフロー編成、権限設定、プラグイン管理などを支援できます。さらに AI 従業員は、データ分析、リスク監視、承認連携、タスク分配にも参加できるため、AI を既存の業務システムの中で活用できます。

![NocoBase2.png](https://static-docs.nocobase.com/NocoBase2-h88kc4.png)

### 適したシーン

* **企業内部業務システム**：CRM、ERP、プロジェクト管理、資産管理、承認、チケット管理などの内部アプリを構築し、データ、権限、プロセスを一元管理できます。
* **部門横断の協働プロセス**：タスク、承認、リスク、フィードバック、担当者、処理ステータスを記録し、異なる役割のメンバーが同じ業務データをもとに協働できます。
* **AI が参加する業務ポータル**：顧客フィードバック、異常記録、タスク分配、データ分析など、AI と人が一緒に処理する業務を受け止められます。OpenClaw を Feishu、Telegram、WhatsApp などのチャットツールに接続すれば、チームはチャット上から検索、受信、リマインダーなどのタスクを開始し、その結果を Feishu ドキュメント、Google Sheets、その他のコラボレーションツールに整理できます。

例えば CRM の場合、Telegram から OpenClaw に直接指示できます。NocoBase 内の顧客リードを確認し、消費金額が 3 万を超える顧客を抽出して、フォローアップリストに整理する、という流れです。OpenClaw はタスクを受け取ると、NocoBase の顧客データを参照し、会社名、消費金額、会員ランク、担当者、地域などの情報を取り出して Google Sheets にまとめます。チームはそのまま内容を確認し、次の対応を割り当てられます。

![NocoBase3en.png](https://static-docs.nocobase.com/NocoBase3en-beckzd.png)

**タスク説明例**：

```text
NocoBase の顧客リードを確認し、消費金額が 3 万以上の顧客を抽出して、今日優先的にフォローすべきリストとして整理し、Google Sheets に生成してください。

リストには会社名、消費金額、会員ランク、担当者、地域を含め、どの顧客を優先的にフォローすべきかも簡単に示してください。
```

### 関連リソース

ドキュメント：[https://docs.nocobase.com/](https://docs.nocobase.com/)

AI ドキュメント：[https://docs.nocobase.com/ja/ai/](https://docs.nocobase.com/ja/ai/)

CLI：[https://docs.nocobase.com/ja/api/cli/](https://docs.nocobase.com/ja/api/cli/)

Skills：[https://docs.nocobase.com/ja/ai-builder#nocobase-skills](https://docs.nocobase.com/ja/ai-builder#nocobase-skills)

MCP：[https://docs.nocobase.com/ja/ai/mcp/](https://docs.nocobase.com/ja/ai/mcp/)

OpenClaw + NocoBase：[https://docs.nocobase.com/ja/ai/openclaw](https://docs.nocobase.com/ja/ai/openclaw)

## 2. n8n

**公式サイト**：[https://n8n.io/](https://n8n.io/)

**GitHub**：[https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

**GitHub Star**：190k

![n8n.png](https://static-docs.nocobase.com/n8n-y0bpua.png)

### 概要

n8n は、技術チーム向けのワークフロー自動化プラットフォームです。ビジュアルなフロー構築、カスタムコード、セルフホスト、400 以上の連携に対応しています。異なるシステム、API、データベース、業務ツールを接続し、繰り返し発生する業務プロセスを継続的に動く自動化ワークフローに変えるのに適しています。

n8n では、ワークフロー内に大規模言語モデル、AI Agent、ツール呼び出し、自社データを組み込めます。チームは、メールサマリー、リード処理、コンテンツ生成、カスタマーサポートの振り分け、データ検索などの AI 自動化フローを構築できます。また、フローキャンバス上で Agent の実行ステップを確認し、制御することもできます。

### 適したシーン

* **システム間のデータ同期**：CRM、フォーム、データベース、メール、Feishu、Slack などのツールを接続し、手作業によるコピーや重複入力を減らします。
* **業務プロセス自動化**：フォーム送信、リード割り当て、チケットの進行、承認リマインダー、ステータス同期などの定型プロセスを処理します。
* **AI ワークフロー編成**：モデル呼び出し、データ読み取り、コンテンツ生成、サマリー整理、結果の書き込みを安定したフローとして組み合わせます。

例えば、営業リード、顧客フィードバック、フォーム送信、チケット割り当てなどのプロセスが n8n で自動実行されている場合、OpenClaw に毎日チェックさせることができます。フローが失敗していないか、次のステップに進んでいないデータがないか、通知後に誰も対応していないものがないかを確認できます。

![n8n2.jpeg](https://static-docs.nocobase.com/n8n2-2tc3jw.jpeg)

**タスク説明例**：

```text
毎日午前 10 時に、n8n 内の営業リード、顧客フィードバック、プロジェクト通知に関連するワークフロー実行記録を確認してください。

直近 24 時間で実行に失敗した、再試行後も成功していない、または通知は送信されたが後続の処理記録がないフローを見つけ、今日のフロー異常リストとして整理してください。
```

### 関連リソース

ドキュメント：[https://docs.n8n.io/](https://docs.n8n.io/)

AI ドキュメント：[https://docs.n8n.io/advanced-ai/](https://docs.n8n.io/advanced-ai/)

AI ワークフロー入門：[https://docs.n8n.io/advanced-ai/intro-tutorial/](https://docs.n8n.io/advanced-ai/intro-tutorial/)

AI Workflow Builder：[https://docs.n8n.io/advanced-ai/ai-workflow-builder/](https://docs.n8n.io/advanced-ai/ai-workflow-builder/)

## 3. RAGFlow

**公式サイト**：[https://ragflow.io/](https://ragflow.io/)

**GitHub**：[https://github.com/infiniflow/ragflow](https://github.com/infiniflow/ragflow)

**GitHub Star**：81.2k

![RAGFlow.png](https://static-docs.nocobase.com/RAGFlow-ui3t4v.png)

### 概要

RAGFlow は、オープンソースの RAG エンジンです。企業内部文書、ナレッジベース、顧客フィードバック、チケット記録、製品資料、プロジェクト資料の処理に適しています。分散した資料を検索、Q&A、引用に使える知識ソースへ変換し、大規模言語モデルにより信頼性の高いコンテキストを提供できます。

RAGFlow は RAG と Agent 機能を組み合わせており、プリセット Agent テンプレート、メモリ機能、データ同期、文書解析、知識検索に対応しています。また、OpenClaw 向けの Skill も提供しており、OpenClaw から RAGFlow のデータセットにアクセスできます。

### 適したシーン

* **顧客フィードバックナレッジベース**：顧客の質問、チケット記録、解決策、高頻度の要望を蓄積できます。
* **内部文書 Q&A**：製品ドキュメント、操作マニュアル、社内制度、SOP、プロジェクト資料を検索できます。
* **ナレッジベースの不足検出**：ユーザーが繰り返し質問しているにもかかわらず、文書でカバーされていない問題を見つけ、FAQ や SOP の更新につなげられます。

例えば、顧客フィードバックやチケットで同じ種類の問題が繰り返し出ているのに、ナレッジベースや FAQ に明確な回答がない場合、OpenClaw はナレッジベース改善リストを作成し、ドキュメント、カスタマーサポート、製品チームに内容追加を促せます。

![RAGFlow2.png](https://static-docs.nocobase.com/RAGFlow2-bdoqgz.png)

**タスク説明例**：

```text
毎週金曜日の午後 3 時に、RAGFlow 内の顧客フィードバック、チケット記録、製品ドキュメントを確認してください。

ユーザーが繰り返し質問しているにもかかわらず、ナレッジベースに明確な回答がない問題を見つけ、今週のナレッジベース不足リストとして整理してください。追加を提案する FAQ タイトル、参考ソース、担当チームを含めてください。
```

### 関連リソース

ドキュメント：[https://ragflow.io/docs/](https://ragflow.io/docs/)

API ドキュメント：[https://ragflow.io/docs/dev/http_api_reference](https://ragflow.io/docs/dev/http_api_reference)

RAGFlow + OpenClaw：[https://ragflow.io/blog/ragflow-x-openclaw-the-enterprise-aware-claw](https://ragflow.io/blog/ragflow-x-openclaw-the-enterprise-aware-claw)

RAGFlow Skill：[https://clawskills.sh/skills/angusthefuzz-ragflow](https://clawskills.sh/skills/angusthefuzz-ragflow)

## 4. ERPNext

**公式サイト**：[https://frappe.io/erpnext](https://frappe.io/erpnext)

**GitHub**：[https://github.com/frappe/erpnext](https://github.com/frappe/erpnext)

**GitHub Star**：35k

![ERPNext.png](https://static-docs.nocobase.com/ERPNext-idy0ew.png)

### 概要

ERPNext は、オープンソースの ERP システムです。会計、購買、販売、CRM、在庫、製造、プロジェクト、POS、品質、サポートなど、企業運営に必要なモジュールを幅広くカバーしています。日常業務で発生する注文、在庫、購買、サプライヤー、顧客、請求書、製造オーダー、プロジェクトコストなどのデータを記録するのに適しています。

ERPNext 自体は標準的な ERP システムに近く、ネイティブな AI Agent 機能を主な特徴としているわけではありません。その価値は、構造化され、追跡可能な業務データ基盤を提供できることにあります。AI 分析、異常検出、レポート生成、業務 Q&A のデータソースとして活用しやすいシステムです。

### 適したシーン

* **在庫・購買管理**：資材、在庫、購買注文、サプライヤー納品、在庫アラートを管理できます。
* **販売注文管理**：顧客注文、出荷ステータス、販売請求書、注文履行を追跡できます。
* **製造・プロジェクトコスト管理**：製造オーダー、生産進捗、プロジェクトコスト、リソース消費を記録できます。

例えば、在庫が安全在庫を下回る、購買注文が予定入荷日を過ぎても未入荷のままになっている、販売注文が出荷予定日を過ぎても未出荷になっている、重要顧客の注文に異常がある、返品率が急に上がる、といった状況は、OpenClaw に定期チェックさせるのに適しています。

**タスク説明例**：

```text
毎日午前 10 時に、ERPNext 内の在庫、購買、販売注文データを確認してください。

在庫が安全在庫を下回っている、購買が期限を過ぎても未着、販売注文が期限を過ぎても未出荷、重要顧客の注文に異常がある記録を抽出し、今日のサプライチェーン異常リストを生成してください
```

### 関連リソース

ドキュメント：[https://docs.erpnext.com/homepage](https://docs.erpnext.com/homepage)

Frappe Framework：[https://github.com/frappe/frappe](https://github.com/frappe/frappe)

Frappe REST API ドキュメント：[https://docs.frappe.io/framework/user/en/api/rest](https://docs.frappe.io/framework/user/en/api/rest)

Frappe JS SDK：[https://github.com/frappe/frappe-js-sdk](https://github.com/frappe/frappe-js-sdk)

## 5. Plane

**公式サイト**：[https://plane.so/](https://plane.so/)

**GitHub**：[https://github.com/makeplane/plane](https://github.com/makeplane/plane)

**GitHub Star**：49.7k

![Plane.png](https://static-docs.nocobase.com/Plane-awve4i.png)

### 概要

Plane は、オープンソースのプロジェクト管理プラットフォームです。Jira、Linear、Monday、ClickUp の代替として、タスク、サイクル、プロジェクトドキュメント、プロダクトロードマップ、チームコラボレーションを管理できます。プロダクト、開発、デザイン、運用などのチームが、要件、バグ、タスク、マイルストーン、プロジェクト進捗を追跡するのに適しています。

Plane は、プロジェクト、ドキュメント、AI ワークフローを同じワークスペースにまとめます。Plane AI は、プロジェクト、サイクル、ページ内のコンテキストをもとに質問に答えることができ、プロンプトから作業構造を生成して、タスク分配、進捗サマリー、プロジェクト協働を支援できます。

### 適したシーン

* **開発タスク管理**：要件、バグ、タスク、サイクル、バージョン進捗を追跡できます。
* **プロダクトロードマップ管理**：製品計画、優先順位、マイルストーン、チーム横断の協働事項を管理できます。
* **プロジェクトリスクチェック**：遅延タスク、ブロックされている事項、担当者のいないタスク、長期間更新されていない要件を見つけられます。

例えば、プロジェクトマネージャーが毎日すべてのタスクを一つずつ確認する必要はありません。OpenClaw に毎日午後、注意すべきプロジェクトリスクをまとめさせ、担当者に通知させることができます。

**タスク説明例**：

```text
毎日午後 4 時に、Plane 内の今週アクティブなプロジェクトの issue と cycle を確認してください。

締切が近いのに更新がない、blocked が 48 時間を超えている、担当者がいない、review 待ちが 24 時間を超えているタスクを見つけ、今日のプロジェクトブロック要約として整理してください。
```

### 関連リソース

ドキュメント：[https://docs.plane.so/](https://docs.plane.so/)

開発者ドキュメント：[https://developers.plane.so/](https://developers.plane.so/)

API ドキュメント：[https://developers.plane.so/api-reference/introduction](https://developers.plane.so/api-reference/introduction)

## FAQ

### 1. どのような仕事が OpenClaw に向いていますか？

OpenClaw に向いている仕事には、通常 3 つの特徴があります。決まったチェック頻度があること、明確なデータソースがあること、判断ルールが比較的はっきりしていることです。

例えば、CRM のリードが期限内にフォローされているか、ERP の在庫が安全在庫を下回っていないか、プロジェクトタスクが遅れていないか、チケットが滞留していないか、ナレッジベースに高頻度の質問への回答が不足していないか、自動化フローが失敗していないかを毎日チェックするようなタスクです。このようなタスクでは、AI が最終判断を直接行う必要はありません。ただ、OpenClaw に先に異常を見つけさせ、要約を作成し、担当者に通知して処理につなげる用途には非常に向いています。

### 2. OpenClaw は企業内部システムで使えますか？

企業内部システムでは、OpenClaw は CRM、ERP、プロジェクト管理、ナレッジベース、プロセス自動化ツール内のデータ変化を定期的にチェックできます。異常、遅延、機会、未処理事項を整理することで、人が複数のシステムを何度も確認する時間を減らし、チームが業務リスクを早めに発見できるようにします。

### 3. 企業に多くの業務システムがある場合、どのツールで統合すべきですか？

企業に CRM、ERP、プロジェクト管理、ナレッジベース、フォーム、チケット、データダッシュボードなど、多くの業務システムがある場合は、NocoBase で統一された業務ポータルを構築することを検討できます。

NocoBase は、異なるシステムから来るリード、タスク、フィードバック、異常、承認、ナレッジベース改善タスクを構造化データとして整理できます。さらに、ページ、権限、ワークフロー、プラグイン体系を通じて管理できます。OpenClaw はこれらのデータを定期的にチェックし、対応が必要な事項を通知します。NocoBase は、その後の確認、割り当て、フォローアップ、振り返りを支える役割を担います。

### 4. 企業が OpenClaw とオープンソースツールを組み合わせて使う際に注意すべきことは何ですか？

権限、データセキュリティ、ログ記録、人的確認の仕組みを重点的に確認する必要があります。

OpenClaw は、業務システムにアクセスしたり、ツールを呼び出したり、データを読み取ったり、自動化フローを起動したりする可能性があります。そのため、最初は低リスクのタスクから始めることをおすすめします。例えば、ステータスチェック、要約生成、リマインダー送信、異常記録などです。財務承認、顧客への約束、契約確認、人事処理などの高リスク操作に関わる場合は、人的確認のステップを残すべきです。

### 5. OpenClaw はどの企業シーンから試すのがよいですか？

「低リスク、高頻度、ルールが明確」なシーンから始めるのがおすすめです。

例えば、営業リードのフォローアップリマインダー、プロジェクト遅延チェック、ナレッジベース不足の整理、自動化フロー失敗の監視、在庫アラートの集計、チケット滞留のリマインダーなどです。これらのタスクでは、OpenClaw が重要な判断を直接行う必要はありません。それでも、人による巡回チェックの負担を明確に減らせるため、効果も検証しやすくなります。

### 6. 企業が OpenClaw とオープンソースツールを組み合わせて使う際に注意すべきことは何ですか？

企業が OpenClaw を使う場合は、権限、データセキュリティ、ログ記録、人的確認の仕組みを重点的に確認する必要があります。

OpenClaw は、業務システムにアクセスしたり、データを読み取ったり、ツールを呼び出したり、自動化フローを起動したりする可能性があります。そのため、最初は低リスクのタスクから始めることをおすすめします。例えば、ステータスチェック、要約生成、リマインダー送信、異常記録などです。財務承認、顧客への約束、契約確認、人事処理などの高リスク操作に関わる場合は、人的確認のステップを残すべきです。

NocoBase のような内部ツールプラットフォームと組み合わせることもできます。NocoBase は、ロール権限、データテーブル権限、操作権限、ワークフロー、監査ログなどに対応しています。これにより、チームは役割ごとに何を見られるか、何を操作できるか、重要なプロセスに人的承認が必要かを管理できます。OpenClaw は発見と通知を担い、業務システムは権限制御、プロセス記録、その後の処理を担います。

## 結び

OpenClaw は、あくまで一つの出発点です。これからの企業アプリケーションにおいて、Agent はチャット入口のアシスタントにとどまらず、一時的にツールを呼び出す実行役にとどまるものでもありません。企業内ツール群に組み込まれる知的な協働レイヤーになっていくはずです。

人が毎回それぞれのシステムに入って、ステータスを確認し、異常を探し、進捗を追う必要は少なくなっていきます。Agent が業務上の変化を継続的に捉え、判断や処理が必要な事項を人の前に戻してくれるようになります。

この記事が役に立ったと思ったら、AI Agent と企業内部ツールを検討している方にぜひ共有してください。


**関連記事**：

* [What Open-Source Tools Work Well with OpenCode? 5 Projects to Try](https://www.nocobase.com/en/blog/opencode-open-source-tools-ai-agents)
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
