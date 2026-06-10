### 🎉 New Features

- **[undefined]** Added top-level proxy commands for nginx and caddy. ([#9721](https://github.com/nocobase/nocobase/pull/9721)) by @chenos
- **[Backup manager]** Adapted to the new version control plugin. ([#9563](https://github.com/nocobase/nocobase/pull/9563)) by @cgyrock
- **[Version control]** Added version control plugin. by @cgyrock

### 🚀 Improvements

- **[Data source manager]** Added client-v2 data source permission management and aligned related permission picker drawers. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) by @jiannx
- **[Collection: Connect to foreign data (FDW)]** Improved V2 collection template parity for SQL collections and foreign data collections, including SQL confirmation, foreign database server management, and template ordering. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) by @katherinehhh
- **[Template print]** Updated print template collection metadata for version-control backup classification. by @cgyrock
- **[Record history]** Updated record history collection metadata for version-control backup classification. by @cgyrock
- **[Workflow: Approval]** Updated workflow approval collection metadata for version-control backup classification. by @cgyrock
- **[Audit logs]** Updated audit logger collection metadata for version-control backup classification. by @cgyrock
- **[Email manager]** Updated email manager collection metadata for version-control backup classification. by @cgyrock
- **[App supervisor]** Updated app supervisor collection metadata for version-control backup classification. by @cgyrock

### 🐛 Bug Fixes

- **[client-v2]**

  - Fixed JSON fields displaying blank cells for object values in client-v2 detail views. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) by @katherinehhh
  - Fixed option fields incorrectly translating plain option labels in localized environments. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) by @katherinehhh
- **[Error handler]** Reduced noisy error logs for routine unauthenticated requests without a token. ([#9718](https://github.com/nocobase/nocobase/pull/9718)) by @2013xile
- **[Block: List]** Fixed stale row action linkage state in list blocks when actions depend on the current record. ([#9716](https://github.com/nocobase/nocobase/pull/9716)) by @katherinehhh
- **[Data source manager]** Improved error messages in V2 data source manager when collection, field, sync, and table-loading operations fail. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) by @katherinehhh
- **[AI employees]** Fixed a missing Dara assistant button in client-v2 chart settings. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) by @cgyrock
- **[AI: Knowledge base]** Fixed missing paths in S3 knowledge base file URLs. by @cgyrock
- **[Action: Import records Pro]** Fixed garbled text when importing XLSX files with UTF-8 shared strings split across streaming chunks. by @mytharcher
- **[Record history]** Fixed missing record history for external data source changes. by @2013xile
