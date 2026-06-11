### 🎉 New Features

- **[client-v2]** Support scan input for text fields ([#9599](https://github.com/nocobase/nocobase/pull/9599)) by @katherinehhh
- **[Async task manager]** Added v2 client support for the async task manager topbar action. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) by @jiannx
- **[Backup manager]** Added v2 client runtime support for the backup manager plugin. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) by @katherinehhh
- **[Data source: External NocoBase]** Added a data source plugin: external NocoBase by @2013xile

### 🚀 Improvements

- **[client-v2]** Added support for disabling multiple selection in v2 popup select association fields. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) by @katherinehhh
- **[File manager]** Added internal upload `subPath` support for file manager. ([#9731](https://github.com/nocobase/nocobase/pull/9731)) by @mytharcher
- **[Variables and secrets]** Environment variables (`$env`) can now be selected by flow-engine-based variable pickers in the v1 runtime. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) by @Molunerfinn

### 🐛 Bug Fixes

- **[database]** Fixed password fields not being hashed during bulk updates. ([#9736](https://github.com/nocobase/nocobase/pull/9736)) by @mytharcher
- **[client]** Fixed popup subtable row actions hiding the whole subtable field when the action is hidden by linkage rules ([#9717](https://github.com/nocobase/nocobase/pull/9717)) by @katherinehhh
- **[AI employees]** Improved AI employee data-query prompts to load the required skill before using query tools. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) by @cgyrock
- **[Data source manager]** Fixed stale title field display when reopening the v2 data source field configuration drawer after changing the title field. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) by @katherinehhh
- **[Block: Map]**

  - Fixed map geometry fields missing from the v2 data source manager add-field menu after enabling the map plugin. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) by @katherinehhh
  - Fixed the unavailable DrawingManager issue in the v1 Google Maps block ([#9735](https://github.com/nocobase/nocobase/pull/9735)) by @katherinehhh
- **[Calendar]** Fixed an issue where Details and Edit blocks could not be added in v2 calendar block detail drawers ([#9729](https://github.com/nocobase/nocobase/pull/9729)) by @jiannx
