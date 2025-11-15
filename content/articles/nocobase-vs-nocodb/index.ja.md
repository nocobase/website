**最終更新日：[2025.11.16]**

こんにちは、皆さん。私は[NocoBase](https://www.nocobase.com/)のLijiaです。

はい、NocoBaseという私たちの製品を紹介するときに、多くの質問を受けることがよくあります。

> *「NocoDBとの関係は何ですか？」*

> *「NocoDBはあなたの会社の別の製品ですか？」*

> *「この名前は非常に似ているので、区別がつきません。」*

![NocoBase VS NocoDB.jpeg](https://static-docs.nocobase.com/b72bb922a25a9274a443a167283510f5.jpeg)

これらの名前が引き起こした混乱についてお詫び申し上げます。

そこで今日は、これら2つの全く異なる製品を詳細に比較したいと思います。この文書では、**[NocoBase](https://www.nocobase.com/)とNocoDBの異なる使用事例と、ニーズに応じてそれらの可能性を最大化する方法**を示します。

この記事はかなり長いので、興味のあるセクションにスキップしても構いません：

1. NocoBaseとNocoDBの紹介
2. 主な機能
3. ユーザー体験
4. アプリケーション統合
5. セキュリティ
6. エンタープライズ機能
7. データ統合能力

それでは、始めましょう！

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---



## NocoBaseとNocoDBの紹介

**NocoBaseとNocoDBは両方ともオープンソースのノーコードプラットフォームですが、異なる目的に役立ちます。**

![NocoBase.png](https://static-docs.nocobase.com/6f8ab172beb5e7bd39f3781f00b63b29.png)

NocoBaseは、高度にスケーラブルなノーコード/ローコード開発プラットフォームで、ユーザーが迅速にさまざまなビジネスアプリケーションを構築できるようにします。データモデル駆動型のコアに基づいて構築されており、ユーザーはシンプルな構成を通じて複雑なワークフローを設計および管理できます。

NocoBaseは柔軟性とスケーラビリティを重視し、カスタム開発とノーコードアプリケーションのバランスを必要とするチームにとって強力なソリューションを提供します。ユーザーはプラグインを使用して機能を拡張し、より高度な開発要件を満たすこともできます。

🙌 実践してみる：[NocoBase チュートリアル – タスク管理システム](https://www.nocobase.com/ja/tutorials/task-tutorial-introduction)

![NocoDB.png](https://static-docs.nocobase.com/382a3f4129da2a84d9f549f12393b6c9.png)

一方、NocoDBは既存のリレーショナルデータベースをAirtableに似たインターフェースに変換することに焦点を当てています。その目的は、複雑なSQLクエリを記述したくないユーザーのために、データベース管理を簡素化することです。

💡 詳細情報：[GitHubで最もスターを獲得したAirtableのオープンソース代替品トップ7](https://www.nocobase.com/ja/blog/open-source-airtable-alternatives)

NocoDBはMySQLやPostgreSQLなどのデータベースをサポートし、ユーザーフレンドリーなインターフェースを通じて作業を容易にします。NocoDBはデータ管理ツールとして優れていますが、NocoBaseのような包括的なアプリケーション開発プラットフォームではありません。

**要するに、NocoBaseは完全なアプリケーション開発プラットフォームであり、NocoDBはデータ管理に特化したツールです。**

名前は似ていますが、全く異なる使用事例に設計されています。

## 機能比較

ノーコードツールを選ぶ際に最初に考慮すべきことは、機能セットです。

以下では、NocoBaseとNocoDBを5つの観点から比較し、実際のシナリオでのパフォーマンスを理解する手助けをします。

### フォーム機能

![NocoBase Form.png](https://static-docs.nocobase.com/405a72d27c0efd4ea8eaa0acf6dd4f29.png)

**NocoBase**は柔軟で強力なフォーム設計機能を提供します。ユーザーは直感的なドラッグアンドドロップインターフェースを介して、さまざまなタイプのフォームを簡単に作成でき、条件ロジック、動的フィールド表示、フォーム検証などの高度な機能をサポートしています。これにより、特に構造化データを収集する必要があるアプリケーションにとって、NocoBaseは複雑なユーザー入力や多段階フォームを必要とするシナリオで優れたパフォーマンスを発揮します。

![NocoDB form.png](https://static-docs.nocobase.com/31cfeaab6172c04f7540206eb03c0bb2.png)

**NocoDB**のフォーム機能はよりシンプルです。主にデータ入力ツールとして機能し、データを直接データベースに記録します。フォーム設計は基本的ですが、迅速なデータ入力と管理を必要とするユーザーには十分です。

### 自動化とワークフロー

![NocoBase Automation and Workflow.png](https://static-docs.nocobase.com/4b343bd1f5197350b2f3256ff1a4342c.png)

**NocoBase**は内蔵の強力なワークフローエンジンを備えており、ユーザーはグラフィカルインターフェースを使用して複雑なビジネスプロセスを設計および自動化できます。承認フローから通知メカニズムまで、ユーザーは多段階操作を簡単に構成できます。定期的なタスクやイベント駆動型のワークフローに関しても、NocoBaseはエンタープライズレベルのアプリケーションに柔軟性を提供します。

💡 詳細情報：[⭐️ GitHubの星が最も多いオープンソースワークフロープロジェクトトップ10](https://www.nocobase.com/ja/blog/top-10-open-source-workflows-projects-with-the-most-github-stars)

![NocoDB Automation and Workflow.png](https://static-docs.nocobase.com/a2cf3243782db98e07b953a285da5cb2.png)

**NocoDB**は、自動化機能が限られており、基本的な自動化のためのWebhookのみを提供しています。

### データベース機能

![NocoBase Database Capabilities.png](https://static-docs.nocobase.com/ef5b8af7117dce4410713309202241ae.png)

**NocoBase**はデータモデル駆動のツールであり、ユーザーはビジネスニーズに基づいて複雑なデータ構造を定義できます。リレーショナルデータだけでなく、より多様なデータタイプにも対応し、複雑なビジネスシナリオに対応します。NocoBaseの柔軟なデータ権限管理は、フロントエンドブロックと組み合わさることで、効率性を大幅に向上させます。従来、1日かかっていた作業が数分で完了することができ、素晴らしい結果をもたらします。

💡 詳細情報：[データ変換ツールの究極ガイド](https://www.nocobase.com/ja/blog/data-transformation-tools)

![NocoDB Database Capabilities.png](https://static-docs.nocobase.com/2e247add90b2f8fa63c4d05e268d0906.png)

**NocoDB**は既存のリレーショナルデータベースを視覚的管理ツールに変換することに焦点を当てています。ユーザーはテーブルの数式、テーブルの関係、およびビューの強力なサポートを楽しむことができますが、APIにはいくつかの制限と学習曲線があります。NocoDBは、既存のデータベースセットアップを持つユーザーがデータをよりユーザーフレンドリーに管理するために適しています。比較すると、NocoDBはデータベース管理に特化しているのに対し、NocoBaseはアプリケーション開発の幅広い範囲をカバーしています。

### ビジュアルインターフェース

![NocoBase Visual Interface.gif](https://static-docs.nocobase.com/f77aa77c147f1c436227857e450ced67.gif)

**NocoBase**は、ページやブロックのデザインに十分な柔軟性を提供します。ユーザーはブロック間でインタラクティブなフィルタリングを構成し、ビジネスニーズに合わせてページレイアウトを設計できます。複雑なダッシュボードやデータ視覚化ツールの作成も可能で、ユーザーがデータをよりよく分析し、提示するのを助けます。たとえば、右側の注文詳細は、左側で選択された注文に基づいて動的に変更されることができます。

💡 詳細情報：[コアアプリダッシュボード構築ツールのトップ6](https://www.nocobase.com/ja/blog/core-app-dashboard-building-tools)

![NocoDB Visual Interface.png](https://static-docs.nocobase.com/60a736f8eff18ee4e1778dc83fc89f25.png)

**NocoDB**は、AirtableやNotionなどのツールからインスピレーションを受けて、主にデータを表示および管理するためのグリッド形式のインターフェースを提供します。データベース管理に機能的ですが、NocoBaseが提供するデータ視覚化やカスタムインターフェースデザインの柔軟性には欠けています。

### プラグインと拡張

![NocoBase Plugins and Extensions.png](https://static-docs.nocobase.com/26e446dfd223b4439b74ca08cbc222f7.png)

**NocoBase**はプラグインアーキテクチャを採用しており、すべての機能はプラグインを通じて拡張可能です。ユーザーは必要に応じてプラグインを選択してインストールしたり、自分で開発したりして、NocoBaseの拡張性を大幅に高めることができます。

![NocoDB Plugins and Extensions.png](https://static-docs.nocobase.com/d892c1abec7567123e723501b82d597f.png)

**NocoDB**もある程度の拡張をサポートしていますが、主にデータベース接続やデータ同期に焦点を当てています。しかし、NocoBaseに比べてプラグインオプションが少なく、さまざまなビジネスニーズに対する適応性が低くなっています。

## ユーザー体験比較

ユーザー体験は、ツールの使いやすさと広範な採用を決定する上で重要な役割を果たします。初心者でも経験豊富な開発者でも、学習曲線、インターフェースデザイン、モバイルサポートなどの要因が重要です。

ここでは、NocoBaseとNocoDBをこれら3つの観点から比較します。

### 学習曲線

![NocoBase Learning Curve.png](https://static-docs.nocobase.com/b575ec3d03a0ffa3dbf26a9b7ee2dc75.png)

NocoBaseは直感的なインターフェースと明確な操作ガイドのおかげで、比較的緩やかな学習曲線を持っています。ユーザーは迅速に始めることができ、NocoBaseは包括的なドキュメントとチュートリアル（これは継続的に改善されています）を提供しており、ユーザーが高度な機能を徐々に習得できるようにしています。より深いカスタマイズが必要な人には、NocoBaseはオープンな拡張インターフェースを提供しており、さまざまなスキルレベルのユーザーに適しています。

**基本的なコンピュータ知識を持ついくつかのユーザーは、3日間でビジネスプロセスの設計を開始できたと語っています。**

![NocoDB Learning Curve.png](https://static-docs.nocobase.com/e9d64212f07977991f1f2b0dc4aef65d.png)

NocoDBのノーコードインターフェースも非常にシンプルで、データベース操作の経験がないユーザーに適しています。データベースの管理は、簡単なクリックと構成で行え、データベースの概念を深く理解したり、複雑なSQLクエリを書く必要はありません。同時に、データベースの経験があるユーザーには、NocoDBは柔軟なデータベース管理機能を提供し、既存のデータベース操作を効率的に処理できるようにします。

### インターフェースデザイン

![NocoBase Interface Design.png](https://static-docs.nocobase.com/e2e66aa6dde88f52f123fea3359c7c64.png)

**NocoBase**はインターフェースデザインにおいてユーザー体験に重点を置いており、WYSIWYG（What You See Is What You Get）体験を提供します。アプリケーションページのデザインやデータの管理において、NocoBaseは明確なナビゲーションと豊富なインタラクティブ要素を提供しており、必要な機能を簡単に見つけることができます。さらに、視覚的なページデザインツールを使用して、ユーザーはインターフェースを自由にカスタマイズでき、全体的なユーザー体験と美観を向上させます。

![NocoDB Interface Design.png](https://static-docs.nocobase.com/511f876dd9619b3e5df0a1be7a8ac66b.png)

**NocoDB**のインターフェースはより機能的で、主にグリッドベースのデータ管理に集中しています。クリーンでシンプルですが、カスタマイズやビジュアルの魅力が必要なユーザーには、NocoBaseほど直感的ではありません。

### モバイルサポート

![NocoBase Mobile Support.png](https://static-docs.nocobase.com/b2e5d91144b1212dcc7c5125f95ec175.png)

![NocoBase Mobile Support2.jpeg](https://static-docs.nocobase.com/923de51692057b7031b5c43a48bad2b5.jpeg)

**NocoBase**は最近、[モバイル用の2.0バージョン](https://docs.nocobase.com/handbook/mobile)をリリースし、ユーザーがモバイルページを別に構成できるようにし、さまざまな画面サイズでスムーズな体験を保証します。モバイルバージョンは、デスクトップバージョンと同様のメニューアクセス権限をサポートしています。

![NocoDB Mobile Support.jpeg](https://static-docs.nocobase.com/8cb4c63b7683da29ec3f8e7dd06f3ef3.jpeg)

**NocoDB**のモバイルサポートは基本的です。モバイルデバイスからアクセスできますが、インターフェースは主にデスクトップ用に設計されています。

## アプリケーション統合能力

ノーコードツールを選択する際、多くのユーザーは特にその統合能力を重視しています。特に、新しいツールを既存のシステムとシームレスに統合する必要があるチームにとって重要です。ここでは、**APIサポート**と**サードパーティ統合**の観点からNocoBaseとNocoDBを比較します。

### APIサポート

**NocoBase**

![NocoBase API Support.png](https://static-docs.nocobase.com/845e10a14f11e0ac611ee97ce44a3ac1.png)

**NocoDB**

![NocoDB API Support.png](https://static-docs.nocobase.com/4abdcac74194cc8611a2b1dac46fb824.png)

**NocoBase**と**NocoDB**はAPIサポートの面で優れた性能を発揮しており、オープンAPIを提供しているため、ユーザーは他のアプリケーションやシステムと統合できます。ユーザーはAPIを介してデータを読み書きし、カスタム統合を作成し、より複雑なビジネスニーズに応えます。両ツールは、オートメーションや外部システムとの接続をサポートするためのAPIのオープン性が十分にあり、ユーザーの統合ニーズを満たすことができます。

### サードパーティ統合

![NocoBase Third-Party Integrations.png](https://static-docs.nocobase.com/b7ec451f7243ff8368ae495f14151bd6.png)

![NocoBase Third-Party Integrations2.png](https://static-docs.nocobase.com/53846311ef7f854cb28792cc1b86cc2e.png)

**NocoBase**は、サードパーティ統合においてより柔軟で包括的です。プラグインベースのアーキテクチャのおかげで、ユーザーはさまざまなサードパーティサービスとプラグインを通じて簡単に統合できます。（[Iframeブロック](https://docs.nocobase.com/handbook/block-iframe)および[Embed NocoBase](https://docs.nocobase.com/handbook/embed)）ユーザーはカスタム統合プラグインを開発することもでき、その可能性を大幅に広げています。

💡 詳細情報：[詳細分析: ローコード/ノーコード統合機能](https://www.nocobase.com/ja/blog/low-code-no-code-integration)

![NocoDB Third-Party Integrations.png](https://static-docs.nocobase.com/eb34fe34b3bcd4ab4877e847e454b29c.png)

**NocoDB**は、サードパーティ統合の点ではNocoBaseほど広範囲ではありませんが、データ同期とデータベース統合に優れています。NocoDBはMySQLやPostgreSQLなどの一般的なデータベースと簡単に接続でき、REST APIを介して他のアプリケーションとデータ交換を可能にします。NocoDBはデータベース管理により焦点を当てており、複数のデータベースリソースを統合して管理する必要があるユーザーに適しています。

## セキュリティ

セキュリティは、特に機密データを扱う際に企業ユーザーにとって最も重要な優先事項です。良好なアクセス制御メカニズムは、異なるユーザーと役割が承認されたデータにのみアクセスできることを保証します。ここでは、**アクセス制御**の観点からNocoBaseとNocoDBを比較します。

### アクセス制御

![NocoBase Access Control.png](https://static-docs.nocobase.com/153153577e8f5f248c36bc7b18499e14.png)

**NocoBase**は非常に柔軟で包括的なアクセス制御ソリューションを提供します。ページレベルのアクセス許可からテーブルレベルの許可設定まで、管理者はユーザーの役割や特定のデータに基づいてアクセス権を細かく制御できます。

NocoBaseの強力な権限機能を使用すると、ユーザーは役割、ユーザー、さらには特定のデータ内容に基づいてアクセスルールを構成できます。この詳細な制御により、機密データを保護するだけでなく、ユーザーがシステムを操作する際に適切な権限を持つことを確保し、全体的なセキュリティと操作性を向上させます。

![NocoDB Access Control.png](https://static-docs.nocobase.com/183401f09e807506729195cc020b02e2.png)

**NocoDB**のアクセス制御はより基本的です。シンプルな役割ベースの許可設定を提供しており、異なる役割に基づいてデータ操作権限を割り当てることができます。このシンプルなアプローチは実装が簡単ですが、複雑なマルチユーザーおよびマルチロールシナリオには必要な柔軟性が欠けています。小規模なチームや個人プロジェクトには、NocoDBのシンプルさは利点であり、複雑な設定に時間をかけることなく迅速に権限を設定できます。

**要約すると、NocoBaseはアクセス制御の柔軟性と深さに優れており、高いデータセキュリティ要件があるシナリオに適しています。一方、NocoDBは、より簡単で使いやすい権限管理を提供し、複雑でないデータ管理ニーズに適しています。**

## エンタープライズ機能

エンタープライズ環境では、アプリケーションツールは安定して効率的であるだけでなく、大規模なユーザーを処理し、ビジネスニーズに応じたカスタマイズ機能を提供できる必要があります。NocoBaseとNocoDBを、**大規模ユーザー管理**と**カスタムブランディング**の2つの重要なポイントで比較します。

### 大規模ユーザー管理

**NocoBase**は、大規模なユーザーデータセットを処理してもシステムの安定性と応答性を維持します。実際の使用テストに基づいて、NocoBaseは最大30,000ユーザーのフォームデータをスムーズに管理でき、クエリ、フィルタリング、バッチ操作などのタスクを効率的に完了できます。これにより、CRMシステムや会員管理プラットフォームなど、大量のユーザーを管理する必要があるビジネスシナリオに最適なソリューションとなっています。

**NocoDB**の大規模ユーザー管理におけるパフォーマンスは不明です。（試したことがあれば、ぜひ追加してください！）

### カスタムブランディング

![NocoBase Custom Branding.png](https://static-docs.nocobase.com/43caaf35017dabe92834cf2e4c4e5575.png)

**NocoBase**は、企業がシステムインターフェース、ログインページなどをブランドイメージに合わせて調整できる豊富なカスタマイズ機能を提供しています。簡単な設定で、NocoBaseの外観をビジネスのスタイルに合わせて調整でき、プロフェッショナルさと一貫性を向上させます。これは、無コードツールを既存のビジネスシステムに統合する必要がある企業にとって特に重要で、ユーザーのブランド認識を強化し、一貫性を保ちます。

![NocoDB Custom Branding.png](https://static-docs.nocobase.com/09bee01b377c46b6085cc1ad663eb5f9.png)

対照的に、**NocoDB**はカスタムブランディング機能が限られています。フォームに対して基本的なカラー設定やロゴのアップロードを行うことができますが、広範なブランドカスタマイズを必要としないプロジェクトには十分かもしれません。

## データ統合能力

データ統合は、既存のシステムとの互換性やデータ移行のしやすさに直接影響を与えるため、ノーコードツールの適応性を決定する上で重要です。ここでは、**エンタープライズシステム統合**と**データ移行ツール**の観点から、NocoBaseとNocoDBを比較します。

### エンタープライズシステム統合

![NocoBase Enterprise System Integration.png](https://static-docs.nocobase.com/4268a095623ea0e2f71dc523e454f6db.png)

**NocoBase**は、エンタープライズシステムとの統合において強力な能力を示しています。さまざまなアカウント統合プラグインを提供し、CAS、OIDC、SAML 2.0、LDAPなどの複数の企業レベルの認証プロトコルとシステムをサポートしています。これらの標準プロトコルにより、NocoBaseは既存の企業認証および権限管理システムとシームレスに統合できます。

![NocoBase Enterprise System Integration2.png](https://static-docs.nocobase.com/58a71ecffe1b6aa5e1c2d95ff6587edb.png)

さらに、NocoBaseは企業の内部データベースに対して豊富なデータベースプラグインを提供し、MySQL、PostgreSQL、SQLiteなどのさまざまなデータベースタイプをサポートしています。これにより、企業はNocoBaseを既存のデータベースシステムに簡単に統合でき、データ変換の複雑さが軽減され、企業データの一貫性と安定性が確保されます。

![NocoDB Enterprise System Integration.png](https://static-docs.nocobase.com/d50e43d3011ecf3ca6954ed812c5476b.png)

**NocoDB**のエンタープライズシステム統合機能は基本的です。一般的なデータベースタイプと基本的なREST API統合をサポートしていますが、認証プロトコルや企業アプリケーションの統合に関してはNocoBaseほど充実していません。既存のシステムと深く統合する必要があるシナリオには、NocoDBのオプションは限られるかもしれませんが、一般的なデータベース管理システムを使用しているユーザーには適しています。

### データ移行ツール

![NocoBase Data Migration Tools.png](https://static-docs.nocobase.com/89cc2623e1a77f028d813fd5138fadc3.png)

**NocoBase**はデータ移行において便利で安全なソリューションを提供します。NocoBaseには、アプリケーションのコピー、移行、アップグレードなどのシナリオに使用できる[バックアップと復元プラグイン](https://docs.nocobase.com/handbook/backup-restore)が組み込まれています。

![NocoDB Data Migration Tools.png](https://static-docs.nocobase.com/8d93163d5363ca6e65f5db9a0710bfd0.png)

**NocoDB**のデータ移行は主に手動のデータベースインポートおよびエクスポート操作に依存しています。この方法は一部の基本的なデータ移行ニーズを満たすことができますが、大規模なデータや複雑なアプリケーションシナリオでは、NocoBaseのような自動化と安全性の保証機能が欠ける可能性があります。

## まとめ：この2つの製品が最も適した使用シナリオ

**NocoBase**は豊富な機能と強力なエンタープライズ機能を提供しており、特に複雑なビジネスアプリケーションを構築し、さまざまな企業システムと統合する必要があるユーザーに最適です。その利点は次のとおりです：

* 強力なデータモデル駆動型と柔軟な機能で、複雑なビジネスプロセス管理に適しています。
* 高性能と負荷分散能力により、大規模なユーザーデータと高い同時実行シナリオを処理できます。
* CAS、OIDC、LDAPなどの豊富なエンタープライズシステム統合とサードパーティプラグインを提供し、既存のシステムと深く統合が必要な企業ユーザーに適しています。
* カスタムブランド機能やアプリケーションのバックアップおよび復元プラグインにより、エンタープライズアプリケーションシナリオにおいて高い安全性と操作の容易さを実現します。

**適したシナリオ**：複雑なビジネスアプリケーションを構築し、大量のユーザーやデータを管理し、既存のシステムやデータベースと深く統合する必要がある企業に最適です。安定性、高性能、拡張性を求める企業ユーザーにとって、NocoBaseは最良の選択です。

**NocoDB**はよりデータベース管理ツールに近く、リレーショナルデータベースをより操作しやすい表形式に変換することに特化しています。その特徴は次のとおりです：

* シンプルな操作と基本的なフォーム機能により、データベースの迅速な管理と操作に適しています。
* 比較的柔軟なフロントエンドおよびバックエンドデザインで、小規模なデータ管理やシンプルなデータベースアプリケーションシナリオに適しています。
* API機能はオープンですが、負荷や高性能処理の面ではやや不足しています。

**適したシナリオ**：軽量なデータベース管理とシンプルなアプリケーションシナリオが必要なユーザー、特に既存のデータベースを持ち、ノーコード方式で迅速にデータを操作および管理したいプロジェクトに適しています。小規模なチームや個人開発者、比較的シンプルなユーザーに適しています。

**要するに、柔軟性が高く、強力で企業向けアプリケーションに適したツールが必要な場合は、NocoBaseがより適しており、軽量なデータベース管理が主なニーズで、複雑な統合機能を必要としない場合は、NocoDBがシンプルで効率的なソリューションとなります。**

😁最後に、これら2つのそれぞれ特長を持つオープンソースのノーコード製品を実際に体験してみてください。この文章があなたの疑問を解決したと思ったら、ぜひ友達と共有してください。ご覧いただきありがとうございました！

**関連記事：**

* [究極の自己ホスティングソリューションガイド](https://www.nocobase.com/cn/blog/the-ultimate-guide-to-awesome-self-hosted-solutions)
* [2024年の内部ツール構築のための5つのベストオープンソースプロジェクト](https://www.nocobase.com/cn/blog/top-5-open-source-projects-for-building-internal-tools-in-2024)
* [GitHubスター数トップ12のオープンソースノーコードツール](https://www.nocobase.com/cn/blog/the-top-12-open-source-no-code-tools-with-the-most-github-stars)
* [GitHubスター数が最も多い8つのオープンソースCRUDプロジェクト](https://www.nocobase.com/cn/blog/crud-projects)
* [GitHubスター数トップ11のオープンソース内部ツール](https://www.nocobase.com/cn/blog/open-source-internal-tools)
* [GitHubスター数トップ15のオープンソースローコードプロジェクト](https://www.nocobase.com/cn/blog/top-15-open-source-low-code-projects-with-the-most-github-Stars)
