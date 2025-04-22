## 新機能

### 複数のデータソースのサポート

「[データソースマネージャー](https://docs.nocobase.com/handbook/data-source-manager)」プラグインが追加され、すべてのデータソースのコレクションとフィールドを管理します。データソースマネージャープラグインは、データソース管理のための集中化されたインターフェースを提供しますが、データソースにアクセスする機能は提供していません。さまざまなデータソースプラグインと併用する必要があります。現在サポートされているデータソースは次のとおりです：

* [メインデータベース](https://docs.nocobase.com/handbook/data-source-main)：NocoBaseのメインデータベースで、MySQL、PostgreSQL、SQLiteなどのリレーショナルデータベースをサポートしています。
* [外部MySQLデータソース](https://docs.nocobase.com/handbook/data-source-external-mysql)：既存のMySQLデータベースにデータソースとしてアクセスします。
* [外部MariaDBデータソース](https://docs.nocobase.com/handbook/data-source-external-mariadb)：既存のMariaDBデータベースにデータソースとしてアクセスします。
* [外部PostgreSQLデータソース](https://docs.nocobase.com/handbook/data-source-external-postgres)：既存のPostgreSQLデータベースにデータソースとしてアクセスします。

その他、API（SDK）を提供するプラットフォームや一般的なデータベースタイプも拡張が可能です。

![データソースマネージャー](https://static-docs.nocobase.com/fe8ecdaf640097eeb310c94a997b9090.png)

### コレクション管理の調整

元々の「コレクションマネージャー」を「データソース > メインデータベース > 設定」に移動しました。

![メインデータベースの設定](https://static-docs.nocobase.com/b5ad882a131e447f78b0c22a92ec9df6.gif)

### 非IDフィールドを主キーおよびリレーション制約としてサポート

コレクションを作成する際に、IDフィールドを作成しない選択ができます。

![プリデファインフィールド](https://static-docs.nocobase.com/87dc4101a884f97cbfce00f1891f7cf6.png)

整数フィールドを主キーとして使用できます。

![整数フィールドを主キーとして使用できます](https://static-docs.nocobase.com/cce37d7d8e9feaa66970da0c643a2d9d.png)

単一行テキストフィールドも主キーとして使用できます。

![単一行テキストフィールドも主キーとして使用できます](https://static-docs.nocobase.com/b2c797f52bedfcfa06936a244dd9be4b.png)

リレーション制約は、非主キーのフィールドとして設定されたユニークインデックスを持つ他のフィールドを選択することをサポートします。

![](https://static-docs.nocobase.com/e5515e58426c5be08ba982b0bb311410.png)

### ドラッグ＆ドロップソートの調整

「ソート」タイプのフィールドが追加され、コレクションを作成する際に、ソートフィールドが自動的に生成されなくなり、手動で作成する必要があります。

![](https://static-docs.nocobase.com/470891c7bb34c506328c1f3824a6cf20.png)

フィールドをグループとして選択した場合、ソートの前にグループ化が行われます。

![](https://static-docs.nocobase.com/0794d0a9c0dc288a8fc924a3542bb86e.png)

テーブルブロックでのドラッグ＆ドロップソートを有効にする場合、ソートフィールドを選択する必要があります。

![](https://static-docs.nocobase.com/20cf12fd7ca3d8c0aa1917a95c0a7e7c.png)

カンバンブロックを作成する際にもソートフィールドを選択する必要があります。

![](https://static-docs.nocobase.com/b810265790d6a1ec099e3d88d1361271.png)

### ユーザーと権限インターフェースの調整

ユーザー管理インターフェースが追加され、ユーザーと役割の管理が1つのメニューに統一されました。

![](https://static-docs.nocobase.com/7be26746652098f07ce105dbae373522.png)

役割管理インターフェースが調整され、ユーザーに関連付けられた役割、権限、部署などの管理を容易にしました。

![](https://static-docs.nocobase.com/4ec942af764dfcec1ddc9a244816a6ee.png)

元の「アクション権限」を「データソース」タブに移動しました。

![](https://static-docs.nocobase.com/461ab881fe94a33f9a122e9734b85f4d.gif)

### 部署プラグイン

![](https://static-docs.nocobase.com/093473d9c23a789d41899df9bcaf3389.png)

ユーザーを部署で整理し、階層関係を設定して役割をリンクし、権限を管理し、ワークフローや式の変数として部署を使用します。

### ワークフロー：承認

承認プラグインは、このプロセスのための専用ワークフロータイプ（トリガー）「承認を開始」と「承認」ノードを提供します。NocoBaseの独自のカスタムデータテーブルとカスタムブロックと組み合わせることで、さまざまな承認シナリオを迅速かつ柔軟に作成・管理できます。

承認設定

![承認設定](https://static-docs.nocobase.com/21acc5615ecc03aeeb44671ab945baea.png)

承認プロセス

![承認プロセス](https://static-docs.nocobase.com/6a879641bd15de0648cd4602779ef9fa.png)

詳細はドキュメンテーションを参照してください：[ワークフロー承認](https://docs.nocobase.com/handbook/workflow-approval)

### ワークフロー：プロセス終了ノード

このノードが実行されると、現在のワークフローの実行が直ちに終了し、ノードで設定されたステータスで終了します。このノードは通常、特定のロジックフローの制御に使用され、特定の論理条件を満たした後、現在のワークフローを終了し、その後の処理を続行しません。これはプログラミング言語のreturnコマンドのようなもので、現在実行中の関数を終了します。

![](https://static-docs.nocobase.com/38d6352211d791fd4233f5cd4bdb34f2.png)

詳細はドキュメンテーションを参照してください：[プロセス終了ノード](https://docs.nocobase.com/handbook/workflow/nodes/end)

### ワークフロー：カスタム変数ノード

ワークフロー内で変数を宣言したり、以前に宣言した変数に値を割り当てたりすることができ、通常はワークフロー内で一時データを保存するために使用されます。このノードは、計算結果を分岐外で後で使用するために保存する必要があるシナリオ（ループ、並行実行など）に適しています。

![](https://static-docs.nocobase.com/c19913f99968d987a52aaa53578a7318.png)

詳細はドキュメンテーションを参照してください：[カスタム変数ノード](https://docs.nocobase.com/handbook/workflow/nodes/variable)

### ワークフロー：リクエストインターセプター

リクエストインターセプタープラグインは、フォームの操作に対してリクエストをインターセプトするメカニズムを提供します。インターセプトイベントは、対応するフォーム操作が送信された後、処理される前にトリガーされます。トリガー後のフロー内で「プロセス終了」ノードが実行される場合、または他のノードが実行に失敗（エラーやその他の未実行の状態）した場合、そのフォーム操作はインターセプトされ、そうでない場合は予定された操作が正常に実行されます。これは、ビジネス検証やロジックチェックを行い、クライアントが送信した作成、更新、削除の操作を承認またはインターセプトするために使用できます。

![](https://static-docs.nocobase.com/3f3991aaf9d73b8c2f7c179e7702d16b.png)

詳細はドキュメンテーションを参照してください：[リクエストインターセプター](https://docs.nocobase.com/handbook/workflow/triggers/pre-action)

### ワークフロー：レスポンスメッセージノード

レスポンスメッセージノードは、特定のタイプのワークフロー（リクエストインターセプトやフォームイベントなど）で、クライアントにカスタムメッセージでフィードバックを提供します。

ノード設定

![](https://static-docs.nocobase.com/4376843af541ef6a08696e074cb6cd07.png)

プロンプトメッセージ

![](https://static-docs.nocobase.com/051f12855bd0ce74b22de191b8b87cf5.png)

詳細はドキュメンテーションを参照してください：[レスポンスメッセージノード](https://docs.nocobase.com/handbook/workflow-response-message)

## 非互換の変更

### 名前の衝突するAPI

このカーネルの変更では、新しいバージョンのAPIが古いバージョンの名前と衝突します。これらの衝突する古いバージョンのAPIは、このバージョンで保持されますが、統一的に`_deprecated`の接尾辞が付けられます。


| 元のAPI                             | 廃止されたAPI                   | 新しいAPI                                                                                                      |
| ------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| CollectionProvider                   | CollectionProvider\_deprecated   | [CollectionProvider](https://client.docs.nocobase.com/core/data-source/collection-provider)                  |
| useCollection                        | useCollection\_deprecated        | [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#hooks)                  |
| useCollectionField                   | useCollectionField\_deprecated   | [useCollectionField](https://client.docs.nocobase.com/core/data-source/collection-field#hooks)                |
| useCollectionManager                 | useCollectionManager\_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks)  |
| useContext(CollectionManagerContext) | useCollectionManager\_deprecated | [useCollectionManager](https://client.docs.nocobase.com/core/data-source/collection-manager-provider#hooks)  |

上記の関連APIを使用している場合、次の2つの方法で変更できます：

* 簡単な置換：元のAPIを`_deprecated`のついたものに置き換えます。たとえば、`useCollection()`を`useRecord_deprecated()`に置き換えます。
* 新しいドキュメントに従って新しいAPIを使用します：新しいAPIの名前は古いAPIと同じですが、パラメータや返り値に違いがありますので、新しいドキュメントを参照して、対応するコードを調整してください。

### 調整が必要な他のAPI

* `registerTemplate()`は`app.dataSourceManager.addCollectionTemplates()`に変更されました。
* `registerField()`は`app.dataSourceManager.addFieldInterfaces()`に変更されました。
* `registerGroup()`は`app.dataSourceManager.addFieldInterfaceGroups()`に変更されました。
* `useContext(CollectionManagerContext)`は`useCollectionManager_deprecated()`に変更されました。
* `ExtendCollectionsProvider`を使用してコレクションを拡張します。
* `RecordProvider`は必要に応じて親パラメータの明示的な渡しが必要です。