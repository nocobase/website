<iframe width="800" height="450" src="https://www.youtube.com/embed/8qFJnqcwNKk?si=LYSPrRX3oWU18KzJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

タスク管理システムの要件が概説されたので、実際のステップに入りましょう！私たちのシステムは、**[作成](https://docs.nocobase.com/handbook/ui/actions/types/add-new)**、**[編集](https://docs.nocobase.com/handbook/ui/actions/types/edit)**、**[削除](https://docs.nocobase.com/handbook/ui/actions/types/delete)**をサポートし、さらに**タスクリストの表示**ができるようにする必要があります。このすべての機能は、NocoBaseのページ、ブロック、アクションを使用して実現できます。

> 詳細については、公式文書の[メニュー](https://docs.nocobase.com/handbook/ui/menus)と[ページ](https://docs.nocobase.com/handbook/ui/pages)を参照してください。

### 3.1 どのように始めるのか？

以前、ページの作成方法とユーザーリストの表示方法について説明しました。これらのページは、さまざまなブロックを自由に並べ替えることができるキャンバスとして機能します。手順を簡単におさらいしましょう：

1. [**ページを作成**](https://docs.nocobase.com/handbook/ui/pages)：クリックするだけでページを作成できます。
   ![ページ作成](https://static-docs.nocobase.com/Solution/demov3N-1.gif)
2. **[テーブルブロック](https://docs.nocobase.com/handbook/ui/blocks/data-blocks/table)**を作成：さまざまなデータを表示するためにテーブルブロックを選択してください。
   ![テーブルブロック作成](https://static-docs.nocobase.com/Solution/demov3N-2.gif)

簡単ですよね？ しかし、「データリスト」を開くと、「ユーザー」と「役割」のコレクションしか表示されないことに気づくかもしれません。タスクテーブルはどこに行ったのでしょうか？心配しないでください。NocoBaseの[**データソース**](https://docs.nocobase.com/handbook/data-source-manager)機能を通じてアクセス可能です。

> **データソースについて：** データソースは、データベース、API、またはその他のデータストレージタイプである可能性があります。NocoBaseは、MySQL、PostgreSQL、SQLite、MariaDBなどのさまざまなリレーショナルデータベースをサポートしています。
>
> NocoBaseは、データソースとテーブルを管理するための**データソース管理プラグイン**を提供しています。しかし、データソースに接続するには、特定の**データソースプラグイン**も必要です。

### 3.2 データソース：あなたのコレクションリポジトリ

![](https://static-docs.nocobase.com/20241009144356.png)

NocoBaseでは、すべてのコレクションが[**データソース**](https://docs.nocobase.com/handbook/data-source-manager)内に保存されており、各コレクションの設計と構造が書かれた本のように機能します。新しい章を追加するために、**タスクコレクション**を作成しましょう。

> データソースとコレクションに関する詳細は、[データソース管理](https://docs.nocobase.com/handbook/data-source-manager)と[コレクションの概要](https://docs.nocobase.com/handbook/data-modeling/collection)を参照してください。

- **データソース設定にアクセスする方法**：
  - **設定** > **データソース** > **メインデータソースの構成**をクリックします。
  - メインデータソースには、通常デフォルトで「ユーザー」と「役割」のコレクションが表示されます。
    ![データソース設定](https://static-docs.nocobase.com/Solution/demov3N-3.gif)

さあ、3つ目のコレクション－私たちの**タスクコレクション**を作成しましょう。前回の設計に従って、次のフィールドを持つシンプルなタスクコレクションを設定します：

```
タスクコレクション：
        タスク名 (task_name) 単一行テキスト
        タスクの説明 (task_description) 複数行テキスト
```

### 3.3 タスクコレクションの作成

1. **タスクコレクションを作成**：

   - 「コレクションを作成」> **一般コレクション**を選択> **コレクション表示名**（例：「タスクコレクション」）と**コレクション名**（例：「tasks」）を入力します。
   - **コレクション名**は一意のIDであり、英文字、数字、またはアンダースコアを使用することが推奨され使いやすくなります。
   - 作成のために提出します。
     ![タスクコレクションを作成](https://static-docs.nocobase.com/Solution/demov3N-4.gif)
2. **デフォルトフィールド**：
   NocoBaseは、各標準コレクションのためのデフォルトフィールドを生成します：

   - **ID**：各レコードの一意の識別子。
   - **作成日時**：タスクが作成された時間を自動的に記録します。
   - **作成者**：タスクを作成したユーザーを自動的に記録します。
   - **最終更新日時**および**最終更新者**：各修正の日時とユーザーを記録します。

これらのデフォルトフィールドは、まさに私たちが必要としているもので、手動で追加する手間を省いてくれます。

3. **カスタムフィールドの作成**：
   - **タスク名**：フィールドを追加 > **単一行テキスト**を選択 > 'フィールド表示名'を「タスク名」に設定し、フィールド名を「task_name」にします。
     ![タスク名フィールドを作成](https://static-docs.nocobase.com/Solution/demov3N-5N.gif)
   - **タスクの説明**：**長文テキスト**のフィールドをもう一つ作成し、フィールド名を「task_description」に設定します。
     ![タスクの説明フィールドを作成](https://static-docs.nocobase.com/Solution/demov3N-6.gif)

おめでとうございます！**タスクコレクション**が定義され、独自のタスクデータ構造を成功裏に作成しました。

### 3.4 タスク管理ページの作成

タスクコレクションが準備できたので、今度はそれをページ上にテーブルブロックを使って表示します。

1. **タスク管理ページを作成**：

   - 「新しいページ」をクリックし、名前を「タスク管理」とします。
   - タスクデータを表示するテーブルブロックを追加します。
     ![タスクブロックを作成](https://static-docs.nocobase.com/Solution/demov3N-6N.gif)
2. **データを追加**：

   - 「うーん、なぜデータがないの？」心配しないで、すぐに追加しましょう！
   - 画面右上の「アクションを構成」をクリックし、**追加**アクションを選択し、空のポップアップコンテナが表示されます。
   - 次にサブミットアクションを設定し、必要なフォームブロックを追加します！
     ![アクションを構成](https://static-docs.nocobase.com/Solution/demov3N-7.gif)
3. **データを入力**：

   - テストタスクを入力し、サブミットをクリックし、成功しました！タスクデータが追加されました。
     ![データを送信](https://static-docs.nocobase.com/Solution/demov3N-8N.gif)

### 3.5 タスクフィルタリング – タスクを迅速に探す

タスクが増えるにつれて、特定のものを迅速に見つけるにはどうすればよいでしょうか？ここで[**フィルターアクション**](https://docs.nocobase.com/handbook/ui/actions/types/filter)が役立ちます。NocoBaseでは、フィルター条件を設定するだけでタスクを簡単に見つけることができます。

#### 3.5.1 フィルターアクションの有効化

まず、フィルターアクションを有効にする必要があります：

- **「アクションを構成」上にマウスを移動**し、**フィルター切り替えスイッチ**をクリックします。
  ![フィルターを有効化](https://static-docs.nocobase.com/Solution/202410261147021729914422.png)

#### 3.5.2 フィルター条件の使用

有効化後、ページにフィルターボタンが現れます。今度は、**タスク名**でフィルタリングしてみましょう：

- フィルターパネルでタスク名を選択し、クエリを入力します。
- 「送信」をクリックしてタスクリストが正しくフィルター条件に合う結果を表示するか確認してください。
  ![フィルターを使用](https://static-docs.nocobase.com/Solution/demov3N-9.gif)

#### 3.5.3 フィルターアクションの無効化

もはやフィルターが必要ない場合は、その切り替えをオフにするだけです。

- **フィルター条件をリセット**して、アクティブなフィルターがないことを確認し、「リセット」をクリックします。
- 再度**フィルター**をオフにして隠します。
  ![フィルターの無効化](https://static-docs.nocobase.com/Solution/demov3N-10.gif)

### 3.6 タスクの編集と削除

タスクの追加や表示に加え、私たちは[**編集**](https://docs.nocobase.com/handbook/ui/actions/types/edit)と[**削除**](https://docs.nocobase.com/handbook/ui/actions/types/delete)を行う必要があります。ブロック、フィールド、アクションの追加に慣れているので、これも簡単です：

1. **タスクを編集**：

   - タスクリストの設定に**編集**アクションを追加します。編集をクリック > フォーム（編集）ブロックを追加 > 編集するフィールドを選択します。
2. **タスクを削除**：

   - 同様に、設定を開いて**削除**アクションを有効にすると、削除ボタンが表示されます。削除をクリック > 確認して、タスクをリストから削除します。
     ![タスクを編集](https://static-docs.nocobase.com/Solution/demov3N-11.gif)

素晴らしい！これでタスクに対する**作成、読み取り、更新、削除（CRUD）**機能が実装されました。

---
