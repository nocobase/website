このブログは Leandro Martins によって作成され、最初に[Build Application Catalog with NocoBase](https://leandromartins.hashnode.dev/simplified-architecture-governance-building-an-application-catalog-with-nocobase#)で公開されました。

目標は、[NocoBase](https://www.nocobase.com/)を用いてコーディングなしでWebアプリケーションを開発する可能性と容易さを示すことです。案例として、アーキテクチャガバナンスを支援するアプリケーションカタログを作成します。この案例では、NocoBaseの機能を用いたモデリング、インストール、テーブル作成、メニュー、フォーム、チャート、ワークフローに関わる作業を行います。

この記事では、以下の技術を使用します：NocoBase、Postgres、Docker。

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---



## **NocoBaseとは何ですか？**

[NocoBase](https://www.nocobase.com/)は、JavaScriptで書かれたオープンソースプラットフォームで、NodeJS、TypeScript、AntDesignを使用して、コーディングを必要とせずにカスタムアプリケーションを作成することを目的としています。ビジュアルでテーブル、カスタムフォーム、ワークフロー自動化、TAILORED INTERFACEの作成が可能になるローコードバックエンドソリューションです。

![What is NocoBase?.png](https://static-docs.nocobase.com/0cfdc6c0e72f9088609239bbec1cd515.png)

### **NocoBaseの主要ハイライト：**

* **活発なコミュニティ**：プラグイン開発とトラブルシューティングをサポートする活発なフォーラム。
* **常にレビューされるコード**：GitHubでの貢献により頻繁に更新され、13k以上のスターを獲得。
* **データベース互換性**：PostgresやMySQLなどの主要なリレーショナルデータベースをサポート。
* **ビジュアルデータモデリング**：メインデータベースプラグインを使用してテーブルとデータをビジュアルに定義。
* **豊富なプラグインライブラリ**：無料および有料のプラグインを幅広く提供し、カスタムプラグインの開発が可能。

![Key Highlights of NocoBase.png](https://static-docs.nocobase.com/95c4cc96a72c8e414e5399d7d9b6ee18.png)

## **ケーススタディ概要**

NocoBaseの機能をいくつか示すために、*Architecture Portal*と呼ばれるケーススタディを作成します。このポータルは、組織のアプリケーションに関するデータを組織し、以下の機能を特徴としています：

* **アプリケーションカタログ**。
* **更新のリマインダー**、例えばバージョンアップグレードや証明書の更新。
* 組織のシステムのための**APIカタログ**。
* インサイトフルなデータ可視化のための**チャート**。

![Case Study Overview.png](https://static-docs.nocobase.com/7391b4a43314b7ec8e84469f6e8d3697.png)

## **開発段階**

### **データモデリング**

最初のステップは、Architecture Portalに含めるフィールドをマッピングし定義することです。以下に例を示します：

```
1. Application Catalog

Applications:
id: Unique identifier.
name: Application name.
description: Detailed description of the application.
stack: Technologies used.
owner: Responsible person or team.
created_at: Creation date.
last_updated: Last update date.

Reminders (Linked to Applications):
id: Unique identifier.
application_id: Reference to the application.
type: Reminder type (e.g., version update, certificate renewal).
description: Reminder description.
scheduled_date: Scheduled date for the reminder.
status: Status (e.g., Pending, Completed).

2. API Catalog

APIs:
id: Unique identifier.
Application_id: Reference to the corresponding system.
name: API name.
description: Functional description of the API.
documentation_url: Link to the official documentation.
last_updated: Last update date.
version: Current version.
```

### **NocoBaseのインストール**

[インストール](https://docs.nocobase.com/welcome/getting-started/installation) と設定では、ローカルでDockerバージョンを使用することにしました。他のインストールオプションにはnpmやGitソースがあります。

以下はDocker ComposeのYAMLコードです。Dockerをインストールした後、YAMLファイルディレクトリに移動し、以下のコマンドを実行します：

```
docker compose up -d
```

これにより、あなたのマシン上でNocoBaseが起動し、デフォルトポートは `13000` です。ブラウザで  を開いてください。デフォルトのログイン資格情報は `admin@nocobase.com` と `admin123` です。

```
version: '3'

networks:
  nocobase:
    driver: bridge

services:
  app:
    image: nocobase/nocobase:beta
    networks:
      - nocobase
    depends_on:
      - postgres
    environment:
      # The application's secret key, used to generate user tokens, etc.
      # If APP_KEY is changed, old tokens will also become invalid.
      # It can be any random string, and make sure it is not exposed.
      - APP_KEY=your-secret-key
      # Database type, supports postgres, mysql, mariadb
      - DB_DIALECT=postgres
      # Database host, can be replaced with the IP of an existing database server
      - DB_HOST=postgres
      # Database name
      - DB_DATABASE=nocobase
      # Database user
      - DB_USER=nocobase
      # Database password
      - DB_PASSWORD=nocobase
      # Timezone
      - TZ=Asia/Shanghai
    volumes:
      - ./storage:/app/nocobase/storage
    ports:
      - '13000:80'
    # init: true

  # If using an existing database server, postgres service can be omitted
  postgres:
    image: postgres:16
    restart: always
    command: postgres -c wal_level=logical
    environment:
      POSTGRES_USER: nocobase
      POSTGRES_DB: nocobase
      POSTGRES_PASSWORD: nocobase
    volumes:
      - ./storage/db/postgres:/var/lib/postgresql/data
    networks:
      - nocobase
```

### **テーブルとデータの作成**

**データソースマネージャー**プラグインを使用して、コレクション（テーブル）を作成しフィールドを定義できます。プロセスはシンプルで、上記に示されたモデルに従います。プラグインの詳細については[こちら](https://www.nocobase.com/en/plugins)をご覧ください。

![Creating Tables and Data.png](https://static-docs.nocobase.com/b0bece241dd24b7a80cdc69925bbe739.png)

![Creating Tables and Data.png](https://static-docs.nocobase.com/c8b1b649eebf01b952cc88b4a6aadfc6.png)

### **メニューの作成**

画面右側の鉛筆のようなアイコンをクリックすると、トップメニューとサイドメニューを作成できます。画像に示すようにそれを複製しましょう。

![Creating Menus.png](https://static-docs.nocobase.com/c501bbd624755efaff7110d7fa5431b2.png)

### **フォームの作成**

フォーム（CRUD）の作成も非常に簡単です。NocoBaseでは、ブロックを使用してテーブル、フォーム、詳細、リスト、チャート、カードなどを作成します。ブロックのタイプを選択後、どのコレクション（テーブル）をこのブロックにリンクさせたいか選択すると、そのコレクションにリンクされたコンポーネント（ブロック）が魔法のように表示されます。各ブロックには独自のカスタマイズ設定があります。ブロックの詳細については[こちら]を参照してください。

![Creating Forms.png](https://static-docs.nocobase.com/fe99e76874a89bc15d5e8ae67722053d.png)

### **チャートの作成**

チャートの構築も簡単です。*Chart*と呼ばれるブロックを追加し、データソースとして使用したいコレクションを選択します。画像の下に示します。

![Creating Charts.png](https://static-docs.nocobase.com/1fc75066b78581b91e1a4966f1718761.png)

ブロックを選択後、チャートのプロパティを設定できます。画像の下にチャート設定オプションを示します。ここでは、指標、グループ化、フィルター、各種チャートタイプ、タイトルなどの利用可能なプロパティを定義できます。ここでは、すべての設定可能性を探求できます。

![Creating Charts.png](https://static-docs.nocobase.com/acab53f9586f3c4fbf6d38ee95be0c17.png)

### **リマインダーのためのスケジュールワークフローの作成**

NocoBaseでは、イベントを通じてさまざまなタイプのタスクを自動化してワークフローを作成できます。トリガーの3つのタイプは：\*コレクションイベント、スケジュールイベント、およびポストアクションイベント。\*これらのトリガーを使用して、システム内のアクションを作成できます。例えば、通知を送信したり、他のテーブルにデータを挿入したり、外部APIにリクエストを送信したりできます。下の画像は、アプリケーション内での通知送信のためのワークフローの例です。

![Workflow.png](https://static-docs.nocobase.com/e58fb9a4492c7f620f1de94a9d240798.png)

私たちの場合、リマインダーの予定日に通知を送信するワークフローを作成します。これは、特定の時間に毎日実行される**スケジュールイベント**です。画像の下に示します。

![Workflow.png](https://static-docs.nocobase.com/a095a620448ce80d7f4d385fe13d3a41.png)

![Workflow.png](https://static-docs.nocobase.com/802cd35254c5fd661543be67d964a52a.png)

さらに、スケジュールを設定するだけでなく、ワークフローを設定して**リマインダー**コレクションを照会し、当日のリマインダーを取得し、それぞれをループして、各リマインダーの通知を送信します。画像の下に示します。プロセスは簡単です：ただこれらのアクションを"+"ボタンをクリックして追加し、設定するだけです。

![Workflow.png](https://static-docs.nocobase.com/7e5534a92af59f2bb4272660bb3ed65f.png)

設定を完了すると、右上隅の"On"ボタンをクリックしてワークフローをアクティブにします。実行結果を表示するには、右上隅の"…"をクリックし、**実行履歴**を選択します。画像の下に示します。

![Workflow.png](https://static-docs.nocobase.com/1a8dd52681a79e43d484b95d1326df81.png)

## **結論**

上面に示されたように、NocoBaseはアプリケーション開発を加速させる多くの機能を提供します。規模や要件に応じて、ファイル管理、国際化、モバイルサポート、テーマ編集などの機能を柔軟に構築でき、独自のプラグインを開発したり、マーケットプレイスで商用プラグインを購入することもできます。

関連文献：

* [NocoBaseでアプリを構築する方法は？](https://www.nocobase.com/ja/blog/build-apps-with-nocobase)
* [2025年の強力なノーコード開発プラットフォームトップ8](https://www.nocobase.com/ja/blog/top-8-powerful-no-code-development-platforms-in-2024)
* [GitHubのスター数が最も多いオープンソースノーコードツール12選](https://www.nocobase.com/ja/blog/the-top-12-open-source-no-code-tools-with-the-most-github-stars)
* [GitHub Stars が最も多いオープンソースのローコードプロジェクト15選](https://www.nocobase.com/ja/blog/top-15-open-source-low-code-projects-with-the-most-github-Stars)
* [開発者のためのトップ6無コードツール](https://www.nocobase.com/ja/blog/top-6-no-code-tools-for-developers)
* [オープンソースの高速開発プラットフォームトップ7](https://www.nocobase.com/ja/blog/rapid-development-platform)
