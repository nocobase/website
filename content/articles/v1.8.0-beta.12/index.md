### 🚀 Improvements

- **[database]** Support to add pool options from env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) by @mytharcher

- **[Workflow]**
  - Improve executions list load performance by excepting JSON field ([#7138](https://github.com/nocobase/nocobase/pull/7138)) by @mytharcher

  - Add log API for node testing ([#7129](https://github.com/nocobase/nocobase/pull/7129)) by @mytharcher

- **[Multi-app manager]** add filter support to multi-app management ([#7124](https://github.com/nocobase/nocobase/pull/7124)) by @katherinehhh

- **[Workflow: Approval]** Change time to absolute in timeline by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - markdown did not reflect changes in real-time when referencing $nForm variables ([#7147](https://github.com/nocobase/nocobase/pull/7147)) by @katherinehhh

  - background color style issue  in subtable on detail block ([#7144](https://github.com/nocobase/nocobase/pull/7144)) by @katherinehhh

  - Workflow manual node UI configuration: linkage rules cannot select Current form variables ([#7125](https://github.com/nocobase/nocobase/pull/7125)) by @zhangzhonghe

  - Setting field displayName in connected view had no effect ([#7130](https://github.com/nocobase/nocobase/pull/7130)) by @aaaaaajie

  - association field default value overrides existing data in sub-table ([#7120](https://github.com/nocobase/nocobase/pull/7120)) by @katherinehhh

  - Fault tolerance for settings based on 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) by @mytharcher

- **[utils]** filtering issue on DateOnly or Datetime (without time zone) using Exact day variable ([#7113](https://github.com/nocobase/nocobase/pull/7113)) by @katherinehhh

- **[Workflow]** Fix error thrown by cycling import ([#7134](https://github.com/nocobase/nocobase/pull/7134)) by @mytharcher

- **[Password policy]** Support permanently locking user accounts by @2013xile

- **[Workflow: Subflow]** Fix issue in cluster mode by @mytharcher

- **[Workflow: Approval]**
  - Remove non-filterable fields from filter by @mytharcher

  - Add form layout settings by @mytharcher

