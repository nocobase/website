<iframe width="800" height="436" src="https://www.youtube.com/embed/qp-tWcyrzHM?si=ZtPJAHDYX-t2EpSh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

親愛なる友人たち、私たちはついに待望の可視化に関する章に到達しました！この章では、混乱の中で本当に必要な情報に迅速に焦点を合わせる方法を探ります。マネージャーとして、私たちはタスクの複雑さの中で道を見失ってはいけません！タスクの統計や情報表示を一緒に簡単に取り組んでいきましょう。

### 9.1 主要情報に焦点を当てる

私たちの目標は、チームのタスクを迅速に把握し、私たちが責任を持つタスクや興味のあるタスクを強調し、不要なデータに圧倒されないようにすることです。

![](https://static-docs.nocobase.com/20241208170708.png)

まずは、チームタスクの統計[チャート](https://docs-jp.nocobase.com/handbook/data-visualization/user/chart-block)を作成してみましょう。

#### 9.1.1 [チャートブロック](https://docs-jp.nocobase.com/handbook/data-visualization/user/chart-block)を作成する

新しいページを作成します：

1. **新しいチャートデータブロックを作成します**（このメインブロック内で複数のチャートを構築できます）。
2. **ターゲットテーブルを選択：** タスクテーブル。次にチャートの設定に進みます。

![手順の例](https://static-docs.nocobase.com/Solution/202411161926301731756390.png)
![設定の例](https://static-docs.nocobase.com/Solution/202411161928201731756500.png)

#### 9.1.2 タスクステータス統計を設定する

異なるステータスのタスク数をカウントしたい場合は、どうすればよいでしょうか？まず、データを処理します：

- 測定：カウントするためにIDフィールドなどのユニークフィールドを選択します。
- 次元：データを**ステータス**でグループ化します。

次に、チャート設定：

1. [棒グラフ](https://docs-jp.nocobase.com/handbook/data-visualization-echarts/bar)または[カラムチャート](https://docs-jp.nocobase.com/handbook/data-visualization-echarts/column)を選択します。
2. **Xフィールド**を「ステータス」に、**Yフィールド**を「ID」に設定します。
   *(ヒント：視覚的な区別を良くするために、次元フィールドで「ステータス」を選択することを忘れないでください。)*

![](https://static-docs.nocobase.com/20241208172705.png)

#### 9.1.3 多次元統計：人ごとのタスク

人ごとのタスク数とステータスを表示したいですか？「担当者/ニックネーム」の次元を追加して二重次元を使用します。

1. 左上の「クエリを実行」をクリックします。

![](https://static-docs.nocobase.com/20241208172811.png)

2. もし結果が期待したものでない場合は、**「グループ」**を選択して担当者別のタスクの比較を表示します。

![](https://static-docs.nocobase.com/20241208172901.png)

3. 一方、全体の積み重ね数を表示したい場合は、「isStack」を選択できます。この方法で、各人のタスクの割合と全体のタスク状況を見ることができます！

![](https://static-docs.nocobase.com/20241208172933.png)

### 9.2 データフィルタリングと動的表示

#### 9.2.1 データフィルターを構成する

もちろん、「キャンセル」と「アーカイブ」されたデータをさらに除外することもできます。左側のフィルター条件でこの2つのオプションを削除するだけで、これらの条件には非常に慣れていると思います！

![](https://static-docs.nocobase.com/20241208173025.png)

フィルター処理が完了したら、確認をクリックし、設定を終了して、最初のチャートが準備完了です！

#### 9.2.2 [チャートを複製する](https://docs-jp.nocobase.com/handbook/data-visualization/user/chart-block#configure-block-operations)

「isGroup」と「isStack」両方のチャートを最初からやり直さずに必要ですか？チャートを複製します：

- 最初のチャートブロックの右上のコピーアイコンをクリックします。
- スクロールホイールを下にスライドすると、2番目のチャートが表示されます。それを右にドラッグ＆ドロップし、「isStack」設定を削除し、「isGroup」に変更します。

![](https://static-docs.nocobase.com/Solution/202411161947481731757668.png)

#### 9.2.3 動的[フィルタリング](https://docs-jp.nocobase.com/handbook/data-visualization/user/filter)

タスクデータをインタラクティブに[フィルタリング](https://docs-jp.nocobase.com/handbook/data-visualization/user/filter)するために：

もちろん！チャートデータブロックの下に「フィルター」を開き、フィルターボックスが上に表示されます。必要なフィールドを表示し、フィールドのフィルタリング条件を設定します。（例えば、日付フィールドを「介在する」に変更）

![フィルターの例](https://static-docs.nocobase.com/Solution/202411161948261731757706.png)

![](https://static-docs.nocobase.com/Solution/202411161951261731757886.png)

![](https://static-docs.nocobase.com/Solution/202411161952281731757948.png)

#### 9.2.4 カスタムフィルターフィールドを作成する

特別な場合に「キャンセル」と「アーカイブ」データを含めたい場合、ダイナミックフィルタリングをサポートし、フィルタリングのデフォルトを設定できますか？

[カスタムフィルターフィールド](https://docs-jp.nocobase.com/handbook/data-visualization/user/filter#custom-fields)を作成しましょう！

> 関連データテーブルからフィールドを選択したり、カスタムフィールドを作成することで、フィルターを簡単に構成できます。（チャートブロック内でのみ利用可能）
>
> オプションには、フィールドのタイトル、説明、オペレーターの編集、デフォルト値（例えば、現在のユーザーまたは日付）の設定が含まれ、フィルターをよりニーズに合わせて調整できます。

1. 「ステータス」のタイトルを記入します。
2. ソースフィールドは空白のままにします。
3. コンポーネントに「チェックボックス」を選択します。
4. オプションは、データベースが作成されたときのステータス属性の値に基づいて記入します（ここでの属性の順序はオプションラベル - オプション値です）。

![](https://static-docs.nocobase.com/Solution/202411161958151731758295.png)

作成が成功したら、「デフォルト値を設定」をクリックして、必要なオプションを選択します。

![](https://static-docs.nocobase.com/Solution/202411162000141731758414.png)

![202411162000481731758448.png](https://static-docs.nocobase.com/Solution/202411162000481731758448.png)

デフォルト値を設定した後、チャート設定に戻り、フィルター条件を「ステータス - いずれかの - 現在のフィルター/ステータス」に変更し、確認します！（両方のチャートを変更する必要があります。）

![](https://static-docs.nocobase.com/Solution/202411162001431731758503.png)

完了しました。フィルターテストを行い、データが完璧に描画されました。

![202411162003151731758595.png](https://static-docs.nocobase.com/Solution/202411162003151731758595.png)

### 9.3 動的リンクとタスクフィルタリング

強力な機能：統計をクリックしてフィルタリングされたタスクにジャンプします。これを実現しましょう。

#### 9.3.1 「未開始」の例を使用して、[統計チャート](https://docs-jp.nocobase.com/handbook/data-visualization/antd/statistic)を作成します

1. 測定を**ID - カウント**に設定します。
2. フィルターを追加します：ステータス = 「未開始」
3. コンテナ名を「未開始」に設定し、チャートタイプを「統計」に設定し、チャート名は空白のままにします。

![](https://static-docs.nocobase.com/Solution/202411162011451731759105.png)

未開始のステータスが正常に表示されました。状態ごとに5回コピーし、上部にドラッグします。

![](https://static-docs.nocobase.com/Solution/202411162017471731759467.png)

#### 9.3.2 リンクフィルタリングを設定する

1. タスク管理テーブルブロックを含むページに戻り、ブラウザのアドレスバーのリンク形式を確認します（通常は `http://xxxxxxxxx/admin/0z9e0um1vcn` のようになります）。
   ![](https://static-docs.nocobase.com/Solution/202411162046301731761190.png)

   ここで `xxxxxxxxx` はあなたのウェブサイトのドメインを表し、`/admin/0z9e0um1vcn` はパスです。（最後の `/admin` を見つけるだけで大丈夫です。）
2. リンクの一部をコピーします：

   - リンクジャンプを行うために、まずリンクの特定部分を抽出する必要があります。
   - `admin/` の後から（`admin/` という文字を含めずに）リンクの末尾までコピーします。この場合、コピーする部分は：`0z9e0um1vcn` です。

![](https://static-docs.nocobase.com/Solution/202411162048571731761337.png)

「未開始」にカーソルを合わせると、カーソルが手のアイコンに変わります。クリックすると、正常にジャンプします。

![](https://static-docs.nocobase.com/Solution/demoE2v1-4.gif)

3. チャートリンクを設定します：リンクにフィルターパラメータを追加します。タスクステータスのデータベース識別子を覚えていますか？このパラメータをリンクの末尾に追加して、タスクをさらにフィルタリングします。

   - リンクの末尾に `?task_status=Not started` を追加します。これにより、リンクは次のようになります：`0z9e0um1vcn?task_status=Not started`。

   ![](https://static-docs.nocobase.com/Solution/202411162106351731762395.png)

> **URLパラメータの理解：**URLにパラメータを追加する際に従うべきフォーマットルールがあります：
>
> - **疑問符（？）：**パラメータの開始を示します。
> - **パラメータ名と値：**形式は `parameter_name=parameter_value` です。
> - **複数のパラメータ：**`&` シンボルを使用して接続します。例えば：
>   `http://xxxxxxxxx/admin/hliu6s5tp9x?status=todo&user=123`。
>   この例では、`user` は別のパラメータ名であり、`123` はその対応する値です。

4. ページに戻り、クリックしてジャンプすると、希望するパラメータがURLに含まれていることがわかります。（通常のように `http://xxxxxxxxx/admin/0z9e0um1vcn` のようになります）

![](https://static-docs.nocobase.com/Pasted%20image%2020241207124358.png)

#### 9.3.3 [URLフィルター条件の関連付け](https://docs-jp.nocobase.com/handbook/ui/variables#url-%E6%9F%A5%E8%AF%A2%E5%8F%82%E6%95%B0)

テーブルがまだ変わらないのはなぜですか？心配しないでください、一緒に最後のステップを終わらせましょう！

- フォームブロックの設定に戻り、「データ範囲を設定」をクリックします。
- 「ステータス」を「URL検索パラメータ/ステータス」と等しく選択します。

「確認」をクリックすると、フィルタリングが成功します！

![8ac9a3f6ea07c00fca06bca6ee2f5a9a.png](https://static-docs.nocobase.com/8ac9a3f6ea07c00fca06bca6ee2f5a9a.png)
![](https://static-docs.nocobase.com/Solution/202411162037311731760651.png)

![](https://static-docs.nocobase.com/Solution/202411162109351731762575.png)

![202411162111151731762675.png](https://static-docs.nocobase.com/Solution/202411162111151731762675.png)

### 9.4 [データ可視化](https://docs-nocobase.com/handbook/data-visualization)：魅力的なチャート

> **データ可視化：[ECharts](https://docs-nocobase.com/handbook/data-visualization-echarts)（商業プラグイン）**
> EChartsは、より高度でカスタマイズ可能な設定オプション（"[折れ線グラフ](https://docs-jp.nocobase.com/handbook/data-visualization-echarts/line)（多次元）"、"[レーダーチャート](https://docs-jp.nocobase.com/handbook/data-visualization-echarts/radar)"、"[ワードクラウド](https://docs-jp.nocobase.com/handbook/data-visualization-echarts/wordcloud)"など）を提供します。

さらに多くのチャート設定オプションにアクセスしたい場合は、「データ可視化：ECharts」を有効にしてください！

#### 9.4.1 魅力的な[レーダーチャート](https://docs-jp.nocobase.com/handbook/data-visualization-echarts/radar)をすぐに設定する

![](https://static-docs.nocobase.com/Solution/202411162116541731763014.png)

データが重なっている場合は、サイズや半径を調整して、すべての情報が明確に表示されるようにしてください！

![](https://static-docs.nocobase.com/Solution/202411162119541731763194.png)

![202411162121201731763280.png](https://static-docs.nocobase.com/Solution/202411162121201731763280.png)

設定後、スタイルを調整して完成させます！

![](https://static-docs.nocobase.com/Solution/202411162124151731763455.png)

#### 9.4.2 さらに多くのチャートコンテナ

ここにあなたが探索するためのさらに多くのチャートがあります。

##### [ワードクラウド](https://docs-jp.nocobase.com/handbook/data-visualization-echarts/wordcloud)

![](https://static-docs.nocobase.com/Solution/202411162126191731763579.png)

##### [ファunnel](https://docs-jp.nocobase.com/handbook/data-visualization-echarts/funnel)

![](https://static-docs.nocobase.com/Solution/202411162130021731763802.png)

##### [複数指標（デュアル軸、Echartsライン）](https://docs-jp.nocobase.com/handbook/data-visualization/antd-charts/dual-axes)

双軸チャートには、さらに多くの指標を追加できます。

![](https://static-docs.nocobase.com/Solution/202411162133541731764034.png)

##### [発散棒グラフ](https://docs-jp.nocobase.com/handbook/data-visualization-echarts/diverging-bar)

![](https://static-docs.nocobase.com/Solution/202411162136401731764200.png)

### 9.5 小さな挑戦

1. 残りの状態のURLパラメータを設定します：「進行中」、「レビュー待ち」、「完了」、「キャンセル」、「アーカイブ」。
2. 「担当者」のマルチセレクトフィールドを設定します。「ステータス」フィールドと同様に、デフォルト値を現在のユーザーのニックネームに設定します。

次の章でお会いできるのを楽しみにしています。[次の章](https://www.nocobase.com/ja/tutorials/project-tutorial-task-dashboard-part-2)へ進みましょう！

---

探求を続け、無限の可能性を創造してください！途中で問題が発生した場合は、[NocoBaseドキュメント](https://docs-jp.nocobase.com/)を確認するか、[NocoBaseコミュニティ](https://forum.nocobase.com/)に参加して議論とサポートを受けることを忘れないでください。
