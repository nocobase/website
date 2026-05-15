### 🎉 New Features

- **[Block: Markdown]** Added client v2 support for Markdown blocks ([#9487](https://github.com/nocobase/nocobase/pull/9487)) by @jiannx

- **[Block: List]** List blocks support client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) by @jiannx

- **[Calendar]** Added client v2 support for the Calendar plugin. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) by @jiannx

- **[Block: Tree]** Added client-v2 support for the tree filter block. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) by @jiannx

### 🚀 Improvements

- **[flow-engine]** Added an unsaved changes confirm message when closing the event flow configuration page with unsaved data present. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust

- **[Data source manager]** Optimize the data modeling API to support creating comment collections with AI, configuring relationship fields for external data sources, and setting field validation rules ([#9480](https://github.com/nocobase/nocobase/pull/9480)) by @2013xile

- **[Block: GridCard]** Updated grid card plugin to support client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) by @jiannx

- **[Block: iframe]** Added v2 support for the iframe block. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) by @jiannx

- **[AI employees]** AI employee parallel conversation Interaction and performance optimization ([#9462](https://github.com/nocobase/nocobase/pull/9462)) by @cgyrock

### 🐛 Bug Fixes

- **[client]**
  - Added the "After successful submission" setting for form submit actions. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) by @jiannx

  - fix prevent opening quick edit for association fields in table ([#9469](https://github.com/nocobase/nocobase/pull/9469)) by @katherinehhh

  - Fixed display-only relation fields in sub-tables not showing or not clickable after refresh. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx

  - Fixed the issue where legacy default value settings can't be removed. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) by @gchust

  - fix multiple select fields in v2 data blocks should display option labels instead of values ([#9472](https://github.com/nocobase/nocobase/pull/9472)) by @katherinehhh

- **[client-v2]**
  - Fix issue where the title field option list is empty for relation fields in table blocks ([#9490](https://github.com/nocobase/nocobase/pull/9490)) by @katherinehhh

  - Keep empty groups after filtering v1 menus in the v2 layout ([#9478](https://github.com/nocobase/nocobase/pull/9478)) by @zhangzhonghe

- **[flow-engine]** Fixed unstable relation-field submenus in submodel menus ([#9417](https://github.com/nocobase/nocobase/pull/9417)) by @jiannx

- **[File manager]** Fix file manager `tx-cos` uploads missing file size metadata. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher

- **[AI employees]** Fixed plugin-ai load error ([#9483](https://github.com/nocobase/nocobase/pull/9483)) by @cgyrock

- **[Block: Multi-step form]** fix  scrollbar issue when enabling full-height in v1 step form block ([#9468](https://github.com/nocobase/nocobase/pull/9468)) by @katherinehhh

- **[Workflow: Webhook]** Fix the issue where creating response node intercepted by validation of `statusCode` configuration by @mytharcher

- **[Collection field: Signature]** Resolve signature box display issue on mobile by @chenzhizdt

