### 🚀 Improvements

- **[client-v2]** Reduced the spacing between fields in horizontal mobile details blocks. ([#11644](https://github.com/nocobase/nocobase/pull/11644))

- **[undefined]** NocoBase Docker images with built-in Nginx now include Nginx 1.30.7. ([#11620](https://github.com/nocobase/nocobase/pull/11620))

- **[AI employees]**
  - Hid Datasource from AI employee settings and the chat context menu. ([#11621](https://github.com/nocobase/nocobase/pull/11621))

  - Server logs now include nested stack frames to help diagnose range errors in AI employee conversations. ([#11640](https://github.com/nocobase/nocobase/pull/11640))

### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed blocks disappearing after reload when UI Editor is enabled on a modern page first opened in browse mode. ([#11672](https://github.com/nocobase/nocobase/pull/11672))

  - Reduced spacing for single-line and multiline read-only fields in horizontal details blocks and grid cards on narrow mobile screens. ([#11673](https://github.com/nocobase/nocobase/pull/11673))

  - Fixed hasMany record deletion when the target collection uses multiple record identifier fields, including bulk deletion in v1 and v2. ([#11423](https://github.com/nocobase/nocobase/pull/11423))

  - Fixed the sidebar collapse button covering links in the app switcher. ([#11546](https://github.com/nocobase/nocobase/pull/11546))

- **[cli]** You can now list records in a single space with `nb api resource list --space <name>`. ([#11599](https://github.com/nocobase/nocobase/pull/11599))
Reference: [Resource list](https://github.com/nocobase/nocobase/pull/11615)
- **[client]** Newly created aggregate variables can be selected and inserted in the same legacy iframe HTML editor dialog. ([#11607](https://github.com/nocobase/nocobase/pull/11607))

- **[Error handler]** Duplicate and not-null field messages now include the collection title when available, including when saving related records. ([#11638](https://github.com/nocobase/nocobase/pull/11638))

- **[Custom variables]** Fixed an issue that prevented typing in long-text filter fields when configuring an aggregate variable for a badge. ([#11688](https://github.com/nocobase/nocobase/pull/11688))

- **[File manager]**
  - Expanded file storage records retain ordinary fields such as file rules and base URLs while hiding engine options and server-side request settings. ([#11611](https://github.com/nocobase/nocobase/pull/11611))

  - Fixed an error when refreshing an external data source or reading records with unrelated associations. ([#11698](https://github.com/nocobase/nocobase/pull/11698))

- **[Form drafts]**
  - Forms now show a warning and remain available for editing and submission when the browser cannot open draft storage. ([#11625](https://github.com/nocobase/nocobase/pull/11625))

  - Forms can now be opened, edited and submitted when the browser fails to read or save a local draft. ([#11671](https://github.com/nocobase/nocobase/pull/11671))

- **[UI templates]** Creating, editing, or deleting UI templates and accessing template usage records now require the template management permission. Signed-in users can still read templates. ([#11537](https://github.com/nocobase/nocobase/pull/11537))

- **[Notification: In-app message]** Fixed an issue where opening a channel in the mobile inbox could show messages from another channel. ([#11662](https://github.com/nocobase/nocobase/pull/11662))

- **[Public forms]** Public forms now accept submissions only for their configured data source and collection. ([#11536](https://github.com/nocobase/nocobase/pull/11536))

- **[AI employees]** Fixed unnecessary AI employee and unread-count requests on sign-in and two-factor verification pages. ([#11691](https://github.com/nocobase/nocobase/pull/11691))

- **[Workflow]** Fixed a crash when configuring nodes such as Webhook responses inside loops in the V1 workflow editor. ([#11581](https://github.com/nocobase/nocobase/pull/11581))

- **[Data source: Main]** Fixed field synchronization for tables loaded from the main database and preserved existing field metadata when imported physical table names include the configured prefix ([#11327](https://github.com/nocobase/nocobase/pull/11327))

- **[Workflow: Loop node]** Fixed scope variables being unavailable when configuring conditions on top-level loops. ([#11583](https://github.com/nocobase/nocobase/pull/11583))

- **[Notification manager]** Notification delivery stops with a clear error when a workflow supplies an invalid user selection. ([#11680](https://github.com/nocobase/nocobase/pull/11680))

- **[Block: template (deprecated)]** Saving a legacy block template layout now requires permission to configure the interface. ([#11538](https://github.com/nocobase/nocobase/pull/11538))

- **[Backup manager]** PostgreSQL backups created with a newer pg_dump major version are now rejected before restoration when the installed pg_restore is older. ([#11585](https://github.com/nocobase/nocobase/pull/11585))

- **[Multi-space]** Fixed images and file previews returning 404 when opened from records in the selected space.

- **[Data source: REST API]**
  - Fixed a TypeScript error that blocked release builds of the REST API data source plugin.

  - Fixed an issue where REST API collection fields could fail to save after clearing and re-extracting them, or lose edits to their display names.

- **[Data source: External SQL Server]** The external SQL Server data source now lists only tables and views in the dbo schema.

- **[Migration manager]**
  - PostgreSQL migrations now exclude unrelated sequences, so selected tables can be restored even when the target lacks schemas used only by other tables.

  - Fixed PostgreSQL migrations losing lines that begin with `--` in multiline fields, changing line endings, or failing to restore the exported data.

- **[Data source: External Oracle]** Oracle Thin now lists tables from the configured schema, flags previously selected tables that are unavailable, and reports an error when a newly selected table is unavailable.

