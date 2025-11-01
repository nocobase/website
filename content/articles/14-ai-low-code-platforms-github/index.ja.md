最近、Reddit の[r/AI\_Agents](https://www.reddit.com/r/AI_Agents/comments/1iwsiby/best_lowcode_ai_agent_builder/)を見ていたところ、とてもリアルな質問が投稿されていました：

![Reddit1.png](https://static-docs.nocobase.com/image%20(1)-qx24dx.png)

> *「AI に実際のタスクを任せて、プロセスとして動かせるローコードツールって、本当にあるの？」*

一見すると簡単な問いですが、多くの開発者が感じている本音を突いています。今では「AI対応のローコードプラットフォーム」は数多くありますが、その多くはチャット機能を追加しただけで、できるのはSQLの生成やフォーム項目の補完程度。AI がフローを実行し、API を呼び出し、Agent として動けるツールは、実際のところまだ少数です。

コメントでは意見が分かれ、こんな声もありました：

![Reddit2.png](https://static-docs.nocobase.com/image-4j39lb.png)

> *「AI系ノーコードプラットフォームなんて1年も持たないよ。もしAIが本当にすごいなら、わざわざフローチャートをドラッグして機能を作る必要なんてないだろ。」*

過激な意見ではありますが、「AIがこれだけ進化しているのに、ノーコードは本当に必要なのか？いずれ消えてしまうのでは？」という不安を反映しているのも事実です。

ただ、このコメントは**すでに8か月前**のものです。そして今振り返ると、そうしたツールはなくなるどころか、さらに成熟し、新しいプロジェクトも次々と登場しています。

実際に、数日前には💡[「GitHubで人気のオープンソースAIノーコードツール」](https://www.nocobase.com/ja/blog/top-11-github-open-source-no-code-ai-tools)を整理しましたが、Star数やコミュニティの活発さ、機能の完成度を見る限り、多くのツールが順調に進化を続けています。ノーコード／ローコード＋AIは一過性のブームではなく、実際に使われ、試され、進化し続けていると言えます。

もちろん、疑問の声にも意味があります。別のコメントではこう指摘されています：

![Reddit3.png](https://static-docs.nocobase.com/img_v3_02rc_522ac857-0534-4006-ae62-6b989e7e13bg-v1yz3w.png)

> *「オープンソースの代替も見た方がいい。ほとんどのローコードAIツールはまだ初期段階。
> でも大事なのは、まず解決したい課題を明確にしてからツールを選ぶこと。
> ‘AI Agent’と呼ばれているものの中には、ただの自動化にLLMをかぶせただけのものも多い。」*

確かにその通りで、多くの「AI Agentプラットフォーム」はLLMを組み込んだ自動化ツールにすぎません。

これまでにも、💡[「注目すべきAI Agentプロジェクト」](https://www.nocobase.com/ja/blog/github-open-source-ai-agent-projects)や💡[「優秀なAIオープンソースツール」](https://www.nocobase.com/ja/blog/github-open-source-ai-projects)などを紹介してきましたが、今回はテーマを「ノーコードかどうか」ではなく、そこから自然にローコードへと広げています。

ノーコードは「コードを書かずにAIを使えること」に重きを置いていますが、ローコードはビジネスを理解し、少し技術知識もある人を対象にしており、**データモデリング、プロセス設計、権限管理、プラグイン拡張**など、よりシステム構築に近い機能を重視しています。

そこで、GitHub の[「low-code」](https://github.com//topics/low-code)トピックから出発し、次の条件を満たすツールに注目しました：

* ⭐ Star 数・更新頻度・ユーザーのフィードバックなど、コミュニティの人気と開発が活発であること
* 🤖 公式サイトやドキュメントで AI 機能が明確に示されており、単なるチャット窓口ではないこと
* 🛠️ ローカル環境への導入や拡張が可能で、実際のプロダクトや企業システムにも使えること

これらの基準に基づき、AI を実装済みで、今のローコード領域を代表すると言える14のプラットフォームを選びました。

ツールごとに方向性は異なり、業務システム構築向けのものもあれば、Agent型ワークフローに特化したもの、データ管理・スプレッドシート型のものもあります。

詳細に入る前に、14ツールの「立ち位置」と「AIの使われ方」をざっくり把握したい方のために、以下の比較表を用意しました👇

**総合比較表（AI機能 × ツールのポジション）**


| ツール   | 主なカテゴリ     | AIの役割                           | フロー拡張              | モデリング/ページ | データ/テーブル | 跨領域対応                      |
| -------- | ---------------- | ---------------------------------- | ----------------------- | ----------------- | --------------- | ------------------------------- |
| NocoBase | 業務システム     | データモデル・ページ・ロジック生成 | ✅（プラグイン+自動化） | ✅（フル機能）    | ✅              | ⭐ 高（データ+システム+フロー） |
| ToolJet  | 業務システム     | AI Copilotでページ/API生成         | ⚠️（軽量フロー）      | ✅                | ⚠️            | 中                              |
| Appsmith | 業務システム     | AIでSQLやフォームロジック生成      | ⚠️                    | ✅                | ⚠️            | 中                              |
| Budibase | 業務システム     | AIによるフィールド補完や文生成     | ⚠️                    | ✅                | ⚠️            | 低                              |
| refine   | 業務システム     | CRUDロジック・コード生成           | ❌                      | ✅（コード寄り）  | ❌              | 否                              |
| n8n      | ワークフロー     | AIノードでタスク実行・API呼出し    | ✅                      | ❌                | ❌              | 否                              |
| Dify     | ワークフロー     | Agent、ナレッジ、ツール呼出し      | ✅                      | ❌                | ⚠️            | 否                              |
| Flowise  | ワークフロー     | RAG、LLMチェーンの可視化           | ⚠️                    | ❌                | ⚠️            | 否                              |
| Kestra   | ワークフロー     | AIによるYAMLフロー生成             | ✅                      | ❌                | ❌              | 否                              |
| Node-RED | ワークフロー/IoT | AIノード＋デバイス/イベント連携    | ⚠️                    | ❌                | ❌              | 否                              |
| Sim      | ワークフロー     | 複数Agentの協調フロー生成          | ⚠️                    | ❌                | ❌              | 否                              |
| NocoDB   | データ管理       | AI補完・スマートフィールド・分析   | ⚠️                    | ❌                | ✅              | 低（データ中心）                |
| Teable   | データ管理       | AIチャット・レポート自動生成       | ⚠️                    | ❌                | ✅              | 低                              |
| Onlook   | AI UI            | UI/コンポーネント/Reactコード生成  | ❌                      | ⚠️（UI中心）    | ❌              | 特殊（UI特化）                  |

## **AI + 業務システム構築系ツール**

このカテゴリーの特徴は、AIが単に質問に答えたり処理を実行したりするだけでなく、「アプリ構築そのもの」に関与する点にあります。
つまり、データベース設計・フォーム作成・ページ構築・権限設定などを、AIの支援で高速に進められることが最大の魅力です。

CRM、承認ワークフロー、ERP、管理ダッシュボード、データ入力システムなど、構造化データとUIを組み合わせた業務アプリ開発に適しています。

---

### **NocoBase**

⭐️ Stars: 17k
公式サイト：[https://www.nocobase.com/](https://www.nocobase.com/)
GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

![noocobase.png](https://static-docs.nocobase.com/noocobase-auxpuu.png)

* **概要**：オープンソースのローコードプラットフォーム。AIが「仮想社員」として参加し、アプリ構築時のモデリングやページ生成を自動化するほか、運用時にはデータ分析や業務質問への回答も担当。
* **対象**：社内システム担当者、BtoBプロダクト開発チーム、SIerなど。
* **活用例**：CRMや承認管理、プロジェクト管理、受注管理など。プラグインによりAIによる自動モデリングやワークフロー拡張も可能。

---

### **ToolJet**

⭐️ Stars: 36.8k
公式サイト：[https://www.tooljet.ai/](https://www.tooljet.ai/)
GitHub：[https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)

![ToolJet.png](https://static-docs.nocobase.com/ToolJet-7balkk.png)

* **概要**：企業向けローコードツールで、「AI Copilot + ビジュアルUI + API連携」を軸に設計。
* **対象**：エンジニアチームや運用／データ部門、管理画面を素早く構築したい開発者。
* **活用例**：社内ツール、バックエンド管理画面、API駆動型データアプリ。AIがSQL作成やUI配置、ロジック生成をサポート。

---

### **Appsmith**

⭐️ Stars: 38.3k
公式サイト：[https://www.appsmith.com/](https://www.appsmith.com/)
GitHub：[https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

![Appsmith.png](https://static-docs.nocobase.com/Appsmith-ycvv0e.png)

* **概要**：オープンソースの内部アプリ構築プラットフォーム。「Appsmith AI」により、SQLクエリ、フォームロジック、コンポーネント設定を自動生成。
* **対象**：フロントエンド開発者、データエンジニア、迅速にCRUDツールを構築したいチーム。
* **活用例**：データ照会やダッシュボード、DB管理など。自然言語入力からAIがSQLを生成し、結果を自動表示できる。

---

### **Budibase**

⭐️ Stars: 27.2k
公式サイト：[https://budibase.com/](https://budibase.com)
GitHub：[https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

![Budibase.png](https://static-docs.nocobase.com/Budibase-gjjun3.png)

* **概要**：データベース設計やフォーム作成をノーコードで行える業務アプリ構築ツール。AIによるフィールド補完やテキスト生成にも対応。
* **対象**：中小企業チーム、軽量アプリ開発者、ノーコード実践者。
* **活用例**：社内フォーム、データ入力、簡易業務アプリなど。AIで入力補助やダミーデータ生成が可能だが、複雑な業務ロジックにはやや弱い。

---

### **refine**

⭐️ Stars: 33.1k
公式サイト：[https://refine.dev/](https://refine.dev/)
GitHub：[https://github.com/refinedev/refine](https://github.com/refinedev/refine)

![refine.png](https://static-docs.nocobase.com/refine-64wrxv.png)

* **概要**：Reactベースのフロントエンド開発フレームワーク。CRUDや認可、UIロジックの自動生成に強く、AIによるコード補完やAPI接続支援を提供。
* **対象**：フロントエンド開発者や、可視化よりも柔軟性を重視する開発チーム。
* **活用例**：管理パネルや分析ダッシュボードなど。コード制御を保ちつつ開発効率を高められるが、バックエンド設計機能は含まれない。

## **AI ワークフロー／エージェント編成系**

この系統のツールは、AI を回答生成の補助にとどめず、フロー実行そのものに組み込み、ツール呼び出しや操作のトリガー、業務オートメーションの推進を担わせる点が特徴です。
「AI 強化型のプロセスエンジン」「エージェント実行基盤」に近い立ち位置で、フル機能の業務システムを作るローコード基盤ではありません。
自動化と実行力に秀でますが、複雑なデータモデリングや権限設計、画面構築は原則として対象外です。

### **n8n**

⭐️ Stars: 151k
公式サイト：[https://n8n.io/](https://n8n.io/)
GitHub：[https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

![n8n.png](https://static-docs.nocobase.com/n8n-8riwih.png)

* **概要**：オープンソースのワークフロー自動化基盤。AI ノードと API 連携フローを組み合わせて実行可能。
* **対象**：オペレーション担当、テクニカルサポート、自動化エンジニア、中小規模の社内チーム。
* **適用例**：コンテンツ生成の自動化、データ同期、メール応答、AI を意思決定に組み込む自動処理（例：自動返信 → DB 書き込み → メール送信）。

---

### **Dify**

⭐️ Stars: 117k
公式サイト：[https://dify.ai/](https://dify.ai/)
GitHub：[https://github.com/langgenius/dify](https://github.com/langgenius/dify)

![Dify.png](https://static-docs.nocobase.com/Dify-gk2be6.png)

* **概要**：AI ネイティブなアプリ／エージェントのワークフロー基盤。モデル選択、ナレッジ、メモリ、ツール呼び出しを備える。
* **対象**：スマート FAQ、企業向けナレッジアシスタント、AI アプリの試作を行うプロダクトチームや開発者。
* **適用例**：社内知識に基づく Q&A、チケットの自動処理、API 実行を伴うエージェントサービス。

---

### **Flowise**

⭐️ Stars: 46k
公式サイト：[https://flowiseai.com/](https://flowiseai.com/)
GitHub：[https://github.com/FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise)

![Flowise.png](https://static-docs.nocobase.com/Flowise-2vawwu.png)

* **概要**：LangChain を基盤とした可視化フローツール。RAG や対話型エージェントを構築できる。
* **対象**：AI 開発者、迅速なデモを求めるチーム、創業初期のプロダクト検証。
* **適用例**：ナレッジベース Q&A、簡易ボット、多段推論のプロトタイプ。複雑な業務ロジックやシステム構築は非対象。

---

### **Kestra**

⭐️ Stars: 22.7k
公式サイト：[https://kestra.io/](https://kestra.io/)
GitHub：[https://github.com/kestra-io/kestra](https://github.com/kestra-io/kestra)

![Kestra.png](https://static-docs.nocobase.com/Kestra-1n19xy.png)

* **概要**：バックエンドのタスク編成／データスケジューリング基盤。AI Copilot によるワークフロー自動生成をサポート。
* **対象**：データエンジニア、バックエンド開発、DevOps チーム。
* **適用例**：定時実行の自動作成、データクレンジング、API 呼び出しのタスク連鎖など。サーバーサイド実行型に強み。

---

### **Node-RED**

⭐️ Stars: 22.2k
公式サイト：[https://nodered.org/](https://nodered.org/)
GitHub：[https://github.com/node-red/node-red](https://github.com/node-red/node-red)

![Node-RED.png](https://static-docs.nocobase.com/Node-RED-0c9pxy.png)

* **概要**：イベント駆動の可視化フロー。IoT／システム連携で広く採用。
* **対象**：自動化エンジニア、ハードウェア開発者、スマートホームや IoT の開発チーム。
* **適用例**：カメラ認識 → AI 判定 → スイッチ操作、デバイス異常 → AI 解析 → アラート発報など。

---

### **Sim**

⭐️ Stars: 17.2k
公式サイト：[https://www.sim.ai/](https://www.sim.ai/)
GitHub：[https://github.com/simstudioai/sim](https://github.com/simstudioai/sim)

![Sim.png](https://static-docs.nocobase.com/Sim-sygfqw.png)

* **概要**：マルチエージェント協調に特化。可視化で構築・実行し、API として公開可能。
* **対象**：多役割のエージェントシステムを構築したい AI チーム、インテリジェントアシスタントのスタートアップ。
* **適用例**：AI アシスタント、自動レポート生成、実行ロボット。エコシステム成熟度は n8n／Dify よりも低め。

## **AI × 表・データベースのスマート化系**

このタイプのツールは、業務フローやシステム構築ではなく、\*\*「表やデータをどれだけ賢く使えるか」\*\*に重点を置いています。

AI の役割は、データの生成・補完・検索・分析であり、複雑な業務ロジックを処理することではありません。

イメージとしては「Airtable / Notion のデータベース＋AI」。データ運用やナレッジ整理に向いており、大規模な業務システムや自動化フロー構築には向きません。

### **NocoDB**

⭐️ Stars: 58.4k
公式サイト：[https://nocodb.com/](https://nocodb.com/)
GitHub：[https://github.com/nocodb/nocodb](https://github.com/nocodb/nocodb)

![NocoDB.png](https://static-docs.nocobase.com/NocoDB-qk45qn.png)

* **概要**：オープンソース版 Airtable。MySQL や PostgreSQL など既存のデータベースを、そのまま表形式のUIとして扱えるようにするツール。
* **対象**：データ運用チーム、社内プロジェクト管理、ライトな CRM を求めるユーザー。
* **活用例**：コンテンツ管理、顧客リスト、在庫データ、チームの共有表など。AI は主にフィールドの自動提案、テキスト生成、補完、Insights（分析提案）で活用。

---

### **Teable**

⭐️ Stars: 20k
公式サイト：[https://teable.ai/](https://teable.ai/)
GitHub：[https://github.com/teableio/teable](https://github.com/teableio/teable)

![Teable.png](https://static-docs.nocobase.com/Teable-n74cv7.png)

* **概要**：PostgreSQL ベースの共同編集型データベースで、AI チャットや自動入力機能と組み合わせられる。
* **対象**：Notion・Airtable ユーザー、データを協働で扱いながらAIによる分析支援も求めるチーム。
* **活用例**：コンテンツ管理、軽量なデータウェアハウス、プロジェクト用スプレッドシート。自然言語でのデータ検索、テーブル自動生成、レポート出力にも対応。

---

## **その他のカテゴリにまたがるツール**

分類の中で、どれにも完全には当てはまらないツールもあります。その代表が **Onlook** です。

⭐️ Stars: 22.9k
公式サイト：[https://onlook.com/](https://onlook.com/)
GitHub：[https://github.com/onlook-dev/onlook](https://github.com/onlook-dev/onlook)

![Onlook.png](https://static-docs.nocobase.com/Onlook-bnn4iz.png)

Onlook の特徴は、AI による「UI自動生成」を中心に据えている点です。

自然言語やワイヤーフレームを入力すると、ページ構造・コンポーネント配置・React コードまで自動で作成。デザインツールとフロントエンド開発のちょうど中間に位置する存在です。

## **単一カテゴリに収まらないツール──例：NocoBase**

本記事ではツールを「業務システム構築」「ワークフロー／Agent」「データ表／データベース」の3つに分類しましたが、実際に比較してみると、いくつかのツールはこの枠をまたいでいます。
その中でも**最も機能が横断的で、設計が一貫しているのが NocoBase**です。

NocoBase の特徴は次の3点に表れています：

* データプラットフォームとして：テーブル構造、フィールド、ビュー、API を備えている
* 業務システム構築ツールとして：ページやフォーム、権限、ページロジック、リレーションまで生成できる
* 拡張基盤として：プラグインとオープンな構造により、ワークフローや自動化、AI ノードの追加による処理実行にも対応できる

---

もちろん、他にも「跨ジャンル的」なツールは存在します。

* Appsmith／ToolJet／Budibase：画面構築が中心だが、「ボタンクリック → API → データ保存」程度の軽いフローも扱える
* NocoDB／Teable：もともとはデータ管理寄りだが、AI自動補完やWebhook、簡易ルール実行などの機能を追加し始めている

ただし、これらは既存機能にAIを足して体験を良くしたものであり、フローエンジンやシステム基盤としては構造的に限定的です。

その点、NocoBase は単に複数分野をカバーしているのではなく、データモデリング → 画面生成 → 権限管理 → ワークフロー／AI 拡張までを一つの構造で成立させた“統合型プラットフォーム”。
このレベルの一体設計は、オープンソースのローコード領域では稀少です。

## おわりに

システムはかつてコードで作られ、その後はドラッグ＆ドロップで作られるようになり、今では自然言語で「こう動いてほしい」と記述する時代に近づいています。

> *“AI doesn’t remove the work — it just moves the work.”*

つまり問われているのは「AI を使っているかどうか」ではなく、AI をデータ・業務ロジック・フローにどう統合し、システムの一部にできるかです。

AI は「対話するもの」から「構築するもの」へ進化しつつあります。まだ完璧ではないものの、方向性はすでに明確です。
未来のシステムは、コードを書くのではなく言葉で設計されるのかもしれません。
そして私たちも、コードではなく解決したいビジネスの課題から出発するようになるでしょう。

もしここまで読んで「確かに」と感じたなら、ぜひこのリストを **AI × ローコード** に興味のある仲間ともシェアしてください。👍

**関連読み物：**

* [GitHubで人気のオープンソースノーコードAIツール11選](https://www.nocobase.com/ja/blog/top-11-github-open-source-no-code-ai-tools)
* [GitHub で Star 数トップ18 のオープンソース AI Agent プロジェクト](https://www.nocobase.com/ja/blog/github-open-source-ai-agent-projects)
* [GitHubで最もスターを獲得したオープンソースAIプロジェクト20選](https://www.nocobase.com/ja/blog/github-open-source-ai-projects)
* [GitHub でスター数トップ 8 のオープンソース MCP プロジェクト](https://www.nocobase.com/ja/blog/github-open-source-mcp-projects)
* [GitHubスター数トップのオープンソースWebアプリ7選](https://www.nocobase.com/ja/blog/github-open-source-web-applications)
* [GitHub のスター数上位 40 の開発者ツール](https://www.nocobase.com/ja/blog/github-open-source-developer-tools)
* [2025 年 GitHub 上で最も成長が速い上位 15 のオープンソース低コードプロジェクト](https://www.nocobase.com/ja/blog/github-top15-fastest-growing-open-source-low-code-projects)
