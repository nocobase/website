### 🎉 New Features

- **[client]** Add app.getHref() method ([#6019](https://github.com/nocobase/nocobase/pull/6019)) by @chenos

### 🚀 Improvements

- **[client]**
  - Allow to sort workflows when binding to action button ([#6017](https://github.com/nocobase/nocobase/pull/6017)) by @mytharcher

  - Change reference links of evaluators to doc site ([#6021](https://github.com/nocobase/nocobase/pull/6021)) by @mytharcher

  - support maxTagCount: 'responsive' in multi-select dropdown component ([#6007](https://github.com/nocobase/nocobase/pull/6007)) by @katherinehhh

  - Set default end time for time scope component in filter block to 23:59:59" ([#6012](https://github.com/nocobase/nocobase/pull/6012)) by @katherinehhh

- **[Action: Batch edit]** Refactor bulk edit form submit button: remove field assignment and linkage rule ([#6008](https://github.com/nocobase/nocobase/pull/6008)) by @katherinehhh

### 🐛 Bug Fixes

- **[client]**
  - Fix required validation not working after deleting data in rich text editor ([#6006](https://github.com/nocobase/nocobase/pull/6006)) by @katherinehhh

  - Fix misalignment issue when action column buttons are hidden ([#6014](https://github.com/nocobase/nocobase/pull/6014)) by @katherinehhh

  - Fix Create Collections button issue on clicking Collections tab in REST API page ([#5992](https://github.com/nocobase/nocobase/pull/5992)) by @katherinehhh

  - Fix  resolve issue where targetKey can't select NanoID field in one-to-many ([#5999](https://github.com/nocobase/nocobase/pull/5999)) by @katherinehhh

  - Fix style of setting button in compact theme ([#6001](https://github.com/nocobase/nocobase/pull/6001)) by @katherinehhh

  - Fix list component style ([#5998](https://github.com/nocobase/nocobase/pull/5998)) by @mytharcher

  - Fixed the issue where headers included in client requests were being overwritten ([#6009](https://github.com/nocobase/nocobase/pull/6009)) by @2013xile

  - Fix foreignKey, targetKey, and sourceKey  should support filtering by Chinese characters ([#5997](https://github.com/nocobase/nocobase/pull/5997)) by @katherinehhh

- **[Action: Import records]** fix import with belongs to many associations that use different target key ([#6024](https://github.com/nocobase/nocobase/pull/6024)) by @chareice

- **[Block: Map]** Fix map field in detail block should  render as map block ([#6010](https://github.com/nocobase/nocobase/pull/6010)) by @katherinehhh

- **[Embed NocoBase]** The token for embed conflicts with auth by @chenos

