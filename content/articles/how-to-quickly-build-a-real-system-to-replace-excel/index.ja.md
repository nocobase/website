## はじめに

この文章を開いたあなたは、きっとこんな違和感を感じ始めているはずです。

Excel やオンラインスプレッドシートで業務を管理するのが、そろそろ限界ではないか、と。

実際、[Reddit](https://www.reddit.com/r/googlesheets/comments/1p969rt/how_do_you_develop_a_system_based_on_a_large/) でも同じ悩みを抱える人たちの議論を何度も見かけてきました。

![Reddit.png](https://static-docs.nocobase.com/5161a8be-abe9-41e9-a3aa-0ace55c9ad66-02h0xf.png)

この記事では、実際に使われていた Excel シートを例に、NocoBase を使ってそれを短時間で実用的な業務システムへ作り替えていくプロセスを紹介します。

題材にするのは、非常によくあるケースです。顧客とプロジェクトをまとめて管理するためのスプレッドシート。

![Excel.png](https://static-docs.nocobase.com/a04a4520-c0d1-4032-b742-f5ec21a92182-5gfvek.png)

もともとは、顧客名やプロジェクト名など、最低限の情報を記録するためのものでした。

しかし、業務が増えるにつれて項目は増え続け、列も次々と追加されていきます。

気づけば、そのシートは複雑で扱いづらい状態になっていました。

これは、Excel を使って業務を回している多くのチームが直面している現実です。

そして今こそ、その状態から一歩踏み出すタイミングです。

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---



## ステップ1：データを分解する

この Excel シートには、十数個もの列があり、性質の異なる情報がすべて一つに詰め込まれています。

NocoBase で最初に行うのは、この状態をそのまま再現することではありません。

スプレッドシートを、意味のはっきりした構造へ整理し直すことです。

まずは、元の Excel ファイルに含まれている列を見てみましょう。

```Plain
Project ID
Client Name
Client Region
Industry
Project Name
Contract Type
License Seats
Start Date
Target Go Live
Status
Latest Invoice Amount (USD)
Latest Invoice Date 
Payment Status
Owner
Notes
```

Excel ではよくある構成ですが、業務システムとして考えると、情報は役割ごとに分けて管理する方がはるかに合理的です。

顧客、プロジェクト、契約、請求といった情報は、それぞれ独立したテーブルとして整理されるべきです。この分解作業は、AI に手伝わせることもできます。

このステップを終えると、データモデルは次のような形になります。

```Plain
Clients
name
region
industry
 → hasMany Projects

Projects
project_name
start_date
go_live
status
owner
notes
client_id (belongsTo Clients)
 → hasMany Contracts
 → hasMany Invoices

Contracts
contract_type
license_seats
project_id (belongsTo Projects)

Invoices
amount
invoice_date
payment_status
project_id (belongsTo Projects)
```

データを分割することで、すぐに効果が現れます。

* **画面が整理される**

顧客とプロジェクトは分かれて管理されますが、必要な場面では正しく紐づいた状態で扱えます

* **ワークフローが理解しやすくなる**

契約は契約、請求書は請求書として管理されるため、ひとつの変更が全体に影響することがなくなります

* **権限管理がしやすくなる**

営業は顧客情報だけを、経理は請求情報だけを確認できるようになります

💡 参考：[良いデータモデルの作成方法](https://www.nocobase.com/ja/blog/how-to-create-a-good-data-model)

NocoBase では、AI 従業員の Orin にテーブルやフィールドの作成を任せることができます。

やることはシンプルで、要件を伝えるだけです。

![Orin.png](https://static-docs.nocobase.com/e3f0627c-51a5-4d97-b603-71e15b4b693e-zfdfg0.png)

Orin がすぐに構造を生成してくれるので、あなたは内容を確認し、問題なければ確定するだけで済みます。

![Orin2.png](https://static-docs.nocobase.com/21348d0d-0382-42f8-ac6d-cd5ceb239900-1p3d7q.png)

ここまでで、4 つのテーブルとそれぞれのフィールドはすべて問題なく作成できました。

![four tables and their fields.png](https://static-docs.nocobase.com/d144b5dd-a594-48b9-8593-d30ceff703ba-ry05j0.png)

💡 データ構造やデータ管理の考え方をもう少し深く知りたい場合は、以下のチュートリアルやドキュメントも参考になります。

[Data Sources - NocoBase](https://www.nocobase.com/ja/highlights/data-source)

[Data Sources - NocoBase Documentation](https://v2.docs.nocobase.com/data-sources)

[Orin Data Modeling Expert - NocoBase Documentation](https://v2.docs.nocobase.com/ai-employees/built-in/data-modeling)

## ステップ2：データを見やすく表示する

データ構造を整理したら、次に行うのは、それらの情報を実際に使いやすい形で表示することです。

Excel では、スクロールやフィルター、列の固定といった限られた方法でしかデータを扱えませんでした。

![Excel2.png](https://static-docs.nocobase.com/03d998ab-aa10-40a4-b19b-a5d8f33d8e27-7v6c29.png)

NocoBase では、そうした制約はありません。

データの種類ごとに専用の画面を用意し、それぞれに最適な形式で表示できます。

設定はとても簡単です。右上から編集モードに入り、まずはいくつかのページを作成します。

各ページには、表示したいデータに合ったブロックを配置していきます。

![Displaying the Data.png](https://static-docs.nocobase.com/74569812-9d3a-4be7-a426-18bc1e2d1fd4-apardl.png)

まずは Clients テーブルから始めましょう。

顧客名、地域、業種といった情報を、一覧形式で表示します。

テーブルブロックを追加します。

![Clients.png](https://static-docs.nocobase.com/af29d457-8063-42e2-b965-3c74fdee2713-4nnpo6.png)

最初はまだデータが入っていません。

ブロック右上の「Actions」から「Import」を選び、元の Excel ファイルのデータを取り込みます。

![Actions.png](https://static-docs.nocobase.com/483344aa-5a15-443d-a2ee-9e578c3b799a-eyf8q4.png)

![Import.png](https://static-docs.nocobase.com/3f1f827b-41d0-4a22-92a7-3be812a52994-sy4c95.png)

インポートが完了すると、シンプルで読みやすい顧客一覧が完成します。

![readable client table.png](https://static-docs.nocobase.com/d99c63de-82b3-49c2-b58f-f9e78dbc5fb4-wwlvnu.png)

同じ手順で、他のテーブルについてもビューを作成していきます。

データの種類によって、最適な見せ方は異なります。

例えば、顧客名をクリックすると、その顧客に紐づくプロジェクトが表示される、といった設定も可能です。

![related projects.gif](https://static-docs.nocobase.com/%E8%81%94%E5%8A%A8%E6%95%B0%E6%8D%AE-gj1g6e.gif)

このようにビューを分けることで、次のような効果が得られます。

* 情報が整理され、混在しなくなる
* 各ページには、ユーザーが今見るべき情報だけが表示される
* Excel と比べて、圧倒的に読みやすい
* すべての項目を自由に並び替え、絞り込み、検索できる
* テーブル間のデータを自然に行き来しながら確認できる

データテーブルを選ぶだけで、NocoBase は整ったインタラクティブな画面を自動で生成します。

その上で、列の順序やフィルター条件、表示方法などを細かく調整することも可能です。

Excel のデータをシステムとして再構築すれば、データの可視化は驚くほどスムーズになります。

💡 データ表示に関する詳しい内容は、以下のチュートリアルやドキュメントをご参照ください。

[Blocks and Actions - NocoBase](https://www.nocobase.com/ja/highlights/block-action)

[UI Builder - Documentation](https://v2.docs.nocobase.com/interface-builder)

## ステップ3：業務フローを自動化する

データ構造が整理され、画面表示も整ったら、いよいよ Excel 最大の課題に取り組みます。

それは、業務フローがすべて手作業で回っていることです。

Excel では、たとえ簡単な業務であっても、次のような流れになりがちです。

* レコードを作成し、承認のためにメールやチャットで連絡する
* 承認結果を人の手で Excel に書き戻す
* 在庫や契約、財務データが関係すると、複数のシートを手動で更新し続ける

NocoBase では、この一連の流れを自動化できます。

* プロジェクトや契約を提出すると、自動的に承認ワークフローが開始される
* 承認が完了すると、関連するデータがすべて自動で更新される

これらの仕組みは、すべて NocoBase のワークフロー機能で構築できます。

![Workflow.png](https://static-docs.nocobase.com/23611649-9b43-42d3-b950-4afe930b54e3-xi7ax2.png)

💡 ワークフローの仕組みや具体的な設定方法については、以下のチュートリアルやドキュメントも参考にしてください。

[Workflow - NocoBase](https://www.nocobase.com/ja/highlights/workflow)

[Workflow - NocoBase Documentation](https://v2.docs.nocobase.com/workflow)

## ステップ4：権限を設計する

Excel の大きな弱点のひとつが、権限管理です。

Google Sheets でも、設定できる権限は最低限のものに限られています。

Excel で部署ごとに閲覧範囲を分けようとすると、同じ表を何パターンも複製して管理することになりがちです。

結果として、更新漏れや管理ミスが発生します。

NocoBase では、この問題をシンプルに解決できます。

役割ごとに、以下のような権限を細かく定義できます。

* アクセスできるレコードの範囲
* 表示できるフィールド
* 閲覧・作成・編集・削除といった操作権限
* 特定のワークフローに関与できるかどうか
* データのエクスポート可否

![Permissions.png](https://static-docs.nocobase.com/b9e40dcd-752c-457f-8aae-dc2b6972d5be-9ycwmu.png)

例えば、次のような設計が可能です。

* 営業チームは、自分が担当する顧客とプロジェクトのみを閲覧できる
* 経理チームは、すべてのプロジェクトの請求書や財務情報を確認できるが、プロジェクト内容は変更できない

**ユーザーがシステムを開いたときに見えるのは、自分に関係する情報だけです。**

不要な情報が表示されないため、情報漏洩のリスクを抑え、誤操作も防げます。

💡 権限設定について詳しく知りたい方は、以下のチュートリアルやドキュメントをご覧ください。

[Permissions - NocoBase](https://www.nocobase.com/ja/highlights/permissions)

[Users and Permissions - NocoBase Documentation](https://v2.docs.nocobase.com/users-permissions/user)

## まとめ

Excel を、協業や自動化、そして将来の拡張にも耐えられる業務システムへ進化させる。

一見すると大変そうに感じるかもしれません。

しかし、ここまで見てきた通り、必要な要素は意外とシンプルです。

* データ構造は AI の力を借りて整理できる
* 画面はコードを書かずに視覚的に構築できる
* ワークフローは人の手を介さず自動で回せる
* 権限管理によって、安全で壊れにくいシステムになる

数時間のセットアップだけで、NocoBase を使って自分たちの業務に合ったシステムを構築できます。

この記事で紹介した機能は、すべて NocoBase のデモで実際に試すことができます。 [https://nocobase.com/en/demo](https://nocobase.com/en/demo)

**関連読み物：**

* [GitHubで注目のオープンソースAI内部ツール5選](https://www.nocobase.com/ja/blog/top-5-open-source-ai-internal-tools-on-github)
* [8つの Google Sheets 最良代替ツール（コストと機能まとめ）](https://www.nocobase.com/ja/blog/the-8-best-google-sheets-alternatives-with-full-cost-and-capability-analysis)
* [PoC に最適なオープンソースのノーコード／ローコードツール 6 選](https://www.nocobase.com/ja/blog/6-open-source-no-low-code-tools-for-building-pocs)
* [開発者向けノーコード／ローコードの技術判断ガイド（2026）](https://www.nocobase.com/ja/blog/a-developers-technical-decision-guide-to-no-code-and-low-code)
* [6 大企業向けノーコード・ローコードプラットフォームのRBAC権限体系詳細比較](https://www.nocobase.com/ja/blog/6-in-depth-comparison-rbac-no-code-low-code-platforms)
* [GitHubで注目のオープンソースAIローコードツール14選](https://www.nocobase.com/ja/blog/14-ai-low-code-platforms-github)
* [GitHubで人気のオープンソースノーコードAIツール11選](https://www.nocobase.com/ja/blog/top-11-github-open-source-no-code-ai-tools)
* [GitHub で Star 数トップ18 のオープンソース AI Agent プロジェクト](https://www.nocobase.com/ja/blog/github-open-source-ai-agent-projects)
