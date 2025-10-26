<iframe width="800" height="436" src="https://www.youtube.com/embed/H9sJOYpzGEM?si=LhDcMttYkvTcZIko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

今や、あなたは**NocoBase**に非常に精通していることでしょう。

この章では、特定のシナリオを実装します: **会議室管理モジュール**。

このモジュールには、**会議室予約**や**通知**などの機能が含まれています。このモジュールをゼロから段階的に構築し、徐々に複雑さを加えていきます。まず、このモジュールの基盤となるデータベーススキーマを設計しましょう。

---

### 12.1 データベーススキーマの設計

データベーススキーマは、会議管理モジュールの基盤を提供します。このセクションでは、**会議室**コレクションと**予約**コレクションに焦点を当て、ユーザーとの[多対多](https://docs-jp.nocobase.com/handbook/data-modeling/collection-fields/associations/m2m)接続のような関係を紹介します。

![](https://static-docs.nocobase.com/Solution/CRuKbVrnroSgGdxaVrBcvzSMnHd.png)

#### 12.1.1 会議室コレクション

会議室コレクションは、すべての会議室に関する基本情報を保存します。これには、名前、場所、収容人数、設備などが含まれます。

##### コレクション構造の例

```json
会議室（Rooms）
    ID（主キー）
    名前（単行テキスト）
    場所（長文テキスト）
    収容人数（整数）
    設備（長文テキスト）
```

#### 12.1.2 予約コレクション

予約コレクションは、すべての会議室の予約を記録します。これには、部屋、参加者、時間、会議議題などの詳細が含まれます。

##### コレクション構造の例

```json
予約（Bookings）
    ID（整数、ユニーク主キー）
    部屋（多対一、外部キーroom_idが部屋IDにリンク）
    ユーザー（多対多、ユーザーIDにリンク）
    開始時間（日時（タイムゾーン付き））
    終了時間（日時（タイムゾーン付き））
    タイトル（単行テキスト）
    説明（Markdown）
```

##### [多対多](https://docs-jp.nocobase.com/handbook/data-modeling/collection-fields/associations/m2m)の関係

予約コレクションは**「多対多の関係」**を持ちます: ユーザーは複数の会議に出席でき、会議には複数の参加者がいる場合があります。管理のために、**booking_users**という名前の中間コレクションが作成されます。

![](https://static-docs.nocobase.com/Solution/202411170441451731789705.png)

---

### 12.2 会議管理モジュールの構築

データベーススキーマが準備できたので、2つのコレクションを実装し、「会議管理」モジュールを段階的に構築しましょう。

#### 12.2.1 [テーブルブロック](https://docs-jp.nocobase.com/handbook/ui/blocks/data-blocks/table)の作成

まず、「会議管理」モジュールをページに追加し、**会議室テーブルブロック**と**予約フォーム[テーブルブロック](https://docs-jp.nocobase.com/handbook/ui/blocks/data-blocks/table)**を作成します。その後、予約フォーム用に[カレンダーブロック](https://docs-jp.nocobase.com/handbook/calendar)を作成し、カレンダーのデフォルトビューを「日」に設定します。

![](https://static-docs.nocobase.com/Solution/202411140500171731531617.png)

##### 会議室フォームブロックの関連付け設定

会議室フォームブロックを他の2つのブロックと関連付けて、特定の会議室に対する予約を自動的にフィルターできるようにします。次に、フィルター、追加、削除、チェック、および変更機能を試して、モジュールの基本的な相互作用をテストします。

> 💡**NocoBaseブロック接続（おすすめ！！）**
>
> 前述のフィルターブロックに加え、テーブルブロックも他のブロックと接続することで、クリック操作によるフィルター機能を実現できます。
>
> 下の図のように、会議室テーブルの設定で、他の2つの予約テーブルのブロック（予約テーブル - テーブルブロック、予約テーブル - カレンダーブロック）を接続しました。

![](https://static-docs.nocobase.com/Solution/202411170506021731791162.png)

> 接続が完了すると、会議室テーブルをクリックするだけで、他の2つのテーブルも連動してフィルターされます！再度選択項目をクリックすると、選択が解除されます。
>
> ![](https://static-docs.nocobase.com/2024120812346-block-connection-en2.gif)

---

### 12.3 会議室の占有状況の検出

ページが構成されたら、重要な機能を追加する必要があります: 会議室の占有状況を検出すること。この機能は、会議の作成または更新時に、指定された時間に目標の会議室が占有されているかどうかを確認し、予約の競合を回避します。

![](https://static-docs.nocobase.com/project-management-meetings-er-en.drawio.svg)

#### 12.3.1 「事前操作イベント」[ワークフロー](https://docs-jp.nocobase.com/handbook/workflow)の設定

予定された時間に検出を行うために、特別なワークフロー - [「事前アクションイベント」](https://docs-jp.nocobase.com/handbook/workflow-request-interceptor)を使用します:

- [**事前アクションイベント**](https://docs-jp.nocobase.com/handbook/workflow-request-interceptor)（商用プラグイン）：データを追加、削除、変更する前に一連の操作を実行し、いつでも一時停止して事前にインターセプトできるため、私たちの日常のコード開発プロセスに非常に近い方法です！

![](https://static-docs.nocobase.com/Solution/202411170548131731793693.png)

#### 12.3.2 ノードの設定

占有状況を検出するワークフローでは、次のタイプのノードが必要です:

- [**計算ノード**](https://docs-jp.nocobase.com/handbook/workflow/nodes/calculation)（修正、追加を処理するためのデータ変換ロジック）
- [**SQL操作**](https://docs-jp.nocobase.com/handbook/workflow/nodes/sql)（SQLクエリを実行するため）
- [**JSONクエリ**](https://docs-jp.nocobase.com/handbook/workflow/nodes/json-query)（JSONデータを解析する商用プラグイン）
- [**応答メッセージ**](https://docs-jp.nocobase.com/handbook/workflow/nodes/response-message)（商用プラグイン、アラートメッセージを返すために使用）

---

#### 12.3.3 予約コレクションのバインディングとトリガーの設定

今、予約コレクションをバインディングし、トリガーモードとして「グローバルモード」を選択し、操作タイプを「レコードの作成」と「レコードの更新」に設定します。

![](https://static-docs.nocobase.com/Solution/202411170549121731793752.png)

---

### 12.4 [計算ノード](https://docs-jp.nocobase.com/handbook/workflow/nodes/calculation)の設定

#### 12.4.1 「空白IDを-1に変換する」オペレーターノードの作成

まず、空白のIDを-1に変換するオペレーターノードを作成します。オペレーターノードは、私たちが望む方法で変数を変換でき、次の3つの操作形式を提供します:

- **Math.js**（[Math.js](https://mathjs.org/)を参照）
- **Formula.js**（[Formula.js](https://formulajs.info/functions/)を参照）
- **文字列テンプレート**（データスプライシングに使用）

ここでは、数値判断のために**Formula.js**を使用します:

```html
IF(NUMBERVALUE([トリガー変数/パラメータ/送信された値/ID], '', '.'), [トリガー変数/パラメータ/送信された値/ID], -1)
```

![](https://static-docs.nocobase.com/Solution/202411170551111731793871.png)

---

### 12.5 [SQL操作ノード](https://docs-jp.nocobase.com/handbook/workflow/nodes/sql)の作成

次に、SQL操作ノードを作成し、クエリ文を実行して利用可能な会議室を確認します:

#### 12.5.1 利用可能な会議室のSQLクエリ

```sql
-- 利用可能な会議室をすべてクエリします。
SELECT r.id, r.name
FROM rooms r
LEFT JOIN booking b ON r.id = b.room_id
  AND b.id <> {{$jobsMapByNodeKey.3a0lsms6tgg}}   -- 現在の予約を除外
  AND b.start_time < '{{$context.params.values.end_time}}' -- 開始時間がクエリ終了時間より前
  AND b.end_time > '{{$context.params.values.start_time}}' -- 終了時間がクエリ開始時間より後
WHERE b.id IS NULL;
```

> SQLノート: 変数はSQL文に直接置き換わるため、変数を注意深く確認してSQLインジェクションを避けてください。適切な場所にシングルクォートを追加します。

変数はそれぞれ次の通りです:

{{$jobsMapByNodeKey.3a0lsms6tgg}} 前のノードの結果を表します、[ノードデータ/空白IDを-1に変換]

{{$context.params.values.end_time}} は[トリガー変数/パラメータ/送信された値/終了時間]を表します

{{$context.params.values.start_time}} は[トリガー変数/パラメータ/送信された値/開始時間]を表します。

#### 12.5.2 SQLのテスト

私たちの目標は、目標のタイムスタンプと競合しないすべての部屋をクエリすることです。

その間に、「テスト実行」をクリックして、変数の値を変更し、SQLをデバッグできます。

![](https://static-docs.nocobase.com/Solution/202411170554241731794064.png)

![](https://static-docs.nocobase.com/Solution/202411170556061731794166.png)

---

### 12.6 [JSON解析](https://docs-jp.nocobase.com/handbook/workflow/nodes/json-query)

#### 12.6.1 [JSONクエリノード](https://docs-jp.nocobase.com/handbook/workflow/nodes/json-query)の設定

前のステップのテストを通じて、結果が次の形式であることが観察されます。この時点で、[**JSONクエリノードプラグイン**](https://docs-jp.nocobase.com/handbook/workflow-json-query)を有効にする必要があります:

```json
[
  {
    "id": 2,
    "name": "会議室2"
  },
  {
    "id": 1, "name": "会議室1" },
  {
    "name": "会議室1"
  }
]
```

> JSONは3つの方法で解析されます:
> [JMESPath](https://jmespath.org/)
> [JSON Path Plus](https://jsonpath-plus.github.io/JSONPath/docs/ts/)
> [JSONata](https://jsonata.org/)

ここでは、それらのいずれかを選択します。例えば、[JMESPath](https://jmespath.org/)形式を選択し、すべての利用可能な会議室の名前のリストをフィルタリングする必要があるので、表現は次のように記入されます:

```sql
[].name
```

属性マッピング設定はオブジェクトのリストに対して行われ、現時点では必要ないため、省略することができます。

![](https://static-docs.nocobase.com/Solution/202411170600051731794405.png)

### 12.7 [条件判断](https://docs-jp.nocobase.com/handbook/workflow/nodes/condition)

条件判断ノードを設定して、現在の会議室が利用可能な会議室のリストにあるかどうかを判断します。**はい**または**いいえ**の判断結果に応じて、応答メッセージをそれぞれ設定します:

**条件設定**: 条件には「基本」操作を使用します:

```json
[ノード結果/会議室名を分析] は [トリガー変数/パラメータ/送信された値/room/Name]を含む
```

![](https://static-docs.nocobase.com/Solution/202411170601501731794510.png)

#### 12.7.1 はい: 成功メッセージの設定

[**ワークフロー: 応答メッセージプラグイン**](https://docs-jp.nocobase.com/handbook/workflow-response-message)を有効にします:

```json
[トリガー変数/パラメータ/送信された値/room/Name] は利用可能です。予約成功！
```

![](https://static-docs.nocobase.com/Solution/202411170603551731794635.png)

#### 12.7.2 いいえ: 失敗メッセージの設定

会議室が利用できない場合:

```json
リクエストされた会議室は利用できません。利用可能な会議室: [ノードデータ/会議室名を分析]
```

注意: 失敗時には**ワークフローを終了**ノードが手動でワークフローを終了するように設定されていることを確認してください。

![](https://static-docs.nocobase.com/Solution/202411170606321731794792.png)

---

### 12.8 機能テストとデバッグ詳細

これで、会議管理システムの**最終テストフェーズ**に移ります。このフェーズは、ワークフローが競合する会議室の予約を正しく検出し、阻止できることを確認することを目的としています。

#### 12.8.1 競合する時間での予約追加

まず、既存の予約時間と競合する会議を追加して、システムが操作をブロックし、エラーメッセージをポップアップするかどうかを確認します。

- **競合する予約期間の設定**

「会議室1」で次の時間に新しい予約を追加します:

`2024-11-14 00:00:00 - 2024-11-14 23:00:00`

この時間範囲は全日をカバーし、既存の予約と意図的に重複しています。

「会議室1」における既存の予約

1. `2024-11-14 09:00:00 - 2024-11-14 12:00:00`
2. `2024-11-14 14:00:00 - 2024-11-14 16:30:00`

これらの期間は、新しい予約リクエストと重複しています。

（`2024-11-14 00:00:00 - 2024-11-14 23:00:00`）

重複しています。

したがって、論理的な判断に基づいて、システムは時間の競合を検出し、この予約をブロックする必要があります。

- 予約を送信してフィードバックを検証

**送信**ボタンをクリックすると、システムがワークフロー内の検出プロセスを実行します:

**成功したフィードバック:** 送信後、システムが競合の警告をポップアップし、検出ロジックが正常に機能していることを示します。ページフィードバックが成功し、この予約を完了できないことを示しています。

![](https://static-docs.nocobase.com/Solution/202411170616271731795387.png)

---

#### 12.8.2 競合のない予約の追加

次に、競合のない予約をテストします〜

会議の時間が重複しない場合、会議室を正常に予約できることを確認します！

- 競合のない予約の設定

競合のない時間範囲を選択します。例えば

`2024-11-10 16:00:00 - 2024-11-10 17:00:00`。

この時間範囲は既存の予約と重複しないため、会議室予約の要件を満たします。

- 競合のない予約を送信

**送信**ボタンをクリックすると、システムが再びワークフローの検出ロジックを実行します:

**一緒に確認しましょう:** 送信に成功しました！システムは「予約成功」のメッセージを表示します。このメッセージは、競合のない予約でも予約機能が正常に動作していることを示しています。

システムは「予約成功」のメッセージを表示します。

![](https://static-docs.nocobase.com/Solution/202411140621101731536470.png)

#### 12.8.3 既存の予約時間の変更

新しい予約を追加するだけでなく、既存の予約の時間を変更することでもテストできます。

たとえば、既存の会議時間を競合しない期間に変更し、更新を送信します。

これはあなたたちにお任せします。

---

### 12.9 ダッシュボードの最適化と個人スケジュールパネル

機能テストが完了したら、ユーザーエクスペリエンスを向上させるためにダッシュボードを最適化します。

#### 12.9.1 ダッシュボードレイアウトの調整

ユーザーの操作習慣に基づいてダッシュボードの内容を再整理し、データの視認性を高めます。**個人スケジュールパネル**を追加してユーザーエクスペリエンスを向上させます:

1. **「個人スケジュール」セクションの作成**
   各ユーザーの個別の会議スケジュールを表示するカレンダーまたはリストブロックを追加します。
2. **メンバーのデフォルト設定**
   デフォルトのメンバー値を現在のユーザーに設定します。これにより、ユーザーがダッシュボードにアクセスすると、関連する会議がデフォルトで表示されます。

会議管理モジュールにおけるユーザーエクスペリエンスをさらに最適化します。

この設定後、ダッシュボードはより直感的で機能豊富になり、ユーザーが会議をより良くナビゲートし、管理できるようになります。

![](https://static-docs.nocobase.com/Solution/202411140634111731537251.png)
![](https://static-docs.nocobase.com/Solution/202411140635081731537308.png)

これらのステップを通じて、私たちは会議室予約管理モジュールの主要機能を成功裏に実装し、最適化しました！NocoBaseのモジュール式システム構築能力をマスターする過程を楽しんでください。

---

引き続き探求し、無限の可能性を創造してください！道中で問題に遭遇した場合は、[NocoBaseのドキュメント](https://docs-jp.nocobase.com/)を確認するか、[NocoBaseコミュニティ](https://forum.nocobase.com/)に参加して議論やサポートを受けることを忘れないでください。
