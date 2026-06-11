### 🎉 New Features

- **[client-v2]** Support scan input for text fields ([#9599](https://github.com/nocobase/nocobase/pull/9599)) by @katherinehhh
- **[undefined]** Added top-level proxy commands for nginx and caddy ([#9721](https://github.com/nocobase/nocobase/pull/9721)) by @chenos
- **[Async task manager]** Added v2 client support for the async task manager topbar action. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) by @jiannx
- **[Backup manager]**

  - Added v2 client runtime support for the backup manager plugin. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) by @katherinehhh
  - Adapted to the new version control plugin ([#9563](https://github.com/nocobase/nocobase/pull/9563)) by @cgyrock
- **[Data source: External NocoBase]** Added a data source plugin: external NocoBase by @2013xile
- **[Version control]** Added version control plugin by @cgyrock

### 🚀 Improvements

- **[client-v2]**

  - Added support for disabling multiple selection in v2 popup select association fields. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) by @katherinehhh
  - Improved v2 block rendering when a configured external data source is disabled, preventing render errors and showing a clearer UI Editor placeholder. ([#9699](https://github.com/nocobase/nocobase/pull/9699)) by @katherinehhh
- **[Variables and secrets]** Environment variables (`$env`) can now be selected by flow-engine-based variable pickers in the v1 runtime. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) by @Molunerfinn
- **[File manager]** Added internal upload `subPath` support for file manager. ([#9731](https://github.com/nocobase/nocobase/pull/9731)) by @mytharcher
- **[Data source manager]** Added client-v2 data source permission management and aligned related permission picker drawers. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) by @jiannx
- **[Collection: Connect to foreign data (FDW)]** Improved V2 collection template parity for SQL collections and foreign data collections, including SQL confirmation, foreign database server management, and template ordering. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) by @katherinehhh
- **[Template print]** Updated print template collection metadata for version-control backup classification. by @cgyrock
- **[Record history]** Updated record history collection metadata for version-control backup classification. by @cgyrock
- **[Workflow: Approval]** Updated workflow approval collection metadata for version-control backup classification. by @cgyrock
- **[Audit logs]** Updated audit log collection metadata for version-control backup classification. by @cgyrock
- **[Email manager]** Updated email manager collection metadata for version-control backup classification. by @cgyrock
- **[App supervisor]** Updated app supervisor collection metadata for version-control backup classification. by @cgyrock

### 🐛 Bug Fixes

- **[database]** Fixed password fields not being hashed during bulk updates. ([#9736](https://github.com/nocobase/nocobase/pull/9736)) by @mytharcher
- **[client]** Fixed popup subtable row actions hiding the whole subtable field when the action is hidden by linkage rules ([#9717](https://github.com/nocobase/nocobase/pull/9717)) by @katherinehhh
- **[client-v2]**

  - Fixed JSON fields in client v2 display views rendering blank cells for object values. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) by @katherinehhh
  - Fixed V2 option fields incorrectly translating plain option labels in localized environments. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) by @katherinehhh
- **[Block: Map]**

  - Fixed the unavailable DrawingManager issue in the v1 Google Maps block ([#9735](https://github.com/nocobase/nocobase/pull/9735)) by @katherinehhh
  - Fixed map geometry fields missing from the v2 data source manager add-field menu after enabling the map plugin. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) by @katherinehhh
- **[Calendar]** Fixed an issue where Details and Edit blocks could not be added in v2 calendar block detail drawers ([#9729](https://github.com/nocobase/nocobase/pull/9729)) by @jiannx
- **[Data source manager]**

  - Fixed stale title field display when reopening the v2 data source field configuration drawer after changing the title field. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) by @katherinehhh
  - Improved V2 data source manager error messages when collection, field, sync, and table-loading operations fail. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) by @katherinehhh
- **[AI employees]**

  - Improved AI employee data-query prompts to load the required skill before using query tools. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) by @cgyrock
  - Fixed the missing Dara assistant button in client-v2 chart settings. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) by @cgyrock
- **[Block: List]** Fixed stale row action linkage state in list blocks when actions depend on the current record. ([#9716](https://github.com/nocobase/nocobase/pull/9716)) by @katherinehhh
- **[Error handler]** Reduced noisy error logs for normal unauthenticated requests without a token ([#9718](https://github.com/nocobase/nocobase/pull/9718)) by @2013xile
- **[Action: Import records Pro]** Fixed garbled text when importing XLSX files with UTF-8 shared strings split across streaming chunks. by @mytharcher
- **[AI: Knowledge base]** Fixed missing paths in S3 knowledge base file URLs. by @cgyrock
- **[Record history]** Fixed missing record history for external data source changes by @2013xile
