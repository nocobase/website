NocoBase 2.0 is a major upgrade focused on **building complex applications and scaling deployments**. This release brings systematic improvements to AI capabilities, application architecture, data editing experience, and frontend event flow, along with full adaptation of V2 pages and core features.

## New Features

### AI Employees

AI capabilities are now built into the core as a first-class citizen, with extensibility through the plugin system:

- AI moved to the core with plugin-based extensibility
- Upgraded and optimized LangChain dependencies for better stability and scalability
- Simplified AI employee interaction flow, lowering configuration and usage barriers

![20260214075059](https://static-docs.nocobase.com/20260214075059.png)

Reference:

- [AI Employees](https://v2.docs.nocobase.com/en/ai-employees)

### App Supervisor

The App Supervisor plugin provides **unified discovery, scheduling, and management of multiple NocoBase application instances**, suitable for multi-app and multi-environment deployment scenarios.

- Application auto-discovery and centralized management
- Shared memory mechanism for improved inter-instance collaboration
- Multi-environment hybrid deployment for complex delivery requirements

Shared Memory

![20260214075803](https://static-docs.nocobase.com/20260214075803.png)

Multi-Environment Hybrid Deployment

![20260214075815](https://static-docs.nocobase.com/20260214075815.png)

Reference:

- [Multi-App Management](https://v2.docs.nocobase.com/en/multi-app/multi-app)

### Sub-table (Inline Edit / Popup Edit)

To meet different levels of complexity in related data editing, NocoBase offers two sub-table edit modes that can be chosen flexibly based on your scenario:

- **Sub-table (Inline Edit)**: Edit related data directly in the table for efficient operations, ideal for quick data entry and batch updates
- **Sub-table (Popup Edit)**: Edit data via popup forms with support for more complex field types and validation logic, suitable for high-complexity scenarios

Sub-table (Inline Edit)

![20260214080224](https://static-docs.nocobase.com/20260214080224.png)

Sub-table (Popup Edit)

![20260214080233](https://static-docs.nocobase.com/20260214080233.png)

Reference:

- [Sub-table (Inline Edit)](https://v2.docs.nocobase.com/en/interface-builder/fields/specific/sub-table)
- [Sub-table (Popup Edit)](https://v2.docs.nocobase.com/en/interface-builder/fields/specific/sub-table-popup)

### Field Assignment (New)

The new field assignment mechanism unifies and strengthens **initialization and write logic** for form data, significantly improving clarity and consistency:

- **Unified** field assignment configuration entry, reducing the cognitive overhead of scattered configuration
- Field assignment logic **no longer depends on field component type**, making data behavior more stable and predictable
- Support for **field-level assignment on relation fields**, meeting complex association modeling needs
- Both **default value** and **fixed value** assignment modes, covering initialization and forced write scenarios
- Legacy "field default value" is deprecated; please migrate to the new field assignment mechanism

![20260214080932](https://static-docs.nocobase.com/20260214080932.png)

Reference:

- Field Assignment (documentation coming soon)

### Event Flow Execution Order

Event flow runs strictly in the **Event → Flow → Step** hierarchy, with corresponding hooks triggered before and after each level for fine-grained control and extension.

```yml
event:
  before:
    - track_event_start
  flows:
    - name: flow1
      before:
        - track_flow_start
      steps:
        - name: step1
          before: [track_step_start]
          run: do_something
          after: [track_step_done]
      after:
        - track_flow_end
    - name: flow2
      ...
    - name: flow3
      ...
  after:
    - track_event_end
```

![20260214081527](https://static-docs.nocobase.com/20260214081527.png)

Reference:

- [Event Flow](https://v2.docs.nocobase.com/en/interface-builder/event-flow)

## 2.0 Adaptations

### Bulk Edit

![20260214083041](https://static-docs.nocobase.com/20260214083041.png)

Reference:

- [Bulk Edit](https://v2.docs.nocobase.com/en/interface-builder/actions/types/bulk-edit)

### Duplicate

![20260214083146](https://static-docs.nocobase.com/20260214083146.png)

Reference:

- [Duplicate](https://v2.docs.nocobase.com/en/interface-builder/actions/types/duplicate)

### Block Height

![20260214083319](https://static-docs.nocobase.com/20260214083319.png)

Reference:

- [Block Height](https://v2.docs.nocobase.com/en/interface-builder/blocks/block-settings/block-height)

### Table Row Drag-and-Drop Sort

![20260214085152](https://static-docs.nocobase.com/20260214085152.png)

### Data Loading Method

![20260214083433](https://static-docs.nocobase.com/20260214083433.png)

Reference:

- [Data Loading Method](https://v2.docs.nocobase.com/en/interface-builder/blocks/block-settings/data-loading-method)

### Displaying Relation Fields in Forms

![20260214083517](https://static-docs.nocobase.com/20260214083517.png)

Reference:

- [Form](https://v2.docs.nocobase.com/en/interface-builder/blocks/data-blocks/form)

### Page (V2) Localization Support

V2 pages now fully support localization across **pages, blocks, actions, and fields**.

After enabling the localization plugin, the system automatically collects missing translation entries and displays them in the localization management list for unified maintenance.

In JS blocks, use `ctx.t()` to retrieve localized text with variable interpolation:

```js
const label = ctx.t('Your name is {{name}}', {
  name: await ctx.getVar('ctx.user.nickname')
});
ctx.render(label);
```

### Approval 2.0

Reference:

- [Approval](https://v2.docs.nocobase.com/en/workflow/nodes/approval)

### CC (Carbon Copy) 2.0

Reference:

- [CC](https://v2.docs.nocobase.com/en/workflow/nodes/cc)

### Office File Preview

Reference:

- [Office File Preview](https://v2.docs.nocobase.com/en/file-manager/file-preview/ms-office)

## Not Yet Adapted

The following features are not yet adapted in 2.0 and will be upgraded in future releases:

| Feature | Current Alternative |
| ------------------ | -------------- |
| Custom Request | Workflow Request Node |
| Browser Print | JS Action |
| Step Form | JS Block |
| Tree Filter Block | JS Block |
| Calendar Block | JS Block |
| Custom Variable | Event Flow |
| Gantt Block | JS Block |
| Kanban Block | JS Block |
| Text Copy | Event Flow |
| Table Column Settings | JS Action |
| Style Linkage Rules | Event Flow |
| Copy Text Shortcut | Event Flow |
| QR Code Field | JS Field |
| Scan to Input | Event Flow |
| Embed NocoBase | — |
| China Administrative Region Field | — |
| Code Field | — |
| Public Form | — |
| Workflow Manual Node Todo | — |
| After Submit Success | Event Flow |
| Form Data Template | Event Flow |



