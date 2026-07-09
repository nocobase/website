This article uses an operations dashboard for a ticketing system as an example. It shows how to combine NocoBase chart blocks, filter blocks, and JS blocks to build a data dashboard that supports linked filters, chart drilldowns, and custom styling.

Although the example comes from a ticketing scenario, the same approach also applies to CRM, equipment maintenance, project management, approval workflows, customer success, and other business systems.

The point of this article is not to show how to write a large dashboard with a JS block. Instead, it explains how to combine NocoBase native blocks with JS blocks: native blocks handle standard capabilities, while JS blocks fill in the personalized experience.

![JS 区块-6ypvx7.png](https://static-docs.nocobase.com/JS%20%E5%8C%BA%E5%9D%97-6ypvx7.png)

---

💬 Hey, you're reading the NocoBase blog. NocoBase is the most extensible AI-powered no-code/low-code development platform for building enterprise applications, internal tools, and all kinds of systems. It’s fully self-hosted, plugin-based, and developer-friendly. → [Explore NocoBase on GitHub](https://github.com/nocobase/nocobase)

---

## Scenario Goal

We want to build an Operations dashboard that helps operations or service teams quickly understand the current workload:

- How many tickets are still open
- Which tickets have SLA risks
- How new ticket volume is trending
- How tickets are distributed by status and priority
- How to view matching records after clicking a chart

The page can be roughly divided into four layers:

1. Top filter area: time, service group, request type, priority, and SLA status
2. KPI area: Open backlog, Unassigned, SLA warning, and more
3. Chart analysis area: trends, status distribution, SLA distribution, and priority mix
4. Drilldown detail area: show matching records after a chart click

## Start with the Right Building Approach

When building a data dashboard, it is easy to turn the problem into a binary choice.

Either you use only NocoBase native blocks, which are easy to configure but may feel less flexible in styling and interaction; or you write a large JS block and control queries, charts, filters, and drilldowns yourself, which means losing much of the convenience that low-code configuration provides.

A better approach is to combine the two.

In this Operations dashboard, we do not write the entire page as one large JS dashboard. Instead, we split responsibilities:

- The top filters use NocoBase’s built-in filter block.
- Trend charts, status distribution, and SLA distribution use native chart blocks.
- KPI cards and drilldown details use JS blocks.
- The filter block affects both chart blocks and JS blocks.
- After a chart click, the drilldown condition is passed to the JS detail block below.

The benefit is clear: standard statistics and filtering still keep NocoBase’s configuration capabilities, while personalized display and complex interactions are handled by JS blocks. The page is neither “configuration only” nor “all code.” Configuration and code each handle what they are good at.

---

## 1. How to Customize Chart Block Styles

![图表区块-mf0fqe.png](https://static-docs.nocobase.com/%E5%9B%BE%E8%A1%A8%E5%8C%BA%E5%9D%97-mf0fqe.png)

In a NocoBase chart block, you can first define the aggregation logic with Query builder, and then adjust the style with a custom ECharts option.

Using “ticket status statistics” as an example, Query builder can be configured as follows:

- Data table: tickets
- Metric: id count, alias ticketCount
- Dimension: status

The key point is that when customizing the style, you do not need to rewrite the query. You only need to process the chart display based on `ctx.data.objects`.

```javascript
const rows = Array.isArray(ctx.data?.objects) ? ctx.data.objects : [];
```

This line reads the chart query result. Then define the status labels and colors:

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

It is recommended to use `ctx.t()` for all visible text so that multilingual support can be added later.

When generating chart data, you can attach drilldown information to each chart data point:

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

The most important part here is `ticketingDrilldown`. It is not a standard ECharts field. It is business context that we put into the data ourselves, and it will be used later when the user clicks the chart.

Finally, return the ECharts option:

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

The core idea of this part is:

- Query builder is responsible for statistical data.
- Custom option is responsible for visual expression.
- Custom fields carry drilldown context.

---

## 2. Make the System Filter Block the Observation Scope for the Whole Page

![筛选区-fep21g.gif](https://static-docs.nocobase.com/%E7%AD%9B%E9%80%89%E5%8C%BA-fep21g.gif)

The filter area in an operations dashboard should not be an isolated form. It represents the current observation scope of the entire page.

For example, when a user selects a service group, a request type, and a creation time range, the KPI cards, trend chart, status distribution, and drilldown details should all be displayed under the same conditions. Otherwise, numbers from different blocks may conflict with each other, making it hard for users to know which result belongs to the current scope.

Here, we directly use NocoBase’s built-in filter block instead of writing a custom filter component. The native filter block can be naturally bound to chart blocks, allowing the Chart block to continue using Query builder, permissions, refresh, and filtering mechanisms.

The top `Dashboard scope` can include these filter fields:

- Created at
- Service group
- Request type
- Priority
- SLA status

For JS blocks, you only need to read the same set of filter conditions in code and convert them into a query filter. This allows KPI cards and drilldown details to stay consistent with native charts.

The filter combination can be wrapped as a small function:

```javascript
function combineFilters(...filters) {
  const parts = filters.filter(Boolean);
  if (!parts.length) return undefined;
  if (parts.length === 1) return parts[0];
  return { $and: parts };
}
```

Count records by filter condition:

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

The key lines are:

```javascript
resource.setFilter(filter);
await resource.refresh();
```

JS blocks query business data through resource instead of directly writing SQL. This makes it easier to stay aligned with NocoBase permissions, data sources, and page runtime behavior.

---

## 3. Use JS Blocks to Display KPI Cards

![筛选区-n6tphh.gif](https://static-docs.nocobase.com/%E7%AD%9B%E9%80%89%E5%8C%BA-n6tphh.gif)

KPI cards are better suited to JS blocks, because a KPI is usually not a single query. It is often a combination of several business metrics, such as unfinished tickets, unassigned tickets, SLA warning, SLA breached, new tickets, and resolved tickets.

A JS block can re-query data according to the current filter scope and render the results as statistic cards.

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

The key points for JS blocks are:

- Use `ctx.makeResource()` to query data.
- Use `ctx.libs.antd` to render the UI.
- Use `ctx.render()` to output content.
- Re-render the JS block after filters change.

On a real page, filter and reset buttons can be configured with event flows. After they complete the native filter action, they can also refresh the KPI JS block and the drilldown JS block. This way, one click updates both the charts and the custom content under the same scope.

---

## 4. Link Chart Blocks with a JS Block for Drilldown

![图表点击下钻-4bo7ww.gif](https://static-docs.nocobase.com/%E5%9B%BE%E8%A1%A8%E7%82%B9%E5%87%BB%E4%B8%8B%E9%92%BB-4bo7ww.gif)

Chart drilldown is a very useful dashboard interaction.

In a ticketing scenario, when the user clicks the “Status: Open” bar, the detail area below shows all Open tickets. When the user clicks “SLA breached,” the detail area shows all overdue tickets.

The implementation idea is:

1. Attach `ticketingDrilldown` to chart data points.
2. Read the drilldown information from the chart event.
3. Write the drilldown information into the target JS block context.
4. Trigger the target JS block to re-render.

The key code in the chart event is shown below. First, locate the drilldown JS block:

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

Then write the drilldown condition from the chart click into the target block:

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

The most important lines are:

```javascript
target.context.defineProperty('ticketingDashboardDrilldown', { value: drilldown });
target.rerender?.();
```

The first line passes the drilldown condition to the JS block, and the second line triggers the JS block to refresh.

Finally, bind the chart click event:

```javascript
const clickHandler = (params) => {
  applyDrilldown(params?.data?.ticketingDrilldown);
};

chart.on('click', clickHandler);

return () => chart.off('click', clickHandler);
```

It is strongly recommended to return a cleanup function:

```javascript
return () => chart.off('click', clickHandler);
```

This cleans up old events when the chart is reconfigured or re-rendered, avoiding duplicate event bindings.

The chart click event code above applies to [v2.2.0-beta.10](https://github.com/nocobase/nocobase/releases/tag/v2.2.0-beta.10) and later. For earlier versions, refer to:

```JavaScript
chart.off('click');
chart.on('click', clickHandler);
```

---

## 5. How the Drilldown JS Block Displays Details

![下钻 JS 区块-0jg2lt.png](https://static-docs.nocobase.com/%E4%B8%8B%E9%92%BB%20JS%20%E5%8C%BA%E5%9D%97-0jg2lt.png)

The drilldown JS block reads the `ticketingDashboardDrilldown` written earlier, and then queries data based on its filter.

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

If the user has not clicked a chart yet, a prompt is displayed. After a click, tickets are queried according to `drilldown.filter`:

```javascript
const resource = ctx.makeResource('MultiRecordResource');
resource.setResourceName('tickets');
resource.setFilter(drilldown.filter);
resource.setPageSize(10);
await resource.refresh();

const rows = resource.getData?.() || [];
```

Then render the table:

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

To clear the drilldown condition, you can refer to:

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

The key points here are:

- The chart only passes the filter.
- The JS block is responsible for querying and displaying details.
- The same drilldown block can be reused by clicks from different charts.

---

## Practical Recommendations

### 1. Do Not Rush to Code the Whole Complex Page

The most important lesson from this page is: do not treat native capabilities and JS capabilities as opposites.

If a capability is already native to NocoBase, such as filtering, chart queries, table display, permission control, use the native block first. This allows you to continue configuring fields, filter conditions, and chart metrics in the interface later.

JS blocks are better for parts that native blocks are not good at, such as combining multiple metrics into KPI cards, applying special card styles, showing custom details after a chart click, or passing business context between different blocks.

In other words, native blocks handle “configurable standard capabilities,” while JS blocks handle “business-specific personalized experiences.” This is the most reusable building approach from this dashboard.

### 2. Use Chart Block Query Builder First for Simple Statistics

This preserves NocoBase’s standard query, permission, filtering, and refresh capabilities. Only use a custom ECharts option for visual optimization when the default chart style cannot express the business emphasis clearly.

### 3. Use JS Blocks First for KPI Cards

KPIs usually need multiple queries, condition combinations, and custom layouts, so JS blocks are more flexible. This is especially clear when KPIs need to respond to the same set of system filter conditions.

### 4. Return Cleanup for Chart Events

Recommended pattern:

```javascript
const handler = (params) => {
  // handle click
};

chart.on('click', handler);

return () => chart.off('click', handler);
```

Do not directly use `chart.off('click')` to clear all click events, because this may accidentally remove listeners used by the chart block or configuration panel.

---

## Let AI Help You Build It

This type of dashboard is very suitable for AI-assisted generation, because it involves data models, statistical definitions, chart styling, and page interactions at the same time. You can give this article to an AI tool and ask questions based on the prompt below.

You can ask:

```markdown
I am building an operations dashboard for a ticketing system with NocoBase.
Please use the ticketing scenario as an example and help me design an Operations dashboard.

The tickets table contains:
ticketNo, title, status, priority, slaStatus,
requestType, serviceGroup, assignee, createdAt, updatedAt.

The page needs:
1. Top filters: Created at, Service group, Request type, Priority, SLA status.
2. KPI cards: Open backlog, Unassigned, SLA warning, SLA breached, New tickets, Resolved tickets.
3. Charts: Created tickets trend, Ticket status, SLA status, Priority mix.
4. After a chart click, the JS block below displays a matching Ticket drilldown table.
5. The chart style should fit an operations dashboard, with clear colors and a compact layout.
6. All JS text should use ctx.t().
7. Chart events should use chart.on and return a cleanup function.
8. Prefer NocoBase native filter blocks and chart blocks. Use JS blocks only for KPIs, drilldown details, special styling, and cross-block interactions. Do not write the whole page as one large JS block.

Please provide the configuration approach for each block and mark the key JS code.
```

If you already have a page, you can also ask AI to optimize it:

```markdown
This is my current NocoBase dashboard design:
The top area is a filter block, the middle area has four charts, and the bottom area has a drilldown JS block.
Please help me optimize it from the perspective of operations staff:
1. Which KPIs should be displayed?
2. Do the charts need to be linked?
3. Which columns should be shown in drilldown details?
4. How should JS blocks and chart events be organized?
5. Which code should be placed in the chart custom option, and which code should be placed in the JS block?
```

This helps the AI generate content that is closer to real business scenarios instead of isolated code snippets.

If you choose to let AI help you build, back up the project with Backup Manager before you start.

## Reference Documentation

- [Chart configuration](https://docs.nocobase.com/cn/data-visualization/guide/chart-options)
- [Frontend RunJS](https://docs.nocobase.com/cn/runjs)
- [Filter form](https://docs.nocobase.com/cn/interface-builder/blocks/filter-blocks/form)
- [AI Builder - UI Builder](https://docs.nocobase.com/cn/ai-builder/ui-builder)
- [ECharts Options](https://echarts.apache.org/en/option.html)
