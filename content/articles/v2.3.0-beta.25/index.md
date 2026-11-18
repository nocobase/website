### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed hasMany record deletion when the target collection uses multiple record identifier fields, including bulk deletion in v1 and v2. ([#11423](https://github.com/nocobase/nocobase/pull/11423))

  - Fixed the sidebar collapse button covering links in the app switcher. ([#11546](https://github.com/nocobase/nocobase/pull/11546))

- **[UI templates]** Creating, editing, or deleting UI templates and accessing template usage records now require the template management permission. Signed-in users can still read templates. ([#11537](https://github.com/nocobase/nocobase/pull/11537))

- **[Block: template (deprecated)]** Saving a legacy block template layout now requires permission to configure the interface. ([#11538](https://github.com/nocobase/nocobase/pull/11538))

- **[Workflow: Loop node]** Fixed scope variables being unavailable when configuring conditions on top-level loops. ([#11583](https://github.com/nocobase/nocobase/pull/11583))

- **[Backup manager]** PostgreSQL backups created with a newer pg_dump major version are now rejected before restoration when the installed pg_restore is older. ([#11585](https://github.com/nocobase/nocobase/pull/11585))

- **[Data source: Main]** Fixed field synchronization for tables loaded from the main database and preserved existing field metadata when imported physical table names include the configured prefix ([#11327](https://github.com/nocobase/nocobase/pull/11327))

- **[Workflow]** Fixed a crash when configuring nodes such as Webhook responses inside loops in the V1 workflow editor. ([#11581](https://github.com/nocobase/nocobase/pull/11581))

- **[Public forms]** Public forms now accept submissions only for their configured data source and collection. ([#11536](https://github.com/nocobase/nocobase/pull/11536))

- **[Multi-space]** Fixed images and file previews returning 404 when opened from records in the selected space.

- **[Migration manager]** Fixed PostgreSQL migrations losing lines that begin with `--` in multiline fields, changing line endings, or failing to restore the exported data.

- **[Data source: External Oracle]** Oracle Thin now lists tables from the configured schema, flags previously selected tables that are unavailable, and reports an error when a newly selected table is unavailable.

