<iframe width="800" height="436" src="https://www.youtube.com/embed/2Usn5osORz4?si=_XglvOoOXUlXvsqR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 8.1 新しい章へようこそ

この章では、ナレッジベースを作成することに取り組みます。このナレッジベースは、文書、タスク、および情報をシームレスに管理・整理するために設計された包括的なモジュールです。ツリー構造の文書コレクションを設計・実装することで、文書のステータス、添付ファイル、および関連タスクを追跡する効率的なシステムを確立します。

### 8.2 データベース設計の探求

#### 8.2.1 初期設計と文書コレクションの作成

まず、「文書コレクション」を構築し、すべての文書情報をカタログ化することで、シンプルなデータベース設計から始めます。文書コレクションの主要なフィールドは次のとおりです：

* **タイトル**：単一行のテキスト。
* **内容**：Markdown (Vditor)。
* **文書ステータス**：ドラフト、公開、アーカイブ、削除のオプションを含む単一選択。
* **添付ファイル**：ファイルや画像を追加して文書内容を豊かにします。
* **関連タスク**：タスク管理において文書を簡単に参照できるようにする多対一の関係フィールド。

![](https://static-docs.nocobase.com/2412061729document-tasks.drawio.svg)

システムが進化するにつれて、文書管理の詳細なためにフィールドを追加し続けます。

#### 8.2.2 ディレクトリ管理のためのツリー構造の構築

> ツリーコレクション（プラグイン [plugin-collection-tree](https://docs-jp.nocobase.com/handbook/collection-tree)によって提供される）は、各データアイテムが1つ以上の子アイテムを持つツリーを模したコレクション構造です。これらの子アイテムはさらに独自の子孫を持つことができます。

組織と階層を確保するために、文書コレクションを[**ツリーコレクション**](https://docs-jp.nocobase.com/handbook/collection-tree)として構造化し、直感的な親子分類を可能にします。この設定では、次のフィールドが自動的に生成されます：
![](https://static-docs.nocobase.com/Solution/202411151902291731668559.png)

- **親ID**：現在の文書の親文書を特定します。
- **親**：親子関係を確立する多対一フィールド。
- **子供**：親文書の下のすべての子文書を表示する一対多フィールド。
  ![](https://static-docs.nocobase.com/Solution/202411151905531731668753.png)

これらのフィールドはディレクトリ階層を維持するために不可欠ですので、変更しないことをお勧めします。

タスクコレクションとの関連を確立し、逆フィールドを含む[(多対一)](https://docs-jp.nocobase.com/handbook/data-modeling/collection-fields/associations/m2o)ことも行い、タスクの関連ポップアップ内で文書リストを直接作成できるようにします。

### 8.3 文書管理ページの作成

#### 8.3.1 新しい文書管理メニューの追加

主システムメニューに新しいページ「文書管理」を追加し、適切なアイコンを選択します。次に、文書コレクションのためのテーブルブロックを作成し、追加、削除、編集、検索などの基本的なアクションを有効にし、デザインの検証のためにテストデータを入力します。

![](https://static-docs.nocobase.com/Solution/202411151949421731671382.png)

#### 演習

1. 文書管理ページに「文書1」という名前の親文書を追加します。
2. 「文書1」の下に「第一章」という名前の子文書を追加します。

#### 8.3.2 ツリーテーブルビューへの変換

おそらく、なぜカタログツリー構造ではないのか疑問に思っていることでしょう。

デフォルトでは、テーブルブロックは通常のテーブルとして表示されます。これをツリーテーブルビューに変換する方法は以下の通りです：

1. テーブルブロックの右上隅をクリック > ツリーテーブル。

   選択した瞬間に「すべて展開」トグルがツリーテーブルの下に表示されます。

   同時に、前に作成した「第一章」が消えます。
2. ツリーテーブルの下にある「すべて展開」オプションをクリックして有効にします。

   これで、文書の親子構造がより直感的に表示され、すべての文書レベルを簡単に表示および展開できます。

   「サブレコードを追加」アクションを続けましょう。

ツリーテーブルへの変換が完了しました！

![](https://static-docs.nocobase.com/Solution/202411151951241731671484.png)

![](https://static-docs.nocobase.com/Solution/202411151953111731671591.png)

#### 8.3.3 「子レコードを追加」の設定

子レコードを追加するために、必要な要素を設定します。親レコードフィールドが選択されると、新しいエントリが現在の文書ディレクトリ内に作成されるため、デフォルトで「読み取り専用」になります。

![](https://static-docs.nocobase.com/Solution/202411151954481731671688.png)

タスクデータが多すぎる場合、関連タスクの割り当てが特に面倒に感じるかもしれません。タスクフィルターのデフォルト値を親レコードに関連付けられたタスクと同じに設定できます。

![](https://static-docs.nocobase.com/Solution/202411151958321731671912.png)

![](https://static-docs.nocobase.com/Solution/202411151958551731671935.png)

デフォルト値は即時に効果を発揮しないかもしれませんので、閉じて再度クリックすると自動的に入力されたことが確認できます！

### 8.4 フォームテンプレートとタスク関連の設定

#### 8.4.1 テーブルとフォームの[テンプレート](https://docs-jp.nocobase.com/handbook/ui/blocks/block-settings/block-template)の作成

将来の管理を容易にするため、文書テーブルとその作成/編集フォームを[テンプレート](https://docs-jp.nocobase.com/handbook/ui/blocks/block-settings/block-template)として保存し、他のページで再利用できるようにします。

![](https://static-docs.nocobase.com/Solution/202411160300381731697238.png)

#### 8.4.2 複製した文書テーブルの表示

タスクビューのポップアップ内で、新しい[タブ](https://docs-jp.nocobase.com/manual/ui/pages)「文書」を追加します。このタブ内に、フォームブロック > その他のレコード > 文書 >「テンプレートをコピー」 > を追加し、以前に作成した文書テーブルテンプレートをインポートします（必ず[**テンプレートをコピー**](https://docs-jp.nocobase.com/handbook/ui/blocks/block-settings/block-template)を選択してください）。

![](https://static-docs.nocobase.com/Solution/202411160304401731697480.png)

この方法は文書リストの作成を簡素化します。

#### 8.4.3 タスク関連の調整

外部テーブルテンプレートをコピーしたため、タスクコレクションとまだリンクされていません。すべての文書データが表示され、理想的な状態ではありません。

この状況は非常に一般的です。対応する関係フィールドを作成していない場合でも、関連データを表示する必要がある場合、両者を手動でリンクする必要があります。（**注：** テンプレートの[コピー](https://docs-jp.nocobase.com/handbook/ui/blocks/block-templates)を使用します。[参照テンプレート](https://docs-jp.nocobase.com/handbook/ui/blocks/block-templates)ではなく、そうでないと、行ったすべての変更が他のテーブルブロックと同期されます！）

- データ表示の関連付け

テーブルブロックの右上隅をクリックし、[データ範囲を設定](https://docs-jp.nocobase.com/handbook/ui/blocks/block-settings/data-scope)を次のように設定します：

【タスク/ID】= 【現在のポップアップレコード/ID】

![](https://static-docs.nocobase.com/Solution/202411160306291731697589.png)

![](https://static-docs.nocobase.com/Solution/202411160307211731697641.png)

成功しました。テーブル内に保持されている文書は、私たちのタスクに関連付けられています。

- フォームブロックの関連付けを追加します。

追加ブロック画面に入ります：

関連するタスクフィールドに対して、[デフォルト値](https://docs-jp.nocobase.com/handbook/ui/fields/field-settings/default-value)を[親ポップアップレコード]に設定します。

親ポップアップは、現在のタスクデータの「表示」操作の一部であり、対応するタスクデータに直接リンクします。

これを[読み取り専用（表示モード）](https://docs-jp.nocobase.com/handbook/ui/fields/field-settings/pattern)に設定すると、現在のポップアップ内でのみ現在のタスクをリンクできることを示します。

![](https://static-docs.nocobase.com/Solution/202411160316031731698163.png)

![](https://static-docs.nocobase.com/Solution/202411160316471731698207.png)

完了です！これで新しく追加されたアイテムと表示されるアイテムはすべて現在のタスクの文書と関連付けられます。

注意深いあなたは、「編集」と「サブタスクの追加」の中に関連フィルターを追加することができるかもしれません。

ツリー構造をより明確にし、アクション列を整然とさせるために、タイトルを最初の列に移動しましょう。

![](https://static-docs.nocobase.com/Solution/202411160317291731698249.png)

### 8.5 文書管理におけるフィルタリングと検索

##### 8.5.1 [フィルターブロック](https://docs-jp.nocobase.com/handbook/ui/blocks/filter-blocks/form)の追加

文書にフィルターブロックを追加して、高度な検索オプションを有効にします。

- 文書管理ページにフィルターブロックを追加します。
- フィルタリング用のフォームを選択し、上部にドラッグします。
- タイトル、ステータス、タスクなどのフィールドをフィルター条件として選択します。
- 「フィルター」と「リセット」アクションを追加します。

このフィルターフォームは検索ボックスとして機能し、キーワード入力によって迅速に文書を取得できます。

![](https://static-docs.nocobase.com/Solution/202411160318121731698292.png)

![](https://static-docs.nocobase.com/Solution/202411160319491731698389.png)

#### 8.5.2 [データブロックの接続](https://docs-jp.nocobase.com/handbook/ui/blocks/block-settings/connect-block)

この時点で、クリックしても結果が出ないことに気づくかもしれません。最後のステップ、検索機能を持つブロック同士を接続する必要があります。

- ブロックの右上隅で[設定]をクリックし、[**データブロックを接続**](https://docs-jp.nocobase.com/handbook/ui/blocks/block-settings/connect-block)を選択します。

  ```
  ここでは、接続できるブロックのリストが表示されます。

  文書フォームを作成したので、文書テーブルに関連するすべてのデータブロックを検索し（このページには1つしかありません）、オプションとして表示されます。

  オプションにマウスを合わせると、画面が自動的に対応するブロックにフォーカスされるので、混乱する心配はありません。
  ```
- 接続したいブロックをクリックして、検索をテストします。

![](https://static-docs.nocobase.com/demoE2v1-2-v2.gif)

フィルターブロックの右上隅の設定ボタンをクリックして、文書テーブルの主データブロックに接続します。これにより、フィルターブロックで条件を設定するたびに、テーブルブロックが条件に基づいて自動的に結果を更新します。

### 8.6 ナレッジベースの[権限設定](https://docs-jp.nocobase.com/handbook/acl)

文書を保護し、管理を標準化するために、ユーザーの役割に基づいて権限を割り当て、異なるユーザーが権限に応じて文書を表示、編集、削除できるようにします。

ただし、文書データベースをアップグレードしてニュースやタスク通知機能を追加し、より柔軟な権限を持たせる予定です。

### 8.7 まとめと今後のステップ

この章では、文書コレクション、[ツリーコレクション](https://docs-jp.nocobase.com/handbook/collection-tree)、およびタスク関連を組み込んだナレッジベースの基盤を構築しました。フィルターブロックと再利用可能なテンプレートを追加し、文書管理を効率化しました。

[次へ](https://www.nocobase.com/ja/tutorials/project-tutorial-task-dashboard-part-1)、データ分析[チャート](https://docs-jp.nocobase.com/handbook/data-visualization)と重要情報の表示を含む個人ダッシュボードを構築します！

---

探求を続け、無限の可能性を創造しましょう！途中で問題が発生した場合は、[NocoBaseドキュメント](https://docs-jp.nocobase.com/)を確認するか、[NocoBaseコミュニティ](https://forum.nocobase.com/)に参加して議論やサポートを受けてください。
