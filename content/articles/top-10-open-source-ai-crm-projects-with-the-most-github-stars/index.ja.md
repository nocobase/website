## 導入文

現在、皆さんはどのような CRM を利用していますか。

多くのチームにとって、その答えは Salesforce に代表される SaaS 型 CRM であることが多いでしょう。これらの製品は機能が充実しており、エコシステムも成熟しているため、企業で広く採用されています。一方で、技術志向が強いチームや、より高い柔軟性を求めるチームの中には、[Salesforce のオープンソース代替案](https://www.nocobase.com/cn/blog/salesforce-open-source-crmalternative) に目を向け始めているケースもあります。こうしたノーコード／ローコードプラットフォームを活用すれば、コストや開発期間を抑えながら、自社の業務に合った CRM を構築できます。私たちも以前、[GitHub 上でスター数の多いオープンソース CRM プロジェクト](https://www.nocobase.com/cn/blog/github-open-source-crm-projects) を紹介し、CRM 選定の参考情報をまとめました。ただし、その時点では、AI はまだ主要な機能として位置づけられていませんでした。

💡 続きを読む：[カスタム CRM の4つの実ユーザー事例（より柔軟な CRM 選びのヒント）](https://www.nocobase.com/cn/blog/custom-crm-case-studies)

近年、さまざまなツールやシステムが AI と柔軟に組み合わさるようになり、オープンソース CRM も大きく変わりつつあります。CRM は単なる記録・管理ツールから、より能動的に業務を支援するシステムへと進化しています。すでに AI 機能をネイティブに組み込んでいるプロジェクトもあれば、拡張機能やプラグイン、API を通じて AI と連携するプロジェクトもあります。

そこで本記事では、[GitHub の CRM トピック](https://github.com/topics/crm) に掲載されているスター数の多いプロジェクトを改めて整理し、「ネイティブな AI 機能を備えた CRM」と「AI の拡張に対応した CRM」の2種類に分類しました。それぞれの AI 機能の特長や活用シーンを整理することで、各ツールの役割や適用範囲を理解し、自身のニーズに合った CRM を選ぶための参考になればと考えています。

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---

まずは以下の概要から、今回取り上げる主要なプロジェクトを確認してみてください。

**ネイティブな AI 機能を備えた CRM：**

* **NocoBase**：AI 従業員を中心に、データモデリングや業務分析、CRM の利用フローに AI を直接組み込んだノーコード／ローコードプラットフォーム。
* **Huly Platform**：コラボレーションを重視し、コミュニケーションや会議の場で AI によるリアルタイム文字起こしを提供する統合型ワークプラットフォーム。
* **Krayin CRM**：営業シーンに特化し、CRM 内で AI によるコンテンツ生成やインテリジェント支援を行えるオープンソース CRM。

**AI の拡張／統合に対応した CRM：**

* **Twenty**：GraphQL／REST API を通じて外部 AI システムと連携でき、高いカスタマイズ性を備えたモダンなオープンソース CRM。
* **ERPNext**：ERP を中核とし、プラグインや API を活用して AI を CRM や業務プロセスに組み込める統合型プラットフォーム。
* **SuiteCRM**：成熟したオープンソース CRM で、拡張機能や外部サービスを通じて AI を導入可能。
* **Monica**：個人向けのリレーション管理ツールで、API を利用して外部 AI サービスと組み合わせて使用可能。
* **Akaunting**：会計・業務管理を中心とし、アプリや API によって AI 機能を拡張できるプラットフォーム。
* **Idurar ERP CRM**：中小規模チーム向けの ERP＋CRM 統合システムで、API を通じて AI と連携可能。
* **Dolibarr**：モジュール型の ERP／CRM プラットフォームで、モジュールや API を使って外部 AI システムと連携できる。


## ネイティブ AI 搭載 CRM

### NocoBase

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NjczNDVmOTVmYzVlY2QwMWEwZGFhZmRiYTZkOWMyOWFfZjdZcVhvdW1ITWlWNk5tV2MxQmsyMmpBWmZtaGtJTTVfVG9rZW46UXhmVmJNTkw2b3RyakV4NlZVOGNjeWFEbnFnXzE3NjYzMzc1NjE6MTc2NjM0MTE2MV9WNA)

**公式サイト：**[https://www.nocobase.com/](https://www.nocobase.com/)

**GitHub リンク：**[https://github.com/nocobase/nocobase](https://github.com/nocobase/nocobase)

\*\*GitHub Star 数：\*\*20.8k

**AI 機能ドキュメント：**[https://v2.docs.nocobase.com/cn/ai-employees](https://v2.docs.nocobase.com/cn/ai-employees)

**概要**

NocoBase は、オープンソースでプライベートデプロイにも対応した AI ノーコード／ローコード開発プラットフォームです。データモデル駆動とプラグイン型アーキテクチャを基盤とし、CRM を中心としたエンタープライズ向け業務システムを短期間で構築できます。

**システムにおける AI の役割**

NocoBase では、AI は「AI 従業員（AI Employees）」として設計され、業務システムの一部として画面やワークフローに直接組み込まれています。

* **コンテキストを理解する AI 従業員**：現在の画面に関連するデータテーブル、フィールド定義、レコード内容を読み取り、その文脈を踏まえて処理を実行します。
* **コンテンツ生成と業務支援の自動化**：業務内容に応じて、文章生成、要約、分析、自動入力などを行い、日常業務を効率化します。
* **構築作業の効率向上**：システム構築時には、データモデルや画面レイアウト、業務自動化ロジックの作成を支援し、開発効率を高めます。

**代表的な利用シーン**

CRM の実運用において、NocoBase の AI 従業員は、顧客データ管理や業務分析、意思決定支援に関わるさまざまなプロセスに組み込まれ、CRM により高度な分析力と操作体験をもたらします。

* **データ整理・入力**：CRM へのデータ入力やコミュニケーション履歴の整理において、AI 従業員が非構造化テキストから重要情報を抽出し、構造化された項目として登録します。メールやメモ、会話内容を顧客属性や業務イベントとして整理でき、手作業による入力負担を軽減します。

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MjM0NDM3NTNmYjRmYTBhMDA5ODk1NzM2MTQyMTM2N2RfQThkZU5vUkxjekJsY1czaUprVlVKRUxoZHMyVmJaZ1FfVG9rZW46WEo1dGJuUXM4b0ZoT1h4cTRSMWNwdmVCbk1jXzE3NjYzMzc1NjE6MTc2NjM0MTE2MV9WNA)

* \*\*業務データの分析・可視化：\*\*営業リードや顧客アカウント、商談データを基に、AI 従業員がトレンドや比較グラフ、KPI カードなどを自動生成します。業務の状況や重要指標を、直感的に把握できます。

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NjZlNTAxZjFmMmMxZDJlNjkzNzdjZDkxNDc4YjBlN2NfYnE0Tll6SHQ2SEcwakFNb09TYmE0YjlxbzRNME5Vc2VfVG9rZW46Wm53WmJLZ2FCb2pjY2x4WTBNeGNDZnVzbk1nXzE3NjYzMzc1NjE6MTc2NjM0MTE2MV9WNA)

* \*\*多言語コンテンツの翻訳と自動入力：\*\*多言語対応が必要な CRM シーンでは、AI 従業員が外国語のメールや顧客情報を翻訳し、その内容を該当フィールドへ自動入力します。異なる言語の情報を統一形式で蓄積でき、後続の分析や活用が容易になります。

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NzAyMDY1YmI3NzJjMzU3MmRhMzAyODVmYTQzY2MwY2VfT0ZxQ1Vpa1I2WmE2WkZhb3hSMVk3eDIzb3JybXJWSkdfVG9rZW46WnBROWJvVUx6b3gzVGR4OWdRMWNIMEZ2bk5iXzE3NjYzMzc1NjE6MTc2NjM0MTE2MV9WNA)


### Huly Platform

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=MDUzNzQ4Njg5NjRiNzc3YWY4NzM5ZmJlN2FmYzNiNDZfQ0YzVjJMZzMzeXRvNGllUG1FbW1wcmNtNnFPV3o3RXFfVG9rZW46QXdZdmJKVDNsb1NadGl4aUhReWN6bFJObjlPXzE3NjYzMzc1NjE6MTc2NjM0MTE2MV9WNA)

**公式サイト：**[https://huly.io/](https://huly.io/)

**GitHub リンク：**[https://github.com/hcengineering/platform](https://github.com/hcengineering/platform)

\*\*GitHub Star 数：\*\*23.9k

**AI 機能ドキュメント：**[https://docs.huly.io/communication/live-transcription/](https://docs.huly.io/communication/live-transcription/)

**概要**

Huly Platform は、プロジェクト管理、コミュニケーション、バーチャルオフィス、CRM などを一体化した、オープンソースの協業・業務管理プラットフォームです。チームが日々の業務を一つのワークスペースで完結できることを目指しています。

**システムにおける AI の役割**

Huly の AI の特長は、内蔵 AI アシスタント「Hulia」によるリアルタイム文字起こし機能です。プラットフォーム上で音声やビデオ会議を行うと、Hulia が発言内容を即座にテキスト化し、会話履歴として保存します。文字起こしされた内容は、チャットと同じ感覚で確認やリアクション、マーキングが可能です。これにより、会議の自動記録が実現し、議事録作成の負担を減らしながら、チームのコミュニケーション効率を高めます。

**代表的な利用シーン**

Huly は、日常的に密な連携やコミュニケーションが求められるチームに適しており、例えば次のような使い方が考えられます。

* 音声・ビデオ会議の内容を自動で文字起こしし、議事録として残す
* 会議での議論をテキストとして共有し、後から簡単に振り返る
* 統一されたワークスペース上で、プロジェクト管理、コミュニケーション、ナレッジ管理をまとめて行う

### Krayin CRM

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NDcxNjFjNzM5Y2I2MmYwMGYzYjI0NDk3NmE0MWM2OTdfd1BSUjhpYW1FNmRmWmhpMW00UUdrOUxGTGwxb2hJbjdfVG9rZW46TzlVY2JoSlZab21RTXZ4SGVqTGNGYnpDbnFlXzE3NjYzMzc1NjE6MTc2NjM0MTE2MV9WNA)

**公式サイト：**[https://krayincrm.com/](https://krayincrm.com/)

**GitHub リンク：**[https://github.com/krayin/laravel-crm](https://github.com/krayin/laravel-crm)

\*\*GitHub Star 数：\*\*20.6k

**AI 機能ドキュメント：**[https://krayincrm.com/ai-crm/](https://krayincrm.com/ai-crm/)

**概要**

Krayin CRM は、Laravel を基盤に開発されたオープンソースの CRM システムです。営業、連絡先、リード、アクティビティなどの主要機能を備え、設定やプラグインによる柔軟な拡張が可能です。

**システムにおける AI の役割**

Krayin CRM では、公式の AI 機能モジュールを通じて、大規模言語モデルと連携した支援機能を提供しています。AI は主に次のような形で活用されます。

* **営業コンテンツの自動生成・補完**：フォローアップメールや連絡先メモ、会議要約などを AI が作成
* **リード・顧客向け AI アシスタント**：連絡先やリードの詳細画面で、提案や情報補完を支援
* **テキスト入力のスマート化**：ログやタスク、メモ入力時に AI を活用し、文章作成を効率化

これにより、CRM 上での文章作成や情報整理を、よりスムーズに行えるようになります。

**代表的な利用シーン**

Krayin CRM の AI 機能は、次のような場面で特に効果を発揮します。

* 営業担当がフォローアップメールや行動計画、会議要約を短時間で作成したい場合
* 顧客担当者が AI の支援を受けながら、連絡先情報やメモを充実させたい場合
* CRM 内でのテキスト入力作業を減らし、操作体験を向上させたい場合


## AI の拡張／統合に対応する CRM

### Twenty

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=YTExZWFiNWFhMmYwYzc0MDE0YWUzYWQwMWNmMjgzZjFfWWk1cXhNNFBia1FQYlF5RWhXelZmbDdqck9lcnFqWTBfVG9rZW46R2pNcmJJMFdBb0JJMTN4RHVnQmNETlJEbkgxXzE3NjYzMzc1NjE6MTc2NjM0MTE2MV9WNA)

**公式サイト：**[https://twenty.com/](https://twenty.com/)

**GitHub リンク：**[https://github.com/twentyhq/twenty](https://github.com/twentyhq/twenty)

\*\*GitHub Star 数：\*\*37.3k

**概要**

Twenty は、Salesforce などの従来型 CRM に代わる選択肢として設計された、モダンなオープンソース CRM です。データや業務フロー、システム構成を自ら管理できる点を特長とし、自社環境での運用や高度なカスタマイズを前提とするチームに向いています。

**AI との連携方法**

Twenty は、GraphQL および REST API を公式に提供しており、外部拡張を通じて AI システムと柔軟に連携できます。現在は Model Context Protocol（MCP）を利用した構成も登場しており、MCP Server を介して Twenty のデータや操作を AI アシスタント（Claude など）に連携することで、自然言語による CRM データの検索、作成、更新、管理が可能になっています。

### ERPNext

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NmRmNTI4YjdhZTQyNDYyNDdlY2UyZDJmY2IxYjRiNzhfV1drenQ4TTlWUjM3d2dJRVlveUVpenRVSmpNN3NiR3VfVG9rZW46TnBMN2JDb0FTb3VpVjh4QkpUeGNGSzJTbjRkXzE3NjYzMzc1NjE6MTc2NjM0MTE2MV9WNA)

**公式サイト：**[https://erpnext.com/](https://erpnext.com/)

**GitHub リンク：**[https://github.com/frappe/erpnext](https://github.com/frappe/erpnext)

\*\*GitHub Star 数：\*\*30.6k

**概要**

ERPNext は、CRM、営業、購買、在庫、会計、人事などを一体で管理できる、オープンソースの統合型業務プラットフォームです。Frappe Framework を基盤とし、高いカスタマイズ性とモジュール化された拡張性を備えています。業務を一つのシステムに集約したいチームに適しています。

**AI との連携方法**

ERPNext は、API やプラグインを通じて AI 機能と連携できます。実際に、Frappe Framework を基盤とした AI 拡張が登場しており、フォームやメモ、コミュニケーション機能に大規模言語モデルを組み込み、文章生成や内容のブラッシュアップ、操作支援を行うことが可能です。また、業務システムの基盤として ERPNext を利用し、API 経由で外部 AI サービスや AI アシスタントと接続することで、業務データと AI の分析・生成機能を組み合わせて活用するケースも増えています。


### SuiteCRM

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=ZGY1MzEwMmJmMGRmMWZkZTRkMjE3NDViM2M1MWUwZmNfUXRVdnlsc3kyS0dVVDBSc0dBczJsbW9kZEFMcG42V0hfVG9rZW46TkU1dmI1TEU0b0J6OG14RERCVmMyYzhpbjdjXzE3NjYzMzc1NjE6MTc2NjM0MTE2MV9WNA)

**公式サイト：**[https://suitecrm.com/](https://suitecrm.com/)

**GitHub リンク：**[https://github.com/SuiteCRM/SuiteCRM](https://github.com/SuiteCRM/SuiteCRM)

\*\*GitHub Star 数：\*\*5.2k

**概要**

SuiteCRM は、SugarCRM コミュニティ版を起源とする、実績あるオープンソース CRM です。リード管理、連絡先、顧客管理、商談、マーケティング施策など、CRM に必要な基本機能を一通り備えており、中小企業や自社運用を前提とした CRM を求める組織で幅広く利用されています。

**AI との連携方法**

SuiteCRM は、REST API とモジュール型の拡張機構を通じて、AI 機能を外部から組み込める構成になっています。サードパーティ製プラグインや独自拡張により、メールやメモ、顧客対応履歴に AI による文章生成や分析機能を追加したり、API 経由で業務データを外部 AI サービスと連携し、顧客データを活用した支援機能を実装することが可能です。

### Monica

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=NmYxOWI1ZGQ5M2I5MzcwODlhMmJhZWI5NGRiOTE1N2JfRzlRWFJPaVRZWW9QTFIxVlFvTk44YzQ2bVl5dWNYMzhfVG9rZW46UnJ6MWJuRGVpb29XcDV4czM5Q2NXUmJoblZoXzE3NjYzMzc1NjE6MTc2NjM0MTE2MV9WNA)

**公式サイト：**[https://www.monicahq.com/](https://www.monicahq.com/)

**GitHub リンク：**[https://github.com/monicahq/monica](https://github.com/monicahq/monica)

\*\*GitHub Star 数：\*\*23.8k

**概要**

Monica は、個人向けのオープンソース CRM（Personal CRM）です。連絡先や交流履歴、リマインダーなどを一元管理し、人間関係を整理・継続的に把握することを目的としています。プライバシー重視の設計と、自社環境での運用に対応している点が特長です。

**AI との連携方法**

Monica 自体に AI 機能は組み込まれていませんが、REST API や Webhook を通じて外部 AI サービスと連携できます。連絡先データややり取りの履歴を外部に連携し、AI による文章処理や分析、補助的な自動化を行う形が一般的です。AI 機能は外部ツール側で担い、Monica はデータ管理の基盤として利用されます。


### Akaunting

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=YmNmYTYxZDllOTAwYWQxZTM1ODRkNjUzN2U5OWIyMjBfNGNCQWxROU9NaUN3NUF0Y1IxOGFGZEFWOFRrekhUdzVfVG9rZW46Qm8yaWJ6T0xzb1BtQW14d3NNTGNtcUZkbktoXzE3NjYzMzc1NjE6MTc2NjM0MTE2MV9WNA)

**公式サイト：**[https://akaunting.com/](https://akaunting.com/)

**GitHub リンク：**[https://github.com/akaunting/akaunting](https://github.com/akaunting/akaunting)

\*\*GitHub Star 数：\*\*9.4k

**概要**

Akaunting は、中小企業向けに設計されたオープンソースの会計・業務管理プラットフォームです。会計、請求、経費、顧客・仕入先管理などの機能を備え、アプリマーケットを通じて CRM や関連業務機能を柔軟に拡張できます。

**AI との連携方法**

Akaunting は、REST API とアプリ拡張を通じて AI 機能を外部から連携できる構成になっています。財務データや顧客情報を外部 AI サービスに連携し、分析や処理を行った上で結果をシステムに反映する形が一般的です。AI 機能はアプリや外部サービス側で担い、Akaunting は業務データの管理基盤として利用されます。

### IDURAR

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTIyMGY4MDFmYjA2NDAxODYyZWVmM2I5ZWIyZDcyZDZfMnVJa3dOY2JPUVRhTVN1dmtVTmFkbWp6Uk1NWGtZbGRfVG9rZW46Q3lybWJ1NkFjb1hDbk94VEZmbWNYQUlkbmFjXzE3NjYzMzc1NjE6MTc2NjM0MTE2MV9WNA)

**公式サイト：**[https://www.idurarapp.com/](https://www.idurarapp.com/)

**GitHub リンク：**[https://github.com/idurar/idurar-erp-crm](https://github.com/idurar/idurar-erp-crm)

\*\*GitHub Star 数：\*\*8.1k

**概要**

IDURAR は、ERP と CRM を組み合わせたオープンソースの業務管理システムです。顧客管理や営業、請求、会計、基本的な業務運用をカバーし、自社環境での運用やカスタマイズを前提とする中小チームや開発者に適しています。

**AI との連携方法**

IDURAR は API を通じて外部 AI サービスと連携し、業務データの読み書きや処理を行うことができます。AI 機能は独立したサービスとして組み込まれ、既存の業務フローを拡張する形で利用されます。システム本体は軽量に保ちつつ、必要に応じて知能化できる構成が特徴です。

### Dolibarr

![](https://nocobase.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTQ3OTVkNGUyYTgwOTE2Njc3ODAwMDc1NWViZmIwNWNfZXRWd01scHo0cHVtcEFuYUt5SDNtQVpzSk9qblFFRk9fVG9rZW46UUJZVWIyWHhHb1RsSXl4SmlVOWNqTjdZbk9lXzE3NjYzMzc1NjE6MTc2NjM0MTE2MV9WNA)

**公式サイト：**[https://www.dolibarr.org/](https://www.dolibarr.org/)

**GitHub リンク：**[https://github.com/Dolibarr/dolibarr](https://github.com/Dolibarr/dolibarr)

\*\*GitHub Star 数：\*\*6.8k

**概要**

Dolibarr は、営業、請求、在庫、会計などを含む業務機能を備えた、実績あるオープンソースの ERP／CRM です。モジュール化された設計と自社運用を前提としており、中小企業や各種組織で広く使われています。

**AI との連携方法**

Dolibarr では、モジュール拡張や REST API を通じて外部 AI システムと連携できます。AI は外部サービスとして動作し、API 経由で業務データを処理・分析する形が一般的です。コア機能を保ったまま、必要な範囲で AI を取り入れられる点が特徴です。


## まとめ

実際の利用体験という点では、ネイティブ AI CRM は一貫性と完成度の高さが強みです。AI 機能がシステム設計の段階から組み込まれているため、操作や機能のつながり、利用フローが自然に統一されます。AI をできるだけ早く業務に取り入れたい場合や、日常的な CRM 業務で AI に直接的なサポートを期待する場合には、ネイティブ AI 機能を備えた CRM が適した選択肢となります。

一方で、拡張性を重視したオープンソース CRM は、一定の技術力を前提としつつ、自社要件に合わせた柔軟なカスタマイズが可能です。技術チームを有する組織であれば、プラグインや API を通じて外部 AI サービスと連携し、必要な AI 機能を段階的に取り入れることができます。

なお、ネイティブ AI CRM も拡張機構を備えており、拡張型 CRM も十分なリソースを投入すれば、完成度の高い AI 活用環境を構築できます。重要なのは、自社の事業フェーズや技術体制、システムに求める柔軟性を踏まえた上で、最適な CRM のタイプを見極めることです。

本記事が少しでも参考になった場合は、ぜひ AI と CRM の活用に関心を持つ方と共有してみてください。
