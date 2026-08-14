### 🚀 Improvements

- **[Block: Tree]** Tree filter blocks now support configurable default sorting. ([#10339](https://github.com/nocobase/nocobase/pull/10339)) by @jiannx

### 🐛 Bug Fixes

- **[client-v2]**
  - Fix filter forms refreshing automatically in UI edit mode ([#10356](https://github.com/nocobase/nocobase/pull/10356)) by @zhangzhonghe

  - Use Cascader by default for tree-structured relation fields in v2 filter forms ([#10357](https://github.com/nocobase/nocobase/pull/10357)) by @zhangzhonghe

  - Fix mobile single-select relation fields not clearing when the selected record is tapped again ([#10346](https://github.com/nocobase/nocobase/pull/10346)) by @zhangzhonghe

  - Fix the issue where China region fields cannot be added directly to filter forms ([#10333](https://github.com/nocobase/nocobase/pull/10333)) by @zhangzhonghe

  - Fix JS items incorrectly appearing in form field linkage rule actions ([#10363](https://github.com/nocobase/nocobase/pull/10363)) by @gchust

- **[Workflow: JSON calculation]** Fixed JSON Query jobs losing structured parser errors and displaying `[object Object]` ([#10344](https://github.com/nocobase/nocobase/pull/10344)) by @mytharcher

- **[Action: Export records]**
  - Fixed a page crash when sorting an edited relation field in Export V2. ([#10335](https://github.com/nocobase/nocobase/pull/10335)) by @katherinehhh

  - Fix table export errors after filtering by multiple relation fields ([#10342](https://github.com/nocobase/nocobase/pull/10342)) by @zhangzhonghe

- **[Block: Kanban]** Fixed configured content disappearing after reopening a kanban card's detail drawer ([#10334](https://github.com/nocobase/nocobase/pull/10334)) by @jiannx

- **[File manager]** Fixed video previews not updating when switching between files ([#10345](https://github.com/nocobase/nocobase/pull/10345)) by @mytharcher

- **[Action: Import records Pro]**
  - Fixed asynchronously imported records not being associated with the current space by @jiannx

  - Clarified import results by showing the number of newly created records separately from updated records by @mytharcher

- **[Workflow: Approval]**
  - Fix inconsistent subtable column widths in approval details by @zhangzhonghe

  - Add data scope filtering to Client V2 related approval blocks by @zhangzhonghe

