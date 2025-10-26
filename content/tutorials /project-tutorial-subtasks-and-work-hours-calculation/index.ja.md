<iframe width="800" height="436" src="https://www.youtube.com/embed/nR-KTIpqEVQ?si=gOO4ePusb4Zz-Iwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

こんにちは、チーム！新しい章にやっと到達しました！私たちのビジネスが拡大するにつれて、タスクはますます多く、複雑になってきました。単純なタスク管理ではもはや十分ではないことに気づきました。タスクを複数のレベルに分解して、より細かく管理する時が来ました。これにより、全員がより効率的にタスクを完了できるようになります。

### 11.1 タスクの計画：グローバルからローカルへ

複雑なタスクを複数の管理可能なサブタスクに分割し、進捗を追跡してタスクの完了状況を明確に理解できるようにします。マルチレベル管理を使用して、これらのサブタスクを効果的に整理します。それでは、計画に入っていきましょう！

---

### 11.2 サブタスクテーブルの作成

#### 11.2.1 サブタスクの構造を設計する

まず、"サブタスクテーブル"（[**ツリーコレクション**](https://docs-jp.nocobase.com/handbook/collection-tree)）を作成します。サブタスクは、"タスク名"、"ステータス"、"担当者"、"進捗"など、メインタスクと同様の属性を持ちます。必要に応じて、コメントやドキュメントなどの追加フィールドを追加できます。

サブタスクをメインタスクにリンクするために、**多対一**の関係を確立し、各サブタスクをメインタスクに割り当てます。逆の関係を設定することで、メインタスク内でサブタスクを直接表示または管理できます。

![ツリー表構造の例](https://static-docs.nocobase.com/Solution/202411170300471731783647.png)

> 💡 **ヒント：** よりスムーズなプロセスのために、メインタスクページのリンクされたブロックを介してサブタスクを作成することをお勧めします！

#### 11.2.2 タスク管理インターフェイスでのサブタスクの表示

タスク管理インターフェイスでは、"タスクテーブル"の表示モードを[**ページビュー**](https://docs-jp.nocobase.com/handbook/ui/pop-up#page)に設定します。

![](https://static-docs.nocobase.com/20241207135639.png)

ページ内に新しい**"サブタスク管理"**タブを作成し、サブタスクテーブルを追加してツリー構造で表示します。これにより、同じページでサブタスクを管理および表示できます。

![](https://static-docs.nocobase.com/20241207135715.png)

---

### 11.3 作業時間比較チャート：全体の作業時間と進捗を見積もる（オプション）

次に、作業の詳細と作業比較チャートを作成し、全体の作業時間とタスクの進捗を見積もります。

#### 11.3.1 時間と作業時間フィールドの追加

サブタスクテーブルに以下のフィールドを追加します：

- **開始日**
- **終了日**
- **総作業時間**
- **残作業時間**

![作業時間フィールド](https://static-docs.nocobase.com/Solution/202411170318301731784710.png)

これらのフィールドにより、タスクの期間と作業時間を動的に計算できます。

#### 11.3.2 タスクの期間を計算する

サブタスクテーブルに新しい[公式フィールド](https://docs-jp.nocobase.com/handbook/field-formula)、**"日数"**を作成してタスクの期間を計算します。

![タスク期間の公式](https://static-docs.nocobase.com/Solution/202411170319131731784753.png)

公式計算オプション：

- Math.js

  > [math.js](https://mathjs.org/)ライブラリを使用して、複雑な数式を計算できます。
  >
- Formula.js

  > [Formula.js](https://formulajs.info/functions/)ライブラリを使用して一般的な数式を計算します。Excelの数式に慣れている方には簡単です！
  >
- 文字列テンプレート

  > 名前が示すように、文字を組み合わせる手段です。動的な説明や番号付けなどが必要な場合に使用できます。
  >

このタスクでは、**Formula.js**ライブラリを使用して一般的な数式を計算します。タスクの期間の公式：

```plaintext
DAYS(終了日, 開始日)
```

すべての公式要素は**小文字の英語**で記述してエラーを回避してください。

![動的タスク期間の例](https://static-docs.nocobase.com/Solution/202411170328531731785333.png)

ページを確認すると、開始日と終了日に基づいて期間が動的に調整されているのがわかります！

![タスク期間の計算](https://static-docs.nocobase.com/Solution/202411170331061731785466.png)

---

### 11.4 日次作業時間報告：実際の進捗を追跡する（オプション）

#### 11.4.1 日次作業時間報告テーブルの作成

日次作業時間報告のために新しいテーブルを作成します。以下のフィールドを追加します：

- **日次作業時間**（整数を推奨）
- **日付**
- **理想作業時間**（整数）
- **関連サブタスク**（サブタスクとの[多対一](https://docs-jp.nocobase.com/handbook/data-modeling/collection-fields/associations/m2o)関係）。

![日次作業時間報告テーブル](https://static-docs.nocobase.com/Solution/202411170337551731785875.png)

#### 11.4.2 サブタスクページでの日次作業時間の表示

サブタスク編集ページに戻り、日次作業時間テーブルを[サブテーブル](https://docs-jp.nocobase.com/handbook/ui/fields/specific/sub-table)として表示します。他の関連フィールドをレイアウトにドラッグします。これにより、サブタスクページで直接データを簡単に入力および確認できます。

![日次作業時間サブテーブル](https://static-docs.nocobase.com/Solution/202411170342321731786152.png)

![完了したサブタスクページの例](https://static-docs.nocobase.com/Solution/202411170346411731786401.png)

---

### 11.5 主要計算とリンクルール（オプション）

タスクの進捗と残りの作業時間をより正確に見積もるために、次に主要な設定を行います。

#### 11.5.1 サブタスクの[必須フィールド](https://docs-jp.nocobase.com/handbook/ui/fields/field-settings/required)の設定

**開始日**、**終了日**、および**推定作業時間**を[必須項目](https://docs-jp.nocobase.com/handbook/ui/fields/field-settings/required)としてマークし、正確な計算のためにデータの完全性を確保します。

#### 11.5.2 完了割合と残業時間の[リンクルール](https://docs-jp.nocobase.com/handbook/ui/actions/action-settings/linkage-rule)の設定

サブタスクテーブルに以下の計算フィールドを追加します：

1. **完了割合**：日次作業時間の合計 / 推定作業時間。

   ```html
   SUM(現在のフォーム/日次作業/日当たりの作業時間) / 現在のフォーム/推定作業時間
   ```
2. **残りの作業時間**：推定作業時間 - 日次作業時間の合計。

   ```html
   現在のフォーム/推定作業時間 - SUM(現在のフォーム/日次作業/日当たりの作業時間)
   ```

![](https://static-docs.nocobase.com/Solution/202411170353551731786835.png)

日次作業時間リンクルールの**理想作業時間**については：

```html
[現在のフォーム/推定作業時間] / [現在のフォーム/サブタスクの期間]
```

![理想作業時間ルール](https://static-docs.nocobase.com/Solution/202411170358511731787131.png)

![](https://static-docs.nocobase.com/Solution/202411170358141731787094.png)

これにより、リアルタイムでタスクの進捗と残作業時間を計算できます。

![進捗の例](https://static-docs.nocobase.com/Solution/202411170401561731787316.png)

### 11.6 タスク進捗チャートの作成（オプション）

#### 11.6.1 タスク進捗[チャート](https://docs-jp.nocobase.com/handbook/data-visualization/user/chart-block)の設定

新しいチャートブロックを作成し、**日次作業時間の合計**と**理想作業時間の合計**の変化をカウントし、日付の次元に基づいてタスクの進捗を表示します。

[関連タスク/Id]を[前のポップアップレコード/ID]と等しいように制限して、進捗チャートが現在のタスクの真の状態を反映するようにします。

![チャート設定](https://static-docs.nocobase.com/Solution/202411170417341731788254.png)

![設定されたチャートの例](https://static-docs.nocobase.com/Solution/202411170418231731788303.png)

#### 11.6.2 重要な情報と進捗の表示

最後に、基本情報とタスクの進捗の変化を`markdown`ブロックを通じて表示する[Markdownブロック](https://docs-jp.nocobase.com/handbook/ui/blocks/other-blocks/markdown)を思い出してください。

進捗率は、[`Handlebars.js`](https://docs-jp.nocobase.com/handbook/template-handlebars)テンプレートを使用してレンダリングされます：

![](https://static-docs.nocobase.com/20241207140756.png)

```html
**最終更新の進捗：**
<p style="font-size: 54px; font-weight: bold; color: green;">
{{floor (multiply $nRecord.complete_percent 100)}} %
</p>
```

これは、[Handlebars.js](https://docs-jp.nocobase.com/handbook/template-handlebars)を使用した構文で、進捗率を動的にレンダリングします。

---

### 11.7 まとめ

おめでとうございます！タスクをサブタスクに分割することに成功しました。マルチレベル管理、日次作業時間報告、およびチャートの可視化により、進捗を追跡することが明確になり、チームがより効率的に作業できるようになります。素晴らしい仕事を続けて、[次の章](https://www.nocobase.com/ja/tutorials/project-tutorial-meeting-room-booking)を楽しみにしましょう！

---

探求を続け、無限の可能性を創造し続けてください！途中で問題に遭遇した場合は、[NocoBaseドキュメント](https://docs-jp.nocobase.com/)を確認するか、[NocoBaseコミュニティ](https://forum.nocobase.com/)に参加して議論やサポートを受けることを忘れないでください。
