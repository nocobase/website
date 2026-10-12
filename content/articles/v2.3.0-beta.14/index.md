### 🚀 Improvements

- **[undefined]**
  - V3 workflow entry filenames now use a consistent v3- prefix with documented cross-branch synchronization rules. ([#10590](https://github.com/nocobase/nocobase/pull/10590)) by @Molunerfinn

  - Added manual Actions entry points for the workflows on NocoBase 3's isolated branches. ([#10587](https://github.com/nocobase/nocobase/pull/10587)) by @Molunerfinn

### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed empty JS action items becoming inaccessible in the UI editor. ([#10573](https://github.com/nocobase/nocobase/pull/10573)) by @gchust

  - Fixed empty JS blocks becoming inaccessible in the UI Editor after disabling the block card. ([#10563](https://github.com/nocobase/nocobase/pull/10563)) by @gchust

- **[database]** Fixed a GROUP BY error on PostgreSQL when filtering by a to-many relation field and sorting by a root field on tables without a primary key constraint ([#10582](https://github.com/nocobase/nocobase/pull/10582)) by @cgyrock

- **[undefined]** Preserved nightly PostgreSQL and MySQL checks after moving NocoBase 3 to its dedicated branches. ([#10589](https://github.com/nocobase/nocobase/pull/10589)) by @Molunerfinn

- **[client]** Fix the issue where block settings disappear in UI Editor mode after the browser window is narrowed and then widened again ([#10583](https://github.com/nocobase/nocobase/pull/10583)) by @zhangzhonghe

- **[sdk]** Upgraded axios to 1.20.0 ([#10566](https://github.com/nocobase/nocobase/pull/10566)) by @2013xile

- **[File manager]** Fixed attachment uploads falling back to default storage by preserving direct-upload field parameters in main and sub-applications and honoring field storage for custom file collections. ([#10577](https://github.com/nocobase/nocobase/pull/10577)) by @mytharcher

- **[Workflow: Aggregate node]** Fixed aggregate fields disappearing when reopening workflow Aggregate nodes with associated collections, and reduced unnecessary relation traversal when restoring saved field selections. ([#10578](https://github.com/nocobase/nocobase/pull/10578)) by @mytharcher

- **[Collection field: Many to many (array)]** Fix the issue where relation fields created in the v2 data source manager could not be configured in blocks ([#10581](https://github.com/nocobase/nocobase/pull/10581)) by @zhangzhonghe

- **[UI layout]** Fixed missing popup template options in action settings in the new client. ([#10574](https://github.com/nocobase/nocobase/pull/10574)) by @gchust

- **[UI templates]** Fixed the internal template collection appearing in block collection choices after deleting a UI template. ([#10561](https://github.com/nocobase/nocobase/pull/10561)) by @gchust

- **[Notification: Email]** Upgraded nodemailer, hono and moment to patched versions. ([#10569](https://github.com/nocobase/nocobase/pull/10569)) by @2013xile

- **[Block: Kanban]** Fixed Kanban layout flicker when adding an AI employee action. ([#10553](https://github.com/nocobase/nocobase/pull/10553)) by @jiannx

- **[Data source: External NocoBase]** Fixed the type build failure caused by the axios 1.20.0 upgrade by @2013xile

- **[Workflow: Approval]** Fix the issue where hidden field labels reappear and field values are empty in submitted approval details by @zhangzhonghe

- **[Data source: External Oracle]** Fixed a type error surfaced by the axios 1.20.0 upgrade by @2013xile

