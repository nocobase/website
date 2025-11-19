📝 注：この記事は 2025 年 11 月 19日に最終更新されました。最新の情報を提供するため、定期的に情報を更新しています！😊


最近、Reddit でとても率直なコメントを見かけました。![Reddit2.png](https://static-docs.nocobase.com/image-4j39lb.png)

「AI を使ったノーコードプラットフォームなんて一年ももたない。もし AI が本当に強力なら、フロービルダーに頼る必要なんて無いはずだ。」

なかなか鋭い意見ですが、この投稿はすでに 8 か月前のものです。

いま振り返ると、当時の予想とは違い、これらのツールは消えるどころか着実に成熟し、新しいプロジェクトも次々と生まれています。

数日前には、[💡「GitHub で人気のオープンソース AI ノーコードツール」](https://www.nocobase.com/ja/blog/top-11-github-open-source-no-code-ai-tools)をまとめましたが、スター数、コミュニティの活発さ、機能の成熟度を見る限り、多くのツールは順調に進化し、AI 機能も継続して拡張されています。

もちろん Reddit では、

「今の AI 低コードツールはまだ初期段階。AI Agent と言っても、中身は LLM を載せた自動化ツールに近い」

という声もあります。![Reddit3.png](https://static-docs.nocobase.com/img_v3_02rc_522ac857-0534-4006-ae62-6b989e7e13bg-v1yz3w.png)

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---

しかし私たちが見てきた限りでは、低コードのエコシステムはむしろ着実に強くなっています。

データモデリング、フローロジック、プラグイン拡張、AI 協働といった領域は、すでに実際の業務要件を支えられるレベルに到達しています。

そこで今回は、GitHub の low-code タグを起点に、 **業務システム構築／Agent ワークフロー／データテーブル型アプリ**  の 3 つの視点から、いま注目すべき AI 対応低コードプラットフォームを整理しました。

詳細に入る前に、14 個のツールの位置づけと AI 対応度をざっと把握したい場合は、下の比較表を見ると一目でイメージできます👇

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

### **NocoBase**

⭐️ Stars: 20k

公式サイト：[https://www.nocobase.com/](https://www.nocobase.com/)

GitHub：[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

![noocobase.png](https://static-docs.nocobase.com/noocobase-auxpuu.png)

**概要**：NocoBase はデータモデルとプラグイン方式を核としたオープンソースのローコード開発基盤として始まりました。  2.0 では、AI がシステム構築や運用に直接参加でき、プラットフォーム内で JS を記述・実行して複雑な業務ロジックや自動化を実現。  さらに AI アシスタントを任意の場所に配置し、利用体験を向上させることができます

![noocobase2.png](https://static-docs.nocobase.com/noocobase2-83efsk.png)

**構築フェーズ**

AI アシスタントが自然言語からデータモデルやフィールドの関係、ページ構造、基本ロジックを自動生成。  従来のような多段階の設定を行う必要がなく、業務システムをより直感的かつスムーズに構築できます。  開発者の作業効率を大幅に引き上げる点が大きな特徴です。

![noocobase3.png](https://static-docs.nocobase.com/noocobase3-geirqa.png)

**利用フェーズ**

AI はシステム内のデータを基に、検索・分析・解釈を行い、業務に関する示唆や操作提案を出せます。  例：フォーム自動入力、顧客情報の要約、簡易調査など。

**対象**：社内システム担当者、BtoBプロダクト開発チーム、SIerなど。

**活用例**：CRMや承認管理、プロジェクト管理、受注管理など。プラグインによりAIによる自動モデリングやワークフロー拡張も可能。

### **ToolJet**

⭐️ Stars: 37k

公式サイト：[https://www.tooljet.ai/](https://www.tooljet.ai/)

GitHub：[https://github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)

![ToolJet.png](https://static-docs.nocobase.com/ToolJet-7balkk.png)

**概要**：ToolJet は企業内ツールの開発を効率化するためのプラットフォームとして知られており、AI の導入によって構築プロセスのスピードがさらに向上しました。  AI Copilot は自然言語からページ構造、コンポーネントの動作、基本的なインタラクションを自動生成し、開発者がコンポーネント・スクリプト・API などを行き来する手間を減らします。  「要件を説明 → 自動生成」という流れで作業量を削減できるため、内製ツールの構築がよりスムーズになり、開発や保守のコスト削減にもつながります。

**対象**：エンジニアチームや運用／データ部門、管理画面を素早く構築したい開発者。

**活用例**：社内ツール、バックエンド管理画面、API駆動型データアプリ。AIがSQL作成やUI配置、ロジック生成をサポート。

### **Appsmith**

⭐️ Stars: 38k

公式サイト：[https://www.appsmith.com/](https://www.appsmith.com/)

GitHub：[https://github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

![Appsmith.png](https://static-docs.nocobase.com/Appsmith-ycvv0e.png)

**概要**：Appsmith は社内向けツール構築に特化したオープンソースのローコード基盤で、安定したコンポーネント体系・豊富なデータ接続機能・成熟した CRUD サポートが強みです。  AI 機能の追加により、自然言語から SQL クエリ、フォームバリデーション、基本スクリプトを生成でき、画面設定も自動補助してくれるため、コードと設定を行き来する必要が減ります。  反復作業を AI に任せることで、内部ツール開発の効率を大きく高め、データアプリ構築のハードルを下げられます。

**対象**：フロントエンド開発者、データエンジニア、迅速にCRUDツールを構築したいチーム。

**活用例**：データ照会やダッシュボード、DB管理など。自然言語入力からAIがSQLを生成し、結果を自動表示できる。

### **Budibase**

⭐️ Stars: 27k

公式サイト：[https://budibase.com/](https://budibase.com)
GitHub：[https://github.com/Budibase/budibase](https://github.com/Budibase/budibase)

![Budibase.png](https://static-docs.nocobase.com/Budibase-gjjun3.png)

**概要**：Budibase は、社内向けアプリケーションのためのオープンソース低コードプラットフォームで、データモデリング、フォーム生成、基本的なフロー構築に強みがあります。中小規模の業務シーンに向いており、AI の追加によって構築体験が補強されています。  AI はフィールドの文言生成、データ補完、基本的なページ構造の作成を手伝うことで、フォーム設定やデータ入力における反復作業を軽減します。  複雑な業務ロジックにはまだ限界があるものの、軽量な業務システムや社内フォームツール、データ入力系アプリでは効率と使いやすさが向上しています。

**対象**：中小企業チーム、軽量アプリ開発者、ノーコード実践者。

**活用例**：社内フォーム、データ入力、簡易業務アプリなど。AIで入力補助やダミーデータ生成が可能だが、複雑な業務ロジックにはやや弱い。

### **Refine**

⭐️ Stars: 33k

公式サイト：[https://refine.dev/](https://refine.dev/)

GitHub：[https://github.com/refinedev/refine](https://github.com/refinedev/refine)

![refine.png](https://static-docs.nocobase.com/refine-64wrxv.png)

**概要**：refine は、管理画面や社内ツール構築に特化した React ベースのフレームワークで、CRUD、ルーティング、権限、データ接続といった一般的なシナリオに強いのが特徴です。  開発者は自然言語で画面や機能を記述するだけで、AI がページ構成、インタラクション、基本コードを生成し、そのまま使用できる React プロジェクトとして出力してくれます。

**対象**：フロントエンド開発者や、可視化よりも柔軟性を重視する開発チーム。

**活用例**：管理パネルや分析ダッシュボードなど。コード制御を保ちつつ開発効率を高められるが、バックエンド設計機能は含まれない。

## **AI ワークフロー／エージェント編成系**

この系統のツールは、AI を回答生成の補助にとどめず、フロー実行そのものに組み込み、ツール呼び出しや操作のトリガー、業務オートメーションの推進を担わせる点が特徴です。
「AI 強化型のプロセスエンジン」「エージェント実行基盤」に近い立ち位置で、フル機能の業務システムを作るローコード基盤ではありません。
自動化と実行力に秀でますが、複雑なデータモデリングや権限設計、画面構築は原則として対象外です。

### **n8n**

⭐️ Stars: 157k

公式サイト：[https://n8n.io/](https://n8n.io/)

GitHub：[https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

![n8n.png](https://static-docs.nocobase.com/n8n-8riwih.png)

**概要**：n8n は、異なるシステム・API・サービスをビジュアルに連携させ、チームが自動化フローを素早く構築できるオープンソースの低コードワークフロー基盤です。  AI ノードの追加により、単なるルール実行にとどまらず、LLM が判断・生成・分析に参加し、フロー内で外部ツールや API を呼び出すことができるようになりました。

**対象**：オペレーション担当、テクニカルサポート、自動化エンジニア、中小規模の社内チーム。

**適用例**：コンテンツ生成の自動化、データ同期、メール応答、AI を意思決定に組み込む自動処理（例：自動返信 → DB 書き込み → メール送信）。

### **Dify**

⭐️ Stars: 119k

公式サイト：[https://dify.ai/](https://dify.ai/)

GitHub：[https://github.com/langgenius/dify](https://github.com/langgenius/dify)

![Dify.png](https://static-docs.nocobase.com/Dify-gk2be6.png)

**概要**：Dify は、AI アプリケーションや Agent を構築するためのオープンソース基盤で、モデル管理、ナレッジベース、対話フロー設計、ツール連携といった機能を備えています。  AI を組み合わせることで、マルチステップ推論、API 呼び出し、外部知識の参照、データ読み書きなどが可能になり、可視化されたフローとして実行できる Agent を構築できます。  対話から実際の操作までを一つの流れとしてつなげられる点が特徴です。

**対象**：スマート FAQ、企業向けナレッジアシスタント、AI アプリの試作を行うプロダクトチームや開発者。

**適用例**：社内知識に基づく Q&A、チケットの自動処理、API 実行を伴うエージェントサービス。

### **Flowise**

⭐️ Stars: 47k

公式サイト：[https://flowiseai.com/](https://flowiseai.com/)

GitHub：[https://github.com/FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise)

![Flowise.png](https://static-docs.nocobase.com/Flowise-2vawwu.png)

**概要**：Flowise は、AI エージェントや LLM ワークフローを作成するためのオープンソース低コード／ビジュアルプラットフォームです。  ビジュアルビルダー、実行トラッキング、API／SDK 連携、ローカルデプロイなどの機能を備えており、AI を組み合わせることでマルチステップのエージェントフロー、ツール呼び出し、ナレッジ検索などもノードのドラッグ操作だけで構築できます。

**対象**：AI 開発者、迅速なデモを求めるチーム、創業初期のプロダクト検証。

**適用例**：ナレッジベース Q&A、簡易ボット、多段推論のプロトタイプ。複雑な業務ロジックやシステム構築は非対象。

### **Kestra**

⭐️ Stars: 23k

公式サイト：[https://kestra.io/](https://kestra.io/)

GitHub：[https://github.com/kestra-io/kestra](https://github.com/kestra-io/kestra)

![Kestra.png](https://static-docs.nocobase.com/Kestra-1n19xy.png)

**概要**：Kestra は、タスクオーケストレーションとスケジューリングに特化したオープンソースのワークフロー基盤で、ビジュアルフロー、実行計画、監視機能を提供します。  AI を組み合わせると、YAML フローの自動生成、モデル呼び出し、条件分岐ノードなどが利用でき、自然言語やテンプレートから複雑なタスクチェーンをスピーディに構築できます。  実行ログやトレースも完備され、バックエンド寄りのワークフローに適しています。

**対象**：データエンジニア、バックエンド開発、DevOps チーム。

**適用例**：定時実行の自動作成、データクレンジング、API 呼び出しのタスク連鎖など。サーバーサイド実行型に強み。

### **Node-RED**

⭐️ Stars: 22k

公式サイト：[https://nodered.org/](https://nodered.org/)

GitHub：[https://github.com/node-red/node-red](https://github.com/node-red/node-red)

![Node-RED.png](https://static-docs.nocobase.com/Node-RED-0c9pxy.png)

**概要**：Node-RED は、イベント駆動で動作するビジュアルフロー基盤で、ノードをつなぐことでデバイス・サービス・API を連携させ、データフローや自動化ロジックを構築できます。  AI ノードも用意されており、モデル推論、コンテンツ生成、情報分析、条件判断などをフローに組み込むことができます。  IoT、Webhook、システムイベントなどと接続し、柔軟な処理チェーンを構成できます。

**対象**：自動化エンジニア、ハードウェア開発者、スマートホームや IoT の開発チーム。

**適用例**：カメラ認識 → AI 判定 → スイッチ操作、デバイス異常 → AI 解析 → アラート発報など。

### **Sim**

⭐️ Stars: 18k

公式サイト：[https://www.sim.ai/](https://www.sim.ai/)
GitHub：[https://github.com/simstudioai/sim](https://github.com/simstudioai/sim)

![Sim.png](https://static-docs.nocobase.com/Sim-sygfqw.png)

**概要**：Sim は、複数のエージェントが協調して動くワークフローを構築するためのオープンソース基盤で、モデル・ツール・タスクをビジュアルに組み合わせて設計できます。  マルチモデル協働、ツール呼び出し、タスク分解、フロー実行をサポートし、エージェント同士が役割分担しながら推論や作業を進められます。  ユーザーは、役割・能力・タスクチェーンを設定し、実行可能なマルチエージェントシステムを生成できます。

**対象**：多役割のエージェントシステムを構築したい AI チーム、インテリジェントアシスタントのスタートアップ。

**適用例**：AI アシスタント、自動レポート生成、実行ロボット。エコシステム成熟度は n8n／Dify よりも低め。

## **AI × 表・データベースのスマート化系**

このタイプのツールは、業務フローやシステム構築ではなく、\*\*「表やデータをどれだけ賢く使えるか」\*\*に重点を置いています。

AI の役割は、データの生成・補完・検索・分析であり、複雑な業務ロジックを処理することではありません。

イメージとしては「Airtable / Notion のデータベース＋AI」。データ運用やナレッジ整理に向いており、大規模な業務システムや自動化フロー構築には向きません。

### **NocoDB**

⭐️ Stars: 59k

公式サイト：[https://nocodb.com/](https://nocodb.com/)

GitHub：[https://github.com/nocodb/nocodb](https://github.com/nocodb/nocodb)

![NocoDB.png](https://static-docs.nocobase.com/NocoDB-qk45qn.png)

**概要**：NocoDB は、Airtable のようにデータ管理ができるオープンソース基盤で、フィールド設定、ビュー管理、基本的な自動化をサポートします。  AI 機能により、フィールド内容の生成、データ補完、表データの分析、インサイト提示などが可能です。

**対象**：データ運用チーム、社内プロジェクト管理、ライトな CRM を求めるユーザー。

**活用例**：コンテンツ管理、顧客リスト、在庫データ、チームの共有表など。AI は主にフィールドの自動提案、テキスト生成、補完、Insights（分析提案）で活用。

### **Teable**

⭐️ Stars: 20k
公式サイト：[https://teable.ai/](https://teable.ai/)
GitHub：[https://github.com/teableio/teable](https://github.com/teableio/teable)

![Teable.png](https://static-docs.nocobase.com/Teable-n74cv7.png)

**概要**：Teable は Airtable に近いデータ管理 UI を提供し、フィールドタイプ、ビュー管理、データコラボレーションに対応します。  AI を組み合わせることで、対話からデータ生成、表の処理、レポート作成、テキスト指令の実行ができ、モデルが表内で直接データ操作を行うことも可能です。

**対象**：Notion・Airtable ユーザー、データを協働で扱いながらAIによる分析支援も求めるチーム。

**活用例**：コンテンツ管理、軽量なデータウェアハウス、プロジェクト用スプレッドシート。自然言語でのデータ検索、テーブル自動生成、レポート出力にも対応。

## **その他のカテゴリにまたがるツール**

分類の中で、どれにも完全には当てはまらないツールもあります。その代表が **Onlook** です。

⭐️ Stars: 23k

公式サイト：[https://onlook.com/](https://onlook.com/)

GitHub：[https://github.com/onlook-dev/onlook](https://github.com/onlook-dev/onlook)

![Onlook.png](https://static-docs.nocobase.com/Onlook-bnn4iz.png)

Onlook の特徴は、**AI による UI 生成を中⼼に据えている**点にあります。

自然言語やワイヤーフレームの説明からページ構造やコンポーネント配置を作成でき、React コードの生成、スタイルや構造の自動処理にも対応します。  さらにビジュアル編集機能があり、生成された画面をベースに内容やコンポーネント階層を調整することも可能です。  UI 構築と AI デザイン補助の中間に位置するツールで、デザインツールとフロントエンド向け低コード基盤の間をつなぐ役割を担っています。

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
