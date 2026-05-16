### 🎉 New Features

- **[Block: Markdown]** Added client v2 support for Markdown blocks ([#9487](https://github.com/nocobase/nocobase/pull/9487)) by @jiannx

- **[Block: List]** List blocks support client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) by @jiannx

### 🚀 Improvements

- **[flow-engine]** Added an unsaved changes confirm message when closing the event flow configuration page with unsaved data present. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust

- **[cli]** Improved the NocoBase CLI prompt experience by migrating setup and management workflows to Inquirer, and fixed related install, skills, and Docker runtime issues. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) by @chenos

- **[Data source manager]** Optimize the data modeling API to support creating comment collections with AI, configuring relationship fields for external data sources, and setting field validation rules ([#9480](https://github.com/nocobase/nocobase/pull/9480)) by @2013xile

- **[Block: GridCard]** Updated grid card plugin to support client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) by @jiannx

- **[Block: iframe]** Added v2 support for the iframe block. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) by @jiannx

### 🐛 Bug Fixes

- **[client]**
  - Fixed display-only relation fields in sub-tables not showing or not clickable after refresh. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx

  - Added the "After successful submission" setting for form submit actions. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) by @jiannx

- **[client-v2]** Fix issue where the title field option list is empty for relation fields in table blocks ([#9490](https://github.com/nocobase/nocobase/pull/9490)) by @katherinehhh

- **[flow-engine]** Fixed unstable relation-field submenus in submodel menus ([#9417](https://github.com/nocobase/nocobase/pull/9417)) by @jiannx

- **[File manager]** Fix file manager `tx-cos` uploads missing file size metadata. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher

- **[Collection field: Signature]** Resolve signature box display issue on mobile by @chenzhizdt

