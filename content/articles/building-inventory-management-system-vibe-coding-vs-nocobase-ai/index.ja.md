[Reddit](https://www.reddit.com/r/InventoryManagement/comments/1s8i5lq/quick_help_to_create_a_warehouse_management/) の r/InventoryManagement で、あるユーザーがレストラン向けの在庫管理アプリを AI で作ろうとしていました。

![reddit1-wcwqye.png](https://static-docs.nocobase.com/reddit1-wcwqye.png)

最初は、商品登録、入庫、出庫だけのシンプルな要件に見えます。しかし実際に構築を始めると、異なる在庫単位をどう扱うのか、入出庫後に数量をどう変化させるのかなど、数行で説明できる要件でも、システムに落とし込む段階では想像以上に多くのデータやルールを扱う必要があります。コメント欄でも、在庫管理は見た目以上に複雑だという指摘がありました。

![reddit2-ztg7en.png](https://static-docs.nocobase.com/reddit2-ztg7en.png)

これは、AI で業務システムを構築するときによく起きる問題でもあります。画面をいくつか生成するだけなら以前よりずっと速くなりましたが、その裏側にあるデータ関係、在庫変動、権限、ワークフロー、そして要件変更後もシステムを保守し続けられるかどうかは、改めて確認する必要があります。

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---

同じ在庫管理要件を使った場合、**AI にゼロからアプリを生成させる場合と、AI に NocoBase 上で構築させる場合では、最終的にどのような違いが生まれるのでしょうか。**

今回は 2 つのシステムをそれぞれ構築しました。

- 空のプロジェクトから始め、AI に独立した在庫管理アプリを直接生成させる
- NocoBase のデータモデル、権限、ワークフローを使って AI に同じシステムを構築させる

**以下では、購買、入庫、在庫履歴、棚卸し、その後の要件変更という観点から、データ関係、業務ルール、権限、保守性の違いを比較します。**

## 1. 同じ Prompt から何が生成されるか

AI に渡した要件には、比較的まとまった在庫業務が含まれています。

> 自動車部品販売会社向けの在庫管理システムを構築し、商品、カテゴリ、仕入先、発注書、在庫を一元管理する。入庫、出庫、破損、在庫調整を記録し、在庫変動履歴を確認できるようにする。欠品、低在庫、過剰在庫、長期間出庫のない商品を識別し、棚卸し、差異確認、在庫調整をサポートする。さらに、管理ワークスペースと相互に関連付けられたデモデータを用意する。

主な要件は 5 つに分けられます。

**商品と仕入先 → 購買 → 在庫変動 → 在庫リスク → 棚卸しと調整**

1 つの発注書には複数の商品が含まれることがあります。商品を入庫した後は在庫数を更新すると同時に、その入庫履歴も保存する必要があります。棚卸しで数量差異が見つかった場合も、単に在庫数を書き換えるのではなく、差異、調整理由、確認結果を残さなければなりません。

**完全な Prompt は以下です。以降の 2 つのシステムは、どちらも同じ要件から生成しています。**

```Plain
私は自動車部品販売会社の在庫責任者です。現在は主に表計算ソフトで商品、仕入先、購買、在庫を管理しています。商品数が増えるにつれて、在庫数量が正確でない、欠品の発見が遅れる、一部の商品が長期間滞留する、棚卸し差異を追跡しにくいといった問題が頻繁に発生しています。

商品、カテゴリ、仕入先、発注書、在庫データを一元管理できる在庫管理システムを構築したいです。入庫、出庫、破損、在庫調整をすべて記録し、いつでも現在庫を確認でき、在庫数が変化した理由も把握できるようにしてください。

欠品、低在庫、過剰在庫、長期間出庫のない商品を自動的に識別できるようにしたいです。また、最近の販売状況や在庫状況に基づいて補充提案を出し、購買担当者が何を、どれだけ、どの仕入先から購入すべきか判断できるようにしてください。

システムには棚卸し機能も必要です。棚卸し担当者が実在庫数を入力すると、システムが自動的に差異を計算し、確認完了後に差異分を在庫へ反映し、その履歴を完全に保存してください。

管理者は、在庫総量、在庫金額、最近の入出庫、在庫リスク、未処理事項を直感的なワークスペースで確認できるようにしてください。全体の設計は分かりやすく使いやすくし、在庫担当者が日常業務を処理しやすく、管理者も問題をすばやく把握できるようにしてください。

以上の実際の業務要件に基づいて、適切な機能構成、データ関係、ページ操作を設計し、完全な在庫管理プロセスをそのままデモできるよう、相互に関連付けられたサンプルデータも用意してください。
```

### 1 回目の生成結果

このシステムを、Vibe Coding と NocoBase + AI の 2 通りで構築しました。

画面だけを見ると、どちらも商品、購買、入出庫、棚卸し、データ概要といった主要機能をカバーしています。しかし実際に操作してみると、完成度にはかなり明確な差がありました。

今回の生成結果では、**NocoBase + AI は実際に操作できるデータテーブル、ページ、基本的な業務関係まで生成できていました**。商品、仕入先、発注書などのデータを正常に入力・関連付けでき、1 回目の生成後でも実運用にかなり近い状態でした。その後は、実際の業務に合わせてルールや操作の細部を調整していくことが中心になります。

![NocoBase+AI data tables 1en-7j1slk.png](https://static-docs.nocobase.com/NocoBase%2BAI%E5%B7%A5%E4%BD%9C%E5%8F%B01en-7j1slk.png)

![NocoBase+AI data tables en-grfhx4.png](https://static-docs.nocobase.com/NocoBase%2BAI%E5%B7%A5%E4%BD%9C%E5%8F%B02en-grfhx4.png)

一方、**Vibe Coding 版は現時点ではフロントエンドのプロトタイプに近い状態でした**。商品、購買、入出庫、棚卸しなどの画面は表示されていますが、データ同士はまだ実際には連動しておらず、一部のボタンや操作も業務処理を完了できません。同じ利用状態まで持っていくには、データ保存、API、業務ロジック、権限などをさらに追加する必要があります。

![Vibe Coding data tables en-m1oiop.png](https://static-docs.nocobase.com/Vibe%20Coding%E5%B7%A5%E4%BD%9C%E5%8F%B0en-m1oiop.png)

この違いは、2 つの方法の出発点に関係しています。

Vibe Coding は空のプロジェクトから始まり、データベース、API、ページ、業務ロジックを AI が現在の要件に基づいて順に生成していく必要があります。

NocoBase + AI は、既存のアプリケーション基盤上で構築します。AI が商品、発注書、在庫記録を作成するとき、データ関係、ページ、**権限、ワークフロー**といった既存機能を直接利用できます。

![NocoBase+AI permissions en-2t23w8.png](https://static-docs.nocobase.com/NocoBase%2BAI%E7%94%A8%E6%88%B7en-2t23w8.png)

## 2. 2 つの在庫管理システムを実際の業務で比較する

今回は、在庫管理でよくある次の業務フローを使って比較しました。

**商品と仕入先を登録 → 発注書を作成 → 商品を入庫 → 在庫履歴を生成 → 低在庫を検出 → 棚卸しを開始 → 差異を確認 → 在庫を調整**

### 商品と発注書から始める

まずは最も基本的なデータとして、商品、仕入先、発注書を作成します。

会社が仕入先 A から 3 種類の自動車部品を仕入れるとします。1 つの発注書には次の商品が含まれます。

- ブレーキパッド 100 セット
- エアフィルター 200 個
- スパークプラグ 300 個

この発注には、少なくとも仕入先、発注書、発注明細、商品という 4 種類のレコードが関係します。1 つの発注書には複数の明細があり、それぞれの商品、数量、単価を記録します。

**NocoBase + AI**

![NocoBase+AI Orders 1en-xvvf5i.png](https://static-docs.nocobase.com/NocoBase%2BAI%E4%BE%9B%E5%BA%94%E5%95%861en-xvvf5i.png)

![NocoBase+AI Orders 2en-t7okhv.png](https://static-docs.nocobase.com/NocoBase%2BAI%E4%BE%9B%E5%BA%94%E5%95%862en-t7okhv.png)

**Vibe Coding**

![Vibe Coding Orders en-9095m6.png](https://static-docs.nocobase.com/Vibe%20Coding%E4%BE%9B%E5%BA%94%E5%95%86en-9095m6.png)

在庫管理システムを確認するとき、「仕入先ページ」と「発注書ページ」があるだけでは十分ではありません。

**これらのレコードを相互に参照し、その後の入庫処理でも継続して利用できるかどうかが重要です。**

例えば、仕入先詳細から関連商品や発注履歴を確認できるか。発注書を開いたときに商品明細をすべて確認できるか。後から入庫するときにも、その発注書のデータを参照できるかを確認します。

**NocoBase + AI**

![NocoBase+AI products 1en-icuzi7.png](https://static-docs.nocobase.com/NocoBase%2BAI%E5%95%86%E5%93%811en-icuzi7.png)

![NocoBase+AI products 2en-ddthi5.png](https://static-docs.nocobase.com/NocoBase%2BAI%E5%95%86%E5%93%812en-ddthi5.png)

**Vibe Coding**

![Vibe Coding products en-3a614q.png](https://static-docs.nocobase.com/Vibe%20Coding%E5%95%86%E5%93%81en-3a614q.png)

現在の生成結果を見る限り、どちらのシステムにもこれらの業務オブジェクトに対応するページがあります。NocoBase + AI では、これらの業務オブジェクトが統一されたデータモデル上に構築されています。Vibe Coding では、生成されたデータベース構造とプログラムロジックによって、それぞれの関係を維持する必要があります。

![NocoBase+AI data 1en-06qwhj.png](https://static-docs.nocobase.com/NocoBase%2BAI%E6%95%B0%E6%8D%AE%E6%BA%901en-06qwhj.png)

![NocoBase+AI data 2en-v44cvh.png](https://static-docs.nocobase.com/NocoBase%2BAI%E6%95%B0%E6%8D%AE%E6%BA%902en-v44cvh.png)

### 仕入れ入庫と在庫履歴

発注書を作成した後は、入庫処理を行います。

ブレーキパッドの元の在庫が 20 セットで、今回 100 セットを入庫するとします。入庫後の現在庫は 120 セットになり、新しい入庫履歴を作成して対応する発注書に関連付ける必要があります。

この履歴には、入庫日時や操作担当者などの情報も保存します。その後、出庫、破損、返品、棚卸し調整が発生した場合も、毎回新しい在庫履歴を作成する必要があります。

ここでは、**在庫が正しく更新されるか、対応する履歴が残るか、その履歴から元の発注書まで追跡できるか**の 3 点を重点的に確認します。

**NocoBase + AI**

![NocoBase+AI inventory 1en-zhvk3s.png](https://static-docs.nocobase.com/NocoBase%2BAI%E5%BA%93%E5%AD%98%E6%B5%81%E6%B0%B41en-zhvk3s.png)

![NocoBase+AI inventory 2en-ie601d.png](https://static-docs.nocobase.com/NocoBase%2BAI%E5%BA%93%E5%AD%98%E6%B5%81%E6%B0%B42en-ie601d.png)

**Vibe Coding**

![Vibe Coding inventory en-tme7b7.png](https://static-docs.nocobase.com/Vibe%20Coding%E5%87%BA%E5%85%A5%E5%BA%93en-tme7b7.png)

**在庫管理システムでは、最終的な在庫数だけを保存するのでは不十分です。入庫、出庫、破損、調整ごとに変動履歴を残しておくことで、後から現在庫の根拠を追跡できます。**

### 低在庫と補充判断

在庫が変動した後は、安全在庫を下回っている商品を管理者がすぐに把握できる必要があります。

例えば、ある商品の現在庫が 20、安全在庫が 50 の場合、その商品は低在庫として表示されるべきです。安全在庫を 30 に変更した場合は、リスク判定も連動して変わる必要があります。

最初に生成した 2 つのシステムには、どちらも在庫リスクや類似の管理ページが含まれています。

ただし、ここでも重要なのはデータの出所です。表示される結果が、前段の在庫データから直接計算されているかどうかを確認する必要があります。

さらに補充提案まで生成する場合は、現在庫、安全在庫、目標在庫、場合によっては過去の出庫状況まで使って推奨数量を計算し、対応する仕入先情報も取得する必要があります。

**NocoBase + AI**

![NocoBase+AI Inventory risk 1en-w09yw1.png](https://static-docs.nocobase.com/NocoBase%2BAI%E4%BD%8E%E5%BA%93%E5%AD%981en-w09yw1.png)

![NocoBase+AI Inventory risk 2en-8s89lt.png](https://static-docs.nocobase.com/NocoBase%2BAI%E4%BD%8E%E5%BA%93%E5%AD%982en-8s89lt.png)

![NocoBase+AI Inventory risk 3en-nfg8r2.png](https://static-docs.nocobase.com/NocoBase%2BAI%E4%BD%8E%E5%BA%93%E5%AD%983en-nfg8r2.png)

**在庫リスクは独立したデータではありません。現在庫、安全在庫、商品、仕入先など、既存データから導き出される結果です。**

### 棚卸し差異、確認、在庫調整

システム上では在庫が 100 個になっている部品を、倉庫で実際に数えたところ 96 個しかなかったとします。

棚卸し担当者はまず実数を入力し、システムが差異 -4 を計算します。ただし、この時点で在庫をすぐ 96 に変更してはいけません。

4 個不足している理由を先に確認する必要があります。未記録の出庫、破損や紛失、入力ミスなど、さまざまな原因が考えられます。棚卸し担当者が数量を入力しただけで元の在庫を直接上書きできると、後からこの変化がどのように発生したのか追跡しにくくなります。

そこで、より具体的なルールを追加しました。

> 棚卸し担当者は実数と差異理由を入力できるが、確認担当者が承認した後でなければ、正式な在庫調整は実行できない。

1 件の棚卸し差異は次の流れで処理します。

**実数を入力 → 差異 -4 を計算 → 確認に提出 → 調整を承認 → 在庫を 96 に変更 → 調整履歴を保存**

ここまで来ると、確認すべき項目も一気に増えます。

1. 差異が自動計算され、正しいステータスへ進むか
2. 確認権限のないユーザーが在庫を調整できないか
3. 確認後に在庫更新と在庫履歴の生成が同時に行われるか
4. 担当者、日時、理由が記録されるか
5. 過去の棚卸し結果が残るか

この種の要件は、「棚卸しページを 1 つ生成する」だけでは解決しにくくなります。

Vibe Coding 版では、棚卸しステータス、確認権限、在庫更新、調整履歴の間をつなぐロジックを追加で実装する必要があります。例えば確認が承認された後、プログラム側で在庫を変更すると同時に調整履歴も作成し、確認権限を持たないアカウントではこの操作を実行できないようにする必要があります。

![Vibe Coding inventory updates en-hy3vfo.png](https://static-docs.nocobase.com/Vibe%20Coding%E5%BA%93%E5%AD%98%E7%9B%98%E7%82%B9en-hy3vfo.png)

NocoBase + AI 版では、既存のデータ関係、ロール権限、ワークフローを使ってこの一連のルールを処理します。棚卸し記録を提出すると「確認待ち」になり、確認担当者が承認した後で在庫を更新し、対応する調整履歴を保存します。

![NocoBase+AI inventory-count record 1en-tn1rux.png](https://static-docs.nocobase.com/NocoBase%2BAI%E7%9B%98%E7%82%B9%E5%8D%951en-tn1rux.png)

![NocoBase+AI inventory-count record 2en-qnvizn.png](https://static-docs.nocobase.com/NocoBase%2BAI%E7%9B%98%E7%82%B9%E5%8D%952en-qnvizn.png)

## 3. Vibe Coding と NocoBase + AI、どちらを選ぶべきか

購買、入庫、在庫リスク、棚卸しなどの機能を比較すると、2 つの構築方法の違いがより直感的に見えてきます。

### NocoBase + AI が向いているケース

在庫、購買、CRM、IT 管理などの社内業務システムを構築する場合は、NocoBase + AI がより適しています。

主な利点は 4 つあります。

**1. AI が生成するのはページだけではない**

AI が作成した商品、仕入先、発注書、在庫履歴、棚卸し、権限、ワークフローは、そのまま NocoBase 上で継続して利用・変更できる業務オブジェクトになります。

**2. 共通のバックオフィス機能を繰り返し開発する必要がない**

データ関係、権限、フォーム、ワークフローなどの機能は NocoBase がすでに提供しています。チームは、在庫をどう計算するか、誰がどの倉庫を見られるか、在庫移動をどう処理するかといった具体的な業務ルールに多くの時間を使えます。

**3. 後から変更するときのコストを抑えやすい**

フィールド追加、ページ調整、権限変更、ワークフロー追加など、多くの変更を既存のデータモデル上で設定できます。毎回フロントエンド、API、データベースコードを変更する必要はありません。

**4. AI が変更する範囲を把握しやすい**

AI が主に操作する対象は、データモデル、フィールド、ページ、権限、ワークフローなど明確なオブジェクトです。システムが複雑になっても、1 回の変更がどこに影響したのか確認しやすくなります。

### Vibe Coding が向いているケース

Vibe Coding の主な強みは、開発スピードと自由度です。次のようなニーズを重視する場合は、Vibe Coding が適しています。

**1. プロジェクトがまだ初期検証段階にある。** 現時点の目標が Demo、MVP、一時的なプロトタイプをすばやく作ることで、複雑なデータ関係、権限、長期保守まで考える必要がない場合です。

**2. すでに既存のコードプロジェクトがあり、AI にその技術スタック上で開発を続けてもらいたい。** 例えば、チーム独自のフロントエンドとバックエンドがすでにあり、AI を使ってページ、API、業務ロジックを追加したい場合です。

### AI に NocoBase 上で構築させるには？

上記の NocoBase + AI の方法を再現したい場合は、まず Coding Agent を NocoBase の AI Builder 環境に接続し、その後で具体的な業務要件を渡します。初期化時には、次の指示をそのまま利用できます。

```Plain
NocoBase の公式ドキュメントに従って、NocoBase CLI をインストールし、初期化まで完了してください：
https://docs.nocobase.com/ja/ai-builder

以降のアプリは必ず NocoBase AI Builder と NocoBase Skills を使って構築し、独立した React、Vue、Next.js プロジェクトは作成しないでください。
```

初期化が完了したら、前述の在庫管理要件を送信し、NocoBase のデータモデル、ページ、権限、ワークフローを優先して利用するよう AI に指示します。これにより、その後の生成や変更も同じアプリ構造の中で行われます。

**この記事が役に立ったら、AI を使った業務システム構築に関心のある方にもぜひ共有してください。**

NocoBase + AI で構築したシステムを実際に見てみたい場合は、オンライン Demo を申し込めます。自分で試したい場合は、AI Builder ドキュメントから始められます。

- **NocoBase + AI Demo を体験：** [オンライン Demo を申し込む](https://demo.nocobase.com/new)
- **自分で構築する：** [AI Builder ドキュメントを見る](https://docs.nocobase.com/ja/ai-builder)


**関連記事**：

* **[AI と NocoBase で 2 時間以内に企業 IT 運用システムを構築する方法](https://www.nocobase.com/ja/blog/build-it-operations-system-with-ai-nocobase)**
* **[NocoBase vs Baserow：柔軟なデータベースとエンタープライズ業務システム](https://www.nocobase.com/ja/blog/nocobase-vs-baserow)**
* **[AI と NocoBase で本番運用できる CRM を構築する方法](https://www.nocobase.com/ja/blog/build-production-ready-crm-with-ai-and-nocobase)**
* **[企業向け IT 資産管理システム構築ガイド：要件整理から導入まで](https://www.nocobase.com/ja/blog/enterprise-it-asset-management-system-guide)**
* **[プロジェクト管理と業務フローに使える Smartsheet 代替ツール 7 選](https://www.nocobase.com/ja/blog/best-smartsheet-alternatives)**
* **[複雑なリレーションモデルに適したオープンソース AI ノーコードツール 5 選](https://www.nocobase.com/ja/blog/open-source-ai-no-code-tools-complex-relational-models)**
* **[AI ノーコードとは？AI 時代のノーコードプラットフォーム実用ガイド](https://www.nocobase.com/ja/blog/what-is-ai-no-code)**
* **[GitHub で注目したい 9 つのオープンソース AI ノーコードツール](https://www.nocobase.com/ja/blog/open-source-ai-no-code-tools-github-9)**
* **[GitHub で注目したい14のオープンソース AI Agent ツール](https://www.nocobase.com/ja/blog/github-open-source-ai-agent-tools-16)**
* **[GitHub Stars が多い 8 つのオープンソース AI Assistant ツール](https://www.nocobase.com/ja/blog/top-open-source-ai-assistant-tools-github-stars)**
* **[6 つの WorkBuddy と組み合わせて使いやすいオープンソースツール](https://www.nocobase.com/ja/blog/workbuddy-open-source-tools)**
* **[GitHub Stars 上位のオープンソース AI ツール 6 選](https://www.nocobase.com/ja/blog/6-github-top-open-source-ai-tools-for-ai-agents)**
