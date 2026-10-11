### 🚀 Improvements

- **[undefined]**
  - V3 workflow entry filenames now use a consistent v3- prefix with documented cross-branch synchronization rules. ([#10590](https://github.com/nocobase/nocobase/pull/10590)) by @Molunerfinn

  - Added manual Actions entry points for the workflows on NocoBase 3's isolated branches. ([#10587](https://github.com/nocobase/nocobase/pull/10587)) by @Molunerfinn

### 🐛 Bug Fixes

- **[database]** Fixed a GROUP BY error on PostgreSQL when filtering by a to-many relation field and sorting by a root field on tables without a primary key constraint ([#10582](https://github.com/nocobase/nocobase/pull/10582)) by @cgyrock

- **[client]** Fix the issue where block settings disappear in UI Editor mode after the browser window is narrowed and then widened again ([#10583](https://github.com/nocobase/nocobase/pull/10583)) by @zhangzhonghe

- **[undefined]** Preserved nightly PostgreSQL and MySQL checks after moving NocoBase 3 to its dedicated branches. ([#10589](https://github.com/nocobase/nocobase/pull/10589)) by @Molunerfinn

- **[Workflow: Aggregate node]** Fixed aggregate fields disappearing when reopening workflow Aggregate nodes with associated collections, and reduced unnecessary relation traversal when restoring saved field selections. ([#10578](https://github.com/nocobase/nocobase/pull/10578)) by @mytharcher

- **[Collection field: Many to many (array)]** Fix the issue where relation fields created in the v2 data source manager could not be configured in blocks ([#10581](https://github.com/nocobase/nocobase/pull/10581)) by @zhangzhonghe

- **[File manager]** Fixed attachment uploads falling back to default storage by preserving direct-upload field parameters in main and sub-applications and honoring field storage for custom file collections. ([#10577](https://github.com/nocobase/nocobase/pull/10577)) by @mytharcher

