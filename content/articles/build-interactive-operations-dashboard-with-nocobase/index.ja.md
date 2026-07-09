この記事では、「チケット管理システム」の運用ダッシュボードを例に、NocoBase のチャートブロック、フィルターブロック、JS ブロックを組み合わせて、フィルター連動、チャートのドリルダウン、カスタムスタイルに対応したデータダッシュボードを構築する方法を紹介します。

例はチケット管理のシナリオですが、ここで紹介する方法は CRM、設備保守、プロジェクト管理、承認フロー、カスタマーサクセスなどの業務システムにも応用できます。

この記事で説明したいのは、「JS ブロックで大きなダッシュボードを書く方法」ではありません。NocoBase のネイティブブロックと JS ブロックをどう組み合わせるか、つまり標準機能はネイティブブロックに任せ、個別の体験は JS ブロックで補うという考え方です。

![JS 区块-6ypvx7.png](https://static-docs.nocobase.com/JS%20%E5%8C%BA%E5%9D%97-6ypvx7.png)

---

💬 NocoBase ブログへようこそ。NocoBase は、あらゆる種類のシステム、業務アプリケーション、社内ツールを構築できる、拡張性に優れた AI 搭載のノーコード／ローコード開発プラットフォームです。完全なセルフホストに対応し、プラグインベースの設計で、開発者にもやさしい構成になっています。→ [GitHub で NocoBase を見る](https://github.com/nocobase/nocobase)

---

## シナリオの目標

ここでは、運用チームやサービスチームが現在の作業負荷をすばやく把握できる Operations dashboard を構築します。

- 未完了のチケットが現在どれくらい残っているか
- どのチケットに SLA リスクがあるか
- 新規チケットの傾向はどう変化しているか
- チケットのステータスや優先度はどう分布しているか
- あるチャートをクリックしたとき、対応する明細を確認できるか

ページは大きく 4 つの層に分けられます。

1. 上部フィルターエリア：時間、サービスグループ、リクエストタイプ、優先度、SLA ステータス
2. KPI 集計エリア：Open backlog、Unassigned、SLA warning など
3. チャート分析エリア：トレンド、ステータス、SLA、優先度の分布
4. ドリルダウン明細エリア：チャートをクリックしたあと、該当するレコードを表示

## まず構築方針を明確にする

データダッシュボードを作るとき、多くの人は問題を二択で考えがちです。

すべて NocoBase のネイティブブロックで作ると、設定は簡単ですが、スタイルやインタラクションの柔軟性が足りないと感じるかもしれません。一方で、大きな JS ブロックを書いて、クエリ、チャート、フィルター、ドリルダウンをすべて自分で制御すると、ローコード設定の便利さを失ってしまいます。

実際には、両方を組み合わせる方法がおすすめです。

この Operations dashboard では、ページ全体を 1 つの大きな JS ダッシュボードとして書くのではなく、役割ごとに分けています。

- 上部フィルターには NocoBase 標準のフィルターブロックを使う。
- トレンドチャート、ステータス分布、SLA 分布にはネイティブのチャートブロックを使う。
- KPI カードとドリルダウン明細には JS ブロックを使う。
- フィルターブロックはチャートブロックと JS ブロックの両方に影響する。
- チャートをクリックしたあと、ドリルダウン条件を下の JS 明細ブロックに渡す。

この方法なら、標準的な集計とフィルターには NocoBase の設定能力を残し、個別表示や複雑なインタラクションは JS ブロックで実現できます。ページは「設定だけ」でも「すべてコード」でもなく、設定とコードがそれぞれの役割を担う形になります。

---

## 1. チャートブロックでスタイルをカスタマイズする

![图表区块-mf0fqe.png](https://static-docs.nocobase.com/%E5%9B%BE%E8%A1%A8%E5%8C%BA%E5%9D%97-mf0fqe.png)

NocoBase のチャートブロックでは、まず Query builder で集計条件を定義し、そのあとカスタム ECharts option でスタイルを調整できます。

「チケットステータス集計」を例にすると、Query builder は次のように設定できます。

- データテーブル：tickets
- 指標：id count、別名 ticketCount
- ディメンション：status

スタイルをカスタマイズするときのポイントは、クエリを書き直す必要がないことです。`ctx.data.objects` をもとにチャート表示を処理すれば十分です。

```javascript
const rows = Array.isArray(ctx.data?.objects) ? ctx.data.objects : [];
```

この行でチャートのクエリ結果を読み取ります。次に、ステータスのラベルと色を定義します。

```javascript
const labels = {
  new: ctx.t('New'),
  open: ctx.t('Open'),
  pending_customer: ctx.t('Pending customer'),
  resolved: ctx.t('Resolved'),
  closed: ctx.t('Closed'),
};

const colors = {
  new: '#1677ff',
  open: '#22a06b',
  pending_customer: '#f59f00',
  resolved: '#13c2c2',
  closed: '#8c8c8c',
};
```

後から多言語対応しやすくするため、画面に表示される文言はすべて `ctx.t()` を使うことをおすすめします。

チャートデータを生成するとき、各データポイントにドリルダウン情報を持たせることができます。

```javascript
const data = rows.map((row) => ({
  value: Number(row.ticketCount || 0),
  itemStyle: {
    color: colors[row.status] || '#8c8c8c',
    borderRadius: [6, 6, 0, 0],
  },
  ticketingDrilldown: {
    label: ctx.t('Status') + ': ' + (labels[row.status] || row.status),
    filter: { status: { $eq: row.status } },
  },
}));
```

ここで最も重要なのは `ticketingDrilldown` です。これは ECharts の標準フィールドではなく、あとでチャートクリック時に使うために自分たちで入れておく業務コンテキストです。

最後に ECharts option を返します。

```javascript
return {
  grid: { top: 28, right: 22, bottom: 48, left: 42 },
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  xAxis: {
    type: 'category',
    data: rows.map((row) => labels[row.status] || row.status),
  },
  yAxis: {
    type: 'value',
    minInterval: 1,
  },
  series: [
    {
      name: ctx.t('Tickets'),
      type: 'bar',
      barWidth: 36,
      data,
    },
  ],
};
```

この部分の考え方は次の通りです。

- Query builder は集計データを担当する。
- Custom option は視覚表現を担当する。
- カスタムフィールドはドリルダウン用のコンテキストを持つ。

---

## 2. システムのフィルターブロックをページ全体の観察条件にする

![筛选区-fep21g.gif](https://static-docs.nocobase.com/%E7%AD%9B%E9%80%89%E5%8C%BA-fep21g.gif)

運用ダッシュボードのフィルターエリアは、孤立したフォームであるべきではありません。ページ全体の現在の観察条件を表すものです。

たとえば、ユーザーがあるサービスグループ、リクエストタイプ、作成期間を選択した場合、KPI、トレンドチャート、ステータス分布、ドリルダウン明細はすべて同じ条件にもとづいて表示される必要があります。そうでないと、ページ内の数字が互いに食い違い、利用者はどのデータが現在の範囲の結果なのか判断しにくくなります。

ここでは、独自のフィルターコンポーネントを書くのではなく、NocoBase 標準のフィルターブロックをそのまま使います。ネイティブのフィルターブロックはチャートブロックに自然に紐づけられるため、Chart block は Query builder、権限、更新、フィルターの仕組みをそのまま利用できます。

上部の `Dashboard scope` には、次のフィルター項目を設定できます。

- Created at
- Service group
- Request type
- Priority
- SLA status

JS ブロックでは、同じフィルター条件をコード内で読み取り、クエリ filter に変換するだけです。これにより、KPI とドリルダウン明細もネイティブチャートと同じ条件で表示できます。

フィルター条件の組み合わせは、小さな関数にまとめられます。

```javascript
function combineFilters(...filters) {
  const parts = filters.filter(Boolean);
  if (!parts.length) return undefined;
  if (parts.length === 1) return parts[0];
  return { $and: parts };
}
```

フィルター条件に応じて件数を集計します。

```javascript
async function countTickets(filter) {
  const resource = ctx.makeResource('MultiRecordResource');
  resource.setResourceName('tickets');
  resource.setPageSize(1);

  if (filter) {
    resource.setFilter(filter);
  }

  await resource.refresh();

  const meta = resource.getMeta?.() || {};
  return Number(meta.count || meta.total || 0);
}
```

重要なのは次の 2 行です。

```javascript
resource.setFilter(filter);
await resource.refresh();
```

JS ブロックは SQL を直接書くのではなく、resource を通じて業務データを問い合わせます。これにより、NocoBase の権限、データソース、ページランタイムと整合しやすくなります。

---

## 3. JS ブロックで KPI カードを表示する

![筛选区-n6tphh.gif](https://static-docs.nocobase.com/%E7%AD%9B%E9%80%89%E5%8C%BA-n6tphh.gif)

KPI は JS ブロックで表示するのに向いています。KPI は通常、単一のクエリではなく、未完了、未割り当て、SLA warning、SLA breached、新規、解決済みなど、複数の業務指標の組み合わせだからです。

JS ブロックでは、現在のフィルター範囲にもとづいてデータを再取得し、統計カードとしてレンダリングできます。

```javascript
const { Card, Col, Row, Statistic, Tag } = ctx.libs.antd;

const scopeFilter = getDashboardScopeFilter();

const openBacklog = await countTickets(
  combineFilters(scopeFilter, {
    status: { $notIn: ['resolved', 'closed', 'cancelled'] },
  }),
);

ctx.render(
  <Row gutter={[12, 12]}>
    <Col span={6}>
      <Card size="small">
        <Tag color="blue">{ctx.t('Active')}</Tag>
        <Statistic title={ctx.t('Open backlog')} value={openBacklog} />
      </Card>
    </Col>
  </Row>,
);
```

JS ブロックのポイントは次の通りです。

- `ctx.makeResource()` でデータを取得する。
- `ctx.libs.antd` で画面をレンダリングする。
- `ctx.render()` で内容を出力する。
- フィルターが変わったら JS ブロックを再レンダリングする。

実際のページでは、フィルターボタンとリセットボタンにイベントフローを設定できます。ネイティブのフィルター処理が完了したあと、KPI JS ブロックとドリルダウン JS ブロックも同時に更新するようにします。これにより、ユーザーが一度フィルターをクリックするだけで、チャートとカスタム内容が同じ条件にもとづいて更新されます。

---

## 4. チャートと JS ブロックを連動させてドリルダウンする

![图表点击下钻-4bo7ww.gif](https://static-docs.nocobase.com/%E5%9B%BE%E8%A1%A8%E7%82%B9%E5%87%BB%E4%B8%8B%E9%92%BB-4bo7ww.gif)

チャートクリックによるドリルダウンは、ダッシュボードでとても実用的な操作です。

チケット管理の場面では、ユーザーが「Status: Open」の棒をクリックすると、下の明細エリアにすべての Open チケットが表示されます。「SLA breached」をクリックすると、超過したチケットが表示されます。

実装の流れは次の通りです。

1. チャートのデータポイントに `ticketingDrilldown` を持たせる。
2. チャートイベントからこのドリルダウン情報を読み取る。
3. ドリルダウン情報を対象 JS ブロックのコンテキストに書き込む。
4. 対象 JS ブロックを再レンダリングする。

チャートイベント内の重要なコードは次の通りです。まず、ドリルダウン用の JS ブロックを探します。

```javascript
const DRILLDOWN_TARGET_UID = 'v7mioopm6rm';

function getDrilldownTarget() {
  if (typeof ctx.getModel === 'function') {
    return ctx.getModel(DRILLDOWN_TARGET_UID);
  }

  const engine = ctx.model?.flowEngine || ctx.model?.context?.flowEngine || ctx.engine;
  return engine?.getModel?.(DRILLDOWN_TARGET_UID);
}
```

次に、チャートクリックで得たドリルダウン条件を対象ブロックに書き込みます。

```javascript
function applyDrilldown(drilldown) {
  if (!drilldown?.filter) return;

  const target = getDrilldownTarget();
  if (!target?.context?.defineProperty) return;

  target.context.defineProperty('ticketingDashboardDrilldown', {
    value: drilldown,
  });

  target.rerender?.();
}
```

最も重要なのは次の 2 行です。

```javascript
target.context.defineProperty('ticketingDashboardDrilldown', { value: drilldown });
target.rerender?.();
```

1 行目でドリルダウン条件を JS ブロックに渡し、2 行目で JS ブロックの更新を実行します。

最後にチャートのクリックイベントをバインドします。

```javascript
const clickHandler = (params) => {
  applyDrilldown(params?.data?.ticketingDrilldown);
};

chart.on('click', clickHandler);

return () => chart.off('click', clickHandler);
```

ここでは必ず cleanup を返すことをおすすめします。

```javascript
return () => chart.off('click', clickHandler);
```

これにより、チャートが再設定または再レンダリングされたときに古いイベントを削除でき、重複バインドを防げます。

上記のチャートクリックイベント関連コードは [v2.2.0-beta.10](https://github.com/nocobase/nocobase/releases/tag/v2.2.0-beta.10) 以降のバージョンに対応しています。旧バージョンでは、次の書き方を参考にしてください。

```JavaScript
chart.off('click');
chart.on('click', clickHandler);
```

---

## 5. ドリルダウン JS ブロックで明細を表示する

![下钻 JS 区块-0jg2lt.png](https://static-docs.nocobase.com/%E4%B8%8B%E9%92%BB%20JS%20%E5%8C%BA%E5%9D%97-0jg2lt.png)

ドリルダウン JS ブロックは、先ほど書き込まれた `ticketingDashboardDrilldown` を読み取り、その中の filter にもとづいてデータを取得します。

```javascript
const drilldown = ctx.model?.context?.ticketingDashboardDrilldown;

if (!drilldown) {
  ctx.render(
    <Alert
      type="info"
      showIcon
      message={ctx.t('Select a chart segment to inspect matching tickets')}
    />,
  );
  return;
}
```

ユーザーがまだチャートをクリックしていない場合は、案内メッセージを表示します。クリック後は、`drilldown.filter` にもとづいてチケットを取得します。

```javascript
const resource = ctx.makeResource('MultiRecordResource');
resource.setResourceName('tickets');
resource.setFilter(drilldown.filter);
resource.setPageSize(10);
await resource.refresh();

const rows = resource.getData?.() || [];
```

そのあと、テーブルをレンダリングします。

```javascript
const { Table, Typography } = ctx.libs.antd;

ctx.render(
  <>
    <Typography.Title level={5}>
      {ctx.t('Drilldown')}: {drilldown.label}
    </Typography.Title>

    <Table
      size="small"
      rowKey="id"
      dataSource={rows}
      pagination={false}
      columns={[
        { title: ctx.t('Ticket No'), dataIndex: 'ticketNo' },
        { title: ctx.t('Title'), dataIndex: 'title' },
        { title: ctx.t('Status'), dataIndex: 'status' },
        { title: ctx.t('Priority'), dataIndex: 'priority' },
      ]}
    />
  </>,
);
```

ドリルダウン条件をクリアしたい場合は、次のコードを参考にできます。

```JavaScript
function clearChartDrilldown() {
  if (ctx.model?.context?.defineProperty) {
    ctx.model.context.defineProperty('ticketingDashboardDrilldown', { value: null });
  }
  if (typeof ctx.model?.rerender === 'function') {
    ctx.model.rerender();
  }
}
```

この部分のポイントは次の通りです。

- チャートは filter を渡すだけにする。
- JS ブロックはデータ取得と明細表示を担当する。
- 異なるチャートをクリックしても、同じドリルダウンブロックを共用できる。

---

## 実践上のおすすめ

### 1. 複雑なページ全体を急いでコード化しない

このページで最も重要な経験は、ネイティブ機能と JS 機能を対立させないことです。

フィルター、チャートクエリ、テーブル表示、権限管理など、すでに NocoBase のネイティブ機能として用意されているものは、まずネイティブブロックを使います。そうすれば、あとからフィールド、フィルター条件、チャート指標を画面上で調整できます。

JS ブロックは、ネイティブブロックが苦手な部分に向いています。たとえば、複数の指標をまとめて KPI カードにする、特別なカードスタイルを作る、チャートクリック後にカスタム明細を表示する、異なるブロック間で業務コンテキストを渡す、といった場面です。

つまり、ネイティブブロックは「設定可能な標準機能」を担当し、JS ブロックは「業務に合わせた個別体験」を担当します。これが、このダッシュボードで最も再利用しやすい構築方針です。

### 2. シンプルな集計はチャートブロックの Query builder を優先する

これにより、NocoBase の標準クエリ、権限、フィルター、更新の仕組みをそのまま利用できます。デフォルトのチャートスタイルでは業務上のポイントを表現しにくい場合だけ、カスタム ECharts option で視覚的に調整します。

### 3. KPI カードは JS ブロックを優先する

KPI は通常、複数のクエリ、条件の組み合わせ、カスタムレイアウトを必要とするため、JS ブロックのほうが柔軟です。特に KPI が同じシステムフィルター条件に反応する必要がある場合、JS ブロックでまとめて処理するほうが分かりやすくなります。

### 4. チャートイベントでは cleanup を返す

推奨される書き方は次の通りです。

```javascript
const handler = (params) => {
  // handle click
};

chart.on('click', handler);

return () => chart.off('click', handler);
```

`chart.off('click')` を直接使ってすべてのクリックイベントを消さないでください。チャートブロックや設定パネル自身のリスナーまで誤って削除する可能性があります。

---

## AI に構築を手伝ってもらう

このようなダッシュボードは、AI による生成補助と相性がよいです。データモデル、集計口径、チャートスタイル、ページインタラクションが同時に関わるためです。この記事の内容を AI に渡し、次のプロンプトを参考に質問できます。

次のように質問できます。

```markdown
私は NocoBase でチケット管理システムの運用ダッシュボードを構築しています。
チケット管理シナリオを例に、Operations dashboard を設計してください。

データテーブル tickets には以下のフィールドがあります：
ticketNo、title、status、priority、slaStatus、
requestType、serviceGroup、assignee、createdAt、updatedAt。

ページに必要なもの：
1. 上部フィルター：Created at、Service group、Request type、Priority、SLA status。
2. KPI カード：Open backlog、Unassigned、SLA warning、SLA breached、New tickets、Resolved tickets。
3. チャート：Created tickets trend、Ticket status、SLA status、Priority mix。
4. チャートをクリックしたあと、下部の JS ブロックに該当する Ticket drilldown テーブルを表示する。
5. チャートスタイルは運用ダッシュボードに適したものにし、色は分かりやすく、レイアウトはコンパクトにする。
6. すべての JS 文言に ctx.t() を使う。
7. チャートイベントには chart.on を使い、cleanup 関数を返す。
8. NocoBase のネイティブフィルターブロックとチャートブロックを優先して使い、KPI、ドリルダウン明細、特殊スタイル、ブロック間連携だけ JS ブロックを使う。ページ全体を大きな JS ブロックとして書かない。

各ブロックの設定方針を示し、重要な JS コードを明記してください。
```

すでにページがある場合は、AI に最適化を依頼することもできます。

```markdown
これは現在の NocoBase ダッシュボード設計です：
上部はフィルターエリア、中段は 4 つのチャート、下部はドリルダウン JS ブロックです。
運用担当者の利用体験の観点から最適化してください：
1. どの KPI を表示すべきか；
2. チャート間で連動が必要か；
3. ドリルダウン明細にはどの列を表示すべきか；
4. JS ブロックとチャートイベントをどのように整理すべきか；
5. どのコードをチャート custom option に置き、どのコードを JS ブロックに置くべきか。
```

こうすると、AI が生成する内容は孤立したコードではなく、実際の業務に近いものになります。

AI に構築を任せる場合は、開始前にバックアップマネージャーでプロジェクトをバックアップしてください。

## 参考ドキュメント

- [チャート設定](https://docs.nocobase.com/cn/data-visualization/guide/chart-options)
- [フロントエンド RunJS](https://docs.nocobase.com/cn/runjs)
- [フィルターフォーム](https://docs.nocobase.com/cn/interface-builder/blocks/filter-blocks/form)
- [AI 構築 - UI 構築](https://docs.nocobase.com/cn/ai-builder/ui-builder)
- [ECharts Options](https://echarts.apache.org/en/option.html)
