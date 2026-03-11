### 🚀 Improvements

- **[Migration manager]** Improved migration checks, SQL download support, log formatting, and execution process visibility by @cgyrock

### 🐛 Bug Fixes

- **[client]**
  - Fix the issue where custom fields in Filter form Field values cannot render the correct value input type ([#8823](https://github.com/nocobase/nocobase/pull/8823)) by @zhangzhonghe

  - Fix the issue where the v2 filter form collapse button stops working after sorting fields ([#8843](https://github.com/nocobase/nocobase/pull/8843)) by @zhangzhonghe

  - Fixed the issue where the reference template (v1) management page was missing filter and refresh action. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) by @gchust

  - sub form & sub table data not displayed due to permission check ([#8846](https://github.com/nocobase/nocobase/pull/8846)) by @chenos

- **[Access control]** use collection.filterTargetKey instead of Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) by @chenos

- **[UI templates]**
  - Fixed the render error for action panel reference block. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) by @gchust

  - Fixed the issue where association records could not be loaded correctly after saving the details block as template. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) by @gchust

- **[Workflow: Approval]**
  - Fix the issue where assignees not follow the order configured in the node by @mytharcher

  - Fix untranslated labels in approval processing details by @zhangzhonghe

- **[Migration manager]**
  - Fix build error by @mytharcher

  - Fix missing migration description and set the current time as the default by @cgyrock

  - Fixed a potential process freeze caused by logging excessively large SQL statements included in migration error exceptions by @cgyrock

  - Adjust temporary directory into storage, to support usage under cluster mode by @mytharcher

